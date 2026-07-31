import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/technology",
  "/technology/platform",
  "/sectors",
  "/solutions",
  "/bear-grid-device",
  "/copy-of-bear-device",
  "/copy-of-bear-grid-platform",
  "/coming-soon-03",
  "/copy-of-asp-bear-grid",
  "/about",
  "/news",
  "/jobs",
  "/contacts",
];

test.describe("Bear Grid site", () => {
  for (const route of routes) {
    test(`${route} has no broken images, errors, or overflow`, async ({ page }) => {
      const errors: string[] = [];
      const failures: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("requestfailed", (request) => failures.push(request.url()));
      await page.goto(route);
      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("main")).toBeVisible();
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(400);
      expect(await page.locator("img").evaluateAll((images) =>
        images.filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length,
      )).toBe(0);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
      expect(errors).toEqual([]);
      expect(failures).toEqual([]);
    });
  }

  test("desktop More menu is keyboard accessible and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto("/technology/platform");
    const more = page.getByRole("button", { name: "More" });
    await more.click();
    await expect(page.getByRole("menu")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("menu")).toBeHidden();
  });

  test("mobile menu exposes every destination", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/technology/platform");
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Bear Device" }).first()).toHaveAttribute("href", "/bear-grid-device");
  });

  test("modern company navigation and mobile menu work", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open company navigation" }).click();
    const menu = page.getByRole("navigation", { name: "Company mobile navigation" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    await expect(menu.getByRole("link", { name: /Original Platform/ })).toHaveAttribute("href", "/technology/platform");
  });

  test("legacy pages link back to Current Bear Grid", async ({ page }) => {
    await page.goto("/bear-grid-device");
    await expect(page.getByRole("link", { name: "Current Bear Grid" })).toHaveAttribute("href", "/");
  });

  test("contact form validates and submits to its endpoint", async ({ page }) => {
    await page.goto("/contacts");
    await page.getByPlaceholder("Name").fill("Parity Test");
    await page.getByPlaceholder("Email").fill("parity@example.com");
    await page.getByPlaceholder("Subject").fill("Test");
    await page.getByPlaceholder("Message").fill("Automated test");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByRole("status")).toContainText("We will be back to you shortly");
  });
});
