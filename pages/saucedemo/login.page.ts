import {expect, type Page, type Locator} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameTextBox : Locator;
  readonly passwordTextBox : Locator;
  readonly loginButton : Locator;
  readonly errorMessage : Locator;


  // Define selectors in constructor or as class fields
  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator('#user-name');
    this.passwordTextBox = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Page Actions
  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}
