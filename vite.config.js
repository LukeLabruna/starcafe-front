import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://starcafe-back.vercel.app/',
        changeOrigin: true,
        secure: false
      },
    },
  }
})
