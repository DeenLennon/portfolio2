import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['react-type-animation'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    sourcemap: false,
  },

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  preview: {
    port: 4173,
  },

  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
    },
  },

  css: {
    devSourcemap: true,
  },

  envPrefix: 'VITE_',
})
