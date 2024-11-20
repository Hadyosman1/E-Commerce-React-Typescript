import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@validations": path.resolve(__dirname, "./src/validations"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  plugins: [react()],
});
