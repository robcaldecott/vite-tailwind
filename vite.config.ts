/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
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
    // coverage: {
    //   exclude: [
    //     "**/*.test.tsx",
    //     ".storybook",
    //     "**/*.stories.tsx",
    //     "src/setup*.ts",
    //   ],
    // },
  },
});
