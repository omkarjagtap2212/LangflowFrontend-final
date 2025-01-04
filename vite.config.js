import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build', // Ensure the build output is directed to the 'build' directory
  },
  server: {
    proxy: {
      '/runFlow': 'http://localhost:5000',
    },
  },
});
