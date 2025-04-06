import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base path is correct
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    historyApiFallback: true, // Mimics Vercel's rewrite behavior locally
  }
})
