import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");

const leagueSource = game.match(/const LEAGUE_PHASE_CONFIG = (\[[\s\S]*?\n\]);/)?.[1];
assert.ok(leagueSource, "LEAGUE_PHASE_CONFIG muss vorhanden sein");
const context = {};
vm.createContext(context);
const leagues = vm.runInContext(leagueSource, context);

assert.equal(JSON.stringify(leagues.map((league) => league.name)), JSON.stringify(["1. Liga", "2. Liga", "3. Liga", "Unterste Liga"]));
assert.equal(JSON.stringify(leagues.map((league) => league.participantCount)), JSON.stringify([18, 18, 20, 25]));
assert.ok(game.includes("function createLeagueWeek"), "Ligawoche muss erzeugt werden");
assert.ok(game.includes("function updateLeagueTable"), "Tabellensortierung muss zentral sein");
assert.ok(game.includes("function completeLeagueMatch"), "Phase-6-Matches muessen in Phase 8 gewertet werden");
assert.ok(game.includes("function settleLeagueWeek"), "Wochenabschluss muss vorhanden sein");
assert.ok(game.includes("function recordGameEvent"), "zentrale Missionsereignisse muessen vorhanden sein");
assert.ok(game.includes("function resetMissionsIfNeeded"), "Mission-Resetlogik muss vorhanden sein");
assert.ok(game.includes("state.leagueSystem"), "League-System muss im State gespeichert werden");
assert.ok(game.includes("state.missionSystem"), "Mission-System muss im State gespeichert werden");
assert.ok(game.includes('recordGameEvent("league_match_completed"'), "Ligamatch-Event fehlt");
assert.ok(game.includes('recordGameEvent("booster_opened"'), "Booster-Event fehlt");
assert.ok(game.includes('recordGameEvent("card_received"'), "Kartenerhalt-Event fehlt");
assert.ok(game.includes('data-feature-action="settle-league-week"'), "Wochenabschluss-Button fehlt");
assert.ok(css.includes(".league-week-shell"), "Phase-8-Liga-Styles fehlen");
assert.ok(css.includes(".mission-progress"), "Missionsfortschritt-Styles fehlen");

console.log("Phase 8 league and mission static checks passed.");
