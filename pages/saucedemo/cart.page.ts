import { Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private cartItems = () => this.page.locator('.cart_item');
  private checkoutButton = () => this.page.locator('[data-test="checkout"]');
  private removeItemButton = (itemName: string) =>
    this.page.locator(`.cart_item:has-text("${itemName}") button`);

  // Page Actions
  async getCartItemsCount(): Promise<number> {
    return this.cartItems().count();
  }

  async removeItemFromCart(itemName: string) {
    await this.removeItemButton(itemName).click();
  }

  async checkout() {
    await this.checkoutButton().click();
  }
}
