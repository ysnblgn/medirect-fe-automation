import { Page, Locator } from '@playwright/test';
import { Security, SecurityType } from '../types/securities';

export class SearchPage {
  readonly page: Page;
  readonly equitiesTab: Locator;
  readonly equitiesTable: Locator;
  readonly equityRows: Locator;
  readonly searchInput: Locator;
  readonly firstEquityRow: Locator;
  readonly moreInformationLink: Locator;

  private static readonly SEARCH_PATH: Record<SecurityType, string> = {
    [Security.Equities]: '/invest/equities/search',
    [Security.ETFs]: '/invest/etfs/search',
    [Security.Bonds]: '/invest/bonds/search',
    [Security.Funds]: '/invest/mutual-funds/search',
  } as const;

  constructor(page: Page) {
    this.page = page;
    this.equitiesTab = page.locator('[data-t="link"]').filter({hasText: 'Equities'});
    this.equitiesTable = page.locator('[data-t="table"]');
    this.equityRows = page.locator('[data-t^="table-row-"]');
    this.firstEquityRow = this.equityRows.first();
    this.searchInput = page.getByRole('textbox', { name: 'Enter name, ISIN, or ticker' });
    this.moreInformationLink = page.getByRole('button', { name: 'More information' })

  }

  async navigate(type: SecurityType) {
    await this.page.goto(SearchPage.SEARCH_PATH[type]);
  }

  async searchFor(query: string) {
    await this.searchInput.fill(query);
  }

  async openMoreInformation() {
    await this.moreInformationLink.click();
  }

}
