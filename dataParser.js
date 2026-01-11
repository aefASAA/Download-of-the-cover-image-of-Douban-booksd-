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
