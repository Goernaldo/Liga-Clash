import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);

for (const file of ["data/bundesliga-26-27-squads.js", "data/season-2026-27.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const squads = context.window.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS;
const season = context.window.LIGA_CLASH_SEASON_2026_27;

assert.ok(Array.isArray(squads), "Bundesliga squad data must be loaded");
assert.ok(season, "Season 2026/27 data must be loaded");
assert.equal(season.dataStatus.season, "2026/27");
assert.equal(season.dataStatus.lastSquadUpdate, "2026-07-13");
assert.equal(season.dataStatus.transferWindowOpen, true);
assert.equal(season.dataStatus.finalSeasonSquads, false);
assert.ok(squads.length >= 300, "Bundesliga data should contain a broad squad pool");
assert.equal(season.players.length, squads.length, "Season players should mirror Bundesliga squad source");
assert.ok(Array.isArray(season.squadMemberships), "Season data must expose explicit squad memberships");
assert.equal(season.squadMemberships.length, season.players.length, "Every season player needs one explicit squad membership");
assert.ok(season.squadMemberships.every((entry) => entry.season === "2026/27" && entry.squadStatus === "active" && entry.verifiedForSeason === true), "Current squad memberships must be active and verified");

const ids = new Set();
const clubCounts = new Map();
for (const row of squads) {
  const [id, name, position, club] = row;
  assert.ok(id, "player id required");
  assert.ok(name, "player name required");
  assert.ok(position, `${name} requires a position`);
  assert.ok(club, `${name} requires a club`);
  assert.equal(ids.has(id), false, `duplicate player id ${id}`);
  ids.add(id);
  clubCounts.set(club, (clubCounts.get(club) || 0) + 1);
}

assert.equal(clubCounts.size, 18, "Bundesliga squad data should cover 18 project Bundesliga clubs");
for (const [club, count] of clubCounts) {
  assert.ok(count >= 15, `${club} should contain a usable first-team squad pool`);
}

const index = fs.readFileSync("index.html", "utf8");
assert.ok(index.includes("data/bundesliga-26-27-squads.js"), "Bundesliga data script must be included");
assert.ok(index.includes("data/season-2026-27.js"), "Season data script must be included");
assert.ok(index.indexOf("data/bundesliga-26-27-squads.js") < index.indexOf("data/season-2026-27.js"), "Season data must load after squad data");
assert.ok(index.indexOf("data/season-2026-27.js") < index.indexOf("game.js"), "Season data must load before game.js");

console.log("Season 2026/27 static test passed");
