import { test, expect } from "@playwright/test";
test("Viewing a replay ", async ({ page }) => {
  await page.goto(
    "https://app.replay.io/recording/overboard--a997f607-4593-41f9-8158-683a227452a2"
  );
  await page.goto(
    "https://app.replay.io/recording/overboard--a997f607-4593-41f9-8158-683a227452a2?point=3569704090276136788698847036571993&time=2130&hasFrames=false"
  );

  await page.locator("text=keyboardKey Press -").nth(1).click();
  await expect(page).toHaveURL(
    "https://app.replay.io/recording/overboard--a997f607-4593-41f9-8158-683a227452a2?point=10060075163962019485281188677944193&time=5954&hasFrames=false"
  );
  await page.locator("text=ads_clickClick0:07").click();
  await expect(page).toHaveURL(
    "https://app.replay.io/recording/overboard--a997f607-4593-41f9-8158-683a227452a2?point=11033630824950009472297442620736454&time=6914&hasFrames=false"
  );

  await page.locator("text=ViewerDevTools").click();
  await page.locator('button:has-text("forum")').click();
  await page
    .locator('[id="toolbox-toolbar\\ space-y-1"] button:has-text("info")')
    .click();
});
