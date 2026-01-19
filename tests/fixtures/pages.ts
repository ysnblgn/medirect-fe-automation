import { test as base, expect } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";
import { DetailsPage } from "../pages/DetailsPage";
import { acceptCookiesIfPresent } from "../utils/cookies";
import { Security } from "../types/securities";

type Fixtures = {
  searchPage: SearchPage;
  detailsPage: DetailsPage;
};

export const test = base.extend<Fixtures>({
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await searchPage.navigate(Security.Equities);
    await acceptCookiesIfPresent(page);
    await use(searchPage);
  },

  detailsPage: async ({ page }, use) => {
    await use(new DetailsPage(page));
  },
});

export { expect };
