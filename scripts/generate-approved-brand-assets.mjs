import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourcePath = path.resolve("public/logos/bear-grid-logo.png");
const outputDir = path.resolve("public/brand-assets");
const paper = "#F7F6F2";
const ink = "#171717";

const pages = [
  ["default", "Bear Grid", "Onafhankelijk R&D-adviesbureau"],
  ["home", "Bear Grid", "Onafhankelijk R&D-adviesbureau · Nederland"],
  ["expertise", "Expertise", "Technologiebeoordeling · R&D-strategie"],
  ["history", "Geschiedenis", "Opgericht in 2019 · Nederland"],
  ["investors", "Investeerders", "Validatie · Innovatiepartnerschappen"],
  ["contact", "Contact", "Onafhankelijk R&D-adviesbureau"],
];

const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const svgDocument = (width, height, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`;

const embeddedImage = (buffer, x, y, width, height) =>
  `<image href="data:image/png;base64,${buffer.toString("base64")}" x="${x}" y="${y}" width="${width}" height="${height}"/>`;

async function raster(svgText, filename, width, height) {
  await sharp(Buffer.from(svgText))
    .resize(width, height, { fit: "contain" })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(outputDir, filename));
}

async function writeIco(filename, pngFiles) {
  const images = await Promise.all(pngFiles.map((file) => fs.readFile(path.join(outputDir, file))));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = Buffer.alloc(16 * images.length);
  let offset = 6 + entries.length;
  images.forEach((image, index) => {
    const size = Number(pngFiles[index].match(/\d+/)?.[0] ?? 32);
    const at = index * 16;
    entries.writeUInt8(size, at);
    entries.writeUInt8(size, at + 1);
    entries.writeUInt8(0, at + 2);
    entries.writeUInt8(0, at + 3);
    entries.writeUInt16LE(1, at + 4);
    entries.writeUInt16LE(32, at + 6);
    entries.writeUInt32LE(image.length, at + 8);
    entries.writeUInt32LE(offset, at + 12);
    offset += image.length;
  });
  await fs.writeFile(path.join(outputDir, filename), Buffer.concat([header, entries, ...images]));
}

await fs.mkdir(outputDir, { recursive: true });

const source = await fs.readFile(sourcePath);
const whiteMark = await sharp(source).negate({ alpha: false }).png({ compressionLevel: 9 }).toBuffer();

await fs.copyFile(sourcePath, path.join(outputDir, "bear-grid-logo-mark.png"));
await fs.copyFile(sourcePath, path.join(outputDir, "bear-grid-logo-black.png"));
await fs.writeFile(path.join(outputDir, "bear-grid-logo-white.png"), whiteMark);

const markSvg = svgDocument(270, 236, embeddedImage(source, 0, 0, 270, 236));
const whiteMarkSvg = svgDocument(270, 236, embeddedImage(whiteMark, 0, 0, 270, 236));
await fs.writeFile(path.join(outputDir, "bear-grid-logo-mark.svg"), markSvg);
await fs.writeFile(path.join(outputDir, "bear-grid-logo-black.svg"), markSvg);
await fs.writeFile(path.join(outputDir, "bear-grid-logo-white.svg"), whiteMarkSvg);

const horizontalSvg = svgDocument(
  1000,
  236,
  `${embeddedImage(source, 0, 0, 270, 236)}
   <text x="330" y="147" fill="${ink}" font-family="Inter,Arial,Helvetica,sans-serif" font-size="88" font-weight="700" letter-spacing="4">BEAR GRID</text>`,
);
await fs.writeFile(path.join(outputDir, "bear-grid-logo-horizontal.svg"), horizontalSvg);
await raster(horizontalSvg, "bear-grid-logo-horizontal.png", 1000, 236);

function iconSvg(size, safePadding) {
  const markWidth = size - safePadding * 2;
  const markHeight = Math.round(markWidth * (236 / 270));
  const x = safePadding;
  const y = Math.round((size - markHeight) / 2);
  return svgDocument(
    size,
    size,
    `<rect width="${size}" height="${size}" fill="${paper}"/>${embeddedImage(source, x, y, markWidth, markHeight)}`,
  );
}

await raster(iconSvg(16, 2), "favicon-16x16.png", 16, 16);
await raster(iconSvg(32, 4), "favicon-32x32.png", 32, 32);
await writeIco("favicon.ico", ["favicon-16x16.png", "favicon-32x32.png"]);
await fs.writeFile(path.join(outputDir, "icon.svg"), iconSvg(512, 64));
await raster(iconSvg(180, 24), "apple-touch-icon.png", 180, 180);
await raster(iconSvg(192, 26), "icon-192.png", 192, 192);
await raster(iconSvg(512, 70), "icon-512.png", 512, 512);
await raster(iconSvg(512, 102), "maskable-icon-512.png", 512, 512);

function socialSvg(title, descriptor, width = 1200, height = 630) {
  return svgDocument(
    width,
    height,
    `<rect width="${width}" height="${height}" fill="${paper}"/>
     ${embeddedImage(source, 76, 104, 235, 205)}
     <text x="390" y="225" fill="${ink}" font-family="Inter,Arial,Helvetica,sans-serif" font-size="${title.length > 18 ? 62 : 78}" font-weight="700" letter-spacing="1">${escapeXml(title)}</text>
     <line x1="394" y1="265" x2="1115" y2="265" stroke="#92918E" stroke-width="3"/>
     <text x="394" y="332" fill="${ink}" font-family="Inter,Arial,Helvetica,sans-serif" font-size="30" font-weight="500">${escapeXml(descriptor)}</text>
     <text x="394" y="445" fill="${ink}" font-family="Inter,Arial,Helvetica,sans-serif" font-size="19" font-weight="700" letter-spacing="5">BEAR GRID · NEDERLAND</text>`,
  );
}

for (const [slug, title, descriptor] of pages) {
  await raster(socialSvg(title, descriptor), `og-${slug}.png`, 1200, 630);
}
await raster(socialSvg("Bear Grid", "Onafhankelijk R&D-adviesbureau", 1200, 600), "twitter-default.png", 1200, 600);

const manifest = {
  source: "/logos/bear-grid-logo.png",
  sourceDimensions: "270x236",
  identity: "Existing approved Bear Grid mark, unchanged",
  palette: { ink, paper },
  reviewOnly: true,
  productionActivationPlan: {
    organizationLogo: "/brand-assets/bear-grid-logo-mark.png",
    favicon: "/brand-assets/favicon.ico",
    svgIcon: "/brand-assets/icon.svg",
    appleTouchIcon: "/brand-assets/apple-touch-icon.png",
    manifestIcons: [
      "/brand-assets/icon-192.png",
      "/brand-assets/icon-512.png",
      "/brand-assets/maskable-icon-512.png",
    ],
    routeSocialImages: {
      home: "/brand-assets/og-home.png",
      expertise: "/brand-assets/og-expertise.png",
      history: "/brand-assets/og-history.png",
      investors: "/brand-assets/og-investors.png",
      contact: "/brand-assets/og-contact.png",
      default: "/brand-assets/og-default.png",
      twitter: "/brand-assets/twitter-default.png",
    },
  },
  files: (await fs.readdir(outputDir)).sort(),
};
await fs.writeFile(path.join(outputDir, "asset-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
