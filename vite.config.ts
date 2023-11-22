import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["mockjs"],
  },
  plugins: [react()],
  base: "",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    minify: process.env.NODE_ENV === "production", // 打包优化代码体积
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // react 相关打包到一个 .js
        },
      },
    },
  },
  server: {
    port: 8800,
    strictPort: true,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://ip域名:端口",
    },
  },
});
