import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    assetsDir: 'assets', // This should place assets in the assets folder
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]' // Ensure assets go into the assets folder
      }
    }
  }
})
