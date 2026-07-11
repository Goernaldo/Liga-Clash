import assert from "node:assert/strict";

const leagues = [
  { id: "league-1", participantCount: 18, promotionPlaces: 0, relegationPlaces: 3 },
  { id: "league-2", participantCount: 18, promotionPlaces: 3, relegationPlaces: 3 },
  { id: "league-3", participantCount: 20, promotionPlaces: 3, relegationPlaces: 4 },
  { id: "league-bottom", participantCount: 25, promotionPlaces: 4, relegationPlaces: 0 },
];

const summary = {};
for (const league of leagues) {
  summary[league.id] = simulateLeague(league, 100);
}

const missionSummary = simulateMissions(100, 50, 1000);

for (const [leagueId, result] of Object.entries(summary)) {
  assert.equal(result.weeks, 100, `${leagueId}: 100 Wochen erwartet`);
  assert.equal(result.invalidParticipants, 0, `${leagueId}: Teilnehmerzahl fehlerhaft`);
  assert.equal(result.duplicateParticipants, 0, `${leagueId}: doppelte Teilnehmer`);
  assert.equal(result.invalidTables, 0, `${leagueId}: Tabelle instabil`);
  assert.equal(result.invalidClosures, 0, `${leagueId}: Wochenabschluss fehlerhaft`);
}

assert.equal(missionSummary.dailyResets, 100);
assert.equal(missionSummary.weeklyResets, 50);
assert.equal(missionSummary.events, 1000);
assert.equal(missionSummary.duplicateProgress, 0);
assert.equal(missionSummary.doubleClaims, 0);
assert.ok(missionSummary.claimed > 0, "Simulation muss abholbare Missionen erzeugen");

console.log("Phase 8 league and mission simulation passed", JSON.stringify({ summary, missionSummary }));

function simulateLeague(league, weeks) {
  const result = { weeks, invalidParticipants: 0, duplicateParticipants: 0, invalidTables: 0, invalidClosures: 0, promotions: 0, relegations: 0, stays: 0 };
  for (let weekIndex = 0; weekIndex < weeks; weekIndex += 1) {
    const participants = Array.from({ length: league.participantCount }, (_, index) => ({
      id: index === 0 ? "player" : `cpu-${league.id}-${weekIndex}-${index}`,
      points: 0,
      roundWins: 0,
      roundLosses: 0,
      roundDiff: 0,
      rank: index + 1,
    }));
    if (participants.length !== league.participantCount) result.invalidParticipants += 1;
    if (new Set(participants.map((item) => item.id)).size !== participants.length) result.duplicateParticipants += 1;
    for (let match = 0; match < participants.length; match += 1) {
      const home = participants[match];
      const away = participants[(match + 3) % participants.length];
      if (home.id === away.id) continue;
      const homeWins = (match + weekIndex) % 6;
      const awayWins = 5 - homeWins;
      home.roundWins += homeWins;
      home.roundLosses += awayWins;
      away.roundWins += awayWins;
      away.roundLosses += homeWins;
      if (homeWins > awayWins) home.points += 3;
      else away.points += 3;
    }
    participants.forEach((participant) => {
      participant.roundDiff = participant.roundWins - participant.roundLosses;
    });
    const sortedA = [...participants].sort(compareRows).map((item) => item.id).join("|");
    const sortedB = [...participants].sort(compareRows).map((item) => item.id).join("|");
    if (sortedA !== sortedB) result.invalidTables += 1;
    const sorted = [...participants].sort(compareRows);
    sorted.forEach((participant, index) => {
      participant.rank = index + 1;
    });
    const playerRank = sorted.find((participant) => participant.id === "player").rank;
    const outcome = playerRank <= league.promotionPlaces ? "promotion" : league.relegationPlaces && playerRank > league.participantCount - league.relegationPlaces ? "relegation" : "stay";
    if (!["promotion", "relegation", "stay"].includes(outcome)) result.invalidClosures += 1;
    result[outcome === "promotion" ? "promotions" : outcome === "relegation" ? "relegations" : "stays"] += 1;
  }
  return result;
}

function compareRows(a, b) {
  return b.points - a.points || b.roundDiff - a.roundDiff || b.roundWins - a.roundWins || a.id.localeCompare(b.id);
}

function simulateMissions(dailyResets, weeklyResets, events) {
  const missions = [
    { id: "daily-play", targetType: "match_completed", target: 2, progress: 0, claimed: false },
    { id: "weekly-league", targetType: "league_match_completed", target: 5, progress: 0, claimed: false },
  ];
  const processed = new Set();
  let duplicateProgress = 0;
  let claimed = 0;
  let doubleClaims = 0;
  for (let day = 0; day < dailyResets; day += 1) missions[0].progress = 0;
  for (let week = 0; week < weeklyResets; week += 1) missions[1].progress = 0;
  for (let index = 0; index < events; index += 1) {
    const type = index % 3 === 0 ? "league_match_completed" : "match_completed";
    const eventId = `${type}-${index}`;
    if (processed.has(eventId)) {
      duplicateProgress += 1;
      continue;
    }
    processed.add(eventId);
    missions.filter((mission) => mission.targetType === type && !mission.claimed).forEach((mission) => {
      mission.progress = Math.min(mission.target, mission.progress + 1);
      if (mission.progress >= mission.target) {
        if (mission.claimed) doubleClaims += 1;
        mission.claimed = true;
        claimed += 1;
      }
    });
  }
  return { dailyResets, weeklyResets, events, duplicateProgress, doubleClaims, claimed };
}
