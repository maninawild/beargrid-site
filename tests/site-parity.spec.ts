import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/technology",
  "/technology/platform",
  "/contact",
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

  test("mobile menu exposes the final primary navigation", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation" }).click();
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: "Expertise" })).toHaveAttribute("href", "/#expertise");
    await expect(menu.getByRole("link", { name: "Technology" })).toHaveAttribute("href", "/technology");
    await expect(menu.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });

  test("legacy deep links use the same primary navigation", async ({ page }) => {
    await page.goto("/bear-grid-device");
    await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Technology" }).first()).toHaveAttribute("href", "/technology");
  });

  test("all visible internal links resolve", async ({ page, request }) => {
    for (const route of ["/", "/technology", "/contact"]) {
      await page.goto(route);
      const links = await page.locator('a[href^="/"]').evaluateAll((items) =>
        [...new Set(items.map((item) => (item as HTMLAnchorElement).getAttribute("href")!).filter(Boolean))],
      );
      for (const href of links) {
        const response = await request.get(href);
        expect(response.status(), `${route} → ${href}`).toBeLessThan(400);
      }
    }
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
