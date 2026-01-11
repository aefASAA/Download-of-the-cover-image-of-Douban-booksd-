#!/usr/bin/env node
/**
 * downloadDoubanCovers_final_with_id.js
 * 已整合：使用提供 Cookie + 更真实请求头 + 支持相对链接与 script 兜底解析
 *
 * 用法示例（先 dry-run）:
 * node downloadDoubanCovers_final_with_id.js --data "./dataParser.js" --out "./covers" --start-id 51 --end-id 60 --dry-run --verbose --delay 5000
 *
 * 说明：脚本内 COOKIE 常量使用你提供的值；如需换 Cookie，编辑本文件替换 COOKIE 字符串。
 */

const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');
const cheerio = require('cheerio');

// ====== 把你的 Cookie 放在这里（需要完整 cookie 字段） ======
const COOKIE = 'bid=TXWzKCUC8yE; viewed="26295450_35023465_27024398"; dbcl2="201002990:GrSzVSXArtg"; push_noty_num=0; push_doumail_num=0; ck=BkxG';


// ====== 参数解析 ======
const args = require('node:util').parseArgs({
  options: {
    data: { type: 'string', default: './dataParser.js' },
    out: { type: 'string', default: './covers' },
    ext: { type: 'string', default: 'jpg,png' },
    delay: { type: 'string', default: '3000' },
    jitter: { type: 'string', default: '0.4' },
    'dry-run': { type: 'boolean', default: false },
    format: { type: 'string', default: 'category_title' },
    retries: { type: 'string', default: '2' },
    maxCandidates: { type: 'string', default: '3' },
    batchSize: { type: 'string', default: '0' },
    batchPause: { type: 'string', default: '600000' },
    verbose: { type: 'boolean', default: false },
    'start-id': { type: 'string', default: '0' },
    'end-id': { type: 'string', default: String(Number.MAX_SAFE_INTEGER) },
  }
}).values;

const DATA_FILE = path.resolve(process.cwd(), args.data);
const OUT_DIR = path.resolve(process.cwd(), args.out);
const ALLOWED_EXT = args.ext.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
const BASE_DELAY = Math.max(200, parseInt(args.delay, 10) || 3000);
const JITTER_RATIO = Math.max(0, Math.min(1, parseFloat(args.jitter || '0.4')));
const DRY_RUN = !!args['dry-run'];
const FORMAT = args.format || 'category_title';
const RETRIES = Math.max(0, parseInt(args.retries || '2', 10));
const MAX_CANDIDATES = Math.max(1, parseInt(args.maxCandidates || '3', 10));
const BATCH_SIZE = Math.max(0, parseInt(args.batchSize || '0', 10));
const BATCH_PAUSE = Math.max(0, parseInt(args.batchPause || '600000', 10));
const VERBOSE = !!args.verbose;
const START_ID = parseInt(args['start-id'] || '0', 10) || 0;
const END_ID = parseInt(args['end-id'] || String(Number.MAX_SAFE_INTEGER), 10) || Number.MAX_SAFE_INTEGER;

const PROGRESS_FILE = path.join(OUT_DIR, 'progress.json');
const FAILURES_FILE = path.join(OUT_DIR, 'failures.csv');

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/120.0',
];

function safeName(s) {
  return String(s || '')
    .replace(/\s+/g, '_')
    .replace(/[\\\/:*?"<>|]+/g, '')
    .replace(/[\x00-\x1f\x7f]+/g, '')
    .slice(0, 200);
}

function randomBetween(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function pickUA() { return USER_AGENTS[Math.floor(Math.random()*USER_AGENTS.length)]; }

function baseDelayWithJitter() {
  const low = Math.floor(BASE_DELAY * Math.max(0, 1 - JITTER_RATIO));
  const high = Math.ceil(BASE_DELAY * (1 + JITTER_RATIO));
  return randomBetween(low, high);
}

function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }

// ====== 更真实的 fetchTextWithBackoff（含完整 headers + Cookie） ======
async function fetchTextWithBackoff(url, referer='https://book.douban.com') {
  let attempt = 0;
  const MAX_RETRIES_LOCAL = 4;
  while (true) {
    attempt++;
    try {
      const u = new URL(url);
      const headers = {
        'User-Agent': pickUA(),
        'Referer': referer,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Connection': 'keep-alive',
        'Cookie': COOKIE
      };
      const opts = {
        hostname: u.hostname,
        path: u.pathname + (u.search || ''),
        protocol: u.protocol,
        headers,
      };
      if (VERBOSE) console.log('  GET', url);

      const resText = await new Promise((resolve, reject) => {
        const req = https.get(opts, (res) => {
          let data = '';
          res.setEncoding('utf8');
          res.on('data', c => data += c);
          res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
        }).on('error', reject);
        req.setTimeout(25000, () => { req.destroy(new Error('timeout')); });
      });

      const status = resText.status || 200;
      if (status === 429) {
        const ra = resText.headers && (resText.headers['retry-after'] || resText.headers['Retry-After']);
        let waitMs = BASE_DELAY * 2;
        if (ra && /^\d+$/.test(String(ra).trim())) waitMs = parseInt(ra,10)*1000;
        else if (ra) {
          const t = Date.parse(String(ra));
          if (!Number.isNaN(t)) waitMs = Math.max(0, t - Date.now());
        }
        console.warn(`429 received. Waiting ${waitMs}ms before retry.`);
        await sleep(waitMs || baseDelayWithJitter());
        if (attempt > MAX_RETRIES_LOCAL) throw new Error('Too many 429 retries');
        continue;
      }
      if (status >= 500) {
        const backoff = Math.pow(2, attempt) * 1000 + randomBetween(200,800);
        console.warn(`Server error ${status}, backing off ${backoff}ms`);
        await sleep(backoff);
        if (attempt > MAX_RETRIES_LOCAL) throw new Error('Server error ' + status);
        continue;
      }
      return resText;
    } catch (err) {
      const backoff = Math.pow(2, attempt) * 800 + randomBetween(200,800);
      console.warn(`fetchText error, retry ${attempt}, reason: ${err.message || err}. Backing off ${backoff}ms`);
      await sleep(backoff);
      if (attempt >= MAX_RETRIES_LOCAL) throw err;
    }
  }
}

// ====== fetchBinaryWithBackoff（不变，含简单重试） ======
async function fetchBinaryWithBackoff(url, referer='https://book.douban.com') {
  let attempt = 0;
  while (true) {
    attempt++;
    try {
      const u = new URL(url);
      const headers = {
        'User-Agent': pickUA(),
        'Referer': referer,
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Cookie': COOKIE
      };
      const opts = {
        hostname: u.hostname,
        path: u.pathname + (u.search || ''),
        protocol: u.protocol,
        headers,
      };
      const resBuf = await new Promise((resolve, reject) => {
        const req = https.get(opts, (res) => {
          if (res.statusCode && res.statusCode >= 400) return reject(new Error('HTTP ' + res.statusCode));
          const chunks = [];
          res.on('data', c => chunks.push(c));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        }).on('error', reject);
        req.setTimeout(20000, () => { req.destroy(new Error('timeout')); });
      });
      return resBuf;
    } catch (err) {
      const backoff = Math.pow(2, attempt) * 800 + randomBetween(200,800);
      console.warn(`fetchBinary error, retry ${attempt}, reason: ${err.message || err}. Backing off ${backoff}ms`);
      await sleep(backoff);
      if (attempt > RETRIES) throw err;
    }
  }
}

// ====== 更稳健的 findSubjectCandidates（支持相对链接、script 兜底抽取） ======
async function findSubjectCandidates(title, n=3) {
  const q = encodeURIComponent(title);
  const searchUrl = `https://search.douban.com/book/subject_search?search_text=${q}&cat=1001`;
  if (VERBOSE) console.log('  searchUrl:', searchUrl);

  const { status, body } = await fetchTextWithBackoff(searchUrl);
  if (!body) return { searchUrl, candidates: [] };

  const $ = cheerio.load(body);
  const candidates = new Set();

  // 1) 抓取页面中所有 a[href*="/subject/"]
  $('a[href*="/subject/"]').each((i, el) => {
    if (candidates.size >= n) return;
    let href = $(el).attr('href') || '';
    href = href.trim();
    if (!href) return;
    if (href.startsWith('//')) href = 'https:' + href;
    if (href.startsWith('/')) href = 'https://book.douban.com' + href;
    const m = href.match(/https?:\/\/book\.douban\.com\/subject\/\d+\/?/);
    if (m) candidates.add(m[0].endsWith('/') ? m[0] : m[0] + '/');
  });

  // 2) body 中直接匹配 /subject/12345 形式的相对链接
  if (candidates.size < n) {
    const rawMatches = (body.match(/\/subject\/\d+\/?/g) || []).map(s => 'https://book.douban.com' + (s.startsWith('/')?s:'/'+s));
    for (const u of rawMatches) {
      if (candidates.size >= n) break;
      candidates.add(u.endsWith('/')?u:u+'/');
    }
  }

  // 3) 从 script 标签中兜底抽取（可能有 JSON 或 SSR 内容）
  if (candidates.size < n) {
    const scripts = body.match(/<script[^>]*>[\s\S]*?<\/script>/g) || [];
    for (const s of scripts) {
      if (candidates.size >= n) break;
      const m = s.match(/\/subject\/\d+\/?/g);
      if (m) {
        m.forEach(rel => {
          if (candidates.size >= n) return;
          const u = 'https://book.douban.com' + (rel.startsWith('/')?rel:('/'+rel));
          candidates.add(u.endsWith('/')?u:u+'/');
        });
      }
    }
  }

  // 4) 如果仍然为空且 verbose，打印 body 片段便于调试
  if (candidates.size === 0 && VERBOSE) {
    console.warn('  Warning: no candidates extracted. BODY SNIPPET:\n', body.slice(0, 1200));
  }

  return { searchUrl, candidates: [...candidates].slice(0, n) };
}


// ====== extractCoverCandidates (解析详情页封面候选) ======
async function extractCoverCandidates(subjectUrl) {
  try {
    const { status, body } = await fetchTextWithBackoff(subjectUrl);
    if (!body) return [];
    const $ = cheerio.load(body);
    const cand = [];
    // common selectors
    $('#mainpic img').each((i, el) => {
      const s = ($(el).attr('src') || $(el).attr('data-src') || '').trim();
      if (s) cand.push(s);
    });
    ['.bookcover img', '.cover img', '.article img', '.topic-cover img', '.nbg img', '.related-pic img'].forEach(sel => {
      $(sel).each((i, el) => {
        const s = ($(el).attr('src') || $(el).attr('data-src') || '').trim();
        if (s) cand.push(s);
      });
    });
    // meta og:image
    const og = $('meta[property="og:image"]').attr('content') || $('meta[name="og:image"]').attr('content');
    if (og) cand.push(og);
    // data in scripts or inline JSON: match http(s) ... jpg|png
    const imgMatches = body.match(/https?:\/\/[^"'()<>\\s]+?\.(?:jpe?g|png|gif)(?:\?[^"'<>\\s]*)?/ig) || [];
    for (const u of imgMatches) cand.push(u);
    // normalize URLs: handle protocol-relative and relative paths
    const norm = cand.map(u => {
      if (!u) return null;
      let v = u.trim();
      if (v.startsWith('//')) v = 'https:' + v;
      if (v.startsWith('/')) v = 'https://book.douban.com' + v;
      return v;
    }).filter(Boolean);
    // dedupe and return
    return Array.from(new Set(norm));
  } catch (e) {
    if (VERBOSE) console.warn('extractCoverCandidates error', e && e.message);
    return [];
  }
}


// ====== progress & failures helpers ======
async function loadProgress() {
  try {
    if (fsSync.existsSync(PROGRESS_FILE)) {
      const raw = fsSync.readFileSync(PROGRESS_FILE, 'utf-8');
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    }
  } catch (e) { /* ignore */ }
  return new Set();
}
async function saveProgress(set) {
  try {
    await fs.mkdir(path.dirname(PROGRESS_FILE), { recursive: true });
    await fs.writeFile(PROGRESS_FILE, JSON.stringify(Array.from(set), null, 2), 'utf-8');
  } catch (e) { /* ignore */ }
}
async function appendFailureRow(row) {
  try {
    await fs.mkdir(path.dirname(FAILURES_FILE), { recursive: true });
    const line = `"${(row.title||'').replace(/"/g,'""')}","${(row.reason||'').replace(/"/g,'""')}","${(JSON.stringify(row.data||'')||'').replace(/"/g,'""')}"\n`;
    if (!DRY_RUN) await fs.appendFile(FAILURES_FILE, line, 'utf-8');
  } catch (e) { /* ignore */ }
}

// ====== main ======
async function main() {
  let records = [];
  try {
    const { parseSQLData } = require(DATA_FILE);
    records = (parseSQLData && Array.isArray(parseSQLData()) ? parseSQLData() : [])
      .filter(r => r && typeof r.id !== 'undefined')
      .map(r => ({ id: r.id, title: String(r.title || '').trim(), category: String(r.category || '').trim(), tags: r.tags || r.tag || '', author: r.author || '' }));
  } catch (e) {
    console.error('无法读取 dataParser.js:', e.message || e);
    process.exit(1);
  }
  if (!records.length) {
    console.error('dataParser.js 没有返回有效带 id 的记录');
    process.exit(1);
  }

  const totalBefore = records.length;
  records = records.filter(r => (r.id >= START_ID && r.id <= END_ID));
  console.log(`读取 ${totalBefore} 条记录，按 id 范围 [${START_ID}, ${END_ID}] 筛选后 ${records.length} 条将被处理。`);

  if (!DRY_RUN) await fs.mkdir(OUT_DIR, { recursive: true });
  const completed = await loadProgress();

  console.log('already completed:', completed.size);

  const failures = [];
  let batchCounter = 0;

  for (let idx = 0; idx < records.length; idx++) {
    const rec = records[idx];
    const progressKey = `id:${rec.id}`;
    if (completed.has(progressKey)) {
      if (VERBOSE) console.log(`[SKIP] 已完成 id=${rec.id}: ${rec.title}`);
      continue;
    }

    if (BATCH_SIZE > 0 && batchCounter >= BATCH_SIZE) {
      console.log(`已完成一批 ${BATCH_SIZE} 项。暂停 ${BATCH_PAUSE} ms ...`);
      await sleep(BATCH_PAUSE);
      batchCounter = 0;
    }

    console.log(`\n[${idx+1}/${records.length}] 处理 id=${rec.id} 标题: ${rec.title}`);
    try {
      const { searchUrl, candidates } = await findSubjectCandidates(rec.title, MAX_CANDIDATES);
      if (VERBOSE) console.log('  searchUrl:', searchUrl);
      console.log('  candidates:', candidates.slice(0,5));

      let foundCover = null;
      let usedSubject = null;

      for (const subj of candidates) {
        const covers = await extractCoverCandidates(subj);
        if (VERBOSE) console.log('    covers from', subj, '->', covers.slice(0,4));
        if (covers && covers.length) {
          foundCover = covers[0];
          usedSubject = subj;
          break;
        }
        await sleep(baseDelayWithJitter());
      }

      if (!foundCover) {
        console.warn('  未找到封面（候选页均无）');
        failures.push({ id: rec.id, title: rec.title, reason: 'no-cover', data: { searchUrl, candidates } });
        await appendFailureRow({ title: rec.title, reason: 'no-cover', data: { searchUrl, candidates } });
        await sleep(baseDelayWithJitter());
        continue;
      }

      const extMatch = foundCover.match(/\\.(jpe?g|png|gif)(?:\\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const tagPart = FORMAT === 'tag_title' ? (rec.tags || rec.category || '') : (rec.category || rec.tags || '');
      const filename = safeName(`${String(rec.id).padStart(3,'0')}_${tagPart}_${rec.title}`) + '.' + ext;
      const outPath = path.join(OUT_DIR, filename);
      console.log('  将保存为:', outPath);

      if (DRY_RUN) {
        completed.add(progressKey);
        await saveProgress(completed);
        batchCounter++;
        await sleep(baseDelayWithJitter());
        continue;
      }

      let buf = null;
      try {
        buf = await fetchBinaryWithBackoff(foundCover, usedSubject || searchUrl);
      } catch (err) {
        console.warn('  下载失败:', err.message || err);
        failures.push({ id: rec.id, title: rec.title, reason: 'download-failed', data: { foundCover, usedSubject } });
        await appendFailureRow({ title: rec.title, reason: 'download-failed', data: { foundCover, usedSubject } });
        await sleep(baseDelayWithJitter());
        continue;
      }

      // write file (handle duplicates by unique suffix)
      let finalPath = outPath;
      if (fsSync.existsSync(finalPath)) {
        const base = path.basename(finalPath, path.extname(finalPath));
        const dir = path.dirname(finalPath);
        let i = 1;
        let next;
        do {
          next = path.join(dir, `${base} (${i})${path.extname(finalPath)}`);
          i++;
        } while (fsSync.existsSync(next));
        finalPath = next;
      }
      await fs.writeFile(finalPath, buf);
      console.log('  已下载并保存:', finalPath);

      completed.add(progressKey);
      await saveProgress(completed);
      batchCounter++;

      await sleep(baseDelayWithJitter());
    } catch (err) {
      console.error('  处理出错:', err.message || err);
      failures.push({ id: rec.id, title: rec.title, reason: 'error', data: String(err) });
      await appendFailureRow({ title: rec.title, reason: 'error', data: String(err) });
      await sleep(baseDelayWithJitter());
    }
  }

  console.log('\\n处理结束。总失败数:', failures.length);
  if (failures.length) console.log('失败示例:', failures.slice(0,5));
  console.log('已完成项数:', (await loadProgress()).size);
}

main().catch(e => { console.error('致命错误:', e); process.exit(1); });