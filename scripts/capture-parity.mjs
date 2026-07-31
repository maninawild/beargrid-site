import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const pages = [
  ["home", ""],
  ["sectors", "sectors"],
  ["solutions", "solutions"],
  ["bear-grid-device", "bear-grid-device"],
  ["copy-of-bear-device", "copy-of-bear-device"],
  ["copy-of-bear-grid-platform", "copy-of-bear-grid-platform"],
  ["coming-soon-03", "coming-soon-03"],
  ["copy-of-asp-bear-grid", "copy-of-asp-bear-grid"],
  ["about", "about"],
  ["news", "news"],
  ["jobs", "jobs"],
  ["contacts", "contacts"],
];

const viewports = [
  [1440, 900],
  [1280, 800],
  [1024, 768],
  [390, 844],
  [375, 812],
];

const sourceBase = "https://beargrid.wixsite.com/mysite";
const rebuildBase = process.env.REBUILD_URL;
const root = process.cwd();

async function inspect(page) {
  return page.evaluate(() => ({
    url: location.href,
    title: document.title,
    height: document.documentElement.scrollHeight,
    header: (() => {
      const element = document.querySelector("header");
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        height: Math.round(rect.height),
        background: style.backgroundColor,
        position: style.position,
      };
    })(),
    headings: [...document.querySelectorAll("h1,h2,h3")]
      .slice(0, 40)
      .map((element) => element.textContent?.trim().replace(/\s+/g, " ")),
    images: [...document.images].slice(0, 80).map((image) => {
      const rect = image.getBoundingClientRect();
      const style = getComputedStyle(image);
      return {
        alt: image.alt,
        src: image.currentSrc || image.src,
        sourceWidth: image.naturalWidth,
        sourceHeight: image.naturalHeight,
        renderedWidth: Math.round(rect.width),
        renderedHeight: Math.round(rect.height),
        top: Math.round(rect.top + scrollY),
        objectFit: style.objectFit,
        objectPosition: style.objectPosition,
      };
    }),
  }));
}

async function capture(browser, label, baseUrl) {
  const output = path.join(root, "docs", "parity", label);
  await fs.mkdir(output, { recursive: true });
  const audits = [];

  for (const [name, slug] of pages) {
    for (const [width, height] of viewports) {
      const context = await browser.newContext({ viewport: { width, height } });
      const page = await context.newPage();
      await page.goto(slug ? `${baseUrl}/${slug}` : baseUrl, {
        waitUntil: "domcontentloaded",
        timeout: 45_000,
      });
      await page.waitForTimeout(1_000);
      await page.screenshot({
        path: path.join(output, `${name}-${width}x${height}.png`),
        fullPage: true,
        animations: "disabled",
        timeout: 45_000,
      });
      const header = page.locator("header");
      if (await header.count()) {
        await header.screenshot({
          path: path.join(output, `${name}-${width}x${height}-header.png`),
          animations: "disabled",
        });
      }
      if (width === 1280) audits.push({ page: name, ...(await inspect(page)) });
      await context.close();
    }
  }

  await fs.writeFile(
    path.join(root, "docs", `${label}-browser-audit.json`),
    `${JSON.stringify(audits, null, 2)}\n`,
  );
}

const browser = await chromium.launch();
if (process.env.CAPTURE_SOURCE !== "false") await capture(browser, "source", sourceBase);
if (rebuildBase) await capture(browser, "rebuild", rebuildBase);
await browser.close();
