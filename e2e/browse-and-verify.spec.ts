import { test, expect } from "@playwright/test";

/**
 * Visits each main route, exercises key buttons/links, and asserts no console errors.
 * Run with: npx playwright test e2e/browse-and-verify.spec.ts
 */
test.describe("Site navigation and console", () => {
  test("visit all routes and check console", async ({ page }) => {
    test.setTimeout(90_000);
    const errors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() !== "error") return;
      const text = msg.text();
      // Ignore expected 404 when we intentionally visit a non-existent route
      if (text.includes("Failed to load resource") && text.includes("404")) return;
      errors.push(text);
    });

    const routes = ["/", "/about", "/packages", "/schedule", "/faq", "/privacy", "/terms"];

    for (const path of routes) {
      await test.step(`visit ${path || "/"}`, async () => {
        await page.goto(path || "/");
        await expect(page.locator("body")).toBeVisible({ timeout: 15000 });
        await page.waitForLoadState("networkidle").catch(() => {});
      });
    }

    await test.step("home: click View Packages", async () => {
      await page.goto("/");
      await page.getByRole("link", { name: "View Packages" }).first().click();
      await expect(page).toHaveURL(/\/packages/);
    });

    await test.step("home: click Book Lesson", async () => {
      await page.goto("/");
      await page.getByRole("link", { name: "Book Lesson" }).first().click();
      await expect(page).toHaveURL(/\/schedule/);
    });

    await test.step("UI: About page content visible", async () => {
      await page.goto("/about");
      await expect(page.getByText("Meet your coach")).toBeVisible({ timeout: 10000 });
    });

    await test.step("UI: Packages page content visible", async () => {
      await page.goto("/packages");
      await expect(page.getByRole("link", { name: "Choose Package" }).first()).toBeVisible({ timeout: 10000 });
    });

    await test.step("UI: FAQ page content visible", async () => {
      await page.goto("/faq");
      await expect(page.getByRole("heading", { name: "FAQ" })).toBeVisible({ timeout: 10000 });
    });

    await test.step("UI: 404 and Back to Home", async () => {
      await page.goto("/no-such-page");
      await expect(page.getByText("Page not found")).toBeVisible({ timeout: 5000 });
      await page.getByRole("link", { name: /Back to Home/i }).click();
      await expect(page).toHaveURL("/");
    });

    await test.step("UI: footer Privacy and Terms links", async () => {
      await page.goto("/");
      await page.getByRole("link", { name: "Privacy" }).scrollIntoViewIfNeeded();
      await page.getByRole("link", { name: "Privacy" }).click();
      await expect(page).toHaveURL(/\/privacy/);
      await page.getByRole("link", { name: "Terms" }).scrollIntoViewIfNeeded();
      await page.getByRole("link", { name: "Terms" }).click();
      await expect(page).toHaveURL(/\/terms/);
    });

    const errorSummary =
      errors.length === 0
        ? "No console errors."
        : `Console errors (${errors.length}):\n${errors.slice(0, 15).join("\n")}`;
    console.log("\n--- Console summary ---\n" + errorSummary);
    expect(errors, errorSummary).toHaveLength(0);
  });
});
