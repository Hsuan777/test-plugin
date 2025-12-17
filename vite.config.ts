import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      // entryRoot: 'src/index.ts',
      // outDir: 'dist',
      // 可選：如果你希望打包後的 .d.ts 包含在同一個資料夾，設為 true
      // insertTypesEntry: true,
      // include: ['src/components/*']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 套件入口文件
      name: 'SharedButtonLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.js'
        if (format === 'umd') return 'index.umd.js'
        return `index.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue'], // 排除 Vue，避免打包進去
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css'
          }
          return assetInfo.name || 'asset'
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.CONTAINER_PORT) || 3000
  },
})
