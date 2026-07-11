import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "data", "booster-system.js"), "utf8");
const gameSource = fs.readFileSync(path.join(root, "game.js"), "utf8");
const context = { globalThis: {} };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source, context, { filename: "data/booster-system.js" });

const system = context.LigaClashBoosterSystem;
assert.ok(system, "Booster system module is exposed globally");

const labels = ["Gewoehnlich", "Ungewoehnlich", "Selten", "Besonders Selten", "Ultra Selten", "Bronze", "Silber", "Gold", "Episch", "Legendaer", "Elite", "Icon"];
const defaults = system.defaultBoosterConfigs();
const requiredIds = ["pack-bronze", "pack-silver", "pack-gold", "pack-elite", "pack-icon"];
assert.equal(JSON.stringify(defaults.map((pack) => pack.id)), JSON.stringify(requiredIds));

defaults.forEach((pack) => {
  const normalized = system.normalizeBoosterConfig(pack, { classCount: labels.length });
  assert.equal(normalized.active, true, `${pack.id} must be active by default`);
  assert.ok(normalized.cardCount >= 1, `${pack.id} must define card count`);
  assert.ok(normalized.image, `${pack.id} must define image`);
  assert.equal(system.validateDropRates(normalized, labels).ok, true, `${pack.id} drop rates must be valid`);
});

assert.equal(defaults.find((pack) => pack.id === "pack-bronze").cardCount, 5);
assert.equal(defaults.find((pack) => pack.id === "pack-silver").cardCount, 5);
assert.equal(defaults.find((pack) => pack.id === "pack-gold").cardCount, 5);
assert.equal(defaults.find((pack) => pack.id === "pack-elite").cardCount, 5);
assert.equal(defaults.find((pack) => pack.id === "pack-icon").guaranteedClass, 11);
assert.match(gameSource, /"pack-icon": \{ min: 11, max: 11 \}/, "game migration must keep Icon pack on class 11");
assert.match(gameSource, /"pack-icon": \{ 11: 100 \}/, "game fallback drop rates must keep Icon pack on class 11");

const invalidSum = system.normalizeBoosterConfig({ ...defaults[0], dropRates: { 0: 50, 1: 10 } }, { classCount: labels.length });
assert.equal(system.validateDropRates(invalidSum, labels).ok, false);
assert.match(system.validateDropRates(invalidSum, labels).errors.join(" "), /100 Prozent/);

const negative = system.normalizeBoosterConfig({ ...defaults[0], dropRates: { 0: -1, 1: 101 } }, { classCount: labels.length });
assert.equal(system.validateDropRates(negative, labels).ok, false);

const unknownClass = { ...defaults[0], dropRates: { 0: 99, 99: 1 } };
assert.equal(system.validateDropRates(unknownClass, labels).ok, false);
assert.match(system.validateDropRates(unknownClass, labels).errors.join(" "), /nicht im Pool/);

const future = system.normalizeBoosterConfig({ ...defaults[0], startDate: "2999-01-01T00:00:00.000Z" }, { classCount: labels.length });
assert.equal(system.validateAvailability(future, { now: "2026-07-11T00:00:00.000Z" }).ok, false);

const inactive = system.normalizeBoosterConfig({ ...defaults[0], active: false }, { classCount: labels.length });
assert.equal(system.validateAvailability(inactive).ok, false);

const limited = system.normalizeBoosterConfig({ ...defaults[4], purchaseLimit: 1 }, { classCount: labels.length });
const transactions = [{ type: "booster-purchase", boosterId: "pack-icon", status: "success" }];
assert.equal(system.validateAvailability(limited, { transactions }).ok, false);

const inventory = system.normalizeInventory([{ boosterId: "pack-bronze" }]);
assert.equal(inventory.length, 1);
assert.equal(inventory[0].status, "unopened");

const transactionsNormalized = system.normalizeTransactions([{ boosterId: "pack-bronze", price: 100, currency: "coins", balanceBefore: 500, balanceAfter: 400 }]);
assert.equal(transactionsNormalized[0].status, "success");
assert.equal(transactionsNormalized[0].type, "booster-purchase");

const openings = system.normalizeOpenings([{ id: "opening-1", boosterId: "pack-bronze", cardIds: ["card-1"] }]);
assert.equal(JSON.stringify(openings[0].cardIds), JSON.stringify(["card-1"]));

const deterministic = sequenceRng([0.01, 0.99, 0.4, 0.7, 0.2]);
const plan = system.makeOpeningPlan(defaults[2], deterministic);
assert.equal(plan.length, 5);
assert.equal(plan[0], defaults[2].guaranteedClass, "first card must satisfy guarantee");
assert.ok(plan.every((classIndex) => defaults[2].allowedClasses.includes(classIndex)));

for (const packId of ["pack-bronze", "pack-silver", "pack-gold"]) {
  const pack = defaults.find((entry) => entry.id === packId);
  const counts = {};
  for (let index = 0; index < 1000; index += 1) {
    const planForPack = system.makeOpeningPlan(pack, sequenceRng([index / 1000, 0.13, 0.37, 0.61, 0.89]));
    assert.equal(planForPack.length, pack.cardCount, `${packId} must produce configured card count`);
    assert.equal(planForPack[0], pack.guaranteedClass, `${packId} must keep guarantee in simulations`);
    planForPack.forEach((classIndex) => {
      counts[classIndex] = (counts[classIndex] || 0) + 1;
      assert.ok(pack.allowedClasses.includes(classIndex), `${packId} produced unknown class ${classIndex}`);
    });
  }
  assert.ok(Object.keys(counts).length >= 2 || pack.allowedClasses.length === 1, `${packId} should use its drop pool`);
}

function sequenceRng(values) {
  let index = 0;
  return () => {
    const value = values[index % values.length];
    index += 1;
    return value;
  };
}

console.log("Booster system static test passed");
