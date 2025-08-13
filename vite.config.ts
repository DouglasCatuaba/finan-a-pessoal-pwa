import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ajuste o nome do repositório aqui:
const base = '/finan-a-pessoal-pwa/'

export default defineConfig({
  base,
  plugins: [react()],
})
