import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");

const playMatchBody = game.match(/function playMatch\(\) \{([\s\S]*?)\n\}/)?.[1] || "";
assert.ok(playMatchBody.includes("startManualMatch"), "Play muss das manuelle Match starten");
assert.ok(!playMatchBody.includes("runMatchEngine"), "Play darf kein komplettes Match automatisch simulieren");

assert.ok(game.includes("manualPlayerSelection: true"), "Manuelle Kartenauswahl muss im Matchstate markiert sein");
assert.ok(game.includes("autoResolveMatch: false"), "Auto-Resolve muss fuer manuelle Matches deaktiviert sein");
assert.ok(game.includes("function handleBattleBoardClick"), "Battle-Board braucht Click-Handling");
assert.ok(game.includes('data-battle-action="select-card"'), "Spielerkarten muessen im Match waehlbar sein");
assert.ok(game.includes('data-battle-action="confirm-card"'), "Auswahl muss bestaetigt werden");

assert.ok(game.includes("function createDraftBoard"), "Draft-Board-Erzeugung fehlt");
assert.ok(game.includes("settings.rows * settings.columns"), "Draft-Board muss die Admin-Reihen und -Spalten verwenden");
assert.ok(game.includes("normalizeDraftBoardSettings(state.draftBoardSettings)"), "Draft-Board muss die Admin-Einstellungen laden");
assert.ok(game.includes("function claimDraftPick"), "Draft-Picks muessen claimbar sein");
assert.ok(game.includes('data-feature-action="draft-pick"'), "Draft-Slots brauchen Feature-Actions");

assert.ok(game.includes("function showPackReveal"), "Pack-Reveal fehlt");
assert.ok(game.includes("pack-opening-stage"), "Pack-Oeffnungsbuehne fehlt");
assert.ok(game.includes("pack-card-cover"), "Karten muessen verdeckt starten");
assert.ok(game.includes('data-reveal-action="next"'), "Einzelnes Aufdecken fehlt");

assert.ok(game.includes("function handleAdminBoosterImageUpload"), "Admin-Booster-Bildupload fehlt");
assert.ok(game.includes("function validatePackImage"), "Pack-Bildvalidierung fehlt");
assert.ok(game.includes("function getPackImageUrl"), "Pack-Bildaufloesung fehlt");
assert.ok(game.includes("packImages"), "Admin-Packbilder muessen im Admin-State gespeichert werden");
assert.ok(game.includes('data-pack-upload="image"'), "Booster-Editor braucht Dateiinput");

assert.ok(css.includes(".pack-opening-stage"), "Pack-Animation-Styles fehlen");
assert.ok(css.includes(".manual-card-grid"), "Manuelle Matchauswahl-Styles fehlen");
assert.ok(css.includes(".draft-board-grid"), "Draft-Board-Styles fehlen");
assert.ok(css.includes(".league-participant-name"), "Liga-Teilnehmer-Styles fehlen");
assert.ok(css.includes(".pack-upload-field"), "Admin-Packupload-Styles fehlen");

console.log("Core feature fixes static checks passed.");
