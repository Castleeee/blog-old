module.exports = {
  "title": "会走路的三百块👾",
  "description": "加载中...",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/tablogo.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
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
          // {
          //   "text": "seconDocs",
          //   "link": "/docs/sssss/"
          // }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Castleeee",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": { //doc的侧边栏配置
      "/docs/README/": [
        "",//首页readme
        "blogReadme",
        "Obsidian",
      ],
      // "/docs/sssss/": [
      //     "aaa",
      //     "bbb"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-README",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "HI,JACK",
    "authorAvatar": "/avatar.png",
    "record": "会走路的三百块",
    "startYear": "2022",
    "vssueConfig": {
      "platform": 'github',
      "owner": 'OWNER_OF_REPO',
      "repo": 'NAME_OF_REPO',
      "clientId": 'YOUR_CLIENT_ID',
      "clientSecret": 'YOUR_CLIENT_SECRET',
    }
  },
  "plugins": [
    ['cursor-effects', {
        "size": 2, // size of the particle, default: 2
        "shape": ['star' | 'circle'], // shape of the particle, default: 'star'
        "zIndex": 999999999, // z-index property of the canvas, default: 999999999
      },],
    {
      "sitemap": {"hostname": 'http://ooowl.fun'},
    }
  ],

  "markdown": {
    "lineNumbers": true
  }
}
