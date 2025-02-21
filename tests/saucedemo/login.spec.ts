import { test, expect } from "../../fixtures/saucefixtures";
import loginData from "../../data/saucedemo/loginData.json";

test.describe("Login Tests", () => {
  test("Should login successfully with valid credentials", async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
    await expect(inventoryPage.pageTitle).toHaveText("Products");
  });

  test("Should show error message with invalid credentials", async ({
    loginPage,
  }) => {
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
