import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    Proxy: {
      "/": {
        target: "localhost:3333",
      },
    },
  },
});
