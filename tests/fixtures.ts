import { test as base } from "@playwright/test";

export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto("http://127.0.0.1:5173/");
      await use();
    },
    { auto: true },
  ],
});
