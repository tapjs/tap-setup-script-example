import { readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";

try {
  const old = Number(readFileSync("server.pid"));
  if (old) {
    process.kill(old, "SIGTERM");
  }
} catch {}

writeFileSync("server.pid", String(process.pid));

// just echoes back the user-agent
createServer((req, res) => {
  res.end(req.headers["user-agent"]);
}).listen(51234, () => {
  console.log('listening');
});
