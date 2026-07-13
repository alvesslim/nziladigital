import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/kit-leitura/',
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {},
  },
  server: {
    host: '0.0.0.0',
    port: 8081,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
