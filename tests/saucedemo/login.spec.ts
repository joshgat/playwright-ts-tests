import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/saucedemo/login.page";
import { InventoryPage } from "../../pages/saucedemo/inventory.page";
import loginData from "../../data/saucedemo/loginData.json";

test.describe("Login Tests", () => {
  test("Should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(inventoryPage.pageTitle).toHaveText("Products");
  });

  test("Should show error message with invalid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
