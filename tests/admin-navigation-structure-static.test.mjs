import assert from "node:assert/strict";
import fs from "node:fs";

const game = fs.readFileSync("game.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const navBlock = game.slice(game.indexOf("const ADMIN_NAV_GROUPS"), game.indexOf("const POSITION_PACK_GROUPS"));

[
  "Dashboard",
  "Vereine & Spieler",
  "Karten & Gameplay",
  "Wettbewerbe",
  "Belohnungen & Wirtschaft",
  "Benutzer & Rechte",
  "Datenverwaltung",
  "Einstellungen",
].forEach((label) => {
  assert.ok(navBlock.includes(`label: "${label}"`), `Main admin area missing: ${label}`);
});

[
  "playerscout",
  "Transfers & Leihen",
  "Mannschaften",
  "Profilbilder",
  "Community & Inhalte",
  "Sperren",
  "Loginverlauf",
  "Systemeinstellungen",
].forEach((removed) => {
  assert.ok(!navBlock.includes(removed), `Removed admin entry still visible: ${removed}`);
});

[
  "clubs",
  "players",
  "squads",
  "season-archive",
  "cards",
  "level-system",
  "star-system",
  "fusion",
  "deck-rules",
  "match-rules",
  "draftboard",
  "leagues",
  "season-management",
  "schedules",
  "promotion-relegation",
  "events",
  "boosters",
  "droprates",
  "shop",
  "missions",
  "battle-pass",
  "daily-login",
  "users",
  "roles",
  "rights",
  "admin-audit",
  "datacheck",
  "data-duplicates",
  "export",
  "backups",
  "system-general",
  "design",
  "storage",
  "version",
].forEach((section) => {
  assert.ok(navBlock.includes(`section: "${section}"`), `Admin subsection missing: ${section}`);
});

assert.ok(game.includes("ADMIN_NAV_GROUPS"), "Central admin nav structure must exist");
assert.ok(game.includes("renderAdminNavigationShell"), "Admin navigation shell must be rendered dynamically");
assert.ok(game.includes("renderAdminSubNavigation"), "Second-level admin navigation must exist");
assert.ok(game.includes("renderAdminBreadcrumb"), "Breadcrumb navigation must exist");
assert.ok(game.includes("data-admin-group"), "Main area buttons must carry group state");
assert.ok(game.includes("data-admin-quick-section"), "Dashboard quick actions must navigate to sections");
assert.ok(game.includes("canViewAdminSection"), "Main area permission helper must exist");
assert.ok(game.includes("canEditAdminPage"), "Page permission helper must exist");

assert.ok(css.includes(".admin-subnav"), "Subnavigation styles missing");
assert.ok(css.includes(".admin-breadcrumb"), "Breadcrumb styles missing");
assert.ok(css.includes(".admin-dashboard-grid"), "Dashboard tile styles missing");
assert.ok(css.includes("@media (max-width: 980px)") && css.includes(".admin-window"), "Mobile admin layout styles missing");

console.log("Admin navigation cleanup static test passed");
