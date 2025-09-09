import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./", // ✅ Sử dụng ./ để tương thích với domain tùy chỉnh như landing.hino-systechvn.com
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['.ngrok-free.app'],
  },
  plugins: [react()],
});
