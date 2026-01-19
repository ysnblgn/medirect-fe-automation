import { test, expect } from '../fixtures/pages';

test.describe('Equities Search Page', () => {
  test('Equities tab shows a list of equities', async ({ searchPage }) => {
    await expect(searchPage.equitiesTab).toBeVisible();
    await expect(searchPage.equitiesTable).toBeVisible();
    const rowCount = await searchPage.equityRows.count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('Search for a popular equity and open more information', async ({ searchPage, detailsPage, page }) => {
    await searchPage.searchFor('Apple Inc');
    await expect(searchPage.firstEquityRow).toContainText("Apple Inc");
    await searchPage.openMoreInformation();
    await expect(page).toHaveURL(/stocksreports?\//);
    await expect(detailsPage.detailHeading).toBeVisible();
  });

  test('Public users cannot see detailed security information', async ({ searchPage, detailsPage }) => {
    await searchPage.searchFor('Apple Inc');
    await expect(searchPage.firstEquityRow).toContainText("Apple Inc");
    await searchPage.openMoreInformation();
    await expect(detailsPage.restrictionMessage).toBeVisible();
    await expect(detailsPage.blurredChart).toBeVisible();
    await expect(detailsPage.lockedIcons.first()).toBeVisible();
    const lockCount = await detailsPage.lockedIcons.count();
    expect(lockCount).toBeGreaterThan(0);
  });

  test('Search for a non-existing equity returns an empty list', async ({ searchPage }) => {
    await searchPage.searchFor('THIS_EQUITY_DOES_NOT_EXIST_123');
    await expect(searchPage.equityRows).toHaveCount(0);
  });
});
