//大侧边栏配置
const getDocPath = require('./getDocPath')
module.exports ={
    "/docs/README/": getDocPath("/docs/README/"),//首页README的侧边栏
    "/docs/guids/": getDocPath("/docs/guids/"),//首页Guide的侧边栏
    "/docs/old/": getDocPath('/docs/old'),//指定文件夹生成侧边栏,手动写法见那个文件
    //old是以前的数据挖掘没整理进笔记里
    "/blogs/python/pachong/": ['基础爬虫','Scrapy爬虫','Scrapy-Django联动爬虫','Scrapy-redis分布式爬虫'],
    "/blogs/python/shujuwajue/": getDocPath('/blogs/python/shujuwajue'),
}



