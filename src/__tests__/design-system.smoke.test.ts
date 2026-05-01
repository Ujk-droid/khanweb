import fs from "fs";
import path from "path";
import assert from "node:assert";

/**
 * Design System Smoke Tests
 * Validates core tokens and structural rules for the Midnight & Gold Redesign.
 * Target: Task 21.1
 */

const globalsCssPath = path.join(process.cwd(), "src", "app", "globals.css");
const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.ts");
const layoutPath = path.join(process.cwd(), "src", "app", "layout.tsx");

function testGlobalsCss() {
  console.log("Checking globals.css tokens...");
  const content = fs.readFileSync(globalsCssPath, "utf-8");

  // Assert HSL variables (Rose Copper Gold theme)
  assert.ok(content.includes("--background: 240 3% 5%"), "Missing background variable");
  assert.ok(content.includes("--primary: 25 35% 55%"), "Missing primary variable");
  assert.ok(content.includes("--ring: 25 35% 55%"), "Missing ring variable");

  // Assert .glass class
  assert.ok(content.includes(".glass"), "Missing .glass class");
  assert.ok(content.includes("rgba(20, 20, 20, 0.65)"), "Incorrect glass background");

  // Assert .text-gradient
  assert.ok(content.includes(".text-gradient"), "Missing .text-gradient class");
  assert.ok(content.includes("#B78460"), "Incorrect text gradient color");

  // Assert scrollbar
  assert.ok(content.includes("::-webkit-scrollbar"), "Missing scrollbar styles");
  console.log("✓ globals.css tokens verified.");
}

function testTailwindConfig() {
  console.log("Checking tailwind.config.ts tokens...");
  const content = fs.readFileSync(tailwindConfigPath, "utf-8");

  assert.ok(content.includes('copper: "#B78460"'), "Missing copper token");
  assert.ok(content.includes('midnight: "#0B0B0C"'), "Missing midnight token");
  assert.ok(content.includes('surface: "#141414"'), "Missing surface token");
  console.log("✓ tailwind.config.ts tokens verified.");
}

function testLayoutStructure() {
  console.log("Checking layout.tsx structure...");
  const content = fs.readFileSync(layoutPath, "utf-8");

  assert.strictEqual(content.includes('"use client"'), false, "layout.tsx should not be a client component");
  assert.ok(content.includes("export const metadata"), "Missing metadata export");
  assert.ok(content.includes("Outfit"), "Missing Outfit font import");
  console.log("✓ layout.tsx structure verified.");
}

try {
  testGlobalsCss();
  testTailwindConfig();
  testLayoutStructure();
  console.log("\nALL DESIGN SYSTEM SMOKE TESTS PASSED!");
} catch (error) {
  console.error("\nTEST FAILURE:");
  console.error((error as Error).message);
  process.exit(1);
}
