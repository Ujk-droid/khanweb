import fs from "fs";
import path from "path";
import assert from "node:assert";

/**
 * Design System Smoke Tests
 * Validates core tokens and structural rules for the Midnight & Gold Redesign.
 * Target: Task 21.1
 */

const globalsCssPath = path.join(process.cwd(), "khanweb", "src", "app", "globals.css");
const tailwindConfigPath = path.join(process.cwd(), "khanweb", "tailwind.config.ts");
const layoutPath = path.join(process.cwd(), "khanweb", "src", "app", "layout.tsx");

function testGlobalsCss() {
  console.log("Checking globals.css tokens...");
  const content = fs.readFileSync(globalsCssPath, "utf-8");

  // Assert HSL variables
  assert.ok(content.includes("--background: 240 10% 4%"), "Missing background variable");
  assert.ok(content.includes("--primary: 46 65% 52%"), "Missing primary variable");
  assert.ok(content.includes("--ring: 46 65% 52%"), "Missing ring variable");

  // Assert .glass class
  assert.ok(content.includes(".glass"), "Missing .glass class");
  assert.ok(content.includes("rgba(9, 9, 11, 0.7)"), "Incorrect glass background");

  // Assert .text-gradient
  assert.ok(content.includes(".text-gradient"), "Missing .text-gradient class");
  assert.ok(content.includes("#D4AF37"), "Incorrect text gradient color");

  // Assert scrollbar
  assert.ok(content.includes("scrollbar-thumb"), "Missing scrollbar thumb styles");
  console.log("✓ globals.css tokens verified.");
}

function testTailwindConfig() {
  console.log("Checking tailwind.config.ts tokens...");
  const content = fs.readFileSync(tailwindConfigPath, "utf-8");

  assert.ok(content.includes('gold: "#D4AF37"'), "Missing gold token");
  assert.ok(content.includes('midnight: "#09090B"'), "Missing midnight token");
  assert.ok(content.includes('surface: "#18181B"'), "Missing surface token");
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
  console.error(error.message);
  process.exit(1);
}
