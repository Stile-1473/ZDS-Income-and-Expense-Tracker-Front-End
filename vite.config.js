import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
      tailwindcss()
  ],
  server: {
    proxy: {
      '/api': {
      //  target: 'https://zds-eldz.onrender.com',
        target: 'http://localhost:8080', //changing when pushing to git hub

        changeOrigin: true,
        secure: true
      }
    }
  }
})
