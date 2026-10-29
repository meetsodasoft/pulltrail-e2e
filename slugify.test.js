import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.js";

test("joins words with hyphens", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});
