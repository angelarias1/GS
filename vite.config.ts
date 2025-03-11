import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // 🔹 Evita archivos extra en producción
    reportCompressedSize: false, // ✅ Nueva opción en lugar de brotliSize
    minify: 'esbuild', // 🔹 Minificación rápida con esbuild
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // 🔹 Divide React en un chunk separado
          vendors: ['axios'], // 🔹 Mueve librerías externas a otro chunk
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // 🔹 Preoptimiza React
  },
  server: {
    host: '0.0.0.0', // 🔹 Permite acceder desde LAN
    port: 5173, // 🔹 Define el puerto de desarrollo
    strictPort: true, // 🔹 Asegura que siempre use este puerto
  },
})
