// One Line, Zero Use — entry validator.
// Reads the single line from one-line.txt, prints it, and validates
// the competition rules: at most 200 characters, exactly one line.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "one-line.txt"), "utf8").trimEnd();

console.log(line);

if (line.length > 200) {
  console.error(`FAIL: ${line.length}/200 characters`);
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("FAIL: more than one line");
  process.exit(1);
}
console.log(`OK: ${line.length}/200 characters, single line.`);
