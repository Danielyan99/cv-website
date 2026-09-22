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
    baseURL: "http://localhost:4173",
  },
  webServer: {
    command: "npm run build && npm run preview -- --port 4173",
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
