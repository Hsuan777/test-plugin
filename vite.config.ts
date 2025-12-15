import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 設置 dts 輸出的根目錄為 src，確保型別路徑正確
      entryRoot: 'src',
      // 將 .d.ts 檔案打包到 dist/types 資料夾 (可選，但建議分離)
      outDir: 'dist/types',
      // 可選：如果你希望打包後的 .d.ts 包含在同一個資料夾，設為 true
      insertTypesEntry: true, 
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
