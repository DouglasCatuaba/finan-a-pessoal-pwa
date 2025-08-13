// vite.config.ts ou .js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/finan-a-pessoal-pwa/', // 
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
})
