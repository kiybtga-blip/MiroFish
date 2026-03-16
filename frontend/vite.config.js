import { defineConfig } from 'vite'
      2 import vue from '@vitejs/plugin-vue'
      3
      4 // https://vite.dev/config/
      5 export default defineConfig({
      6   plugins: [vue()],
      7   server: {
      8     host: '0.0.0.0',
      9     port: 3000,
     10     open: false,
     11     allowedHosts: [
     12       'mirofish-3ori.onrender.com',
     13       'localhost',
     14       '127.0.0.1'
     15     ],
     16     proxy: {
     17       '/api': {
     18         target: 'http://localhost:5001',
     19         changeOrigin: true,
     20         secure: false
     21       }
     22     }
     23   }
     24 })
