import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove the /CloudCore/ base path since you'll be using a custom domain
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})