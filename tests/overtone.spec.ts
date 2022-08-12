// @ts-check
import { test, expect } from "@playwright/test";

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  // Go to https://62f2b4ee90fc0f08f669230f--overtone-demo.netlify.app/spotify/playlist/spotify:playlist:5gDdqXX8gWNvT2aPmwjB5V
  await page.goto(
    "https://62f2b4ee90fc0f08f669230f--overtone-demo.netlify.app/spotify/playlist/spotify:playlist:5gDdqXX8gWNvT2aPmwjB5V"
  );

  // Click text=😌 Mellow >> nth=1
  await page.locator("text=😌 Mellow").nth(1).click();
  await expect(page).toHaveURL(
    "https://62f2b4ee90fc0f08f669230f--overtone-demo.netlify.app/spotify/playlist/spotify:playlist:6jDxA8bflHbeRHNSDxaX2L"
  );

  // Click text=V Recordings >> nth=1
  await page.locator("text=V Recordings").nth(1).click();
  await expect(page).toHaveURL(
    "https://62f2b4ee90fc0f08f669230f--overtone-demo.netlify.app/spotify/playlist/spotify:playlist:0xNTCYUe9X8A8ITnmq6hMt"
  );

  // Click text=Tech House >> nth=1
  await page.locator("text=Tech House").nth(1).click();
  await expect(page).toHaveURL(
    "https://62f2b4ee90fc0f08f669230f--overtone-demo.netlify.app/spotify/playlist/spotify:playlist:618pCYz9YhautVBYwyjFVM"
  );
});
