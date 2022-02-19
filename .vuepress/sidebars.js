//大侧边栏配置
module.exports ={ //doc的侧边栏配置
    "/docs/README/": [//首页README的侧边栏
        "",
        "blogReadme",
        "Obsidian",
    ],
    "/docs/guids/": [//首页Guide的侧边栏
        "",
        {
            title: '好物推荐',
            collapsable: true,
            sidebarDepth: 4,
            children: [
                'windowsSetup',
            ]
        },
    ],
}
// {
//     title: 'Group 1',   // 必要的
//         path: '/blogs/category2/2017/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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

// children里面是可以进行一个娃的套的,例子已经注释了起来
