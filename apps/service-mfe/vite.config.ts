import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: { port: 4000 },
  preview: { port: 4000 },
  define: { "process.env.NODE_ENV": JSON.stringify(mode) },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/main.tsx"),
      name: "ServiceMFE",
      fileName: "service-mfe",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
