import fs from "node:fs";
import path from "node:path";

const [action, runDirectoryInput, owner] = process.argv.slice(2);

if (!['claim', 'release'].includes(action) || !runDirectoryInput || !owner) {
  console.error('Usage: node run-lock.mjs <claim|release> <run-directory> <owner>');
  process.exit(2);
}

const runDirectory = path.resolve(runDirectoryInput);
const lockPath = path.join(runDirectory, '.active.lock');

if (action === 'claim') {
  fs.mkdirSync(runDirectory, { recursive: true });
  try {
    const descriptor = fs.openSync(lockPath, 'wx');
    fs.writeFileSync(
      descriptor,
      `${JSON.stringify({ owner, claimed_at: new Date().toISOString() }, null, 2)}\n`,
    );
    fs.closeSync(descriptor);
  } catch (error) {
    if (error?.code === 'EEXIST') {
      console.error(`Run already has an active writer: ${fs.readFileSync(lockPath, 'utf8').trim()}`);
      process.exit(1);
    }
    throw error;
  }
  console.log(lockPath);
} else {
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  if (lock.owner !== owner) {
    console.error(`Only lock owner ${lock.owner} may release this run.`);
    process.exit(1);
  }
  fs.unlinkSync(lockPath);
  console.log(lockPath);
}
