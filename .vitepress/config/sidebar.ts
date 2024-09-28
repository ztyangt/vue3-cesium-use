export const sidebarConfig = [
  {
    text: '开始',
    items: [
      { text: '项目简介', link: '/start/about' },
      { text: '快速开始', link: '/start/usage' }
    ]
  },
  {
    text: '组合函数',
    // items: composablesList.map((dir) => ({
    //   text: dir,
    //   link: `/zh/composables/${dir}.md`
    // }))
    // items: [{ text: 'useViewer', link: '../../../packages/hooks/useViewer/index.md' }]
    // items: [{ text: 'useViewer', link: '/hooks/userViewer.md' }]
    items: [{ text: 'useViewer', link: '/packages/hooks/useViewer/' }]
    // items: [{ text: 'useViewer', link: 'packages/hooks/useViewer/index.md' }]
  },
  {
    text: '功能组件'
  },
  {
    text: '通用工具'
  }
]
