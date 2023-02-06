/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), visualizer(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
