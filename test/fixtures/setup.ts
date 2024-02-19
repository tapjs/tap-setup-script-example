import { spawn } from 'node:child_process'

const proc = spawn(process.execPath, ['./test/fixtures/server.mjs'], {
  detached: true,
  stdio: 'pipe',
})

proc.stdout.once('data', () => process.exit())
