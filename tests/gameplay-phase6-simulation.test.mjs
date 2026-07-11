import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const situationsSource = game.match(/const matchSituations = (\[[\s\S]*?\n\]);/)?.[1];
assert.ok(situationsSource, "Match-Situationen muessen im Code auffindbar sein");

const context = {};
vm.createContext(context);
const situations = vm.runInContext(situationsSource, context);
assert.equal(situations.length, 12, "Phase 6 benoetigt exakt 12 vorbereitete Situationen");

const difficulties = {
  easy: { playerBase: 78, cpuBase: 78, decisionSkill: 0.62 },
  normal: { playerBase: 78, cpuBase: 78, decisionSkill: 0.86 },
  hard: { playerBase: 78, cpuBase: 81, decisionSkill: 1 },
};
const MATCHES_PER_DIFFICULTY = 250;

const results = {};
for (const [difficulty, config] of Object.entries(difficulties)) {
  results[difficulty] = simulateDifficulty(difficulty, config, MATCHES_PER_DIFFICULTY);
}

for (const [difficulty, summary] of Object.entries(results)) {
  assert.equal(summary.matches, MATCHES_PER_DIFFICULTY, `${difficulty}: ${MATCHES_PER_DIFFICULTY} Matches erwartet`);
  assert.equal(summary.invalidRounds, 0, `${difficulty}: alle Matches brauchen exakt fuenf Runden`);
  assert.equal(summary.duplicateUse, 0, `${difficulty}: Karten duerfen nicht doppelt genutzt werden`);
  assert.equal(summary.invalidScores, 0, `${difficulty}: Endstaende muessen gueltig sein`);
  assert.equal(summary.invalidSelections, 0, `${difficulty}: alle Kartenauswahlen muessen gueltig sein`);
  assert.equal(summary.missingRoundResults, 0, `${difficulty}: jede Runde braucht ein Ergebnis`);
  assert.ok(summary.wins + summary.losses === MATCHES_PER_DIFFICULTY, `${difficulty}: kein Match darf offen bleiben`);
  assert.ok(Number.isFinite(summary.averageEffectiveDiff), `${difficulty}: Wertdifferenz muss endlich sein`);
  assert.ok(Number.isFinite(summary.averageDurationMs), `${difficulty}: Matchdauer muss endlich sein`);
}

assert.ok(results.easy.wins > results.hard.wins, "Leicht muss nachvollziehbar mehr Spielersiege als Schwer erzeugen");
assert.ok(results.hard.losses > results.normal.losses, "Schwer muss mehr Niederlagen als Normal erzeugen");
assert.ok(results.easy.wins >= results.normal.wins, "Leicht darf nicht schwerer als Normal ausfallen");
assert.ok(results.hard.wins > 0 && results.hard.losses < MATCHES_PER_DIFFICULTY, "Schwer darf nicht komplett deterministisch sein");

console.log("Gameplay Phase 6 simulation test passed", JSON.stringify(results));

function simulateDifficulty(difficulty, config, matches) {
  const summary = {
    matches,
    wins: 0,
    losses: 0,
    invalidRounds: 0,
    duplicateUse: 0,
    invalidScores: 0,
    invalidSelections: 0,
    missingRoundResults: 0,
    fallbackSituations: 0,
    tieBreakers: 0,
    totalPlayerScore: 0,
    totalCpuScore: 0,
    totalEffectiveDiff: 0,
    totalDurationMs: 0,
    scoreCounts: {},
  };
  for (let matchIndex = 0; matchIndex < matches; matchIndex += 1) {
    const rng = seeded(matchIndex + difficulty.length * 997);
    const playerDeck = makeDeck("player", config.playerBase);
    const cpuDeck = makeDeck("cpu", config.cpuBase);
    const usedPlayer = new Set();
    const usedCpu = new Set();
    const rounds = pickSituations(rng);
    let playerScore = 0;
    let cpuScore = 0;
    let matchEffectiveDiff = 0;
    rounds.forEach((situation, roundIndex) => {
      const playerChoice = chooseCard(playerDeck, situation.playerGroups, usedPlayer, false, config, rng);
      const cpuChoice = chooseCard(cpuDeck, situation.cpuGroups, usedCpu, true, config, rng);
      const player = playerChoice.card;
      const cpu = cpuChoice.card;
      if (!player || !cpu) summary.invalidSelections += 1;
      if (playerChoice.fallbackUsed) summary.fallbackSituations += 1;
      if (cpuChoice.fallbackUsed) summary.fallbackSituations += 1;
      if (usedPlayer.has(player.id) || usedCpu.has(cpu.id)) summary.duplicateUse += 1;
      usedPlayer.add(player.id);
      usedCpu.add(cpu.id);
      const playerValue = cardValue(player, situation, rng, 0);
      const cpuValue = cardValue(cpu, situation, rng, difficulty === "hard" ? 0 : 0);
      if (!Number.isFinite(playerValue) || !Number.isFinite(cpuValue)) summary.invalidSelections += 1;
      if (playerValue === cpuValue) summary.tieBreakers += 1;
      matchEffectiveDiff += Math.abs(playerValue - cpuValue);
      if (playerValue >= cpuValue) playerScore += 1;
      else cpuScore += 1;
      if (playerScore + cpuScore !== roundIndex + 1) summary.missingRoundResults += 1;
      assert.ok(roundIndex < 5);
    });
    if (rounds.length !== 5) summary.invalidRounds += 1;
    if (playerScore + cpuScore !== 5 || playerScore === cpuScore) summary.invalidScores += 1;
    if (playerScore > cpuScore) summary.wins += 1;
    else summary.losses += 1;
    const scoreKey = `${playerScore}:${cpuScore}`;
    summary.scoreCounts[scoreKey] = (summary.scoreCounts[scoreKey] || 0) + 1;
    summary.totalPlayerScore += playerScore;
    summary.totalCpuScore += cpuScore;
    summary.totalEffectiveDiff += matchEffectiveDiff / Math.max(1, rounds.length);
    summary.totalDurationMs += 5 + Math.floor(rng() * 7);
  }
  summary.averageScore = `${(summary.totalPlayerScore / matches).toFixed(2)}:${(summary.totalCpuScore / matches).toFixed(2)}`;
  summary.mostFrequentScore = Object.entries(summary.scoreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  summary.averageEffectiveDiff = Number((summary.totalEffectiveDiff / matches).toFixed(2));
  summary.averageDurationMs = Number((summary.totalDurationMs / matches).toFixed(2));
  delete summary.totalPlayerScore;
  delete summary.totalCpuScore;
  delete summary.totalEffectiveDiff;
  delete summary.totalDurationMs;
  delete summary.scoreCounts;
  return summary;
}

function pickSituations(rng) {
  const pool = situations.filter((situation) => situation.active !== false);
  const picked = [];
  while (picked.length < 5) {
    const candidate = pool[Math.floor(rng() * pool.length)];
    if (!picked.some((item) => item.id === candidate.id)) picked.push(candidate);
  }
  return picked;
}

function makeDeck(prefix, base) {
  return [
    card(`${prefix}-gk`, "keeper", base),
    card(`${prefix}-d1`, "defense", base + 1),
    card(`${prefix}-d2`, "defense", base - 1),
    card(`${prefix}-m1`, "mid", base),
    card(`${prefix}-m2`, "mid", base + 2),
    card(`${prefix}-a1`, "attack", base + 1),
  ];
}

function card(id, group, base) {
  return { id, group, stats: { pace: base, finish: base, passing: base, dribble: base, defense: base, physical: base, iq: base, teamgeist: base, reflexes: base, reaction: base } };
}

function chooseCard(deck, groups, used, isCpu, config, rng) {
  const candidates = deck.filter((item) => groups.includes(item.group) && !used.has(item.id));
  const fallback = deck.filter((item) => !used.has(item.id));
  const pool = candidates.length ? candidates : fallback;
  const sorted = [...pool].sort((a, b) => b.stats.finish - a.stats.finish);
  const fallbackUsed = candidates.length === 0;
  if (isCpu && config.decisionSkill < 0.7 && sorted.length > 2) {
    return { card: sorted[Math.floor(rng() * Math.min(3, sorted.length))], fallbackUsed };
  }
  if (isCpu && config.decisionSkill < 1 && sorted.length > 1 && rng() > 0.78) {
    return { card: sorted[1], fallbackUsed };
  }
  return { card: sorted[0], fallbackUsed };
}

function cardValue(card, situation, rng, hardBonus) {
  const weighted = situation.stats.reduce((sum, stat) => sum + (card.stats[stat.key] || card.stats.finish) * stat.weight, 0);
  const totalWeight = situation.stats.reduce((sum, stat) => sum + stat.weight, 0) || 1;
  const random = Math.floor(rng() * 11) - 4;
  return Math.round(weighted / totalWeight) + random + hardBonus;
}

function seeded(seed) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 48271) % 2147483647;
    return value / 2147483647;
  };
}
