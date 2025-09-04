// Node.js utilities for file and URL handling
import { fileURLToPath, URL } from 'node:url'

// Vite configuration helper
import { defineConfig } from 'vite'
// Vue plugin for Vite
import vue from '@vitejs/plugin-vue'
// Vue DevTools plugin for Vite
import vueDevTools from 'vite-plugin-vue-devtools'

// Vite configuration
// https://vite.dev/config/
export default defineConfig({
  // Plugins used by Vite
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // Module resolution settings
  resolve: {
    alias: {
      // '@' maps to the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
