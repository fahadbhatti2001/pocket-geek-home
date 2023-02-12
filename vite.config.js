import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path"
import process from "node:process"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  }
})