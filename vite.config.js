import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // This forces Vite to treat the folder containing this config file as the project root
  root: process.cwd(), 
  // This explicitly tells Vite where the public assets are
  publicDir: 'public',
  server: {
    // This ensures Vite doesn't try to be too smart with redirects
    strictPort: true,
  }
})