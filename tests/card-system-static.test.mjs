import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "data", "card-system.js"), "utf8");
const context = { globalThis: {} };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source, context, { filename: "data/card-system.js" });

const system = context.LigaClashCardSystem;
assert.ok(system, "Card system module is exposed globally");

const expectedPositions = ["TW", "IV", "LV", "RV", "ZDM", "ZM", "ZOM", "LM", "RM", "LF", "RF", "ST"];
assert.equal(JSON.stringify(system.POSITION_DEFINITIONS.map((position) => position.id)), JSON.stringify(expectedPositions));
assert.equal(system.positionDefinition("CAM").id, "ZOM");
assert.equal(system.positionDefinition("GK").category, "Torwart");

assert.equal(system.RARITIES.length, 9);
assert.equal(system.RARITIES.at(-1).label, "Icon");
assert.equal(system.rarityByIndex(7).label, "Elite");
assert.equal(system.rarityByIndex(8).label, "Icon");

assert.equal(system.maxLevelForStars(1), 10);
assert.equal(system.maxLevelForStars(2), 20);
assert.equal(system.maxLevelForStars(3), 30);
assert.equal(system.maxLevelForStars(4), 50);
assert.equal(system.maxLevelForStars(5), 100);
assert.equal(system.starsForLevel(1), 1);
assert.equal(system.starsForLevel(11), 2);
assert.equal(system.starsForLevel(21), 3);
assert.equal(system.starsForLevel(31), 4);
assert.equal(system.starsForLevel(51), 5);

const rating = (card) => Math.round(((card.atk || 0) + (card.mid || 0) + (card.def || 0)) / 3);
const normalized = system.normalizeCardRecord(
  {
    id: "musiala",
    name: "Jamal Musiala",
    pos: "CAM",
    club: "FC Bayern Muenchen",
    league: "1. Bundesliga",
    nation: "Deutschland",
    cls: 7,
    atk: 92,
    mid: 90,
    def: 62,
    level: 55,
    xp: 1234,
    favorite: true,
    owned: true,
    ownedCount: 2,
  },
  { rating },
);

assert.equal(normalized.cardId, "musiala");
assert.equal(normalized.playerId, "musiala");
assert.equal(normalized.position, "ZOM");
assert.equal(normalized.category, "Mittelfeld");
assert.equal(normalized.rarity, "Elite");
assert.equal(normalized.stars, 5);
assert.equal(normalized.maxLevel, 100);
assert.equal(normalized.duplicateCount, 0);
assert.equal(normalized.owned, true);
assert.equal(normalized.favorite, true);

const records = [
  normalized,
  system.normalizeCardRecord({ id: "popp", name: "Alexandra Popp", pos: "ST", club: "VfL Wolfsburg Frauen", league: "Google Pixel Frauen-Bundesliga", nation: "Deutschland", cls: 6, atk: 88, mid: 74, def: 55, level: 20, owned: false }, { rating }),
  system.normalizeCardRecord({ id: "hain", name: "Karl Hain", pos: "GK", club: "Werder Bremen", league: "1. Bundesliga", nation: "Deutschland", cls: 1, atk: 42, mid: 65, def: 84, level: 8, owned: true }, { rating }),
];

assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, search: "jamal" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, rarity: "Elite" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, position: "TW" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, category: "Angriff" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, owned: "Nicht erhalten" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, favorite: "Favoriten" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, overall: "80-99" }).length, 2);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, level: "1-10" }).length, 1);
assert.equal(system.filterRecords(records, { ...system.DEFAULT_FILTERS, stars: "5" }).length, 1);

assert.equal(system.sortRecords(records, "name")[0].name, "Alexandra Popp");
assert.equal(system.sortRecords(records, "overall")[0].name, "Jamal Musiala");
assert.equal(system.sortRecords(records, "rarity")[0].rarity, "Elite");
assert.equal(system.sortRecords(records, "level")[0].level, 55);
assert.equal(system.sortRecords(records, "stars")[0].stars, 5);
assert.equal(system.sortRecords(records, "club")[0].club, "FC Bayern Muenchen");
assert.equal(system.sortRecords(records, "nation")[0].nation, "Deutschland");
assert.equal(system.sortRecords(records, "position")[0].position, "TW");

console.log("Card system static test passed");
