(function initBundesliga2627PartOne(global) {
  const SEASON = "2026/27";
  const LAST_VERIFIED_AT = "2026-07-13";
  const SILHOUETTE = "assets/players/player-silhouette.svg";
  const LEAGUE_ID = "bundesliga";
  const TARGET_CLUBS = new Set(["Werder Bremen", "FC Bayern Muenchen", "Borussia Dortmund"]);

  function player(clubId, clubName, id, firstName, lastName, position, shirtNumber, nationality, classIndex, extra = {}) {
    const displayName = [firstName, lastName].filter(Boolean).join(" ");
    return {
      id,
      firstName,
      lastName,
      displayName,
      dateOfBirth: extra.dateOfBirth || "",
      nationality,
      nation: nationality,
      position,
      secondaryPositions: extra.secondaryPositions || [],
      shirtNumber,
      clubId,
      clubName,
      leagueId: LEAGUE_ID,
      squadStatus: "active",
      loanStatus: extra.loanStatus || "none",
      season: SEASON,
      image: SILHOUETTE,
      photo: SILHOUETTE,
      isActive: true,
      isPackable: true,
      lastVerifiedAt: LAST_VERIFIED_AT,
      sourceStatus: extra.sourceStatus || "official-interim",
      classIndex,
    };
  }

  const players = [
    player("werder-bremen", "Werder Bremen", "part1-werder-backhaus-2627", "Mio", "Backhaus", "TW", 30, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-hein-2627", "Karl", "Hein", "TW", 13, "Estland", 5, { loanStatus: "loan-in" }),
    player("werder-bremen", "Werder Bremen", "part1-werder-kolke-2627", "Markus", "Kolke", "TW", 25, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-smarkalev-2627", "Stefan", "Smarkalev", "TW", 37, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-deman-2627", "Olivier", "Deman", "LV", 2, "Belgien", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-sugawara-2627", "Yukinari", "Sugawara", "RV", 3, "Japan", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-stark-2627", "Niklas", "Stark", "IV", 4, "Deutschland", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-pieper-2627", "Amos", "Pieper", "IV", 5, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-weiser-2627", "Mitchell", "Weiser", "RV", 8, "Deutschland", 6),
    player("werder-bremen", "Werder Bremen", "part1-werder-malatini-2627", "Julian", "Malatini", "IV", 22, "Argentinien", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-schmidt-2627", "Isaac", "Schmidt", "LV", 23, "Schweiz", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-agu-2627", "Felix", "Agu", "LV", 27, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-coulibaly-2627", "Karim", "Coulibaly", "IV", 31, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-friedl-2627", "Marco", "Friedl", "IV", 32, "Oesterreich", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-schmetgens-2627", "Mick", "Schmetgens", "IV", 33, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-woeber-2627", "Maximilian", "Woeber", "IV", 39, "Oesterreich", 6, { loanStatus: "loan-in" }),
    player("werder-bremen", "Werder Bremen", "part1-werder-stage-2627", "Jens", "Stage", "ZM", 6, "Daenemark", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-mbangula-2627", "Samuel", "Mbangula", "LM", 7, "Belgien", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-bittencourt-2627", "Leonardo", "Bittencourt", "ZM", 10, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-lynen-2627", "Senne", "Lynen", "ZDM", 14, "Belgien", 5),
    player("werder-bremen", "Werder Bremen", "part1-werder-puertas-2627", "Cameron", "Puertas", "ZOM", 18, "Schweiz", 6),
    player("werder-bremen", "Werder Bremen", "part1-werder-schmid-2627", "Romano", "Schmid", "ZOM", 20, "Oesterreich", 6),
    player("werder-bremen", "Werder Bremen", "part1-werder-covic-2627", "Patrice", "Covic", "ZM", 24, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-adeh-2627", "Wesley", "Adeh", "ZM", 34, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-topp-2627", "Keke", "Topp", "ST", 9, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-njinmah-2627", "Justin", "Njinmah", "RF", 11, "Deutschland", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-gruell-2627", "Marco", "Gruell", "LF", 17, "Oesterreich", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-milosevic-2627", "Jovan", "Milosevic", "ST", 19, "Serbien", 4),
    player("werder-bremen", "Werder Bremen", "part1-werder-musah-2627", "Salim", "Musah", "ST", 29, "Deutschland", 3),
    player("werder-bremen", "Werder Bremen", "part1-werder-boniface-2627", "Victor", "Boniface", "ST", 44, "Nigeria", 7, { loanStatus: "loan-in" }),

    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-neuer-2627", "Manuel", "Neuer", "TW", 1, "Deutschland", 8),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-ulreich-2627", "Sven", "Ulreich", "TW", 26, "Deutschland", 5),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-urbig-2627", "Jonas", "Urbig", "TW", 40, "Deutschland", 5),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-klanac-2627", "Leon", "Klanac", "TW", 48, "Deutschland", 3),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-upamecano-2627", "Dayot", "Upamecano", "IV", 2, "Frankreich", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-kim-2627", "Minjae", "Kim", "IV", 3, "Suedkorea", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-tah-2627", "Jonathan", "Tah", "IV", 4, "Deutschland", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-davies-2627", "Alphonso", "Davies", "LV", 19, "Kanada", 8),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-ito-2627", "Hiroki", "Ito", "IV", 21, "Japan", 6),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-guerreiro-2627", "Raphael", "Guerreiro", "LV", 22, "Portugal", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-stanisic-2627", "Josip", "Stanisic", "RV", 44, "Kroatien", 6),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-kimmich-2627", "Joshua", "Kimmich", "ZM", 6, "Deutschland", 8),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-goretzka-2627", "Leon", "Goretzka", "ZM", 8, "Deutschland", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-musiala-2627", "Jamal", "Musiala", "ZOM", 10, "Deutschland", 9),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-bischof-2627", "Tom", "Bischof", "ZM", 20, "Deutschland", 5),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-laimer-2627", "Konrad", "Laimer", "ZM", 27, "Oesterreich", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-karl-2627", "Lennart", "Karl", "ZOM", 42, "Deutschland", 3),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-pavlovic-2627", "Aleksandar", "Pavlovic", "ZDM", 45, "Deutschland", 6),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-gnabry-2627", "Serge", "Gnabry", "LF", 7, "Deutschland", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-kane-2627", "Harry", "Kane", "ST", 9, "England", 9),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-jackson-2627", "Nicolas", "Jackson", "ST", 11, "Senegal", 7),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-diaz-2627", "Luis", "Diaz", "LF", 14, "Kolumbien", 8),
    player("fc-bayern-muenchen", "FC Bayern Muenchen", "part1-bayern-olise-2627", "Michael", "Olise", "RF", 17, "Frankreich", 8),

    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-kobel-2627", "Gregor", "Kobel", "TW", 1, "Schweiz", 8, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-meyer-2627", "Alexander", "Meyer", "TW", 33, "Deutschland", 5, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-drewes-2627", "Patrick", "Drewes", "TW", 30, "Deutschland", 4, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-anton-2627", "Waldemar", "Anton", "IV", 3, "Deutschland", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-schlotterbeck-2627", "Nico", "Schlotterbeck", "IV", 4, "Deutschland", 7, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-bensebaini-2627", "Ramy", "Bensebaini", "LV", 5, "Algerien", 5, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-svensson-2627", "Daniel", "Svensson", "LV", 24, "Schweden", 5, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-ryerson-2627", "Julian", "Ryerson", "RV", 26, "Norwegen", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-mane-2627", "Filippo", "Mane", "IV", 29, "Italien", 3, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-kabar-2627", "Almugera", "Kabar", "LV", 42, "Deutschland", 3, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-can-2627", "Emre", "Can", "ZDM", 23, "Deutschland", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-nmecha-2627", "Felix", "Nmecha", "ZM", 8, "Deutschland", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-sabitzer-2627", "Marcel", "Sabitzer", "ZM", 20, "Oesterreich", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-bellingham-2627", "Jobe", "Bellingham", "ZM", 77, "England", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-waetjen-2627", "Kjell", "Waetjen", "ZM", 38, "Deutschland", 3, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-lerma-2627", "Justin", "Lerma", "ZOM", 18, "Ecuador", 3, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-guirassy-2627", "Serhou", "Guirassy", "ST", 9, "Guinea", 8, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-beier-2627", "Maximilian", "Beier", "ST", 14, "Deutschland", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-duranville-2627", "Julien", "Duranville", "RF", 16, "Belgien", 4, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-silva-2627", "Fabio", "Silva", "ST", 21, "Portugal", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-adeyemi-2627", "Karim", "Adeyemi", "LF", 27, "Deutschland", 6, { sourceStatus: "interim-crosscheck" }),
    player("borussia-dortmund", "Borussia Dortmund", "part1-dortmund-campbell-2627", "Cole", "Campbell", "RF", 37, "USA", 3, { sourceStatus: "interim-crosscheck" }),
  ];

  const previousRows = Array.isArray(global.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS)
    ? global.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS.filter((row) => !TARGET_CLUBS.has(row[3]))
    : [];
  const partOneRows = players.map((item) => [item.id, item.displayName, item.position, item.clubName, item.classIndex]);
  const details = Object.fromEntries(players.map((item) => [item.id, item]));

  global.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS = [...previousRows, ...partOneRows];
  global.LIGA_CLASH_2627_PART1_PLAYERS = players;
  global.LIGA_CLASH_2627_PLAYER_DETAILS = {
    ...(global.LIGA_CLASH_2627_PLAYER_DETAILS || {}),
    ...details,
  };
  global.LIGA_CLASH_2627_PART1_META = {
    season: SEASON,
    lastVerifiedAt: LAST_VERIFIED_AT,
    finalSeasonSquads: false,
    clubs: ["werder-bremen", "fc-bayern-muenchen", "borussia-dortmund"],
    sourceStatus: "quarantined-needs-official-verification",
  };
})(window);
