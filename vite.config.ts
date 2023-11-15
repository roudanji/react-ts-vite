import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['mockjs'],
  },
  plugins: [
    react(),
  ],
  base: '',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  server: {
    port: 8800,
    strictPort: true,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://ip域名:端口"
    },
  },
});
