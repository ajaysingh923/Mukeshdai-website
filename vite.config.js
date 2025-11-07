import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mukeshdai-website/', // ✅ must exactly match your GitHub repo name
})