import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/v1/socialMedia': {
        target: 'https://langflowbackend-final-1.onrender.com', // Update this to your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1\/socialMedia/, '/api/v1/socialMedia'),
      },
    },
  },
});
