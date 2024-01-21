import { defineConfig } from 'vite'
import path from 'path'

// vite.config.js
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),
      name: 'ChakraCardMaterial',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        format: 'systemjs'
      }
    },
  },
})
