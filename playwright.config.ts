import { defineConfig, devices } from '@playwright/test';

// Sanitizamos la env para que un PORT/BASE_URL raro no genere una URL invalida.
const PORT = (process.env.PORT || '').replace(/\D/g, '') || '3002';
const ENV_BASE_URL = (process.env.BASE_URL || '').trim();
const BASE_URL = /^https?:\/\//.test(ENV_BASE_URL) ? ENV_BASE_URL : `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm start',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
