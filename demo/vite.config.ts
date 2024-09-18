import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/demo/',
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  build: {
    minify: 'esbuild',
    // // 打包后的文件
    outDir: 'dist-docs/demo/',
    assetsDir: 'static',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames(assetInfo) {
          const imgExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico']
          if (assetInfo.name?.endsWith('.css')) {
            return 'static/css/[name]-[hash].css'
          }
          if (imgExts.some((ext) => assetInfo.name?.endsWith(ext))) {
            return 'static/images/[name]-[hash][ext]'
          }
          return 'assets/[name]-[hash][ext]'
        },

        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
