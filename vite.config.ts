import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import pkg from './packages/package.json'
import AutoImport from 'unplugin-auto-import/vite'
import cesium from 'vite-plugin-cesium'

// @ts-ignore
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'unplugin/auto-imports.d.ts',
      dirs: ['packages/tools', 'packages/hooks/**/', 'shared/utils'],
      resolvers: []
    }),
    cesium({
      rebuildCesium: true
    }),
    dts({
      rollupTypes: false,
      outDir: ['packages/dist/dist/@types'],
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
      copyDtsFiles: true,
      compilerOptions: {
        declaration: true,
        allowJs: false,
        emitDeclarationOnly: true
      }
    }),
    postcss({
      extract: 'index.css',
      plugins: [autoprefixer()]
    }),
    terser({
      compress: true,
      module: true,
      format: {
        comments: 'all'
      }
    }),
    copy({
      targets: [{ src: 'packages/es/*.css', dest: 'packages/dist' }],
      verbose: true,
      hook: 'generateBundle'
    }),
    del({
      targets: [
        // 设置删除规则，删除原来位置的 CSS 文件
        'packages/es/*.css',
        'packages/lib/*.css',
        'packages/dist/style.css'
      ],
      hook: 'closeBundle' // 在 writeBundle 钩子时执行删除操作
    })
  ],
  build: {
    minify: 'terser',
    outDir: 'packages/dist',
    lib: {
      name: 'vue3-cesium-use',
      entry: [path.resolve(__dirname, 'packages/index.ts')]
      // formats: ['es', 'cjs']
      // fileName(format, entryName) {
      //   if (format === 'es') return `${entryName}.mjs`
      //   return `${entryName}.js`
      // }
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
      // input: [path.resolve(__dirname, 'packages/index.ts')],
      output: [
        {
          format: 'es', //指定打包格式
          entryFileNames: '[name].mjs', //指定输出文件名
          preserveModules: true, //保留原目录结构
          exports: 'named', // 导出方式
          dir: 'packages/dist/es' // 打包根目录
          // plugins: []
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          exports: 'named',
          dir: 'packages/dist/lib'
        }
      ]
    }
  }
})
