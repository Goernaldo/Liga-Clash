import assert from "node:assert/strict";
import fs from "node:fs";

const game = fs.readFileSync("game.js", "utf8");
const cardSystem = fs.readFileSync("data/card-system.js", "utf8");

[
  "{ id: \"common\", label: \"Gewöhnlich\", min: 50, max: 59 }",
  "{ id: \"uncommon\", label: \"Ungewöhnlich\", min: 60, max: 69 }",
  "{ id: \"rare\", label: \"Selten\", min: 70, max: 74 }",
  "{ id: \"super-rare\", label: \"Besonders selten\", min: 75, max: 79 }",
  "{ id: \"ultra-rare\", label: \"Ultra selten\", min: 80, max: 84 }",
  "{ id: \"epic\", label: \"Episch\", min: 85, max: 89 }",
  "{ id: \"legendary\", label: \"Legendär\", min: 90, max: 94 }",
  "{ id: \"elite\", label: \"Elite\", min: 95, max: 99 }",
  "{ id: \"icon\", label: \"Icon\", min: 96, max: 99 }",
].forEach((range) => {
  assert.ok(game.includes(range), `Missing rarity range: ${range}`);
});

["bronze", "silver", "gold"].forEach((rarity) => {
  const rarityBlock = cardSystem.slice(cardSystem.indexOf("const RARITIES"), cardSystem.indexOf("const STAR_TIERS"));
  assert.ok(!rarityBlock.includes(`id: \"${rarity}\"`), `Removed card rarity still exists: ${rarity}`);
});

assert.ok(game.includes("normalizeBaseOverall"), "Cards must normalize base overall by rarity");
assert.ok(game.includes("calculateCardOverall"), "Current overall must be calculated from base overall and progression");
assert.ok(game.includes("baseOverall"), "Cards must store base overall");
assert.ok(game.includes("clearTemporaryPlayerCatalog(GAME_CARDS)"), "Temporary player catalog must be cleared");
assert.ok(game.includes("removeTemporaryPlayerCards"), "Saved temporary player cards must be filtered out");
assert.ok(game.includes("const baseCards = [];"), "Starter test cards must not remain seeded");

console.log("Admin cleanup static test passed");
