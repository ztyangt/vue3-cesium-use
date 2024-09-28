import type { Theme } from 'vitepress'
import DemoBlock from './components/DemoBlock.vue'
import ViewerBlock from './components/ViewerBlock.vue'
import DefaultTheme from 'vitepress/theme'

import 'default-passive-events'

import './style/var.css'
import './style/style.css'
import './style/main.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('ViewerBlock', ViewerBlock)
  }
} satisfies Theme
