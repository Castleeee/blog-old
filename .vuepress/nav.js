//顶部导航栏
module.exports=[
    {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
    },
    {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
    },
    {
        "text": "About",
        "icon": "reco-message",
        "items": [
            {
                "text": "README",//对应docs顶栏，我放两个说明
                "link": "/docs/README/"
            },
            {
                "text": "Guids",
                "link": "/docs/guids/"
            }
        ]
    },
    { "text": 'Contact',
        "icon": 'reco-account',
        "items": [
            { "text": 'GitHub', "link": 'https://github.com/Castleeee', "icon": 'reco-github' },
            { "text": '简书', "link": 'https://www.jianshu.com/u/04777e91e2ef', "icon": 'reco-jianshu' },
            { "text": '哔哩哔哩', "link": 'https://space.bilibili.com/33104422', "icon": 'reco-bilibili' },
        ]
    }
]
