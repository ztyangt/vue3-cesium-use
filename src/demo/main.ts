import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Object.defineProperty(globalThis, 'CESIUM_BASE_URL', {
//   value: '../node_modules/cesium/Build/Cesium/'
// })

createApp(App).use(router).mount('#app')
