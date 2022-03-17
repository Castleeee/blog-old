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
    ],
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
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    "nextLinks": true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    "prevLinks": true,
    "vssueConfig": {
      "platform": 'github',
      "owner": 'Castleeee',
      "repo": 'blog',
      "clientId": 'ob里找',
      "clientSecret": 'ob里找',
    }
  },
  plugins,
  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  }
}
