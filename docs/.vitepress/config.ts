import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist-docs',
  lang: 'zh-CN',
  title: 'vue3-cesium-use',
  // description: '基于vue3的CesiumJS开发工具库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',

    outline: {
      label: '页面导航'
    },
    footer: {
      message: '基于 MIT 许可发布',
      // copyright: `版权所有 © 2024-${new Date().getFullYear()} 相左`
      copyright: `Copyright © 2024 相左`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '项目简介', link: '/start/about' },
          { text: '快速开始', link: '/start/usage' }
        ]
      },
      {
        text: '函数'
      },
      {
        text: '组件'
      },
      {
        text: '工具'
      }
    ],

    search: {
      provider: 'local'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [{ icon: 'github', link: 'https://github.com/ztyangt/vue3-cesium-use' }]
  },
  sitemap: {
    hostname: 'https://example.com'
  }
})
