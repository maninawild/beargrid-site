import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/expertise",
  "/contact",
  "/investors",
  "/history",
  "/history/original-platform",
  "/history/original-platform/home",
  "/history/original-platform/history",
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
  await expect(page.getByRole("link", { name: "Discuss your project" }).first()).toHaveAttribute("href", "/contact?intent=project");
  await expect(page.getByRole("link", { name: "Investors" })).toHaveAttribute("href", "/investors");
  await expect(page.getByRole("link", { name: "Contact Bear Grid on WhatsApp" })).toHaveAttribute("target", "_blank");
});

test("homepage services and investor page have clear conversion paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Request an assessment/ })).toHaveCount(6);
  await page.goto("/investors");
  await expect(page.getByRole("heading", { name: "Meet ambitious R&D ventures." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a conversation" }).first()).toHaveAttribute(
    "href",
    "/contact?intent=investor",
  );
});

test("homepage ecosystem logos are local, visible and linked", async ({ page, request }) => {
  const logos = [
    ["Visit YES!Delft website", "https://yesdelft.com/", "/logos/yesdelft-logo.png"],
    ["Visit InspireXChange website", "https://www.inspirexchange.nl/", "/logos/inspirexchange.png"],
    ["Visit Platform Zero website", "https://platformzero.co/", "/logos/platform-zero.png"],
    ["Visit Sub-Zero website", "https://platformzero.co/sub-zero/", "/logos/platform-zero.png"],
    ["Visit KREW Community website", "https://www.krewcommunity.com/", "/logos/krew-logo.png"],
    ["Visit Localie Hub website", "https://hub.localie.co/", "/logos/localie-hub.png"],
  ] as const;

  await page.goto("/#expertise");
  await page.locator(".ecosystem-section").scrollIntoViewIfNeeded();

  for (const [label, href, src] of logos) {
    const card = page.getByRole("link", { name: label });
    await expect(card).toBeVisible();
    await expect(card).toHaveAttribute("href", href);
    await expect(card).toHaveAttribute("target", "_blank");
    const image = card.locator("img");
    await expect(image).toBeVisible();
    expect(decodeURIComponent((await image.getAttribute("src")) ?? "")).toContain(src);
    expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    expect((await request.get(src)).status()).toBe(200);
  }
});

test("legacy navigation remains inside the archive", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/history/original-platform/home");

  await expect(page.locator("header .brand")).toHaveAttribute(
    "href",
    "/history/original-platform/home",
  );
  await expect(page.getByRole("link", { name: "HOME", exact: true })).toHaveAttribute(
    "href",
    "/history/original-platform/home",
  );
  await expect(page.getByRole("link", { name: "WHAT WE DO", exact: true })).toHaveAttribute(
    "href",
    "/history/original-platform/use-cases",
  );
  await expect(
    page.locator('header a[href="/history/original-platform/history"]').first(),
  ).toHaveAttribute("href", "/history/original-platform/history");
});

test("contact form validates and submits", async ({ page }) => {
  await page.route("**/api/contact", (route) => route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ message: "Thank you. Your application has been sent." }),
  }));
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Name", exact: true }).fill("QA Test");
  await page.getByRole("textbox", { name: "Company", exact: true }).fill("Bear Grid QA");
  await page.getByRole("textbox", { name: "Email", exact: true }).fill("qa@example.com");
  await page.getByRole("textbox", { name: "Short project description", exact: true }).fill("A sufficiently detailed project description for final quality assurance.");
  await page.getByRole("button", { name: "Submit project details" }).click();
  await expect(page.getByRole("status")).toContainText("application has been sent");
});

test("confirmed legacy routes redirect permanently", async ({ request }) => {
  for (const [source, destination] of [
    ["/services", "/expertise"],
    ["/bear-grid-device", "/history/original-platform/bear-device"],
    ["/copy-of-bear-device", "/history/original-platform/bear-grid-platform"],
    ["/contacts", "/contact"],
  ]) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(destination);
  }
});

test("SEO metadata, crawler files and structured data are valid", async ({ page, request }) => {
  const canonicalRoutes = [
    ["/", "https://beargridsolutions.com"],
    ["/expertise", "https://beargridsolutions.com/expertise"],
    ["/investors", "https://beargridsolutions.com/investors"],
    ["/history", "https://beargridsolutions.com/history"],
    ["/contact?intent=project", "https://beargridsolutions.com/contact"],
    ["/history/original-platform", "https://beargridsolutions.com/history/original-platform"],
  ] as const;

  for (const [route, canonical] of canonicalRoutes) {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /https:\/\/beargridsolutions\.com\//);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    for (const payload of jsonLd) expect(() => JSON.parse(payload)).not.toThrow();
  }

  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://beargridsolutions.com/sitemap.xml");
  for (const crawler of ["Googlebot", "Bingbot", "Applebot", "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"]) {
    expect(robots).toContain(crawler);
  }

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/expertise</loc>");
  expect(sitemap).not.toContain("beargrid-site.vercel.app");
  expect(sitemap).not.toContain("/history/original-platform/home</loc>");
  expect(sitemap).not.toContain("/history/original-platform/history</loc>");

  expect((await request.get("/manifest.webmanifest")).status()).toBe(200);
  expect((await request.get("/llms.txt")).status()).toBe(200);
  for (const asset of ["/favicon.ico", "/icon.svg", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png", "/og.png"]) {
    expect((await request.get(asset)).status()).toBe(200);
  }
});

test("history preserves the approved narrative and current actions", async ({ page }) => {
  await page.goto("/history");
  await expect(page.getByText("Bear Grid was founded in Israel in 2019", { exact: false })).toBeVisible();
  await expect(page.getByText("began building its Dutch operations in 2021", { exact: false })).toBeVisible();
  await expect(page.getByText("did not reach product-market fit in 2023", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: "Original Bear Grid Platform" }).first()).toHaveAttribute("href", "/history/original-platform");
  await expect(page.getByRole("link", { name: "Discuss your project" })).toHaveAttribute("href", "/contact?intent=project");
});

test("404 provides a recovery action", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to Home" })).toHaveAttribute("href", "/");
});
