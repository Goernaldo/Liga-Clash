import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const tokenLeakPatterns = [
  /SPORTMONKS_API_TOKEN\s*=\s*["'][^"']+["']/,
  /api_token=[A-Za-z0-9_=-]{12,}/,
];

const files = [
  "game.js",
  "tools/player-image-import/sportmonks-provider.mjs",
  "tools/player-image-import/run-one-club-import.mjs",
  "tools/player-image-import/matcher.mjs",
];

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const pattern of tokenLeakPatterns) {
    assert.equal(pattern.test(source), false, `${file} enthaelt moeglicherweise einen API-Schluessel`);
  }
}

const gameSource = fs.readFileSync("game.js", "utf8");
assert.match(gameSource, /function resolvePlayerImage/);
assert.match(gameSource, /PLAYER_IMAGE_PLACEHOLDER/);
assert.equal(fs.existsSync("assets/players/placeholder.svg"), true, "Spielerkarten-Platzhalter fehlt");

const output = execFileSync(
  process.execPath,
  [
    "tools/player-image-import/run-one-club-import.mjs",
    "--club",
    "Werder Bremen",
    "--fixture",
    "tools/player-image-import/fixtures/sportmonks-werder-bremen-sample.json",
    "--dry-run",
  ],
  { encoding: "utf8" },
);

assert.match(output, /Zuordnungsquote: 33\.33% \(1\/3\)/);
assert.match(output, /Fehlende Bilder: 1/);
assert.match(output, /Unsichere Treffer: 1/);

const report = JSON.parse(fs.readFileSync("tools/player-image-import/reports/player-image-import-werder-bremen.json", "utf8"));
assert.equal(report.scope, "single_club_test");
assert.equal(report.summary.total, 3);
assert.equal(report.summary.matched, 1);
assert.equal(report.summary.missingImages, 1);
assert.equal(report.summary.uncertain, 1);
assert.equal(report.results.every((result) => !result.license || result.license.cacheAllowed === false), true);
