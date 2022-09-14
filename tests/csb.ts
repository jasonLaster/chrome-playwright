import { test } from "@playwright/test";

test("Checkout code sandbox w/ inline sourcemaps", async ({ page }) => {
  // Go to https://d43lf.csb.app/
  await page.goto("https://d43lf.csb.app/");
  // Click input[type="text"]
  await page.locator('input[type="text"]').click();
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill("23");
  // Press Enter
  await page.locator('input[type="text"]').press("Enter");
  // Click text=Submit
  await page.locator("text=Submit").click();
  // Click text=23
  await page.locator("text=23").click();
});
