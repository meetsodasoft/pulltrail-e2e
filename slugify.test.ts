import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.ts";

test("drops punctuation and collapses separators", () => {
  assert.equal(slugify("Hello,  World!"), "hello-world");
  assert.equal(slugify("  --Hello __ World--  "), "hello-world");
});

test("joins words with hyphens", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});
