---
title: 博客写作技术说明
date: 2022-02-09
isShowComments: false
sticky: 5
---
## 博客的目的
上一个博客因为各种原因，废弃了，一开始是因为写得多了之后太过于庞杂，没有后台管理导致内容和组织越来越混乱，一边写一边思考解决方法，最后发现了Obsidian简直是理想中的模式，遂直接重开，用Obsidian写笔记，寻找最大兼容的语法，直接放进博客渲染。  
所以这次就不赶潮流了，Obsidian直接固定下来，博客只要稳定就固定下来，感觉这个模式已经成熟了，不出意外不去更新，这个页面是关于博客如何组织的说明，上一篇是关于Obsidian的事项
## 博客的写作
安装helloworld什么的我就不多说了，文档上很齐全，照着来就是了。
### metadata信息
^18f313
文件的开头会有metadata信息，如下代码块
``` yaml
---
title: first page  
date: 2022-02-11 15:31:09 
prev: ./environment.md
next: ./Cpp.md
subSidebar: false
isShowComments: false
search: false
publish: false 
sticky: 1
keys:
 - '123456'
categories:  
- 系列1
tags: 
- 说明
---
```
- title 必填不要重名
- date 必填用@可以直接生成
- next和prev，就是上下页，如果已经被纳入侧边栏系列文章就可以不用配置，自己会生成
- subSidebar: false 默认生成侧边栏，可手动关闭
- isShowComments: false/true 默认使用评论，可单独页面开关
- search: false 全文检索插件的是否被检索，除了社科类的，都直接不写
- publish: false/true 是否发布
- sticky 接受数字，降序排列(大在前)置顶
-  keys 可多个密码，必须字符串，默认加密只是将页定位到实际内容上方，加密本身是没有什么作用的
- categories 可以用中文，类似于系列，只要新出现的都会自动创建，可以一篇文章多个category
- tags 标签可以用中文，vuepress只会解析metadata里的[标签](./Obsidian.md#^d604fe)，可以用Tag Wrangler插件管理

### 写作注意事项
[库写作时的注意事项](./Obsidian.md#^5c3a93)^255951
1. **在 `vuepress-theme-reco` 中，请摒弃一级标题，使用 `front-matter` 生成标题以及其他文章信息，正文从*二级标题*开始，二三级标题生成左侧子目录** 二级标题在前面会有一个小竖条定位
2. ~~所有的文件夹不要用中文~~，但是tag和categories可以
3. 使用Admonition时的对应关系，事先约定规则，写一个python脚本，转换Admonition语法为Markdown-it-container，想的是用的regex替换
    1. vuepress使用markdown-it-container,支持 tip danger warning theorem details，类型 标题
    2. Admonition支持`note`,`abstract`,`info`,`tip`,`success`,`question`,`warning`,`failure`,`danger`,`bug`,`example`,`quote`
    3. example默认collapse是open，用detail，不加前缀，其他的collapse默认关闭直接删除。
    4. 把所有的`(static/` 替换为`(./static/` 省得自己配置了
    5. 其他的把title拿上去，前面加前缀，例子ad-note 你好= 📝Note 你好
    - tip: `note` =📝Note,`abstract`=📘Abstract,`info`=📄Info,`tip`=📌Tip,`success`=🎉Success，绿色
    - warning: `question`=❓Question,`warning`=⚠️Warning，橙色
    - danger: `failure`=❌Failure,`danger`=⚡️Danger,`bug`=🐛BUG，红色
    - theorem: `quote`，details: `example` 这俩直接加标题白色
4. \<!-- more --> 之上的是文章简介，~~其实可以搭配:::使用但是Obsidian里面不渲染，有点突兀~~ 自己写脚本解决了
5. 标签和分类
    -   成系列的文章放一个categories
    -   不成系列的categories只按语言分类
    -   tag尽量精简而全
    -   阅读顺序从上往下

### 配置
把插件，导航，侧边栏，友链分离出去.[^1]
#### 侧边栏
注意[开启侧边栏](https://vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html):subSidebar: 'auto'  
"sidebar"现在只能通过配置config来展示多篇文章集合，集合文件夹下README.md是首页，首页配置时为""  
大标题栏在config->"themeConfig"->"sidebar"里面配置,配置之后会按照数组直接有前后页。
``` js
     "/docs/guids/": [  
       "",  
       "recommend",   
     ],
    "/blogs/category2/2017/":[  
        '',
        {  
            title: 'Grou1',  
            collapsable: true,  
            sidebarDepth: 4,  
            children: [  
                '01',  
                '02',  
            ]  
        },
```

大标题栏的子标题类似[文档](https://vuepress-theme-reco.recoluan.com/views/plugins/comments.html#vssue)这样  
侧边栏可以分组，children里面是可以进行一个娃的套的,例子已经注释了起来，sidebarDepth默认设置4就行  
套娃也不能按文件夹套，无法设置路径，只能在一个文件夹里手动分
## 插件
插件都是文档上给的，插件一定要["plugins",{attribute:aaa}]这样引入，否则报错
#### 评论
上次评论用的Vaillne，又更新服务了没法用了还得绑定手机号，直接换Vssue用github  
[参考页面 | Vssue](https://vssue.js.org/zh/guide/github.html)很简单照着[文档](https://vuepress-theme-reco.recoluan.com/views/plugins/comments.html#vssue)把东西填上就好了，他的评论是储在指定的repo的issue里，所以最好直接扔github，repo只需要填repo名字就行。
#### 复制按钮
`vuepress-plugin-nuggets-style-copy`  
代码块添加复制按钮，直接引入用就行了，就俩参数不用配置,代码直接去文件里看
#### 看板娘
`@vuepress-reco/vuepress-plugin-kan-ban-niang`  
有些模型是不能使用了，找找能用的主题，theme设置为单字符串就可以  
不是普通的看板娘插件，必须是theme-reco的看板娘插件
#### TOC目录插件
`@vuepress/plugin-toc@next`
提供一个目录 (table-of-contents, TOC) 组件。  
默认是toc代码块用(四个点的)渲染，用脚本直接更改为双括号[\[toc]\] 就可以在vuepress中渲染
#### 中文md转拼音路径
`npm install -D  vuepress-plugin-permalink-pinyin`
vuepress不支持当文件名含有中文时，对应页面无法跳转，可通过如下插件解决这个问题，这个插件会将中文路径转换为拼音路径
#### 禁用静态文件转码
`cnpm i markdown-it-disable-url-encode` [^5]
图片和附件含有中文时会被编码导致读不出来，配置之后就可以了
#### 全文检索插件[^6]
`cnpm i vuepress-plugin-fulltext-search`  
默认情况下，搜索关键字的结果是下划线的，没有高亮。修改文件`.vuepress/styles/index.styl`
```
// 搜索结果样式
.suggestions {
  max-height: 80vh; // 搜索结果框高度自适应
  overflow-y: scroll;
}
.suggestions .highlight{
  color: #646cff
  font-weight: bold
}
```
全文检索
```js
plugins: [
      // 支持中文文件名
      [
        "permalink-pinyin",
        {
          lowercase: true, // Converted into lowercase, default: true
          separator: "-", // Separator of the slug, default: '-'
        },
      ],
  ]
......
//config.js
"markdown": {  
  "lineNumbers": true,  
  extendMarkdown: md => {  
    md.use(require("markdown-it-disable-url-encode"));  
  }  
}

```

## 自己修改文件
本来想启用和文档一样的博客，发现怎么也搞不出来，要问的东西太多了，而且我的文档好像也和别人的不太一样，干脆就自己写了个按钮，直接强制定位到那里了，在首页readme.md  
参照[这两篇](https://lovelijunyi.gitee.io/posts/6b66.html)顺便修改了一下CSS，就完事了。  [^2]
- 首页添加了按钮
    - 直接写了个插件解决的[^3]，放在了包里
- 插件，层级目录独立出js来
    - 魔改了一个自动生成最多二级大侧边栏的js，可以直接配置了
- index.styl和palette.styl样式文件修改css
    -  二级标题添加anchor前标
    - CSS调整侧边栏字号
    - 自定义介绍页面的CSS去掉标题栏[^4]
- 写个脚本兼容语法
#### 错误
猜测是编译时目录层级过多，导致错误[^7]，但build的网页可以正常使用

[^1]: [vuepress-theme-reco主题优化 | 小弋の阅览室](https://lovelijunyi.gitee.io/blog/blogs/vuepress/vuepress-theme-reco%E4%B8%BB%E9%A2%98%E4%BC%98%E5%8C%96.html#%E5%89%8D%E8%A8%80)  
[^2]: [vuepress-theme-reco主题魔改 | 小弋の生活馆](https://lovelijunyi.gitee.io/posts/6b66.html)  
[^3]:  [从零实现一个 VuePress 插件 - SegmentFault 思否](https://segmentfault.com/a/1190000041285750)  
[^4]: [默认主题配置 | VuePress](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%8A%A8)  
[^5]: [Vuepress 图片资源中文路径问题 - SegmentFault 思否](https://segmentfault.com/a/1190000022275001)  
[^6]: [Vuepress配置全文搜索插件fulltext-sarch | 二丫讲梵](https://wiki.eryajf.net/pages/8aafb1/)  
[^7]: [vuepress编译时报错TypeError _normalized undefined的解决 | 二丫讲梵](https://wiki.eryajf.net/pages/32108f/)
