import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gettext from './vite-gettext-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [gettext(), vue()],
  build: {
    rollupOptions: {
      input: {
        // add more entry points here to support more apps
        featureA: resolve(__dirname, 'src/feature-a.js')
      },
      output: {
        // don't add hashes to output files, handled by django
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './src/')
      }
    ]
  }
})
