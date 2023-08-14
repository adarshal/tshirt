import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  CORS: {
    allowedHeaders: ["Content-Type", "Authorization"],
    allowedOrigins: ["https://market-assets.fra1.cdn.digitaloceanspaces.com"],
  },
})
