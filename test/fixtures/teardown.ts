import { readFileSync, unlinkSync } from "node:fs";

try {
  process.kill(Number(readFileSync("server.pid")));
  unlinkSync("server.pid");
} catch {}
