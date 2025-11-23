import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          // Order matters: check react-dom BEFORE react
          if (id.includes('react-dom')) return 'react-dom-vendor'
          if (id.includes('react/') || id.includes('react\\')) return 'react-core-vendor'
          if (id.includes('scheduler')) return 'react-core-vendor'
          
          // Animation library (can be large)
          if (id.includes('motion') || id.includes('framer-motion')) return 'motion-vendor'
          
          // Radix UI components
          if (id.includes('@radix-ui')) return 'radix-vendor'
          
          // Icons and UI utilities
          if (id.includes('lucide-react') || id.includes('@fortawesome')) return 'icons-vendor'
          
          // Carousel
          if (id.includes('embla-carousel')) return 'carousel-vendor'
          
          // State management
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) return 'redux-vendor'
          
          // Routing
          if (id.includes('react-router')) return 'router-vendor'
          
          // Everything else
          return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 800,
    minify: 'esbuild',
  },
})
