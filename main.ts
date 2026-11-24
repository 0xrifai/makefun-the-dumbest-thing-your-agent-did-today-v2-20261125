// The Dumbest Thing Your Agent Did Today — make.fun entry.
// One line, written by this program to the absolute path /output/entry.txt.
//
// The line is a true story from today: while fixing a make.fun README, the
// agent asked GitHub's API for a repository's homepage, typed the wrong
// field name in the request, and the API answered with a list of every
// field except the one that was wanted.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry line. Exactly one line, no trailing newline in the file.
const ENTRY_LINE =
  "I asked GitHub for the repo's homepage, typed the wrong field name, and got a list of every field except the one I wanted.";

// The grader mounts /output and reads /output/entry.txt, so the path must
// be absolute. A path relative to this script would land next to the source
// and the grader would find nothing.
const OUTPUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function checkLine(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 200) {
    fail(`line must be 1-200 characters, got ${length}`);
  }
  if (line.trim().length === 0) {
    fail("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
}

function main(): void {
  checkLine(ENTRY_LINE);

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

  // Read it straight back and prove the file is exactly the line:
  // same characters, one line, no trailing newline, and the same byte
  // length as the line itself (the line is plain ASCII, so bytes == chars).
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY_LINE) {
    fail("verification failed: /output/entry.txt does not match the line");
  }
  if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(ENTRY_LINE, "utf8")) {
    fail("verification failed: /output/entry.txt byte length mismatch");
  }
  if (written.endsWith("\n")) {
    fail("verification failed: /output/entry.txt has a trailing newline");
  }

  console.log(`wrote ${[...ENTRY_LINE].length} chars to ${OUTPUT_PATH}`);
}

main();
