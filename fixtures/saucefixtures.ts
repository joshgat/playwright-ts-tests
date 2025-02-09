import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/saucedemo/login.page';
import { InventoryPage } from '../pages/saucedemo/inventory.page';

type SauceFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<SauceFixtures>({
  // The loginPage fixture: create a new instance for each test.
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  // The inventoryPage fixture: create a new instance for each test.
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

// Re-export 'expect' from Playwright so that you can import both from this file.
export { expect } from '@playwright/test';
