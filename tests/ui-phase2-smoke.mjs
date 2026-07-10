import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (error) {
  console.log(`Playwright-Smoke-Test uebersprungen: ${error.code || error.message}`);
  process.exit(0);
}

const viewports = [
  ["desktop", 1440, 900],
  ["tablet", 820, 1180],
  ["mobile", 390, 844],
];

const routes = ["booster", "collection", "deck", "league", "shop", "messages", "notifications", "settings"];
const results = [];

const browser = await chromium.launch({ headless: true });

for (const [name, width, height] of viewports) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("http://127.0.0.1:8124/index.html", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);

  for (const route of routes) {
    await page.evaluate((action) => {
      document.querySelector(`[data-action="${action}"]`)?.click();
    }, route);
    await page.waitForTimeout(120);
  }

  await page.evaluate(() => document.querySelector("#openLogin")?.click());
  await page.waitForTimeout(120);

  const metrics = await page.evaluate(() => ({
    bodyWidth: document.body.scrollWidth,
    viewport: window.innerWidth,
    featureVisible: !document.querySelector("#featurePanel")?.classList.contains("is-hidden"),
    loginVisible: !document.querySelector("#loginPanel")?.classList.contains("is-hidden"),
    header: Boolean(document.querySelector(".overlay-topbar")),
    bottomNav: Boolean(document.querySelector(".bottom-nav")),
    toastRoot: Boolean(document.querySelector("#toastRoot")),
    dialog: Boolean(document.querySelector("#appDialog")),
    loading: Boolean(document.querySelector("#loadingOverlay")),
  }));

  results.push({
    name,
    width,
    height,
    errors,
    metrics,
    horizontalOverflow: metrics.bodyWidth > metrics.viewport + 1,
  });

  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));

const failed = results.filter((result) => result.errors.length || result.horizontalOverflow);
if (failed.length) process.exitCode = 1;
