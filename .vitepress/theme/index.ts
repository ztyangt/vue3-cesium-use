import type { Theme } from 'vitepress'
import DemoBlock from './components/DemoBlock.vue'
import DefaultTheme from 'vitepress/theme'

import 'default-passive-events'

import './style/var.css'
import './style/style.css'
import './style/main.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
