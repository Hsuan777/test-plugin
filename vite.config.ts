import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 套件入口文件
      name: 'SharedButtonLibrary',
      fileName: 'shared-button-library'
    },
    rollupOptions: {
      external: ['vue'], // 排除 Vue，避免打包進去
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.CONTAINER_PORT) || 3000
  },
})
