import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const brandDir = path.resolve("public/brand");
const faviconSvg = await fs.readFile(path.join(brandDir, "favicon.svg"));
const stackedSvg = await fs.readFile(path.join(brandDir, "bear-grid-logo-stacked.svg"));

async function renderIcon(filename, size) {
  await sharp(faviconSvg, { density: 720 })
    .resize(size, size, { fit: "fill" })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(brandDir, filename));
}

await Promise.all([
  renderIcon("favicon-16x16.png", 16),
  renderIcon("favicon-32x32.png", 32),
  renderIcon("apple-touch-icon.png", 180),
  renderIcon("android-chrome-192x192.png", 192),
  renderIcon("android-chrome-512x512.png", 512),
]);

const faviconPngs = await Promise.all([
  fs.readFile(path.join(brandDir, "favicon-16x16.png")),
  fs.readFile(path.join(brandDir, "favicon-32x32.png")),
]);
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(faviconPngs.length, 4);
const icoEntries = Buffer.alloc(16 * faviconPngs.length);
let icoOffset = 6 + icoEntries.length;
faviconPngs.forEach((image, index) => {
  const size = index === 0 ? 16 : 32;
  const entryOffset = index * 16;
  icoEntries.writeUInt8(size, entryOffset);
  icoEntries.writeUInt8(size, entryOffset + 1);
  icoEntries.writeUInt16LE(1, entryOffset + 4);
  icoEntries.writeUInt16LE(32, entryOffset + 6);
  icoEntries.writeUInt32LE(image.length, entryOffset + 8);
  icoEntries.writeUInt32LE(icoOffset, entryOffset + 12);
  icoOffset += image.length;
});
await fs.writeFile(
  path.resolve("src/app/favicon.ico"),
  Buffer.concat([icoHeader, icoEntries, ...faviconPngs]),
);

const socialLogo = await sharp(stackedSvg, { density: 300 })
  .resize(520, 350, { fit: "contain" })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#F7F6F2",
  },
})
  .composite([{ input: socialLogo, left: 340, top: 140 }])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(brandDir, "og-logo.png"));
