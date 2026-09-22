/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // GitHub Pages project sites are served from /<repo-name>/, not /.
  // `vite preview` (used by Playwright) serves the real build output, so
  // it needs the production base too — only plain `vite dev` stays at "/"
  // for simpler local browsing.
  base: command === "build" || isPreview ? "/cv-website/" : "/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    // e2e/ holds Playwright specs, run separately via `npm run test:e2e`.
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
  },
}));
