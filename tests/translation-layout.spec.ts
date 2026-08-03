import { expect, test } from "@playwright/test";

const routes = [
  "/", "/expertise", "/investors", "/history", "/contact", "/legal", "/privacy", "/cookies",
  "/nl", "/nl/expertise", "/nl/investors", "/nl/history", "/nl/contact", "/nl/legal", "/nl/privacy", "/nl/cookies",
];

const widths = [1440, 1280, 1024, 768, 430, 390, 320];
const zooms = [1, 1.25, 1.5];

test("EN and NL layouts remain stable across requested viewports and zoom levels", async ({ page }) => {
  test.setTimeout(300_000);

  for (const width of widths) {
    for (const zoom of zooms) {
      await page.setViewportSize({ width: Math.floor(width / zoom), height: Math.floor(1000 / zoom) });

      for (const route of routes) {
        const consoleErrors: string[] = [];
        const onConsole = (message: { type(): string; text(): string }) => {
          if (message.type() === "error") consoleErrors.push(message.text());
        };
        page.on("console", onConsole);
        const response = await page.goto(route, { waitUntil: "domcontentloaded" });
        expect(response?.status(), `${route} at ${width}px/${zoom * 100}%`).toBe(200);
        await page.locator("main").waitFor();

        const result = await page.evaluate(() => {
          const viewportWidth = document.documentElement.clientWidth;
          const visible = (element: Element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
          };
          const outside = Array.from(document.querySelectorAll("main h1, main h2, main h3, main p, main a, header a, header button, footer a"))
            .filter(visible)
            .filter((element) => {
              const rect = element.getBoundingClientRect();
              return rect.left < -1 || rect.right > viewportWidth + 1;
            })
            .map((element) => `${element.tagName}:${element.textContent?.trim().slice(0, 50)}`);
          const collisions = Array.from(document.querySelectorAll(".company-actions, .service-cta"))
            .filter(visible)
            .filter((cta) => {
              const c = cta.getBoundingClientRect();
              return Array.from(cta.parentElement?.children ?? []).some((sibling) => {
                if (sibling === cta || !visible(sibling)) return false;
                const s = sibling.getBoundingClientRect();
                return c.left < s.right && c.right > s.left && c.top < s.bottom && c.bottom > s.top;
              });
            })
            .map((element) => element.textContent?.trim().slice(0, 50));
          const smallTargets = viewportWidth <= 820
            ? Array.from(document.querySelectorAll("header a, header button, .company-button"))
                .filter(visible)
                .filter((element) => element.getBoundingClientRect().height < 43.5)
                .map((element) => element.textContent?.trim() || element.getAttribute("aria-label"))
            : [];
          return {
            horizontalOverflow: document.documentElement.scrollWidth - viewportWidth,
            outside,
            collisions,
            smallTargets,
          };
        });

        expect(result.horizontalOverflow, `${route} at ${width}px/${zoom * 100}% overflow`).toBeLessThanOrEqual(1);
        expect(result.outside, `${route} at ${width}px/${zoom * 100}% clipped content`).toEqual([]);
        expect(result.collisions, `${route} at ${width}px/${zoom * 100}% CTA collision`).toEqual([]);
        expect(result.smallTargets, `${route} at ${width}px/${zoom * 100}% touch targets`).toEqual([]);
        expect(consoleErrors, `${route} at ${width}px/${zoom * 100}% console`).toEqual([]);
        page.off("console", onConsole);
      }
    }
  }
});
