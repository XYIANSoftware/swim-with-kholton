import { test, expect } from "@playwright/test";

/**
 * Mobile: open sidebar and screenshot to verify visibility.
 * Run with: npx playwright test e2e/browse-and-verify.spec.ts -g "mobile sidebar"
 * Screenshot saved under test-results/ (gitignored).
 */
test.describe("Mobile sidebar", () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone 14 Pro

  test("open sidebar in mobile viewport and screenshot", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible({ timeout: 10000 });

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const sidebar = page.locator(".sidebar-menu.p-sidebar, .p-sidebar.sidebar-menu");
    await expect(sidebar).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole("link", { name: "Home" }).first()).toBeVisible({ timeout: 3000 });

    await page.screenshot({
      path: "test-results/mobile-sidebar-open.png",
      fullPage: false,
    });

    const mask = page.locator(".p-component-overlay.p-sidebar-mask");
    await expect(mask).toBeVisible();
  });
});

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

test.describe("About page Stepper", () => {
  test("What to expect stepper: Next/Back changes visible step content", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("What to expect")).toBeVisible({ timeout: 10000 });

    const stepperWrapper = page.locator(".stepper-wrapper");
    await stepperWrapper.scrollIntoViewIfNeeded();

    // Step 1 (Check-in): content includes "A quick check-in"
    await expect(page.getByText("A quick check-in", { exact: false })).toBeVisible({ timeout: 5000 });

    // Click Next (visible button in active panel)
    const nextBtn = page.getByRole("button", { name: "Next" });
    await expect(nextBtn.first()).toBeVisible();
    await nextBtn.first().click();

    // Step 2 (Session): content includes "Warm-up"
    await expect(page.getByText("Warm-up", { exact: false })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText("A quick check-in", { exact: false })).not.toBeVisible();

    await nextBtn.first().click();

    // Step 3 (Takeaways): content includes "Takeaways you can practice"
    await expect(page.getByText("Takeaways you can practice", { exact: false })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText("Warm-up", { exact: false })).not.toBeVisible();

    // Back to step 2
    const backBtn = page.getByRole("button", { name: "Back" });
    await backBtn.first().click();
    await expect(page.getByText("Warm-up", { exact: false })).toBeVisible({ timeout: 5000 });

    // Back to step 1
    await backBtn.first().click();
    await expect(page.getByText("A quick check-in", { exact: false })).toBeVisible({ timeout: 5000 });
  });
});
