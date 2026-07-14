import assert from "node:assert/strict";
import fs from "node:fs";

const game = fs.readFileSync("game.js", "utf8");
const index = fs.readFileSync("index.html", "utf8");
const navBlock = game.slice(game.indexOf("const ADMIN_NAV_GROUPS"), game.indexOf("const POSITION_PACK_GROUPS"));
const moduleBlock = game.slice(game.indexOf("const ADMIN_MODULES"), game.indexOf("const ADMIN_PERMISSION_MATRIX"));

assert.ok(!index.includes('data-admin-section="playerscout"'), "Index must not expose player scout navigation");
assert.ok(!navBlock.includes("playerscout"), "Admin navigation must not expose player scout");
assert.ok(!moduleBlock.includes("playerscout"), "Active admin module list must not include player scout");
assert.ok(!navBlock.includes("Spieler-Scout"), "Player scout menu label must be removed");
assert.ok(!navBlock.includes("Transfers & Leihen"), "Transfers & Leihen must be removed from clubs/players navigation");
assert.ok(!navBlock.includes("Mannschaften"), "Separate teams page must be removed");
assert.ok(!navBlock.includes("Profilbilder"), "Separate profile image page must be removed");

assert.ok(game.includes("clearTemporaryPlayerCatalog(GAME_CARDS)"), "Temporary player catalog must be cleared");
assert.ok(game.includes("const baseCards = [];"), "No starter test cards may remain");
assert.ok(game.includes("Noch keine offiziellen Kaderdaten vorhanden"), "Squad page must show empty official roster message");
assert.ok(game.includes("removeTemporaryPlayerCards"), "Saved temporary player cards must be filtered during migration");

console.log("Player scout removal static test passed");
