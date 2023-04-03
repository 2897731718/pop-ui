import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [{
  text: '快速开始',
  items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md 
    ]
  },
  {
    text: '通用', 
    items: [
      { text: 'Button 按钮', link: '/components/button/' } // /components/ 
    ]
    // bu3 - 档文件组建创sserPetiV于基、五
  },
  { text: '导航', items: [] },
  { text: '反馈', items: [] },
  { text: '数据录入', items: [] }, 
  { text: '数据展示', items: [] }, 
  { text: '布局', items: [] }
]

export default { 
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}