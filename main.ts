// The Self-Checkout Is Judging You — make.fun entry.
// One funny line in the voice of a smug self-checkout machine,
// written to /output/entry.txt (gate: UTF-8 text, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Twelve yoghurts. No spoon, no shame, no plan. Please place your dignity in the bagging area.";

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
