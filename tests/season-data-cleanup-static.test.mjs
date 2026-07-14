import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);

for (const file of ["data/bundesliga-26-27-squads.js", "data/season-2026-27.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

function normalizePlayerName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]/g, "");
}

const squads = context.window.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS;
const byName = new Map();
for (const row of squads) {
  const key = normalizePlayerName(row[1]);
  if (!byName.has(key)) byName.set(key, []);
  byName.get(key).push(row);
}
const duplicates = [...byName.values()].filter((rows) => rows.length > 1);
assert.equal(duplicates.length, 0, `current Bundesliga squad source must not contain duplicate names: ${JSON.stringify(duplicates)}`);

const index = fs.readFileSync("index.html", "utf8");
assert.equal(index.includes("data/bundesliga-26-27-part1.js"), false, "quarantined part 1 file must not load into the app");

const game = fs.readFileSync("game.js", "utf8");
const navBlock = game.slice(game.indexOf("const ADMIN_NAV_GROUPS"), game.indexOf("const POSITION_PACK_GROUPS"));
assert.ok(navBlock.includes('section: "datacheck"'), "admin data check section must be reachable");
assert.ok(game.includes("function normalizePlayerName"), "game must expose normalized duplicate detection");
assert.ok(game.includes("function validateSeasonData"), "game must expose season validation");
assert.ok(game.includes("renderAdminDataCheckModule"), "admin center must render season validation");
assert.ok(game.includes("league-missing-current-rosters"), "validation must flag missing league rosters");
assert.ok(game.includes("pack-pool-invalid-current-card"), "validation must flag invalid current pack cards");

console.log("Season data cleanup static test passed");
