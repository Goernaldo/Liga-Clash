const teamClasses = [
  "Gewöhnlich",
  "Ungewöhnlich",
  "Selten",
  "Besonders Selten",
  "Ultra Selten",
  "Bronze",
  "Silber",
  "Gold",
  "Episch",
  "Legendär",
  "Elite",
];

const CARD_CLASS_RANGES = [
  { min: 50, max: 69 },
  { min: 70, max: 89 },
  { min: 90, max: 109 },
  { min: 110, max: 129 },
  { min: 130, max: 149 },
  { min: 150, max: 169 },
  { min: 170, max: 189 },
  { min: 190, max: 209 },
  { min: 210, max: 229 },
  { min: 230, max: 249 },
  { min: 250, max: 299 },
];

const CARD_MAX_LEVEL = 100;
const PRO_MAX_LEVEL = 100;
const PRO_MAX_STARS = 5;

const CARD_SERIES = [
  { value: "standard", label: "Standard", bonus: 0 },
  { value: "rookie", label: "Rookie", bonus: 1 },
  { value: "totw", label: "Team of the Week", bonus: 3 },
  { value: "tots", label: "Team of the Season", bonus: 5 },
  { value: "winter", label: "Winter", bonus: 2 },
  { value: "summer", label: "Sommer", bonus: 2 },
  { value: "legend", label: "Legend", bonus: 6 },
  { value: "icon", label: "Icon", bonus: 8 },
  { value: "mythic", label: "Mythic", bonus: 10 },
  { value: "anniversary", label: "Anniversary", bonus: 4 },
  { value: "hall-of-fame", label: "Hall of Fame", bonus: 9 },
];

const leagues = ["Bundesliga", "2. Bundesliga", "3. Liga", "Regionalliga", "Landesliga"];

const DB_LEAGUES = ["Alle Ligen", "1. Bundesliga", "2. Bundesliga", "3. Liga", "Google Pixel Frauen-Bundesliga", "2. Frauen-Bundesliga"];

const POSITION_PACK_GROUPS = [
  { value: "all", label: "Alle Positionen", positions: [] },
  { value: "attack", label: "Angriff: ST, MS, LA, RA", positions: ["ST", "MS", "LA", "RA"] },
  { value: "midfield", label: "Mittelfeld: ZM, DM, OM, CAM, LM, RM", positions: ["ZM", "DM", "OM", "CAM", "LM", "RM"] },
  { value: "defense", label: "Abwehr: IV, CB, LV, RV, LWB, RWB", positions: ["IV", "CB", "LV", "RV", "LWB", "RWB"] },
  { value: "keeper", label: "Torwart: TW, GK", positions: ["TW", "GK"] },
];

const FIELD_STATS = [
  { key: "pace", label: "TEM", name: "Tempo" },
  { key: "finish", label: "ABS", name: "Abschluss" },
  { key: "passing", label: "PAS", name: "Passspiel" },
  { key: "dribble", label: "DRI", name: "Dribbling" },
  { key: "defense", label: "DEF", name: "Defensive" },
  { key: "physical", label: "PHY", name: "Physis" },
];

const KEEPER_STATS = [
  { key: "reflexes", label: "REF", name: "Reflexe" },
  { key: "handling", label: "FAN", name: "Fangsicherheit" },
  { key: "area", label: "STR", name: "Strafraumbeherrschung" },
  { key: "kicking", label: "ABG", name: "Abschlaege" },
  { key: "reaction", label: "REA", name: "Reaktion" },
  { key: "organization", label: "ORG", name: "Organisation" },
];

const SPECIAL_STATS = [
  { key: "iq", label: "IQ", name: "Spielintelligenz" },
  { key: "teamgeist", label: "TGE", name: "Teamgeist" },
];

const CLUBS = [
  { name: "FC Augsburg", league: "1. Bundesliga", crest: crestUrl(167) },
  { name: "1. FC Union Berlin", league: "1. Bundesliga", crest: crestUrl(89) },
  { name: "Werder Bremen", league: "1. Bundesliga", crest: crestUrl(86) },
  { name: "Borussia Dortmund", league: "1. Bundesliga", crest: crestUrl(16) },
  { name: "SV Elversberg", league: "1. Bundesliga", crest: crestUrl(196) },
  { name: "Eintracht Frankfurt", league: "1. Bundesliga", crest: crestUrl(24) },
  { name: "SC Freiburg", league: "1. Bundesliga", crest: crestUrl(60) },
  { name: "Hamburger SV", league: "1. Bundesliga", crest: crestUrl(41) },
  { name: "TSG Hoffenheim", league: "1. Bundesliga", crest: crestUrl(533) },
  { name: "1. FC Koeln", league: "1. Bundesliga", crest: crestUrl(3) },
  { name: "RB Leipzig", league: "1. Bundesliga", crest: crestUrl(23826) },
  { name: "Bayer 04 Leverkusen", league: "1. Bundesliga", crest: crestUrl(15) },
  { name: "1. FSV Mainz 05", league: "1. Bundesliga", crest: crestUrl(39) },
  { name: "Borussia Moenchengladbach", league: "1. Bundesliga", crest: crestUrl(18) },
  { name: "FC Bayern Muenchen", league: "1. Bundesliga", crest: crestUrl(27) },
  { name: "SC Paderborn 07", league: "1. Bundesliga", crest: crestUrl(127) },
  { name: "FC Schalke 04", league: "1. Bundesliga", crest: crestUrl(33) },
  { name: "VfB Stuttgart", league: "1. Bundesliga", crest: crestUrl(79) },

  { name: "Hertha BSC", league: "2. Bundesliga", crest: crestUrl(44) },
  { name: "Arminia Bielefeld", league: "2. Bundesliga", crest: crestUrl(10) },
  { name: "VfL Bochum", league: "2. Bundesliga", crest: crestUrl(80) },
  { name: "Eintracht Braunschweig", league: "2. Bundesliga", crest: crestUrl(23) },
  { name: "Energie Cottbus", league: "2. Bundesliga", crest: crestUrl(25) },
  { name: "SV Darmstadt 98", league: "2. Bundesliga", crest: crestUrl(105) },
  { name: "Dynamo Dresden", league: "2. Bundesliga", crest: crestUrl(129) },
  { name: "Greuther Fuerth", league: "2. Bundesliga", crest: crestUrl(65) },
  { name: "Hannover 96", league: "2. Bundesliga", crest: crestUrl(42) },
  { name: "1. FC Heidenheim", league: "2. Bundesliga", crest: crestUrl(2036) },
  { name: "1. FC Kaiserslautern", league: "2. Bundesliga", crest: crestUrl(2) },
  { name: "Karlsruher SC", league: "2. Bundesliga", crest: crestUrl(48) },
  { name: "Holstein Kiel", league: "2. Bundesliga", crest: crestUrl(269) },
  { name: "1. FC Magdeburg", league: "2. Bundesliga", crest: crestUrl(187) },
  { name: "1. FC Nuernberg", league: "2. Bundesliga", crest: crestUrl(4) },
  { name: "VfL Osnabrueck", league: "2. Bundesliga", crest: crestUrl(81) },
  { name: "FC St. Pauli", league: "2. Bundesliga", crest: crestUrl(35) },
  { name: "VfL Wolfsburg", league: "2. Bundesliga", crest: crestUrl(82) },

  { name: "Alemannia Aachen", league: "3. Liga", crest: crestUrl(8) },
  { name: "MSV Duisburg", league: "3. Liga", crest: crestUrl(52) },
  { name: "Fortuna Duesseldorf", league: "3. Liga", crest: crestUrl(38) },
  { name: "Rot-Weiss Essen", league: "3. Liga", crest: crestUrl(56) },
  { name: "Fortuna Koeln", league: "3. Liga", crest: crestUrl(92) },
  { name: "Sonnenhof Grossaspach", league: "3. Liga", crest: crestUrl(444) },
  { name: "TSV Havelse", league: "3. Liga", crest: crestUrl(138) },
  { name: "TSG Hoffenheim II", league: "3. Liga", crest: crestUrl(533) },
  { name: "FC Ingolstadt", league: "3. Liga", crest: crestUrl(4795) },
  { name: "Waldhof Mannheim", league: "3. Liga", crest: crestUrl(85) },
  { name: "SV Meppen", league: "3. Liga", crest: crestUrl(247) },
  { name: "Preussen Muenster", league: "3. Liga", crest: crestUrl(82) },
  { name: "Jahn Regensburg", league: "3. Liga", crest: crestUrl(109) },
  { name: "Hansa Rostock", league: "3. Liga", crest: crestUrl(30) },
  { name: "1. FC Saarbruecken", league: "3. Liga", crest: crestUrl(74) },
  { name: "VfB Stuttgart II", league: "3. Liga", crest: crestUrl(79) },
  { name: "SC Verl", league: "3. Liga", crest: crestUrl(93) },
  { name: "Viktoria Koeln", league: "3. Liga", crest: crestUrl(4120) },
  { name: "Wehen Wiesbaden", league: "3. Liga", crest: crestUrl(78) },
  { name: "Wuerzburger Kickers", league: "3. Liga", crest: crestUrl(212) },

  { name: "1. FC Union Berlin Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(89) },
  { name: "Werder Bremen Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(86) },
  { name: "Eintracht Frankfurt Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(24) },
  { name: "SC Freiburg Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(60) },
  { name: "Hamburger SV Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(41) },
  { name: "TSG Hoffenheim Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(533) },
  { name: "1. FC Koeln Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(3) },
  { name: "RB Leipzig Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(23826) },
  { name: "Bayer 04 Leverkusen Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(15) },
  { name: "1. FSV Mainz 05 Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(39) },
  { name: "FC Bayern Muenchen Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(27) },
  { name: "1. FC Nuernberg Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(4) },
  { name: "VfB Stuttgart Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(79) },
  { name: "VfL Wolfsburg Frauen", league: "Google Pixel Frauen-Bundesliga", crest: crestUrl(82) },

  { name: "SG Andernach Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(2253) },
  { name: "Viktoria Berlin Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(408) },
  { name: "VfL Bochum Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(80) },
  { name: "SGS Essen Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(170) },
  { name: "Eintracht Frankfurt II Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(24) },
  { name: "TSG Hoffenheim II Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(533) },
  { name: "Hertha BSC Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(44) },
  { name: "FC Ingolstadt Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(4795) },
  { name: "Carl Zeiss Jena Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(312) },
  { name: "1. FC Koeln II Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(3) },
  { name: "SV Meppen Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(247) },
  { name: "Borussia Moenchengladbach Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(18) },
  { name: "Turbine Potsdam Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(1090) },
  { name: "SC Sand Frauen", league: "2. Frauen-Bundesliga", crest: crestUrl(2352) },
];

const LEGACY_CLUB_MAP = {
  "FC Rhein": "1. FC Koeln",
  "SV Hafen": "Hamburger SV",
  "Union Nord": "1. FC Union Berlin",
  "VfB Allee": "VfB Stuttgart",
  "SC Berg": "SC Freiburg",
  "Liga Clash": "Werder Bremen",
  "FC Bayern Frauen": "FC Bayern Muenchen Frauen",
};

const SEASON_PERFORMANCE_DATA = {
  ducksch: { goals: 13, assists: 8, minutes: 2650, duelRate: 46, passRate: 73, dribbleRate: 48, distance: 10.2, yellowCards: 5, redCards: 0 },
  stage: { goals: 7, assists: 4, minutes: 2820, duelRate: 57, passRate: 80, dribbleRate: 54, distance: 11.4, yellowCards: 7, redCards: 0 },
  friedl: { goals: 1, assists: 2, minutes: 2480, duelRate: 63, passRate: 84, dribbleRate: 42, distance: 10.1, yellowCards: 6, redCards: 1 },
  kane: { goals: 31, assists: 9, minutes: 2860, duelRate: 48, passRate: 79, dribbleRate: 54, distance: 10.0, yellowCards: 4, redCards: 0 },
  musiala: { goals: 13, assists: 12, minutes: 2460, duelRate: 49, passRate: 86, dribbleRate: 72, distance: 10.8, yellowCards: 2, redCards: 0 },
  kimmich: { goals: 3, assists: 10, minutes: 2750, duelRate: 58, passRate: 90, dribbleRate: 59, distance: 11.8, yellowCards: 5, redCards: 0 },
  wirtz: { goals: 16, assists: 15, minutes: 2840, duelRate: 51, passRate: 88, dribbleRate: 75, distance: 11.2, yellowCards: 3, redCards: 0 },
  tah: { goals: 4, assists: 1, minutes: 3020, duelRate: 67, passRate: 91, dribbleRate: 39, distance: 9.8, yellowCards: 4, redCards: 0 },
  openda: { goals: 22, assists: 7, minutes: 2760, duelRate: 45, passRate: 75, dribbleRate: 63, distance: 10.6, yellowCards: 2, redCards: 0 },
  oberdorf: { goals: 5, assists: 6, minutes: 2320, duelRate: 69, passRate: 86, dribbleRate: 58, distance: 11.6, yellowCards: 5, redCards: 0 },
  popp: { goals: 18, assists: 6, minutes: 2180, duelRate: 61, passRate: 78, dribbleRate: 50, distance: 10.3, yellowCards: 3, redCards: 0 },
  gwinn: { goals: 5, assists: 9, minutes: 2460, duelRate: 56, passRate: 84, dribbleRate: 64, distance: 11.5, yellowCards: 4, redCards: 0 },
  "bayern-1": { saves: 88, cleanSheets: 13, goalsAgainstPerGame: 0.88, penaltiesSaved: 2, catchRate: 83, passRate: 86, minutes: 2700 },
  "hoffenheim-1": { saves: 112, cleanSheets: 9, goalsAgainstPerGame: 1.24, penaltiesSaved: 1, catchRate: 78, passRate: 77, minutes: 2880 },
  "koeln-1": { saves: 96, cleanSheets: 8, goalsAgainstPerGame: 1.38, penaltiesSaved: 1, catchRate: 76, passRate: 72, minutes: 2700 },
  "darmstadt-1": { saves: 124, cleanSheets: 6, goalsAgainstPerGame: 1.72, penaltiesSaved: 2, catchRate: 74, passRate: 68, minutes: 2880 },
};

const GAME_CARDS = [
  cardDef("ducksch", "Marvin Ducksch", "ST", "Werder Bremen", 5, 82, 68, 41),
  cardDef("stage", "Jens Stage", "ZM", "Werder Bremen", 4, 73, 78, 71),
  cardDef("friedl", "Marco Friedl", "IV", "Werder Bremen", 4, 48, 66, 80),
  cardDef("kane", "Harry Kane", "ST", "FC Bayern Muenchen", 10, 94, 78, 48),
  cardDef("musiala", "Jamal Musiala", "CAM", "FC Bayern Muenchen", 10, 90, 91, 55),
  cardDef("kimmich", "Joshua Kimmich", "DM", "FC Bayern Muenchen", 7, 76, 90, 82),
  cardDef("brandt", "Julian Brandt", "CAM", "Borussia Dortmund", 6, 84, 87, 55),
  cardDef("schlotterbeck", "Nico Schlotterbeck", "IV", "Borussia Dortmund", 6, 55, 72, 86),
  cardDef("ade-yemi", "Karim Adeyemi", "LA", "Borussia Dortmund", 6, 88, 72, 45),
  cardDef("wirtz", "Florian Wirtz", "CAM", "Bayer 04 Leverkusen", 10, 91, 94, 61),
  cardDef("grimaldo", "Alex Grimaldo", "LV", "Bayer 04 Leverkusen", 8, 83, 88, 79),
  cardDef("tah", "Jonathan Tah", "IV", "Bayer 04 Leverkusen", 7, 51, 68, 89),
  cardDef("openda", "Lois Openda", "ST", "RB Leipzig", 7, 90, 72, 42),
  cardDef("xavi", "Xavi Simons", "CAM", "RB Leipzig", 7, 88, 88, 52),
  cardDef("raum", "David Raum", "LV", "RB Leipzig", 6, 75, 80, 76),
  cardDef("undav", "Deniz Undav", "ST", "VfB Stuttgart", 6, 86, 73, 45),
  cardDef("mittelstadt", "Maximilian Mittelstaedt", "LV", "VfB Stuttgart", 5, 73, 76, 78),
  cardDef("fuehrich", "Chris Fuehrich", "LA", "VfB Stuttgart", 6, 84, 80, 49),
  cardDef("marmoush", "Omar Marmoush", "ST", "Eintracht Frankfurt", 7, 89, 77, 44),
  cardDef("goetze", "Mario Goetze", "ZM", "Eintracht Frankfurt", 5, 72, 84, 58),
  cardDef("koch", "Robin Koch", "IV", "Eintracht Frankfurt", 5, 46, 65, 82),
  cardDef("gosens", "Robin Gosens", "LWB", "1. FC Union Berlin", 5, 75, 77, 78),
  cardDef("volland", "Kevin Volland", "ST", "1. FC Union Berlin", 4, 78, 72, 48),
  cardDef("doekhi", "Danilho Doekhi", "IV", "1. FC Union Berlin", 4, 43, 60, 81),
  cardDef("gregoritsch", "Michael Gregoritsch", "ST", "SC Freiburg", 4, 79, 66, 49),
  cardDef("guenter", "Christian Guenter", "LV", "SC Freiburg", 4, 71, 75, 77),
  cardDef("hoefler", "Nicolas Hoefler", "DM", "SC Freiburg", 4, 57, 73, 78),
  cardDef("selke", "Davie Selke", "ST", "1. FC Koeln", 3, 76, 61, 49),
  cardDef("kainz", "Florian Kainz", "LM", "1. FC Koeln", 4, 75, 78, 57),
  cardDef("huebers", "Timo Huebers", "IV", "1. FC Koeln", 3, 42, 60, 78),
  cardDef("glatzel", "Robert Glatzel", "ST", "Hamburger SV", 4, 80, 63, 47),
  cardDef("reis", "Ludovit Reis", "ZM", "Hamburger SV", 4, 70, 76, 68),
  cardDef("muheim", "Miro Muheim", "LV", "Hamburger SV", 3, 69, 72, 70),
  cardDef("terodde", "Simon Terodde", "ST", "FC Schalke 04", 3, 78, 59, 46),
  cardDef("karaman", "Kenan Karaman", "RA", "FC Schalke 04", 3, 75, 68, 52),
  cardDef("kaminski", "Marcin Kaminski", "IV", "FC Schalke 04", 3, 39, 57, 75),
  cardDef("schleimer", "Lukas Schleimer", "ST", "1. FC Nuernberg", 3, 73, 67, 45),
  cardDef("uzun", "Can Uzun", "CAM", "1. FC Nuernberg", 5, 81, 79, 48),
  cardDef("marquez", "Ivan Marquez", "IV", "1. FC Nuernberg", 3, 40, 58, 76),
  cardDef("reese", "Fabian Reese", "LA", "Hertha BSC", 5, 82, 77, 54),
  cardDef("tabakovic", "Haris Tabakovic", "ST", "Hertha BSC", 4, 80, 62, 45),
  cardDef("dardai", "Marton Dardai", "IV", "Hertha BSC", 4, 45, 63, 78),
  cardDef("hauptmann", "Niklas Hauptmann", "ZM", "Dynamo Dresden", 3, 67, 75, 64),
  cardDef("kutschke", "Stefan Kutschke", "ST", "Dynamo Dresden", 2, 73, 58, 48),
  cardDef("kammerknecht", "Claudio Kammerknecht", "IV", "Dynamo Dresden", 2, 42, 58, 73),
  cardDef("klos", "Fabian Klos", "ST", "Arminia Bielefeld", 3, 76, 62, 51),
  cardDef("opperm", "Marius Woerl", "ZM", "Arminia Bielefeld", 2, 65, 72, 60),
  cardDef("gohlke", "Maximilian Großer", "IV", "Arminia Bielefeld", 2, 39, 56, 72),
  cardDef("proeger", "Kai Proeger", "RA", "Hansa Rostock", 3, 74, 69, 55),
  cardDef("rossbach", "Damian Rossbach", "IV", "Hansa Rostock", 2, 43, 58, 73),
  cardDef("rhein", "Simon Rhein", "DM", "Hansa Rostock", 2, 58, 70, 66),
  cardDef("saar-1", "Kai Brunker", "ST", "1. FC Saarbruecken", 3, 75, 62, 47),
  cardDef("saar-2", "Patrick Sontheimer", "ZM", "1. FC Saarbruecken", 3, 66, 72, 64),
  cardDef("saar-3", "Manuel Zeitz", "IV", "1. FC Saarbruecken", 2, 41, 58, 74),
  cardDef("schueller", "Lea Schueller", "ST", "FC Bayern Frauen", 8, 92, 76, 48),
  cardDef("gwinn", "Giulia Gwinn", "RV", "FC Bayern Frauen", 8, 82, 86, 82),
  cardDef("buehl", "Klara Buehl", "LA", "FC Bayern Frauen", 8, 89, 84, 55),
  cardDef("popp", "Alexandra Popp", "ST", "VfL Wolfsburg Frauen", 8, 91, 79, 67),
  cardDef("huth", "Svenja Huth", "RA", "VfL Wolfsburg Frauen", 7, 86, 85, 60),
  cardDef("oberdorf", "Lena Oberdorf", "DM", "VfL Wolfsburg Frauen", 10, 74, 88, 91),
  cardDef("freigang", "Laura Freigang", "ST", "Eintracht Frankfurt Frauen", 7, 86, 78, 52),
  cardDef("kleinherne", "Sophia Kleinherne", "IV", "Eintracht Frankfurt Frauen", 6, 48, 70, 84),
  cardDef("reuteler", "Geraldine Reuteler", "ZM", "Eintracht Frankfurt Frauen", 6, 78, 82, 68),
  cardDef("sternad", "Larissa Muehlhaus", "ST", "Werder Bremen Frauen", 5, 80, 68, 46),
  cardDef("wirtz-f", "Sophie Weidauer", "LA", "Werder Bremen Frauen", 5, 78, 73, 52),
  cardDef("ulbrich", "Michelle Ulbrich", "IV", "Werder Bremen Frauen", 5, 45, 66, 79),
  cardDef("union-f-1", "Sarah Abu Sabbah", "ST", "1. FC Union Berlin Frauen", 4, 78, 67, 44),
  cardDef("union-f-2", "Lisa Heiseler", "ZM", "1. FC Union Berlin Frauen", 4, 70, 76, 62),
  cardDef("union-f-3", "Katja Orschmann", "RV", "1. FC Union Berlin Frauen", 4, 67, 72, 74),
  cardDef("hsv-f-1", "Larissa Muehlhaus HSV", "ST", "Hamburger SV Frauen", 4, 79, 66, 45),
  cardDef("hsv-f-2", "Dana Marquardt", "ZM", "Hamburger SV Frauen", 3, 68, 73, 62),
  cardDef("hsv-f-3", "Mia Buchele", "IV", "Hamburger SV Frauen", 3, 42, 61, 73),
  cardDef("bochum-f-1", "Lisa Josten", "ST", "VfL Bochum Frauen", 3, 74, 63, 43),
  cardDef("bochum-f-2", "Paulina Platner", "ZM", "VfL Bochum Frauen", 3, 66, 71, 61),
  cardDef("bochum-f-3", "Nina Lange", "IV", "VfL Bochum Frauen", 2, 40, 58, 70),
  cardDef("sand-f-1", "Mara Alber", "LA", "SC Sand Frauen", 3, 73, 68, 48),
  cardDef("sand-f-2", "Emily Evels", "ZM", "SC Sand Frauen", 3, 65, 72, 60),
  cardDef("sand-f-3", "Laura Vogt", "IV", "SC Sand Frauen", 2, 39, 57, 71),
];

GAME_CARDS.push(...defaultSeriesCards());

const SEASON_26_27_CARDS = [
  ["augsburg-1", "Jeffrey Gouweleeuw", "IV", "FC Augsburg", 5, 48, 65, 83],
  ["augsburg-2", "Elvis Rexhbecaj", "ZM", "FC Augsburg", 4, 67, 76, 71],
  ["union-1", "Christopher Trimmel", "RV", "1. FC Union Berlin", 5, 70, 79, 78],
  ["union-2", "Danilho Doekhi", "IV", "1. FC Union Berlin", 4, 43, 60, 81],
  ["werder-1", "Marco Friedl", "IV", "Werder Bremen", 5, 48, 66, 82],
  ["werder-2", "Jens Stage", "ZM", "Werder Bremen", 5, 73, 79, 72],
  ["bvb-1", "Emre Can", "DM", "Borussia Dortmund", 6, 70, 82, 82],
  ["bvb-2", "Julian Brandt", "CAM", "Borussia Dortmund", 6, 84, 87, 55],
  ["frankfurt-1", "Robin Koch", "IV", "Eintracht Frankfurt", 6, 46, 67, 84],
  ["frankfurt-2", "Mario Goetze", "ZM", "Eintracht Frankfurt", 5, 72, 84, 58],
  ["freiburg-1", "Christian Guenter", "LV", "SC Freiburg", 5, 72, 77, 78],
  ["freiburg-2", "Michael Gregoritsch", "ST", "SC Freiburg", 4, 79, 66, 49],
  ["hsv-1", "Yussuf Poulsen", "ST", "Hamburger SV", 5, 82, 70, 58],
  ["hsv-2", "Robert Glatzel", "ST", "Hamburger SV", 4, 80, 63, 47],
  ["hoffenheim-1", "Oliver Baumann", "TW", "TSG Hoffenheim", 6, 40, 72, 88],
  ["hoffenheim-2", "Maximilian Beier", "ST", "TSG Hoffenheim", 6, 86, 72, 44],
  ["koeln-1", "Marvin Schwaebe", "TW", "1. FC Koeln", 5, 35, 68, 84],
  ["koeln-2", "Florian Kainz", "LM", "1. FC Koeln", 4, 75, 78, 57],
  ["leipzig-1", "David Raum", "LV", "RB Leipzig", 6, 75, 80, 78],
  ["leipzig-2", "Lois Openda", "ST", "RB Leipzig", 7, 90, 72, 42],
  ["leverkusen-1", "Robert Andrich", "DM", "Bayer 04 Leverkusen", 6, 70, 82, 82],
  ["leverkusen-2", "Florian Wirtz", "CAM", "Bayer 04 Leverkusen", 8, 91, 94, 61],
  ["mainz-1", "Silvan Widmer", "RV", "1. FSV Mainz 05", 5, 70, 75, 77],
  ["mainz-2", "Nadiem Amiri", "ZM", "1. FSV Mainz 05", 5, 78, 84, 66],
  ["gladbach-1", "Tim Kleindienst", "ST", "Borussia Moenchengladbach", 6, 84, 72, 58],
  ["gladbach-2", "Julian Weigl", "DM", "Borussia Moenchengladbach", 5, 63, 82, 76],
  ["bayern-1", "Manuel Neuer", "TW", "FC Bayern Muenchen", 8, 42, 82, 94],
  ["bayern-2", "Jamal Musiala", "CAM", "FC Bayern Muenchen", 8, 90, 91, 55],
  ["schalke-1", "Kenan Karaman", "RA", "FC Schalke 04", 5, 78, 71, 54],
  ["schalke-2", "Moussa Sylla", "ST", "FC Schalke 04", 4, 78, 63, 45],
  ["stuttgart-1", "Atakan Karazor", "DM", "VfB Stuttgart", 6, 65, 80, 82],
  ["stuttgart-2", "Deniz Undav", "ST", "VfB Stuttgart", 6, 86, 73, 45],
  ["hertha-1", "Fabian Reese", "LA", "Hertha BSC", 5, 82, 77, 54],
  ["bochum-1", "Matus Bero", "ZM", "VfL Bochum", 4, 72, 76, 70],
  ["darmstadt-1", "Marcel Schuhen", "TW", "SV Darmstadt 98", 4, 34, 63, 80],
  ["kaiserslautern-1", "Marlon Ritter", "ZM", "1. FC Kaiserslautern", 4, 70, 78, 65],
  ["karlsruhe-1", "Marvin Wanitzek", "ZM", "Karlsruher SC", 5, 77, 82, 62],
  ["kiel-1", "Steven Skrzybski", "ST", "Holstein Kiel", 4, 78, 70, 46],
  ["nuernberg-1", "Robin Knoche", "IV", "1. FC Nuernberg", 5, 42, 65, 84],
  ["osnabrueck-1", "Jannik Mueller", "IV", "VfL Osnabrueck", 3, 40, 59, 76],
  ["stpauli-1", "Jackson Irvine", "ZM", "FC St. Pauli", 5, 74, 80, 74],
  ["wolfsburg-1", "Maximilian Arnold", "ZM", "VfL Wolfsburg", 6, 76, 86, 72],
  ["aachen-1", "Mika Hanraths", "IV", "Alemannia Aachen", 3, 40, 60, 76],
  ["ingolstadt-1", "Lukas Froede", "DM", "FC Ingolstadt", 3, 58, 72, 74],
  ["mannheim-1", "Lukas Kluenter", "RV", "Waldhof Mannheim", 3, 68, 67, 74],
  ["muenster-1", "Jorrit Hendrix", "DM", "Preussen Muenster", 3, 60, 74, 72],
  ["regensburg-1", "Christian Kuehlwetter", "ST", "Jahn Regensburg", 3, 74, 64, 48],
  ["saarbruecken-1", "Sven Sonnenberg", "IV", "1. FC Saarbruecken", 3, 42, 60, 75],
  ["verl-1", "Niko Kijewski", "LV", "SC Verl", 2, 62, 66, 70],
  ["wiesbaden-1", "Fatih Kaya", "ST", "Wehen Wiesbaden", 3, 74, 60, 45],
  ["bayern-f-1", "Giulia Gwinn", "RV", "FC Bayern Muenchen Frauen", 8, 82, 86, 82],
  ["bayern-f-2", "Klara Buehl", "LA", "FC Bayern Muenchen Frauen", 8, 89, 84, 55],
  ["wolfsburg-f-1", "Alexandra Popp", "ST", "VfL Wolfsburg Frauen", 8, 91, 79, 67],
  ["wolfsburg-f-2", "Lena Oberdorf", "DM", "VfL Wolfsburg Frauen", 9, 74, 88, 91],
  ["frankfurt-f-1", "Laura Freigang", "ST", "Eintracht Frankfurt Frauen", 7, 86, 78, 52],
  ["frankfurt-f-2", "Sophia Kleinherne", "IV", "Eintracht Frankfurt Frauen", 6, 48, 70, 84],
  ["werder-f-1", "Larissa Muehlhaus", "ST", "Werder Bremen Frauen", 5, 80, 68, 46],
  ["union-f-26", "Lisa Heiseler", "ZM", "1. FC Union Berlin Frauen", 4, 70, 76, 62],
  ["stuttgart-f-1", "Mara Alber", "LA", "VfB Stuttgart Frauen", 4, 76, 70, 50],
  ["koeln-f-1", "Nicole Billa", "ST", "1. FC Koeln Frauen", 5, 82, 69, 47],
].map(([id, name, pos, club, cls, atk, mid, def]) => cardDef(id, name, pos, club, cls, atk, mid, def));

GAME_CARDS.push(...SEASON_26_27_CARDS.filter((card) => !GAME_CARDS.some((existing) => existing.id === card.id)));

const baseCards = [
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "bayern-1")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "ducksch")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "reis")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "doekhi")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "fuehrich")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "guenter")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "stage")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "musiala")),
  cloneCardForCollection(GAME_CARDS.find((card) => card.id === "kimmich")),
];

const names = ["Thomas", "Max", "Anna", "Chris", "Kevin", "Tim", "Marco", "Leyla", "Nico", "Sara", "Ben", "Milan", "Noah", "Lina", "David", "Yara", "Omar"];
const opponents = ["FC Rheinpark", "Union Hafenstadt", "SV Allee 04", "VfB Nordkurve", "SC Bergtal", "Rot-Weiss Zentrum"];
const careerOpponents = ["SV Gruenwald", "FC Nord", "Berlin SC", "Rot-Weiss Zentrum", "Union Hafenstadt", "Energie Cottbus", "Werder Bremen", "Borussia Dortmund", "FC Bayern Muenchen", "Champions XI"];
const matchSituations = [
  { id: "striker-vs-centerback", label: "Stuermer gegen Innenverteidiger", call: "Abschluss + Physis gegen Defensive", category: "Abschluss", stats: [{ key: "finish", weight: 0.62 }, { key: "physical", weight: 0.38 }], playerGroups: ["attack"], cpuGroups: ["defense"], tactic: "konter", goalBias: 1 },
  { id: "wing-vs-fullback", label: "Fluegelduell", call: "Tempo + Dribbling entscheiden", category: "Tempo-Duell", stats: [{ key: "pace", weight: 0.52 }, { key: "dribble", weight: 0.48 }], playerGroups: ["attack", "mid"], cpuGroups: ["defense"], tactic: "konter", goalBias: 0 },
  { id: "midfield-control", label: "Mittelfeldduell", call: "Passspiel + Spielintelligenz entscheiden", category: "Passspiel", stats: [{ key: "passing", weight: 0.62 }, { key: "iq", weight: 0.38 }], playerGroups: ["mid"], cpuGroups: ["mid"], tactic: "balance", goalBias: 0 },
  { id: "keeper-reaction", label: "Angreifer gegen Torwart", call: "Abschluss gegen Torwartreaktion", category: "Torwartreaktion", stats: [{ key: "finish", weight: 0.58 }, { key: "iq", weight: 0.42 }], playerGroups: ["attack"], cpuGroups: ["keeper"], tactic: "konter", goalBias: 1 },
  { id: "build-up", label: "Spielaufbau", call: "Passspiel + Teamgeist entscheiden", category: "Spielaufbau", stats: [{ key: "passing", weight: 0.65 }, { key: "teamgeist", weight: 0.35 }], playerGroups: ["mid", "defense"], cpuGroups: ["mid", "attack"], tactic: "balance", goalBias: 0 },
  { id: "pressing-duel", label: "Zweikampf", call: "Defensive + Physis entscheiden", category: "Zweikampf", stats: [{ key: "defense", weight: 0.58 }, { key: "physical", weight: 0.42 }], playerGroups: ["defense", "mid"], cpuGroups: ["attack", "mid"], tactic: "pressing", goalBias: -1 },
  { id: "last-block", label: "Letzte Abwehraktion", call: "Defensive + Spielintelligenz entscheiden", category: "Verteidigung", stats: [{ key: "defense", weight: 0.68 }, { key: "iq", weight: 0.32 }], playerGroups: ["keeper", "defense"], cpuGroups: ["attack"], tactic: "pressing", goalBias: -1 },
  { id: "long-shot", label: "Fernschuss", call: "Abschluss + Technik entscheiden", category: "Abschluss", stats: [{ key: "finish", weight: 0.58 }, { key: "dribble", weight: 0.42 }], playerGroups: ["attack", "mid"], cpuGroups: ["keeper", "defense"], tactic: "konter", goalBias: 1 },
];

const FORMATIONS = {
  "1-2-1-1": { keeper: 1, defense: 2, mid: 2, attack: 1, label: "1-2-1-1" },
  "1-1-2-1": { keeper: 1, defense: 2, mid: 1, attack: 2, label: "1-1-2-1" },
  "1-1-1-2": { keeper: 1, defense: 1, mid: 2, attack: 2, label: "1-1-1-2" },
  "2-2-1": { keeper: 1, defense: 2, mid: 2, attack: 1, label: "1-2-2-1", legacy: true },
  "2-1-2": { keeper: 1, defense: 2, mid: 1, attack: 2, label: "1-2-1-2", legacy: true },
  "1-2-2": { keeper: 1, defense: 1, mid: 2, attack: 2, label: "1-1-2-2", legacy: true },
  "3-1-1": { keeper: 1, defense: 3, mid: 1, attack: 1, label: "1-3-1-1", legacy: true },
};

const DEFAULT_FORMATION = "1-2-1-1";
const MATCH_ACTIVE_COUNT = 6;
const MATCH_FIELD_COUNT = 5;
const MATCH_SUBSTITUTE_COUNT = 3;
const MATCH_CARD_COUNT = 9;
const MATCH_ROUNDS = 5;

const MATCH_BALANCE = {
  randomMin: -4,
  randomMax: 6,
  tacticBonus: 4,
  formationBonus: 3,
  levelBonusPerStep: 0.22,
  starBonus: 4,
  reuseCards: false,
  positionFit: {
    exact: 1,
    similar: 0.88,
    offRole: 0.68,
    wrong: 0.45,
  },
};

const CPU_DIFFICULTIES = {
  easy: { label: "Leicht", classOffset: -2, decisionSkill: 0.62, deckBonus: -7 },
  normal: { label: "Normal", classOffset: 0, decisionSkill: 0.86, deckBonus: 0 },
  hard: { label: "Schwer", classOffset: 1, decisionSkill: 1, deckBonus: 6 },
};

const state = loadState();

const els = {
  homeOverlay: document.querySelector("#homeOverlay"),
  gameApp: document.querySelector("#gameApp"),
  featurePanel: document.querySelector("#featurePanel"),
  closeFeature: document.querySelector("#closeFeature"),
  featureEyebrow: document.querySelector("#featureEyebrow"),
  featureTitle: document.querySelector("#featureTitle"),
  featureContent: document.querySelector("#featureContent"),
  adminCenter: document.querySelector("#adminCenter"),
  openAdmin: document.querySelector("#openAdmin"),
  closeAdmin: document.querySelector("#closeAdmin"),
  loginPanel: document.querySelector("#loginPanel"),
  openLogin: document.querySelector("#openLogin"),
  closeLogin: document.querySelector("#closeLogin"),
  loginForm: document.querySelector("#loginForm"),
  profileForm: document.querySelector("#profileForm"),
  loginUserSelect: document.querySelector("#loginUserSelect"),
  loginPin: document.querySelector("#loginPin"),
  profileNameInput: document.querySelector("#profileNameInput"),
  profileEmailInput: document.querySelector("#profileEmailInput"),
  profilePinInput: document.querySelector("#profilePinInput"),
  loginStatus: document.querySelector("#loginStatus"),
  headerUserName: document.querySelector("#headerUserName"),
  headerUserRole: document.querySelector("#headerUserRole"),
  headerAvatar: document.querySelector("#headerAvatar"),
  adminHeaderName: document.querySelector("#adminHeaderName"),
  adminHeaderRole: document.querySelector("#adminHeaderRole"),
  adminHeaderAvatar: document.querySelector("#adminHeaderAvatar"),
  loginActiveName: document.querySelector("#loginActiveName"),
  loginActiveRole: document.querySelector("#loginActiveRole"),
  loginActiveAvatar: document.querySelector("#loginActiveAvatar"),
  startFromOverlay: document.querySelector("#startFromOverlay"),
  backToMenu: document.querySelector("#backToMenu"),
  menuCoins: document.querySelector("#menuCoins"),
  menuEventHint: document.querySelector("#menuEventHint"),
  menuEventList: document.querySelector("#menuEventList"),
  adminStatus: document.querySelector("#adminStatus"),
  adminLpInput: document.querySelector("#adminLpInput"),
  adminLeagueSelect: document.querySelector("#adminLeagueSelect"),
  adminClassSelect: document.querySelector("#adminClassSelect"),
  adminCardClass: document.querySelector("#adminCardClass"),
  adminDbSummary: document.querySelector("#adminDbSummary"),
  adminClubList: document.querySelector("#adminClubList"),
  adminPlayerRows: document.querySelector("#adminPlayerRows"),
  adminDbLeague: document.querySelector("#adminDbLeague"),
  adminDbClub: document.querySelector("#adminDbClub"),
  adminDbPlayer: document.querySelector("#adminDbPlayer"),
  adminUserList: document.querySelector("#adminUserList"),
  adminNewUserName: document.querySelector("#adminNewUserName"),
  adminNewUserRole: document.querySelector("#adminNewUserRole"),
  adminWalletUser: document.querySelector("#adminWalletUser"),
  adminWalletCoins: document.querySelector("#adminWalletCoins"),
  adminWalletGems: document.querySelector("#adminWalletGems"),
  adminBoosterName: document.querySelector("#adminBoosterName"),
  adminBoosterCost: document.querySelector("#adminBoosterCost"),
  adminBoosterCurrency: document.querySelector("#adminBoosterCurrency"),
  adminBoosterMinClass: document.querySelector("#adminBoosterMinClass"),
  adminBoosterMaxClass: document.querySelector("#adminBoosterMaxClass"),
  adminBoosterCardCount: document.querySelector("#adminBoosterCardCount"),
  adminBoosterPool: document.querySelector("#adminBoosterPool"),
  adminBoosterPositions: document.querySelector("#adminBoosterPositions"),
  adminBoosterImage: document.querySelector("#adminBoosterImage"),
  adminBoosterDescription: document.querySelector("#adminBoosterDescription"),
  adminBoosterList: document.querySelector("#adminBoosterList"),
  playerLeague: document.querySelector("#playerLeague"),
  teamClass: document.querySelector("#teamClass"),
  leaguePoints: document.querySelector("#leaguePoints"),
  homeScore: document.querySelector("#homeScore"),
  awayScore: document.querySelector("#awayScore"),
  opponentName: document.querySelector("#opponentName"),
  opponentDetails: document.querySelector("#opponentDetails"),
  resultTag: document.querySelector("#resultTag"),
  matchLog: document.querySelector("#matchLog"),
  deckGrid: document.querySelector("#deckGrid"),
  leagueBody: document.querySelector("#leagueBody"),
  playMatch: document.querySelector("#playMatch"),
  openPack: document.querySelector("#openPack"),
  dailyBonus: document.querySelector("#dailyBonus"),
  attackSlot: document.querySelector("#attackSlot"),
  midSlot: document.querySelector("#midSlot"),
  defenseSlot: document.querySelector("#defenseSlot"),
  keeperSlot: document.querySelector("#keeperSlot"),
  cpuDifficulty: document.querySelector("#cpuDifficulty"),
  battleBoard: document.querySelector("#battleBoard"),
  roundTag: document.querySelector("#roundTag"),
  matchSummary: document.querySelector("#matchSummary"),
};

let selectedTactic = "pressing";
let selectedFormation = normalizeFormationKey(state.formation);
let currentOpponent = createOpponent();

document.body.classList.add("menu-open");

document.querySelectorAll(".tactic-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tactic-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedTactic = button.dataset.tactic;
  });
});

document.querySelectorAll(".formation-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".formation-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedFormation = normalizeFormationKey(button.dataset.formation);
    state.formation = selectedFormation;
    render();
  });
});

els.cpuDifficulty?.addEventListener("change", () => {
  state.cpuDifficulty = normalizeCpuDifficulty(els.cpuDifficulty.value);
  currentOpponent = createOpponent();
  render();
});

els.startFromOverlay.addEventListener("click", handlePlayTileTap);
els.backToMenu.addEventListener("click", showMenu);
els.playMatch.addEventListener("click", playMatch);
els.openPack.addEventListener("click", openPack);
els.openAdmin.addEventListener("click", openAdminCenter);
els.closeAdmin.addEventListener("click", closeAdminCenter);
els.openLogin.addEventListener("click", openLoginPanel);
els.closeLogin.addEventListener("click", closeLoginPanel);
els.loginForm.addEventListener("submit", handleLoginSubmit);
els.profileForm.addEventListener("submit", handleProfileSubmit);
els.closeFeature.addEventListener("click", closeFeaturePanel);
els.dailyBonus.addEventListener("click", claimDailyBonus);
els.featureContent.addEventListener("click", handleFeatureClick);
els.featureContent.addEventListener("change", handleFeatureChange);
document.querySelectorAll(".admin-nav [data-admin-section]").forEach((button) => {
  button.addEventListener("click", () => handleAdminNav(button));
});
document.querySelector("#adminEventList").addEventListener("click", handleAdminEventListClick);
document.querySelector("#adminCalendarGrid").addEventListener("click", handleAdminEventListClick);
document.querySelector("#adminEventDetails").addEventListener("click", handleAdminEventAction);
document.querySelector("#adminCreateEvent").addEventListener("click", () => createAdminEvent("Spezial Event"));
document.querySelectorAll("[data-event-template]").forEach((button) => {
  button.addEventListener("click", () => selectAdminEventTemplate(button.dataset.eventTemplate));
});
els.adminUserList.addEventListener("click", handleAdminUserAction);
els.adminUserList.addEventListener("change", handleAdminUserAction);
document.querySelector("#adminAddUser").addEventListener("click", addAdminUser);
document.querySelector("#adminGrantWallet").addEventListener("click", grantAdminWallet);
document.querySelector("#adminCreateBooster").addEventListener("click", createAdminBooster);
els.adminBoosterList.addEventListener("click", handleAdminBoosterAction);
document.querySelector("#saveQuickRewardPool").addEventListener("click", saveQuickRewardPool);

document.querySelector("#adminCoins").addEventListener("click", () => {
  state.coins += 10000;
  setAdminStatus("10.000 Coins wurden gutgeschrieben.");
  render();
});

document.querySelector("#adminGems").addEventListener("click", () => {
  state.gems += 500;
  setAdminStatus("500 Diamanten wurden gutgeschrieben.");
  render();
});

document.querySelector("#adminSetLp").addEventListener("click", () => {
  state.lp = clamp(Number(els.adminLpInput.value) || 0, 0, 999999);
  setAdminStatus(`Liga-Punkte auf ${state.lp} gesetzt.`);
  render();
});

els.adminLeagueSelect.addEventListener("change", () => {
  state.leagueIndex = Number(els.adminLeagueSelect.value);
  resetLeagueRows();
  setAdminStatus(`Liga auf ${leagues[state.leagueIndex]} gesetzt.`);
  render();
});

els.adminClassSelect.addEventListener("change", () => {
  state.teamClassIndex = Number(els.adminClassSelect.value);
  setAdminStatus(`Teamklasse auf ${teamClasses[state.teamClassIndex]} gesetzt.`);
  render();
});

document.querySelector("#adminAddCard").addEventListener("click", () => {
  const selectedClass = Number(els.adminCardClass.value);
  const card = drawGameCard(selectedClass, selectedClass);
  state.deck.push(card);
  setAdminStatus(`${card.name} wurde erstellt.`);
  render();
});

document.querySelector("#adminGodCard").addEventListener("click", () => {
  const iconPool = GAME_CARDS.filter((card) => normalizeClassIndex(card.cls) >= teamClasses.length - 1);
  const card = cloneCardForCollection(pick(iconPool.length ? iconPool : GAME_CARDS), "admin-icon");
  state.deck.push(card);
  state.teamClassIndex = teamClasses.length - 1;
  setAdminStatus(`${card.name} wurde als Testkarte hinzugefuegt.`);
  render();
});

document.querySelector("#adminWin").addEventListener("click", () => {
  state.homeScore = 3;
  state.awayScore = 1;
  state.lp += 25;
  state.coins += 45;
  state.record.win += 1;
  state.log = ["Admin: Sieg simuliert. +25 LP, +45 Coins.", ...state.log].slice(0, 8);
  maybePromoteLeague();
  setAdminStatus("Sieg wurde simuliert.");
  render();
});

document.querySelector("#adminWeek").addEventListener("click", () => {
  settleWeek();
  setAdminStatus("Wochenabrechnung wurde ausgefuehrt.");
  render();
});

document.querySelector("#adminReset").addEventListener("click", () => {
  Object.assign(state, createInitialState());
  currentOpponent = createOpponent();
  localStorage.removeItem("liga-clash-state-v1");
  setAdminStatus("Spielstand wurde zurueckgesetzt.");
  render();
});

document.querySelector("#adminRefreshDb").addEventListener("click", () => {
  renderAdminDatabase();
  setAdminStatus("Vereins- und Spieleruebersicht aktualisiert.");
});

els.adminDbLeague.addEventListener("change", () => {
  updateAdminDatabaseDropdowns("league");
  renderAdminDatabase();
});

els.adminDbClub.addEventListener("change", () => {
  updateAdminDatabaseDropdowns("club");
  renderAdminDatabase();
});

els.adminDbPlayer.addEventListener("change", () => {
  renderAdminDatabase();
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "home") {
      closeFeaturePanel();
      return;
    }
    openFeature(action);
  });
});

render();
initAdminControls();

function showGame(target) {
  els.homeOverlay.classList.add("is-hidden");
  els.gameApp.classList.remove("is-hidden");
  document.body.classList.remove("menu-open");

  if (target === "deck") {
    document.querySelector(".deck-area").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (target === "league") {
    document.querySelector(".league-table-area").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handlePlayTileTap() {
  if (els.startFromOverlay.classList.contains("is-tapping")) return;
  els.startFromOverlay.classList.add("is-tapping");
  playUiSound("play");
  vibrate([24, 30, 18]);
  setTimeout(() => {
    els.startFromOverlay.classList.remove("is-tapping");
    openFeature("career");
  }, 190);
}

function showMenu() {
  els.gameApp.classList.add("is-hidden");
  els.homeOverlay.classList.remove("is-hidden");
  document.body.classList.add("menu-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openFeature(action) {
  const views = {
    booster: renderBoosterFeature,
    fusion: renderFusionFeature,
    career: renderCareerFeature,
    collection: renderCollectionFeature,
    league: renderLeagueFeature,
    deck: renderDeckFeature,
    shop: renderShopFeature,
    news: renderNewsFeature,
    events: renderEventsFeature,
    rankings: renderRankingsFeature,
    club: renderClubFeature,
    messages: renderMessagesFeature,
    friends: renderFriendsFeature,
  };

  if (!views[action]) return;
  views[action]();
  els.featurePanel.classList.remove("is-hidden");
}

function closeFeaturePanel() {
  els.featurePanel.classList.add("is-hidden");
}

function setFeature(title, eyebrow, html) {
  els.featureTitle.textContent = title;
  els.featureEyebrow.textContent = eyebrow;
  els.featureContent.innerHTML = html;
}

function renderBoosterFeature() {
  const activePacks = state.boosterPacks.filter((pack) => pack.active);
  setFeature(
    "Booster",
    "Packs oeffnen",
    `
      <div class="feature-grid">
        ${activePacks.length
          ? activePacks.map((pack) => packTile(pack)).join("")
          : `<article class="feature-card"><h3>Keine Booster aktiv</h3><p>Im Admin Center koennen neue Booster angelegt und aktiviert werden.</p></article>`}
        <article class="feature-card">
          <h3>Pack-Info</h3>
          <p>Gratis-Packs werden zuerst verbraucht. Solange Gratis-Packs vorhanden sind, verschwindet der Preis beim passenden Booster.</p>
          <div class="pill-row"><span>${formatNumber(state.coins)} Coins</span><span>${formatNumber(state.gems)} Diamanten</span><span>${totalFreePacks()} Gratis-Packs</span></div>
        </article>
      </div>
    `
  );
}

function renderFusionFeature() {
  const sortedCards = [...state.deck].sort((a, b) => {
    const readyCompare = Number(Boolean(fusionPartnerFor(b))) - Number(Boolean(fusionPartnerFor(a)));
    if (readyCompare !== 0) return readyCompare;
    const levelCompare = cardLevel(b) - cardLevel(a);
    if (levelCompare !== 0) return levelCompare;
    return rating(b) - rating(a);
  });
  const maxedCount = sortedCards.filter((card) => cardLevel(card) >= CARD_MAX_LEVEL).length;
  const readyCount = sortedCards.filter((card) => fusionPartnerFor(card)).length;
  setFeature(
    "Fusion",
    "Karten leveln & entwickeln",
    `
      <div class="feature-toolbar">
        <button class="feature-action" type="button" data-feature-action="sort-rating">Nach Rating sortieren</button>
        <button class="feature-action" type="button" data-feature-action="add-random-card">Gratis Scout</button>
      </div>
      <div class="owned-filter-summary">
        <strong>Evolution</strong>
        <div class="pill-row">
          <span>${maxedCount} Karten auf Level 100</span>
          <span>${readyCount} Fusionen bereit</span>
          <span>Nur gleiche Karte + gleiche Serie</span>
          <span>Level 99 fusioniert nicht</span>
        </div>
      </div>
      <div class="mini-deck">
        ${sortedCards.length ? sortedCards.map((card) => miniCard(card, false, "collection")).join("") : emptyOwnedFilterMessage()}
      </div>
    `
  );
}

function packTile(pack) {
  const { id, name, cost, minClass, maxClass, description, currency = "coins", image = "", tier = "bronze", pool = "mixed", cardCount = 1, positions = [] } = pack;
  const freeCount = freePackCount(id);
  const hasFreePack = freeCount > 0;
  const amount = currency === "coins" ? state.coins : state.gems;
  const label = currency === "coins" ? "Coins" : "Diamanten";
  const packArt = image
    ? `<img class="pack-shot" src="${image}" alt="${name}" />`
    : `<div class="pack-shot pack-shot-placeholder ${tier}"><span>${name}</span></div>`;
  return `
    <article class="feature-card pack-card pack-${tier} ${hasFreePack ? "has-free-pack" : ""}" data-feature-action="pack-tap">
      <div class="pack-art" data-feature-action="pack-tap">${packArt}</div>
      <h3>${name}</h3>
      <p>${description}</p>
      <span class="pack-pool">${packPoolLabel(pool)} | ${packPositionLabel(positions)}</span>
      <span class="pack-count">${cardCount} ${cardCount === 1 ? "Karte" : "Karten"}</span>
      ${hasFreePack ? `<strong class="pack-free">Gratis verfuegbar x${freeCount}</strong>` : `<strong>${cost} ${label}</strong>`}
      <button type="button" data-feature-action="buy-pack" ${packActionAttributes(pack)} ${!hasFreePack && amount < cost ? "disabled" : ""}>${hasFreePack ? "Gratis oeffnen" : "Pack oeffnen"}</button>
    </article>
  `;
}

function packActionAttributes(pack) {
  const normalized = normalizeBoosterPack(pack);
  return `data-pack-id="${escapeAttr(normalized.id)}" data-cost="${normalized.cost}" data-currency="${escapeAttr(normalized.currency)}" data-min="${normalized.minClass}" data-max="${normalized.maxClass}" data-pool="${escapeAttr(normalized.pool)}" data-positions="${escapeAttr(normalized.positions.join(","))}" data-count="${normalized.cardCount}"`;
}

function renderCareerFeature() {
  const career = state.career;
  const nextOpponent = careerOpponentForTier(career.tier, career.seasonGame);
  const power = careerTeamPower();
  const seasonLeft = Math.max(0, 10 - career.seasonGame);
  setFeature(
    "Liga Clash Karriere",
    careerTierName(career.tier),
    `
      <div class="career-layout">
        <section class="feature-card career-hero">
          <h3>${careerTierName(career.tier)}</h3>
          <p>Offline-Modus zum Karten testen, Deck ausprobieren, Leveln und kleine Boni sammeln.</p>
          <div class="pill-row">
            <span>Teamstaerke ${power}</span>
            <span>${career.points} Punkte</span>
            <span>${career.seasonGame}/10 Spiele</span>
            <span>${career.xp} XP</span>
          </div>
        </section>

        <section class="feature-card">
          <h3>Naechster Gegner</h3>
          <p>${nextOpponent.name} | Staerke ${careerDisplayPower(nextOpponent.power)}</p>
          <button type="button" data-feature-action="career-match">Karrierespiel starten</button>
        </section>

        <section class="feature-card">
          <h3>Schnelles KI-Spiel</h3>
          <p>Kein Saisonfortschritt. Ideal zum Testen deines Decks und fuer kleine Einstiegsboni.</p>
          <button type="button" data-feature-action="career-quick">Schnelles Spiel</button>
        </section>

        <section class="feature-card">
          <h3>Herausforderung</h3>
          <p>Gewinne ein enges Spezialmatch. Bei Sieg gibt es extra XP und selten Diamanten.</p>
          <button type="button" data-feature-action="career-challenge">Challenge spielen</button>
        </section>
      </div>

      <div class="career-bottom">
        <article class="feature-card">
          <h3>Saison</h3>
          <p>Noch ${seasonLeft} Spiele. Top 2 steigen nach 10 Spielen auf.</p>
          ${careerTable()}
        </article>
        <article class="feature-card">
          <h3>Letzte Karriere</h3>
          <div class="career-log">${career.log.length ? career.log.map((entry) => `<p>${escapeHtml(entry)}</p>`).join("") : `<p>Noch kein Offline-Spiel gespielt.</p>`}</div>
        </article>
      </div>
    `
  );
}

function careerTable() {
  const career = state.career;
  const rows = [
    { name: "Du", points: career.points, gf: career.goalsFor, ga: career.goalsAgainst, player: true },
    ...careerOpponents.slice(0, 7).map((name, index) => ({
      name,
      points: Math.max(0, 16 - index * 2 + Math.floor(career.seasonGame / 2) - (career.tier > 5 ? 2 : 0)),
      gf: Math.max(0, 14 - index + career.seasonGame),
      ga: Math.max(0, 8 + index),
    })),
  ].sort((a, b) => b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga));
  return `
    <table class="mini-table career-table">
      <thead><tr><th>#</th><th>Team</th><th>PKT</th><th>TD</th></tr></thead>
      <tbody>
        ${rows.map((row, index) => `<tr class="${row.player ? "player-row" : ""}"><td>${index + 1}</td><td>${escapeHtml(row.name)}</td><td>${row.points}</td><td>${row.gf - row.ga}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderCollectionFeature() {
  const cards = filteredOwnedCards("collection");
  const proReady = cards.filter((card) => fusionPartnerFor(card)).length;
  setFeature(
    "Sammlung",
    `${cards.length} / ${state.deck.length} Karten`,
    `
      <div class="feature-toolbar">
        ${ownedCardFilters("collection")}
        <button class="feature-action" type="button" data-feature-action="sort-rating">Nach Rating sortieren</button>
        <button class="feature-action" type="button" data-feature-action="add-random-card">Gratis Scout</button>
      </div>
      <div class="owned-filter-summary"><strong>Evolution</strong><div class="pill-row"><span>Max-Level ${CARD_MAX_LEVEL}</span><span>${proReady} Fusionen bereit</span><span>Bronze 100+100 = Bronzestern</span><span>Silber 100+100 = Silberstern</span><span>Gold+ 100+100 = Goldstern</span><span>Level 99 fusioniert nicht</span></div></div>
      ${ownedCardFilterSummary(cards)}
      <div class="mini-deck">
        ${cards.length ? cards.map((card) => miniCard(card, false, "collection")).join("") : emptyOwnedFilterMessage()}
      </div>
    `
  );
}

function renderLeagueFeature() {
  const winsNeeded = Math.max(0, 3 - state.record.win);
  const lpNeeded = Math.max(0, 350 - state.lp);
  setFeature(
    "Liga & Missionen",
    leagues[state.leagueIndex],
    `
      <div class="feature-grid two">
        <section class="feature-card">
          <h3>Wochenwertung</h3>
          <p>Deine aktuelle Liga: ${leagues[state.leagueIndex]}. Die Top 3 steigen auf, die letzten 3 steigen ab.</p>
          <button type="button" data-feature-action="show-game-league">Tabelle ansehen</button>
        </section>
        <section class="feature-card">
          <h3>Bilanz</h3>
          <div class="pill-row"><span>${state.record.win} Siege</span><span>${state.record.draw} Remis</span><span>${state.record.loss} Niederlagen</span><span>${state.lp} LP</span></div>
          <button type="button" data-feature-action="play-now">Match spielen</button>
        </section>
      </div>
      <div class="feature-list">
        ${missionTile("daily-win", "Tagessieg", `Gewinne 3 Matches. Noch ${winsNeeded}.`, 150, state.record.win >= 3)}
        ${missionTile("lp-350", "LP-Jagd", `Erreiche 350 Liga-Punkte. Noch ${lpNeeded}.`, 250, state.lp >= 350)}
        ${missionTile("collector-8", "Sammler", `Besitze 8 Karten. Aktuell ${state.deck.length}.`, 200, state.deck.length >= 8)}
      </div>
    `
  );
}

function missionTile(id, title, text, reward, ready) {
  const claimed = state.claimedMissions.includes(id);
  return `
    <article class="mission-row">
      <h3>${title}</h3>
      <p>${text}</p>
      <strong>Belohnung: ${reward} Coins</strong>
      <button type="button" data-feature-action="claim-mission" data-mission="${id}" data-reward="${reward}" ${!ready || claimed ? "disabled" : ""}>${claimed ? "Abgeholt" : "Belohnung holen"}</button>
    </article>
  `;
}

function renderDeckFeature() {
  const cards = filteredOwnedCards("deck");
  setFeature(
    "Deck",
    `${state.selected.length}/${MATCH_CARD_COUNT} aktive Karten`,
    `
      <p class="muted">Waehle bis zu 6 Karten: 1 Torwart und 5 Feldspieler. Die Formation bestimmt, wie viele Karten in Abwehr, Mittelfeld und Angriff eingesetzt werden.</p>
      <div class="feature-toolbar">
        ${ownedCardFilters("deck")}
      </div>
      ${ownedCardFilterSummary(cards)}
      <div class="mini-deck">
        ${cards.length ? cards.map((card) => miniCard(card, true, "deck")).join("") : emptyOwnedFilterMessage()}
      </div>
      <button class="feature-action" type="button" data-feature-action="play-now">Mit diesem Deck spielen</button>
    `
  );
}

function ownedCardFilters(scope) {
  const filters = ownedFilterState(scope);
  const leagues = ownedLeagues();
  const clubs = ownedClubs(filters.league);
  const positions = ownedPositions(filters.league, filters.club);
  const leagueOptions = [{ value: "Alle Ligen", label: "Alle Ligen" }, ...leagues.map((league) => ({ value: league, label: league }))];
  const clubOptions = [{ value: "Alle Vereine", label: "Alle Vereine" }, ...clubs.map((club) => ({ value: club, label: club }))];
  const positionOptions = [{ value: "Alle Positionen", label: "Alle Positionen" }, ...positions.map((position) => ({ value: position, label: position }))];
  return `
    <label class="owned-filter">
      Liga
      <select data-feature-filter="${scope}" data-filter-type="league">
        ${leagueOptions.map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.league ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Verein
      <select data-feature-filter="${scope}" data-filter-type="club">
        ${clubOptions.map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.club ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Position
      <select data-feature-filter="${scope}" data-filter-type="position">
        ${positionOptions.map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.position ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
  `;
}

function ownedFilterState(scope) {
  state.cardFilters = state.cardFilters || {};
  state.cardFilters[scope] = {
    league: state.cardFilters[scope]?.league || "Alle Ligen",
    club: state.cardFilters[scope]?.club || "Alle Vereine",
    position: state.cardFilters[scope]?.position || "Alle Positionen",
  };
  if (!ownedLeagues().includes(state.cardFilters[scope].league) && state.cardFilters[scope].league !== "Alle Ligen") {
    state.cardFilters[scope].league = "Alle Ligen";
  }
  if (!ownedClubs(state.cardFilters[scope].league).includes(state.cardFilters[scope].club) && state.cardFilters[scope].club !== "Alle Vereine") {
    state.cardFilters[scope].club = "Alle Vereine";
  }
  if (!ownedPositions(state.cardFilters[scope].league, state.cardFilters[scope].club).includes(state.cardFilters[scope].position) && state.cardFilters[scope].position !== "Alle Positionen") {
    state.cardFilters[scope].position = "Alle Positionen";
  }
  return state.cardFilters[scope];
}

function ownedLeagues() {
  return [...new Set(state.deck.map((card) => card.league || getClub(card.club).league))].sort((a, b) => a.localeCompare(b));
}

function ownedClubs(league) {
  return [...new Set(state.deck
    .filter((card) => league === "Alle Ligen" || (card.league || getClub(card.club).league) === league)
    .map((card) => card.club))]
    .sort((a, b) => a.localeCompare(b));
}

function ownedPositions(league, club) {
  return [...new Set(state.deck
    .filter((card) => {
      const cardLeague = card.league || getClub(card.club).league;
      const leagueMatches = league === "Alle Ligen" || cardLeague === league;
      const clubMatches = club === "Alle Vereine" || card.club === club;
      return leagueMatches && clubMatches;
    })
    .map((card) => card.pos)
    .filter(Boolean))]
    .sort((a, b) => positionSortValue(a) - positionSortValue(b) || a.localeCompare(b));
}

function positionSortValue(position) {
  return {
    TW: 1,
    GK: 1,
    IV: 2,
    CB: 2,
    LV: 3,
    RV: 4,
    LWB: 5,
    RWB: 6,
    DM: 7,
    ZM: 8,
    OM: 9,
    CAM: 9,
    LM: 10,
    RM: 11,
    LA: 12,
    RA: 13,
    ST: 14,
    MS: 14,
  }[String(position || "").toUpperCase()] || 99;
}

function filteredOwnedCards(scope) {
  const filters = ownedFilterState(scope);
  return state.deck.filter((card) => {
    const league = card.league || getClub(card.club).league;
    const leagueMatches = filters.league === "Alle Ligen" || league === filters.league;
    const clubMatches = filters.club === "Alle Vereine" || card.club === filters.club;
    const positionMatches = filters.position === "Alle Positionen" || card.pos === filters.position;
    return leagueMatches && clubMatches && positionMatches;
  });
}

function ownedCardFilterSummary(cards) {
  const byClub = cards.reduce((map, card) => {
    map[card.club] = (map[card.club] || 0) + 1;
    return map;
  }, {});
  const topClubs = Object.entries(byClub)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([club, count]) => `<span>${escapeHtml(club)}: ${count}</span>`)
    .join("");
  return `<div class="owned-filter-summary"><strong>${cards.length} Karten gefunden</strong>${topClubs ? `<div class="pill-row">${topClubs}</div>` : ""}</div>`;
}

function emptyOwnedFilterMessage() {
  return `<article class="feature-card empty-card-filter"><h3>Keine Karten gefunden</h3><p>Du besitzt fuer diese Liga-, Vereins- und Positionsauswahl noch keine Spieler.</p></article>`;
}

function renderShopFeature() {
  setFeature(
    "Shop",
    "Muenzen & Items",
    `
      <div class="feature-grid">
        <article class="feature-card">
          <h3>Scout-Ticket</h3>
          <p>Erhalte eine zusaetzliche Chance auf eine neue Karte.</p>
          <strong>75 Coins</strong>
          <button type="button" data-feature-action="buy-scout-ticket" ${state.coins < 75 ? "disabled" : ""}>Kaufen</button>
        </article>
        <article class="feature-card">
          <h3>1000 Coins</h3>
          <p>Tausche Diamanten gegen Coins fuer Booster und Items.</p>
          <strong>25 Diamanten</strong>
          <button type="button" data-feature-action="buy-coins" ${state.gems < 25 ? "disabled" : ""}>Kaufen</button>
        </article>
        <article class="feature-card">
          <h3>Gold Scout</h3>
          <p>Erstellt eine Karte mindestens ab Bronze.</p>
          <strong>400 Coins</strong>
          <button type="button" data-feature-action="buy-gold-scout" ${state.coins < 400 ? "disabled" : ""}>Kaufen</button>
        </article>
      </div>
    `
  );
}

function renderNewsFeature() {
  setFeature(
    "News",
    "Transferticker",
    `
      <div class="feature-list">
        ${messageTile("Saison 1 gestartet", "Wochenliga, Booster, Deckbau und Missionen sind im Prototyp aktiv.")}
        ${messageTile("Matchmaking Update", "Gegner werden nach Teamklasse, Liga und Staerke gesucht.")}
        ${messageTile("Neue Packs", "Bronze, Silber, Gold, Elite und Elite Jagd sind im Boosterbereich verfuegbar.")}
      </div>
    `
  );
}

function renderEventsFeature() {
  const activeEvents = state.events.filter((event) => event.active);
  const selected = activeEvents[0];
  const eventDetails = selected ? renderPlayerEventDetails(selected) : `<h3>Event Details</h3><p>Keine aktiven Events.</p>`;
  const upcomingEvents = activeEvents.length
    ? activeEvents
      .map((event) => `
        <article>
          <b>${escapeHtml(event.title)}</b>
          <span>${escapeHtml(event.type)}</span>
          <em>${escapeHtml(event.date)}</em>
        </article>
      `)
      .join("")
    : `<p class="empty-admin-list">Keine anstehenden Events.</p>`;
  const counts = activeEvents.reduce((map, event) => {
    map[event.type] = (map[event.type] || 0) + 1;
    return map;
  }, {});

  setFeature(
    "Events",
    "Kalender & Belohnungen",
    `
      <div class="player-calendar-view">
        <section class="player-calendar-head">
          <div>
            <p class="eyebrow">Juli 2026</p>
            <h3>Kalender & Events</h3>
            <span>Alle Booster, Missionen, Releases und Bonusaktionen fuer Spieler.</span>
          </div>
          <div class="calendar-tabs">
            <button class="active" type="button">Monat</button>
            <button type="button">Woche</button>
            <button type="button">Liste</button>
          </div>
        </section>

        <section class="player-calendar-layout">
          <div class="admin-calendar-main">
            <header class="calendar-toolbar">
              <div class="calendar-arrows">
                <button type="button">‹</button>
                <button type="button">›</button>
                <button type="button">Heute</button>
              </div>
              <h3>Juli 2026</h3>
              <div class="calendar-tabs compact">
                <button class="active" type="button">Monat</button>
                <button type="button">Liste</button>
              </div>
            </header>
            <div class="calendar-weekdays">
              <span>Mo</span><span>Di</span><span>Mi</span><span>Do</span><span>Fr</span><span>Sa</span><span>So</span>
            </div>
            <div class="calendar-grid">${renderCalendarCells(activeEvents, selected?.id)}</div>
          </div>

          <aside class="admin-event-details player-event-details">${eventDetails}</aside>
        </section>

        <section class="player-event-bottom">
          <article class="admin-card upcoming-events">
            <h3>Anstehende Events</h3>
            ${upcomingEvents}
          </article>

          <article class="admin-card event-categories">
            <h3>Event Kategorien</h3>
            ${eventTypes().map((type) => `<p><span>${escapeHtml(type)}</span><b>${counts[type] || 0}</b></p>`).join("")}
          </article>

          <article class="admin-card player-event-actions">
            <h3>Schnell spielen</h3>
            <button type="button" data-feature-action="event-cup">Weekend Cup spielen</button>
            <button type="button" data-feature-action="add-random-card">Talentjagd abholen</button>
          </article>
        </section>
      </div>
    `
  );
}

function renderRankingsFeature() {
  const rows = [{ name: "GOERNALDOBERLIN", lp: state.lp, player: true }, ...state.leagueRows].sort((a, b) => b.lp - a.lp).slice(0, 12);
  setFeature(
    "Ranglisten",
    "Top Spieler",
    `
      <table class="mini-table">
        <thead><tr><th>Platz</th><th>Spieler</th><th>LP</th></tr></thead>
        <tbody>${rows.map((row, index) => `<tr class="${row.player ? "player-row" : ""}"><td>${index + 1}</td><td>${row.name}</td><td>${row.lp}</td></tr>`).join("")}</tbody>
      </table>
    `
  );
}

function renderClubFeature() {
  const werder = getClub("Werder Bremen");
  setFeature(
    "Club",
    "Werder Bremen",
    `
      <div class="feature-grid two">
        <article class="feature-card">
          <img class="club-panel-crest" src="${werder.crest}" alt="Werder Bremen Wappen" />
          <h3>Clubchemie</h3>
          <p>Aktive Kaderchemie: ${calculateChemistry()}%. Mehr Karten aus demselben Verein steigern spaeter Boni.</p>
          <div class="pill-row"><span>${teamClasses[state.teamClassIndex]}</span><span>${leagues[state.leagueIndex]}</span></div>
        </article>
        <article class="feature-card">
          <h3>Vereinszentrum</h3>
          <p>Investiere Coins in dein Clublevel und erhoehe dein Vereinszentrum.</p>
          <strong>300 Coins</strong>
          <button type="button" data-feature-action="club-upgrade" ${state.coins < 300 ? "disabled" : ""}>Ausbauen</button>
        </article>
      </div>
    `
  );
}

function renderMessagesFeature() {
  setFeature(
    "Nachrichten",
    "Postfach",
    `
      <div class="feature-list">
        ${messageTile("Willkommen", "Dein Account wurde fuer Saison 1 vorbereitet.")}
        ${messageTile("Liga Info", "Dienstagabend wird die Wochenwertung abgerechnet.")}
        <article class="message-row">
          <h3>Geschenk</h3>
          <p>Ein kleines Startergeschenk wartet auf dich.</p>
          <button type="button" data-feature-action="mail-gift" ${state.mailGiftClaimed ? "disabled" : ""}>${state.mailGiftClaimed ? "Abgeholt" : "Geschenk holen"}</button>
        </article>
      </div>
    `
  );
}

function renderFriendsFeature() {
  setFeature(
    "Freunde",
    "Social",
    `
      <div class="feature-grid">
        ${friendTile("Max", "2. Bundesliga", 342)}
        ${friendTile("Anna", "Bundesliga", 418)}
        ${friendTile("Chris", "3. Liga", 286)}
      </div>
    `
  );
}

function messageTile(title, text) {
  return `<article class="message-row"><h3>${title}</h3><p>${text}</p></article>`;
}

function friendTile(name, league, lp) {
  return `<article class="feature-card"><h3>${name}</h3><p>${league} | ${lp} LP</p><button type="button" data-feature-action="friendly" data-name="${name}">Freundschaftsspiel</button></article>`;
}

function renderCardPhoto(card, className = "card-photo") {
  const photo = playerPhoto(card);
  return photo ? `<img class="${className}" src="${escapeAttr(photo)}" alt="${escapeAttr(card.name)} Profilbild" loading="lazy" />` : "";
}

function refreshCardManagementFeature() {
  if (els.featureTitle.textContent === "Fusion") {
    renderFusionFeature();
  } else {
    renderCollectionFeature();
  }
}

function miniCard(card, selectable, context = "") {
  const selected = state.selected.includes(card.id);
  const tier = normalizeClassIndex(card.cls);
  const club = getClub(card.club);
  const level = cardLevel(card);
  const proReady = fusionPartnerFor(card);
  return `
    <article class="mini-card card-tier-${tier} ${selected ? "selected" : ""}" ${selectable ? `data-feature-action="toggle-card" data-card="${card.id}"` : ""}>
      <div class="card-top">
        <div class="rating">${rating(card)}</div>
        <span class="card-position">${card.pos}</span>
        <img class="card-crest" src="${club.crest}" alt="${club.name} Wappen" />
      </div>
      ${proBadge(card)}
      <span class="series-badge series-${escapeAttr(cardSeries(card))}">${escapeHtml(cardSeriesLabel(card.series))}</span>
      ${renderCardPhoto(card)}
      <div class="card-name">${card.name}</div>
      <div class="card-progress"><span>${proStars(card) ? `Evolution Level ${level}/${PRO_MAX_LEVEL}` : `Level ${level}/${CARD_MAX_LEVEL}`}</span><i style="--level-progress:${level}%"></i></div>
      ${renderCardStats(card)}
      ${context === "collection" ? `
        <div class="card-actions">
          <button type="button" data-feature-action="level-card" data-card="${card.id}" ${level >= CARD_MAX_LEVEL ? "disabled" : ""}>Level +10</button>
          <button type="button" data-feature-action="level-card-small" data-card="${card.id}" ${level >= CARD_MAX_LEVEL ? "disabled" : ""}>+1</button>
          <button type="button" data-feature-action="pro-card" data-card="${card.id}" ${proReady ? "" : "disabled"}>Evolution</button>
        </div>
      ` : ""}
    </article>
  `;
}

function handleFeatureClick(event) {
  const target = event.target.closest("[data-feature-action]");
  if (!target) return;
  const action = target.dataset.featureAction;

  if (action === "buy-pack") {
    buyPack(target);
  } else if (action === "pack-tap") {
    previewPackTap(target);
  } else if (action === "sort-rating") {
    state.deck.sort((a, b) => rating(b) - rating(a));
    refreshCardManagementFeature();
  } else if (action === "add-random-card") {
    addGeneratedCard(state.teamClassIndex, state.teamClassIndex + 2);
    render();
    refreshCardManagementFeature();
  } else if (action === "show-game-league") {
    closeFeaturePanel();
    showGame("league");
  } else if (action === "play-now") {
    closeFeaturePanel();
    showGame("match");
  } else if (action === "career-match") {
    runCareerMatch("season", target);
  } else if (action === "career-quick") {
    runCareerMatch("quick", target);
  } else if (action === "career-challenge") {
    runCareerMatch("challenge", target);
  } else if (action === "claim-mission") {
    claimMission(target);
  } else if (action === "toggle-card") {
    toggleSelected(target.dataset.card);
    renderDeckFeature();
  } else if (action === "level-card") {
    levelCard(target.dataset.card);
    render();
    refreshCardManagementFeature();
  } else if (action === "level-card-small") {
    levelCard(target.dataset.card, 1);
    render();
    refreshCardManagementFeature();
  } else if (action === "pro-card") {
    fuseCardToPro(target.dataset.card);
    render();
    refreshCardManagementFeature();
  } else if (action === "buy-scout-ticket") {
    spendCoins(75);
    addGeneratedCard(state.teamClassIndex, state.teamClassIndex + 1);
    render();
    renderShopFeature();
  } else if (action === "buy-coins") {
    state.gems -= 25;
    const fromCoins = state.coins;
    state.coins += 1000;
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderShopFeature();
  } else if (action === "buy-gold-scout") {
    spendCoins(400);
    addGeneratedCard(5, 10);
    render();
    renderShopFeature();
  } else if (action === "event-cup") {
    const fromCoins = state.coins;
    state.coins += 180;
    state.lp += 12;
    state.log = ["Event: Weekend Cup gespielt. +180 Coins, +12 LP.", ...state.log].slice(0, 8);
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderEventsFeature();
  } else if (action === "club-upgrade") {
    spendCoins(300);
    state.clubLevel += 1;
    render();
    renderClubFeature();
  } else if (action === "mail-gift") {
    state.mailGiftClaimed = true;
    const fromCoins = state.coins;
    state.coins += 500;
    state.gems += 25;
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderMessagesFeature();
  } else if (action === "friendly") {
    const fromCoins = state.coins;
    state.coins += 35;
    state.log = [`Freundschaftsspiel gegen ${target.dataset.name}. +35 Coins.`, ...state.log].slice(0, 8);
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderFriendsFeature();
  }
}

function handleFeatureChange(event) {
  const field = event.target.closest("[data-feature-filter]");
  if (!field) return;
  const scope = field.dataset.featureFilter;
  const type = field.dataset.filterType;
  const filters = ownedFilterState(scope);
  if (type === "league") {
    filters.league = field.value;
    filters.club = "Alle Vereine";
    filters.position = "Alle Positionen";
  } else if (type === "club") {
    filters.club = field.value;
    filters.position = "Alle Positionen";
  } else if (type === "position") {
    filters.position = field.value;
  }
  if (scope === "deck") {
    renderDeckFeature();
  } else {
    renderCollectionFeature();
  }
}

function buyPack(target) {
  const cost = Number(target.dataset.cost);
  const currency = target.dataset.currency;
  const minClass = Number(target.dataset.min);
  const maxClass = Number(target.dataset.max);
  const pool = target.dataset.pool || "mixed";
  const positions = parsePackPositions(target.dataset.positions);
  const cardCount = normalizePackCardCount(target.dataset.count);
  const pack = state.boosterPacks.find((item) => item.id === target.dataset.packId);
  const dropRates = pack?.dropRates || defaultDropRates(minClass, maxClass, target.dataset.packId);
  const cardNode = target.closest(".pack-card");
  const packId = target.dataset.packId;
  const isFree = freePackCount(packId) > 0;

  if (isFree) {
    consumeFreePack(packId);
  } else if (currency === "coins") {
    if (!spendCoins(cost)) return;
  } else {
    if (state.gems < cost) return;
    state.gems -= cost;
  }

  target.disabled = true;
  cardNode?.classList.add("is-opening");
  playUiSound("pack");
  vibrate([18, 28, 22, 36, 42]);

  setTimeout(() => {
    const cards = addGeneratedCards(minClass, maxClass, pool, cardCount, dropRates, positions);
    if (isFree) state.log = [`Gratis-Pack geoeffnet: ${pack?.name || "Booster Pack"}.`, ...state.log].slice(0, 8);
    render();
    renderBoosterFeature();
    openFeature("booster");
    showPackReveal(cards);
  }, 780);
}

function previewPackTap(target) {
  const cardNode = target.closest(".pack-card");
  if (!cardNode || cardNode.classList.contains("is-previewing")) return;
  cardNode.classList.add("is-previewing");
  playUiSound("tap");
  vibrate(12);
  setTimeout(() => cardNode.classList.remove("is-previewing"), 420);
}

function addGeneratedCard(minClass, maxClass, pool = "mixed", dropRates = null, positions = []) {
  const card = drawGameCard(minClass, maxClass, pool, dropRates, positions);
  state.deck.push(card);
  state.log = [`Neue Karte: ${card.name} (${teamClasses[card.cls]}).`, ...state.log].slice(0, 8);
  return card;
}

function addGeneratedCards(minClass, maxClass, pool = "mixed", count = 1, dropRates = null, positions = []) {
  const cards = Array.from({ length: normalizePackCardCount(count) }, () => drawGameCard(minClass, maxClass, pool, dropRates, positions));
  state.deck.push(...cards);
  const best = bestPulledCard(cards);
  state.log = [`Pack geoeffnet: ${cards.length} ${cards.length === 1 ? "Karte" : "Karten"}, beste Karte ${best.name} (${teamClasses[best.cls]}).`, ...state.log].slice(0, 8);
  return cards;
}

function bestPulledCard(cards) {
  return [...cards].sort((a, b) => rating(b) - rating(a))[0];
}

function freePackCount(packId) {
  state.freePacks = state.freePacks || {};
  return Math.max(0, Number(state.freePacks[packId]) || 0);
}

function totalFreePacks() {
  state.freePacks = state.freePacks || {};
  return Object.values(state.freePacks).reduce((sum, count) => sum + Math.max(0, Number(count) || 0), 0);
}

function grantFreePack(packId, count = 1) {
  state.freePacks = state.freePacks || {};
  state.freePacks[packId] = freePackCount(packId) + Math.max(1, Number(count) || 1);
}

function consumeFreePack(packId) {
  state.freePacks = state.freePacks || {};
  state.freePacks[packId] = Math.max(0, freePackCount(packId) - 1);
  if (state.freePacks[packId] <= 0) delete state.freePacks[packId];
}

function claimMission(target) {
  const id = target.dataset.mission;
  if (state.claimedMissions.includes(id)) return;
  state.claimedMissions.push(id);
  const fromCoins = state.coins;
  state.coins += Number(target.dataset.reward);
  render();
  animateCoinChange(fromCoins, state.coins, target);
  renderLeagueFeature();
}

function runCareerMatch(mode, target) {
  const career = state.career;
  const opponent = careerOpponentForTier(career.tier, career.seasonGame + (mode === "challenge" ? 2 : 0));
  const match = simulateOfflineMatch(opponent, mode);
  const result = match.home > match.away ? "win" : match.home === match.away ? "draw" : "loss";
  const poolRewards = mode === "quick" ? applyQuickRewardPool(result) : [];
  const coins = mode === "quick" ? 0 : result === "win" ? (mode === "challenge" ? 95 : 65) : result === "draw" ? 35 : 20;
  const xp = mode === "quick" ? 0 : result === "win" ? (mode === "challenge" ? 42 : 28) : result === "draw" ? 16 : 10;
  const gems = mode === "quick" ? 0 : result === "win" && rand(1, 100) <= (mode === "challenge" ? 18 : 8) ? 1 : 0;
  const fromCoins = state.coins;

  state.coins += coins;
  state.gems += gems;
  career.xp += xp;
  career.log.unshift(`${modeLabel(mode)}: ${match.home}:${match.away} gegen ${opponent.name}. ${mode === "quick" ? rewardSummary(poolRewards) : `+${coins} Coins, +${xp} XP${gems ? ", +1 Diamant" : ""}`}.`);
  career.log = career.log.slice(0, 6);

  if (mode === "season") {
    career.seasonGame += 1;
    career.goalsFor += match.home;
    career.goalsAgainst += match.away;
    career.record[result] += 1;
    career.points += result === "win" ? 3 : result === "draw" ? 1 : 0;
    finishCareerSeasonIfNeeded();
  }

  if (result === "win" && rand(1, 100) <= 18) {
    grantFreePack("pack-bronze", 1);
    career.log.unshift("Bonus: 1 Gratis Bronze Pack erhalten.");
  }

  state.log = [`Offline ${modeLabel(mode)}: ${match.home}:${match.away} gegen ${opponent.name}.`, ...match.log, ...state.log].slice(0, 8);
  render();
  animateCoinChange(fromCoins, state.coins, target);
  renderCareerFeature();
}

function applyQuickRewardPool(result) {
  const rewards = normalizeQuickRewardPool(state.rewardPools?.quick).filter((reward) => reward.active);
  const won = result === "win";
  const applied = [];
  rewards.forEach((reward) => {
    const chance = won ? reward.chance : Math.round(reward.chance * 0.45);
    if (rand(1, 100) > chance) return;
    if (reward.type === "coins") {
      state.coins += reward.amount;
      applied.push(`+${reward.amount} Coins`);
    } else if (reward.type === "gems") {
      state.gems += reward.amount;
      applied.push(`+${reward.amount} Diamanten`);
    } else if (reward.type === "xp") {
      state.career.xp += reward.amount;
      applied.push(`+${reward.amount} XP`);
    } else if (reward.type === "freePack") {
      grantFreePack(reward.packId, reward.amount);
      applied.push(`+${reward.amount} Gratis-Pack`);
    } else if (reward.type === "card") {
      const card = drawGameCard(reward.classIndex, reward.classIndex, "mixed");
      state.deck.push(card);
      applied.push(`${teamClasses[reward.classIndex]} Karte`);
    }
  });
  if (!applied.length) {
    state.coins += 10;
    applied.push("+10 Trost-Coins");
  }
  return applied;
}

function rewardSummary(rewards) {
  return rewards.length ? rewards.join(", ") : "Keine Belohnung";
}

function simulateOfflineMatch(opponent, mode) {
  const lineup = buildFormationLineup(activeMatchCards(), selectedFormation).lineup;
  const selectedCards = lineupCards(lineup);
  let availableCards = [...selectedCards];
  const opponentBoost = mode === "challenge" ? 12 : mode === "quick" ? -4 : 0;
  const result = { home: 0, away: 0, log: [] };

  drawMatchSituations(5).forEach((situation) => {
    if (!availableCards.length) availableCards = [...selectedCards];
    const card = chooseCardForMatchSituation(availableCards, lineup, situation);
    availableCards = availableCards.filter((item) => item.id !== card.id);
    const tacticBonus = selectedTactic === situation.tactic ? 6 : 0;
    const playerPower = situationPower(card, situation) + tacticBonus + rand(0, 14);
    const opponentPower = opponent.power + opponentBoost + rand(-10, 15);
    if (playerPower >= opponentPower + 7) {
      result.home += 1;
      result.log.unshift(`${situation.label}: ${card.name} setzt sich durch.`);
    } else if (opponentPower >= playerPower + 9) {
      result.away += 1;
      result.log.unshift(`${situation.label}: ${opponent.name} gewinnt die Szene.`);
    } else {
      result.log.unshift(`${situation.label}: ausgeglichen.`);
    }
  });

  return result;
}

function finishCareerSeasonIfNeeded() {
  const career = state.career;
  if (career.seasonGame < 10) return;
  const promoted = career.points >= 18;
  if (promoted && career.tier > 1) {
    career.tier -= 1;
    career.log.unshift(`Saison beendet: Aufstieg in ${careerTierName(career.tier)}.`);
  } else {
    career.log.unshift(`Saison beendet: ${career.points} Punkte. Liga gehalten.`);
  }
  career.seasonGame = 0;
  career.points = 0;
  career.goalsFor = 0;
  career.goalsAgainst = 0;
  career.record = { win: 0, draw: 0, loss: 0 };
}

function careerOpponentForTier(tier, offset = 0) {
  const index = clamp((8 - tier + offset) % careerOpponents.length, 0, careerOpponents.length - 1);
  return {
    name: careerOpponents[index],
    power: clamp(42 + (8 - tier) * 8 + offset * 2 + rand(-3, 5), 38, 112),
  };
}

function careerTeamPower() {
  const selectedCards = state.selected.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  const cards = selectedCards.length ? selectedCards : state.deck.slice(0, MATCH_CARD_COUNT);
  return Math.round(cards.reduce((sum, card) => sum + rating(card), 0) / Math.max(1, cards.length) * 5.4);
}

function careerDisplayPower(power) {
  return Math.round(power * 5.4);
}

function careerTierName(tier) {
  if (tier <= 1) return "Champions Cup";
  if (tier === 2) return "Bundesliga";
  return `Liga ${tier}`;
}

function modeLabel(mode) {
  return {
    season: "Karriere",
    quick: "Schnelles Spiel",
    challenge: "Herausforderung",
  }[mode] || "Offline";
}

function claimDailyBonus() {
  if (state.dailyClaimed) {
    openFeature("messages");
    return;
  }
  state.dailyClaimed = true;
  const fromCoins = state.coins;
  state.coins += 750;
  state.gems += 15;
  state.log = ["Taeglicher Bonus abgeholt: +750 Coins, +15 Diamanten.", ...state.log].slice(0, 8);
  render();
  animateCoinChange(fromCoins, state.coins, els.dailyBonus);
  openFeature("messages");
}

function spendCoins(amount) {
  if (state.coins < amount) return false;
  state.coins -= amount;
  return true;
}

function animateCoinChange(from, to, origin) {
  const target = els.menuCoins;
  if (!target || from === to) return;
  const duration = Math.min(1100, Math.max(420, Math.abs(to - from) * 4));
  const start = performance.now();
  target.classList.add("coin-counting");
  playUiSound("coins");
  flyCoins(origin || target, target);

  function step(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    target.textContent = formatNumber(Math.round(from + (to - from) * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }
    target.textContent = formatNumber(to);
    target.classList.remove("coin-counting");
  }

  requestAnimationFrame(step);
}

function flyCoins(origin, target) {
  const startBox = origin.getBoundingClientRect();
  const endBox = target.getBoundingClientRect();
  const startX = startBox.left + startBox.width / 2;
  const startY = startBox.top + startBox.height / 2;
  const endX = endBox.left + endBox.width / 2;
  const endY = endBox.top + endBox.height / 2;

  for (let index = 0; index < 9; index += 1) {
    const coin = document.createElement("span");
    coin.className = "flying-coin";
    coin.style.left = `${startX + rand(-18, 18)}px`;
    coin.style.top = `${startY + rand(-12, 12)}px`;
    coin.style.setProperty("--coin-x", `${endX - startX + rand(-22, 22)}px`);
    coin.style.setProperty("--coin-y", `${endY - startY + rand(-18, 18)}px`);
    coin.style.animationDelay = `${index * 32}ms`;
    document.body.appendChild(coin);
    coin.addEventListener("animationend", () => coin.remove(), { once: true });
  }
}

function showPackReveal(cards) {
  const pulledCards = Array.isArray(cards) ? cards : [cards].filter(Boolean);
  if (!pulledCards.length) return;
  const best = bestPulledCard(pulledCards);
  const reveal = document.createElement("div");
  reveal.className = "pack-reveal";
  reveal.innerHTML = `
    <div class="pack-reveal-panel" role="dialog" aria-modal="true" aria-label="Gezogene Karten">
      <div class="pack-reveal-head">
        <span>${pulledCards.length} ${pulledCards.length === 1 ? "neue Karte" : "neue Karten"}</span>
        <strong>Beste Karte: ${rating(best)} ${escapeHtml(best.name)}</strong>
        <button type="button" class="pack-reveal-close" aria-label="Pack-Reveal schliessen">Schliessen</button>
      </div>
      <div class="pack-reveal-grid">
        ${pulledCards.map(renderPackRevealCard).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(reveal);
  playUiSound("reveal");
  setTimeout(() => reveal.classList.add("is-visible"), 20);
  const closeReveal = () => {
    reveal.classList.remove("is-visible");
    reveal.addEventListener("transitionend", () => reveal.remove(), { once: true });
  };
  reveal.querySelector(".pack-reveal-close")?.addEventListener("click", closeReveal);
  reveal.addEventListener("click", (event) => {
    if (event.target === reveal) closeReveal();
  });
}

function renderPackRevealCard(card) {
  const tier = normalizeClassIndex(card.cls);
  const club = getClub(card.club);
  return `
    <article class="pack-reveal-card card-tier-${tier}">
      <div class="pack-reveal-card-top">
        <strong>${rating(card)}</strong>
        <span>${escapeHtml(card.pos)}</span>
        <img src="${club.crest}" alt="${club.name} Wappen" />
      </div>
      <span class="series-badge series-${escapeAttr(cardSeries(card))}">${escapeHtml(cardSeriesLabel(card.series))}</span>
      ${renderCardPhoto(card, "pack-reveal-photo")}
      <b>${escapeHtml(card.name)}</b>
      <i>${teamClasses[tier]} | ${escapeHtml(cardSeriesLabel(card.series))}</i>
    </article>
  `;
}

function vibrate(pattern) {
  if ("vibrate" in navigator) navigator.vibrate(pattern);
}

function playUiSound(kind = "tap") {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = playUiSound.context || new AudioContextClass();
  playUiSound.context = context;
  if (context.state === "suspended") context.resume();

  const settings = {
    tap: [360, 0.045, 0.04],
    play: [180, 0.08, 0.075],
    pack: [260, 0.14, 0.08],
    reveal: [520, 0.16, 0.09],
    coins: [820, 0.12, 0.06],
  }[kind] || [360, 0.05, 0.04];
  const [frequency, length, gainValue] = settings;
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = kind === "coins" ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(80, frequency * 0.58), now + length);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + length);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + length + 0.02);
}

function calculateChemistry() {
  const active = state.selected.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  const clubs = active.reduce((counts, card) => {
    counts[card.club] = (counts[card.club] || 0) + 1;
    return counts;
  }, {});
  const best = Math.max(1, ...Object.values(clubs));
  return Math.round((best / MATCH_CARD_COUNT) * 100);
}

function openAdminCenter() {
  const user = activeUser();
  if (!canOpenAdmin(user)) {
    openLoginPanel(`Admin Center nur fuer Owner, Admins und Moderatoren. Aktuell: ${user.role}.`);
    return;
  }
  renderAdminControls();
  els.adminCenter.classList.remove("is-hidden");
  markAdminContentViews();
  setActiveAdminNav("events");
  setAdminContentView("events");
}

function closeAdminCenter() {
  els.adminCenter.classList.add("is-hidden");
}

function openLoginPanel(message = "") {
  renderLoginPanel();
  els.loginStatus.textContent = message || "Waehle deinen Account und gib die PIN ein.";
  els.loginPanel.classList.remove("is-hidden");
  els.loginPin.focus();
}

function closeLoginPanel() {
  els.loginPanel.classList.add("is-hidden");
}

function renderLoginPanel() {
  els.loginUserSelect.innerHTML = state.adminUsers
    .map((user) => `<option value="${escapeAttr(user.id)}" ${user.id === state.activeUserId ? "selected" : ""}>${escapeHtml(user.name)} - ${escapeHtml(user.role)}${user.locked ? " - gesperrt" : ""}</option>`)
    .join("");
  const user = activeUser();
  els.loginActiveName.textContent = user.name;
  els.loginActiveRole.textContent = user.role;
  els.loginActiveAvatar.textContent = userInitials(user.name);
  els.profileNameInput.value = user.name;
  els.profileEmailInput.value = user.email;
  els.profilePinInput.value = user.pin;
  els.loginPin.value = "";
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const user = state.adminUsers.find((item) => item.id === els.loginUserSelect.value);
  if (!user) {
    els.loginStatus.textContent = "Benutzer nicht gefunden.";
    return;
  }
  if (user.locked) {
    els.loginStatus.textContent = `${user.name} ist gesperrt.`;
    return;
  }
  if (!verifyPin(user, els.loginPin.value)) {
    els.loginStatus.textContent = "PIN stimmt nicht.";
    return;
  }
  syncActiveUserWallet();
  state.activeUserId = user.id;
  loadActiveUserWallet();
  els.loginStatus.textContent = `Eingeloggt als ${user.name} (${user.role}).`;
  updateAccountUi();
  render();
  saveState();
  setTimeout(closeLoginPanel, 350);
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const user = activeUser();
  user.name = (els.profileNameInput.value || user.name).trim();
  user.email = normalizeEmail(els.profileEmailInput.value, user.name);
  user.pin = normalizePin(els.profilePinInput.value, user.role);
  els.loginStatus.textContent = "Profil gespeichert.";
  updateAccountUi();
  renderLoginPanel();
  renderAdminUsers();
  saveState();
}

function initAdminControls() {
  fillSelect(els.adminLeagueSelect, leagues);
  fillValueSelect(els.adminClassSelect, classSelectOptions());
  fillValueSelect(els.adminCardClass, classSelectOptions());
  fillValueSelect(els.adminBoosterMinClass, classSelectOptions());
  fillValueSelect(els.adminBoosterMaxClass, classSelectOptions());
  fillValueSelect(els.adminBoosterPool, packPoolOptions());
  fillValueSelect(els.adminBoosterPositions, packPositionOptions());
  fillAdminDatabaseFilters();
  renderAdminControls();
  markAdminContentViews();
}

function renderAdminControls() {
  updateAccountUi();
  els.adminLpInput.value = state.lp;
  els.adminLeagueSelect.value = state.leagueIndex;
  els.adminClassSelect.value = state.teamClassIndex;
  els.adminCardClass.value = state.teamClassIndex;
  els.adminBoosterMinClass.value = 0;
  els.adminBoosterMaxClass.value = Math.min(5, teamClasses.length - 1);
  els.adminBoosterCardCount.value = 1;
  els.adminBoosterPool.value = "mixed";
  els.adminBoosterPositions.value = "all";
  renderAdminEvents();
  renderAdminBoosters();
  renderAdminUsers();
  renderAdminRewardPools();
  renderAdminDatabase();
}

function renderAdminUsers() {
  if (!state.adminUsers.length) {
    state.adminUsers = defaultAdminUsers();
  }
  syncActiveUserWallet();
  renderAdminWalletTools();
  els.adminUserList.innerHTML = state.adminUsers
    .map((user) => {
      const wallet = userWallet(user);
      return `
      <article class="${user.locked ? "locked" : ""} ${user.id === state.activeUserId ? "active-user" : ""}" data-user-id="${user.id}">
        <label>Name<input data-user-field="name" type="text" value="${escapeAttr(user.name)}" /></label>
        <label>E-Mail<input data-user-field="email" type="email" value="${escapeAttr(user.email)}" /></label>
        <select data-user-action="role">
          ${["Owner", "Admin", "Moderator", "User"].map((role) => `<option value="${role}" ${role === user.role ? "selected" : ""}>${role}</option>`).join("")}
        </select>
        <label>PIN<input data-user-field="pin" type="text" inputmode="numeric" value="${escapeAttr(user.pin)}" /></label>
        <span>${user.id === state.activeUserId ? "Aktiv | " : ""}${user.locked ? "Gesperrt" : "Freigegeben"}<br />${formatNumber(wallet.coins)} Credits | ${formatNumber(wallet.gems)} Diamanten</span>
        <button type="button" data-user-action="save">Speichern</button>
        <button type="button" data-user-action="lock" ${user.role === "Owner" ? "disabled" : ""}>${user.locked ? "Entsperren" : "Sperren"}</button>
        <button class="danger" type="button" data-user-action="delete" ${user.role === "Owner" ? "disabled" : ""}>Entfernen</button>
      </article>
    `;
    })
    .join("");
}

function renderAdminWalletTools() {
  if (!els.adminWalletUser) return;
  const previous = els.adminWalletUser.value || state.activeUserId;
  els.adminWalletUser.innerHTML = state.adminUsers
    .map((user) => `<option value="${escapeAttr(user.id)}">${escapeHtml(user.name)} - ${escapeHtml(user.role)}</option>`)
    .join("");
  els.adminWalletUser.value = state.adminUsers.some((user) => user.id === previous) ? previous : state.activeUserId;
}

function grantAdminWallet() {
  const currentUser = activeUser();
  if (!["Owner", "Admin"].includes(currentUser.role)) {
    setAdminStatus("Nur Owner und Admins duerfen Wallets gutschreiben.");
    return;
  }
  const user = state.adminUsers.find((item) => item.id === els.adminWalletUser.value);
  if (!user) {
    setAdminStatus("Benutzer fuer Gutschrift nicht gefunden.");
    return;
  }
  const coins = Math.max(0, Math.round(Number(els.adminWalletCoins.value) || 0));
  const gems = Math.max(0, Math.round(Number(els.adminWalletGems.value) || 0));
  const wallet = userWallet(user);
  wallet.coins += coins;
  wallet.gems += gems;
  user.wallet = wallet;
  if (user.id === state.activeUserId) {
    state.coins = wallet.coins;
    state.gems = wallet.gems;
  }
  state.log = [`Admin-Gutschrift fuer ${user.name}: +${formatNumber(coins)} Credits, +${formatNumber(gems)} Diamanten.`, ...state.log].slice(0, 8);
  setAdminStatus(`${user.name} erhielt ${formatNumber(coins)} Credits und ${formatNumber(gems)} Diamanten.`);
  render();
  renderAdminUsers();
  saveState();
}

function renderAdminRewardPools() {
  const list = document.querySelector("#quickRewardPoolList");
  if (!list) return;
  const rewards = normalizeQuickRewardPool(state.rewardPools?.quick);
  const packOptions = state.boosterPacks
    .map((pack) => `<option value="${escapeAttr(pack.id)}">${escapeHtml(pack.name)}</option>`)
    .join("");
  list.innerHTML = rewards.map((reward, index) => `
    <article class="reward-pool-row" data-reward-index="${index}">
      <label>Aktiv
        <select data-reward-field="active">
          <option value="true" ${reward.active ? "selected" : ""}>Ja</option>
          <option value="false" ${!reward.active ? "selected" : ""}>Nein</option>
        </select>
      </label>
      <label>Typ
        <select data-reward-field="type">
          ${["coins", "gems", "xp", "freePack", "card"].map((type) => `<option value="${type}" ${reward.type === type ? "selected" : ""}>${rewardTypeLabel(type)}</option>`).join("")}
        </select>
      </label>
      <label>Menge<input data-reward-field="amount" type="number" min="1" step="1" value="${reward.amount}" /></label>
      <label>Chance %<input data-reward-field="chance" type="number" min="0" max="100" step="1" value="${reward.chance}" /></label>
      <label>Pack
        <select data-reward-field="packId">${packOptions}</select>
      </label>
      <label>Klasse
        <select data-reward-field="classIndex">
          ${teamClasses.map((_, classIndex) => `<option value="${classIndex}" ${classIndex === reward.classIndex ? "selected" : ""}>${escapeHtml(classLabel(classIndex))}</option>`).join("")}
        </select>
      </label>
    </article>
  `).join("");
  rewards.forEach((reward, index) => {
    const row = list.querySelector(`[data-reward-index="${index}"]`);
    const packSelect = row?.querySelector('[data-reward-field="packId"]');
    if (packSelect) packSelect.value = reward.packId;
  });
}

function saveQuickRewardPool() {
  const rows = [...document.querySelectorAll("#quickRewardPoolList [data-reward-index]")];
  state.rewardPools = state.rewardPools || {};
  state.rewardPools.quick = rows.map((row) => ({
    active: row.querySelector('[data-reward-field="active"]').value === "true",
    type: row.querySelector('[data-reward-field="type"]').value,
    amount: Math.max(1, Number(row.querySelector('[data-reward-field="amount"]').value) || 1),
    chance: clamp(Number(row.querySelector('[data-reward-field="chance"]').value) || 0, 0, 100),
    packId: row.querySelector('[data-reward-field="packId"]').value || "pack-bronze",
    classIndex: normalizeClassIndex(row.querySelector('[data-reward-field="classIndex"]').value),
  }));
  renderAdminRewardPools();
  setAdminStatus("Preis-Pool fuer Schnelles KI-Spiel gespeichert.");
  saveState();
}

function handleAdminUserAction(event) {
  const row = event.target.closest("[data-user-id]");
  if (!row) return;
  const user = state.adminUsers.find((item) => item.id === row.dataset.userId);
  if (!user) return;
  const action = event.target.dataset.userAction;
  if (!action) return;

  if (action === "role") {
    user.role = event.target.value;
    user.pin = user.pin || defaultPinForRole(user.role);
    setAdminStatus(`${user.name} ist jetzt ${user.role}.`);
  } else if (action === "save") {
    user.name = (row.querySelector('[data-user-field="name"]')?.value || user.name).trim();
    user.email = normalizeEmail(row.querySelector('[data-user-field="email"]')?.value, user.name);
    user.role = row.querySelector('[data-user-action="role"]')?.value || user.role;
    user.pin = normalizePin(row.querySelector('[data-user-field="pin"]')?.value, user.role);
    setAdminStatus(`${user.name} wurde gespeichert.`);
  } else if (action === "lock" && user.role !== "Owner") {
    user.locked = !user.locked;
    if (user.id === state.activeUserId && user.locked) state.activeUserId = normalizeActiveUserId(user.id, state.adminUsers);
    setAdminStatus(`${user.name} wurde ${user.locked ? "gesperrt" : "entsperrt"}.`);
  } else if (action === "delete" && user.role !== "Owner") {
    state.adminUsers = state.adminUsers.filter((item) => item.id !== user.id);
    if (user.id === state.activeUserId) state.activeUserId = normalizeActiveUserId(user.id, state.adminUsers);
    setAdminStatus(`${user.name} wurde entfernt.`);
  }
  updateAccountUi();
  renderAdminUsers();
  saveState();
}

function addAdminUser() {
  const name = (els.adminNewUserName.value || "Neuer Benutzer").trim();
  const role = els.adminNewUserRole.value || "Moderator";
  const user = {
    id: `admin-user-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    email: normalizeEmail("", name),
    role,
    pin: defaultPinForRole(role),
    locked: false,
    wallet: { coins: 0, gems: 0 },
  };
  state.adminUsers.push(user);
  els.adminNewUserName.value = "";
  renderAdminUsers();
  setAdminStatus(`${name} wurde als ${role} angelegt.`);
  saveState();
}

function activeUser() {
  if (!state.adminUsers.length) state.adminUsers = defaultAdminUsers();
  let user = state.adminUsers.find((item) => item.id === state.activeUserId && !item.locked);
  if (!user) {
    state.activeUserId = normalizeActiveUserId(state.activeUserId, state.adminUsers);
    user = state.adminUsers.find((item) => item.id === state.activeUserId) || state.adminUsers[0];
  }
  return user;
}

function canOpenAdmin(user) {
  return ["Owner", "Admin", "Moderator"].includes(user.role) && !user.locked;
}

function verifyPin(user, pin) {
  return String(pin || "") === String(user.pin || defaultPinForRole(user.role));
}

function updateAccountUi() {
  const user = activeUser();
  const initials = userInitials(user.name);
  els.headerUserName.textContent = user.name;
  els.headerUserRole.textContent = "LEVEL 25";
  els.headerAvatar.textContent = initials;
  els.adminHeaderName.textContent = user.name;
  els.adminHeaderRole.textContent = user.role;
  els.adminHeaderAvatar.textContent = initials;
  els.loginActiveName.textContent = user.name;
  els.loginActiveRole.textContent = user.role;
  els.loginActiveAvatar.textContent = initials;
}

function userInitials(name) {
  const cleaned = String(name || "LC").replace(/[^A-Za-z0-9\u00c0-\u017f]+/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return cleaned.slice(0, 2).toUpperCase() || "LC";
}

function normalizeEmail(email, name) {
  const trimmed = String(email || "").trim();
  if (trimmed.includes("@")) return trimmed;
  const slug = String(name || "user").toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "") || "user";
  return `${slug}@liga-clash.local`;
}

function normalizePin(pin, role = "User") {
  const trimmed = String(pin || "").trim();
  return trimmed.length >= 4 ? trimmed : defaultPinForRole(role);
}

function renderAdminBoosters() {
  els.adminBoosterList.innerHTML = state.boosterPacks.length
    ? state.boosterPacks.map((pack) => {
      const normalizedPack = normalizeBoosterPack(pack);
      const imageOptions = boosterImageOptions()
        .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === pack.image ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
        .join("");
      const minClassOptions = teamClasses
        .map((_, index) => `<option value="${index}" ${index === pack.minClass ? "selected" : ""}>${escapeHtml(classLabel(index))}</option>`)
        .join("");
      const maxClassOptions = teamClasses
        .map((_, index) => `<option value="${index}" ${index === pack.maxClass ? "selected" : ""}>${escapeHtml(classLabel(index))}</option>`)
        .join("");
      const poolOptions = packPoolOptions()
        .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === pack.pool ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
        .join("");
      const positionValue = packPositionOptionValue(pack.positions);
      const positionOptions = packPositionOptions()
        .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === positionValue ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
        .join("");
      const dropRateInputs = teamClasses
        .map((name, index) => `
          <label>
            ${escapeHtml(classLabel(index))}
            <input data-pack-drop-rate="${index}" type="number" min="0" max="100" step="0.1" value="${normalizedPack.dropRates[index] ?? 0}" />
          </label>
        `)
        .join("");
      return `
      <article class="${pack.active ? "" : "disabled"}" data-pack-id="${pack.id}">
        <div class="admin-booster-art">
          ${pack.image ? `<img src="${escapeAttr(pack.image)}" alt="${escapeAttr(pack.name)}" />` : `<span>${escapeHtml(pack.name.slice(0, 2))}</span>`}
        </div>
        <div class="admin-booster-editor">
          <label>Name<input data-pack-field="name" value="${escapeAttr(pack.name)}" /></label>
          <label>Preis<input data-pack-field="cost" type="number" min="0" step="1" value="${pack.cost}" /></label>
          <label>Waehrung
            <select data-pack-field="currency">
              <option value="coins" ${pack.currency === "coins" ? "selected" : ""}>Coins</option>
              <option value="gems" ${pack.currency === "gems" ? "selected" : ""}>Diamanten</option>
            </select>
          </label>
          <label>Von<select data-pack-field="minClass">${minClassOptions}</select></label>
          <label>Bis<select data-pack-field="maxClass">${maxClassOptions}</select></label>
          <label>Karten<input data-pack-field="cardCount" type="number" min="1" max="20" step="1" value="${pack.cardCount}" /></label>
          <label>Pool<select data-pack-field="pool">${poolOptions}</select></label>
          <label>Positionen<select data-pack-field="positions">${positionOptions}</select></label>
          <label>Bild<select data-pack-field="image">${imageOptions}</select></label>
          <fieldset class="drop-rate-grid">
            <legend>Drop-Rate nach Klasse</legend>
            ${dropRateInputs}
          </fieldset>
          <label class="wide">Beschreibung<textarea data-pack-field="description" rows="2">${escapeHtml(pack.description)}</textarea></label>
          <span>${pack.active ? "Aktiv" : "Deaktiviert"} | ${pack.cardCount} ${pack.cardCount === 1 ? "Karte" : "Karten"} | ${teamClasses[pack.minClass]} bis ${teamClasses[pack.maxClass]} | ${escapeHtml(packPoolLabel(pack.pool))} | ${escapeHtml(packPositionLabel(pack.positions))}</span>
        </div>
        <div class="admin-booster-actions">
          <button type="button" data-pack-action="save">Speichern</button>
          <button type="button" data-pack-action="toggle">${pack.active ? "Deaktivieren" : "Aktivieren"}</button>
          <button class="danger" type="button" data-pack-action="delete">Loeschen</button>
        </div>
      </article>
    `;
    }).join("")
    : `<p class="empty-admin-list">Keine Booster angelegt.</p>`;
}

function createAdminBooster() {
  const minClass = clamp(Number(els.adminBoosterMinClass.value) || 0, 0, teamClasses.length - 1);
  const maxClass = clamp(Number(els.adminBoosterMaxClass.value) || minClass, minClass, teamClasses.length - 1);
  const image = els.adminBoosterImage.value;
  const pack = normalizeBoosterPack({
    id: `pack-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: els.adminBoosterName.value.trim() || "Neuer Booster",
    cost: Number(els.adminBoosterCost.value) || 0,
    currency: els.adminBoosterCurrency.value,
    minClass,
    maxClass,
    cardCount: normalizePackCardCount(els.adminBoosterCardCount.value),
    pool: normalizePackPool(els.adminBoosterPool.value),
    positions: packPositionsFromOption(els.adminBoosterPositions.value),
    dropRates: defaultDropRates(minClass, maxClass),
    description: els.adminBoosterDescription.value.trim() || "Neuer Booster fuer den Pack-Shop.",
    image,
    tier: packTierFromImage(image),
    active: true,
  });
  state.boosterPacks.push(pack);
  resetAdminBoosterForm();
  renderAdminBoosters();
  setAdminStatus(`${pack.name} wurde angelegt.`);
  saveState();
}

function resetAdminBoosterForm() {
  els.adminBoosterName.value = "";
  els.adminBoosterCost.value = 100;
  els.adminBoosterCurrency.value = "coins";
  els.adminBoosterMinClass.value = 0;
  els.adminBoosterMaxClass.value = Math.min(5, teamClasses.length - 1);
  els.adminBoosterCardCount.value = 1;
  els.adminBoosterPool.value = "mixed";
  els.adminBoosterPositions.value = "all";
  els.adminBoosterImage.value = "";
  els.adminBoosterDescription.value = "";
}

function handleAdminBoosterAction(event) {
  const button = event.target.closest("[data-pack-action]");
  const row = event.target.closest("[data-pack-id]");
  if (!button || !row) return;
  const pack = state.boosterPacks.find((item) => item.id === row.dataset.packId);
  if (!pack) return;

  if (button.dataset.packAction === "save") {
    const minClass = normalizeClassIndex(row.querySelector('[data-pack-field="minClass"]').value);
    const maxClass = clamp(normalizeClassIndex(row.querySelector('[data-pack-field="maxClass"]').value), minClass, teamClasses.length - 1);
    pack.name = row.querySelector('[data-pack-field="name"]').value.trim() || pack.name;
    pack.cost = Math.max(0, Number(row.querySelector('[data-pack-field="cost"]').value) || 0);
    pack.currency = row.querySelector('[data-pack-field="currency"]').value === "gems" ? "gems" : "coins";
    pack.minClass = minClass;
    pack.maxClass = maxClass;
    pack.cardCount = normalizePackCardCount(row.querySelector('[data-pack-field="cardCount"]').value);
    pack.pool = normalizePackPool(row.querySelector('[data-pack-field="pool"]').value);
    pack.positions = packPositionsFromOption(row.querySelector('[data-pack-field="positions"]').value);
    pack.dropRates = readDropRates(row, minClass, maxClass);
    pack.image = row.querySelector('[data-pack-field="image"]').value;
    pack.tier = packTierFromImage(pack.image);
    pack.description = row.querySelector('[data-pack-field="description"]').value.trim() || pack.description;
    setAdminStatus(`${pack.name} wurde gespeichert.`);
  } else if (button.dataset.packAction === "toggle") {
    pack.active = !pack.active;
    setAdminStatus(`${pack.name} wurde ${pack.active ? "aktiviert" : "deaktiviert"}.`);
  } else if (button.dataset.packAction === "delete") {
    state.boosterPacks = state.boosterPacks.filter((item) => item.id !== pack.id);
    setAdminStatus(`${pack.name} wurde geloescht.`);
  }

  renderAdminBoosters();
  saveState();
}

function renderAdminEvents() {
  if (!state.events.some((event) => event.id === state.selectedAdminEventId)) {
    state.selectedAdminEventId = state.events[0]?.id || null;
  }

  const list = document.querySelector("#adminEventList");
  const details = document.querySelector("#adminEventDetails");
  const categories = document.querySelector("#adminEventCategories");
  const selected = state.events.find((event) => event.id === state.selectedAdminEventId);

  renderAdminCalendar();

  list.innerHTML = state.events.length
    ? state.events
    .map((event) => `
      <article class="${event.id === state.selectedAdminEventId ? "selected" : ""} ${event.active ? "" : "disabled"}" data-event-id="${event.id}">
        <b>${escapeHtml(event.title)}</b>
        <span>${escapeHtml(event.type)}${event.active ? "" : " | Deaktiviert"}</span>
        <em>${escapeHtml(event.date)} ${escapeHtml(event.startTime || "00:00")}</em>
      </article>
    `)
    .join("")
    : `<p class="empty-admin-list">Keine anstehenden Events angelegt.</p>`;

  if (!selected) {
    details.innerHTML = `<h3>Event Details</h3><p>Keine Events angelegt.</p>`;
  } else {
    const [day, month] = selected.date.split(".");
    const typeOptions = eventTypes()
      .map((type) => `<option value="${escapeAttr(type)}" ${type === selected.type ? "selected" : ""}>${escapeHtml(type)}</option>`)
      .join("");
    details.innerHTML = `
      <h3>Event Details</h3>
      <div class="event-detail-card ${selected.active ? "" : "is-disabled"}">
        <div class="event-pack"></div>
        <div class="event-date"><strong>${day}</strong><span>${monthName(month)}</span></div>
        <div>
          <h4>${escapeHtml(selected.title)}</h4>
          <b>${escapeHtml(selected.type)}</b>
          <p>Start: ${escapeHtml(selected.date)} ${escapeHtml(selected.startTime || "00:00")}<br />Ende: ${escapeHtml(selected.endDate || selected.date)} ${escapeHtml(selected.endTime || "23:59")}<br />Status: ${selected.active ? "Aktiv" : "Deaktiviert"}</p>
        </div>
      </div>
      <div class="event-edit-form">
        <label>Eventname<input id="adminEventTitle" value="${escapeAttr(selected.title)}" /></label>
        <label>Typ<select id="adminEventType">${typeOptions}</select></label>
        <label>Startdatum<input id="adminEventDate" value="${escapeAttr(selected.date)}" placeholder="05.07.2026" /></label>
        <label>Startzeit<input id="adminEventStartTime" type="time" value="${escapeAttr(selected.startTime || "00:00")}" /></label>
        <label>Enddatum<input id="adminEventEndDate" value="${escapeAttr(selected.endDate || selected.date)}" placeholder="06.07.2026" /></label>
        <label>Endzeit<input id="adminEventEndTime" type="time" value="${escapeAttr(selected.endTime || "23:59")}" /></label>
        <label class="wide">Beschreibung<textarea id="adminEventDescription" rows="3">${escapeHtml(selected.description)}</textarea></label>
      </div>
      <h4>Belohnungen</h4>
      <div class="event-rewards">
        ${selected.rewards.map((reward) => `<span>${escapeHtml(reward)}</span>`).join("")}
      </div>
      <div class="event-actions">
        <button type="button" data-event-action="save">Speichern</button>
        <button type="button" data-event-action="toggle">${selected.active ? "Deaktivieren" : "Aktivieren"}</button>
        <button class="danger" type="button" data-event-action="delete">Loeschen</button>
        <button type="button" data-event-action="duplicate">Duplizieren</button>
      </div>
    `;
  }

  const counts = state.events.reduce((map, event) => {
    map[event.type] = (map[event.type] || 0) + 1;
    return map;
  }, {});
  categories.innerHTML = `
    <h3>Event Kategorien</h3>
    ${eventTypes()
      .map((type) => `<p><span>${type}</span><b>${counts[type] || 0}</b></p>`)
      .join("")}
  `;
}

function renderAdminCalendar() {
  const calendar = document.querySelector("#adminCalendarGrid");
  if (!calendar) return;
  calendar.innerHTML = renderCalendarCells(state.events.filter((event) => event.active), state.selectedAdminEventId);
}

function renderCalendarCells(activeEvents, selectedEventId) {
  const days = [
    { label: "29", muted: true },
    { label: "30", muted: true },
    ...Array.from({ length: 31 }, (_, index) => ({ label: String(index + 1).padStart(2, "0"), day: index + 1 })),
    { label: "01", muted: true },
    { label: "02", muted: true },
  ];

  return days
    .map((day) => {
      const eventsForDay = day.day
        ? activeEvents.filter((event) => eventDay(event.date) === day.day)
        : [];
      const selected = eventsForDay.some((event) => event.id === selectedEventId);
      const eventBadges = eventsForDay
        .slice(0, 2)
        .map((event) => `
          <em class="event ${eventCssClass(event.type)}" data-event-id="${event.id}">
            ${eventCalendarLabel(event.title)}
          </em>
        `)
        .join("");
      const marker = eventsForDay.length ? "<i></i>" : "";
      return `<div class="${day.muted ? "muted" : ""} ${selected ? "selected" : ""}"><b>${day.label}</b>${marker}${eventBadges}</div>`;
    })
    .join("");
}

function renderPlayerEventDetails(event) {
  const [day, month] = event.date.split(".");
  const eventPack = state.boosterPacks.find((pack) => pack.id === "pack-silver") || defaultBoosterPacks().find((pack) => pack.id === "pack-silver");
  return `
    <h3>Event Details</h3>
    <div class="event-detail-card">
      <div class="event-pack"></div>
      <div class="event-date"><strong>${escapeHtml(day)}</strong><span>${monthName(month)}</span></div>
      <div>
        <h4>${escapeHtml(event.title)}</h4>
        <b>${escapeHtml(event.type)}</b>
        <p>Start: ${escapeHtml(event.date)} ${escapeHtml(event.startTime || "00:00")}<br />Ende: ${escapeHtml(event.endDate || event.date)} ${escapeHtml(event.endTime || "23:59")}<br />Status: Aktiv</p>
      </div>
    </div>
    <h4>Beschreibung</h4>
    <p>${escapeHtml(event.description)}</p>
    <h4>Belohnungen</h4>
    <div class="event-rewards">
      ${event.rewards.map((reward) => `<span>${escapeHtml(reward)}</span>`).join("")}
    </div>
    <button class="feature-action" type="button" data-feature-action="buy-pack" ${packActionAttributes(eventPack)}>Booster oeffnen</button>
  `;
}

function handleAdminEventListClick(event) {
  const row = event.target.closest("[data-event-id]");
  if (!row) return;
  state.selectedAdminEventId = row.dataset.eventId;
  renderAdminEvents();
  setAdminStatus("Event ausgewaehlt.");
  saveState();
}

function handleAdminEventAction(event) {
  const button = event.target.closest("[data-event-action]");
  if (!button) return;
  const selected = state.events.find((item) => item.id === state.selectedAdminEventId);
  if (!selected) return;

  if (button.dataset.eventAction === "toggle") {
    selected.active = !selected.active;
    setAdminStatus(`${selected.title} wurde ${selected.active ? "aktiviert" : "deaktiviert"}.`);
  } else if (button.dataset.eventAction === "save") {
    const previousType = selected.type;
    selected.title = document.querySelector("#adminEventTitle").value.trim() || selected.title;
    selected.type = document.querySelector("#adminEventType").value || selected.type;
    selected.date = normalizeEventDate(document.querySelector("#adminEventDate").value, selected.date);
    selected.startTime = normalizeEventTime(document.querySelector("#adminEventStartTime").value, selected.startTime || "00:00");
    selected.endDate = normalizeEventDate(document.querySelector("#adminEventEndDate").value, selected.endDate || selected.date);
    selected.endTime = normalizeEventTime(document.querySelector("#adminEventEndTime").value, selected.endTime || "23:59");
    selected.description = document.querySelector("#adminEventDescription").value.trim() || selected.description;
    if (previousType !== selected.type) {
      selected.rewards = rewardForEventType(selected.type);
    }
    setAdminStatus(`${selected.title} wurde gespeichert.`);
  } else if (button.dataset.eventAction === "delete") {
    state.events = state.events.filter((item) => item.id !== selected.id);
    state.selectedAdminEventId = state.events[0]?.id || null;
    setAdminStatus(`${selected.title} wurde geloescht.`);
  } else if (button.dataset.eventAction === "duplicate") {
    const copy = {
      ...selected,
      id: `event-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: `${selected.title} Kopie`,
      active: false,
    };
    state.events.push(copy);
    state.selectedAdminEventId = copy.id;
    setAdminStatus(`${selected.title} wurde dupliziert.`);
  }
  renderAdminEvents();
  saveState();
}

function selectAdminEventTemplate(type) {
  const typeSelect = document.querySelector("#adminNewEventType");
  const titleInput = document.querySelector("#adminNewEventTitle");
  const descriptionInput = document.querySelector("#adminNewEventDescription");
  if (typeSelect) typeSelect.value = type;
  if (titleInput && !titleInput.value.trim()) titleInput.value = `${type} ${state.events.length + 1}`;
  if (descriptionInput && !descriptionInput.value.trim()) descriptionInput.value = `Neues ${type} fuer den Kalender.`;
  setAdminStatus(`${type} als Kategorie ausgewaehlt.`);
}

function createAdminEvent(defaultType = "Spezial Event") {
  const titleInput = document.querySelector("#adminNewEventTitle");
  const typeInput = document.querySelector("#adminNewEventType");
  const dateInput = document.querySelector("#adminNewEventDate");
  const startTimeInput = document.querySelector("#adminNewEventStartTime");
  const endDateInput = document.querySelector("#adminNewEventEndDate");
  const endTimeInput = document.querySelector("#adminNewEventEndTime");
  const descriptionInput = document.querySelector("#adminNewEventDescription");
  const day = String(Math.min(28, 5 + state.events.length * 2)).padStart(2, "0");
  const type = typeInput?.value || defaultType;
  const date = normalizeEventDate(dateInput?.value, `${day}.07.2026`);
  const title = titleInput?.value.trim() || `${type} ${state.events.length + 1}`;
  const event = {
    id: `event-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    type,
    date,
    startTime: normalizeEventTime(startTimeInput?.value, "00:00"),
    endDate: normalizeEventDate(endDateInput?.value, date),
    endTime: normalizeEventTime(endTimeInput?.value, "23:59"),
    description: descriptionInput?.value.trim() || `Neu angelegtes ${type} fuer den Kalender.`,
    rewards: rewardForEventType(type),
    active: true,
  };
  state.events.push(event);
  state.selectedAdminEventId = event.id;
  resetAdminEventForm(type);
  renderAdminEvents();
  setAdminStatus(`${event.title} wurde angelegt.`);
  saveState();
}

function resetAdminEventForm(type = "Spezial Event") {
  const fields = {
    title: document.querySelector("#adminNewEventTitle"),
    type: document.querySelector("#adminNewEventType"),
    date: document.querySelector("#adminNewEventDate"),
    startTime: document.querySelector("#adminNewEventStartTime"),
    endDate: document.querySelector("#adminNewEventEndDate"),
    endTime: document.querySelector("#adminNewEventEndTime"),
    description: document.querySelector("#adminNewEventDescription"),
  };
  if (fields.title) fields.title.value = "";
  if (fields.type) fields.type.value = type;
  if (fields.date) fields.date.value = "";
  if (fields.startTime) fields.startTime.value = "00:00";
  if (fields.endDate) fields.endDate.value = "";
  if (fields.endTime) fields.endTime.value = "23:59";
  if (fields.description) fields.description.value = "";
}

function handleAdminNav(button) {
  const section = button.dataset.adminSection;
  setActiveAdminNav(section);
  setAdminContentView(section);

  const actions = {
    dashboard: {
      selector: ".admin-hero",
      message: "Dashboard-Uebersicht geoeffnet.",
    },
    clubs: {
      selector: ".admin-database",
      message: "Vereine & Ligen geoeffnet.",
      run: () => {
        els.adminDbLeague.value = "Alle Ligen";
        updateAdminDatabaseDropdowns("league");
        renderAdminDatabase();
      },
    },
    import: {
      selector: ".admin-import",
      message: "Spieler-Import geoeffnet.",
      run: () => els.adminDbLeague.focus(),
    },
    cards: {
      selector: ".admin-database",
      message: "Spieler- und Kartendatenbank geoeffnet.",
      run: renderAdminDatabase,
    },
    transfers: {
      selector: ".admin-transfers",
      message: "Transfers & Updates geoeffnet.",
    },
    editor: {
      selector: ".admin-controls",
      message: "Karten-Editor und Testwerkzeuge geoeffnet.",
      run: () => els.adminCardClass.focus(),
    },
    boosters: {
      selector: ".admin-boosters",
      message: "Booster- und Pack-Verwaltung geoeffnet.",
      run: renderAdminBoosters,
    },
    events: {
      selector: ".admin-calendar-board",
      message: "Kalender & Events geoeffnet.",
    },
    missions: {
      selector: ".event-categories",
      message: "Missionen und Event-Kategorien geoeffnet.",
    },
    users: {
      selector: ".admin-users",
      message: "Benutzer & Rechte geoeffnet.",
      run: renderAdminUsers,
    },
    settings: {
      selector: ".admin-reward-pools",
      message: "Einstellungen: Preis-Pools, Rollen und Systeminfos geoeffnet.",
      run: () => {
        renderAdminUsers();
        renderAdminRewardPools();
      },
    },
    logs: {
      selector: ".admin-status",
      message: `Logs: ${state.log.slice(0, 3).join(" | ") || "Keine Eintraege vorhanden."}`,
    },
  };

  const action = actions[section];
  if (!action) return;
  if (action.run) action.run();
  setAdminStatus(action.message);
}

function setActiveAdminNav(section) {
  document.querySelectorAll(".admin-nav [data-admin-section]").forEach((item) => {
    item.classList.toggle("active", item.dataset.adminSection === section);
  });
}

function scrollAdminTo(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setAdminContentView(section) {
  const viewMap = {
    dashboard: [".admin-hero"],
    clubs: [".admin-database"],
    import: [".admin-import"],
    cards: [".admin-database", ".admin-recent"],
    transfers: [".admin-transfers"],
    editor: [".admin-controls"],
    boosters: [".admin-boosters"],
    events: [],
    missions: [".event-categories"],
    users: [".admin-users"],
    settings: [".admin-reward-pools", ".admin-users", ".admin-system"],
    logs: [".admin-system"],
  };
  const visibleSelectors = new Set(viewMap[section] || []);
  document.querySelectorAll("[data-admin-view]").forEach((item) => {
    item.classList.toggle("is-hidden", !visibleSelectors.has(item.dataset.adminView));
  });
}

function markAdminContentViews() {
  const viewSelectors = {
    ".admin-hero": ".admin-hero",
    ".admin-import": ".admin-import",
    ".admin-transfers": ".admin-transfers",
    ".admin-quick": ".admin-quick",
    ".admin-boosters": ".admin-boosters",
    ".admin-controls": ".admin-controls",
    ".admin-database": ".admin-database",
    ".admin-recent": ".admin-recent",
    ".admin-users": ".admin-users",
    ".admin-system": ".admin-system",
    ".admin-reward-pools": ".admin-reward-pools",
    ".event-categories": ".event-categories",
  };
  Object.entries(viewSelectors).forEach(([selector, view]) => {
    const item = document.querySelector(selector);
    if (item) item.dataset.adminView = view;
  });
}

function fillSelect(select, items) {
  select.innerHTML = "";
  items.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = item;
    select.appendChild(option);
  });
}

function fillValueSelect(select, entries) {
  const previous = select.value;
  select.innerHTML = "";
  entries.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  if ([...select.options].some((option) => option.value === previous)) {
    select.value = previous;
  }
}

function classSelectOptions() {
  return teamClasses.map((_, index) => ({ value: index, label: classLabel(index) }));
}

function fillAdminDatabaseFilters() {
  fillValueSelect(
    els.adminDbLeague,
    DB_LEAGUES.map((league) => ({ value: league, label: league }))
  );
  els.adminDbLeague.value = "Alle Ligen";
  updateAdminDatabaseDropdowns("league");
}

function updateAdminDatabaseDropdowns(changed) {
  const selectedLeague = els.adminDbLeague.value || "Alle Ligen";
  if (changed === "league") {
    els.adminDbClub.value = "Alle Vereine";
    els.adminDbPlayer.value = "Alle Spieler";
  }
  if (changed === "club") {
    els.adminDbPlayer.value = "Alle Spieler";
  }

  const clubs = getFilteredClubs(selectedLeague);
  fillValueSelect(els.adminDbClub, [
    { value: "Alle Vereine", label: "Alle Vereine" },
    ...clubs.map((club) => ({ value: club.name, label: club.name })),
  ]);

  const selectedClub = els.adminDbClub.value || "Alle Vereine";
  const players = getFilteredCards(selectedLeague, selectedClub, "Alle Spieler");
  fillValueSelect(els.adminDbPlayer, [
    { value: "Alle Spieler", label: "Alle Spieler" },
    ...players.map((card) => ({ value: card.id, label: card.name })),
  ]);
}

function setAdminStatus(message) {
  els.adminStatus.textContent = message;
}

function renderAdminDatabase() {
  const selectedLeague = els.adminDbLeague.value || "Alle Ligen";
  const selectedClub = els.adminDbClub.value || "Alle Vereine";
  const selectedPlayer = els.adminDbPlayer.value || "Alle Spieler";
  const filteredClubs = getFilteredClubs(selectedLeague);
  const filteredCards = getFilteredCards(selectedLeague, selectedClub, selectedPlayer);

  const clubMap = filteredCards.reduce((map, card) => {
    if (!map.has(card.club)) {
      map.set(card.club, []);
    }
    map.get(card.club).push(card);
    return map;
  }, new Map());

  const clubs = filteredClubs.map((club) => [club.name, clubMap.get(club.name) || []]);
  const sortedCards = [...filteredCards].sort((a, b) => {
    const clubCompare = a.club.localeCompare(b.club);
    if (clubCompare !== 0) return clubCompare;
    return rating(b) - rating(a);
  });

  els.adminDbSummary.textContent = `${filteredClubs.length} Vereine, ${filteredCards.length} Karten angezeigt`;
  els.adminClubList.innerHTML = clubs
    .map(([club, cards]) => {
      const best = cards.length ? Math.max(...cards.map((card) => rating(card))) : "-";
      const clubData = getClub(club);
      return `<div class="admin-club-chip"><img src="${clubData.crest}" alt="${clubData.name} Wappen" /><strong>${clubData.name}</strong><span>${cards.length} Spieler | Top ${best}</span></div>`;
    })
    .join("");

  els.adminPlayerRows.innerHTML = sortedCards
    .map((card) => {
      const owned = state.deck.some((ownedCard) => sourceCardId(ownedCard) === card.id && cardSeries(ownedCard) === cardSeries(card));
      return `
        <tr class="${owned ? "player-row" : ""}">
          <td><span class="player-cell">${renderPlayerListPhoto(card)}${card.name}</span></td>
          <td><span class="club-cell"><img src="${getClub(card.club).crest}" alt="${card.club} Wappen" />${getClub(card.club).name}</span></td>
          <td>${card.pos}</td>
          <td>${card.league}</td>
          <td>${teamClasses[card.cls]}</td>
          <td>${escapeHtml(cardSeriesLabel(card.series))}</td>
          <td>${rating(card)}</td>
          <td>${compactStatsText(card)}</td>
          <td>${owned ? "Im Besitz" : "Nicht gezogen"} | ${card.performance ? "Saisonwerte" : "Basiswerte"}</td>
        </tr>
      `;
    })
    .join("");
}

function loadState() {
  try {
    const saved = localStorage.getItem("liga-clash-state-v1");
    if (!saved) return createInitialState();
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" ? normalizeState(parsed) : createInitialState();
  } catch {
    localStorage.removeItem("liga-clash-state-v1");
    return createInitialState();
  }
}

function createInitialState() {
  const leagueRows = names.map((name, index) => ({
    name,
    lp: 230 + Math.round(Math.random() * 130) - index * 7,
  }));

  return {
    leagueIndex: 1,
    teamClassIndex: 1,
    lp: 260,
    coins: 80,
    gems: 2350,
    dailyClaimed: false,
    mailGiftClaimed: false,
    claimedMissions: [],
    clubLevel: 1,
    homeScore: 0,
    awayScore: 0,
    log: ["Waehle eine Taktik und starte dein erstes Ligamatch."],
    deck: baseCards,
    selected: baseCards.slice(0, MATCH_CARD_COUNT).map((card) => card.id),
    formation: DEFAULT_FORMATION,
    cpuDifficulty: "normal",
    activeMatch: null,
    matchHistory: [],
    pendingRewardBoard: null,
    cardFilters: defaultCardFilters(),
    leagueRows,
    record: { win: 0, draw: 0, loss: 0 },
    events: [],
    selectedAdminEventId: null,
    boosterPacks: defaultBoosterPacks(),
    freePacks: {},
    rewardPools: defaultRewardPools(),
    adminUsers: defaultAdminUsers(),
    activeUserId: "user-owner-goernaldo",
    career: defaultCareerState(),
  };
}

function normalizeState(saved) {
  const fresh = createInitialState();
  const migratedDeck = ensureStarterDeckSize(Array.isArray(saved.deck) && saved.deck.length ? saved.deck.map(normalizeCard) : fresh.deck);
  const migratedSelected = Array.isArray(saved.selected) && saved.selected.length ? migrateSelectedIds(saved.selected, migratedDeck) : fresh.selected;
  const migratedEvents = Array.isArray(saved.events)
    ? removeLegacyDemoEvents(saved.events.map(normalizeEvent))
    : fresh.events;
  const migratedUsers = Array.isArray(saved.adminUsers) ? saved.adminUsers.map(normalizeAdminUser) : fresh.adminUsers;
  const activeUserId = normalizeActiveUserId(saved.activeUserId, migratedUsers);
  const activeSavedUser = Array.isArray(saved.adminUsers) ? saved.adminUsers.find((user) => user.id === activeUserId) : null;
  if (activeSavedUser && !activeSavedUser.wallet) {
    const activeMigratedUser = migratedUsers.find((user) => user.id === activeUserId);
    if (activeMigratedUser) {
      activeMigratedUser.wallet = normalizeWallet({ coins: saved.coins ?? fresh.coins, gems: saved.gems ?? fresh.gems });
    }
  }
  return {
    ...fresh,
    ...saved,
    teamClassIndex: normalizeClassIndex(saved.teamClassIndex ?? fresh.teamClassIndex),
    formation: normalizeFormationKey(saved.formation || fresh.formation),
    cpuDifficulty: normalizeCpuDifficulty(saved.cpuDifficulty),
    activeMatch: normalizeStoredMatch(saved.activeMatch),
    matchHistory: normalizeMatchHistory(saved.matchHistory),
    pendingRewardBoard: normalizePendingRewardBoard(saved.pendingRewardBoard),
    gems: Number.isFinite(saved.gems) ? saved.gems : fresh.gems,
    dailyClaimed: Boolean(saved.dailyClaimed),
    mailGiftClaimed: Boolean(saved.mailGiftClaimed),
    clubLevel: Number.isFinite(saved.clubLevel) ? saved.clubLevel : fresh.clubLevel,
    claimedMissions: Array.isArray(saved.claimedMissions) ? saved.claimedMissions : fresh.claimedMissions,
    record: { ...fresh.record, ...(saved.record || {}) },
    events: migratedEvents,
    selectedAdminEventId: migratedEvents.some((event) => event.id === saved.selectedAdminEventId) ? saved.selectedAdminEventId : migratedEvents[0]?.id || null,
    boosterPacks: mergeDefaultBoosterPacks(saved.boosterPacks && saved.boosterPacks.length ? saved.boosterPacks : fresh.boosterPacks),
    freePacks: normalizeFreePacks(saved.freePacks),
    rewardPools: normalizeRewardPools(saved.rewardPools),
    adminUsers: migratedUsers,
    activeUserId,
    career: normalizeCareerState(saved.career),
    cardFilters: normalizeCardFilters(saved.cardFilters),
    deck: migratedDeck,
    selected: migratedSelected,
    leagueRows: Array.isArray(saved.leagueRows) && saved.leagueRows.length ? saved.leagueRows : fresh.leagueRows,
  };
}

function defaultCareerState() {
  return {
    tier: 8,
    seasonGame: 0,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    xp: 0,
    tickets: 0,
    record: { win: 0, draw: 0, loss: 0 },
    log: [],
  };
}

function normalizeCareerState(career) {
  const fresh = defaultCareerState();
  return {
    ...fresh,
    ...(career || {}),
    tier: clamp(Number(career?.tier) || fresh.tier, 1, 8),
    seasonGame: clamp(Number(career?.seasonGame) || 0, 0, 10),
    points: Math.max(0, Number(career?.points) || 0),
    goalsFor: Math.max(0, Number(career?.goalsFor) || 0),
    goalsAgainst: Math.max(0, Number(career?.goalsAgainst) || 0),
    xp: Math.max(0, Number(career?.xp) || 0),
    tickets: Math.max(0, Number(career?.tickets) || 0),
    record: { ...fresh.record, ...(career?.record || {}) },
    log: Array.isArray(career?.log) ? career.log.slice(0, 6) : fresh.log,
  };
}

function normalizeFormationKey(key) {
  const legacyMap = {
    "2-2-1": "1-2-1-1",
    "2-1-2": "1-1-2-1",
    "1-2-2": "1-1-1-2",
    "3-1-1": "1-2-1-1",
  };
  const normalized = legacyMap[key] || key;
  return FORMATIONS[normalized] ? normalized : DEFAULT_FORMATION;
}

function normalizeCpuDifficulty(value) {
  return CPU_DIFFICULTIES[value] ? value : "normal";
}

function ensureStarterDeckSize(deck) {
  const cards = Array.isArray(deck) ? [...deck] : [];
  const existingIds = new Set(cards.map((card) => card.id));
  baseCards.forEach((starterCard) => {
    if (cards.length >= MATCH_CARD_COUNT) return;
    if (existingIds.has(starterCard.id)) return;
    cards.push(normalizeCard({ ...starterCard }));
    existingIds.add(starterCard.id);
  });
  return cards;
}

function normalizeStoredMatch(match) {
  if (!match || typeof match !== "object" || !match.id) return null;
  const storedStatus = ["active", "completed", "aborted"].includes(match.status) ? match.status : "aborted";
  const status = storedStatus === "active" ? "aborted" : storedStatus;
  return {
    id: String(match.id),
    date: match.date || new Date().toISOString(),
    status,
    mode: match.mode || "cpu",
    playerDeck: Array.isArray(match.playerDeck) ? match.playerDeck.slice(0, MATCH_CARD_COUNT) : [],
    cpuDeck: Array.isArray(match.cpuDeck) ? match.cpuDeck.slice(0, MATCH_CARD_COUNT) : [],
    cpu: {
      name: match.cpu?.name || "CPU",
      power: Math.max(1, Number(match.cpu?.power) || 1),
      classIndex: normalizeClassIndex(match.cpu?.classIndex),
      leagueIndex: clamp(Number(match.cpu?.leagueIndex) || 0, 0, leagues.length - 1),
    },
    difficulty: normalizeCpuDifficulty(match.difficulty),
    formation: normalizeFormationKey(match.formation),
    rounds: Array.isArray(match.rounds) ? match.rounds.slice(0, MATCH_ROUNDS) : [],
    score: normalizeMatchScore(match.score),
    result: status === "aborted" ? "pending" : ["win", "loss", "draw", "pending"].includes(match.result) ? match.result : "pending",
    usedCards: Array.isArray(match.usedCards) ? match.usedCards : [],
    rewards: normalizeMatchRewards(match.rewards),
  };
}

function normalizeMatchScore(score) {
  return {
    player: Math.max(0, Number(score?.player) || 0),
    cpu: Math.max(0, Number(score?.cpu) || 0),
  };
}

function normalizeMatchRewards(rewards) {
  return {
    selectionCount: Math.max(0, Number(rewards?.selectionCount) || 0),
    prepared: Boolean(rewards?.prepared),
    claimed: Boolean(rewards?.claimed),
  };
}

function normalizeMatchHistory(history) {
  return Array.isArray(history) ? history.map(normalizeStoredMatch).filter(Boolean).slice(0, 20) : [];
}

function normalizePendingRewardBoard(board) {
  if (!board || typeof board !== "object" || !board.matchId) return null;
  return {
    matchId: String(board.matchId),
    result: ["win", "loss", "draw"].includes(board.result) ? board.result : "loss",
    selectionCount: Math.max(0, Number(board.selectionCount) || 0),
    status: board.status === "ready" ? "ready" : "prepared",
  };
}

function normalizeFreePacks(freePacks) {
  if (!freePacks || typeof freePacks !== "object") return {};
  return Object.fromEntries(
    Object.entries(freePacks)
      .map(([packId, count]) => [packId, Math.max(0, Math.floor(Number(count) || 0))])
      .filter(([, count]) => count > 0)
  );
}

function defaultRewardPools() {
  return {
    quick: [
      { active: true, type: "coins", amount: 35, chance: 100, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "xp", amount: 18, chance: 100, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "freePack", amount: 1, chance: 18, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "gems", amount: 1, chance: 8, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "card", amount: 1, chance: 10, packId: "pack-bronze", classIndex: 1 },
    ],
  };
}

function normalizeRewardPools(pools) {
  return {
    ...defaultRewardPools(),
    ...(pools || {}),
    quick: normalizeQuickRewardPool(pools?.quick),
  };
}

function normalizeQuickRewardPool(pool) {
  const fallback = defaultRewardPools().quick;
  const source = Array.isArray(pool) && pool.length ? pool : fallback;
  return Array.from({ length: 5 }, (_, index) => {
    const reward = source[index] || fallback[index] || fallback[0];
    return {
      active: reward.active !== false,
      type: ["coins", "gems", "xp", "freePack", "card"].includes(reward.type) ? reward.type : "coins",
      amount: Math.max(1, Number(reward.amount) || 1),
      chance: clamp(Number(reward.chance) || 0, 0, 100),
      packId: reward.packId || "pack-bronze",
      classIndex: normalizeClassIndex(reward.classIndex),
    };
  });
}

function rewardTypeLabel(type) {
  return {
    coins: "Muenzen",
    gems: "Diamanten",
    xp: "Karriere XP",
    freePack: "Gratis Pack",
    card: "Karte",
  }[type] || type;
}

function defaultCardFilters() {
  return {
    collection: { league: "Alle Ligen", club: "Alle Vereine", position: "Alle Positionen" },
    deck: { league: "Alle Ligen", club: "Alle Vereine", position: "Alle Positionen" },
  };
}

function normalizeCardFilters(filters) {
  const fresh = defaultCardFilters();
  return {
    collection: { ...fresh.collection, ...(filters?.collection || {}) },
    deck: { ...fresh.deck, ...(filters?.deck || {}) },
  };
}

function defaultAdminUsers() {
  return [
    { id: "user-owner-goernaldo", name: "G\u00d6RNALDOBERLIN", email: "owner@liga-clash.local", role: "Owner", pin: "0000", locked: false, wallet: { coins: 80, gems: 2350 } },
    { id: "user-admin-liga", name: "LigaAdmin", email: "admin@liga-clash.local", role: "Admin", pin: "1111", locked: false, wallet: { coins: 0, gems: 0 } },
    { id: "user-mod-events", name: "EventMod", email: "events@liga-clash.local", role: "Moderator", pin: "2222", locked: false, wallet: { coins: 0, gems: 0 } },
    { id: "user-support", name: "SupportTeam", email: "support@liga-clash.local", role: "Moderator", pin: "3333", locked: true, wallet: { coins: 0, gems: 0 } },
    { id: "user-player-test", name: "TestSpieler", email: "spieler@liga-clash.local", role: "User", pin: "4444", locked: false, wallet: { coins: 0, gems: 0 } },
  ];
}

function normalizeAdminUser(user) {
  const id = user.id || `admin-user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const ownerName = id === "user-owner-goernaldo" ? "G\u00d6RNALDOBERLIN" : user.name;
  return {
    id,
    name: ownerName || "Unbenannter Benutzer",
    email: user.email || "user@liga-clash.local",
    role: ["Owner", "Admin", "Moderator", "User"].includes(user.role) ? user.role : "User",
    pin: String(user.pin || defaultPinForRole(user.role)),
    locked: Boolean(user.locked),
    wallet: normalizeWallet(user.wallet),
  };
}

function normalizeWallet(wallet) {
  return {
    coins: Math.max(0, Math.round(Number(wallet?.coins) || 0)),
    gems: Math.max(0, Math.round(Number(wallet?.gems) || 0)),
  };
}

function userWallet(user) {
  user.wallet = normalizeWallet(user.wallet);
  return user.wallet;
}

function syncActiveUserWallet() {
  if (!state?.adminUsers?.length) return;
  const user = state.adminUsers.find((item) => item.id === state.activeUserId);
  if (!user) return;
  user.wallet = {
    coins: Math.max(0, Math.round(Number(state.coins) || 0)),
    gems: Math.max(0, Math.round(Number(state.gems) || 0)),
  };
}

function loadActiveUserWallet() {
  const user = activeUser();
  const wallet = userWallet(user);
  state.coins = wallet.coins;
  state.gems = wallet.gems;
}

function normalizeActiveUserId(activeUserId, users) {
  const availableUsers = users.length ? users : defaultAdminUsers();
  const owner = availableUsers.find((user) => user.role === "Owner" && !user.locked);
  const fallback = owner || availableUsers.find((user) => !user.locked) || availableUsers[0];
  return availableUsers.some((user) => user.id === activeUserId && !user.locked) ? activeUserId : fallback.id;
}

function defaultPinForRole(role) {
  return {
    Owner: "0000",
    Admin: "1111",
    Moderator: "2222",
    User: "4444",
  }[role] || "1234";
}

function removeLegacyDemoEvents(events) {
  const legacyIds = new Set([
    "event-werder-pack",
    "event-union-update",
    "event-cottbus-cards",
    "event-mission-bronze",
  ]);
  return events.filter((event) => !legacyIds.has(event.id));
}

function defaultBoosterPacks() {
  return [
    { id: "pack-bronze", name: "Bronze Pack", cost: 100, currency: "coins", minClass: 0, maxClass: 5, cardCount: 1, description: "Guenstiges Pack mit Chance auf Bronze-Karten.", image: "assets/packs/bronze.png", tier: "bronze", pool: "mixed", active: true },
    { id: "pack-silver", name: "Silber Pack", cost: 250, currency: "coins", minClass: 1, maxClass: 6, cardCount: 2, description: "Bessere Chance auf Silber und seltene Karten.", image: "assets/packs/silver.png", tier: "silver", pool: "mixed", active: true },
    { id: "pack-gold", name: "Gold Pack", cost: 600, currency: "coins", minClass: 3, maxClass: 8, cardCount: 3, description: "Starker Fortschritt mit Chance auf Gold und Episch.", image: "assets/packs/gold.png", tier: "gold", pool: "mixed", active: true },
    { id: "pack-elite", name: "Elite Pack", cost: 1200, currency: "coins", minClass: 7, maxClass: 10, cardCount: 4, description: "High-End Karten bis zur Elite-Klasse.", image: "assets/packs/elite.png", tier: "elite", pool: "mixed", active: true },
    { id: "pack-bundesliga", name: "Bundesliga Pack", cost: 350, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Zieht Spieler aus der 1. Bundesliga der Maenner.", image: "assets/packs/gold.png", tier: "bundesliga", pool: "men-bundesliga", active: true },
    { id: "pack-frauen-bundesliga", name: "Frauen-Bundesliga Pack", cost: 350, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Zieht Karten aus der Google Pixel Frauen-Bundesliga.", image: "assets/packs/elite.png", tier: "women", pool: "women-bundesliga", active: true },
    { id: "pack-mixed", name: "Mixed Pack", cost: 500, currency: "coins", minClass: 3, maxClass: 8, cardCount: 3, description: "Maenner- und Frauenkarten gemeinsam in einem Pack.", image: "assets/packs/silver.png", tier: "mixed", pool: "mixed", active: true },
    { id: "pack-dfb-pokal", name: "DFB-Pokal Pack", cost: 650, currency: "coins", minClass: 3, maxClass: 9, cardCount: 3, description: "Cup-Feeling mit Karten aus allen deutschen Ligen.", image: "assets/packs/bronze.png", tier: "dfb", pool: "dfb-pokal", active: true },
    { id: "pack-totw", name: "Team of the Week Pack", cost: 25, currency: "gems", minClass: 8, maxClass: 10, cardCount: 3, description: "Formstarke Karten ab Episch mit Elite-Chance.", image: "assets/packs/gold.png", tier: "totw", pool: "totw", active: true },
    { id: "pack-icon", name: "Icon Pack", cost: 40, currency: "gems", minClass: 10, maxClass: 10, cardCount: 1, description: "Nur Elite-Karten und die staerksten Namen im Spiel.", image: "assets/packs/elite.png", tier: "icon", pool: "icon", active: true },
    { id: "pack-angriff", name: "Angriff Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Stuermer und Fluegelspieler.", image: "assets/packs/gold.png", tier: "gold", pool: "mixed", positions: ["ST", "MS", "LA", "RA"], active: true },
    { id: "pack-mittelfeld", name: "Mittelfeld Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer zentrale und offensive Mittelfeldspieler.", image: "assets/packs/silver.png", tier: "silver", pool: "mixed", positions: ["ZM", "DM", "OM", "CAM", "LM", "RM"], active: true },
    { id: "pack-abwehr", name: "Abwehr Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Innenverteidiger, Aussenverteidiger und Wingbacks.", image: "assets/packs/bronze.png", tier: "bronze", pool: "mixed", positions: ["IV", "CB", "LV", "RV", "LWB", "RWB"], active: true },
    { id: "pack-torwart", name: "Torwart Pack", cost: 700, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Torhueter.", image: "assets/packs/elite.png", tier: "elite", pool: "mixed", positions: ["TW", "GK"], active: true },
  ];
}

function mergeDefaultBoosterPacks(savedPacks) {
  const normalizedSaved = Array.isArray(savedPacks) ? savedPacks.map(normalizeBoosterPack) : [];
  const savedIds = new Set(normalizedSaved.map((pack) => pack.id));
  const missingDefaults = defaultBoosterPacks()
    .filter((pack) => !savedIds.has(pack.id))
    .map(normalizeBoosterPack);
  return [...normalizedSaved, ...missingDefaults];
}

function normalizeBoosterPack(pack) {
  const legacyIconPack = pack.name === "Icon Jagd" || (pack.id === "pack-icon" && !pack.pool && pack.name !== "Icon Pack");
  const defaultBounds = defaultClassBoundsForPack(pack.id);
  const legacyBounds = legacyClassBoundsForPack(pack.id);
  const legacyDefaultBounds = defaultBounds && legacyBounds && Number(pack.minClass) === legacyBounds.min && Number(pack.maxClass) === legacyBounds.max;
  const minClass = legacyIconPack ? teamClasses.length - 1 : legacyDefaultBounds ? defaultBounds.min : normalizeClassIndex(pack.minClass);
  const maxClass = legacyIconPack ? teamClasses.length - 1 : legacyDefaultBounds ? defaultBounds.max : clamp(normalizeClassIndex(pack.maxClass ?? minClass), minClass, teamClasses.length - 1);
  const image = pack.image || (pack.id === "pack-elite" || pack.name === "Elite Pack" || legacyIconPack ? "assets/packs/elite.png" : "");
  const migratedName = legacyIconPack ? "Icon Pack" : pack.name;
  return {
    id: pack.id || `pack-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: migratedName || "Neuer Booster",
    cost: Math.max(0, Number(pack.cost) || 0),
    currency: pack.currency === "gems" ? "gems" : "coins",
    minClass,
    maxClass,
    cardCount: normalizePackCardCount(pack.cardCount ?? defaultPackCardCount(pack.id)),
    pool: normalizePackPool(pack.pool || poolFromLegacyPack(pack)),
    positions: normalizePackPositions(pack.positions),
    dropRates: normalizeDropRates(pack.dropRates, minClass, maxClass, pack.id),
    description: pack.description || "Boosterbeschreibung fehlt.",
    image,
    tier: pack.tier || packTierFromImage(image),
    active: pack.active !== false,
  };
}

function defaultClassBoundsForPack(id) {
  return {
    "pack-bronze": { min: 0, max: 5 },
    "pack-silver": { min: 1, max: 6 },
    "pack-gold": { min: 3, max: 8 },
    "pack-elite": { min: 7, max: 10 },
    "pack-bundesliga": { min: 2, max: 8 },
    "pack-frauen-bundesliga": { min: 2, max: 8 },
    "pack-mixed": { min: 3, max: 8 },
    "pack-dfb-pokal": { min: 3, max: 9 },
    "pack-totw": { min: 8, max: 10 },
    "pack-icon": { min: 10, max: 10 },
    "pack-angriff": { min: 2, max: 8 },
    "pack-mittelfeld": { min: 2, max: 8 },
    "pack-abwehr": { min: 2, max: 8 },
    "pack-torwart": { min: 2, max: 8 },
  }[id] || null;
}

function legacyClassBoundsForPack(id) {
  return {
    "pack-bronze": { min: 0, max: 2 },
    "pack-silver": { min: 1, max: 4 },
    "pack-gold": { min: 3, max: 7 },
    "pack-elite": { min: 5, max: 7 },
    "pack-bundesliga": { min: 2, max: 6 },
    "pack-frauen-bundesliga": { min: 2, max: 6 },
    "pack-mixed": { min: 3, max: 7 },
    "pack-dfb-pokal": { min: 3, max: 7 },
    "pack-totw": { min: 5, max: 7 },
    "pack-icon": { min: 7, max: 7 },
    "pack-angriff": { min: 2, max: 7 },
    "pack-mittelfeld": { min: 2, max: 7 },
    "pack-abwehr": { min: 2, max: 7 },
    "pack-torwart": { min: 2, max: 7 },
  }[id] || null;
}

function readDropRates(row, minClass, maxClass) {
  const values = {};
  row.querySelectorAll("[data-pack-drop-rate]").forEach((input) => {
    values[input.dataset.packDropRate] = input.value;
  });
  return normalizeDropRates(values, minClass, maxClass);
}

function normalizeDropRates(rates, minClass = 0, maxClass = teamClasses.length - 1, packId = "") {
  const fallback = defaultDropRates(minClass, maxClass, packId);
  const result = {};
  teamClasses.forEach((_, index) => {
    const raw = rates && rates[index] != null ? Number(rates[index]) : fallback[index];
    const inRange = index >= minClass && index <= maxClass;
    result[index] = inRange ? clamp(Number.isFinite(raw) ? raw : fallback[index], 0, 100) : 0;
  });
  if (!Object.values(result).some((value) => value > 0)) {
    return fallback;
  }
  return result;
}

function defaultDropRates(minClass = 0, maxClass = teamClasses.length - 1, packId = "") {
  const presets = {
    "pack-bronze": { 0: 44, 1: 28, 2: 15, 3: 8, 4: 3, 5: 2 },
    "pack-silver": { 1: 38, 2: 25, 3: 16, 4: 10, 5: 7, 6: 4 },
    "pack-gold": { 3: 34, 4: 24, 5: 18, 6: 13, 7: 8, 8: 3 },
    "pack-elite": { 7: 58, 8: 28, 9: 11, 10: 3 },
    "pack-bundesliga": { 2: 34, 3: 22, 4: 16, 5: 12, 6: 8, 7: 5, 8: 3 },
    "pack-frauen-bundesliga": { 2: 34, 3: 22, 4: 16, 5: 12, 6: 8, 7: 5, 8: 3 },
    "pack-mixed": { 3: 30, 4: 22, 5: 17, 6: 13, 7: 10, 8: 8 },
    "pack-dfb-pokal": { 3: 32, 4: 22, 5: 16, 6: 12, 7: 9, 8: 6, 9: 3 },
    "pack-totw": { 8: 70, 9: 24, 10: 6 },
    "pack-icon": { 10: 100 },
    "pack-angriff": { 2: 30, 3: 22, 4: 16, 5: 12, 6: 9, 7: 7, 8: 4 },
    "pack-mittelfeld": { 2: 30, 3: 22, 4: 16, 5: 12, 6: 9, 7: 7, 8: 4 },
    "pack-abwehr": { 2: 30, 3: 22, 4: 16, 5: 12, 6: 9, 7: 7, 8: 4 },
    "pack-torwart": { 2: 30, 3: 22, 4: 16, 5: 12, 6: 9, 7: 7, 8: 4 },
  };
  const source = presets[packId] || {};
  const result = {};
  teamClasses.forEach((_, index) => {
    result[index] = index >= minClass && index <= maxClass ? source[index] ?? defaultClassWeight(index, minClass, maxClass) : 0;
  });
  return result;
}

function defaultClassWeight(index, minClass, maxClass) {
  const distance = index - minClass;
  const span = Math.max(1, maxClass - minClass);
  return Math.max(1, Math.round(60 * Math.pow(0.45, distance / Math.max(1, span / 3))));
}

function normalizePackCardCount(value) {
  return clamp(Math.round(Number(value) || 1), 1, 20);
}

function defaultPackCardCount(id) {
  const defaults = {
    "pack-bronze": 1,
    "pack-silver": 2,
    "pack-gold": 3,
    "pack-elite": 4,
    "pack-bundesliga": 2,
    "pack-frauen-bundesliga": 2,
    "pack-mixed": 3,
    "pack-dfb-pokal": 3,
    "pack-totw": 3,
    "pack-icon": 1,
    "pack-angriff": 2,
    "pack-mittelfeld": 2,
    "pack-abwehr": 2,
    "pack-torwart": 2,
  };
  return defaults[id] || 1;
}

function poolFromLegacyPack(pack) {
  if (pack.id === "pack-icon" || pack.name === "Icon Jagd" || pack.name === "Icon Pack") return "icon";
  return "mixed";
}

function normalizePackPool(pool) {
  return packPoolOptions().some((option) => option.value === pool) ? pool : "mixed";
}

function packPoolOptions() {
  return [
    { value: "mixed", label: "Mixed: Maenner & Frauen" },
    { value: "men-bundesliga", label: "1. Bundesliga Maenner" },
    { value: "women-bundesliga", label: "Google Pixel Frauen-Bundesliga" },
    { value: "dfb-pokal", label: "DFB-Pokal / alle deutschen Ligen" },
    { value: "totw", label: "Team of the Week" },
    { value: "icon", label: "Icon / Elite" },
  ];
}

function packPoolLabel(pool) {
  return packPoolOptions().find((option) => option.value === pool)?.label || "Mixed";
}

function normalizePackPositions(positions) {
  if (Array.isArray(positions)) return parsePackPositions(positions.join(","));
  return parsePackPositions(positions);
}

function parsePackPositions(value) {
  if (!value) return [];
  return [...new Set(String(value)
    .split(",")
    .map((position) => position.trim().toUpperCase())
    .filter(Boolean))];
}

function packPositionOptions() {
  return POSITION_PACK_GROUPS.map((group) => ({ value: group.value, label: group.label }));
}

function packPositionsFromOption(value) {
  return [...(POSITION_PACK_GROUPS.find((group) => group.value === value)?.positions || [])];
}

function packPositionOptionValue(positions) {
  const normalized = normalizePackPositions(positions);
  const match = POSITION_PACK_GROUPS.find((group) => samePositions(group.positions, normalized));
  return match?.value || "all";
}

function packPositionLabel(positions) {
  const normalized = normalizePackPositions(positions);
  if (!normalized.length) return "Alle Positionen";
  const match = POSITION_PACK_GROUPS.find((group) => samePositions(group.positions, normalized));
  return match ? match.label.replace(/:.*/, "") : normalized.sort((a, b) => positionSortValue(a) - positionSortValue(b) || a.localeCompare(b)).join(", ");
}

function samePositions(a, b) {
  const first = normalizePackPositions(a);
  const second = normalizePackPositions(b);
  return first.length === second.length && first.every((position) => second.includes(position));
}

function packTierFromImage(image) {
  if (image.includes("bronze")) return "bronze";
  if (image.includes("silver")) return "silver";
  if (image.includes("gold")) return "gold";
  if (image.includes("elite")) return "elite";
  return "elite";
}

function boosterImageOptions() {
  return [
    { value: "", label: "Platzhalter" },
    { value: "assets/packs/bronze.png", label: "Bronze Pack Bild" },
    { value: "assets/packs/silver.png", label: "Silber Pack Bild" },
    { value: "assets/packs/gold.png", label: "Gold Pack Bild" },
    { value: "assets/packs/elite.png", label: "Elite Pack Bild" },
  ];
}

function normalizeEvent(event) {
  return {
    id: event.id || `event-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: event.title || "Neues Event",
    type: event.type || "Spezial Event",
    date: event.date || "05.07.2026",
    startTime: normalizeEventTime(event.startTime, "00:00"),
    endDate: event.endDate || event.date || "05.07.2026",
    endTime: normalizeEventTime(event.endTime, "23:59"),
    description: event.description || "Eventbeschreibung fehlt.",
    rewards: Array.isArray(event.rewards) && event.rewards.length ? event.rewards : rewardForEventType(event.type || "Spezial Event"),
    active: event.active !== false,
  };
}

function rewardForEventType(type) {
  const rewards = {
    "Booster Event": ["+25 Muenzen", "x5 Karten", "x1 Diamant"],
    "Verein Release": ["+15 Muenzen", "Club Pack", "Wappen"],
    "Liga Release": ["+30 Muenzen", "Liga XP", "x2 Karten"],
    "Karten Stufe": ["+20 Muenzen", "Upgrade Token", "x3 Karten"],
    "Mission Event": ["+40 Muenzen", "Mission XP", "x1 Pack"],
    "Transfer Update": ["+10 Muenzen", "Transferkarte", "News XP"],
    "Taeglicher Bonus": ["+50 Muenzen", "x1 Karte", "Login Bonus"],
    "Winter Event": ["Winter Pack", "+150 Muenzen", "Winterkarte"],
    "Halloween Event": ["Spezial Pack", "+100 Muenzen", "Event Token"],
    "Team of the Season": ["TOTS Chance", "x3 Karten", "+1 Diamant"],
    "DFB-Pokal": ["Pokal Pack", "+80 Muenzen", "Cup XP"],
    "WM 2026": ["WM Pack", "+200 Muenzen", "Spezialkarte"],
    "Bundesliga 26/27": ["Bundesliga Pack", "+120 Muenzen", "Saison XP"],
    "Spezial Event": ["+35 Muenzen", "Spezialkarte", "Chance"],
  };
  return rewards[type] || rewards["Spezial Event"];
}

function eventTypes() {
  return ["Booster Event", "Verein Release", "Liga Release", "Karten Stufe", "Mission Event", "Transfer Update", "Taeglicher Bonus", "Winter Event", "Halloween Event", "Team of the Season", "DFB-Pokal", "WM 2026", "Bundesliga 26/27", "Spezial Event"];
}

function eventDay(date) {
  const match = String(date || "").match(/^(\d{1,2})\./);
  if (!match) return null;
  const day = Number(match[1]);
  return Number.isFinite(day) ? day : null;
}

function normalizeEventDate(value, fallback) {
  const trimmed = String(value || "").trim();
  const match = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!match) return fallback;
  const day = String(Math.max(1, Math.min(31, Number(match[1])))).padStart(2, "0");
  const month = String(Math.max(1, Math.min(12, Number(match[2])))).padStart(2, "0");
  return `${day}.${month}.${match[3]}`;
}

function normalizeEventTime(value, fallback) {
  const trimmed = String(value || "").trim();
  const match = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return fallback;
  const hour = String(Math.max(0, Math.min(23, Number(match[1])))).padStart(2, "0");
  const minute = String(Math.max(0, Math.min(59, Number(match[2])))).padStart(2, "0");
  return `${hour}:${minute}`;
}

function eventCssClass(type) {
  if (type.includes("Transfer")) return "transfer";
  if (type.includes("Booster")) return "booster";
  if (type.includes("Verein")) return "club";
  if (type.includes("Karten")) return "cards";
  if (type.includes("Mission") || type.includes("Liga")) return "mission";
  return "special";
}

function eventCalendarLabel(title) {
  const words = String(title || "Event").split(/\s+/).filter(Boolean);
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2, 4).join(" ");
  return `${escapeHtml(firstLine)}${secondLine ? `<br />${escapeHtml(secondLine)}` : ""}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function monthName(monthNumber) {
  return {
    "01": "Jan",
    "02": "Feb",
    "03": "Mrz",
    "04": "Apr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Okt",
    "11": "Nov",
    "12": "Dez",
  }[monthNumber] || "Jul";
}

function saveState() {
  syncActiveUserWallet();
  try {
    localStorage.setItem("liga-clash-state-v1", JSON.stringify(state));
  } catch {
    // LocalStorage can fail in private mode or when quota is full; keep the session playable.
  }
}

function render() {
  updateAccountUi();
  state.formation = normalizeFormationKey(state.formation);
  state.cpuDifficulty = normalizeCpuDifficulty(state.cpuDifficulty);
  selectedFormation = state.formation;
  document.querySelectorAll(".formation-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.formation === selectedFormation);
  });
  if (els.cpuDifficulty) els.cpuDifficulty.value = state.cpuDifficulty;
  const lineup = getLineup();
  const avgClass = Math.round(state.deck.reduce((sum, card) => sum + card.cls, 0) / state.deck.length);
  state.teamClassIndex = Math.max(state.teamClassIndex, avgClass);

  els.playerLeague.textContent = leagues[state.leagueIndex];
  els.teamClass.textContent = teamClasses[state.teamClassIndex];
  els.leaguePoints.textContent = state.lp;
  els.menuCoins.textContent = formatNumber(state.coins);
  document.querySelector(".wallet .gem + strong").textContent = formatNumber(state.gems);
  renderHeaderClubCrest();
  els.dailyBonus.classList.toggle("claimed", state.dailyClaimed);
  els.dailyBonus.querySelector("em").textContent = state.dailyClaimed ? "ABGEHOLT" : "15:47:32";
  renderMenuEvents();
  els.homeScore.textContent = state.homeScore;
  els.awayScore.textContent = state.awayScore;
  els.opponentName.textContent = currentOpponent.name;
  els.opponentDetails.textContent = `${currentOpponent.name} | ${leagues[currentOpponent.leagueIndex]} | ${teamClasses[currentOpponent.classIndex]} | CPU ${CPU_DIFFICULTIES[state.cpuDifficulty].label} | Staerke ${currentOpponent.power}`;
  els.resultTag.textContent = matchResultLabel(state.activeMatch);
  els.playMatch.disabled = false;
  els.openPack.textContent = `Scout-Pack (${state.coins}/100)`;
  els.openPack.disabled = state.coins < 100;

  renderSlot(els.attackSlot, lineup.attack);
  renderSlot(els.midSlot, lineup.mid);
  renderSlot(els.defenseSlot, lineup.defense);
  renderSlot(els.keeperSlot, lineup.keeper);
  renderDeck();
  renderLog();
  renderBattleBoard();
  renderMatchSummary();
  renderLeague();
  renderAdminControls();
  saveState();
}

function renderMenuEvents() {
  const activeEvents = state.events.filter((event) => event.active).slice(0, 6);
  if (!els.menuEventList || !els.menuEventHint) return;
  els.menuEventHint.textContent = activeEvents.length
    ? `${activeEvents.length} aktive ${activeEvents.length === 1 ? "Aktion" : "Aktionen"}`
    : "Keine aktiven Events";
  els.menuEventList.innerHTML = activeEvents.length
    ? activeEvents.map((event) => `
      <button class="menu-event-chip ${eventMenuClass(event)}" type="button" data-action="events">
        <i>${eventIcon(event)}</i>
        <span>
          <strong>${escapeHtml(event.title)}</strong>
          <em>${escapeHtml(event.type)} | ${escapeHtml(event.date)} ${escapeHtml(event.startTime || "00:00")}</em>
        </span>
      </button>
    `).join("")
    : `
      <button class="menu-event-chip empty" type="button" data-action="events">
        <i>+</i>
        <span><strong>Event planen</strong><em>Im Admin Center aktivieren</em></span>
      </button>
    `;
}

function eventIcon(event) {
  const text = `${event.title} ${event.type}`.toLowerCase();
  if (text.includes("winter")) return "W";
  if (text.includes("halloween")) return "H";
  if (text.includes("team of the season") || text.includes("tots")) return "TOTS";
  if (text.includes("dfb") || text.includes("pokal")) return "DFB";
  if (text.includes("wm") || text.includes("world cup")) return "WM";
  if (text.includes("bundesliga")) return "26/27";
  if (text.includes("booster")) return "PACK";
  return "EVENT";
}

function eventMenuClass(event) {
  const text = `${event.title} ${event.type}`.toLowerCase();
  if (text.includes("winter")) return "winter";
  if (text.includes("halloween")) return "halloween";
  if (text.includes("team of the season") || text.includes("tots")) return "tots";
  if (text.includes("dfb") || text.includes("pokal")) return "cup";
  if (text.includes("wm") || text.includes("world cup")) return "world";
  if (text.includes("bundesliga")) return "bundesliga";
  return "default";
}

function renderSlot(slot, card) {
  slot.innerHTML = "";
  const cards = Array.isArray(card) ? card.filter(Boolean) : [card].filter(Boolean);
  if (!cards.length) {
    slot.innerHTML = `<span class="empty-lineup">Keine Karte</span>`;
    return;
  }
  cards.forEach((item) => slot.appendChild(createCard(item, true)));
}

function renderDeck() {
  els.deckGrid.innerHTML = "";
  state.deck.forEach((card) => {
    const node = createCard(card, false);
    node.classList.toggle("selected", state.selected.includes(card.id));
    node.addEventListener("click", () => toggleSelected(card.id));
    els.deckGrid.appendChild(node);
  });
}

function createCard(card, small) {
  const node = document.createElement("article");
  const club = getClub(card.club);
  node.className = "player-card";
  node.classList.add(`card-tier-${normalizeClassIndex(card.cls)}`);
  if (small) node.classList.add("selected");
  node.innerHTML = `
    <div class="card-top">
      <div class="rating">${rating(card)}</div>
      <span class="card-position">${card.pos}</span>
      <img class="card-crest" src="${club.crest}" alt="${club.name} Wappen" />
    </div>
    ${renderCardPhoto(card)}
    <div class="card-name">${card.name}</div>
    ${renderCardStats(card)}
  `;
  return node;
}

function renderLog() {
  els.matchLog.innerHTML = "";
  state.log.slice(0, 6).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    els.matchLog.appendChild(li);
  });
}

function matchResultLabel(match) {
  if (!match) return "Bereit";
  if (match.status === "aborted") return "Abgebrochen erkannt";
  if (match.status !== "completed") return "Match laeuft";
  if (match.result === "win") return "Sieg";
  if (match.result === "loss") return "Niederlage";
  if (match.result === "draw") return "Unentschieden";
  return "Bereit";
}

function renderBattleBoard() {
  if (!els.battleBoard) return;
  const match = state.activeMatch;
  if (!match || !match.rounds?.length) {
    els.roundTag.textContent = `Runde 0/${MATCH_ROUNDS}`;
    els.battleBoard.innerHTML = `
      <p class="muted">Starte ein Match, um die fuenf transparent berechneten Runden zu sehen.</p>
    `;
    return;
  }
  els.roundTag.textContent = `Runde ${match.rounds.length}/${MATCH_ROUNDS}`;
  els.battleBoard.innerHTML = match.rounds.map((round) => `
    <article class="battle-round ${round.winner === "player" ? "won" : "lost"}">
      <header>
        <strong>Runde ${round.round}</strong>
        <span>${escapeHtml(round.category)}</span>
      </header>
      <h3>${escapeHtml(round.situation)}</h3>
      <p>${escapeHtml(round.call)}</p>
      <div class="battle-versus">
        ${battleSide("Du", round.player, round.winner === "player")}
        <b>${round.player.total}:${round.cpu.total}</b>
        ${battleSide("CPU", round.cpu, round.winner === "cpu")}
      </div>
      <details>
        <summary>Berechnung anzeigen</summary>
        <div class="calc-grid">
          ${calculationRows(round.player, "Deine Karte")}
          ${calculationRows(round.cpu, "CPU-Karte")}
        </div>
      </details>
    </article>
  `).join("");
}

function battleSide(label, data, won) {
  return `
    <div class="battle-side ${won ? "winner" : ""}">
      <span>${label}</span>
      <strong>${escapeHtml(data.name)}</strong>
      <em>${escapeHtml(data.pos)} | ${escapeHtml(data.positionText)}</em>
    </div>
  `;
}

function calculationRows(data, label) {
  return `
    <dl>
      <dt>${label}</dt><dd>${escapeHtml(data.name)}</dd>
      <dt>Grundwert</dt><dd>${data.base}</dd>
      <dt>Kategorie</dt><dd>${escapeHtml(data.category)}</dd>
      <dt>Levelbonus</dt><dd>+${data.levelBonus}</dd>
      <dt>Sternbonus</dt><dd>+${data.starBonus}</dd>
      <dt>Position</dt><dd>${Math.round(data.positionModifier * 100)}%</dd>
      <dt>Taktik</dt><dd>+${data.tacticBonus}</dd>
      <dt>Formation</dt><dd>+${data.formationBonus}</dd>
      <dt>Zufall</dt><dd>${data.random >= 0 ? "+" : ""}${data.random}</dd>
      <dt>Weitere Mods</dt><dd>${data.extraModifier >= 0 ? "+" : ""}${data.extraModifier}</dd>
      <dt>Endwert</dt><dd>${data.total}</dd>
    </dl>
  `;
}

function renderMatchSummary() {
  if (!els.matchSummary) return;
  const match = state.activeMatch;
  if (!match || !match.rounds?.length) {
    const substitutes = getLineup().substitutes || [];
    els.matchSummary.innerHTML = `
      <div class="panel-title"><h2>Matchabschluss</h2><span>Bereit</span></div>
      <p class="muted">Noch kein Matchresultat gespeichert.</p>
      <h3>Ersatzbank</h3>
      <div class="bench-list">${substitutes.length ? substitutes.map(benchChip).join("") : "<span>Keine Ersatzspieler</span>"}</div>
    `;
    return;
  }
  const resultLabel = match.result === "win" ? "Sieg" : match.result === "loss" ? "Niederlage" : "Unentschieden";
  els.matchSummary.innerHTML = `
    <div class="panel-title"><h2>Matchabschluss</h2><span>${resultLabel}</span></div>
    <div class="summary-score"><strong>${match.score.player}:${match.score.cpu}</strong><em>${escapeHtml(match.cpu.name)}</em></div>
    <p>${rewardBoardText(match)} fuer das spaetere 5x5-Belohnungsboard vorbereitet.</p>
    <p class="muted">Match-ID: ${escapeHtml(match.id)}</p>
  `;
}

function benchChip(card) {
  return `<span>${escapeHtml(card.pos)} ${escapeHtml(card.name)}</span>`;
}

function renderLeague() {
  const rows = [{ name: "Du", lp: state.lp, player: true }, ...state.leagueRows].sort((a, b) => b.lp - a.lp);
  els.leagueBody.innerHTML = "";
  rows.slice(0, 18).forEach((row, index) => {
    const status = index < 3 ? "Aufstieg" : index > 14 ? "Abstieg" : "Bleibt";
    const statusClass = index < 3 ? "status-up" : index > 14 ? "status-down" : "status-stay";
    const tr = document.createElement("tr");
    if (row.player) tr.classList.add("player-row");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${row.name}</td>
      <td>${row.lp}</td>
      <td class="${statusClass}">${status}</td>
    `;
    els.leagueBody.appendChild(tr);
  });
}

function toggleSelected(id) {
  if (state.selected.includes(id)) {
    if (state.selected.length <= 1) return;
    state.selected = state.selected.filter((item) => item !== id);
  } else {
    state.selected.push(id);
    if (state.selected.length > MATCH_CARD_COUNT) state.selected.shift();
  }
  render();
}

function getLineup() {
  return buildFormationLineup(activeMatchCards(), selectedFormation).lineup;
}

function activeMatchCards() {
  const selectedCards = state.selected.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  const fillCards = state.deck.filter((card) => !selectedCards.some((selected) => selected.id === card.id));
  return [...selectedCards, ...fillCards].slice(0, MATCH_CARD_COUNT);
}

function buildFormationLineup(cards, formationKey = DEFAULT_FORMATION) {
  const formation = FORMATIONS[normalizeFormationKey(formationKey)];
  const available = [...cards].filter(Boolean);
  const errors = [];
  const keeper = takeBest(available, (card) => positionFit(card, "keeper").kind !== "wrong", defensivePower);
  if (!keeper) errors.push("kein Torwart im Deck");
  const defense = takeManyForRole(available, formation.defense, "defense", defensivePower);
  const mid = takeManyForRole(available, formation.mid, "mid", midfieldPower);
  const attack = takeManyForRole(available, formation.attack, "attack", attackingPower);
  const active = [keeper, ...defense, ...mid, ...attack].filter(Boolean);
  if (active.length < MATCH_ACTIVE_COUNT) errors.push("Deck unvollstaendig fuer die Formation");
  const substitutes = available.slice(0, MATCH_SUBSTITUTE_COUNT);
  return {
    lineup: { keeper, defense, mid, attack, substitutes },
    active,
    substitutes,
    errors,
  };
}

function takeBest(cards, predicate, scoreFn) {
  const candidates = cards.filter(predicate);
  const picked = [...candidates].sort((a, b) => scoreFn(b) - scoreFn(a))[0];
  if (!picked) return null;
  const index = cards.findIndex((card) => card.id === picked.id);
  if (index >= 0) cards.splice(index, 1);
  return picked;
}

function takeMany(cards, count, predicate, scoreFn) {
  const picked = [];
  for (let index = 0; index < count; index += 1) {
    const next = takeBest(cards, predicate, scoreFn) || takeBest(cards, () => true, scoreFn);
    if (next) picked.push(next);
  }
  return picked;
}

function takeManyForRole(cards, count, role, scoreFn) {
  const picked = [];
  for (let index = 0; index < count; index += 1) {
    const exactOrSimilar = takeBest(cards, (card) => ["exact", "similar"].includes(positionFit(card, role).kind), scoreFn);
    const offRole = exactOrSimilar || takeBest(cards, (card) => positionFit(card, role).kind === "offRole", scoreFn);
    const fallback = offRole || takeBest(cards, () => true, scoreFn);
    if (fallback) picked.push(fallback);
  }
  return picked;
}

function isDefender(card) {
  return ["IV", "CB", "LV", "RV", "LWB", "RWB", "DM", "ZDM"].includes(normalizeCardPosition(card.pos));
}

function isMidfielder(card) {
  return ["DM", "ZDM", "ZM", "OM", "ZOM", "CAM", "LM", "RM"].includes(normalizeCardPosition(card.pos));
}

function isAttacker(card) {
  return ["ST", "MS", "LA", "RA", "LF", "RF", "LM", "RM", "CAM", "ZOM"].includes(normalizeCardPosition(card.pos));
}

function playMatch() {
  const prepared = prepareMatch("league");
  if (!prepared.ok) {
    state.log = [prepared.message, ...state.log].slice(0, 8);
    render();
    return;
  }
  const match = runMatchEngine(prepared);
  applyFinishedMatch(match, { lp: true, coins: true, leagueRows: true });
}

function applyFinishedMatch(match, rewards = {}) {
  const result = match.result;
  const points = result === "win" ? 25 : result === "draw" ? 10 : 5;
  const coins = result === "win" ? 45 : result === "draw" ? 25 : 15;
  const fromCoins = state.coins;
  state.record[result] += 1;
  if (rewards.lp) state.lp += points;
  if (rewards.coins) state.coins += coins;
  if (rewards.leagueRows) state.leagueRows = state.leagueRows.map((row) => ({ ...row, lp: row.lp + rand(0, 24) }));
  state.homeScore = match.score.player;
  state.awayScore = match.score.cpu;
  state.activeMatch = match;
  state.matchHistory = [match, ...state.matchHistory].slice(0, 20);
  state.pendingRewardBoard = prepareRewardBoard(match);
  state.log = [`${match.score.player}:${match.score.cpu} gegen ${match.cpu.name}. ${rewardBoardText(match)} vorbereitet.`, ...match.rounds.map(roundLogLine), ...state.log].slice(0, 8);
  currentOpponent = createOpponent();
  if (rewards.lp) maybePromoteLeague();
  render();
  animateCoinChange(fromCoins, state.coins, els.playMatch);
}

function lineupCards(lineup) {
  return [lineup.keeper, ...lineup.defense, ...lineup.mid, ...lineup.attack].filter(Boolean);
}

function prepareMatch(mode = "league") {
  const playerDeck = activeMatchCards();
  const playerCheck = validateMatchDeck(playerDeck, state.formation);
  if (!playerCheck.ok) return { ok: false, message: playerCheck.errors.join(" | ") };
  const cpuDeck = buildCpuDeck(state.cpuDifficulty, playerDeck);
  const cpuCheck = validateMatchDeck(cpuDeck, state.formation);
  if (!cpuCheck.ok) return { ok: false, message: `CPU-Deck ungueltig: ${cpuCheck.errors.join(" | ")}` };
  return {
    ok: true,
    mode,
    difficulty: state.cpuDifficulty,
    formation: normalizeFormationKey(state.formation),
    playerDeck,
    playerLineup: playerCheck.lineup,
    cpu: currentOpponent,
    cpuDeck,
    cpuLineup: cpuCheck.lineup,
  };
}

function validateMatchDeck(cards, formationKey = DEFAULT_FORMATION) {
  const uniqueIds = new Set();
  const errors = [];
  const cleanCards = cards.filter(Boolean);
  cleanCards.forEach((card) => {
    if (!card.id || uniqueIds.has(card.id)) errors.push("doppelte oder fehlende Karteninstanz");
    uniqueIds.add(card.id);
    if (!card.name || !card.pos) errors.push("fehlende Kartendaten");
  });
  if (!cleanCards.length) errors.push("kein Deck vorhanden");
  if (cleanCards.length < MATCH_ACTIVE_COUNT) errors.push("Deck unvollstaendig");
  if (cleanCards.length < MATCH_CARD_COUNT) errors.push(`Deck benoetigt ${MATCH_CARD_COUNT} Karten inklusive Ersatzbank`);
  if (!cleanCards.some(isGoalkeeper)) errors.push("kein Torwart");
  const built = buildFormationLineup(cleanCards, formationKey);
  errors.push(...built.errors);
  return { ok: !errors.length, errors: [...new Set(errors)], lineup: built.lineup, active: built.active, substitutes: built.substitutes };
}

function buildCpuDeck(difficultyKey, playerDeck) {
  const difficulty = CPU_DIFFICULTIES[normalizeCpuDifficulty(difficultyKey)];
  const targetClass = clamp(Math.round(playerDeck.reduce((sum, card) => sum + normalizeClassIndex(card.cls), 0) / Math.max(1, playerDeck.length)) + difficulty.classOffset, 0, teamClasses.length - 1);
  const pool = GAME_CARDS
    .filter((card) => Math.abs(normalizeClassIndex(card.cls) - targetClass) <= 2)
    .sort((a, b) => rating(b) - rating(a));
  const source = pool.length ? pool : GAME_CARDS;
  const picked = [];
  const needs = [
    { role: "keeper", count: 1 },
    { role: "defense", count: 2 },
    { role: "mid", count: 2 },
    { role: "attack", count: 2 },
  ];
  needs.forEach(({ role, count }) => {
    for (let index = 0; index < count; index += 1) {
      const candidate = chooseCpuDeckCard(source, picked, role, difficulty);
      if (candidate) picked.push(cloneCardForCollection(candidate, `cpu-${difficultyKey}-${picked.length}`));
    }
  });
  while (picked.length < MATCH_CARD_COUNT) {
    const candidate = chooseCpuDeckCard(source, picked, "sub", difficulty);
    if (!candidate) break;
    picked.push(cloneCardForCollection(candidate, `cpu-${difficultyKey}-${picked.length}`));
  }
  return picked.slice(0, MATCH_CARD_COUNT);
}

function chooseCpuDeckCard(source, picked, role, difficulty) {
  const usedSources = new Set(picked.map((card) => sourceCardId(card)));
  const candidates = source.filter((card) => !usedSources.has(sourceCardId(card)) && (role === "sub" || positionFit(card, role).kind !== "wrong"));
  const sorted = [...(candidates.length ? candidates : source.filter((card) => !usedSources.has(sourceCardId(card))))].sort((a, b) => rating(b) - rating(a));
  if (!sorted.length) return null;
  if (difficulty.decisionSkill < 0.7 && sorted.length > 2) return sorted[rand(0, Math.min(3, sorted.length - 1))];
  if (difficulty.decisionSkill < 1 && sorted.length > 1) return sorted[rand(0, Math.min(1, sorted.length - 1))];
  return sorted[0];
}

function runMatchEngine(prepared) {
  const match = {
    id: `match-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: new Date().toISOString(),
    status: "active",
    mode: prepared.mode,
    difficulty: prepared.difficulty,
    formation: prepared.formation,
    playerDeck: prepared.playerDeck.map((card) => card.id),
    cpuDeck: prepared.cpuDeck.map((card) => card.id),
    cpu: { name: prepared.cpu.name, power: prepared.cpu.power, classIndex: prepared.cpu.classIndex, leagueIndex: prepared.cpu.leagueIndex },
    score: { player: 0, cpu: 0 },
    rounds: [],
    usedCards: [],
    result: "pending",
    rewards: { selectionCount: 0, prepared: false, claimed: false },
  };
  state.activeMatch = match;
  saveState();
  const playerUsed = new Set();
  const cpuUsed = new Set();
  drawMatchSituations(MATCH_ROUNDS).forEach((situation, index) => {
    const round = resolveMatchRound({
      round: index + 1,
      situation,
      playerLineup: prepared.playerLineup,
      cpuLineup: prepared.cpuLineup,
      playerUsed,
      cpuUsed,
      difficulty: CPU_DIFFICULTIES[prepared.difficulty],
    });
    if (round.winner === "player") match.score.player += 1;
    if (round.winner === "cpu") match.score.cpu += 1;
    match.rounds.push(round);
    match.usedCards.push(round.player.cardId, round.cpu.cardId);
  });
  match.result = match.score.player > match.score.cpu ? "win" : match.score.player < match.score.cpu ? "loss" : "draw";
  match.status = "completed";
  match.rewards = {
    selectionCount: rewardSelectionsForResult(match.result),
    prepared: true,
    claimed: false,
  };
  return match;
}

function resolveMatchRound({ round, situation, playerLineup, cpuLineup, playerUsed, cpuUsed, difficulty }) {
  const playerCard = chooseBattleCard(playerLineup, situation, playerUsed, { isCpu: false, difficulty });
  const cpuCard = chooseBattleCard(cpuLineup, situation, cpuUsed, { isCpu: true, difficulty });
  if (!MATCH_BALANCE.reuseCards) {
    playerUsed.add(playerCard.id);
    cpuUsed.add(cpuCard.id);
  }
  const playerCalc = calculateRoundValue(playerCard, situation, selectedTactic, "player", difficulty);
  const cpuCalc = calculateRoundValue(cpuCard, situation, situation.tactic, "cpu", difficulty);
  const winner = playerCalc.total >= cpuCalc.total ? "player" : "cpu";
  return {
    round,
    situation: situation.label,
    category: situation.category,
    call: situation.call,
    winner,
    player: { cardId: playerCard.id, name: playerCard.name, pos: playerCard.pos, ...playerCalc },
    cpu: { cardId: cpuCard.id, name: cpuCard.name, pos: cpuCard.pos, ...cpuCalc },
  };
}

function chooseBattleCard(lineup, situation, usedCards, options = {}) {
  const groups = options.isCpu ? situation.cpuGroups : situation.playerGroups;
  const candidates = groups.flatMap((group) => lineupGroupCards(lineup, group)).filter(Boolean);
  const unused = candidates.filter((card) => !usedCards.has(card.id));
  const fallbackUnused = lineupCards(lineup).filter((card) => !usedCards.has(card.id));
  const pool = unused.length ? unused : fallbackUnused.length ? fallbackUnused : candidates.length ? candidates : lineupCards(lineup);
  const sorted = [...pool].sort((a, b) => situationPower(b, situation) - situationPower(a, situation));
  if (!options.isCpu) return sorted[0] || pool[0];
  const skill = options.difficulty?.decisionSkill ?? 0.86;
  if (skill < 0.7 && sorted.length > 2) return sorted[rand(0, Math.min(2, sorted.length - 1))];
  if (skill < 1 && sorted.length > 1 && rand(1, 100) > 78) return sorted[1];
  return sorted[0] || pool[0];
}

function lineupGroupCards(lineup, group) {
  if (group === "keeper") return [lineup.keeper].filter(Boolean);
  if (group === "defense") return lineup.defense || [];
  if (group === "mid") return lineup.mid || [];
  if (group === "attack") return lineup.attack || [];
  if (group === "substitutes") return lineup.substitutes || [];
  return lineupCards(lineup);
}

function calculateRoundValue(card, situation, tactic, side, difficulty) {
  const base = situationPower(card, situation);
  const role = preferredRoleForSituation(situation, side);
  const fit = positionFit(card, role);
  const levelBonus = Math.round(cardLevel(card) * MATCH_BALANCE.levelBonusPerStep);
  const starBonus = proStars(card) * MATCH_BALANCE.starBonus;
  const tacticBonus = tactic === situation.tactic ? MATCH_BALANCE.tacticBonus : 0;
  const formationBonus = fit.kind === "exact" ? MATCH_BALANCE.formationBonus : 0;
  const cpuBonus = 0;
  const random = rand(MATCH_BALANCE.randomMin, MATCH_BALANCE.randomMax);
  const modifiedBase = Math.round(base * fit.multiplier);
  return {
    base,
    category: situation.category,
    levelBonus,
    starBonus,
    positionModifier: fit.multiplier,
    positionText: fit.label,
    tacticBonus,
    formationBonus,
    random,
    extraModifier: cpuBonus,
    total: Math.max(1, modifiedBase + levelBonus + starBonus + tacticBonus + formationBonus + random + cpuBonus),
  };
}

function preferredRoleForSituation(situation, side) {
  const groups = side === "cpu" ? situation.cpuGroups : situation.playerGroups;
  return groups[0] || "attack";
}

function normalizeCardPosition(position) {
  const normalized = String(position || "").toUpperCase();
  const aliases = { ZDM: "DM", ZOM: "CAM", LF: "LA", RF: "RA", TW: "TW", GK: "TW" };
  return aliases[normalized] || normalized;
}

function positionFit(card, role) {
  const pos = normalizeCardPosition(card.pos);
  const exact = {
    keeper: ["TW"],
    defense: ["IV", "CB", "LV", "RV"],
    mid: ["DM", "ZM", "OM", "CAM", "LM", "RM"],
    attack: ["ST", "MS", "LA", "RA"],
  };
  const similar = {
    keeper: [],
    defense: ["DM", "LWB", "RWB", "LM", "RM"],
    mid: ["LWB", "RWB", "LA", "RA", "LV", "RV"],
    attack: ["LM", "RM", "CAM", "OM"],
  };
  if ((exact[role] || []).includes(pos)) return { kind: "exact", multiplier: MATCH_BALANCE.positionFit.exact, label: "passende Position" };
  if ((similar[role] || []).includes(pos)) return { kind: "similar", multiplier: MATCH_BALANCE.positionFit.similar, label: "aehnliche Position" };
  if (role !== "keeper" && pos !== "TW") return { kind: "offRole", multiplier: MATCH_BALANCE.positionFit.offRole, label: "positionsfremd" };
  return { kind: "wrong", multiplier: MATCH_BALANCE.positionFit.wrong, label: "falsche Position" };
}

function rewardSelectionsForResult(result) {
  if (result === "win") return 4;
  if (result === "loss") return 2;
  return 3;
}

function prepareRewardBoard(match) {
  return {
    matchId: match.id,
    result: match.result,
    selectionCount: rewardSelectionsForResult(match.result),
    status: "prepared",
  };
}

function rewardBoardText(match) {
  return `${match.rewards.selectionCount} Belohnungsauswahlen`;
}

function roundLogLine(round) {
  const result = round.winner === "player" ? "Punkt fuer dich" : "Punkt fuer CPU";
  return `Runde ${round.round}: ${round.situation}. ${round.player.name} ${round.player.total} vs ${round.cpu.name} ${round.cpu.total}. ${result}.`;
}

function openPack() {
  if (state.coins < 100) {
    state.log = ["Du brauchst 100 Coins fuer ein Scout-Pack.", ...state.log].slice(0, 8);
    render();
    return;
  }
  state.coins -= 100;
  const nextClass = clamp(state.teamClassIndex + rand(-1, 2), 0, teamClasses.length - 1);
  const card = generateCard(nextClass);
  state.deck.push(card);
  state.log = [`Scout-Pack: ${card.name} (${teamClasses[card.cls]}) kommt in deinen Kader.`, ...state.log].slice(0, 8);
  render();
}

function createOpponent() {
  const difficulty = CPU_DIFFICULTIES[normalizeCpuDifficulty(state.cpuDifficulty)];
  const classIndex = clamp(state.teamClassIndex + difficulty.classOffset + rand(-1, 1), 0, teamClasses.length - 1);
  const leagueIndex = clamp(state.leagueIndex + rand(-1, 1), 0, leagues.length - 1);
  return {
    name: opponents[rand(0, opponents.length - 1)],
    classIndex,
    leagueIndex,
    power: 54 + classIndex * 4 + difficulty.deckBonus + rand(-4, 8),
  };
}

function generateCard(cls) {
  const first = ["Luca", "Mika", "Amira", "Jona", "Elif", "Noel", "Nina", "Ilyas", "Mira", "Toni"];
  const last = ["Brandt", "Sahin", "Rossi", "Weber", "Diallo", "Fischer", "Costa", "Winter"];
  const positions = ["ST", "ZM", "IV", "RA", "LV", "DM", "TW"];
  const club = pick(CLUBS);
  const bonus = cls * 4;
  const name = `${pick(first)} ${pick(last)}`;
  const pos = pick(positions);
  const atk = clamp(rand(38, 70) + bonus, 20, 99);
  const mid = clamp(rand(38, 70) + bonus, 20, 99);
  const def = clamp(rand(38, 70) + bonus, 20, 99);
  const performance = generatedSeasonPerformance(pos, atk, mid, def);
  return {
    id: `card-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    pos,
    club: club.name,
    league: club.league,
    crest: club.crest,
    photo: "",
    cls,
    atk,
    mid,
    def,
    performance,
    stats: buildCardStats(pos, atk, mid, def, cls, performance),
  };
}

function cardDef(id, name, pos, club, cls, atk, mid, def, photo = "", series = "standard") {
  const normalizedClass = normalizeClassIndex(cls);
  const performance = SEASON_PERFORMANCE_DATA[id] || generatedSeasonPerformance(pos, atk, mid, def);
  return withClub({ id, name, pos, club, cls: normalizedClass, atk, mid, def, series: normalizeCardSeries(series), performance, stats: buildCardStats(pos, atk, mid, def, normalizedClass, performance), photo });
}

function cloneCardForCollection(card, prefix = "owned") {
  return {
    ...card,
    photo: card.photo || "",
    sourceId: sourceCardId(card),
    id: `${prefix}-${card.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    series: normalizeCardSeries(card.series),
    level: 1,
    proStars: 0,
    proQuality: "",
  };
}

function drawGameCard(minClass, maxClass, pool = "mixed", dropRates = null, positions = []) {
  const min = clamp(minClass, 0, teamClasses.length - 1);
  const max = clamp(maxClass, min, teamClasses.length - 1);
  const selectedClass = pickClassFromDropRates(normalizeDropRates(dropRates, min, max), min, max);
  const candidates = GAME_CARDS.filter((card) => card.cls === selectedClass && cardMatchesPackPool(card, pool) && cardMatchesPackPositions(card, positions));
  const fallback = GAME_CARDS.filter((card) => card.cls >= min && card.cls <= max && cardMatchesPackPool(card, pool) && cardMatchesPackPositions(card, positions));
  return cloneCardForCollection(pick(candidates.length ? candidates : fallback.length ? fallback : GAME_CARDS));
}

function pickClassFromDropRates(dropRates, minClass, maxClass) {
  const entries = Object.entries(dropRates)
    .map(([key, value]) => [Number(key), Number(value)])
    .filter(([index, value]) => index >= minClass && index <= maxClass && value > 0);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (!entries.length || total <= 0) return rand(minClass, maxClass);
  let roll = Math.random() * total;
  for (const [index, value] of entries) {
    roll -= value;
    if (roll <= 0) return index;
  }
  return entries[entries.length - 1][0];
}

function cardMatchesPackPool(card, pool) {
  if (pool === "men-bundesliga") return card.league === "1. Bundesliga";
  if (pool === "women-bundesliga") return card.league === "Google Pixel Frauen-Bundesliga";
  if (pool === "dfb-pokal") return ["1. Bundesliga", "2. Bundesliga", "3. Liga", "Google Pixel Frauen-Bundesliga", "2. Frauen-Bundesliga"].includes(card.league);
  if (pool === "totw") return cardSeries(card) === "totw" || rating(card) >= 78 || normalizeClassIndex(card.cls) >= 8;
  if (pool === "icon") return ["icon", "legend", "hall-of-fame", "mythic"].includes(cardSeries(card)) || normalizeClassIndex(card.cls) >= teamClasses.length - 1;
  return true;
}

function cardMatchesPackPositions(card, positions) {
  const normalized = normalizePackPositions(positions);
  return !normalized.length || normalized.includes(String(card.pos || "").toUpperCase());
}

function sourceCardId(card) {
  return card.sourceId || card.id;
}

function getFilteredClubs(league) {
  return CLUBS.filter((club) => league === "Alle Ligen" || club.league === league);
}

function getFilteredCards(league, club, player) {
  return GAME_CARDS.filter((card) => {
    const leagueMatches = league === "Alle Ligen" || card.league === league;
    const clubMatches = club === "Alle Vereine" || card.club === club;
    const playerMatches = player === "Alle Spieler" || card.id === player;
    return leagueMatches && clubMatches && playerMatches;
  });
}

function defaultSeriesCards() {
  return [
    makeSeriesCard("ducksch", "summer", 1, 2, 1, 0),
    makeSeriesCard("stage", "winter", 1, 1, 2, 1),
    makeSeriesCard("musiala", "totw", 0, 3, 2, 0),
    makeSeriesCard("wirtz", "tots", 0, 3, 3, 1),
    makeSeriesCard("kane", "icon", 0, 3, 1, 0),
    makeSeriesCard("oberdorf", "mythic", 0, 1, 3, 3),
    makeSeriesCard("gwinn", "anniversary", 1, 1, 2, 2),
    makeSeriesCard("popp", "legend", 0, 3, 1, 1),
    makeSeriesCard("bayern-1", "hall-of-fame", 0, 1, 2, 3),
    makeSeriesCard("werder-f-1", "rookie", 0, 1, 1, 0),
  ].filter(Boolean);
}

function makeSeriesCard(baseId, series, classBoost = 0, atkBoost = 0, midBoost = 0, defBoost = 0) {
  const base = GAME_CARDS.find((card) => card.id === baseId);
  if (!base) return null;
  return cardDef(
    `${base.id}-${series}`,
    base.name,
    base.pos,
    base.club,
    normalizeClassIndex(base.cls + classBoost),
    clamp(base.atk + atkBoost, 20, 99),
    clamp(base.mid + midBoost, 20, 99),
    clamp(base.def + defBoost, 20, 99),
    base.photo,
    series
  );
}

function renderCardStats(card) {
  return `
    <div class="special-stats">
      ${SPECIAL_STATS.map((stat) => `<span>${stat.label} <strong>${statValue(card, stat.key)}</strong></span>`).join("")}
    </div>
    <div class="stats">
      ${statProfile(card).map((stat) => `<span title="${stat.name}">${stat.label} <strong>${statValue(card, stat.key)}</strong></span>`).join("")}
    </div>
  `;
}

function compactStatsText(card) {
  const main = statProfile(card).map((stat) => `${stat.label} ${statValue(card, stat.key)}`).join(" / ");
  const special = SPECIAL_STATS.map((stat) => `${stat.label} ${statValue(card, stat.key)}`).join(" / ");
  return `${main} | ${special}`;
}

function statProfile(card) {
  return isGoalkeeper(card) ? KEEPER_STATS : FIELD_STATS;
}

function isGoalkeeper(card) {
  return ["TW", "GK"].includes(String(card.pos || "").toUpperCase());
}

function ensureCardStats(card) {
  card.performance = card.performance || SEASON_PERFORMANCE_DATA[sourceCardId(card)] || generatedSeasonPerformance(card.pos, card.atk, card.mid, card.def);
  if (!card.stats || typeof card.stats !== "object") {
    card.stats = buildCardStats(card.pos, card.atk, card.mid, card.def, card.cls, card.performance);
  }
  const derived = buildCardStats(card.pos, card.atk, card.mid, card.def, card.cls, card.performance);
  [...FIELD_STATS, ...KEEPER_STATS, ...SPECIAL_STATS].forEach((stat) => {
    if (!Number.isFinite(Number(card.stats[stat.key]))) {
      card.stats[stat.key] = derived[stat.key] || 50;
    } else {
      card.stats[stat.key] = clamp(Math.round(Number(card.stats[stat.key])), 20, 99);
    }
  });
  return card.stats;
}

function buildCardStats(pos, atk = 55, mid = 55, def = 55, cls = 0, performance = null) {
  const safeAtk = Number.isFinite(Number(atk)) ? Number(atk) : 55;
  const safeMid = Number.isFinite(Number(mid)) ? Number(mid) : 55;
  const safeDef = Number.isFinite(Number(def)) ? Number(def) : 55;
  const classBoost = normalizeClassIndex(cls) * 1.2;
  const position = String(pos || "").toUpperCase();
  const result = {};
  const data = performance || generatedSeasonPerformance(pos, safeAtk, safeMid, safeDef);

  if (["TW", "GK"].includes(position)) {
    const saveScore = scaleStat(data.saves || 70, 35, 130);
    const cleanSheetScore = scaleStat(data.cleanSheets || 5, 0, 16);
    const goalsAgainstScore = scaleStat(2.2 - (data.goalsAgainstPerGame || 1.4), 0.3, 1.8);
    const penaltyScore = scaleStat(data.penaltiesSaved || 0, 0, 4);
    const catchScore = scaleStat(data.catchRate || 70, 55, 90);
    const passScore = scaleStat(data.passRate || 65, 45, 90);
    result.reflexes = blendedStat(saveScore * 0.62 + penaltyScore * 0.18 + goalsAgainstScore * 0.2, safeDef, classBoost);
    result.handling = blendedStat(catchScore * 0.7 + cleanSheetScore * 0.3, safeDef, classBoost);
    result.area = blendedStat(cleanSheetScore * 0.42 + goalsAgainstScore * 0.34 + catchScore * 0.24, safeDef, classBoost);
    result.kicking = blendedStat(passScore * 0.74 + cleanSheetScore * 0.26, safeMid, classBoost);
    result.reaction = blendedStat(saveScore * 0.7 + penaltyScore * 0.3, safeDef, classBoost);
    result.organization = blendedStat(cleanSheetScore * 0.44 + passScore * 0.34 + goalsAgainstScore * 0.22, safeMid, classBoost);
    result.iq = blendedStat(passScore * 0.42 + cleanSheetScore * 0.34 + goalsAgainstScore * 0.24, safeMid, classBoost);
    result.teamgeist = blendedStat(cleanSheetScore * 0.38 + catchScore * 0.22 + scaleStat(data.minutes || 1800, 500, 3100) * 0.4, safeMid, classBoost);
    return result;
  }

  const winger = ["LA", "RA", "LM", "RM", "LWB", "RWB"].includes(position);
  const striker = ["ST", "MS"].includes(position);
  const creator = ["CAM", "ZM", "OM"].includes(position);
  const holder = ["DM", "IV", "CB", "LV", "RV", "LWB", "RWB"].includes(position);
  const centerBack = ["IV", "CB"].includes(position);

  const goalsPer90 = per90(data.goals || 0, data.minutes || 900);
  const assistsPer90 = per90(data.assists || 0, data.minutes || 900);
  const minutesScore = scaleStat(data.minutes || 900, 300, 3200);
  const goalScore = scaleStat(goalsPer90, 0, 0.9);
  const assistScore = scaleStat(assistsPer90, 0, 0.45);
  const duelScore = scaleStat(data.duelRate || 45, 35, 70);
  const passScore = scaleStat(data.passRate || 70, 58, 92);
  const dribbleScore = scaleStat(data.dribbleRate || 45, 30, 78);
  const distanceScore = scaleStat(data.distance || 9.4, 8.2, 12.4);
  const disciplinePenalty = Math.min(8, (Number(data.yellowCards) || 0) * 0.45 + (Number(data.redCards) || 0) * 2.5);

  result.pace = blendedStat(distanceScore * 0.52 + dribbleScore * 0.3 + minutesScore * 0.18 + (winger ? 5 : 0), safeAtk, classBoost);
  result.finish = blendedStat(goalScore * 0.76 + assistScore * 0.12 + duelScore * 0.12 + (striker ? 5 : winger ? 2 : 0), safeAtk, classBoost);
  result.passing = blendedStat(passScore * 0.62 + assistScore * 0.3 + minutesScore * 0.08 + (creator ? 4 : 0), safeMid, classBoost);
  result.dribble = blendedStat(dribbleScore * 0.66 + distanceScore * 0.18 + assistScore * 0.16 + (winger || creator ? 4 : 0), safeMid, classBoost);
  result.defense = blendedStat(duelScore * 0.58 + minutesScore * 0.22 + passScore * 0.2 + (holder ? 5 : 0) - disciplinePenalty, safeDef, classBoost);
  result.physical = blendedStat(duelScore * 0.46 + distanceScore * 0.32 + minutesScore * 0.22 + (centerBack || striker || position === "DM" ? 4 : 0), safeDef, classBoost);
  result.iq = blendedStat(passScore * 0.42 + assistScore * 0.22 + minutesScore * 0.22 + duelScore * 0.14 + (creator ? 3 : 0), safeMid, classBoost);
  result.teamgeist = blendedStat(minutesScore * 0.42 + passScore * 0.24 + duelScore * 0.18 + assistScore * 0.16 - disciplinePenalty * 0.5, safeMid, classBoost);
  return result;
}

function statClamp(value) {
  return clamp(Math.round(value), 20, 99);
}

function blendedStat(performanceValue, legacyValue, classBoost = 0) {
  return statClamp(performanceValue * 0.72 + Number(legacyValue || 55) * 0.28 + classBoost);
}

function scaleStat(value, min, max) {
  if (max <= min) return 50;
  return clamp(Math.round(35 + ((Number(value) - min) / (max - min)) * 60), 20, 99);
}

function per90(value, minutes) {
  return Number(minutes) > 0 ? (Number(value) || 0) * 90 / Number(minutes) : 0;
}

function generatedSeasonPerformance(pos, atk = 55, mid = 55, def = 55) {
  const position = String(pos || "").toUpperCase();
  const safeAtk = Number(atk) || 55;
  const safeMid = Number(mid) || 55;
  const safeDef = Number(def) || 55;
  if (["TW", "GK"].includes(position)) {
    return {
      saves: Math.round(42 + safeDef * 0.86),
      cleanSheets: Math.round(2 + safeDef / 9),
      goalsAgainstPerGame: Number((2.25 - safeDef / 72).toFixed(2)),
      penaltiesSaved: Math.max(0, Math.round((safeDef - 58) / 18)),
      catchRate: Math.round(55 + safeDef * 0.34),
      passRate: Math.round(42 + safeMid * 0.45),
      minutes: Math.round(650 + safeDef * 24),
    };
  }
  const attacking = ["ST", "MS", "LA", "RA", "LM", "RM", "CAM"].includes(position);
  const defensive = ["IV", "CB", "LV", "RV", "LWB", "RWB", "DM"].includes(position);
  return {
    goals: Math.max(0, Math.round((attacking ? safeAtk : safeAtk * 0.34) / 6 - 4)),
    assists: Math.max(0, Math.round((safeMid + (attacking ? safeAtk * 0.4 : 0)) / 9 - 5)),
    minutes: Math.round(600 + Math.max(safeAtk, safeMid, safeDef) * 25),
    duelRate: Math.round(36 + safeDef * 0.34 + (defensive ? 6 : 0)),
    passRate: Math.round(54 + safeMid * 0.42),
    dribbleRate: Math.round(30 + safeAtk * 0.36 + (attacking ? 6 : 0)),
    distance: Number((8.2 + safeMid / 28 + safeDef / 60).toFixed(1)),
    yellowCards: Math.max(0, Math.round((safeDef + safeMid) / 28 - 2)),
    redCards: 0,
  };
}

function statValue(card, key) {
  return clamp((ensureCardStats(card)[key] || 50) + cardProgressBonus(card), 20, 120);
}

function attackingPower(card) {
  if (isGoalkeeper(card)) return rating(card) * 0.42;
  return statValue(card, "finish") * 0.42 + statValue(card, "pace") * 0.24 + statValue(card, "dribble") * 0.22 + statValue(card, "iq") * 0.12;
}

function midfieldPower(card) {
  if (isGoalkeeper(card)) return rating(card) * 0.52;
  return statValue(card, "passing") * 0.42 + statValue(card, "dribble") * 0.2 + statValue(card, "iq") * 0.22 + statValue(card, "teamgeist") * 0.16;
}

function defensivePower(card) {
  if (isGoalkeeper(card)) {
    return statValue(card, "reflexes") * 0.34 + statValue(card, "handling") * 0.2 + statValue(card, "area") * 0.2 + statValue(card, "organization") * 0.26;
  }
  return statValue(card, "defense") * 0.48 + statValue(card, "physical") * 0.26 + statValue(card, "iq") * 0.14 + statValue(card, "teamgeist") * 0.12;
}

function drawMatchSituations(count) {
  const shuffled = [...matchSituations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function chooseCardForSituation(cards, situation) {
  return [...cards].sort((a, b) => situationPower(b, situation) - situationPower(a, situation))[0] || cards[0];
}

function chooseCardForMatchSituation(availableCards, lineup, situation) {
  const roleCards = situationLineupCards(lineup, situation).filter((card) => availableCards.some((available) => available.id === card.id));
  return chooseCardForSituation(roleCards.length ? roleCards : availableCards, situation);
}

function situationLineupCards(lineup, situation) {
  const label = String(situation.label || "").toLowerCase();
  if (situation.goalBias < 0 || label.includes("pressing") || label.includes("abwehr")) {
    return [lineup.keeper, ...lineup.defense].filter(Boolean);
  }
  if (label.includes("spielaufbau") || label.includes("flanke") || label.includes("freistoss")) {
    return [...lineup.mid, ...lineup.attack].filter(Boolean);
  }
  return [...lineup.attack, ...lineup.mid].filter(Boolean);
}

function situationPower(card, situation) {
  const totalWeight = situation.stats.reduce((sum, stat) => sum + stat.weight, 0) || 1;
  const value = situation.stats.reduce((sum, stat) => sum + actionStatValue(card, stat.key) * stat.weight, 0) / totalWeight;
  return Math.round(value);
}

function actionStatValue(card, key) {
  if (!isGoalkeeper(card)) return statValue(card, key);
  const keeperMap = {
    pace: "reaction",
    finish: "kicking",
    passing: "organization",
    dribble: "reaction",
    defense: "reflexes",
    physical: "area",
  };
  return statValue(card, keeperMap[key] || "reflexes");
}

function maybePromoteLeague() {
  const rows = [{ name: "Du", lp: state.lp, player: true }, ...state.leagueRows].sort((a, b) => b.lp - a.lp);
  const rank = rows.findIndex((row) => row.player) + 1;
  if (rank <= 3 && state.leagueIndex > 0) {
    state.leagueIndex -= 1;
    state.log = [`Aufstieg! Du spielst jetzt ${leagues[state.leagueIndex]}.`, ...state.log].slice(0, 8);
    resetLeagueRows();
  }
}

function settleWeek() {
  const rows = [{ name: "Du", lp: state.lp, player: true }, ...state.leagueRows].sort((a, b) => b.lp - a.lp);
  const rank = rows.findIndex((row) => row.player) + 1;

  if (rank <= 3 && state.leagueIndex > 0) {
    state.leagueIndex -= 1;
    state.log = [`Wochenabrechnung: Platz ${rank}. Aufstieg in ${leagues[state.leagueIndex]}.`, ...state.log].slice(0, 8);
  } else if (rank >= 16 && state.leagueIndex < leagues.length - 1) {
    state.leagueIndex += 1;
    state.log = [`Wochenabrechnung: Platz ${rank}. Abstieg in ${leagues[state.leagueIndex]}.`, ...state.log].slice(0, 8);
  } else {
    state.log = [`Wochenabrechnung: Platz ${rank}. Liga gehalten.`, ...state.log].slice(0, 8);
  }

  state.lp = Math.max(120, Math.round(state.lp * 0.45));
  resetLeagueRows();
}

function resetLeagueRows() {
  state.leagueRows = names.map((name, index) => ({
    name,
    lp: Math.max(120, state.lp - rand(20, 120) - index * 3),
  }));
}

function rating(card) {
  const mainStats = statProfile(card).map((stat) => statValue(card, stat.key));
  const specialStats = SPECIAL_STATS.map((stat) => statValue(card, stat.key));
  const mainAverage = mainStats.reduce((sum, value) => sum + value, 0) / mainStats.length;
  const specialAverage = specialStats.reduce((sum, value) => sum + value, 0) / specialStats.length;
  return clamp(Math.round(mainAverage * 0.86 + specialAverage * 0.14), 20, 299);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pick(items) {
  return items[rand(0, items.length - 1)];
}

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE").format(value);
}

function crestUrl(clubId) {
  return `https://tmssl.akamaized.net/images/wappen/head/${clubId}.png`;
}

function getClub(name) {
  const normalizedName = LEGACY_CLUB_MAP[name] || name;
  return CLUBS.find((club) => club.name === normalizedName) || CLUBS[0];
}

function playerPhoto(card) {
  return card.photo || "";
}

function renderPlayerListPhoto(card) {
  const photo = playerPhoto(card);
  return photo ? `<img src="${escapeAttr(photo)}" alt="${escapeAttr(card.name)} Profilbild" />` : "";
}

function withClub(card) {
  const club = getClub(card.club);
  return { ...card, club: club.name, league: club.league, crest: club.crest };
}

function normalizeCard(card) {
  const mappedClubName = LEGACY_CLUB_MAP[card.club] || card.club;
  const normalized = withClub({ ...card, club: mappedClubName, cls: normalizeClassIndex(card.cls), series: normalizeCardSeries(card.series) });
  normalized.performance = normalized.performance || SEASON_PERFORMANCE_DATA[sourceCardId(normalized)] || generatedSeasonPerformance(normalized.pos, normalized.atk, normalized.mid, normalized.def);
  normalized.stats = buildCardStats(normalized.pos, normalized.atk, normalized.mid, normalized.def, normalized.cls, normalized.performance);
  return {
    ...normalized,
    photo: normalized.photo || "",
    sourceId: card.sourceId || matchingGameCardId(normalized) || card.id,
    series: normalizeCardSeries(normalized.series),
    level: normalizeCardLevel(card.level),
    proStars: normalizeProStars(card.proStars),
    proQuality: normalizeProStars(card.proStars) ? normalizeProQuality(card.proQuality) : "",
  };
}

function normalizeClassIndex(value) {
  return clamp(Number(value) || 0, 0, teamClasses.length - 1);
}

function classRangeLabel(index) {
  const range = CARD_CLASS_RANGES[normalizeClassIndex(index)];
  return range ? `${range.min}-${range.max}` : "";
}

function classLabel(index) {
  const normalized = normalizeClassIndex(index);
  const range = classRangeLabel(normalized);
  return `${teamClasses[normalized]}${range ? ` (${range})` : ""}`;
}

function normalizeCardSeries(series) {
  return CARD_SERIES.some((item) => item.value === series) ? series : "standard";
}

function cardSeries(card) {
  card.series = normalizeCardSeries(card.series);
  return card.series;
}

function cardSeriesLabel(series) {
  return CARD_SERIES.find((item) => item.value === normalizeCardSeries(series))?.label || "Standard";
}

function cardSeriesBonus(card) {
  return CARD_SERIES.find((item) => item.value === cardSeries(card))?.bonus || 0;
}

function normalizeCardLevel(level) {
  return clamp(Math.round(Number(level) || 1), 1, CARD_MAX_LEVEL);
}

function normalizeProStars(stars) {
  return clamp(Math.round(Number(stars) || 0), 0, PRO_MAX_STARS);
}

function cardLevel(card) {
  card.level = normalizeCardLevel(card.level);
  return card.level;
}

function proStars(card) {
  card.proStars = normalizeProStars(card.proStars);
  return card.proStars;
}

function normalizeProQuality(quality) {
  return ["gold", "silver", "bronze"].includes(quality) ? quality : "gold";
}

function cardProKey(card) {
  return `${sourceCardId(card)}|${normalizeClassIndex(card.cls)}|${cardSeries(card)}|${proStars(card)}|${card.proQuality || ""}`;
}

function cardFusionBaseKey(card) {
  return `${sourceCardId(card)}|${normalizeClassIndex(card.cls)}|${cardSeries(card)}|${proStars(card)}|${proStars(card) ? normalizeProQuality(card.proQuality) : ""}`;
}

function fusionPartnerFor(card) {
  if (!card || cardLevel(card) < CARD_MAX_LEVEL || proStars(card) >= PRO_MAX_STARS) return null;
  return state.deck.find((candidate) => (
    candidate.id !== card.id
    && cardFusionBaseKey(candidate) === cardFusionBaseKey(card)
    && cardLevel(candidate) >= CARD_MAX_LEVEL
  )) || null;
}

function levelCard(cardId, amount = 10) {
  const card = state.deck.find((item) => item.id === cardId);
  if (!card) return;
  const before = cardLevel(card);
  card.level = Math.min(CARD_MAX_LEVEL, before + Math.max(1, Number(amount) || 10));
  state.log = [`${card.name}: Level ${before} -> ${card.level}.`, ...state.log].slice(0, 8);
}

function fuseCardToPro(cardId) {
  let card = state.deck.find((item) => item.id === cardId);
  const partner = fusionPartnerFor(card);
  if (!card || !partner) return;
  if (cardLevel(partner) > cardLevel(card)) {
    card = partner;
  }
  const consumed = card.id === partner.id ? state.deck.find((item) => item.id === cardId) : partner;
  const nextStars = Math.min(PRO_MAX_STARS, proStars(card) + 1);
  const quality = proStars(card) ? normalizeProQuality(card.proQuality) : evolutionQualityFor(card, consumed);
  card.proStars = nextStars;
  card.proQuality = quality;
  card.level = 1;
  state.deck = state.deck.filter((item) => item.id !== consumed.id);
  if (state.selected.includes(consumed.id) && !state.selected.includes(card.id)) {
    state.selected = [card.id, ...state.selected].slice(0, MATCH_CARD_COUNT);
  }
  state.selected = state.selected.filter((id) => id !== consumed.id);
  state.log = [`Evolution: ${card.name} erhaelt ${proStarsText(nextStars, quality)} und startet wieder bei Level 1.`, ...state.log].slice(0, 8);
}

function goldStars(count) {
  return "★".repeat(Math.max(0, Number(count) || 0));
}

function silverStars(count) {
  return "☆".repeat(Math.max(0, Number(count) || 0));
}

function bronzeStars(count) {
  return "\u2605".repeat(Math.max(0, Number(count) || 0));
}

function evolutionQualityFor(card, partner) {
  const classIndex = Math.min(normalizeClassIndex(card.cls), normalizeClassIndex(partner.cls));
  if (classIndex <= 5) return "bronze";
  if (classIndex === 6) return "silver";
  return "gold";
}

function proStarsText(count, quality = "gold") {
  if (quality === "bronze") return `${bronzeStars(count)} Bronze`;
  return quality === "silver" ? `${silverStars(count)} Silber` : `${goldStars(count)} Gold`;
}

function proBadge(card) {
  const stars = proStars(card);
  if (!stars) return "";
  const quality = normalizeProQuality(card.proQuality);
  const label = quality === "bronze" ? "Bronze Evolution" : quality === "silver" ? "Silber Evolution" : "Gold Evolution";
  const starsText = quality === "bronze" ? bronzeStars(stars) : quality === "silver" ? silverStars(stars) : goldStars(stars);
  return `<div class="pro-badge pro-${quality}" title="${label}">${starsText}</div>`;
}

function cardProgressBonus(card) {
  const levelBonus = Math.floor((cardLevel(card) - 1) / 20);
  const quality = proStars(card) ? normalizeProQuality(card.proQuality) : "";
  const proBonus = proStars(card) * (quality === "bronze" ? 1 : quality === "silver" ? 2 : 4);
  return levelBonus + proBonus + cardSeriesBonus(card);
}

function renderHeaderClubCrest() {
  const crest = document.querySelector(".club-crest");
  if (!crest || crest.querySelector("img")) return;
  const werder = getClub("Werder Bremen");
  crest.textContent = "";
  crest.innerHTML = `<img src="${werder.crest}" alt="Werder Bremen Wappen" />`;
}

function matchingGameCardId(card) {
  const exact = GAME_CARDS.find((gameCard) => gameCard.id === card.id || (gameCard.name === card.name && gameCard.club === card.club && cardSeries(gameCard) === cardSeries(card)));
  return exact ? exact.id : null;
}

function migrateSelectedIds(selectedIds, deck) {
  const result = selectedIds
    .map((id) => deck.find((card) => card.id === id || card.sourceId === id))
    .filter(Boolean)
    .map((card) => card.id);

  const fallback = deck.slice(0, MATCH_CARD_COUNT).map((card) => card.id);
  const selected = result.length ? result : fallback;
  return [...new Set([...selected, ...fallback])].slice(0, MATCH_CARD_COUNT);
}
