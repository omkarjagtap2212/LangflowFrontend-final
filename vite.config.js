import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/runFlow': 'http://localhost:5001',
    },
  },
});
