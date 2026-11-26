// The Self-Checkout Is Judging You — make.fun entry.
// One funny line in the voice of a smug self-checkout machine,
// written to /output/entry.txt (gate: UTF-8 text, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Twelve yoghurts and nothing else. No spoon, no shame, no plan. Please place your dignity in the bagging area.";

// Defensive gate check: the sealed scorer requires UTF-8 text of
// 1-200 characters, not only whitespace. Fail loudly instead of
// writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} chars; must be 1-200.`);
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
