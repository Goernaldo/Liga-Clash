import assert from "node:assert/strict";
import fs from "node:fs";

const gameSource = fs.readFileSync(new URL("../game.js", import.meta.url), "utf8");
const stylesSource = fs.readFileSync(new URL("../styles.css", import.meta.url), "utf8");

assert.match(gameSource, /const CARD_PROGRESSION = \{/);
assert.match(gameSource, /starLevelCaps:\s*\{\s*1:\s*10,\s*2:\s*20,\s*3:\s*30,\s*4:\s*50,\s*5:\s*100\s*\}/);
assert.match(gameSource, /function calculateCardProgression/);
assert.match(gameSource, /function raiseCardStars/);
assert.match(gameSource, /function addCardXp/);

assert.match(gameSource, /context === "fusion"/);
assert.match(gameSource, /data-feature-action="card-details"/);
assert.match(stylesSource, /\.mini-card\.is-clickable/);

assert.match(gameSource, /const PLAYER_IMAGE_SILHOUETTE = "assets\/players\/player-silhouette\.svg"/);
assert.match(gameSource, /PLAYER_IMAGE_BLOCKED_TYPES/);
assert.match(gameSource, /function resolvePlayerImage/);
assert.match(gameSource, /source: "silhouette"/);

assert.match(gameSource, /function normalizeUserProfile/);
assert.match(gameSource, /function renderProfileFeature/);
assert.match(gameSource, /function saveProfileFromFeature/);
assert.match(gameSource, /data-profile-field="displayName"/);
assert.match(gameSource, /profileStats\(\)/);

assert.ok(fs.existsSync(new URL("../assets/players/player-silhouette.svg", import.meta.url)));

console.log("card fusion/profile static checks passed");
