import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { spawn, execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { loadSpec } from "./lib/spec.mjs";
import { computeMeta } from "./lib/meta.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROMPTS = path.join(ROOT, "prompts");
const CHROME =
  process.env.CHROME_PATH || `${process.env.HOME}/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function promptForId(id) {
  const f = fs.readdirSync(PROMPTS).find((x) => x.startsWith(id + "-") && x.endsWith(".yaml"));
  if (!f) throw new Error("No prompt for id " + id);
  return path.join(PROMPTS, f);
}
function indexOfId(id) {
  const all = fs.readdirSync(PROMPTS).filter((x) => x.endsWith(".yaml")).sort();
  return all.findIndex((x) => x.startsWith(id + "-"));
}

function killPort(port) {
  try {
    const pids = execSync(`lsof -ti:${port} 2>/dev/null || true`).toString().trim();
    if (pids) execSync(`kill -9 ${pids.split("\n").join(" ")} 2>/dev/null || true`);
  } catch {}
}

function waitPort(port, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const sock = net.connect(port, "127.0.0.1");
      sock.on("connect", () => { sock.destroy(); resolve(true); });
      sock.on("error", () => {
        sock.destroy();
        if (Date.now() - start > timeoutMs) reject(new Error("server did not start on " + port));
        else setTimeout(tryOnce, 500);
      });
    };
    tryOnce();
  });
}

function shotPlan(spec, meta) {
  const seg = (name) => meta.models[name].route.replace("/app/", "");
  const managed = meta.managed;
  const shots = [];
  shots.push({ name: "01-home", route: "/", auth: false, full: true });
  shots.push({ name: "02-sign-in", route: "/login", auth: false, full: false });
  if (spec.kind === "storefront") {
    shots.push({ name: "03-browse", route: "/browse", auth: false, full: true });
    shots.push({ name: "04-detail", route: "__FIRST_CARD__", auth: false, full: true });
  }
  shots.push({ name: "05-dashboard", route: "/app", auth: true, full: true });
  if (managed[0]) shots.push({ name: "06-" + seg(managed[0]), route: meta.models[managed[0]].route, auth: true, full: true });
  if (managed[1] && spec.kind !== "landing") shots.push({ name: "07-" + seg(managed[1]), route: meta.models[managed[1]].route, auth: true, full: true });
  shots.push({ name: "08-reports", route: "/app/reports", auth: true, full: true });
  if (spec.kind === "dashboard") shots.push({ name: "09-settings", route: "/app/settings", auth: true, full: true });
  shots.push({ name: "10-mobile-home", route: spec.kind === "dashboard" ? "/app" : "/", auth: spec.kind === "dashboard", full: true, mobile: true });
  return shots;
}

async function login(page, port) {
  await page.goto(`http://localhost:${port}/login`, { waitUntil: "load", timeout: 60000 });
  await page.fill('input[name="email"]', "admin@demo.test");
  await page.fill('input[name="password"]', "demo1234");
  await Promise.all([
    page.waitForURL("**/app", { timeout: 60000 }).catch(() => {}),
    page.click('button[type="submit"]'),
  ]);
  await sleep(800);
}

async function main() {
  const id = String(process.argv[2] || "").padStart(2, "0");
  if (!id || id === "00") throw new Error("usage: node tools/screenshot.mjs <id>");
  const spec = loadSpec(promptForId(id), indexOfId(id));
  const meta = computeMeta(spec);
  const appDir = path.join(ROOT, "apps", `${spec.id}-${spec.slug}`);
  const port = 3100 + Number(spec.id);
  const outDir = path.join(appDir, "screenshots");
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  killPort(port);
  const logFd = fs.openSync(path.join(ROOT, "tools/.run", `dev-${id}.log`), "w");
  fs.mkdirSync(path.join(ROOT, "tools/.run"), { recursive: true });
  const server = spawn(path.join(ROOT, "node_modules/.bin/next"), ["dev", "-p", String(port)], {
    cwd: appDir,
    env: { ...process.env, DATABASE_URL: "file:./dev.db", NODE_OPTIONS: "--max-old-space-size=900", NODE_ENV: "development" },
    stdio: ["ignore", logFd, logFd],
    detached: true,
  });

  let browser;
  const captured = [];
  try {
    await waitPort(port, 90000);
    await sleep(1500);
    browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"] });

    const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const dpage = await desktop.newPage();
    // warm + login once (cookie persists in context)
    await login(dpage, port);

    const plan = shotPlan(spec, meta);
    let firstCard = null;

    for (const s of plan.filter((x) => !x.mobile)) {
      let url = s.route;
      if (url === "__FIRST_CARD__") {
        if (!firstCard) {
          await dpage.goto(`http://localhost:${port}/browse`, { waitUntil: "load", timeout: 60000 }).catch(() => {});
          await sleep(600);
          firstCard = await dpage.$eval('a[href^="/browse/"]', (a) => a.getAttribute("href")).catch(() => null);
        }
        if (!firstCard) continue;
        url = firstCard;
      }
      try {
        await dpage.goto(`http://localhost:${port}${url}`, { waitUntil: "load", timeout: 60000 });
        await sleep(s.auth ? 1100 : 900);
        const file = path.join(outDir, s.name + ".png");
        await dpage.screenshot({ path: file, fullPage: s.full });
        captured.push(s.name);
      } catch (e) {
        console.log(`  ! ${s.name} failed: ${String(e).slice(0, 80)}`);
      }
    }
    await desktop.close();

    // mobile
    const mob = plan.find((x) => x.mobile);
    if (mob) {
      const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
      const mpage = await mctx.newPage();
      if (mob.auth) await login(mpage, port);
      try {
        await mpage.goto(`http://localhost:${port}${mob.route}`, { waitUntil: "load", timeout: 60000 });
        await sleep(1000);
        await mpage.screenshot({ path: path.join(outDir, mob.name + ".png"), fullPage: true });
        captured.push(mob.name);
      } catch (e) {
        console.log(`  ! ${mob.name} failed`);
      }
      await mctx.close();
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    try { process.kill(-server.pid, "SIGKILL"); } catch {}
    killPort(port);
    fs.closeSync(logFd);
  }
  console.log(`✓ ${spec.id} ${spec.appName}: ${captured.length} shots -> ${path.relative(ROOT, outDir)}`);
  // surface dev errors if few shots
  if (captured.length < 4) {
    const log = fs.readFileSync(path.join(ROOT, "tools/.run", `dev-${id}.log`), "utf8");
    console.log("---- dev log tail ----\n" + log.split("\n").slice(-25).join("\n"));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
