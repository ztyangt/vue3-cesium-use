import path from 'path'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'
import cesium from 'vite-plugin-cesium'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

export const viteConfig = {
  publicDir: 'docs/public',
  plugins: [
    cesium({
      rebuildCesium: true
    }),
    vitePluginForArco({
      style: 'css'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~/': `${path.resolve(__dirname, '.')}/`
    }
  },
  server: {
    warmup: {
      clientFiles: [resolve(fileURLToPath(import.meta.url), '../components/Viewer.vue')]
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "/.vitepress/theme/style/theme.scss" as *;`
  //     }
  //   }
  // }
}
