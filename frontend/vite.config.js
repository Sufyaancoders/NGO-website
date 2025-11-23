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

          // Combine React with React-DOM for better caching
          if (id.includes('react') || id.includes('react-dom')) return 'react-vendor'
          
          // Group UI libraries together to reduce HTTP requests
          if (id.includes('motion') || id.includes('@radix-ui') || id.includes('lucide-react') || 
              id.includes('@fortawesome') || id.includes('embla-carousel')) return 'ui-vendor'
          
          // Combine state management and routing
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux') || 
              id.includes('react-router')) return 'core-vendor'
          
          // Everything else in vendor
          return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
