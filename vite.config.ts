import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Increase chunk size warning limit (optional, but we'll fix the root cause)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor chunks for better caching
          if (id.includes('node_modules')) {
            // Large PDF libraries in their own chunk
            if (id.includes('html2canvas') || id.includes('jspdf')) {
              return 'pdf-libs'
            }
            // Supabase SDK in its own chunk
            if (id.includes('@supabase')) {
              return 'supabase'
            }
            // React and related libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            // MUI libraries
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui-vendor'
            }
            // All other vendor libraries
            return 'vendor'
          }
          // Split feature modules
          if (id.includes('src/features/')) {
            const feature = id.split('src/features/')[1]?.split('/')[0]
            if (feature) {
              return `feature-${feature}`
            }
          }
          // Portal-specific code
          if (id.includes('src/portal/')) {
            return 'portal'
          }
        },
        // Use consistent chunk names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})
