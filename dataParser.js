// 数据解析工具
function parseSQLData() {
  // 从SQL文件解析的图书数据
  const books = [
{
  id: 1,
  title: '额尔古纳河右岸',
  author: '迟子建',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 2,
  title: '人为什么会生病',
  author: '本杰明• 比克曼',
  category: '科普',
  description: '暂无简介'
},
{
  id: 3,
  title: '经济学的思维方式·现实应用篇',
  author: '托马斯•索维尔',
  category: '经管',
  description: '暂无简介'
},
{
  id: 4,
  title: '天堂的喷泉',
  author: '阿瑟•克拉克',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 5,
  title: '大叔',
  author: '马家辉',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 6,
  title: '燃烧的法庭',
  author: '约翰•迪克森•卡尔',
  category: '推理',
  description: '暂无简介'
},
{
  id: 7,
  title: '鼠之夜',
  author: '连城三纪彦 ',
  category: '推理',
  description: '暂无简介'
},
{
  id: 8,
  title: '机器人大师',
  author: '斯坦尼斯瓦夫·莱姆',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 9,
  title: '营销管理',
  author: '菲利普·科特勒',
  category: '经管',
  description: '暂无简介'
},
{
  id: 10,
  title: '惶然录',
  author: '费尔南多•佩索阿',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 11,
  title: '可能性的艺术',
  author: '刘瑜',
  category: '社会',
  description: '暂无简介'
},
{
  id: 12,
  title: '午夜降临前抵达',
  author: '刘子超',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 13,
  title: '众病之王',
  author: '悉达多·穆克吉',
  category: '科普',
  description: '暂无简介'
},
{
  id: 14,
  title: '春宵苦短，少女前进吧！',
  author: '森见登美彦',
  category: '奇幻',
  description: '暂无简介'
},
{
  id: 15,
  title: '原则',
  author: '瑞·达利欧',
  category: '社会',
  description: '暂无简介'
},
{
  id: 16,
  title: '童年的终结',
  author: '阿瑟•克拉克',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 17,
  title: '植物的战斗',
  author: '汪诘·科学有故事团队',
  category: '科普',
  description: '暂无简介'
},
{
  id: 18,
  title: '时间的秩序',
  author: '卡洛·罗韦利',
  category: '科普',
  description: '暂无简介'
},
{
  id: 19,
  title: '县乡中国',
  author: '杨华',
  category: '社会',
  description: '暂无简介'
},
{
  id: 20,
  title: '阅读是一座随身携带的避难所',
  author: '威廉·萨默塞特·毛姆',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 21,
  title: '路边野餐',
  author: '阿卡迪·斯特鲁伽茨基/鲍里斯·斯特鲁伽茨基',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 22,
  title: '薛兆丰经济学讲义',
  author: '薛兆丰',
  category: '经管',
  description: '暂无简介'
},
{
  id: 23,
  title: '少数派报告',
  author: '菲利普•迪克',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 24,
  title: '村上广播',
  author: '村上春树',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 25,
  title: '马可瓦尔多',
  author: '伊塔洛·卡尔维诺',
  category: '奇幻',
  description: '暂无简介'
},
{
  id: 26,
  title: '狩猎愉快',
  author: '刘宇昆',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 27,
  title: '当我们不再理解世界',
  author: '本哈明·拉巴图特',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 28,
  title: '四个春天',
  author: '陆庆屹',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 29,
  title: '五号屠场',
  author: '库尔特•冯内古特',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 30,
  title: '天堂的喷泉',
  author: '阿瑟•克拉克',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 31,
  title: '尤比克',
  author: '菲利普•迪克',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 32,
  title: '软件体的生命周期',
  author: '特德•姜',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 33,
  title: '记一忘三二',
  author: '李娟',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 34,
  title: '这些人，那些事',
  author: '吴念真',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 35,
  title: '微尘',
  author: '陈年喜',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 36,
  title: '走夜路请放声歌唱',
  author: '李娟',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 37,
  title: '无端欢喜',
  author: '余秀华',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 38,
  title: '阴翳礼赞',
  author: '谷崎润一郎',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 39,
  title: '翦商',
  author: '李硕',
  category: '科普',
  description: '暂无简介'
},
{
  id: 40,
  title: '奇怪的生物图鉴',
  author: '沼笠航',
  category: '科普',
  description: '暂无简介'
},
{
  id: 41,
  title: '看不见的森林',
  author: '戴维•哈斯凯尔',
  category: '科普',
  description: '暂无简介'
},
{
  id: 42,
  title: '生命是什么',
  author: '王立铭',
  category: '科普',
  description: '暂无简介'
},
{
  id: 43,
  title: '伟大的博弈',
  author: '约翰·斯蒂尔·戈登',
  category: '经管',
  description: '暂无简介'
},
{
  id: 44,
  title: '大空头',
  author: '迈克尔·刘易斯',
  category: '经管',
  description: '暂无简介'
},
{
  id: 45,
  title: '奈飞文化手册',
  author: '帕蒂 麦考德',
  category: '经管',
  description: '暂无简介'
},
{
  id: 46,
  title: '不拘一格',
  author: '里德·哈斯廷斯',
  category: '科普',
  description: '暂无简介'
},
{
  id: 47,
  title: '竞争优势：透视企业护城河',
  author: '布鲁斯·格林沃尔德',
  category: '经管',
  description: '暂无简介'
},
{
  id: 48,
  title: '福格行为模型',
  author: ' B.J.福格',
  category: '经管',
  description: '暂无简介'
},
{
  id: 49,
  title: '亚马逊逆向工作法',
  author: '柯林·布里亚',
  category: '经管',
  description: '暂无简介'
},
{
  id: 50,
  title: '雪崩',
  author: '尼尔•斯蒂芬森',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 51,
  title: '完美的真空',
  author: '斯塔尼斯瓦夫·莱姆',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 52,
  title: '莱博维茨的赞歌',
  author: '小沃尔特•M.米勒',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 53,
  title: '祈祷之海',
  author: '格雷格·伊根',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 54,
  title: '闪光骇客',
  author: '格雷格·伊根',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 55,
  title: '艾比斯之梦',
  author: '山本弘',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 56,
  title: '世界杂货店',
  author: '罗伯特•谢克里',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 57,
  title: '太空孤儿',
  author: '罗伯特·海因莱因',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 58,
  title: '漫长的寒冬：太阳之战',
  author: 'A.G.利德尔',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 59,
  title: '深渊上的火',
  author: '弗诺・文奇',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 60,
  title: '复杂生命的起源',
  author: '尼克·莱恩',
  category: '科普',
  description: '暂无简介'
},
{
  id: 61,
  title: '现实不似你所见',
  author: '卡洛·罗韦利',
  category: '科普',
  description: '暂无简介'
},
{
  id: 62,
  title: '三进数世界',
  author: '格雷格·伊根',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 63,
  title: '快乐的理由',
  author: '格雷格·伊根',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 64,
  title: '世间小儿女',
  author: '汪曾祺',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 65,
  title: '王立铭进化论讲义',
  author: '王立铭',
  category: '科普',
  description: '暂无简介'
},
{
  id: 66,
  title: '鳗鱼的旅行',
  author: '帕特里克•斯文松',
  category: '科普',
  description: '暂无简介'
},
{
  id: 67,
  title: '生命进化的跃升',
  author: '尼克•莱恩',
  category: '科普',
  description: '暂无简介'
},
{
  id: 68,
  title: '变化的位面',
  author: '厄休拉·勒古恩',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 69,
  title: '债务危机',
  author: '瑞·达利欧',
  category: '经管',
  description: '暂无简介'
},
{
  id: 70,
  title: '奇妙的生命',
  author: '斯蒂芬·杰·古尔德',
  category: '科普',
  description: '暂无简介'
},
{
  id: 71,
  title: '镜厅',
  author: '巴里•埃森格林',
  category: '科普',
  description: '暂无简介'
},
{
  id: 72,
  title: '宇宙的结构',
  author: '布莱恩•格林',
  category: '科普',
  description: '暂无简介'
},
{
  id: 73,
  title: 'AI未来进行式',
  author: '李开复',
  category: '科普',
  description: '暂无简介'
},
{
  id: 74,
  title: '时间回旋',
  author: '罗伯特•威尔森',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 75,
  title: '债务危机',
  author: '瑞·达利欧',
  category: '经管',
  description: '暂无简介'
},
{
  id: 76,
  title: '交错的世界',
  author: '詹姆斯•冈恩',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 77,
  title: '亲爱的生活',
  author: '艾丽丝•门罗',
  category: '文学',
  description: '暂无简介'
},
{
  id: 78,
  title: '全球经济史',
  author: '罗伯特•C.艾伦',
  category: '经管',
  description: '暂无简介'
},
{
  id: 79,
  title: '往里走，安顿自己',
  author: '许倬云',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 80,
  title: '20世纪全球资本主义的兴衰',
  author: '杰弗里·弗里登',
  category: '社会',
  description: '暂无简介'
},
{
  id: 81,
  title: '消失的微生物',
  author: '马丁·布莱泽',
  category: '科普',
  description: '暂无简介'
},
{
  id: 82,
  title: '赌金者',
  author: '罗杰·洛温斯坦',
  category: '经管',
  description: '暂无简介'
},
{
  id: 83,
  title: '玫瑰与蠕虫',
  author: '罗伯特·伊巴图林',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 84,
  title: '肠子的小心思',
  author: '朱莉娅•恩德斯',
  category: '科普',
  description: '暂无简介'
},
{
  id: 85,
  title: '远东冰原上的猫头鹰',
  author: '乔纳森·斯拉特',
  category: '科普',
  description: '暂无简介'
},
{
  id: 86,
  title: '药物简史',
  author: '德劳因·伯奇',
  category: '科普',
  description: '暂无简介'
},
{
  id: 87,
  title: '龙蛋',
  author: '罗伯特·福沃德',
  category: '科幻',
  description: '暂无简介'
},
{
  id: 88,
  title: '文明的故事(全11卷)',
  author: '威尔•杜兰特',
  category: '社会',
  description: '暂无简介'
},
{
  id: 89,
  title: '罗马人的故事(套装共15册)',
  author: '盐野七生',
  category: '社会',
  description: '暂无简介'
},
{
  id: 90,
  title: '二十四史：文白对照版',
  author: '二十四史编委会',
  category: '社会',
  description: '暂无简介'
},
{
  id: 91,
  title: '全球通史：从史前到21世纪',
  author: '斯塔夫里阿诺斯',
  category: '社会',
  description: '暂无简介'
},
{
  id: 92,
  title: '新中国70年长篇小说典藏',
  author: '贾平凹等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 93,
  title: '茅盾文学奖传世经典15部装',
  author: '古华等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 94,
  title: '村上春树长篇代表作品集',
  author: '村上春树',
  category: '合集',
  description: '暂无简介'
},
{
  id: 95,
  title: '余华作品全集(套装共13册)',
  author: '余华',
  category: '合集',
  description: '暂无简介'
},
{
  id: 96,
  title: '企鹅欧洲史系列（套装7册）',
  author: '伊恩·克肖',
  category: '合集',
  description: '暂无简介'
},
{
  id: 97,
  title: '大秦帝国',
  author: '孙皓晖',
  category: '小说',
  description: '暂无简介'
},
{
  id: 98,
  title: '琼瑶作品全集',
  author: '琼瑶',
  category: '小说',
  description: '暂无简介'
},
{
  id: 99,
  title: '亦舒经典小说集（套装14册）',
  author: '亦舒',
  category: '小说',
  description: '暂无简介'
},
{
  id: 100,
  title: '老舍作品全集',
  author: '老舍',
  category: '小说',
  description: '暂无简介'
},
{
  id: 101,
  title: '王小波全集',
  author: '王小波',
  category: '小说',
  description: '暂无简介'
},
{
  id: 102,
  title: '沈从文全集',
  author: '沈从文',
  category: '小说',
  description: '暂无简介'
},
{
  id: 103,
  title: '汪曾祺全集',
  author: '汪曾祺',
  category: '小说',
  description: '暂无简介'
},
{
  id: 104,
  title: '契诃夫小说全集',
  author: '契科夫',
  category: '小说',
  description: '暂无简介'
},
{
  id: 105,
  title: '最后的访谈系列（套装共6册）',
  author: '群星',
  category: '小说',
  description: '暂无简介'
},
{
  id: 106,
  title: '哆啦A梦珍藏版（第一部：卷1-卷6）',
  author: '藤子·F·不二雄',
  category: '漫画',
  description: '暂无简介'
},
{
  id: 107,
  title: '世界上的鸟儿（套装共5册）',
  author: '马特·休厄尔',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 108,
  title: '万物发明指南：时间旅行者生存手册',
  author: ' 瑞安·诺思',
  category: '科普',
  description: '暂无简介'
},
{
  id: 109,
  title: '起风了艺术设定集',
  author: '吉卜力工作室',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 110,
  title: '千与千寻艺术设定集',
  author: '吉卜力工作室',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 111,
  title: '被遗忘的士兵',
  author: '盖伊·萨杰',
  category: '记实',
  description: '暂无简介'
},
{
  id: 112,
  title: '顾随全集',
  author: '顾随',
  category: '合集',
  description: '暂无简介'
},
{
  id: 113,
  title: '塑造世界经济的50项伟大发明',
  author: '蒂姆·哈福德',
  category: '科普',
  description: '暂无简介'
},
{
  id: 114,
  title: '博尔赫斯全集第二辑（套装共12册）',
  author: '博尔赫斯',
  category: '合集',
  description: '暂无简介'
},
{
  id: 115,
  title: '博尔赫斯全集第一辑',
  author: '博尔赫斯',
  category: '合集',
  description: '暂无简介'
},
{
  id: 116,
  title: '经史百家杂钞',
  author: '译 注 者 余兴安等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 117,
  title: '讲谈社·中国的历史',
  author: '宫本一夫等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 118,
  title: '讲谈社·日本的历史',
  author: '寺泽薫等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 119,
  title: '我们如何走到今天：重塑世界的6项创新',
  author: '史蒂文·约翰逊',
  category: '科普',
  description: '暂无简介'
},
{
  id: 120,
  title: '清华古典文献研究文从 · 中国古典散文精选注译',
  author: '傅璇琮',
  category: '合集',
  description: '暂无简介'
},
{
  id: 121,
  title: '史铁生文集',
  author: '史铁生',
  category: '合集',
  description: '暂无简介'
},
{
  id: 122,
  title: '讲谈社·兴亡的世界史',
  author: '讲谈社',
  category: '合集',
  description: '暂无简介'
},
{
  id: 123,
  title: '饥饿的大脑',
  author: '苏珊·怀斯·鲍尔',
  category: '科普',
  description: '暂无简介'
},
{
  id: 124,
  title: '自尊（原书第4版）',
  author: '马修·麦凯',
  category: '心理',
  description: '暂无简介'
},
{
  id: 125,
  title: '欲望的演化：人类的择偶策略 ',
  author: '戴维·巴斯',
  category: '心理',
  description: '暂无简介'
},
{
  id: 126,
  title: '北洋军阀史话',
  author: '丁中江',
  category: '合集',
  description: '暂无简介'
},
{
  id: 127,
  title: '小文艺口袋文库·知人系列',
  author: '汉娜·阿伦特等',
  category: '合集',
  description: '暂无简介'
},
{
  id: 128,
  title: '鱼翅与花椒',
  author: '扶霞·邓洛普',
  category: '社会',
  description: '暂无简介'
},
{
  id: 129,
  title: '刘震云全集作品集典藏版',
  author: '刘震云',
  category: '合集',
  description: '暂无简介'
},
{
  id: 130,
  title: '陀思妥耶夫斯基作品集',
  author: '陀思妥耶夫斯基',
  category: '合集',
  description: '暂无简介'
},
{
  id: 131,
  title: '奥威尔作品全集',
  author: '奥威尔',
  category: '合集',
  description: '暂无简介'
},
{
  id: 132,
  title: '13.67',
  author: '陈浩基',
  category: '推理',
  description: '暂无简介'
},
{
  id: 133,
  title: '埃莱娜·费兰特作品系列：碎片',
  author: '埃莱娜·费兰特',
  category: '散文',
  description: '暂无简介'
},
{
  id: 134,
  title: '这里是中国',
  author: '星球研究所',
  category: '图集',
  description: '暂无简介'
},
{
  id: 135,
  title: '这里是中国2：百年重塑山河',
  author: '星球研究所',
  category: '图集',
  description: '暂无简介'
},
{
  id: 136,
  title: '正常人',
  author: '萨利·鲁尼',
  category: '小说',
  description: '暂无简介'
},
{
  id: 137,
  title: '莫言经典作品',
  author: '莫言',
  category: '小说',
  description: '暂无简介'
},
{
  id: 138,
  title: '愤怒的葡萄',
  author: '愤怒的葡萄',
  category: '小说',
  description: '暂无简介'
},
{
  id: 139,
  title: '万物：创世',
  author: '延斯·哈德',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 140,
  title: '冰与火之歌1-5卷（全15册）',
  author: '乔治 R•R•马丁',
  category: '合集',
  description: '暂无简介'
},
{
  id: 141,
  title: '每一句话语都坐着别的眼睛',
  author: '赫塔·米勒',
  category: '散文',
  description: '暂无简介'
},
{
  id: 142,
  title: '戴面具的日子',
  author: '卡洛斯·富恩特斯',
  category: '散文',
  description: '暂无简介'
},
{
  id: 143,
  title: '向日葵不开的夏天',
  author: '道尾秀介',
  category: '推理',
  description: '暂无简介'
},
{
  id: 144,
  title: '周浩晖推理悬疑经典集',
  author: '周浩晖',
  category: '推理',
  description: '暂无简介'
},
{
  id: 145,
  title: '苏童作品精选集（套装共13册）',
  author: '苏童',
  category: '合集',
  description: '暂无简介'
},
{
  id: 146,
  title: '鲁迅全集',
  author: '鲁迅',
  category: '合集',
  description: '暂无简介'
},
{
  id: 147,
  title: '一朵桔梗花',
  author: '连城三纪彦',
  category: '推理',
  description: '暂无简介'
},
{
  id: 148,
  title: '走出非洲',
  author: '凯伦·布里克森',
  category: '小说',
  description: '暂无简介'
},
{
  id: 149,
  title: '务虚笔记',
  author: '史铁生',
  category: '散文',
  description: '暂无简介'
},
{
  id: 150,
  title: '群山之巅',
  author: '迟子建',
  category: '小说',
  description: '暂无简介'
},
{
  id: 151,
  title: '你的夏天还好吗？',
  author: '金爱烂',
  category: '小说',
  description: '暂无简介'
},
{
  id: 152,
  title: '杏仁',
  author: '孙元平',
  category: '推理',
  description: '暂无简介'
},
{
  id: 153,
  title: '邦查女孩',
  author: '甘耀明',
  category: '小说',
  description: '暂无简介'
},
{
  id: 154,
  title: '冬将军来的夏天',
  author: '甘耀明',
  category: '小说',
  description: '暂无简介'
},
{
  id: 155,
  title: '寂寞的游戏',
  author: '袁哲生',
  category: '小说',
  description: '暂无简介'
},
{
  id: 156,
  title: '夜航西飞',
  author: '柏瑞尔·马卡姆',
  category: '小说',
  description: '暂无简介'
},
{
  id: 157,
  title: '一个人的村庄',
  author: '刘亮程',
  category: '散文',
  description: '暂无简介'
},
{
  id: 158,
  title: '太平广记',
  author: '李昉',
  category: '合集',
  description: '暂无简介'
},
{
  id: 159,
  title: '四世同堂：足本',
  author: '老舍',
  category: '合集',
  description: '暂无简介'
},
{
  id: 160,
  title: '肠子，脑子，厨子：人类与食物的演化关系',
  author: '艾伦',
  category: '科普',
  description: '暂无简介'
},
{
  id: 161,
  title: '失落的卫星：深入中亚大陆的旅程',
  author: '刘子超',
  category: '游记',
  description: '暂无简介'
},
{
  id: 162,
  title: '奥威尔作品集',
  author: '奥威尔作品集',
  category: '合集',
  description: '暂无简介'
},
{
  id: 163,
  title: '康熙大帝',
  author: '二月河',
  category: '小说',
  description: '暂无简介'
},
{
  id: 164,
  title: '大江大河',
  author: '阿耐',
  category: '小说',
  description: '暂无简介'
},
{
  id: 165,
  title: '落花时节',
  author: '阿耐',
  category: '小说',
  description: '暂无简介'
},
{
  id: 166,
  title: '激荡四十年：中国企业1978—2018(全三册)',
  author: '吴晓波',
  category: '社会',
  description: '暂无简介'
},
{
  id: 167,
  title: '在新疆',
  author: '刘亮程',
  category: '小说',
  description: '暂无简介'
},
{
  id: 168,
  title: '豆子芝麻茶',
  author: '杨本芬',
  category: '小说',
  description: '暂无简介'
},
{
  id: 169,
  title: '梦里花落知多少',
  author: '三毛',
  category: '小说',
  description: '暂无简介'
},
{
  id: 170,
  title: '大明王朝1566',
  author: '刘和平',
  category: '小说',
  description: '暂无简介'
},
{
  id: 171,
  title: '苏菲的世界',
  author: '乔斯坦·贾德',
  category: '小说',
  description: '暂无简介'
},
{
  id: 172,
  title: '把地上的事往天上聊',
  author: '刘亮程',
  category: '散文',
  description: '暂无简介'
},
{
  id: 173,
  title: '窄门',
  author: '安德烈·纪德',
  category: '小说',
  description: '暂无简介'
},
{
  id: 174,
  title: '我在北京送快递',
  author: '胡安焉',
  category: '记实',
  description: '暂无简介'
},
{
  id: 175,
  title: '战争和人：全3册',
  author: '王火',
  category: '小说',
  description: '暂无简介'
},
{
  id: 176,
  title: '骚动之秋',
  author: '刘玉民',
  category: '小说',
  description: '暂无简介'
},
{
  id: 177,
  title: '白门柳',
  author: '刘斯奋',
  category: '小说',
  description: '暂无简介'
},
{
  id: 178,
  title: '琴声如诉',
  author: '玛格丽特·杜拉斯',
  category: '小说',
  description: '暂无简介'
},
{
  id: 179,
  title: '去海拉尔',
  author: '王咸',
  category: '随笔',
  description: '暂无简介'
},
{
  id: 180,
  title: '金瓯缺',
  author: '徐兴业 ',
  category: '小说',
  description: '暂无简介'
},
{
  id: 181,
  title: '凿空',
  author: '刘亮程',
  category: '散文',
  description: '暂无简介'
},
{
  id: 182,
  title: '激流三部曲：家春秋',
  author: '巴金',
  category: '小说',
  description: '暂无简介'
},
{
  id: 183,
  title: '艰辛时刻',
  author: '马里奥·巴尔加斯·略萨',
  category: '小说',
  description: '暂无简介'
},
{
  id: 184,
  title: '疼痛部',
  author: '杜布拉夫卡·乌格雷西奇',
  category: '小说',
  description: '暂无简介'
},
{
  id: 185,
  title: '巨婴国',
  author: '武志红',
  category: '心理',
  description: '暂无简介'
},
{
  id: 186,
  title: '为何家会伤人',
  author: '武志红',
  category: '心理',
  description: '暂无简介'
},
{
  id: 187,
  title: '娜斯佳的眼泪',
  author: '娜塔莎·沃丁',
  category: '小说',
  description: '暂无简介'
},
{
  id: 188,
  title: '生活的囚徒',
  author: '威廉·特雷弗',
  category: '小说',
  description: '暂无简介'
},
{
  id: 189,
  title: '哈扎尔辞典(阳本)',
  author: '帕维奇（Pavic, M.）',
  category: '科普',
  description: '暂无简介'
},
{
  id: 190,
  title: '哈扎尔词典（阴本）',
  author: '帕维奇（Pavic, M.）',
  category: '科普',
  description: '暂无简介'
},
{
  id: 191,
  title: '复明症漫记',
  author: '若泽·萨拉马戈',
  category: '推理',
  description: '暂无简介'
},
{
  id: 192,
  title: '煎饼坪',
  author: '约翰·斯坦贝克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 193,
  title: '人鼠之间',
  author: '约翰·斯坦贝克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 194,
  title: '小红马',
  author: '约翰·斯坦贝克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 195,
  title: '月亮下去了',
  author: '约翰·斯坦贝克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 196,
  title: '罐头厂街',
  author: '约翰·斯坦贝克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 197,
  title: '洞',
  author: '萨奇尔',
  category: '小说',
  description: '暂无简介'
},
{
  id: 198,
  title: '真情',
  author: '索尔·贝娄',
  category: '小说',
  description: '暂无简介'
},
{
  id: 199,
  title: '陆犯焉识',
  author: '严歌苓',
  category: '小说',
  description: '暂无简介'
},
{
  id: 200,
  title: '老师好美',
  author: '严歌苓',
  category: '小说',
  description: '暂无简介'
},
{
  id: 201,
  title: '死屋手记',
  author: '陀思妥耶夫斯基',
  category: '小说',
  description: '暂无简介'
},
{
  id: 202,
  title: '白夜',
  author: '陀思妥耶夫斯基',
  category: '小说',
  description: '暂无简介'
},
{
  id: 203,
  title: '艺术的故事',
  author: '贡布里希（Sir E.H.Gombrich）',
  category: '社会',
  description: '暂无简介'
},
{
  id: 204,
  title: '如何有效阅读一本书：超实用笔记读书法',
  author: '奥野宣之',
  category: '工具',
  description: '暂无简介'
},
{
  id: 205,
  title: '今日简史：人类命运大议题',
  author: '尤瓦尔·赫拉利',
  category: '社会',
  description: '暂无简介'
},
{
  id: 206,
  title: '麻省理工深度思考法',
  author: '平井孝志',
  category: '工具',
  description: '暂无简介'
},
{
  id: 207,
  title: '世界观：现代人必须要懂的科学哲学和科学史',
  author: '理查德·德威特',
  category: '社会',
  description: '暂无简介'
},
{
  id: 208,
  title: '深度休息：在焦虑时代治愈自己的10个心理学方案',
  author: '克劳迪娅·哈蒙德',
  category: '心理',
  description: '暂无简介'
},
{
  id: 209,
  title: '麦肯锡结构化战略思维',
  author: '周国元',
  category: '心理',
  description: '暂无简介'
},
{
  id: 210,
  title: '白鹿原',
  author: '陈忠实',
  category: '小说',
  description: '暂无简介'
},
{
  id: 211,
  title: '躲在蚊子后面的大象',
  author: '恩斯特弗里德·哈尼希',
  category: '心理',
  description: '暂无简介'
},
{
  id: 212,
  title: '别想太多啦',
  author: '名取芳彦',
  category: '心理',
  description: '暂无简介'
},
{
  id: 213,
  title: '动物农场',
  author: '乔治·奥威尔',
  category: '小说',
  description: '暂无简介'
},
{
  id: 214,
  title: '德米安',
  author: '埃米尔·辛克莱',
  category: '小说',
  description: '暂无简介'
},
{
  id: 215,
  title: '克林索尔的最后夏天',
  author: '赫尔曼·黑塞',
  category: '小说',
  description: '暂无简介'
},
{
  id: 216,
  title: '当下的力量',
  author: '埃克哈特·托利',
  category: '心理',
  description: '暂无简介'
},
{
  id: 217,
  title: '不被大风吹倒',
  author: '莫言',
  category: '小说',
  description: '暂无简介'
},
{
  id: 218,
  title: '生死结',
  author: '尹学芸',
  category: '小说',
  description: '暂无简介'
},
{
  id: 219,
  title: '不原谅也没关系',
  author: '皮特·沃克',
  category: '心理',
  description: '暂无简介'
},
{
  id: 220,
  title: '也许你该找个人聊聊',
  author: '洛莉·戈特利布',
  category: '心理',
  description: '暂无简介'
},
{
  id: 221,
  title: '刀锋',
  author: '毛姆',
  category: '小说',
  description: '暂无简介'
},
{
  id: 222,
  title: '汤姆的午夜花园',
  author: '菲莉帕•皮尔斯',
  category: '小说',
  description: '暂无简介'
},
{
  id: 223,
  title: '五个街角',
  author: '马里奥·巴尔加斯·略萨',
  category: '小说',
  description: '暂无简介'
},
{
  id: 224,
  title: '绿房子',
  author: '马里奥·巴尔加斯·略萨',
  category: '小说',
  description: '暂无简介'
},
{
  id: 225,
  title: '荆棘鸟',
  author: '麦卡洛',
  category: '小说',
  description: '暂无简介'
},
{
  id: 226,
  title: '迷宫中的将军',
  author: '马尔克斯',
  category: '小说',
  description: '暂无简介'
},
{
  id: 227,
  title: '植物妻子',
  author: '韩江',
  category: '小说',
  description: '暂无简介'
},
{
  id: 228,
  title: '不做告别',
  author: '韩江',
  category: '小说',
  description: '暂无简介'
},
{
  id: 229,
  title: '失语者',
  author: '韩江',
  category: '小说',
  description: '暂无简介'
},
{
  id: 230,
  title: '康熙的红票：全球化中的清朝',
  author: '孙立天',
  category: '社会',
  description: '暂无简介'
},
{
  id: 231,
  title: '我用中文做了场梦',
  author: '亚历',
  category: '小说',
  description: '暂无简介'
},
{
  id: 232,
  title: '暗处的女儿',
  author: '埃莱娜 · 费兰特',
  category: '小说',
  description: '暂无简介'
},
{
  id: 233,
  title: '大国的命运：从政治危机到国家现代化',
  author: '包刚升',
  category: '小说',
  description: '暂无简介'
},
{
  id: 234,
  title: '后翼弃兵',
  author: '沃尔特·特维斯',
  category: '小说',
  description: '暂无简介'
},
{
  id: 235,
  title: '克林索尔的最后夏天',
  author: '赫尔曼·黑塞',
  category: '小说',
  description: '暂无简介'
},
{
  id: 236,
  title: '喜剧的本质',
  author: '亨利·柏格森',
  category: '社会',
  description: '暂无简介'
},
{
  id: 237,
  title: '天堂之奶：一部鸦片全球史',
  author: '露西·英格里斯',
  category: '社会',
  description: '暂无简介'
},
{
  id: 238,
  title: '荒原狼',
  author: '黑塞',
  category: '小说',
  description: '暂无简介'
},
{
  id: 239,
  title: '在轮下',
  author: '赫尔曼·黑塞',
  category: '合集',
  description: '暂无简介'
},
{
  id: 240,
  title: '源乡',
  author: '季玉',
  category: '小说',
  description: '暂无简介'
},
{
  id: 241,
  title: '精神与爱欲',
  author: '赫尔曼·黑塞',
  category: '小说',
  description: '暂无简介'
},
{
  id: 242,
  title: '红玫瑰与白玫瑰',
  author: '张爱玲',
  category: '小说',
  description: '暂无简介'
},
{
  id: 243,
  title: '气候赌场：全球变暖的风险、不确定性与经济学',
  author: '威廉·诺德豪斯',
  category: '社会',
  description: '暂无简介'
},
{
  id: 244,
  title: '我的名字叫红',
  author: '帕慕克',
  category: '小说',
  description: '暂无简介'
},
{
  id: 245,
  title: '博弈论',
  author: '约翰·冯·诺依曼',
  category: '社会',
  description: '暂无简介'
},
{
  id: 246,
  title: 'DK伟大的世界地图',
  author: '英国DK公司',
  category: '社会',
  description: '暂无简介'
},
{
  id: 247,
  title: '茶杯里的风暴：用日常之物揭开万物之理',
  author: '海伦·切尔斯基',
  category: '科普',
  description: '暂无简介'
},
{
  id: 248,
  title: '阿勒泰的角落',
  author: '李娟',
  category: '小说',
  description: '暂无简介'
},
{
  id: 249,
  title: '沉思录',
  author: '马可·奥勒留',
  category: '哲学',
  description: '暂无简介'
},
{
  id: 250,
  title: '一读就上瘾的中国史',
  author: '温伯陵',
  category: '历史',
  description: '暂无简介'
},
{
  id: 251,
  title: '沧城',
  author: '阿措',
  category: '小说',
  description: '暂无简介'
},
{
  id: 252,
  title: '国家地理终极观星指南',
  author: '霍华德·施耐德',
  category: '科普',
  description: '暂无简介'
},
{
  id: 253,
  title: '我从未如此眷恋人间',
  author: '汪曾祺 史铁生 等',
  category: '散文',
  description: '暂无简介'
},
{
  id: 254,
  title: '你今天真好看',
  author: '莉兹•克里莫',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 255,
  title: '长安客',
  author: '北溟鱼',
  category: '小说',
  description: '暂无简介'
},
{
  id: 256,
  title: '食南之徒',
  author: '马伯庸',
  category: '小说',
  description: '暂无简介'
},
{
  id: 257,
  title: '长安击壤歌',
  author: '陈渐',
  category: '小说',
  description: '暂无简介'
},
{
  id: 258,
  title: '寻欢作乐',
  author: '毛姆',
  category: '小说',
  description: '暂无简介'
},
{
  id: 259,
  title: '万古江河：中国历史文化的转折与开展',
  author: '许倬云',
  category: '历史',
  description: '暂无简介'
},
{
  id: 260,
  title: '征服与革命中的阿拉伯人：1516年至今',
  author: '尤金·罗根',
  category: '小说',
  description: '暂无简介'
},
{
  id: 261,
  title: '沿着季风的方向',
  author: '刘子超',
  category: '社会',
  description: '暂无简介'
},
{
  id: 262,
  title: '季风吹拂的土地：现代东南亚的碎裂与重生',
  author: '迈克尔·瓦提裘提斯',
  category: '社会',
  description: '暂无简介'
},
{
  id: 263,
  title: '我可以咬一口吗',
  author: '莉兹·克里莫',
  category: '绘本',
  description: '暂无简介'
},
{
  id: 264,
  title: '看不见的中东：深入日常生活的中东之旅',
  author: '姚璐',
  category: '社会',
  description: '暂无简介'
},
{
  id: 265,
  title: '造物须臾',
  author: '牛健哲',
  category: '小说',
  description: '暂无简介'
},
{
  id: 266,
  title: '金钱心理学：财富、人性和幸福的永恒真相',
  author: '摩根·豪泽尔',
  category: '经管',
  description: '暂无简介'
},
{
  id: 267,
  title: '念念远山',
  author: '罗伯特·麦克法伦',
  category: '小说',
  description: '暂无简介'
},
{
  id: 268,
  title: '黑夜的狂欢',
  author: '韩江',
  category: '小说',
  description: '暂无简介'
},
{
  id: 269,
  title: '少女音乐盒',
  author: '北山猛邦',
  category: '推理',
  description: '暂无简介'
},
{
  id: 270,
  title: '',
  author: '',
  category: '',
  description: '暂无简介'
},
{
  id: 271,
  title: '',
  author: '',
  category: '',
  description: '暂无简介'
},
{
  id: 272,
  title: '',
  author: '',
  category: '',
  description: '暂无简介'
},
{
  id: 273,
  title: '',
  author: '',
  category: '',
  description: '暂无简介'
}

  ];

  return books;
}

// 兼容浏览器与 Node 的导出方式
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parseSQLData
  };
} else {
  window.dataParser = {
    parseSQLData
  };
}