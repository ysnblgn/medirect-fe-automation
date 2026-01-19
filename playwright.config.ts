import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  timeout: 20 * 1000,

  expect: {
    timeout: 5000
  },

  retries: process.env.CI ? 2 : 0,
  
  reporter: [
    ["html", { open: "never" }],
    ["list"]
  ],

  use: {
    baseURL: 'https://www.medirect.com.mt',
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
      "AppleWebKit/537.36 (KHTML, like Gecko) " +
      "Chrome/120.0.0.0 Safari/537.36",
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});
