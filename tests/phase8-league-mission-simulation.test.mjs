import assert from "node:assert/strict";

const leagues = [
  { id: "league-1", name: "1. Liga", participantCount: 18, promotionPlaces: 0, relegationPlaces: 3, rewards: { promotion: 1400, stay: 900, relegation: 550 } },
  { id: "league-2", name: "2. Liga", participantCount: 18, promotionPlaces: 3, relegationPlaces: 3, rewards: { promotion: 1100, stay: 700, relegation: 420 } },
  { id: "league-3", name: "3. Liga", participantCount: 20, promotionPlaces: 3, relegationPlaces: 4, rewards: { promotion: 850, stay: 520, relegation: 320 } },
  { id: "league-bottom", name: "Rookie-Liga", participantCount: 25, promotionPlaces: 4, relegationPlaces: 0, rewards: { promotion: 650, stay: 380, relegation: 220 } },
];

const leagueSummary = Object.fromEntries(leagues.map((league) => [league.id, simulateLeague(league, 100)]));
const missionSummary = simulateMissions(100, 50, 2000, 500, 500);
const weekRangeSummary = testWeekRanges();

for (const [leagueId, result] of Object.entries(leagueSummary)) {
  assert.equal(result.weeks, 100, `${leagueId}: 100 Wochen erwartet`);
  assert.equal(result.invalidParticipants, 0, `${leagueId}: Teilnehmerzahl fehlerhaft`);
  assert.equal(result.duplicateParticipants, 0, `${leagueId}: doppelte Teilnehmer`);
  assert.equal(result.invalidSchedule, 0, `${leagueId}: Spielplan fehlerhaft`);
  assert.equal(result.doubleMatchCount, 0, `${leagueId}: doppelte Matchwertung`);
  assert.equal(result.invalidTables, 0, `${leagueId}: Tabelle instabil`);
  assert.equal(result.invalidClosures, 0, `${leagueId}: Wochenabschluss fehlerhaft`);
  assert.equal(result.doubleRewards, 0, `${leagueId}: doppelte Wochenbelohnung`);
  assert.equal(result.nanValues, 0, `${leagueId}: NaN oder Infinity in Tabelle`);
}

assert.equal(weekRangeSummary.invalidRanges, 0, "Ligawoche muss Mittwoch bis Dienstag laufen");
assert.equal(missionSummary.dailyResets, 100);
assert.equal(missionSummary.weeklyResets, 50);
assert.equal(missionSummary.events, 2000);
assert.equal(missionSummary.completionAttempts, 500);
assert.equal(missionSummary.claimAttempts, 500);
assert.equal(missionSummary.duplicateProgress, 0);
assert.equal(missionSummary.doubleClaims, 0);
assert.equal(missionSummary.invalidRewards, 0);
assert.ok(missionSummary.claimed > 0, "Simulation muss abholbare Missionen erzeugen");

console.log("Phase 8 league and mission simulation passed", JSON.stringify({ leagueSummary, missionSummary, weekRangeSummary }));

function simulateLeague(league, weeks) {
  const started = performance.now();
  const result = {
    weeks,
    invalidParticipants: 0,
    duplicateParticipants: 0,
    invalidSchedule: 0,
    doubleMatchCount: 0,
    invalidTables: 0,
    invalidClosures: 0,
    doubleRewards: 0,
    nanValues: 0,
    promotions: 0,
    relegations: 0,
    stays: 0,
    totalRank: 0,
    totalPoints: 0,
    totalRoundDiff: 0,
    fallbacks: 0,
    averageMs: 0,
  };
  for (let weekIndex = 0; weekIndex < weeks; weekIndex += 1) {
    const week = createWeek(league, weekIndex);
    if (week.participants.length !== league.participantCount) result.invalidParticipants += 1;
    if (new Set(week.participants.map((item) => item.id)).size !== week.participants.length) result.duplicateParticipants += 1;
    if (!isScheduleValid(week)) result.invalidSchedule += 1;
    const beforeBlockedCloseCoins = week.coins;
    const blockedClose = closeWeek(week, league);
    if (blockedClose.ok || week.coins !== beforeBlockedCloseCoins) result.invalidClosures += 1;

    for (let matchIndex = 0; matchIndex < 10; matchIndex += 1) {
      const schedule = week.schedule.find((match) => match.homeId === "player" && !match.completed);
      completePlayerMatch(week, schedule, weekIndex, matchIndex);
      completePlayerMatch(week, schedule, weekIndex, matchIndex);
    }
    week.playedPlayerMatches = 10;
    const closure = closeWeek(week, league);
    const closureAgain = closeWeek(week, league);
    if (!closure.ok || closureAgain.ok) result.invalidClosures += 1;
    if (week.rewardClaims !== 1) result.doubleRewards += 1;
    if (!tableStable(week)) result.invalidTables += 1;
    if (hasInvalidNumber(week)) result.nanValues += 1;

    const player = tableRows(week).find((participant) => participant.id === "player");
    result.totalRank += player.rank;
    result.totalPoints += player.points;
    result.totalRoundDiff += player.roundDiff;
    result[closure.outcome === "promotion" ? "promotions" : closure.outcome === "relegation" ? "relegations" : "stays"] += 1;
  }
  result.averageRank = Number((result.totalRank / weeks).toFixed(2));
  result.averagePoints = Number((result.totalPoints / weeks).toFixed(2));
  result.averageRoundDiff = Number((result.totalRoundDiff / weeks).toFixed(2));
  result.averageMs = Number(((performance.now() - started) / weeks).toFixed(4));
  return result;
}

function createWeek(league, weekIndex) {
  const participants = Array.from({ length: league.participantCount }, (_, index) => ({
    id: index === 0 ? "player" : `cpu-${league.id}-${index}`,
    player: index === 0,
    deckStrength: index === 0 ? 520 : 420 + ((index * 17 + weekIndex * 11) % 180),
    points: 0,
    played: 0,
    wins: 0,
    losses: 0,
    roundWins: 0,
    roundLosses: 0,
    roundDiff: 0,
    rank: index + 1,
    form: [],
  }));
  const cpus = participants.filter((participant) => !participant.player);
  const schedule = [
    ...cpus.slice(0, 10).map((cpu, index) => ({ id: `${league.id}-${weekIndex}-player-${index}`, homeId: "player", awayId: cpu.id, completed: false })),
    ...cpus.map((cpu, index) => ({ id: `${league.id}-${weekIndex}-cpu-${index}`, homeId: cpu.id, awayId: cpus[(index + 3) % cpus.length]?.id || "", completed: false })),
  ].filter((match) => match.awayId && match.homeId !== match.awayId);
  const week = { league, participants, schedule, matches: [], cpuSimulations: [], playedPlayerMatches: 0, maxPlayerMatches: 10, status: "active", reward: { claimed: false }, rewardClaims: 0, coins: 0 };
  simulateCpuMatches(week, weekIndex);
  updateTable(week);
  return week;
}

function isScheduleValid(week) {
  const ids = new Set();
  for (const match of week.schedule) {
    if (!match.id || ids.has(match.id) || match.homeId === match.awayId) return false;
    ids.add(match.id);
  }
  return true;
}

function simulateCpuMatches(week, weekIndex) {
  const simulated = new Set(week.cpuSimulations.map((record) => record.scheduleId));
  for (const match of week.schedule.filter((item) => item.homeId !== "player" && item.awayId !== "player")) {
    if (simulated.has(match.id)) continue;
    const home = week.participants.find((participant) => participant.id === match.homeId);
    const away = week.participants.find((participant) => participant.id === match.awayId);
    const edge = (home?.deckStrength || 0) - (away?.deckStrength || 0);
    const swing = ((stableHash(`${weekIndex}-${match.id}`) % 71) - 35);
    const homeRounds = clamp(3 + Math.round((edge + swing) / 55), 0, 5);
    const awayRounds = 5 - homeRounds;
    week.cpuSimulations.push({ scheduleId: match.id, matchId: `${match.id}-sim`, homeId: match.homeId, awayId: match.awayId, score: { home: homeRounds, away: awayRounds }, counted: true, simulated: true });
    match.completed = true;
  }
}

function completePlayerMatch(week, schedule, weekIndex, matchIndex) {
  if (!schedule || week.matches.some((record) => record.matchId === schedule.id)) return false;
  const homeRounds = (weekIndex + matchIndex) % 4 === 0 ? 2 : 3 + ((weekIndex + matchIndex) % 3);
  const awayRounds = 5 - clamp(homeRounds, 0, 5);
  week.matches.push({ scheduleId: schedule.id, matchId: schedule.id, homeId: "player", awayId: schedule.awayId, score: { home: clamp(homeRounds, 0, 5), away: awayRounds }, counted: true, simulated: false });
  schedule.completed = true;
  week.playedPlayerMatches = week.matches.filter((record) => record.homeId === "player").length;
  updateTable(week);
  return true;
}

function closeWeek(week, league) {
  if (week.status === "completed" || week.reward.claimed) return { ok: false, reason: "closed" };
  if (week.playedPlayerMatches < week.maxPlayerMatches) return { ok: false, reason: "open-player-matches" };
  const table = tableRows(week);
  const playerRank = table.find((participant) => participant.id === "player")?.rank || table.length;
  const outcome = playerRank <= league.promotionPlaces ? "promotion" : league.relegationPlaces && playerRank > league.participantCount - league.relegationPlaces ? "relegation" : "stay";
  week.reward = { claimed: true, outcome, amount: league.rewards[outcome] };
  week.rewardClaims += 1;
  week.coins += week.reward.amount;
  week.status = "completed";
  return { ok: true, outcome, rank: playerRank };
}

function updateTable(week) {
  week.participants.forEach((participant) => Object.assign(participant, { points: 0, played: 0, wins: 0, losses: 0, roundWins: 0, roundLosses: 0, roundDiff: 0, form: [] }));
  [...week.cpuSimulations, ...week.matches].filter((record) => record.counted !== false).forEach((record) => applyRecord(week, record));
  tableRows(week).forEach((participant, index) => {
    participant.rank = index + 1;
  });
}

function applyRecord(week, record) {
  const home = week.participants.find((participant) => participant.id === record.homeId);
  const away = week.participants.find((participant) => participant.id === record.awayId);
  if (!home || !away) return;
  const homeRounds = Number(record.score.home) || 0;
  const awayRounds = Number(record.score.away) || 0;
  home.played += 1;
  away.played += 1;
  home.roundWins += homeRounds;
  home.roundLosses += awayRounds;
  away.roundWins += awayRounds;
  away.roundLosses += homeRounds;
  home.roundDiff = home.roundWins - home.roundLosses;
  away.roundDiff = away.roundWins - away.roundLosses;
  const winner = homeRounds > awayRounds ? home : away;
  const loser = homeRounds > awayRounds ? away : home;
  winner.wins += 1;
  winner.points += 3;
  winner.form.push("W");
  loser.losses += 1;
  loser.form.push("L");
  home.form = home.form.slice(-5);
  away.form = away.form.slice(-5);
}

function tableRows(week) {
  return [...week.participants].sort(compareRows);
}

function compareRows(a, b) {
  return b.points - a.points || b.roundDiff - a.roundDiff || b.roundWins - a.roundWins || String(a.id).localeCompare(String(b.id));
}

function tableStable(week) {
  return tableRows(week).map((item) => item.id).join("|") === tableRows(week).map((item) => item.id).join("|");
}

function hasInvalidNumber(week) {
  return week.participants.some((participant) => [participant.points, participant.played, participant.roundWins, participant.roundLosses, participant.roundDiff, participant.rank].some((value) => !Number.isFinite(value)));
}

function simulateMissions(dailyResets, weeklyResets, events, completionAttempts, claimAttempts) {
  const missions = [
    { id: "daily-play", period: "daily", targetType: "matches_played", target: 2, progress: 0, status: "active", claimed: false, reward: { type: "coins", amount: 120 } },
    { id: "daily-rounds", period: "daily", targetType: "rounds_won", target: 5, progress: 0, status: "active", claimed: false, reward: { type: "coins", amount: 160 } },
    { id: "weekly-league", period: "weekly", targetType: "league_matches_played", target: 5, progress: 0, status: "active", claimed: false, reward: { type: "coins", amount: 450 } },
    { id: "weekly-board", period: "weekly", targetType: "reward_board_completed", target: 2, progress: 0, status: "active", claimed: false, reward: { type: "gems", amount: 25 } },
  ];
  const processed = new Set();
  const transactions = new Set();
  let duplicateProgress = 0;
  let doubleClaims = 0;
  let invalidRewards = 0;
  let claimed = 0;
  let completed = 0;
  let expired = 0;

  for (let day = 0; day < dailyResets; day += 1) {
    missions.filter((mission) => mission.period === "daily").forEach((mission) => {
      if (mission.status === "claimable" && !mission.claimed) expired += 1;
      mission.progress = 0;
      mission.status = "active";
      mission.claimed = false;
    });
  }
  for (let week = 0; week < weeklyResets; week += 1) {
    missions.filter((mission) => mission.period === "weekly").forEach((mission) => {
      if (mission.status === "claimable" && !mission.claimed) expired += 1;
      mission.progress = 0;
      mission.status = "active";
      mission.claimed = false;
    });
  }
  for (let index = 0; index < events; index += 1) {
    const type = ["match_completed", "round_won", "league_match_completed", "reward_board_completed", "booster_opened"][index % 5];
    const eventId = index % 11 === 0 ? `${type}-dup-${Math.floor(index / 11)}` : `${type}-${index}`;
    processEvent(missions, processed, type, eventId, type === "round_won" ? 2 : 1);
    const afterFirst = missions.map((mission) => mission.progress).join("|");
    processEvent(missions, processed, type, eventId, type === "round_won" ? 2 : 1);
    const afterDuplicate = missions.map((mission) => mission.progress).join("|");
    if (afterFirst !== afterDuplicate && processed.has(`${type}:${eventId}:duplicate-counted`)) duplicateProgress += 1;
  }
  for (let index = 0; index < completionAttempts; index += 1) {
    const mission = missions[index % missions.length];
    mission.progress = mission.target;
    if (!mission.claimed) {
      mission.status = "claimable";
      completed += 1;
    }
  }
  for (let index = 0; index < claimAttempts; index += 1) {
    const mission = missions[index % missions.length];
    const rewardOk = ["coins", "gems", "freePack", "card", "material"].includes(mission.reward.type);
    if (!rewardOk) invalidRewards += 1;
    if (mission.status === "claimable" && !mission.claimed) {
      const transactionId = `mission-${mission.id}`;
      if (transactions.has(transactionId)) doubleClaims += 1;
      transactions.add(transactionId);
      mission.claimed = true;
      mission.status = "claimed";
      claimed += 1;
    } else if (mission.claimed) {
      const transactionId = `mission-${mission.id}`;
      if (!transactions.has(transactionId)) doubleClaims += 1;
    }
  }
  return { dailyResets, weeklyResets, events, completionAttempts, claimAttempts, duplicateProgress, doubleClaims, invalidRewards, completed, claimed, expired };
}

function processEvent(missions, processed, type, eventId, amount) {
  const key = `${type}:${eventId}`;
  if (processed.has(key)) {
    processed.add(`${key}:duplicate-counted`);
    return;
  }
  processed.add(key);
  for (const mission of missions) {
    const increment = missionIncrement(mission.targetType, type, amount);
    if (!increment || mission.claimed) continue;
    mission.progress = Math.min(mission.target, mission.progress + increment);
    if (mission.progress >= mission.target) mission.status = "claimable";
  }
}

function missionIncrement(targetType, eventType, amount) {
  const map = {
    matches_played: ["match_completed"],
    rounds_won: ["round_won"],
    league_matches_played: ["league_match_completed"],
    reward_board_completed: ["reward_board_completed"],
    booster_opened: ["booster_opened"],
  };
  if (!map[targetType]?.includes(eventType)) return 0;
  return targetType === "rounds_won" ? Math.max(1, amount) : 1;
}

function testWeekRanges() {
  const dates = [
    ["2026-07-01T12:00:00", "2026-07-01", "2026-07-07"],
    ["2026-07-02T12:00:00", "2026-07-01", "2026-07-07"],
    ["2026-07-04T12:00:00", "2026-07-01", "2026-07-07"],
    ["2026-07-07T23:59:00", "2026-07-01", "2026-07-07"],
    ["2026-07-08T00:01:00", "2026-07-08", "2026-07-14"],
    ["2026-12-31T12:00:00", "2026-12-30", "2027-01-05"],
    ["2027-01-01T12:00:00", "2026-12-30", "2027-01-05"],
  ];
  let invalidRanges = 0;
  for (const [input, expectedStart, expectedEnd] of dates) {
    const range = leagueWeekRange(new Date(input));
    if (range.startDate !== expectedStart || range.endDate !== expectedEnd) invalidRanges += 1;
  }
  return { checked: dates.length, invalidRanges };
}

function leagueWeekRange(date) {
  const local = new Date(date);
  local.setHours(12, 0, 0, 0);
  const day = local.getDay();
  const daysSinceWednesday = (day + 4) % 7;
  const start = new Date(local);
  start.setDate(local.getDate() - daysSinceWednesday);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { startDate: isoDate(start), endDate: isoDate(end) };
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function stableHash(value) {
  return String(value).split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) >>> 0, 2166136261);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}
