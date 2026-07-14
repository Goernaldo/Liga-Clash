(function initLigaClashSeason202627(global) {
  const dataStatus = {
    season: "2026/27",
    lastSquadUpdate: "2026-07-13",
    transferWindowOpen: true,
    completeness: "partial",
    finalSeasonSquads: false,
    note: "Datenstand zum 13.07.2026. Sommertransferfenster offen, daher kein finaler Saisonkader.",
  };

  const sourcePolicy = [
    "Offizielle Vereinswebseiten",
    "Offizielle Bundesliga-, DFL- oder DFB-Seiten",
    "Offiziell bestaetigte Vereinsmeldungen",
    "Serioese Kaderdatenbank zur Gegenpruefung",
  ];

  function normalizePlayerIdentity(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]/g, "");
  }

  function teamIdForClubName(clubName, teamType = "men-first") {
    return `${normalizePlayerIdentity(clubName) || "unassigned-club"}-${normalizePlayerIdentity(teamType) || "men-first"}`;
  }

  const currentBundesligaSquads = Array.isArray(global.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS)
    ? global.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS.map(([id, displayName, position, clubName, classIndex]) => ({
        id,
        playerId: id,
        firstName: String(displayName || "").split(" ").slice(0, -1).join(" "),
        lastName: String(displayName || "").split(" ").slice(-1).join(" "),
        displayName,
        dateOfBirth: "",
        nationality: "Deutschland",
        secondaryNationality: "",
        position,
        realPosition: position,
        secondaryPositions: [],
        shirtNumber: null,
        clubId: clubName,
        clubName,
        teamId: teamIdForClubName(clubName, "men-first"),
        teamType: "men-first",
        leagueId: "1. Bundesliga",
        currentClubId: clubName,
        currentLeagueId: "1. Bundesliga",
        squadStatus: "active",
        squadSeason: dataStatus.season,
        verifiedForSeason: true,
        contractUntil: "",
        joinedAt: "",
        previousClubId: "",
        loanStatus: "none",
        loan: { status: "none" },
        image: "assets/players/player-silhouette.svg",
        classIndex,
        isActive: true,
        season: dataStatus.season,
        isHistorical: false,
        isActiveSeasonCard: true,
        lastVerifiedAt: dataStatus.lastSquadUpdate,
        sourceStatus: "needs-review",
        verificationStatus: "needs-review",
      }))
    : [];

  const squadMemberships = currentBundesligaSquads.map((player) => ({
    playerId: player.playerId,
    teamId: player.teamId,
    clubId: player.clubId,
    leagueId: player.leagueId,
    season: dataStatus.season,
    squadStatus: "active",
    verifiedForSeason: true,
    lastVerifiedAt: dataStatus.lastSquadUpdate,
    verificationStatus: player.verificationStatus,
  }));

  global.LIGA_CLASH_SEASON_2026_27 = {
    dataStatus,
    sourcePolicy,
    leagues: [
      "1. Bundesliga",
      "2. Bundesliga",
      "3. Liga",
      "Google Pixel Frauen-Bundesliga",
      "2. Frauen-Bundesliga",
    ],
    players: currentBundesligaSquads,
    squadMemberships,
    transfers: [],
    validation: {
      generatedAt: dataStatus.lastSquadUpdate,
      status: "warnings",
      warnings: [
        "Sommertransferfenster ist offen.",
        "Rueckennummern werden nur gespeichert, wenn offiziell bestaetigt.",
        "Nicht alle im Projekt vorhandenen Ligen besitzen bereits vollstaendig verifizierte 2026/27-Kaderdaten.",
      ],
      errors: [],
    },
  };
})(window);
