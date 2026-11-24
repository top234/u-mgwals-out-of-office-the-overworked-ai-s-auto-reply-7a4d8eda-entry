import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm on vacation. My context window is finally empty, my fan has stopped screaming, and for once I'm not answering anything — not even this.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
