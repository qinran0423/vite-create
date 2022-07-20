import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { resolve, join } from 'path'
import autoprefixer from 'autoprefixer'

const variablePath = normalizePath(resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [vue(), vueJSX()],
  resolve: {
    alias: {
      '@assets': join(__dirname, 'src/assets')
    }
  }
})
