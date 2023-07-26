// const codePreview = require('./plugins/vuepress-plugin-code-previews')
const { formatDate } = require('./utils/utils')
module.exports = {
  title: '欢迎来到我的世界',
  description: 'Hello world!!!',
  base: '/fantp/', // 相对路径，读取相对路径下的静态文件 - github仓库名称
  theme: 'vdoing',
  head: [
    ['link', { rel: 'icon', href: '/fantp/favicon.ico' }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?aff4517848b734ae9374d9c99ecbbc51";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `] // 百度数据统计
  ],
  themeConfig: {
    footer: '',
    lastUpdated: '上次更新',
    logo: '/images/dog.png',
    nav: [
      { text: '插件', items: [
        { text: '百度', link: 'www.baidu.com' },
        { text: 'Google', link: 'www.google.cn' }
      ]
      },
      { text: 'Github', link: 'https://cugftp.github.io/fantp' }
    ],
    sidebar: 'structuring'
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    // 目录支持
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
    toc: {
      includeLevel: [1, 2, 3, 4, 5]
    }
  },
  plugins: [
    ['@vuepress/last-updated', {
      transformer: (timestamp) => {
        return formatDate(timestamp, 'yyyy-MM-dd hh:mm:ss')
      }
    }],
    ['code-previews', { copyTips: 'copied' }],
    [
      'reading-progress',
      {
        fixed: 'left'
      }
    ],
    [
      '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    // 配置插件vuepress-plugin-thirdparty-search, 默认主题的搜索框集成第三方搜索引擎
    [
      'thirdparty-search',
      {
        'thirdparty': [
          // 可选，默认 []
          {
            title: '在谷歌中搜索',
            frontUrl: 'https://www.google.com.hk/search?q='
          },
          {
            title: '在百度中搜索', // 在搜索结果显示的文字
            frontUrl: 'https://www.baidu.com/s?wd=', // 搜索链接的前面部分
            behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
          }
        ]
      }
    ],
    ['vuepress-plugin-code-copy', {
      align: '1px',
      successText: '复制成功!'
    }
    ],
    ['element-ui'],
    [
      'ribbon',
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1 // z-index property of the background, default: -1
      }
    ],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle']shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'dynamic-title',
      {
        showIcon: '/blog/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/blog/images/felbad.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000
      }
    ],
    ['go-top'],
    [
      'vuepress-plugin-live2d',
      {
        modelName: '', // 模型名称，可传入一个字符串或者数组
        mobileShow: false, // 是否在移动设备上显示
        position: 'left' // 显示在左下角还是右下角
      }
    ],
    // 评论
    [
      '@vssue/vuepress-plugin-vssue',
      { // 评论相关内容
        locale: 'zh',
        platform: 'github-v4',
        owner: '',
        repo: '',
        clientId: '',
        clientSecret: ''
      }
    ]
  ]
}
