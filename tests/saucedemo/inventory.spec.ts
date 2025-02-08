import { test, expect } from "../../fixtures/saucefixtures"; // Ensure the casing matches the file name
import loginData from "../../data/saucedemo/loginData.json";
import inventoryData from "../../data/saucedemo/inventoryData.json";

test.describe("Inventory Tests", () => {
  // Use the loginPage fixture to perform login before each test.
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
  });

  test("Should have items in inventory", async ({ inventoryPage }) => {
    const inventoryCount = await inventoryPage.getInventoryCount();
    await expect(inventoryCount).toBeGreaterThan(0);
  });

  test("Should add products to cart", async ({ inventoryPage }) => {
    await inventoryPage.addProductToCart(inventoryData.sauceLabsBackpack.name);
    await inventoryPage.addProductToCart(inventoryData.sauceLabsBikeLight.name);
    await expect(inventoryPage.shoppingCartBadge).toHaveText("2");
  });
});
