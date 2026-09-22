import { defineConfig, devices } from "@playwright/test";

// Playwright's browser binaries can't be downloaded in every local
// environment (some sandboxes restrict large binary downloads), so
// these tests are run in CI (see .github/workflows/deploy.yml) rather
// than relied on locally. `npx playwright install chromium` still
// works fine on a normal machine.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    // `vite preview` serves under the production base (/cv-website/, see
    // vite.config.ts) so this must match, not just the bare origin.
    baseURL: "http://localhost:4173/cv-website/",
  },
  webServer: {
    command: "npm run build && npm run preview -- --port 4173",
    url: "http://localhost:4173/cv-website/",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
