import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");

for (const token of [
  "const ADMIN_ROLES",
  "const ADMIN_PERMISSION_MATRIX",
  "const ADMIN_MODULE_PERMISSIONS",
  "function hasAdminPermission",
  "function requireAdminPermission",
  "function logAdminAction",
  "function createAdminBackup",
  "function createAdminExportPayload",
  "function validateAdminData",
  "function renderAdminPhase9Module",
]) {
  assert.ok(game.includes(token), `${token} fehlt`);
}

for (const role of ["Owner", "Admin", "Moderator", "Tester", "User"]) {
  assert.match(game, new RegExp(`["']${role}["']`), `${role} muss zentral vorkommen`);
}

for (const section of [
  "dashboard", "users", "roles", "players", "cards", "clubs", "nations", "leagues",
  "boosters", "droprates", "missions", "news", "events", "shop", "platzpass",
  "design", "texts", "version", "status", "import", "export", "backups", "logs",
]) {
  assert.ok(html.includes(`data-admin-section="${section}"`) || game.includes(`${section}:`), `${section} muss als Admin-Modul erreichbar sein`);
}

assert.equal((html.match(/id="adminCenter"/g) || []).length, 1, "Es darf nur ein Admin Center geben");
assert.ok(html.includes('id="adminPhase9Content"'), "Generisches Phase-9-Panel fehlt");
assert.ok(html.includes('value="Tester"'), "Tester-Rolle muss im Benutzerformular verfuegbar sein");
assert.ok(game.includes('requireAdminPermission("events.manage"'), "Events muessen technisch geschuetzt sein");
assert.ok(game.includes('requireAdminPermission("boosters.manage"'), "Booster muessen technisch geschuetzt sein");
assert.ok(game.includes('requireAdminPermission("wallet.grant"'), "Wallet-Gutschriften muessen technisch geschuetzt sein");
assert.ok(game.includes('requireAdminPermission("data.reset"'), "Reset muss technisch geschuetzt sein");
assert.ok(game.includes('dropRateSum(dropRates, minClass, maxClass)'), "Dropchancen-Summe muss vor dem Speichern geprueft werden");
assert.ok(game.includes('"***"'), "PINs muessen in Logs/Exporten maskiert werden");
assert.ok(css.includes(".admin-phase9-panel"), "Phase-9-Panel-Styles fehlen");
assert.ok(css.includes(".phase9-table"), "Phase-9-Tabellen-Styles fehlen");

for (const doc of [
  "PHASE_9_REPORT.md",
  "PHASE_9_TEST_REPORT.md",
  "PHASE_9_BUG_REPORT.md",
  "ADMIN_CENTER.md",
  "PERMISSIONS_MATRIX.md",
  "IMPORT_EXPORT.md",
  "DATA_VALIDATION.md",
]) {
  assert.ok(existsSync(resolve(root, doc)), `${doc} muss fuer Phase 9 vorhanden sein`);
}

console.log("Phase 9 admin static checks passed.");
