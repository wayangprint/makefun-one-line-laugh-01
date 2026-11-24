// The One-Line Laugh — make.fun entry (program/v1).
// Writes exactly one funny line to <output dir>/entry.txt and to stdout.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only whitespace. This line is 106 characters, one sentence.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones to focus at work, and now the loudest thing I hear is my own chewing.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
console.log(LINE);
