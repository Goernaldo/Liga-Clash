import assert from "node:assert/strict";
import fs from "node:fs";

const game = fs.readFileSync("game.js", "utf8");
const styles = fs.readFileSync("styles.css", "utf8");

[
  "function renderAdminDesignModule()",
  "data-phase9-action=\"upload-asset\"",
  "function uploadAdminAsset()",
  "function normalizeAdminAssets(",
  "function resolveAdminAssetUrl(",
  "function validateAdminAssetFile(",
  "state.adminData.assets",
  "assetTypeOptions()",
].forEach((needle) => assert.ok(game.includes(needle), `Missing ${needle}`));

[
  "\"image/png\"",
  "\"image/jpeg\"",
  "\"image/webp\"",
  "\"image/svg+xml\"",
].forEach((needle) => assert.ok(game.includes(needle), `Asset upload must allow ${needle}`));

assert.ok(game.includes("state.adminData.packImages = upsertById"), "Booster assets should be reusable from the shared asset library");
assert.ok(game.includes("return resolveAdminAssetUrl(configured) || \"assets/branding/logo.png\";"), "Logo rendering should resolve uploaded asset ids and use the central branding fallback");
assert.ok(styles.includes(".asset-grid"), "Asset grid CSS missing");
assert.ok(styles.includes(".asset-tile"), "Asset tile CSS missing");

console.log("Admin asset manager static test passed");
