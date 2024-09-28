import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoLayout from './components/DemoLayout.vue'

import './style/var.css'
import './style/style.css'
import './style/main.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoLayout', DemoLayout)
  }
} satisfies Theme
