import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Make sure .jsx and .tsx are supported in resolve
  },
  server:{
    proxy: {
      '/api': {
        // target: 'https://advanced-robin-hopelessly.ngrok-free.app/',
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: true, // Ensure SSL certificate verification
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.error('Proxy Error:', err); // Log errors to console.error
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
        },
      }
  }
  },
})
