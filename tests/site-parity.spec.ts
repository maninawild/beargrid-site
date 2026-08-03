import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/expertise",
  "/contact",
  "/legal",
  "/privacy",
  "/cookies",
  "/investors",
  "/history",
  "/nl",
  "/nl/expertise",
  "/nl/contact",
  "/nl/legal",
  "/nl/privacy",
  "/nl/cookies",
  "/nl/investors",
  "/nl/history",
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
        for (const image of await page.locator("img").all()) await image.scrollIntoViewIfNeeded();
        await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete));
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
  await expect(page.locator(".new-hero").getByRole("link", { name: "Let's Talk" })).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "Investors" })).toHaveAttribute("href", "/investors");
  await expect(page.getByRole("link", { name: "Contact Bear Grid on WhatsApp" })).toHaveAttribute("target", "_blank");
});

test("homepage services and investor page have clear conversion paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".service-grid").getByRole("link", { name: "Let's Talk" })).toHaveCount(6);
  await page.goto("/investors");
  await expect(page.getByRole("heading", { name: "Assess the technology before committing capital." })).toBeVisible();
  await expect(page.locator(".investor-hero").getByRole("link", { name: "Let's Talk" })).toHaveAttribute(
    "href",
    "/contact?intent=investor",
  );
});

test("homepage ecosystem logos are local, visible and linked", async ({ page, request }) => {
  const logos = [
    ["Visit YES!Delft website", "https://yesdelft.com/", "/logos/yesdelft-logo.png"],
    ["Visit InspireXChange website", "https://www.inspirexchange.nl/", "/logos/inspirexchange.png"],
    ["Visit Platform Zero website", "https://platformzero.co/", "/logos/platform-zero.png"],
    ["Visit Design Hub International website", "https://www.dhi-architecture.com/", "/logos/dhi-logo.png"],
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

test("language switcher preserves equivalent routes and contact parameters", async ({ page }) => {
  await page.goto("/expertise");
  await expect(page.locator("header").getByRole("link", { name: "NL", exact: true })).toHaveAttribute("href", "/nl/expertise");
  await page.locator("header").getByRole("link", { name: "NL", exact: true }).click();
  await expect(page).toHaveURL(/\/nl\/expertise$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "nl-NL");
  await expect(page.locator("header").getByRole("link", { name: "EN", exact: true })).toHaveAttribute("href", "/expertise");

  await page.goto("/nl/contact?service=AI-automatisering&intent=project");
  await expect(page.locator("header").getByRole("link", { name: "EN", exact: true })).toHaveAttribute(
    "href",
    "/contact?service=AI-automatisering&intent=project",
  );
});

test("modern localized routes are crawlable and do not cross languages", async ({ page, request }) => {
  const englishRoutes = ["/", "/expertise", "/investors", "/history", "/contact", "/legal", "/privacy", "/cookies"];
  const dutchRoutes = ["/nl", "/nl/expertise", "/nl/investors", "/nl/history", "/nl/contact", "/nl/legal", "/nl/privacy", "/nl/cookies"];
  for (const route of [...englishRoutes, ...dutchRoutes]) {
    const response = await request.get(route, { maxRedirects: 0 });
    expect(response.status(), route).toBe(200);
  }
  expect((await request.get("/nl/history/original-platform", { maxRedirects: 0 })).status()).toBe(404);

  const dutchHtml = await (await request.get("/nl")).text();
  expect(dutchHtml).toContain("Onafhankelijk R&amp;D-adviesbureau");
  const englishHtml = await (await request.get("/")).text();
  expect(englishHtml).toContain("Independent R&amp;D consultancy");

  for (const route of dutchRoutes) {
    await page.goto(route);
    const internalLinks = await page.locator('main a[href^="/"], footer a[href^="/"]:not([hreflang])').evaluateAll((links) =>
      links.map((link) => link.getAttribute("href") ?? ""),
    );
    for (const href of internalLinks) {
      expect(
        href === "/history/original-platform" ||
        href.startsWith("/history/original-platform/") ||
        href === "/nl" ||
        href.startsWith("/nl/"),
        `${route} unexpectedly links to ${href}`,
      ).toBe(true);
    }
  }
});

test("Dutch form and shared cookie consent remain localized", async ({ page }) => {
  await page.route("**/api/contact", (route) => route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ message: "Dank u. We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op." }),
  }));
  await page.goto("/nl/contact");
  await page.getByRole("textbox", { name: "Naam", exact: true }).fill("QA Test");
  await page.getByRole("textbox", { name: "Bedrijf", exact: true }).fill("Bear Grid QA");
  await page.getByLabel("Waarmee kunnen we u helpen?").selectOption({ label: "AI-automatisering" });
  await page.getByRole("textbox", { name: "Beschrijf uw vraagstuk", exact: true }).fill("Een voldoende gedetailleerde projectbeschrijving voor kwaliteitscontrole.");
  await page.getByLabel("Budget").selectOption({ label: "€20–100k" });
  await page.getByRole("textbox", { name: "Gewenste planning", exact: true }).fill("Binnen acht weken");
  await page.getByRole("textbox", { name: "E-mailadres", exact: true }).fill("qa@example.com");
  await page.getByRole("button", { name: "Aanvraag verzenden" }).click();
  await expect(page.getByRole("status")).toContainText("We hebben uw aanvraag ontvangen");

  await page.evaluate(() => localStorage.removeItem("bear-grid-cookie-consent"));
  await page.reload();
  await expect(page.getByRole("heading", { name: "Uw privacykeuzes" })).toBeVisible();
  await page.getByRole("button", { name: "Alles accepteren" }).click();
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Your privacy choices" })).toHaveCount(0);
  await page.getByRole("button", { name: "Open cookie settings" }).click();
  await expect(page.getByRole("heading", { name: "Your privacy choices" })).toBeVisible();
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
    body: JSON.stringify({ message: "Thank you. We have received your enquiry and will contact you shortly." }),
  }));
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Name", exact: true }).fill("QA Test");
  await page.getByRole("textbox", { name: "Company", exact: true }).fill("Bear Grid QA");
  await page.getByLabel("What do you need help with?").selectOption({ label: "AI Automation" });
  await page.getByRole("textbox", { name: "Describe your challenge", exact: true }).fill("A sufficiently detailed project description for final quality assurance.");
  await page.getByLabel("Budget").selectOption({ label: "€20–100k" });
  await page.getByRole("textbox", { name: "Desired timeline", exact: true }).fill("Within eight weeks");
  await page.getByRole("textbox", { name: "Email", exact: true }).fill("qa@example.com");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("status")).toContainText("We have received your enquiry");
  await expect(page.getByRole("link", { name: "Message us on WhatsApp" })).toHaveAttribute(
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
    ["/privacy-policy", "/privacy"],
    ["/cookie-policy", "/cookies"],
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
    ["/privacy", "https://beargridsolutions.com/privacy"],
    ["/cookies", "https://beargridsolutions.com/cookies"],
    ["/nl", "https://beargridsolutions.com/nl"],
    ["/nl/expertise", "https://beargridsolutions.com/nl/expertise"],
    ["/nl/investors", "https://beargridsolutions.com/nl/investors"],
    ["/nl/history", "https://beargridsolutions.com/nl/history"],
    ["/nl/contact?intent=project", "https://beargridsolutions.com/nl/contact"],
    ["/nl/legal", "https://beargridsolutions.com/nl/legal"],
    ["/nl/privacy", "https://beargridsolutions.com/nl/privacy"],
    ["/nl/cookies", "https://beargridsolutions.com/nl/cookies"],
  ] as const;

  for (const [route, canonical] of canonicalRoutes) {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /https:\/\/beargridsolutions\.com\//);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    const isDutch = route.startsWith("/nl");
    await expect(page.locator("html")).toHaveAttribute("lang", isDutch ? "nl-NL" : "en");
    if (!route.startsWith("/history/original-platform")) {
      const path = route.split("?")[0].replace(/^\/nl/, "") || "/";
      const englishUrl = `https://beargridsolutions.com${path === "/" ? "" : path}`;
      const dutchUrl = `https://beargridsolutions.com/nl${path === "/" ? "" : path}`;
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", englishUrl);
      await expect(page.locator('link[rel="alternate"][hreflang="nl-NL"]')).toHaveAttribute("href", dutchUrl);
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute("href", englishUrl);
    }
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    for (const payload of jsonLd) expect(() => JSON.parse(payload)).not.toThrow();
    if (!route.startsWith("/history/original-platform")) {
      const localizedEntities = jsonLd.flatMap((payload) => {
        const parsed = JSON.parse(payload);
        return parsed["@graph"] ?? [parsed];
      }).filter((entity) => entity.inLanguage);
      expect(localizedEntities.length).toBeGreaterThan(0);
      for (const entity of localizedEntities) expect(entity.inLanguage).toBe(isDutch ? "nl-NL" : "en");
    }
  }

  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://beargridsolutions.com/sitemap.xml");
  for (const crawler of ["Googlebot", "Bingbot", "Applebot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"]) {
    expect(robots).toContain(crawler);
  }
  expect(robots).toContain("Disallow: /brand-assets-review");

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/expertise</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/legal</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/privacy</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/cookies</loc>");
  expect(sitemap).toContain("<loc>https://beargridsolutions.com/nl/expertise</loc>");
  expect(sitemap).toContain('hreflang="nl-NL"');
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
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Independent R&D consultancy");
  await expect(page.getByText("Netherlands-based independent R&D consultancy", { exact: false }).first()).toBeVisible();

  await page.goto("/expertise");
  for (const service of ["Technology Assessment", "R&D Strategy", "Venture Validation", "Innovation Partnerships"]) {
    await expect(page.getByRole("heading", { name: service, exact: true })).toBeVisible();
  }
  await expect(page.getByText("An independent review for teams or investors", { exact: false })).toBeVisible();

  await page.goto("/investors");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Assess the technology");
  await expect(page.getByText("findings, evidence gaps, material risks", { exact: false })).toBeVisible();

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
    "og-default-nl.png", "og-home-nl.png", "og-expertise-nl.png", "og-history-nl.png",
    "og-investors-nl.png", "og-contact-nl.png", "twitter-default-nl.png",
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
