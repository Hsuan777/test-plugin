import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      rollupTypes : true, // 啟用此選項可將型別宣告合併為單一檔案
      insertTypesEntry: true, // 參考 package.json 中的 types 欄位
      tsconfigPath : './tsconfig.app.json',
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 套件入口文件
      name: 'SharedButtonLibrary',
      formats: ['es', 'umd'],
      fileName: 'index',
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
