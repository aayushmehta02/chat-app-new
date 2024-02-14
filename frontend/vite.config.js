import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      port: 3000, 
      "/api":{
        target:"http://localhost:5173/"
      }
    }
  }
})
