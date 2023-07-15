import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js 3'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap',
      '@themeConfig': resolve(__dirname, 'themeConfig.js'),
      '@core': resolve(__dirname, 'src/@core'),
      '@validations': resolve(__dirname, 'src/@core/utils/validations/validations.js'),
      '@axios': resolve(__dirname, 'src/libs/axios'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      }
    }
  }
})
