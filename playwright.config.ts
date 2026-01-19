import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  timeout: 30_000,

  expect: {
    timeout: 5_000
  },

  reporter: [
    ["html", { open: "never" }],
    ["list"]
  ],

  use: {
    baseURL: 'https://www.medirect.com.mt',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});
