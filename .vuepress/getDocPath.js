/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 */
const fs = require('fs')
const path = require('path')
function getDocPath(relateivePath,currentpath='') {
    var absolutePath = path.join(__dirname, '..' + relateivePath)
    if(currentpath!==""){ absolutePath=relateivePath}
    const files = fs.readdirSync(absolutePath)
    const chlidren = []
    var excludes = ['.DS_Store','static'] // 排除检查的文件
    let arr = files.sort(function(a, b) {
        return a.split('.')[0] - b.split('.')[0];
    });
    arr.forEach(function (item) {
        if (excludes.indexOf(item) < 0) {
            let stat = fs.lstatSync(absolutePath + '/' + item)
            //console.log(item)
            if (item == 'README.md') {
                chlidren.unshift("")
            } else if (!stat.isDirectory()) {
                let res = item.replace('.md', '');
                chlidren.push(currentpath+res)
            } else {
                let res = item.replace('.md', '');
                chlidren.push({
                    title: res,
                    collapsable: true,
                    sidebarDepth: 2,
                    children: getDocPath(absolutePath+"/"+res,"./"+res+"/")
                })

            }
        }
    })
   //console.log(chlidren)
    return chlidren
}
module.exports = getDocPath
//这是手动嵌套的例子
// children里面是可以进行一个娃的套的,例子已经注释了起来
// {
//     title: 'Group 1',   // 必要的
//     path: '/blogs/category2/2017/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//     collapsable: true, // 可选的, 默认值是 true,
//     sidebarDepth: 1,    // 可选的, 默认值是 1
//     children: [
//     '04',
//     '03',
//     {
//         title: 'Group 2',   // 必要的
//         path: '/blogs/category2/2017/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//         collapsable: true, // 可选的, 默认值是 true,
//         sidebarDepth: 1,    // 可选的, 默认值是 1
//         children: [
//             '04',
//             '03',
//             {
//                 title: 'Group 1',   // 必要的
//                 path: '/blogs/category2/2017/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//                 collapsable: true, // 可选的, 默认值是 true,
//                 sidebarDepth: 1,    // 可选的, 默认值是 1
//                 children: [
//                     '04',
//                     '03',
//                     {
//                         title: 'Group 2',   // 必要的
//                         path: '/blogs/category2/2017/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//                         collapsable: true, // 可选的, 默认值是 true,
//                         sidebarDepth: 1,    // 可选的, 默认值是 1
//                         children: [
//                             '04',
//                             '03',
//                         ]
//                     },
//                 ]
//             },
//         ]
//     },
// ]
// },
