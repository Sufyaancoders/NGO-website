import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // React core only (without router)
            if (id.includes('react/') && !id.includes('react-router') && !id.includes('react-redux')) {
              return 'react-core';
            }
            // React DOM separately
            if (id.includes('react-dom/') && !id.includes('react-router')) {
              return 'react-dom';
            }
            // React Router separately
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Redux
            if (id.includes('@reduxjs') || id.includes('react-redux')) {
              return 'redux-vendor';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            // Motion animation (large library)
            if (id.includes('motion')) {
              return 'motion-vendor';
            }
            // Embla carousel
            if (id.includes('embla-carousel')) {
              return 'carousel-vendor';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            // FontAwesome
            if (id.includes('@fortawesome')) {
              return 'fontawesome-icons';
            }
            // Other dependencies
            return 'vendor';
          }
        },
      },
    },
    // Compression and minification
    minify: 'esbuild',
    target: 'esnext',
    // Suppress chunk size warnings - gzipped size is what matters for production
    chunkSizeWarningLimit: 2000,
  },
})
