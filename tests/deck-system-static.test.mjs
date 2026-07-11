import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "data", "deck-system.js"), "utf8");
const context = { globalThis: {} };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source, context, { filename: "data/deck-system.js" });

const system = context.LigaClashDeckSystem;
assert.ok(system, "Deck system module is exposed globally");
assert.equal(system.FORMATIONS.length, 3);
assert.equal(system.normalizeFormationId("2-1-2"), "1-2-1-2");
assert.equal(system.normalizeFormationId("1-1-2-1"), "1-2-1-2");
system.FORMATIONS.forEach((formation) => {
  assert.equal(formation.slots.length, 6, `${formation.id} must have 6 active slots`);
  assert.equal(formation.slots.filter((slot) => slot.category === "goalkeeper").length, 1, `${formation.id} must have 1 goalkeeper`);
  assert.equal(formation.slots.filter((slot) => slot.category !== "goalkeeper").length, 5, `${formation.id} must have 5 field slots`);
});

const cards = [
  card("gk", "Torwart", "TW", 7, 86),
  card("def1", "IV Eins", "IV", 5, 78),
  card("def2", "LV Zwei", "LV", 5, 77),
  card("mid1", "ZM Eins", "ZM", 8, 84),
  card("mid2", "ZOM Zwei", "ZOM", 8, 83),
  card("att1", "ST Eins", "ST", 9, 88),
  card("att2", "LF Zwei", "LF", 7, 82),
  card("sub1", "RV Bank", "RV", 4, 70),
  card("sub2", "RM Bank", "RM", 4, 71),
  card("sub3", "RF Bank", "RF", 4, 72),
];

const helpers = {
  rating: (item) => item.overall,
  normalizePosition: (position) => String(position || "").toUpperCase(),
};

const auto = system.autoCompleteDeck(cards, "1-2-1-2", helpers);
assert.equal(auto.validation.isValid, true);
assert.equal(Object.values(auto.activeSlots).filter(Boolean).length, 6);
assert.equal(auto.bench.filter(Boolean).length, 3);
assert.ok(auto.strength > 0);

const valid = system.validateDeck(auto, cards, helpers);
assert.equal(valid.isValid, true);
assert.equal(valid.formationId, "1-2-1-2");
assert.equal(valid.wrongPositions.length, 0);
assert.equal(valid.duplicateCards.length, 0);

const noKeeper = system.normalizeDeck({
  ...auto,
  activeSlots: { ...auto.activeSlots, "goalkeeper-1": "" },
}, cards, helpers);
assert.equal(noKeeper.validation.isValid, false);
assert.ok(noKeeper.validation.missingSlots.includes("goalkeeper-1"));

const duplicate = system.normalizeDeck({
  ...auto,
  bench: [Object.values(auto.activeSlots)[0], auto.bench[1], auto.bench[2]],
}, cards, helpers);
assert.equal(duplicate.validation.isValid, false);
assert.ok(duplicate.validation.duplicateCards.length > 0);

const wrongPosition = system.normalizeDeck({
  ...auto,
  activeSlots: { ...auto.activeSlots, "defense-2": "att2" },
}, cards, helpers);
assert.equal(wrongPosition.validation.isValid, false);
assert.ok(wrongPosition.validation.wrongPositions.length > 0);

const broken = system.normalizeDeck({
  formationId: "does-not-exist",
  activeSlots: { "goalkeeper-1": "missing-card" },
  bench: ["", "", ""],
}, cards, helpers);
assert.equal(broken.formationId, "1-2-1-2");
assert.equal(broken.validation.isValid, false);
assert.ok(broken.validation.errors.length > 0);

assert.equal(system.cardCategory(card("cam", "ZOM", "CAM", 6, 80), helpers), "midfield");
assert.equal(system.cardCategory(card("striker", "ST", "ST", 6, 80), helpers), "attack");

function card(id, name, pos, cls, overall) {
  return { id, name, pos, cls, overall, level: 1, stars: 1 };
}

console.log("Deck system static test passed");
