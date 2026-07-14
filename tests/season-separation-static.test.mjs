import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const game = fs.readFileSync("game.js", "utf8");
const index = fs.readFileSync("index.html", "utf8");
const seasonFile = fs.readFileSync("data/season-2026-27.js", "utf8");

assert.ok(game.includes('const CURRENT_SEASON = SEASON_2026_27_STATUS.season || "2026/27"'), "Current season constant must exist");
assert.ok(game.includes("function isCurrentSeasonCard"), "Central current-season card guard must exist");
assert.ok(game.includes("verifiedForSeason === true"), "Current cards must require verifiedForSeason");
assert.ok(game.includes("isActiveSeasonCard === true"), "Current cards must require isActiveSeasonCard");
assert.ok(game.includes("function isHistoricalSeasonCard"), "Historical card guard must exist");
assert.ok(game.includes("function currentSeasonCardPool"), "Current season pool helper must exist");
assert.ok(game.includes("function getCurrentSquad"), "Current squad must be read from explicit memberships");
assert.ok(game.includes("getSeasonSquadMemberships"), "Squad memberships must be separated from cards");
assert.ok(!game.includes("currentSquad = allCards"), "Current squads must not be built from all cards");
assert.ok(!game.includes("previousClubIds.includes"), "Current squads must not be restored from previous clubs");

assert.ok(index.includes('select id="adminDbSeason"'), "Admin database needs a season selector");
assert.ok(game.includes("DB_SEASONS"), "Admin season options must be configured");
assert.ok(game.includes("cardSeasonStatusLabel"), "Admin database must label current and historical cards");
assert.ok(game.includes("Datenpruefung -> Saisonvermischung"), "Data check must expose season mixing diagnosis");
assert.ok(game.includes('data-phase9-action="repair-season-mixing"'), "Season mixing repair action must be available");
assert.ok(game.includes("function repairSeasonMixing"), "Season mixing repair function must exist");

assert.ok(game.includes("!isHistoricalPackPool(pool) && !isCurrentSeasonCard(card)"), "Current pack pools must reject non-current cards");
assert.ok(game.includes("isHistoricalPackPool(pool) && !isHistoricalSeasonCard(card)"), "Historical pack pools must reject current-only cards");
assert.ok(game.includes("const pool = playableCardPool();"), "Starter pack must use the current-season-only playable pool after cleanup");
assert.ok(game.includes("const gamePool = playableCardPool();"), "CPU deck must use the current-season-only playable pool after cleanup");
assert.ok(game.includes("function drawGameCard"), "Booster draw function must exist");
assert.ok(game.includes("const activePool = isHistoricalPackPool(pool) ? GAME_CARDS.filter(isHistoricalSeasonCard) : playableCardPool();"), "Booster draw must choose historical or current-season pool explicitly");

assert.ok(game.includes('id: currentCardId'), "Current season cards need season-specific card IDs");
assert.ok(game.includes('cardId: currentCardId'), "Current season cardId must be season-specific");
assert.ok(game.includes('sourceId: playerId'), "Current cards must keep stable player source ID");
assert.ok(game.includes('squadSeason: CURRENT_SEASON'), "Current cards must store squad season");
assert.ok(game.includes('teamId: card.teamId || teamIdForClubName'), "Current cards must store team ID");

assert.ok(game.includes("clearTemporaryPlayerCatalog(GAME_CARDS)"), "Imported player catalog must be cleared for cleanup");
assert.ok(game.includes("removeTemporaryPlayerCards"), "Saved temporary cards must be removed during cleanup");
assert.ok(game.includes("Noch keine offiziellen Kaderdaten vorhanden"), "Admin squads page must not show historical fallback rosters");

assert.ok(seasonFile.includes("squadMemberships"), "Season data must contain explicit squad memberships");
assert.ok(seasonFile.includes("verifiedForSeason: true"), "Season memberships must be explicitly verified for the active squad");

const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(fs.readFileSync("data/bundesliga-26-27-squads.js", "utf8"), context, { filename: "data/bundesliga-26-27-squads.js" });
vm.runInContext(seasonFile, context, { filename: "data/season-2026-27.js" });

const season = context.window.LIGA_CLASH_SEASON_2026_27;
assert.ok(Array.isArray(season.squadMemberships), "Season export must expose squadMemberships");
assert.equal(season.squadMemberships.length, season.players.length, "Every active season player needs a squad membership");
assert.ok(season.squadMemberships.every((entry) => entry.season === "2026/27"), "Squad memberships must be season-bound");
assert.ok(season.squadMemberships.every((entry) => entry.squadStatus === "active"), "Current squad memberships must be active");
assert.ok(season.squadMemberships.every((entry) => entry.verifiedForSeason === true), "Current squad memberships must be verified");

console.log("Season separation static test passed");
