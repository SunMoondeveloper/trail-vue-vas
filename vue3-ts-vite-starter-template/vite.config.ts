import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
  define: {
      rootPath: JSON.stringify("https://dev.vastoz.com/cms"),
      websocketPath: JSON.stringify("wss://dev.vastoz.com/cms/"),
      //rootPath: JSON.stringify("https://localhost:2005/cms"),
      //websocketPath: JSON.stringify("ws://localhost:2005/cms/"),
      //rootPath: "https://dev.vastoz.com/cms",
       //websocketPath: "wss://dev.vastoz.com/cms/",
      //appName: "my-custom-name"
},
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Vastoz',
          description: 'Vastoz application created using Vue.js 3'
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
