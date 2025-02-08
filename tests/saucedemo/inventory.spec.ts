import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/saucedemo/login.page";
import { InventoryPage } from "../../pages/saucedemo/inventory.page";
import loginData from "../../data/saucedemo/loginData.json";
import inventoryData from "../../data/saucedemo/inventoryData.json";

test.describe("Inventory Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
  });

  test("Should have items in inventory", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const inventoryCount = await inventoryPage.getInventoryCount();
    await expect(inventoryCount).toBeGreaterThan(0);
  });

  test("Should add products to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart(inventoryData.sauceLabsBackpack.name);
    await inventoryPage.addProductToCart(inventoryData.sauceLabsBikeLight.name);
    await expect(inventoryPage.shoppingCartBadge).toHaveText("2");
  });
});
