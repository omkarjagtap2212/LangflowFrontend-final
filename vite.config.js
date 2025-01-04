import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    build: {
      outDir: 'build', // Change this if Render expects a different directory
    },
    proxy: {
      '/runFlow': 'http://localhost:5000',
    },
  },
});
