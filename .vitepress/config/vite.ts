import path from 'path'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'
import cesium from 'vite-plugin-cesium'

export const viteConfig = {
  publicDir: 'docs/public',
  plugins: [
    cesium({
      rebuildCesium: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url)),
      '@docs': fileURLToPath(new URL('./docs/.vitepress', import.meta.url))
    }
  },
  server: {
    warmup: {
      clientFiles: [resolve(fileURLToPath(import.meta.url), '../components/Viewer.vue')]
    }
  }
}
