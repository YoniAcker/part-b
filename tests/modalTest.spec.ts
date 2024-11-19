import { test } from "./fixtures";
import { expect } from "@playwright/test";

test("Facebook button work", async ({ page }) => {
  await page.getByTestId("King button").click();
  await page.getByAltText("Facebook").click();
  const pagePromise = page.waitForEvent("popup");
  const newTab = await pagePromise;
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL("https://www.facebook.com/");
});

test("Local time visible", async ({ page }) => {
  await page.getByTestId("King button").click();
  await expect(page.getByText("Local Time: ")).toBeVisible();
});
