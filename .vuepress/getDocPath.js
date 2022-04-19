/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 * 把书本分章按照 第一二三四章 排序
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
    console.log(chlidren)
    return sortChapters(chlidren)
}

function sortChapters(l){
    res=[]
    baseWeight=2000;//给不是obj的文件夹添加1000累加的权重

    l.forEach(e => {// 构造obj添加权重
        baseWeight=baseWeight+1;
        if (e.constructor === Object){//如果是文件夹
            e.weight=processNum(e.title,baseWeight);//添加权重即可
            res.push(e)
        }else{
            res.push(
                {title:e,//把字符串存在title
                    collapsable:false,//一会恢复的时候的标志位
                    weight:processNum(e,baseWeight)}//排序的权重
            )//l开头添加构造的Obj
        }
    });
    res=res.sort(function (x, y) { return x.weight - y.weight; });// 按照权重排序
    finalRes=[];
    res.forEach(e=>{ // 按照排序后的顺序生成新的数组
        if(e.collapsable===true){
            delete e.weight;
            finalRes.push(e)
        }else{
            finalRes.push(e.title)
        }
    })
    return finalRes;//返回最终结果

    //拿到title返回章节权重
    function processNum(title,baseWeight){
        if(title.slice(0, 2)==='./'){// 判断是否是子文件夹下的
            title=title.split("/")//按照路径分割拿
            title=title[title.length-1]// 最后的文件名
        }
        let res=title.match(/^第([一二三四五六七八九十百]*?)章/);// 匹配第多少章
        if(res=== null){ //不是第几章开头的
            return baseWeight; //返回基础权重
        }else{
            return zhDigitToArabic(res[1]);//weight
        }
    }
}

//中文数字转阿拉伯数字
function zhDigitToArabic(digit) {
    const zh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const unit = ['千', '百', '十'];
    const quot = ['万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祗', '那由他', '不可思议', '无量', '大数'];
    let result = 0, quotFlag;

    if (digit[0] === '十') {
        if (digit.length === 1) {
            return 10;
        } else if (digit.length === 2) {
            return 10 + getNumber(digit[1]);
        }
    }

    for (let i = digit.length - 1; i >= 0; i--) {
        if (zh.indexOf(digit[i]) > -1) { // 数字
            if (quotFlag) {
                result += quotFlag * getNumber(digit[i]);
            } else {
                result += getNumber(digit[i]);
            }
        } else if (unit.indexOf(digit[i]) > -1) { // 十分位
            if (quotFlag) {
                result += quotFlag * getUnit(digit[i]) * getNumber(digit[i - 1]);
            } else {
                result += getUnit(digit[i]) * getNumber(digit[i - 1]);
            }
            --i;
        } else if (quot.indexOf(digit[i]) > -1) { // 万分位
            if (unit.indexOf(digit[i - 1]) > -1) {
                if (getNumber(digit[i - 1])) {
                    result += getQuot(digit[i]) * getNumber(digit[i - 1]);
                } else {
                    result += getQuot(digit[i]) * getUnit(digit[i - 1]) * getNumber(digit[i - 2]);
                    quotFlag = getQuot(digit[i]);
                    --i;
                }
            } else {
                result += getQuot(digit[i]) * getNumber(digit[i - 1]);
                quotFlag = getQuot(digit[i]);
            }
            --i;
        }
    }

    return result;

    // 返回中文大写数字对应的阿拉伯数字
    function getNumber(num) {
        for (let i = 0; i < zh.length; i++) {
            if (zh[i] == num) {
                return i;
            }
        }
    }

    // 取单位
    function getUnit(num) {
        for (let i = unit.length; i > 0; i--) {
            if (num == unit[i - 1]) {
                return Math.pow(10, 4 - i);
            }
        }
    }

    // 取分段
    function getQuot(q) {
        for (var i = 0; i < quot.length; i++) {
            if (q == quot[i]) {
                return Math.pow(10, (i + 1) * 4);
            }
        }
    }
}

// 写的时候在node里调试
// sortChapters(l).forEach(e=>{
//     console.log(e);
// })

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
