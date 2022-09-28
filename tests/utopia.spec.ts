import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {
  // Go to https://utopia.app/p/36ae27be-public-beaches/
  await page.goto("https://utopia.app/p/36ae27be-public-beaches/");
  // Click [data-testid="navigator-item-0cd\/478\/a28\:a2a\/a1e\/155"] div:has-text("Card") >> nth=1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://utopia.app/p/4b2129a5-public-beaches-(forked)/' }*/),
    page
      .locator(
        '[data-testid="navigator-item-0cd\\/478\\/a28\\:a2a\\/a1e\\/155"] div:has-text("Card")'
      )
      .nth(1)
      .click(),
  ]);
  // Click [id="navigator-item-0cd\/478\/a28\:a2a\/a1e\/f4e"] div .css-bwokob div >> nth=0
  await page
    .locator(
      '[id="navigator-item-0cd\\/478\\/a28\\:a2a\\/a1e\\/f4e"] div .css-bwokob div'
    )
    .first()
    .click();
  // Click [data-testid="navigator-item-0cd\/478\/a28\:a2a\/a1e\/f4e"] img >> nth=3
  await page
    .locator(
      '[data-testid="navigator-item-0cd\\/478\\/a28\\:a2a\\/a1e\\/f4e"] img'
    )
    .nth(3)
    .click();
  // Click [data-testid="navigator-item-0cd\/478\/a28\:a2a\/a1e\/f4e"] img >> nth=3
  await page
    .locator(
      '[data-testid="navigator-item-0cd\\/478\\/a28\\:a2a\\/a1e\\/f4e"] img'
    )
    .nth(3)
    .click();
  // Click [data-testid="name-string-input-property-control"]
  await page
    .locator('[data-testid="name-string-input-property-control"]')
    .click();
  // Fill [data-testid="name-string-input-property-control"]
  await page
    .locator('[data-testid="name-string-input-property-control"]')
    .fill("The falls");
});
