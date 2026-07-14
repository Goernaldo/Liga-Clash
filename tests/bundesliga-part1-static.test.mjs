import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);

for (const file of ["data/bundesliga-26-27-squads.js", "data/bundesliga-26-27-part1.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const players = context.window.LIGA_CLASH_2627_PART1_PLAYERS;
const details = context.window.LIGA_CLASH_2627_PLAYER_DETAILS;
const squads = context.window.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS;
const targetClubs = ["Werder Bremen", "FC Bayern Muenchen", "Borussia Dortmund"];
const expectedClubIds = ["werder-bremen", "fc-bayern-muenchen", "borussia-dortmund"];

assert.ok(Array.isArray(players), "Part 1 player details must be exposed");
assert.ok(players.length >= 60, "Part 1 must contain at least about 60 real squad records");
assert.ok(details && typeof details === "object", "Player detail map must be exposed");

const ids = new Set();
const byClub = new Map();
for (const player of players) {
  assert.ok(player.id, "player id required");
  assert.equal(ids.has(player.id), false, `duplicate player id ${player.id}`);
  ids.add(player.id);
  assert.ok(player.firstName || player.lastName, `${player.id} requires a name`);
  assert.ok(player.displayName, `${player.id} requires displayName`);
  assert.ok(player.position, `${player.displayName} requires a position`);
  assert.ok(targetClubs.includes(player.clubName), `${player.displayName} must belong to a scoped club`);
  assert.ok(expectedClubIds.includes(player.clubId), `${player.displayName} must use a known clubId`);
  assert.equal(player.leagueId, "bundesliga");
  assert.equal(player.squadStatus, "active");
  assert.equal(player.season, "2026/27");
  assert.equal(player.image, "assets/players/player-silhouette.svg");
  assert.equal(player.isActive, true);
  assert.equal(player.lastVerifiedAt, "2026-07-13");
  assert.equal(details[player.id]?.displayName, player.displayName, `${player.id} detail lookup must resolve`);
  byClub.set(player.clubName, (byClub.get(player.clubName) || 0) + 1);
}

for (const club of targetClubs) {
  assert.ok((byClub.get(club) || 0) >= 20, `${club} must have at least 20 active players`);
  assert.equal(
    new Set(squads.filter((row) => row[3] === club).map((row) => row[0])).size,
    squads.filter((row) => row[3] === club).length,
    `${club} squad rows must not duplicate ids`,
  );
}

const index = fs.readFileSync("index.html", "utf8");
assert.equal(index.includes("data/bundesliga-26-27-part1.js"), false, "Quarantined part 1 update must not be auto-loaded into current squads");
assert.ok(index.includes("<th>Nr</th>"), "Admin table must show shirt numbers");
assert.ok(index.includes("<th>Nation</th>"), "Admin table must show nationality");
assert.ok(index.includes("<th>Status</th>"), "Admin table must show squad status");
assert.ok(index.includes("<th>Datenstand</th>"), "Admin table must show data date");

const game = fs.readFileSync("game.js", "utf8");
assert.ok(game.includes("LIGA_CLASH_2627_PLAYER_DETAILS"), "Game card normalization must read player details");
assert.ok(game.includes("applyPartOneRosterOverrides(GAME_CARDS)"), "Game must deactivate replaced active season cards");
assert.ok(game.includes("clearTemporaryPlayerCatalog(GAME_CARDS)"), "Imported/current temporary catalog must be cleared until clean squads are available");
assert.ok(game.includes("!historicalPack && !isCurrentSeasonCard(card)"), "Pack pools must reject non-current cards");

console.log("Bundesliga 2026/27 part 1 quarantine static test passed");
