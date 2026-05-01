import fs from "fs";
import path from "path";
import fc from "fast-check";
/**
 * Helper to recursively find files in a directory.
 */
function getFiles(dir: string): string[] {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const sourceFiles = getFiles(path.join(process.cwd(), "src"))
  .filter((f: string) => f.endsWith(".tsx") || f.endsWith(".css"));

const LEGACY_COLORS = {
  blue: [/#3B82F6/gi, /#2563EB/gi, /#60A5FA/gi, /#1D4ED8/gi],
  purple: [/#8B5CF6/gi, /#7C3AED/gi, /#A78BFA/gi, /#6D28D9/gi],
  green: [/#255F38/gi, /#1A3636/gi, /#73f3f3/gi, /#006A71/gi, /#2f7a47/gi, /#4ade80/gi],
};

const LEGACY_TAILWIND_PATTERNS = [
  /bg-(blue|purple|green)-\d+/gi,
  /text-(blue|purple|green)-\d+/gi,
  /from-(blue|purple|green)-\d+/gi,
  /to-(blue|purple|green)-\d+/gi,
  /via-(blue|purple|green)-\d+/gi,
  /border-(blue|purple|green)-\d+/gi,
  /shadow-(blue|purple|green)-/gi,
];

// ── Properties ────────────────────────────────────────────────

// Feature: midnight-gold-redesign, Property 1-3: No Legacy Hex Values
const propertyNoLegacyHex = fc.property(fc.constantFrom(...sourceFiles), (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  
  // Check Blue
  for (const regex of LEGACY_COLORS.blue) {
    if (regex.test(content)) return false;
  }
  // Check Purple
  for (const regex of LEGACY_COLORS.purple) {
    if (regex.test(content)) return false;
  }
  // Check Green
  for (const regex of LEGACY_COLORS.green) {
    if (regex.test(content)) return false;
  }
  
  return true;
});

// Feature: midnight-gold-redesign, Property 4-5: No Legacy Tailwind Classes
const propertyNoLegacyTailwind = fc.property(fc.constantFrom(...sourceFiles), (filePath) => {
  if (!filePath.endsWith(".tsx")) return true; // Only check TSX for Tailwind classes
  
  const content = fs.readFileSync(filePath, "utf-8");
  
  for (const regex of LEGACY_TAILWIND_PATTERNS) {
    if (regex.test(content)) return false;
  }
  
  return true;
});

// ── Execution ─────────────────────────────────────────────────

console.log(`Scanning ${sourceFiles.length} files for legacy color leaks...`);

try {
  console.log("Testing Property: No Legacy Hex Values...");
  fc.assert(propertyNoLegacyHex, { numRuns: sourceFiles.length * 2 });
  console.log("✓ No legacy hex values found.");

  console.log("Testing Property: No Legacy Tailwind Classes...");
  fc.assert(propertyNoLegacyTailwind, { numRuns: sourceFiles.length * 2 });
  console.log("✓ No legacy Tailwind classes found.");

  console.log("\nALL COLOR CONSISTENCY PROPERTIES VERIFIED!");
} catch (error) {
  console.error("\nPROPERTY VIOLATION DETECTED:");
  console.error((error as Error).message);
  process.exit(1);
}
