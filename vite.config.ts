import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      public: "/public",
      src: "/src",
      api: "/src/api",
      components: "/src/components",
      layouts: "/src/layouts",
      pages: "/src/pages",
      types: "/src/types",
    },
  },
});
