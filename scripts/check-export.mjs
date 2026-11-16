import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const html = await readFile("out/index.html", "utf8");
for (const expected of [
  "André Díaz",
  "Golden Circle: Community operations, automated",
  "Backend is where I most enjoy working",
  "committed database changes",
  "300+ team hours saved annually.",
  "https://github.com/WollenMoth/react-tailwind",
  'lang="en"',
  'name="description"',
  'rel="canonical"',
])
  assert.ok(html.includes(expected), `Missing exported content: ${expected}`);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate element IDs");
for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(fragment), `Broken anchor: #${fragment}`);
}
for (const [, url] of html.matchAll(
  /(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g,
)) {
  if (url !== "/") await access(path.join("out", url));
}
for (const file of [
  "404.html",
  "favicon.ico",
  "icon.svg",
  "apple-touch-icon.png",
  ".nojekyll",
]) {
  await access(path.join("out", file));
}
const ico = await readFile("out/favicon.ico");
assert.deepEqual([...ico.subarray(0, 4)], [0, 0, 1, 0], "Invalid ICO header");
assert.equal(
  (html.match(/<h1\b/g) || []).length,
  1,
  "Expected one page heading",
);
console.log(
  "Static export checks passed: content, metadata, anchors, assets, favicon, and 404.",
);
