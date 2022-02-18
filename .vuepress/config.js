const nav = require('./nav')
const  sidebar = require('./sidebars')
const  friendLink = require('./friendlink')
const plugins = require('./plugins')

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
    nav,
    sidebar,
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
    friendLink,
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "HI,JACK",
    "authorAvatar": "/avatar.png",
    "record": "会走路的三百块",
    "startYear": "2022",
    "subSidebar": "auto",
    "sidebarDepth": 4,
    "vssueConfig": {
      "platform": 'github',
      "owner": 'Castleeee',
      "repo": 'blog',
      "clientId": '4c28289715eae2527644',
      "clientSecret": '55bb7260ec8c870b094645e5f9723a850ea3389d',
    }
  },
  plugins,
  "markdown": {
    "lineNumbers": true
  }
}
