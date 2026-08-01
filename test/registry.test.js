import test from "node:test";
import assert from "node:assert/strict";

import { ALL_TOOLS } from "../index.js";

test("exports 82 uniquely named MCP tools", () => {
  assert.equal(ALL_TOOLS.length, 82);
  assert.equal(new Set(ALL_TOOLS.map((tool) => tool.name)).size, ALL_TOOLS.length);
  for (const tool of ALL_TOOLS) {
    assert.ok(tool.name);
    assert.ok(tool.description);
    assert.equal(tool.inputSchema?.type, "object");
  }
});
