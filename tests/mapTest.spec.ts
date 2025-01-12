import { test } from "./fixtures";
import { expect } from "@playwright/test";

test("Worker marker visible", async ({ page }) => {
  await page.getByTestId("Tacoma marker").click();
  await expect(page.getByTestId("popup")).toBeVisible();
});
