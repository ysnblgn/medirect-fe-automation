import { Page } from "@playwright/test";

export async function acceptCookiesIfPresent(page: Page) {
  try {
    await page.getByRole("button", { name: "Accept" }).click({ timeout: 5000 });
  } catch {
    return;
  }
}
