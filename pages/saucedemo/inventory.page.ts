import { expect, type Page, type Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.inventoryItems = page.locator(".inventory_item");
  }

  private addToCartButton(itemName: string): Locator {
    return this.page.locator(`.inventory_item:has-text("${itemName}") button`);
  }

  async getInventoryCount() {
    return this.inventoryItems.count();
  }

  async addItemToCart(itemName: string) {
    await this.addToCartButton(itemName).click();
  }
}
