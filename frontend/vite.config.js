import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from 'url';
import svgr from "vite-plugin-svgr"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss(),svgr()],
  base: '/',
  resolve: {
    alias: {
      // Now __dirname is correctly defined
      "@": path.resolve(__dirname, "./src")
    },
  },
  server:
  {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    host: '0.0.0.0',
    port: 5173,
  },
});