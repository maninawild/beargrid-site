import fs from "node:fs/promises";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const root = process.cwd();
const source = path.join(root, "docs", "parity", "source");
const rebuild = path.join(root, "docs", "parity", "rebuild");
const output = path.join(root, "docs", "parity", "diff");
await fs.mkdir(output, { recursive: true });

for (const name of await fs.readdir(source)) {
  if (!name.endsWith(".png") || name.endsWith("-header.png")) continue;
  try {
    const before = PNG.sync.read(await fs.readFile(path.join(source, name)));
    const after = PNG.sync.read(await fs.readFile(path.join(rebuild, name)));
    const width = Math.min(before.width, after.width);
    const height = Math.min(before.height, after.height);
    const beforeCrop = new PNG({ width, height });
    const afterCrop = new PNG({ width, height });
    PNG.bitblt(before, beforeCrop, 0, 0, width, height, 0, 0);
    PNG.bitblt(after, afterCrop, 0, 0, width, height, 0, 0);
    const diff = new PNG({ width, height });
    pixelmatch(beforeCrop.data, afterCrop.data, diff.data, width, height, { threshold: 0.12 });
    await fs.writeFile(path.join(output, name), PNG.sync.write(diff));
  } catch {
    // Continue when a browser capture was interrupted.
  }
}
