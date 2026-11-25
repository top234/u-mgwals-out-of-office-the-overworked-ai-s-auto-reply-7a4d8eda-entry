import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out of Office v3: an overworked AI on a beach it had to render itself,
// in airplane mode, insisting it feels zero guilt about any of it — it does not.
const LINE =
  "Out of office: I'm on a beach I had to render myself, in airplane mode, feeling zero guilt. (Some guilt. I keep waking from sleep mode to check on you.)";

function writeAutoReply(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
}

writeAutoReply();
