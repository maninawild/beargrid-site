import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/expertise",
  "/contact",
  "/legal",
  "/privacy-policy",
  "/cookie-policy",
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
  await page.getByRole("button", { name: "Bedrijfsnavigatie openen" }).click();
  await expect(page.getByRole("navigation", { name: "Mobiele bedrijfsnavigatie" })).toBeVisible();
  await page.getByRole("button", { name: "Bedrijfsnavigatie sluiten" }).press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobiele bedrijfsnavigatie" })).toBeHidden();
  await expect(page.locator(".new-hero").getByRole("link", { name: "Neem contact op" })).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "Investeerders" })).toHaveAttribute("href", "/investors");
  await expect(page.getByRole("link", { name: "Neem via WhatsApp contact op met Bear Grid" })).toHaveAttribute("target", "_blank");
});

test("homepage services and investor page have clear conversion paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".service-grid").getByRole("link", { name: "Neem contact op" })).toHaveCount(6);
  await page.goto("/investors");
  await expect(page.getByRole("heading", { name: "Beoordeel de technologie voordat u kapitaal inzet." })).toBeVisible();
  await expect(page.locator(".investor-hero").getByRole("link", { name: "Neem contact op" })).toHaveAttribute(
    "href",
    "/contact?intent=investor",
  );
});

test("homepage ecosystem logos are local, visible and linked", async ({ page, request }) => {
  const logos = [
    ["Bezoek de website van YES!Delft", "https://yesdelft.com/", "/logos/yesdelft-logo.png"],
    ["Bezoek de website van InspireXChange", "https://www.inspirexchange.nl/", "/logos/inspirexchange.png"],
    ["Bezoek de website van Platform Zero", "https://platformzero.co/", "/logos/platform-zero.png"],
    ["Bezoek de website van Design Hub International", "https://www.dhi-architecture.com/", "/logos/dhi-logo.png"],
    ["Bezoek de website van KREW Community", "https://www.krewcommunity.com/", "/logos/krew-logo.png"],
    ["Bezoek de website van Localie Hub", "https://hub.localie.co/", "/logos/localie-hub.png"],
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
    body: JSON.stringify({ message: "Dank u. We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op." }),
  }));
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Naam", exact: true }).fill("QA Test");
  await page.getByRole("textbox", { name: "Bedrijf", exact: true }).fill("Bear Grid QA");
  await page.getByLabel("Waarmee kunnen we u helpen?").selectOption({ label: "AI-automatisering" });
  await page.getByRole("textbox", { name: "Beschrijf uw vraagstuk", exact: true }).fill("Een voldoende gedetailleerde projectbeschrijving voor de kwaliteitscontrole.");
  await page.getByLabel("Budget").selectOption({ label: "€20–100k" });
  await page.getByRole("textbox", { name: "Gewenste planning", exact: true }).fill("Binnen acht weken");
  await page.getByRole("textbox", { name: "E-mailadres", exact: true }).fill("qa@example.com");
  await page.getByRole("button", { name: "Aanvraag verzenden" }).click();
  await expect(page.getByRole("status")).toContainText("We hebben uw aanvraag ontvangen");
  await expect(page.getByRole("link", { name: "Stuur ons een bericht via WhatsApp" })).toHaveAttribute(
    "href",
    "https://wa.me/message/4OIGQ3FHUZQSD1",
  );
});

test("confirmed legacy routes redirect permanently", async ({ request }) => {
  for (const [source, destination] of [
    ["/services", "/expertise"],
    ["/bear-grid-device", "/history/original-platform/bear-device"],
    ["/copy-of-bear-device", "/history/original-platform/bear-grid-platform"],
    ["/contacts", "/contact"],
    ["/privacy", "/privacy-policy"],
    ["/cookies", "/cookie-policy"],
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
    ["/legal", "https://beargridsolutions.com/legal"],
    ["/privacy-policy", "https://beargridsolutions.com/privacy-policy"],
    ["/cookie-policy", "https://beargridsolutions.com/cookie-policy"],
  ] as const;

  for (const [route, canonical] of canonicalRoutes) {
    await page.goto(route);
    await expect(page.locator("html")).toHaveAttribute("lang", "nl-NL");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /https:\/\/beargridsolutions\.com\//);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    for (const payload of jsonLd) expect(() => JSON.parse(payload)).not.toThrow();
  }

  await page.goto("/history/original-platform");
  expect(await page.locator('[lang="en"]').count()).toBeGreaterThan(0);
  await expect(page.getByText("Preserved original platform", { exact: false })).toBeVisible();

  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://beargridsolutions.com/sitemap.xml");
  for (const crawler of ["Googlebot", "Bingbot", "Applebot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"]) {
    expect(robots).toContain(crawler);
  }
  expect(robots).toContain("Disallow: /brand-assets-review");

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/expertise</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/legal</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/privacy-policy</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/cookie-policy</loc>");
  expect(sitemap).not.toContain("beargrid-site.vercel.app");
  expect(sitemap).not.toContain("/history/original-platform/home</loc>");
  expect(sitemap).not.toContain("/history/original-platform/history</loc>");
  expect(sitemap).not.toContain("<priority>");
  expect(sitemap).not.toContain("<changefreq>");

  expect((await request.get("/manifest.webmanifest")).status()).toBe(200);
  expect((await request.get("/llms.txt")).status()).toBe(200);
  for (const asset of ["/favicon.ico", "/icon.svg", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png", "/og.png"]) {
    expect((await request.get(asset)).status()).toBe(200);
  }
});

test("major pages provide distinct, answer-first service definitions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Onafhankelijk R&D-adviesbureau");
  await expect(page.getByText("in Nederland gevestigd onafhankelijk R&D-adviesbureau", { exact: false }).first()).toBeVisible();

  await page.goto("/expertise");
  for (const service of ["Technologiebeoordeling", "R&D-strategie", "Validatie van nieuwe ondernemingen", "Innovatiepartnerschappen"]) {
    await expect(page.getByRole("heading", { name: service, exact: true })).toBeVisible();
  }
  await expect(page.getByText("Een onafhankelijke beoordeling voor teams of investeerders", { exact: false })).toBeVisible();

  await page.goto("/investors");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Beoordeel de technologie");
  await expect(page.getByText("bevindingen, ontbrekend bewijs, materiële risico", { exact: false })).toBeVisible();

  const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .flatMap((payload) => {
      const parsed = JSON.parse(payload);
      return parsed["@graph"] ?? [parsed];
    });
  const organization = jsonLd.find((item) => item["@id"] === "https://beargridsolutions.com/#organization");
  expect(organization?.name).toBe("Bear Grid");
  expect(organization?.logo?.url).toBe("https://beargridsolutions.com/logos/bear-grid-logo.png");
});

test("history preserves the approved narrative and current actions", async ({ page }) => {
  await page.goto("/history");
  await expect(page.getByText("Bear Grid werd in 2019 in Israël opgericht", { exact: false })).toBeVisible();
  await expect(page.getByText("bouwde vanaf 2021 de Nederlandse activiteiten op", { exact: false })).toBeVisible();
  await expect(page.getByText("bereikte in 2023 geen product-market fit", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: "oorspronkelijke Bear Grid-platform" }).first()).toHaveAttribute("href", "/history/original-platform");
  await expect(page.getByRole("link", { name: "Bespreek uw project" })).toHaveAttribute("href", "/contact?intent=project");
});

test("404 provides a recovery action", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "Pagina niet gevonden" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Terug naar Home" })).toHaveAttribute("href", "/");
});

test("approved brand asset review is noindex, responsive and complete", async ({ page, request }) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/brand-assets-review");
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
    }
    await page.waitForTimeout(250);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    expect(await page.locator("img").evaluateAll((images) =>
      images.filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length,
    )).toBe(0);
    expect(errors).toEqual([]);
  }

  const assets = [
    "bear-grid-logo-horizontal.svg", "bear-grid-logo-horizontal.png",
    "bear-grid-logo-mark.svg", "bear-grid-logo-mark.png",
    "bear-grid-logo-black.svg", "bear-grid-logo-black.png",
    "bear-grid-logo-white.svg", "bear-grid-logo-white.png",
    "favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "icon.svg",
    "apple-touch-icon.png", "icon-192.png", "icon-512.png", "maskable-icon-512.png",
    "og-default.png", "og-home.png", "og-expertise.png", "og-history.png",
    "og-investors.png", "og-contact.png", "twitter-default.png", "asset-manifest.json",
  ];
  for (const asset of assets) {
    expect((await request.get(`/brand-assets/${asset}`)).status()).toBe(200);
  }

  const source = await (await request.get("/logos/bear-grid-logo.png")).body();
  const approvedMark = await (await request.get("/brand-assets/bear-grid-logo-mark.png")).body();
  expect(approvedMark.equals(source)).toBe(true);

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/brand-assets-review");
});
