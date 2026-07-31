import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/contact",
  "/history",
  "/history/original-platform",
  "/history/original-platform/use-cases",
  "/history/original-platform/solutions",
  "/history/original-platform/bear-device",
  "/history/original-platform/bear-grid-platform",
  "/history/original-platform/ai-interface",
  "/history/original-platform/coming-soon-03",
  "/history/original-platform/copy-of-asp-bear-grid",
  "/history/original-platform/about",
  "/history/original-platform/news",
  "/history/original-platform/jobs",
];

for (const viewport of [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "desktop", width: 1440, height: 900 },
]) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });
    for (const route of routes) {
      test(`${route} has valid layout, headings, images and links`, async ({ page }) => {
        const errors: string[] = [];
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });
        await page.goto(route);
        await expect(page.locator("main")).toHaveCount(1);
        await expect(page.locator("h1")).toHaveCount(1);
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
        await page.waitForTimeout(150);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
        expect(await page.locator("img").evaluateAll((images) =>
          images.filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length,
        )).toBe(0);
        expect(errors).toEqual([]);
      });
    }
  });
}

test("mobile navigation and CTA destinations work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open company navigation" }).click();
  await expect(page.getByRole("navigation", { name: "Company mobile navigation" })).toBeVisible();
  await page.getByRole("button", { name: "Close company navigation" }).press("Escape");
  await expect(page.getByRole("navigation", { name: "Company mobile navigation" })).toBeHidden();
  await expect(page.getByRole("link", { name: "Discuss a project" })).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "Write on WhatsApp" })).toHaveAttribute("target", "_blank");
});

test("contact form validates and submits", async ({ page }) => {
  await page.route("**/api/contact", (route) => route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ message: "Thank you. Your application has been sent." }),
  }));
  await page.goto("/contact");
  await page.getByLabel("Name *").fill("QA Test");
  await page.getByLabel("Email *").fill("qa@example.com");
  await page.getByLabel("What would you like to discuss? *").fill("Website QA");
  await page.getByLabel("Area of interest *").selectOption({ label: "Technology Project" });
  await page.getByLabel(/I consent/).check();
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.getByRole("status")).toContainText("application has been sent");
});

test("confirmed legacy routes redirect permanently", async ({ request }) => {
  for (const [source, destination] of [
    ["/bear-grid-device", "/history/original-platform/bear-device"],
    ["/copy-of-bear-device", "/history/original-platform/bear-grid-platform"],
    ["/contacts", "/contact"],
  ]) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(destination);
  }
});

test("404 provides a recovery action", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to Home" })).toHaveAttribute("href", "/");
});
