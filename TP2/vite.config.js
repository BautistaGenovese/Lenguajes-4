import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Configuracion de React, Tailwind y rutas relativas para GitHub Pages
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
