import { expect, type Page, type Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.inventoryItems = page.locator(".inventory_item");
    this.shoppingCartBadge = page.locator("[data-test='shopping-cart-badge']");
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }
  async getInventoryCount() {
    return this.inventoryItems.count();
  }

  async addProductToCart(productName: string) {
    const formattedName = productName.toLowerCase().replace(/\s+/g, "-");
    const addToCartButton = `button[data-test="add-to-cart-${formattedName}"]`;
    await this.page.click(addToCartButton);
  }
}
