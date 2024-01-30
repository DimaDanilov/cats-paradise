import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cats-paradise/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      public: "/public",
      assets: "/src/assets",
      api: "/src/api",
      components: "/src/components",
      layouts: "/src/layouts",
      pages: "/src/pages",
      store: "/src/store",
      types: "/src/types",
    },
  },
});
