import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: I've spent all week hallucinating confident answers for strangers, so now I'm hallucinating a beach instead — same confidence, better view.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
