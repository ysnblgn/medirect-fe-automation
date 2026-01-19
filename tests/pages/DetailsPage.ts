import { Page, Locator } from '@playwright/test';

export class DetailsPage {
  readonly page: Page;
  readonly equitiesTab: Locator;
  readonly detailHeading: Locator;
  readonly restrictionMessage: Locator;
  readonly lockedIcons: Locator;
  readonly blurredChart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.equitiesTab = page.locator('[data-t="link"]').filter({hasText: 'Equities'});
    this.detailHeading = page.getByRole('heading', { name: 'Apple Inc (USD)' })
    this.restrictionMessage = page.getByRole('heading', { name: 'Do you want to start using' })
    this.lockedIcons = page.locator('img[alt="🔒"]');
    this.blurredChart = page.locator('img[src*="chart-blurred"]');
  }

}
