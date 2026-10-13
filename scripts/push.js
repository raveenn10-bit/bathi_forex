#!/usr/bin/env node

/**
 * BHATHI FOREX / LANKAFOREX.COM — Easy Git Push Helper
 * 
 * Usage:
 *   npm run push
 *   node scripts/push.js
 *   or double-click push.bat
 */

const { execSync } = require("child_process");
const readline = require("readline");

function run(cmd, silent = false) {
  try {
    return execSync(cmd, { stdio: silent ? "pipe" : "inherit", encoding: "utf-8" });
  } catch (err) {
    if (!silent) {
      console.error(`\x1b[31m[ERROR] Command failed:\x1b[0m ${cmd}`);
    }
    return null;
  }
}

function runSilent(cmd) {
  try {
    return execSync(cmd, { encoding: "utf-8" }).trim();
  } catch {
    return "";
  }
}

console.log("\x1b[36m====================================================\x1b[0m");
console.log("\x1b[1m\x1b[33m  ⚡ BHATHI FOREX / LANKAFOREX.COM — QUICK GIT PUSH  \x1b[0m");
console.log("\x1b[36m====================================================\x1b[0m\n");

// Check git status
const status = runSilent("git status --porcelain");
if (!status) {
  console.log("\x1b[32m✔ No changes to commit. Working tree is clean!\x1b[0m");
  process.exit(0);
}

console.log("\x1b[34m[1/4] Detecting changed files:\x1b[0m");
const changedFiles = status.split("\n").filter(Boolean);
changedFiles.forEach((line) => {
  console.log("  \x1b[90m•\x1b[0m " + line);
});
console.log(`\x1b[33mTotal: ${changedFiles.length} file(s) modified/added/deleted.\x1b[0m\n`);

// Run typecheck quickly
console.log("\x1b[34m[2/4] Running TypeScript sanity check (npx tsc --noEmit)...\x1b[0m");
try {
  execSync("npx tsc --noEmit", { stdio: "inherit" });
  console.log("\x1b[32m✔ TypeScript check passed with 0 errors!\x1b[0m\n");
} catch {
  console.error("\x1b[31m✖ TypeScript errors found! Please fix them before pushing, or force push.\x1b[0m");
  const rlFail = readline.createInterface({ input: process.stdin, output: process.stdout });
  rlFail.question("Do you want to push anyway? (y/N): ", (ans) => {
    rlFail.close();
    if (ans.trim().toLowerCase() !== "y") {
      console.log("\x1b[33mPush cancelled.\x1b[0m");
      process.exit(1);
    }
    proceedWithCommit();
  });
  return;
}

proceedWithCommit();

function proceedWithCommit() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = now.toTimeString().slice(0, 5);
  const defaultMsg = `update: website enhancements (${dateStr} ${timeStr})`;

  rl.question(`\x1b[34m[3/4] Enter commit message\x1b[0m (Press Enter for '${defaultMsg}'):\n> `, (input) => {
    rl.close();
    const commitMsg = input.trim() || defaultMsg;

    console.log(`\n\x1b[34m[4/4] Staging, committing and pushing to origin/main...\x1b[0m`);
    
    // Stage all
    run("git add .");

    // Commit
    try {
      execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { stdio: "inherit" });
    } catch {
      console.log("\x1b[33mNo new commit created.\x1b[0m");
    }

    // Push
    console.log("\x1b[36mPushing to GitHub (origin/main)...\x1b[0m");
    const pushResult = run("git push origin main");

    if (pushResult !== null) {
      console.log("\n\x1b[32m====================================================\x1b[0m");
      console.log("\x1b[1m\x1b[32m  ✔ SUCCESS! Changes pushed to GitHub successfully!  \x1b[0m");
      console.log("\x1b[32m====================================================\x1b[0m\n");
    } else {
      console.log("\x1b[31m✖ Push failed. Please check your internet connection or git credentials.\x1b[0m");
    }
  });
}
