import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bestCandidateFor, importSummary } from "./matcher.mjs";
import { SportmonksPlayerImageProvider, SPORTMONKS_TOKEN_ENV } from "./sportmonks-provider.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");

function argValue(name, fallback = "") {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] || fallback : fallback;
}

function hasArg(name) {
  return process.argv.includes(name);
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

async function loadLocalCards(clubName) {
  const source = await fs.readFile(path.join(projectRoot, "game.js"), "utf8");
  const cards = [];
  const pattern = /cardDef\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*([0-9]+)/g;
  for (const match of source.matchAll(pattern)) {
    const [, id, name, pos, club, cls] = match;
    if (normalizeText(club) === normalizeText(clubName)) {
      cards.push({ id, name, pos, club, cls: Number(cls) });
    }
  }
  return cards;
}

async function loadFixture(fixturePath) {
  const absolutePath = path.resolve(projectRoot, fixturePath);
  const fixture = JSON.parse(await fs.readFile(absolutePath, "utf8"));
  return {
    providerId: fixture.providerId || "sportmonks-fixture",
    async searchPlayer(player) {
      return fixture.candidatesByPlayerId?.[player.id] || fixture.candidatesByName?.[player.name] || [];
    },
    async getLicenseMetadata(externalId) {
      return {
        provider: fixture.providerId || "sportmonks-fixture",
        externalId,
        license: "fixture_no_real_image_rights",
        attributionRequired: false,
        cacheAllowed: false,
        remoteDisplayAllowed: false,
        commercialUseAllowed: false,
        licenseReviewStatus: "test_fixture_only",
      };
    },
  };
}

async function run() {
  const club = argValue("--club", "Werder Bremen");
  const fixture = argValue("--fixture", "");
  const dryRun = hasArg("--dry-run");
  const provider = fixture ? await loadFixture(fixture) : new SportmonksPlayerImageProvider();

  if (!fixture && !process.env[SPORTMONKS_TOKEN_ENV]) {
    console.error(`${SPORTMONKS_TOKEN_ENV} fehlt. Es wurde kein echter Provider-Import gestartet.`);
    process.exitCode = 2;
    return;
  }

  const players = await loadLocalCards(club);
  if (!players.length) {
    console.error(`Keine lokalen Karten fuer Verein "${club}" gefunden.`);
    process.exitCode = 1;
    return;
  }

  const results = [];
  for (const player of players) {
    const candidates = await provider.searchPlayer(player);
    const best = bestCandidateFor(player, candidates);
    const license = best.candidate?.id ? await provider.getLicenseMetadata(best.candidate.id) : null;
    results.push({
      player,
      status: best.status,
      confidence: best.confidence,
      candidate: best.candidate
        ? {
            provider: best.candidate.provider || provider.providerId,
            externalId: best.candidate.id,
            name: best.candidate.display_name || best.candidate.name || best.candidate.common_name,
            imagePathPresent: Boolean(best.candidate.image_path),
          }
        : null,
      license,
    });
  }

  const summary = importSummary(results);
  const report = {
    generatedAt: new Date().toISOString(),
    phase: "player-image-import-phase-1",
    club,
    provider: provider.providerId,
    dryRun,
    scope: "single_club_test",
    summary,
    results,
  };

  const reportName = `player-image-import-${normalizeText(club).replace(/\s+/g, "-")}.json`;
  const reportPath = path.join(projectRoot, "tools/player-image-import/reports", reportName);
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log(`Provider: ${provider.providerId}`);
  console.log(`Verein: ${club}`);
  console.log(`Karten geprueft: ${summary.total}`);
  console.log(`Zuordnungsquote: ${summary.matchRate}% (${summary.matched}/${summary.total})`);
  console.log(`Fehlende Bilder: ${summary.missingImages}`);
  console.log(`Unsichere Treffer: ${summary.uncertain}`);
  console.log(`Report: ${path.relative(projectRoot, reportPath)}`);
}

run().catch((error) => {
  console.error(String(error?.message || error).replace(/[A-Za-z0-9_=-]{24,}/g, "[redacted]"));
  process.exitCode = 1;
});
