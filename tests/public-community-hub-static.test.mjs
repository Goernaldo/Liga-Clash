import { existsSync, readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const index = readFileSync("index.html", "utf8");
const game = readFileSync("game.js", "utf8");
const styles = readFileSync("styles.css", "utf8");

assert.match(index, /id="publicSplash"/, "public splash section must exist");
assert.match(index, /Season 1/, "splash must show Season 1");
assert.match(index, /Football Card Game/, "splash must show the public subtitle");
assert.match(index, /assets\/splash\/splash_cards\.png/, "splash must use the combined splash cards artwork");
assert.match(index, /<button id="splashStartButton" class="splash-progress"[\s\S]*<i id="splashProgressBar"><\/i>[\s\S]*<span id="splashStartLabel">Lade Ressourcen\.\.\.<\/span>[\s\S]*<\/button>/, "splash start text must live inside the progress bar button");
assert.doesNotMatch(index, /<div class="splash-progress"><i id="splashProgressBar"><\/i><\/div>\s*<button id="splashStartButton"/, "splash must not render a separate progress bar and start button");
assert.doesNotMatch(index, /card_common\.png|card_uncommon\.png|card_rare\.png/, "old individual splash placeholders must not be used");
assert.doesNotMatch(index, /Mats Keller|Noah Stein|Leon Voss/, "old individual placeholder names must not be in the splash markup");
assert.doesNotMatch(index, /<b>5[0-9]<\/b>|<b>6[0-9]<\/b>|<b>7[0-9]<\/b>/, "splash cards must not show OVR numbers");
assert.match(index, /id="communityHub"/, "community hub section must exist");
[
  "idea",
  "bug",
  "forum",
  "tester",
  "moderator",
  "admin-application",
  "contact",
  "news",
  "roadmap",
  "social",
].forEach((view) => {
  assert.match(index, new RegExp(`data-community-view="${view}"`), `${view} entry must exist`);
});

assert.match(game, /function initPublicEntry\(\)/, "public entry initializer must exist");
assert.match(game, /function openCommunityHub\(\)/, "splash must open community hub");
assert.match(game, /const splashState = \{[\s\S]*progress: 0,[\s\S]*ready: false,[\s\S]*started: false,[\s\S]*\}/, "splash must track progress, ready and started state");
assert.match(game, /Lade Ressourcen\.\.\. \$\{splashState\.progress\} %/, "splash loading label must include percentage");
assert.match(game, /function handleDeveloperLogin\(form\)/, "developer login handler must exist");
assert.match(game, /data-community-view="developer-login"/, "developer login entry must be rendered from the social view");
assert.match(game, /publicGameUnlocked = true/, "developer login must unlock the game");
assert.match(game, /function publicEntryActive\(\)/, "public entry must guard route access");
assert.match(game, /kickoff-supercard-ideas-v1/, "ideas must be saved in local storage");
assert.match(game, /kickoff-supercard-applications-v1/, "applications must be saved in local storage");
assert.match(game, /kickoff-supercard-bugs-v1/, "bug reports must be saved in local storage");
assert.match(game, /kickoff-supercard-forum-v1/, "forum posts must be saved in local storage");
assert.match(game, /label: "COMMUNITY"/, "admin center must have a COMMUNITY main section");
assert.match(game, /function renderAdminCommunityModule\(section\)/, "admin community renderer must exist");
assert.match(game, /function handleAdminCommunityAction\(action, element\)/, "admin community actions must exist");
assert.match(game, /community-save-settings/, "community settings action must exist");
assert.match(game, /Willkommen bei KickOff SuperCard/, "public news copy must exist");
assert.match(game, /Core Gameplay/, "project status must show current phase");

assert.match(styles, /\.public-splash/, "public splash styles must exist");
assert.match(styles, /\.community-hub/, "community hub styles must exist");
assert.match(styles, /\.community-tile-grid/, "community tile grid styles must exist");
assert.match(styles, /\.community-admin-card/, "community admin card styles must exist");
assert.match(styles, /\.forum-post-card/, "forum post card styles must exist");
assert.match(styles, /\.splash-cards-art/, "combined splash artwork must be styled");
assert.match(styles, /max-width: 620px/, "desktop splash cards must be reduced to the requested size range");
assert.match(styles, /max-width: 360px/, "mobile splash cards must be reduced to the requested size range");
assert.match(styles, /\.splash-card-row::before/, "splash cards must have a floodlight glow");
assert.match(styles, /@media \(max-width: 720px\)/, "mobile layout must be covered");

assert.ok(existsSync("assets/splash/splash_cards.png"), "combined splash cards artwork must exist");
const png = readFileSync("assets/splash/splash_cards.png");
assert.equal(png[25], 6, "combined splash cards artwork must be RGBA PNG");

console.log("public community hub static test passed");
