import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // 🔹 Evita archivos extra en producción
    minify: 'esbuild', // 🔹 Minificación de código para reducir el peso
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // 🔹 Separa React en un chunk independiente
          vendors: ['axios'], // 🔹 Agrupa otras librerías en un chunk aparte
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // 🔹 Asegura que React se optimiza antes
  },
  server: {
    host: true, // 🔹 Permite acceder al servidor desde LAN
    port: 5173, // 🔹 Define el puerto del servidor de desarrollo
  },
})
