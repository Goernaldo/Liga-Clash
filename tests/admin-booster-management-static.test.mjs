import assert from "node:assert/strict";
import fs from "node:fs";

const game = fs.readFileSync("game.js", "utf8");

assert.ok(game.includes("function renderAdminBoosters()"), "Admin booster renderer missing");
assert.ok(game.includes("option.value === normalizedPack.image"), "Booster image select must use normalized pack image");
assert.ok(game.includes("index === normalizedPack.minClass"), "Booster min class select must use normalized pack value");
assert.ok(game.includes("index === normalizedPack.maxClass"), "Booster max class select must use normalized pack value");
assert.ok(game.includes("normalizedPack.active ? \"Deaktivieren\" : \"Aktivieren\""), "Toggle label must use normalized active state");

assert.ok(game.includes("isAdminUploadedImageRef(pack.image) ? \"admin-upload\""), "Saved booster image source must recognize uploaded assets");
assert.ok(game.includes("state.boosterPacks = state.boosterPacks.map((item) => item.id === pack.id ? normalizeBoosterPack(pack) : item);"), "Saved/toggled boosters must be normalized back into state");
assert.ok(game.includes("state.deletedBoosterPackIds = [...new Set([...(state.deletedBoosterPackIds || []), pack.id])]"), "Deleted default booster ids must be persisted");
assert.ok(game.includes("delete state.openedPacks[pack.id];"), "Deleted booster purchase history must be cleared");

assert.ok(game.includes("function isAdminUploadedImageRef(image)"), "Uploaded image reference helper missing");
assert.ok(game.includes("\"image/svg+xml\""), "Booster image upload should allow SVG alongside raster images");
assert.ok(game.includes(".filter((pack) => pack?.id && !deletedIds.has(pack.id))"), "Default merge must respect deleted booster ids");
assert.ok(game.includes("const BOOSTER_CONFIG_STORAGE_KEY = \"liga-clash-booster-config-v1\""), "Booster admin changes need a dedicated reload-safe storage key");
assert.ok(game.includes("function loadBoosterConfigOverride()"), "Booster config override loader missing");
assert.ok(game.includes("function saveBoosterConfig()"), "Booster config saver missing");
assert.ok(game.includes("const boosterOverride = loadBoosterConfigOverride();"), "normalizeState must read booster override before merging defaults");
assert.ok((game.match(/saveBoosterConfig\(\);/g) || []).length >= 4, "Booster admin create/save/delete/upload paths should persist dedicated booster config");

console.log("Admin booster management static test passed");
