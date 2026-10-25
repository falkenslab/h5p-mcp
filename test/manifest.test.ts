import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const text = readFileSync(new URL("../package.json", import.meta.url), "utf8");
const manifest = JSON.parse(text) as { private?: boolean; publishConfig?: { access?: string } };

describe("package.json", () => {
  it("publishes the scoped package as public: npm makes it private, and paid, otherwise", () => {
    assert.equal(manifest.publishConfig?.access, "public");
  });

  it("keeps the template's guard where npm run init can remove it", () => {
    // The template is private so it can't be published by mistake; scripts/init.mjs removes this exact line.
    if (manifest.private !== undefined) {
      assert.equal(manifest.private, true);
      assert.match(text, /\n {2}"private": true,/);
    }
  });
});
