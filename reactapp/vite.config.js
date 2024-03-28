import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: '/Crop-Recommendation-System/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 200000.00 ,// size in KB
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    }
  }
})

// vite.config.js

