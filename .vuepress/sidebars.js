//大侧边栏配置
const getDocPath = require('./getDocPath')
module.exports ={
    "/docs/README/": getDocPath("/docs/README/"),//首页README的侧边栏
    "/docs/guids/": getDocPath("/docs/guids/"),//首页Guide的侧边栏
    "/docs/old/": getDocPath('/docs/old'),//指定文件夹生成侧边栏,手动写法见那个文件
    //old是以前的数据挖掘没整理进笔记里
    "/blogs/python/shu-ju-wa-jue/": getDocPath('/blogs/python/shu-ju-wa-jue/'),
    "/blogs/python/pa-chong/":['基础爬虫','Scrapy爬虫','Scrapy-Django联动爬虫','Scrapy-redis分布式爬虫'],
    "/blogs/python/yu-fa-he-ku/":['python语法技巧','python语言进阶','py踩坑记录','pyautogui'],
    "/Courses/ji-suan-ji-wang-luo-zi-ding-xiang-xia/": getDocPath('/Courses/ji-suan-ji-wang-luo-zi-ding-xiang-xia/'),
    "/Courses/wang-dao-cao-zuo-xi-tong/": getDocPath('/Courses/wang-dao-cao-zuo-xi-tong/'),
    "/Courses/wang-dao-shu-ju-jie-gou/": getDocPath('/Courses/wang-dao-shu-ju-jie-gou/'),
    "/Courses/CSAPP/": getDocPath('/Courses/CSAPP/'),
    "/Courses/Sql-bi-zhi-bi-hui/": getDocPath('/Courses/Sql-bi-zhi-bi-hui/'),

}