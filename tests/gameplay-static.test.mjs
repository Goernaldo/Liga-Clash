import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(/const MATCH_CARD_COUNT = 9;/.test(game), "Gameplay muss 9 Karten pro Matchdeck nutzen.");
assert(/const MATCH_ACTIVE_COUNT = 6;/.test(game), "Gameplay muss 6 aktive Karten nutzen.");
assert(/const MATCH_SUBSTITUTE_COUNT = 3;/.test(game), "Gameplay muss 3 Ersatzkarten unterstuetzen.");
assert(/const MATCH_ROUNDS = 5;/.test(game), "Gameplay muss 5 Runden spielen.");

["1-2-1-2", "1-1-2-2", "1-2-2-1"].forEach((formation) => {
  assert(game.includes(`"${formation}"`) && html.includes(`data-formation="${formation}"`), `Formation ${formation} fehlt.`);
});

[
  "prepareMatch",
  "validateMatchDeck",
  "buildCpuDeck",
  "runMatchEngine",
  "resolveMatchRound",
  "determineRoundWinner",
  "summarizeMatch",
  "calculateRoundValue",
  "prepareRewardBoard",
  "normalizeStoredMatch",
].forEach((fn) => assert(game.includes(`function ${fn}`), `${fn} fehlt.`));

assert(html.includes('id="cpuDifficulty"'), "CPU-Schwierigkeit fehlt in der UI.");
assert(html.includes('id="battleBoard"'), "Battle-Zone fehlt in der UI.");
assert(html.includes('id="matchSummary"'), "Match-Zusammenfassung fehlt in der UI.");

[".difficulty-select", ".battle-board", ".battle-round", ".match-summary", ".bench-list"].forEach((selector) => {
  assert(css.includes(selector), `Style ${selector} fehlt.`);
});

assert(!/side === "cpu"\s*\?\s*difficulty\.deckBonus/.test(game), "CPU darf keine nachtraegliche Werte-Manipulation bekommen.");
assert(/state\.activeMatch = match;\s*saveState\(\);/.test(game), "Aktives Match muss vor der Aufloesung gespeichert werden.");
assert(/activeStatuses\.includes\(storedStatus\) \? "aborted"/.test(game), "Reload eines aktiven Matches muss als abgebrochen erkannt werden.");
assert(/DECK_SYSTEM\?\.validateDeck/.test(game), "Phase-6-Matchstart muss die zentrale Deckvalidierung nutzen.");
assert(/match\.status = "match_complete"/.test(game), "Matchabschlussstatus fehlt.");
assert(/usedPlayerCards/.test(game) && /usedCpuCards/.test(game), "Getrennte Kartenverbrauchslisten fehlen.");
assert(/rewardTier/.test(game) && /rewarded: false/.test(game), "Reward-Handoff muss Belohnungsstufe und Anti-Doppelbelohnung vorbereiten.");
assert((game.match(/id: "/g) || []).length >= 12, "Mindestens 12 Match-Situationen muessen konfiguriert sein.");

console.log("Gameplay static checks passed.");
