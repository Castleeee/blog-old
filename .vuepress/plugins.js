//插件
module.exports=[
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
        tip: {
            content: "复制成功!"
        }
    }],
    [
        "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        {
            theme: ['haru1'],
            clean: true,
            messages: {
                welcome: 'NMSL',
                home: '心里的花，我想要带你回家。',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '再见哦'
            },
            width: 153,
            height: 224
        }
    ],
    [
        require('./vuepress-plugin-home-button'),//自定义插件引入方式
    ],
    ["@vuepress/plugin-toc@next",]
]
