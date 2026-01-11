[Uploading README.md…]()
# Douban Book Cover Downloader

基于 Node.js 的豆瓣图书封面批量下载脚本，支持断点续跑、失败重试与限速防封。

## 环境要求

- Node.js ≥ 18
- 可访问 book.douban.com
- 有效豆瓣 Cookie

## 安装依赖

```bash
npm init -y
npm install cheerio
```

## 配置

在脚本中替换你的豆瓣 Cookie：

```js
const COOKIE = 'bid=xxx; dbcl2="xxx"; ck=xxx';
```

## 数据源格式（dataParser.js）

```js
function parseSQLData() {
  return [
    { id: 1, title: '三体', category: '科幻' }
  ];
}

module.exports = { parseSQLData };
```

## 使用方式

```
注意该脚本必须与dataParser.js文件在同一文件夹中，dataParser.js文件夹用于存储需要下载的图书
```

### 正式下载

```
node downloadDoubanCovers_final_with_id_fixed.js --data "./dataParser.js" --out "./covers" --start-id 1 --end-id 10 --verbose --delay 4000
```
建议单次最大为10本，id为编号使用

## 常用参数

| 参数 | 说明 |
|----|----|
| --out | 输出目录 |
| --delay | 请求间隔（ms） |
| --dry-run | 仅测试 |
| --verbose | 调试输出 |
| --start-id / --end-id | ID 范围 |
| --batchSize | 分批数量 |
| --batchPause | 批次暂停 |

## 输出说明

- covers/：封面图片
- progress.json：断点记录
- failures.csv：失败记录

## 注意事项

- 建议提高 delay 防止 429
- Cookie 失效需重新更新
- 支持重复执行，自动跳过已完成项
