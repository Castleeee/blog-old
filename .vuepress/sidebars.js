//大侧边栏配置
const getDocPath = require('./getDocPath')
module.exports ={
    "/docs/README/": getDocPath("/docs/README/"),//首页README的侧边栏
    "/docs/guids/": getDocPath("/docs/guids/"),//首页Guide的侧边栏
    "/docs/old/": getDocPath('/docs/old'),//指定文件夹生成侧边栏,手动写法见那个文件
    //old是以前的数据挖掘没整理进笔记里
    "/blogs/python/shu-ju-wa-jue/": getDocPath('/blogs/python/shu-ju-wa-jue/'),
    "/blogs/python/yu-fa-he-ku/":['python快速复习','python语言进阶','python库','py自动化办公','py踩坑记录'],
    "/blogs/python/pa-chong/":['基础爬虫','Scrapy爬虫','Scrapy-redis分布式爬虫','Scrapy-Django联动爬虫'],
    "/Courses/ji-suan-ji-wang-luo-zi-ding-xiang-xia/": getDocPath('/Courses/ji-suan-ji-wang-luo-zi-ding-xiang-xia/'),
    "/Courses/wang-dao-cao-zuo-xi-tong/": getDocPath('/Courses/wang-dao-cao-zuo-xi-tong/'),
    "/Courses/wang-dao-shu-ju-jie-gou/": getDocPath('/Courses/wang-dao-shu-ju-jie-gou/'),
    "/Courses/CSAPP/": getDocPath('/Courses/CSAPP/'),
    "/Courses/C primer plus/": getDocPath('/Courses/C primer plus/'),
    "/Courses/Sql-bi-zhi-bi-hui/": getDocPath('/Courses/Sql-bi-zhi-bi-hui/'),
    "/Courses/niao-ge-de-linux-si-fang-cai/": getDocPath('/Courses/niao-ge-de-linux-si-fang-cai/'),
    "/Courses/Java-bian-cheng-si-xiang/": getDocPath('/Courses/Java-bian-cheng-si-xiang/'),

}
