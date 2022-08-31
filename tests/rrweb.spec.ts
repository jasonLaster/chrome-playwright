import { test, expect } from "@playwright/test";
test("Viewing a replay ", async ({ page }) => {
  await page.goto(
    "https://rrwebdebug.com/play/index.html?url=https%3A%2F%2Fgist.github.com%2FJuice10%2F19ca6594a9e80074385b19817424c093&version=1.0.0-alpha.1&play=on"
  );

  await page.locator("#jsoneditor");
  await new Promise((r) => setTimeout(r, 10_000));
});
