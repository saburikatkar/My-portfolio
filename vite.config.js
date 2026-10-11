import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path set for GitHub Pages deployment (https://saburikatkar.github.io/My-portfolio/)
  // Using relative base './' ensures assets load correctly regardless of custom domain or subpath
  base: './',
})
