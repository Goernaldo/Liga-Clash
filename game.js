const teamClasses = [
  "Gewöhnlich",
  "Ungewöhnlich",
  "Selten",
  "Besonders Selten",
  "Ultra Selten",
  "Episch",
  "Legendär",
  "Elite",
  "Icon",
];

const CARD_CLASS_RANGES = [
  { id: "common", label: "Gewöhnlich", min: 50, max: 59 },
  { id: "uncommon", label: "Ungewöhnlich", min: 60, max: 69 },
  { id: "rare", label: "Selten", min: 70, max: 74 },
  { id: "super-rare", label: "Besonders selten", min: 75, max: 79 },
  { id: "ultra-rare", label: "Ultra selten", min: 80, max: 84 },
  { id: "epic", label: "Episch", min: 85, max: 89 },
  { id: "legendary", label: "Legendär", min: 90, max: 94 },
  { id: "elite", label: "Elite", min: 95, max: 99 },
  { id: "icon", label: "Icon", min: 96, max: 99 },
];

const CARD_MAX_LEVEL = 100;
const PRO_MAX_LEVEL = 100;
const PRO_MAX_STARS = 5;
const PLAYER_IMAGE_PLACEHOLDER = "assets/players/placeholder.svg";
const PLAYER_IMAGE_SILHOUETTE = "assets/players/player-silhouette.svg";
const BOOSTER_CONFIG_STORAGE_KEY = "liga-clash-booster-config-v1";
const COMMUNITY_STORAGE_KEYS = {
  ideas: "kickoff-supercard-ideas-v1",
  bugs: "kickoff-supercard-bugs-v1",
  applications: "kickoff-supercard-applications-v1",
  contacts: "kickoff-supercard-contacts-v1",
  forum: "kickoff-supercard-forum-v1",
  news: "kickoff-supercard-community-news-v1",
  roadmap: "kickoff-supercard-roadmap-v1",
  settings: "kickoff-supercard-community-settings-v1",
};
const COMMUNITY_ITEM_STATUSES = ["Neu", "In Prüfung", "Geplant", "In Entwicklung", "Erledigt", "Abgelehnt"];
const COMMUNITY_BUG_STATUSES = ["Neu", "Bestätigt", "In Bearbeitung", "Behoben", "Geschlossen"];
const COMMUNITY_APPLICATION_STATUSES = ["Neu", "In Prüfung", "Warteliste", "Angenommen", "Abgelehnt"];
const COMMUNITY_FORUM_CATEGORIES = [
  { id: "announcements", icon: "📢", label: "Ankündigungen" },
  { id: "ideas", icon: "💡", label: "Ideen & Wünsche" },
  { id: "bugs", icon: "🐞", label: "Fehler & Bugs" },
  { id: "general", icon: "💬", label: "Allgemeine Diskussion" },
];
const COMMUNITY_FEATURE_DEFAULTS = {
  ideas: true,
  forum: true,
  bugs: true,
  applications: true,
  contact: true,
  news: true,
  roadmap: true,
};
const CARD_PROGRESSION = {
  maxLevel: CARD_MAX_LEVEL,
  maxStars: 5,
  starLevelCaps: { 1: 10, 2: 20, 3: 30, 4: 50, 5: 100 },
  starDuplicateCosts: { 1: 1, 2: 2, 3: 3, 4: 5 },
  xpBase: 120,
  xpStep: 24,
  levelButtonXp: 2600,
  fusionXp: 1800,
};
const PLAYER_IMAGE_BLOCKED_TYPES = ["cartoon", "comic", "generated", "ai-generated", "childlike", "dummy", "placeholder-temporary"];
const CARD_SYSTEM = globalThis.LigaClashCardSystem || null;
const DECK_SYSTEM = globalThis.LigaClashDeckSystem || null;
const BOOSTER_SYSTEM = globalThis.LigaClashBoosterSystem || null;
const SEASON_2026_27_DATA = globalThis.LIGA_CLASH_SEASON_2026_27 || null;
const SEASON_2026_27_STATUS = SEASON_2026_27_DATA?.dataStatus || {
  season: "2026/27",
  lastSquadUpdate: "2026-07-13",
  transferWindowOpen: true,
  completeness: "partial",
  finalSeasonSquads: false,
};
const CURRENT_SEASON = SEASON_2026_27_STATUS.season || "2026/27";
const SQUAD_SEASONS = ["2026/27", "2025/26", "2024/25"];
const HISTORICAL_SEASONS = new Set(SQUAD_SEASONS.filter((season) => season !== CURRENT_SEASON));
const DB_SEASONS = [
  { value: CURRENT_SEASON, label: `Aktuelle Saison ${CURRENT_SEASON}` },
  { value: "2025/26", label: "Saison 2025/26" },
  { value: "2024/25", label: "Saison 2024/25" },
  { value: "all", label: "Alle Saisons" },
];

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

const ADMIN_OWNER_ID = "user-owner-goernaldo";
const ADMIN_ROLES = ["Owner", "Admin", "Moderator", "Tester", "User"];
const ADMIN_MODULES = [
  "dashboard", "users", "roles", "players", "cards", "clubs", "nations", "leagues",
  "boosters", "droprates", "missions", "events", "shop", "datacheck",
  "draftboard", "design", "version", "export", "backups",
  "squads", "season-archive",
  "level-system", "star-system", "fusion", "deck-rules", "match-rules",
  "season-management", "schedules", "promotion-relegation",
  "battle-pass", "daily-login",
  "community-dashboard", "community-ideas", "community-forum", "community-applications", "community-bugs", "community-messages", "community-news", "community-roadmap", "community-settings",
  "rights", "admin-audit",
  "data-duplicates",
  "system-general", "storage",
];
const ADMIN_PERMISSION_MATRIX = {
  Owner: ["admin.open", "admin.manage", "users.manage", "roles.manage", "wallet.grant", "economy.test", "data.reset", "import.write", "export.read", "backup.manage", "logs.read", "project.manage", "content.manage", "game-data.manage", "boosters.manage", "droprates.manage", "events.manage", "missions.manage", "shop.manage", "draftboard.manage"],
  Admin: ["admin.open", "users.view", "wallet.grant", "economy.test", "export.read", "backup.create", "logs.read", "project.manage", "content.manage", "game-data.manage", "boosters.manage", "droprates.manage", "events.manage", "missions.manage", "shop.manage", "draftboard.manage"],
  Moderator: ["admin.open", "users.view", "logs.read", "content.manage", "events.manage", "missions.view"],
  Tester: ["admin.open", "logs.read", "export.read", "preview.use"],
  User: [],
};
const ADMIN_MODULE_PERMISSIONS = {
  dashboard: "admin.open",
  users: "users.view",
  roles: "roles.manage",
  players: "game-data.manage",
  cards: "game-data.manage",
  clubs: "game-data.manage",
  nations: "game-data.manage",
  leagues: "game-data.manage",
  boosters: "boosters.manage",
  droprates: "droprates.manage",
  missions: "missions.manage",
  news: "content.manage",
  events: "events.manage",
  shop: "shop.manage",
  platzpass: "project.manage",
  draftboard: "draftboard.manage",
  datacheck: "game-data.manage",
  design: "project.manage",
  texts: "project.manage",
  version: "project.manage",
  status: "project.manage",
  import: "import.write",
  export: "export.read",
  backups: "backup.create",
  logs: "logs.read",
  settings: "project.manage",
  transfers: "game-data.manage",
  editor: "game-data.manage",
  "clubs-overview": "game-data.manage",
  teams: "game-data.manage",
  squads: "game-data.manage",
  "player-images": "game-data.manage",
  "player-duplicates": "game-data.manage",
  "season-archive": "game-data.manage",
  "cards-overview": "game-data.manage",
  "card-designs": "project.manage",
  "card-values": "game-data.manage",
  "level-system": "game-data.manage",
  "star-system": "game-data.manage",
  fusion: "game-data.manage",
  "deck-rules": "game-data.manage",
  "match-rules": "game-data.manage",
  "cpu-opponents": "game-data.manage",
  "competitions-overview": "events.manage",
  "season-management": "events.manage",
  tables: "events.manage",
  schedules: "events.manage",
  "promotion-relegation": "events.manage",
  cups: "events.manage",
  tournaments: "events.manage",
  "economy-overview": "shop.manage",
  currencies: "shop.manage",
  achievements: "missions.manage",
  "battle-pass": "project.manage",
  "daily-login": "shop.manage",
  "reward-pools": "shop.manage",
  "community-overview": "content.manage",
  mailbox: "content.manage",
  notifications: "content.manage",
  support: "content.manage",
  "community-events": "events.manage",
  reports: "content.manage",
  "community-dashboard": "content.manage",
  "community-ideas": "content.manage",
  "community-forum": "content.manage",
  "community-applications": "content.manage",
  "community-bugs": "content.manage",
  "community-messages": "content.manage",
  "community-news": "content.manage",
  "community-roadmap": "content.manage",
  "community-settings": "content.manage",
  rights: "roles.manage",
  bans: "users.manage",
  "login-history": "logs.read",
  "admin-audit": "logs.read",
  "data-overview": "game-data.manage",
  "data-duplicates": "game-data.manage",
  "season-mixing": "game-data.manage",
  migrations: "backup.create",
  "error-log": "logs.read",
  "system-general": "project.manage",
  storage: "project.manage",
  security: "project.manage",
  maintenance: "project.manage",
};

const ADMIN_NAV_GROUPS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "DB",
    pages: [{ id: "dashboard", label: "Uebersicht", section: "dashboard" }],
  },
  {
    id: "clubs-players",
    label: "Vereine & Spieler",
    icon: "VS",
    pages: [
      { id: "clubs", label: "Vereine", section: "clubs" },
      { id: "players", label: "Spieler", section: "players" },
      { id: "squads", label: "Kader", section: "squads" },
      { id: "season-archive", label: "Saisonarchiv", section: "season-archive" },
    ],
  },
  {
    id: "cards-gameplay",
    label: "Karten & Gameplay",
    icon: "KG",
    pages: [
      { id: "cards", label: "Karten", section: "cards" },
      { id: "level-system", label: "Levelsystem", section: "level-system" },
      { id: "star-system", label: "Sternesystem", section: "star-system" },
      { id: "fusion", label: "Fusion", section: "fusion" },
      { id: "deck-rules", label: "Deckregeln", section: "deck-rules" },
      { id: "match-rules", label: "Matchregeln", section: "match-rules" },
      { id: "draftboard", label: "Draft Board", section: "draftboard" },
    ],
  },
  {
    id: "competitions",
    label: "Wettbewerbe",
    icon: "WB",
    pages: [
      { id: "leagues", label: "Ligen", section: "leagues" },
      { id: "season-management", label: "Saisons", section: "season-management" },
      { id: "schedules", label: "Spielplaene", section: "schedules" },
      { id: "promotion-relegation", label: "Aufstieg & Abstieg", section: "promotion-relegation" },
      { id: "events", label: "Events", section: "events" },
    ],
  },
  {
    id: "economy",
    label: "Belohnungen & Wirtschaft",
    icon: "BW",
    pages: [
      { id: "boosters", label: "Packs", section: "boosters" },
      { id: "droprates", label: "Packchancen", section: "droprates" },
      { id: "shop", label: "Shop", section: "shop" },
      { id: "missions", label: "Missionen", section: "missions" },
      { id: "battle-pass", label: "Battle Pass", section: "battle-pass" },
      { id: "daily-login", label: "Daily Login", section: "daily-login" },
    ],
  },
  {
    id: "community",
    label: "COMMUNITY",
    icon: "🌍",
    pages: [
      { id: "community-dashboard", label: "Dashboard", section: "community-dashboard" },
      { id: "community-ideas", label: "Ideen", section: "community-ideas" },
      { id: "community-forum", label: "Forum", section: "community-forum" },
      { id: "community-applications", label: "Bewerbungen", section: "community-applications" },
      { id: "community-bugs", label: "Fehlermeldungen", section: "community-bugs" },
      { id: "community-messages", label: "Nachrichten", section: "community-messages" },
      { id: "community-news", label: "News", section: "community-news" },
      { id: "community-roadmap", label: "Roadmap", section: "community-roadmap" },
      { id: "community-settings", label: "Community Einstellungen", section: "community-settings" },
    ],
  },
  {
    id: "users-rights",
    label: "Benutzer & Rechte",
    icon: "BR",
    pages: [
      { id: "users", label: "Benutzer", section: "users" },
      { id: "roles", label: "Rollen", section: "roles" },
      { id: "rights", label: "Rechte", section: "rights" },
      { id: "admin-audit", label: "Admin-Protokoll", section: "admin-audit" },
    ],
  },
  {
    id: "data-management",
    label: "Datenverwaltung",
    icon: "DV",
    pages: [
      { id: "datacheck", label: "Datenpruefung", section: "datacheck" },
      { id: "duplicates", label: "Duplikate", section: "data-duplicates" },
      { id: "export", label: "Import/Export", section: "export" },
      { id: "backups", label: "Backups", section: "backups" },
    ],
  },
  {
    id: "settings",
    label: "Einstellungen",
    icon: "ES",
    pages: [
      { id: "system-general", label: "Allgemein", section: "system-general" },
      { id: "design", label: "Design", section: "design" },
      { id: "storage", label: "Speicher", section: "storage" },
      { id: "version", label: "Version", section: "version" },
    ],
  },
];

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
].map(([id, name, pos, club, cls, atk, mid, def]) => markCurrentSeasonCard(cardDef(id, name, pos, club, cls, atk, mid, def)));

const BUNDESLIGA_26_27_SQUAD_CARDS = Array.isArray(globalThis.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS)
  ? globalThis.LIGA_CLASH_BUNDESLIGA_26_27_SQUADS.map(normalizeBundesligaSquadCard).filter(Boolean)
  : [];

GAME_CARDS.push(...SEASON_26_27_CARDS.filter((card) => !cardIdentityExists(GAME_CARDS, card)));
GAME_CARDS.push(...BUNDESLIGA_26_27_SQUAD_CARDS.filter((card) => !cardIdentityExists(GAME_CARDS, card)));
applyPartOneRosterOverrides(GAME_CARDS);
const REMOVED_TEMPORARY_PLAYER_COUNT = clearTemporaryPlayerCatalog(GAME_CARDS);

const baseCards = [];

const names = ["Thomas", "Max", "Anna", "Chris", "Kevin", "Tim", "Marco", "Leyla", "Nico", "Sara", "Ben", "Milan", "Noah", "Lina", "David", "Yara", "Omar"];
const opponents = ["FC Rheinpark", "Union Hafenstadt", "SV Allee 04", "VfB Nordkurve", "SC Bergtal", "Rot-Weiss Zentrum"];
const careerOpponents = ["SV Gruenwald", "FC Nord", "Berlin SC", "Rot-Weiss Zentrum", "Union Hafenstadt", "Energie Cottbus", "Werder Bremen", "Borussia Dortmund", "FC Bayern Muenchen", "Champions XI"];
const matchSituations = [
  { id: "striker-vs-centerback", label: "Stuermer gegen Verteidiger", description: "Der Angreifer sucht den Abschluss gegen die Innenverteidigung.", call: "Abschluss + Physis gegen Defensive", attackerCategory: "attack", defenderCategory: "defense", primaryStat: "finish", secondaryStat: "physical", primaryWeight: 0.7, secondaryWeight: 0.3, category: "Abschluss", stats: [{ key: "finish", weight: 0.7 }, { key: "physical", weight: 0.3 }], playerGroups: ["attack"], cpuGroups: ["defense"], tactic: "konter", goalBias: 1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "wing-vs-fullback", label: "Fluegelduell", description: "Tempo und Dribbling entscheiden das Duell auf dem Fluegel.", call: "Tempo + Dribbling entscheiden", attackerCategory: "attack", defenderCategory: "defense", primaryStat: "pace", secondaryStat: "dribble", primaryWeight: 0.58, secondaryWeight: 0.42, category: "Tempoduell", stats: [{ key: "pace", weight: 0.58 }, { key: "dribble", weight: 0.42 }], playerGroups: ["attack", "mid"], cpuGroups: ["defense"], tactic: "konter", goalBias: 0, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "midfield-control", label: "Mittelfeldduell", description: "Die Teams kaempfen um Kontrolle im Zentrum.", call: "Passspiel + Spielintelligenz entscheiden", attackerCategory: "midfield", defenderCategory: "midfield", primaryStat: "passing", secondaryStat: "iq", primaryWeight: 0.68, secondaryWeight: 0.32, category: "Passspiel", stats: [{ key: "passing", weight: 0.68 }, { key: "iq", weight: 0.32 }], playerGroups: ["mid"], cpuGroups: ["mid"], tactic: "balance", goalBias: 0, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "finish-vs-keeper", label: "Abschluss gegen Torwart", description: "Ein Abschluss trifft auf die Reaktion des Torwarts.", call: "Abschluss + Spielintelligenz gegen Torwartreaktion", attackerCategory: "attack", defenderCategory: "goalkeeper", primaryStat: "finish", secondaryStat: "iq", primaryWeight: 0.65, secondaryWeight: 0.35, category: "Torwartreaktion", stats: [{ key: "finish", weight: 0.65 }, { key: "iq", weight: 0.35 }], playerGroups: ["attack"], cpuGroups: ["keeper"], tactic: "konter", goalBias: 1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "duel", label: "Zweikampf", description: "Koerperlichkeit und Defensivarbeit entscheiden den Ballgewinn.", call: "Defensive + Physis entscheiden", attackerCategory: "defense", defenderCategory: "attack", primaryStat: "defense", secondaryStat: "physical", primaryWeight: 0.6, secondaryWeight: 0.4, category: "Zweikampf", stats: [{ key: "defense", weight: 0.6 }, { key: "physical", weight: 0.4 }], playerGroups: ["defense", "mid"], cpuGroups: ["attack", "mid"], tactic: "pressing", goalBias: -1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "passing-lane", label: "Passspiel", description: "Eine Passfolge muss unter Druck sauber bleiben.", call: "Passspiel + Teamgeist entscheiden", attackerCategory: "midfield", defenderCategory: "midfield", primaryStat: "passing", secondaryStat: "teamgeist", primaryWeight: 0.7, secondaryWeight: 0.3, category: "Passspiel", stats: [{ key: "passing", weight: 0.7 }, { key: "teamgeist", weight: 0.3 }], playerGroups: ["mid", "defense"], cpuGroups: ["mid", "attack"], tactic: "balance", goalBias: 0, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "technique-duel", label: "Technikduell", description: "Enge Ballfuehrung und Technik brechen die Ordnung.", call: "Dribbling + Spielintelligenz entscheiden", attackerCategory: "midfield", defenderCategory: "defense", primaryStat: "dribble", secondaryStat: "iq", primaryWeight: 0.64, secondaryWeight: 0.36, category: "Technik", stats: [{ key: "dribble", weight: 0.64 }, { key: "iq", weight: 0.36 }], playerGroups: ["mid", "attack"], cpuGroups: ["defense", "mid"], tactic: "balance", goalBias: 0, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "pace-duel", label: "Tempoduell", description: "Ein offener Laufweg wird ueber Geschwindigkeit entschieden.", call: "Tempo + Physis entscheiden", attackerCategory: "attack", defenderCategory: "defense", primaryStat: "pace", secondaryStat: "physical", primaryWeight: 0.72, secondaryWeight: 0.28, category: "Tempo", stats: [{ key: "pace", weight: 0.72 }, { key: "physical", weight: 0.28 }], playerGroups: ["attack", "mid"], cpuGroups: ["defense", "mid"], tactic: "konter", goalBias: 1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "header-duel", label: "Kopfballduell", description: "Ein hoher Ball wird mit Physis und Abschluss verwertet.", call: "Physis + Abschluss entscheiden", attackerCategory: "attack", defenderCategory: "defense", primaryStat: "physical", secondaryStat: "finish", primaryWeight: 0.62, secondaryWeight: 0.38, category: "Kopfball", stats: [{ key: "physical", weight: 0.62 }, { key: "finish", weight: 0.38 }], playerGroups: ["attack", "defense"], cpuGroups: ["defense", "keeper"], tactic: "pressing", goalBias: 1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "keeper-reaction", label: "Torwartreaktion", description: "Der Torwart muss blitzschnell auf einen Abschluss reagieren.", call: "Reflexe/Reaktion + Organisation entscheiden", attackerCategory: "goalkeeper", defenderCategory: "attack", primaryStat: "reflexes", secondaryStat: "reaction", primaryWeight: 0.7, secondaryWeight: 0.3, category: "Torwart", stats: [{ key: "reflexes", weight: 0.7 }, { key: "reaction", weight: 0.3 }], playerGroups: ["keeper"], cpuGroups: ["attack"], tactic: "pressing", goalBias: -1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "build-up", label: "Spielaufbau", description: "Der Aufbau von hinten entscheidet den naechsten Angriff.", call: "Passspiel + Teamgeist entscheiden", attackerCategory: "defense", defenderCategory: "midfield", primaryStat: "passing", secondaryStat: "teamgeist", primaryWeight: 0.65, secondaryWeight: 0.35, category: "Spielaufbau", stats: [{ key: "passing", weight: 0.65 }, { key: "teamgeist", weight: 0.35 }], playerGroups: ["defense", "mid"], cpuGroups: ["mid", "attack"], tactic: "balance", goalBias: 0, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
  { id: "pressing", label: "Pressing", description: "Aggressives Pressing erzwingt einen schnellen Ballgewinn.", call: "Defensive + Tempo entscheiden", attackerCategory: "midfield", defenderCategory: "defense", primaryStat: "defense", secondaryStat: "pace", primaryWeight: 0.66, secondaryWeight: 0.34, category: "Pressing", stats: [{ key: "defense", weight: 0.66 }, { key: "pace", weight: 0.34 }], playerGroups: ["mid", "defense"], cpuGroups: ["mid", "attack"], tactic: "pressing", goalBias: -1, active: true, allowedRounds: [1, 2, 3, 4, 5], specialRules: [] },
];

const FORMATIONS = Object.fromEntries((DECK_SYSTEM?.FORMATIONS || [
  { id: "1-2-1-2", name: "1-2-1-2", keeper: 1, defense: 2, mid: 1, attack: 2, slots: [] },
  { id: "1-1-2-2", name: "1-1-2-2", keeper: 1, defense: 1, mid: 2, attack: 2, slots: [] },
  { id: "1-2-2-1", name: "1-2-2-1", keeper: 1, defense: 2, mid: 2, attack: 1, slots: [] },
]).map((formation) => [formation.id, { ...formation, label: formation.name }]));

const DEFAULT_FORMATION = "1-2-1-2";
const MATCH_ACTIVE_COUNT = 6;
const MATCH_FIELD_COUNT = 5;
const MATCH_SUBSTITUTE_COUNT = 3;
const MATCH_CARD_COUNT = 9;
const MATCH_ROUNDS = 5;

const MATCH_BALANCE = {
  randomMin: -2,
  randomMax: 3,
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
  easy: { label: "Leicht", classOffset: -2, decisionSkill: 0.56, deckBonus: -8 },
  normal: { label: "Normal", classOffset: -1, decisionSkill: 0.72, deckBonus: -4 },
  hard: { label: "Schwer", classOffset: 0, decisionSkill: 0.9, deckBonus: 2 },
};

const FIELD_THEMES = ["stadium", "hall", "small", "roof", "night"];

const LEAGUE_PHASE_CONFIG = [
  { id: "league-1", name: "1. Liga", shortName: "L1", level: 1, tier: 1, participantCount: 18, size: 18, promotionPlaces: 0, promote: 0, relegationPlaces: 3, relegate: 3, logo: "L1", description: "Hoechste Liga im lokalen KickOff-SuperCard-System.", order: 1, active: true, rewards: { promotion: 1400, stay: 900, relegation: 550 } },
  { id: "league-2", name: "2. Liga", shortName: "L2", level: 2, tier: 2, participantCount: 18, size: 18, promotionPlaces: 3, promote: 3, relegationPlaces: 3, relegate: 3, logo: "L2", description: "Zweite Spielklasse mit Auf- und Abstiegszone.", order: 2, active: true, rewards: { promotion: 1100, stay: 700, relegation: 420 } },
  { id: "league-3", name: "3. Liga", shortName: "L3", level: 3, tier: 3, participantCount: 20, size: 20, promotionPlaces: 3, promote: 3, relegationPlaces: 4, relegate: 4, logo: "L3", description: "Dritte Liga mit groesserem Teilnehmerfeld.", order: 3, active: true, rewards: { promotion: 850, stay: 520, relegation: 320 } },
  { id: "league-bottom", name: "Rookie-Liga", shortName: "RL", level: 4, tier: 4, participantCount: 25, size: 25, promotionPlaces: 4, promote: 4, relegationPlaces: 0, relegate: 0, logo: "RL", description: "Einsteigerliga fuer neue Decks und erste Aufstiege.", order: 4, active: true, rewards: { promotion: 650, stay: 380, relegation: 220 } },
];

const LEAGUE_POINTS = { win: 3, draw: 1, loss: 0 };
const LEAGUE_WEEK_STATUS = ["upcoming", "active", "closing", "completed", "archived"];
const LEAGUE_PLAYER_MATCHES_PER_WEEK = 10;
const PHASE8_SIMULATION_VERSION = "phase8-cpu-sim-v1";

const DAILY_MISSION_CONFIG = [
  { id: "daily-play-2", type: "daily", title: "Anpfiff", description: "Spiele 2 Matches.", targetType: "matches_played", targetValue: 2, reward: { type: "coins", amount: 120 }, order: 1 },
  { id: "daily-rounds-5", type: "daily", title: "Rundendruck", description: "Gewinne 5 Runden.", targetType: "rounds_won", targetValue: 5, reward: { type: "coins", amount: 160 }, order: 2 },
  { id: "daily-booster-1", type: "daily", title: "Packmoment", description: "Oeffne 1 Booster.", targetType: "booster_opened", targetValue: 1, reward: { type: "freePack", amount: 1, packId: "pack-bronze" }, order: 3 },
];

const WEEKLY_MISSION_CONFIG = [
  { id: "weekly-league-5", type: "weekly", title: "Ligawoche", description: "Spiele 5 Ligamatches.", targetType: "league_matches_played", targetValue: 5, reward: { type: "coins", amount: 450 }, order: 1 },
  { id: "weekly-wins-3", type: "weekly", title: "Seriensieger", description: "Gewinne 3 Matches.", targetType: "matches_won", targetValue: 3, reward: { type: "coins", amount: 600 }, order: 2 },
  { id: "weekly-board-2", type: "weekly", title: "Belohnungsjaeger", description: "Bereite 2 Belohnungsboards vor.", targetType: "reward_board_completed", targetValue: 2, reward: { type: "gems", amount: 25 }, order: 3 },
];

const state = loadState();
applyAdminPlayerImportsToCatalog(state.adminData?.playerImports);
if (!state.sessionLoggedOut) {
  applyUserData(state.activeUserId);
} else {
  state.deck = [];
  state.selected = [];
  state.activeDeck = createStarterActiveDeck([]);
  state.savedDecks = [state.activeDeck];
  state.coins = 0;
  state.gems = 0;
}
const processingBoosterActions = new Set();
let publicGameUnlocked = false;
const splashState = {
  progress: 0,
  ready: false,
  started: false,
};

const els = {
  publicSplash: document.querySelector("#publicSplash"),
  splashProgressBar: document.querySelector("#splashProgressBar"),
  splashStartButton: document.querySelector("#splashStartButton"),
  splashStartLabel: document.querySelector("#splashStartLabel"),
  communityHub: document.querySelector("#communityHub"),
  communityPanel: document.querySelector("#communityPanel"),
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
  loadingOverlay: document.querySelector("#loadingOverlay"),
  toastRoot: document.querySelector("#toastRoot"),
  appDialog: document.querySelector("#appDialog"),
  appDialogTitle: document.querySelector("#appDialogTitle"),
  appDialogMessage: document.querySelector("#appDialogMessage"),
  appDialogClose: document.querySelector("#appDialogClose"),
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
  adminPhase9Content: document.querySelector("#adminPhase9Content"),
  adminLpInput: document.querySelector("#adminLpInput"),
  adminLeagueSelect: document.querySelector("#adminLeagueSelect"),
  adminClassSelect: document.querySelector("#adminClassSelect"),
  adminCardClass: document.querySelector("#adminCardClass"),
  adminDbSummary: document.querySelector("#adminDbSummary"),
  adminClubList: document.querySelector("#adminClubList"),
  adminPlayerRows: document.querySelector("#adminPlayerRows"),
  adminDbSeason: document.querySelector("#adminDbSeason"),
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
  fieldTheme: document.querySelector("#fieldTheme"),
  battleBoard: document.querySelector("#battleBoard"),
  homeFieldCards: document.querySelector("#homeFieldCards"),
  awayFieldCards: document.querySelector("#awayFieldCards"),
  roundTag: document.querySelector("#roundTag"),
  matchSummary: document.querySelector("#matchSummary"),
};

let selectedTactic = "pressing";
let selectedFormation = normalizeFormationKey(state.formation);
let currentOpponent = createOpponent();
let pendingDeckCardId = "";

document.body.classList.add("menu-open");
normalizeHomeMenuControls();

function normalizeHomeMenuControls() {
  const adminButton = document.querySelector("#openAdmin");
  if (adminButton) {
    adminButton.classList.add("admin-shortcut");
    adminButton.textContent = "ADM";
  }
  const bottomHome = document.querySelector(".bottom-nav [data-action='home']");
  if (bottomHome) {
    bottomHome.dataset.action = "platzpass";
    bottomHome.innerHTML = "PP<span>PLATZPASS</span>";
  }
  const leagueTile = document.querySelector(".menu-tile.league");
  if (leagueTile) {
    leagueTile.dataset.action = "career";
    const title = leagueTile.querySelector("strong");
    const subtitle = leagueTile.querySelector("em");
    if (title) title.textContent = "KARRIERE & TRAINING";
    if (subtitle) subtitle.textContent = "OFFLINE & MISSIONEN";
  }
  const adminNav = document.querySelector(".admin-nav");
  if (adminNav) renderAdminNavigationShell();
  if (!document.querySelector(".project-status-strip")) {
    const strip = document.createElement("section");
    strip.className = "project-status-strip";
    strip.setAttribute("aria-label", "Projektstatus");
    const eventStrip = document.querySelector(".menu-event-strip");
    eventStrip?.insertAdjacentElement("beforebegin", strip);
  }
}

function adminNavPageBySection(section) {
  for (const group of ADMIN_NAV_GROUPS) {
    const page = group.pages.find((item) => item.section === section);
    if (page) return { group, page };
  }
  return { group: ADMIN_NAV_GROUPS[0], page: ADMIN_NAV_GROUPS[0].pages[0] };
}

function allowedAdminPages(group, user = activeUser()) {
  return group.pages.filter((page) => canUseAdminModule(page.section, user));
}

function firstAllowedAdminPageInGroup(group, user = activeUser()) {
  return allowedAdminPages(group, user)[0] || null;
}

function firstAllowedAdminGroup(user = activeUser()) {
  return ADMIN_NAV_GROUPS.find((group) => firstAllowedAdminPageInGroup(group, user)) || ADMIN_NAV_GROUPS[0];
}

function renderAdminNavigationShell(activeSection = currentAdminSection()) {
  const adminNav = document.querySelector(".admin-nav");
  const adminMain = document.querySelector(".admin-main");
  if (!adminNav || !adminMain) return;
  const user = activeUser();
  const active = adminNavPageBySection(activeSection);
  adminNav.innerHTML = ADMIN_NAV_GROUPS.map((group) => {
    const firstPage = firstAllowedAdminPageInGroup(group, user);
    if (!firstPage) return "";
    const isActive = group.id === active.group.id;
    return `<button type="button" class="admin-main-nav-button ${isActive ? "active" : ""}" data-admin-group="${escapeAttr(group.id)}" data-admin-section="${escapeAttr(firstPage.section)}" aria-expanded="${isActive ? "true" : "false"}"><b>${escapeHtml(group.icon)}</b><span>${escapeHtml(group.label)}</span></button>`;
  }).join("");

  if (!adminMain.querySelector(".admin-breadcrumb")) {
    const breadcrumb = document.createElement("nav");
    breadcrumb.className = "admin-breadcrumb";
    breadcrumb.setAttribute("aria-label", "Admin Breadcrumb");
    adminMain.insertBefore(breadcrumb, adminMain.querySelector(".admin-hero"));
  }
  if (!adminMain.querySelector(".admin-subnav")) {
    const subnav = document.createElement("nav");
    subnav.className = "admin-subnav";
    subnav.setAttribute("aria-label", "Admin Untermenue");
    adminMain.insertBefore(subnav, adminMain.querySelector(".admin-hero"));
  }
  renderAdminSubNavigation(active.group.id, active.page.section);
}

function renderAdminSubNavigation(groupId, activeSection = currentAdminSection()) {
  const group = ADMIN_NAV_GROUPS.find((item) => item.id === groupId) || firstAllowedAdminGroup();
  const subnav = document.querySelector(".admin-subnav");
  if (!subnav) return;
  const pages = allowedAdminPages(group);
  subnav.innerHTML = pages.map((page) => `<button type="button" class="${page.section === activeSection ? "active" : ""}" data-admin-group="${escapeAttr(group.id)}" data-admin-section="${escapeAttr(page.section)}">${escapeHtml(page.label)}</button>`).join("");
  renderAdminBreadcrumb(group.id, activeSection);
}

function renderAdminBreadcrumb(groupId, activeSection = currentAdminSection()) {
  const breadcrumb = document.querySelector(".admin-breadcrumb");
  if (!breadcrumb) return;
  const group = ADMIN_NAV_GROUPS.find((item) => item.id === groupId) || adminNavPageBySection(activeSection).group;
  const page = group.pages.find((item) => item.section === activeSection) || firstAllowedAdminPageInGroup(group) || group.pages[0];
  breadcrumb.innerHTML = `
    <button type="button" data-admin-section="dashboard">Admin Center</button>
    <span>&gt;</span>
    <button type="button" data-admin-group="${escapeAttr(group.id)}" data-admin-section="${escapeAttr(firstAllowedAdminPageInGroup(group)?.section || page.section)}">${escapeHtml(group.label)}</button>
    <span>&gt;</span>
    <button type="button" data-admin-section="${escapeAttr(page.section)}">${escapeHtml(page.label)}</button>
  `;
}

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
    if (state.activeDeck) {
      state.activeDeck = reflowDeckForFormation(state.activeDeck, selectedFormation).deck;
      syncActiveDeckSelection();
      saveState();
    }
    render();
  });
});

els.cpuDifficulty?.addEventListener("change", () => {
  state.cpuDifficulty = normalizeCpuDifficulty(els.cpuDifficulty.value);
  currentOpponent = createOpponent();
  render();
});

els.fieldTheme?.addEventListener("change", () => {
  state.fieldTheme = normalizeFieldTheme(els.fieldTheme.value);
  render();
});

els.splashStartButton?.addEventListener("click", openCommunityHub);
els.communityHub?.addEventListener("click", handleCommunityClick);
els.communityHub?.addEventListener("submit", handleCommunitySubmit);
els.startFromOverlay.addEventListener("click", () => navigateTo("play"));
els.backToMenu.addEventListener("click", showMenu);
els.playMatch.addEventListener("click", playMatch);
els.openPack.addEventListener("click", openPack);
els.openAdmin.addEventListener("click", () => navigateTo("admin"));
els.closeAdmin.addEventListener("click", closeAdminCenter);
els.openLogin.addEventListener("click", () => navigateTo("profile"));
document.querySelector("#logoutButton")?.addEventListener("click", logoutActiveUser);
els.closeLogin.addEventListener("click", closeLoginPanel);
els.loginForm.addEventListener("submit", handleLoginSubmit);
els.profileForm.addEventListener("submit", handleProfileSubmit);
els.closeFeature.addEventListener("click", closeFeaturePanel);
els.dailyBonus.addEventListener("click", claimDailyBonus);
els.appDialogClose?.addEventListener("click", closeDialog);
els.appDialog?.addEventListener("click", (event) => {
  if (event.target === els.appDialog) closeDialog();
});
els.appDialogMessage?.addEventListener("click", handleFeatureClick);
els.featureContent.addEventListener("click", handleFeatureClick);
els.featureContent.addEventListener("change", handleFeatureChange);
els.featureContent.addEventListener("input", handleFeatureChange);
els.featureContent.addEventListener("dragstart", handleDeckDragStart);
els.featureContent.addEventListener("dragover", handleDeckDragOver);
els.featureContent.addEventListener("drop", handleDeckDrop);
els.adminCenter?.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-nav [data-admin-section], .admin-subnav [data-admin-section], .admin-breadcrumb [data-admin-section], [data-admin-quick-section]");
  if (!button || !els.adminCenter.contains(button)) return;
  const section = button.dataset.adminSection || button.dataset.adminQuickSection;
  if (!section) return;
  event.preventDefault();
  handleAdminNav(button, section);
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
els.adminBoosterList.addEventListener("change", handleAdminBoosterImageUpload);
document.querySelector("#saveQuickRewardPool").addEventListener("click", saveQuickRewardPool);
els.adminPhase9Content?.addEventListener("click", handleAdminPhase9Action);
els.adminPhase9Content?.addEventListener("change", handleAdminPhase9Change);
els.battleBoard?.addEventListener("click", handleBattleBoardClick);

document.querySelector("#adminCoins").addEventListener("click", () => {
  if (!requireAdminPermission("economy.test", "Keine Berechtigung fuer Waehrungs-Testaktionen.")) return;
  state.coins += 10000;
  logAdminAction("economy", "grant-test-coins", state.activeUserId, null, { coins: 10000 });
  setAdminStatus("10.000 Coins wurden gutgeschrieben.");
  render();
});

document.querySelector("#adminGems").addEventListener("click", () => {
  if (!requireAdminPermission("economy.test", "Keine Berechtigung fuer Waehrungs-Testaktionen.")) return;
  state.gems += 500;
  logAdminAction("economy", "grant-test-gems", state.activeUserId, null, { gems: 500 });
  setAdminStatus("500 Diamanten wurden gutgeschrieben.");
  render();
});

document.querySelector("#adminSetLp").addEventListener("click", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung fuer Fortschrittsdaten.")) return;
  const before = state.lp;
  state.lp = clamp(Number(els.adminLpInput.value) || 0, 0, 999999);
  logAdminAction("progress", "set-lp", state.activeUserId, before, state.lp);
  setAdminStatus(`Liga-Punkte auf ${state.lp} gesetzt.`);
  render();
});

els.adminLeagueSelect.addEventListener("change", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung fuer Liga-Aenderungen.")) return;
  state.leagueIndex = Number(els.adminLeagueSelect.value);
  resetLeagueRows();
  setAdminStatus(`Liga auf ${leagues[state.leagueIndex]} gesetzt.`);
  render();
});

els.adminClassSelect.addEventListener("change", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung fuer Teamklassen.")) return;
  state.teamClassIndex = Number(els.adminClassSelect.value);
  setAdminStatus(`Teamklasse auf ${teamClasses[state.teamClassIndex]} gesetzt.`);
  render();
});

document.querySelector("#adminAddCard").addEventListener("click", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung zum Erstellen von Karten.")) return;
  const selectedClass = Number(els.adminCardClass.value);
  const card = drawGameCard(selectedClass, selectedClass);
  if (!card) {
    setAdminStatus("Es sind keine Karten im Katalog vorhanden.");
    showToast("Keine Karten im Katalog vorhanden.", "warning");
    return;
  }
  state.deck.push(card);
  setAdminStatus(`${card.name} wurde erstellt.`);
  render();
});

document.querySelector("#adminGodCard").addEventListener("click", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung zum Erstellen von Karten.")) return;
  const iconPool = GAME_CARDS.filter((card) => normalizeClassIndex(card.cls) >= teamClasses.length - 1);
  const card = cloneCardForCollection(pick(iconPool.length ? iconPool : GAME_CARDS), "admin-icon");
  if (!card) {
    setAdminStatus("Es sind keine Karten im Katalog vorhanden.");
    showToast("Keine Karten im Katalog vorhanden.", "warning");
    return;
  }
  state.deck.push(card);
  state.teamClassIndex = teamClasses.length - 1;
  setAdminStatus(`${card.name} wurde hinzugefuegt.`);
  render();
});

document.querySelector("#adminWin").addEventListener("click", () => {
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung fuer Matchsimulationen.")) return;
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
  if (!requireAdminPermission("game-data.manage", "Keine Berechtigung fuer Wochenabrechnungen.")) return;
  settleWeek();
  setAdminStatus("Wochenabrechnung wurde ausgefuehrt.");
  render();
});

document.querySelector("#adminReset").addEventListener("click", () => {
  if (!requireAdminPermission("data.reset", "Nur Owner duerfen den Spielstand zuruecksetzen.")) return;
  if (!window.confirm("Spielstand wirklich zuruecksetzen? Ein Backup wird vorher erstellt.")) return;
  createAdminBackup("Spielstand vor Reset", ["state"]);
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

els.adminDbSeason.addEventListener("change", () => {
  updateAdminDatabaseDropdowns("season");
  renderAdminDatabase();
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

els.homeOverlay.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || !els.homeOverlay.contains(button)) return;
  event.preventDefault();
  navigateTo(button.dataset.action);
});

window.addEventListener("hashchange", handleRouteFromHash);
window.addEventListener("load", () => setLoading(false));

initPublicEntry();
render();
initAdminControls();
handleRouteFromHash();

function initPublicEntry() {
  if (!els.publicSplash || !els.splashProgressBar || !els.splashStartButton || !els.splashStartLabel) return;
  publicGameUnlocked = false;
  splashState.progress = 0;
  splashState.ready = false;
  splashState.started = false;
  els.publicSplash.classList.remove("is-hidden");
  els.communityHub?.classList.add("is-hidden");
  els.homeOverlay?.classList.add("is-hidden");
  els.gameApp?.classList.add("is-hidden");
  document.body.classList.add("public-entry");
  els.splashProgressBar.style.width = "0%";
  els.splashStartLabel.textContent = "Lade Ressourcen... 0 %";
  els.splashStartButton.disabled = true;
  els.splashStartButton.classList.remove("is-ready");
  const timer = window.setInterval(() => {
    splashState.progress = Math.min(100, splashState.progress + 4);
    els.splashProgressBar.style.width = `${splashState.progress}%`;
    els.splashStartLabel.textContent = `Lade Ressourcen... ${splashState.progress} %`;
    if (splashState.progress >= 100) {
      window.clearInterval(timer);
      const mobile = window.matchMedia("(hover: none), (max-width: 720px)").matches;
      els.splashStartLabel.textContent = mobile ? "▶ TIPPEN ZUM STARTEN" : "▶ KLICKEN ZUM STARTEN";
      splashState.ready = true;
      els.splashStartButton.disabled = false;
      els.splashStartButton.classList.add("is-ready");
    }
  }, 65);
}

function openCommunityHub() {
  if (!splashState.ready || splashState.started || els.splashStartButton?.disabled) return;
  splashState.started = true;
  els.splashStartButton.disabled = true;
  els.publicSplash?.classList.add("is-hidden");
  els.communityHub?.classList.remove("is-hidden");
  renderCommunityView("home");
}

function handleCommunityClick(event) {
  const viewButton = event.target.closest("[data-community-view]");
  if (viewButton && els.communityHub?.contains(viewButton)) {
    event.preventDefault();
    renderCommunityView(viewButton.dataset.communityView || "home");
    return;
  }
  const applicationButton = event.target.closest("[data-community-application]");
  if (applicationButton && els.communityHub?.contains(applicationButton)) {
    event.preventDefault();
    renderApplicationForm(applicationButton.dataset.communityApplication || "tester");
  }
}

function handleCommunitySubmit(event) {
  const form = event.target.closest("[data-community-form]");
  if (!form) return;
  event.preventDefault();
  const type = form.dataset.communityForm;
  if (type === "developer-login") {
    handleDeveloperLogin(form);
    return;
  }
  if (type === "idea") {
    saveCommunityRecord(COMMUNITY_STORAGE_KEYS.ideas, form, "Idee wurde gespeichert.", { status: "Neu", likes: 0, replies: 0 });
    renderCommunityView("idea", "Danke! Deine Idee wurde lokal gespeichert.");
    return;
  }
  if (type === "bug") {
    saveCommunityRecord(COMMUNITY_STORAGE_KEYS.bugs, form, "Fehlermeldung wurde gespeichert.", { status: "Neu" });
    renderCommunityView("bug", "Danke! Der Fehler wurde lokal gespeichert.");
    return;
  }
  if (type === "contact") {
    saveCommunityRecord(COMMUNITY_STORAGE_KEYS.contacts, form, "Nachricht wurde gespeichert.", { status: "Neu" });
    renderCommunityView("contact", "Danke! Deine Nachricht wurde lokal gespeichert.");
    return;
  }
  if (type === "forum-post") {
    saveCommunityRecord(COMMUNITY_STORAGE_KEYS.forum, form, "Forenbeitrag wurde gespeichert.", { status: "Neu", likes: 0, replies: 0, pinned: false, closed: false });
    renderCommunityView("forum", "Dein Beitrag wurde lokal gespeichert.");
    return;
  }
  saveCommunityRecord(COMMUNITY_STORAGE_KEYS.applications, form, "Bewerbung wurde gespeichert.", { status: "Neu" });
  renderCommunityView("support", "Danke! Deine Bewerbung wurde lokal gespeichert.");
}

function handleDeveloperLogin(form) {
  const userId = form.elements.developerUser?.value || "";
  const pin = form.elements.developerPin?.value || "";
  const user = state.adminUsers.find((item) => item.id === userId);
  const status = form.querySelector("[data-community-status]");
  if (!user || user.locked || !verifyPin(user, pin) || !canOpenAdmin(user)) {
    if (status) status.textContent = "Kein Zugriff. Nur berechtigte Entwickler, Owner oder Admins koennen das Spiel oeffnen.";
    showToast("Kein Entwicklerzugriff.", "error");
    return;
  }
  syncActiveUserWallet();
  snapshotCurrentUserData(state.activeUserId);
  state.activeUserId = user.id;
  state.sessionLoggedOut = false;
  applyUserData(user.id);
  user.profile = normalizeUserProfile({ ...user.profile, lastLoginAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, user);
  loadActiveUserWallet();
  publicGameUnlocked = true;
  els.communityHub?.classList.add("is-hidden");
  els.publicSplash?.classList.add("is-hidden");
  document.body.classList.remove("public-entry");
  updateAccountUi();
  render();
  saveState();
  showMenu();
  showToast(`Willkommen, ${userDisplayName(user)}.`, "success");
}

function saveCommunityRecord(storageKey, form, toastMessage, extra = {}) {
  const data = Object.fromEntries(new FormData(form).entries());
  const records = readCommunityRecords(storageKey);
  records.unshift({
    id: `${storageKey}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: form.dataset.communityForm || "unknown",
    author: data.name || data.discord || "Community",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...extra,
    ...data,
  });
  localStorage.setItem(storageKey, JSON.stringify(records.slice(0, 80)));
  showToast(toastMessage, "success");
}

function readCommunityRecords(storageKey) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

function writeCommunityRecords(storageKey, records) {
  localStorage.setItem(storageKey, JSON.stringify((records || []).slice(0, 120)));
}

function updateCommunityRecord(storageKey, id, updater) {
  const stored = readCommunityRecords(storageKey);
  const records = stored.length ? stored : defaultCommunityRecordsForKey(storageKey);
  const index = records.findIndex((item) => item.id === id);
  if (index < 0) return false;
  const before = records[index];
  records[index] = { ...before, ...updater(before), updatedAt: new Date().toISOString() };
  writeCommunityRecords(storageKey, records);
  return true;
}

function deleteCommunityRecord(storageKey, id) {
  const stored = readCommunityRecords(storageKey);
  const records = stored.length ? stored : defaultCommunityRecordsForKey(storageKey);
  const next = records.filter((item) => item.id !== id);
  writeCommunityRecords(storageKey, next);
  return next.length !== records.length;
}

function defaultCommunityRecordsForKey(storageKey) {
  if (storageKey === COMMUNITY_STORAGE_KEYS.news) return defaultCommunityNews();
  if (storageKey === COMMUNITY_STORAGE_KEYS.roadmap) return defaultCommunityRoadmap();
  return [];
}

function communitySettings() {
  try {
    return { ...COMMUNITY_FEATURE_DEFAULTS, ...(JSON.parse(localStorage.getItem(COMMUNITY_STORAGE_KEYS.settings) || "{}") || {}) };
  } catch {
    return { ...COMMUNITY_FEATURE_DEFAULTS };
  }
}

function defaultCommunityNews() {
  return [
    { id: "news-welcome", title: "Willkommen bei KickOff SuperCard", summary: "Der Community Hub ist online und sammelt Ideen, Bugs und Bewerbungen.", category: "Update", pinned: true, createdAt: "2026-07-14", status: "Veröffentlicht" },
    { id: "news-season-one", title: "Season 1 befindet sich in Entwicklung", summary: "Core Gameplay, Kartenrahmen und Community-Funktionen werden Schritt fuer Schritt aufgebaut.", category: "Season 1", pinned: false, createdAt: "2026-07-14", status: "Veröffentlicht" },
    { id: "news-founders", title: "Founders Collection vorbereitet", summary: "Die ersten Founders-Karten und Marketinggrafiken koennen spaeter durch echte Spieler ersetzt werden.", category: "Cards", pinned: false, createdAt: "2026-07-14", status: "Veröffentlicht" },
  ];
}

function communityNews() {
  const stored = readCommunityRecords(COMMUNITY_STORAGE_KEYS.news);
  return stored.length ? stored : defaultCommunityNews();
}

function defaultCommunityRoadmap() {
  return [
    { id: "roadmap-splash", title: "Splashscreen", done: true },
    { id: "roadmap-community", title: "Community Hub", done: true },
    { id: "roadmap-cardframes", title: "Kartenrahmen", done: true },
    { id: "roadmap-founders", title: "Founders Collection", done: false },
    { id: "roadmap-packs", title: "Packs", done: false },
    { id: "roadmap-match", title: "Matchsystem", done: false },
    { id: "roadmap-collection", title: "Sammlung", done: false },
    { id: "roadmap-deck", title: "Deck", done: false },
    { id: "roadmap-bundesliga", title: "Bundesliga", done: false },
    { id: "roadmap-second-bundesliga", title: "2. Bundesliga", done: false },
  ];
}

function communityRoadmap() {
  const stored = readCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap);
  return stored.length ? stored : defaultCommunityRoadmap();
}

function defaultForumPosts() {
  return [
    { id: "forum-welcome", category: "announcements", title: "Community Hub gestartet", author: "GörnaldoBerlin", createdAt: "2026-07-14", replies: 0, likes: 3, status: "Neu", pinned: true, closed: false },
    { id: "forum-founders", category: "ideas", title: "Welche Founders-Karten sollen zuerst kommen?", author: "KickOff Team", createdAt: "2026-07-14", replies: 2, likes: 7, status: "In Prüfung", pinned: false, closed: false },
    { id: "forum-bugs", category: "bugs", title: "Fehlerberichte fuer die Alpha sammeln", author: "KickOff Team", createdAt: "2026-07-14", replies: 1, likes: 2, status: "Neu", pinned: false, closed: false },
  ];
}

function communityForumPosts() {
  const stored = readCommunityRecords(COMMUNITY_STORAGE_KEYS.forum);
  return [...defaultForumPosts(), ...stored];
}

function renderCommunityView(view, notice = "") {
  if (!els.communityPanel) return;
  const views = {
    home: renderCommunityHome,
    "developer-login": renderDeveloperLogin,
    idea: renderIdeaForm,
    bug: renderBugForm,
    forum: renderCommunityForum,
    support: () => renderSupportHub(notice),
    tester: () => renderApplicationFormMarkup("tester", notice),
    moderator: () => renderApplicationFormMarkup("moderator", notice),
    "admin-application": () => renderApplicationFormMarkup("admin", notice),
    helper: () => renderApplicationFormMarkup("helper", notice),
    contact: renderContactForm,
    news: renderPublicNews,
    roadmap: renderPublicRoadmap,
    social: renderDeveloperSocial,
    "project-status": renderPublicProjectStatus,
  };
  els.communityPanel.innerHTML = (views[view] || views.home)(notice);
}

function renderCommunityHome() {
  const settings = communitySettings();
  const tiles = [
    ["idea", "💡", "Ideen", "Vorschlaege fuer Karten, Modi und UI einreichen.", settings.ideas],
    ["bug", "🐞", "Fehler melden", "Bugs mit Geraet, Browser und Version erfassen.", settings.bugs],
    ["forum", "💬", "Community Forum", "Vier klare Bereiche fuer Austausch und Feedback.", settings.forum],
    ["tester", "🧪", "Tester werden", "Bewirb dich fuer Alpha-Tests und Feedbackrunden.", settings.applications],
    ["moderator", "🛡", "Moderator werden", "Hilf spaeter beim Ordnen der Community.", settings.applications],
    ["admin-application", "⭐", "Admin Bewerbung", "Melde dich fuer erweiterte Projektaufgaben.", settings.applications],
    ["contact", "📨", "Kontakt", "Schicke eine direkte Nachricht an das Projekt.", settings.contact],
    ["news", "📢", "News", "Aktuelle Platzhalter-News fuer Season 1.", settings.news],
    ["roadmap", "🗺", "Roadmap", "Sieh, was fertig ist und was als naechstes kommt.", settings.roadmap],
    ["social", "👤", "Entwickler & Social Media", "GörnaldoBerlin, Links und Support.", true],
  ];
  return `
    <article class="community-welcome">
      <h2>Willkommen bei KickOff SuperCard</h2>
      <p>Der Community Hub ist dein Einstieg fuer Ideen, Fehlerberichte, Bewerbungen, News und Roadmap. Alles wird in dieser Alpha lokal im Browser gespeichert.</p>
      <div class="community-tile-grid">
        ${tiles.filter((tile) => tile[4]).map(([view, icon, title, text]) => `
          <button type="button" data-community-view="${escapeAttr(view)}">
            <b>${icon}</b>
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(text)}</span>
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function renderDeveloperLogin() {
  const options = state.adminUsers
    .filter((user) => ["Owner", "Admin", "Tester"].includes(user.role))
    .map((user) => `<option value="${escapeAttr(user.id)}">${escapeHtml(user.name)} - ${escapeHtml(user.role)}</option>`)
    .join("");
  return `
    <form class="community-form" data-community-form="developer-login">
      <h2>Entwickler Login</h2>
      <p>Nur berechtigte Accounts erhalten Zugriff auf das Spiel. Es gibt keine oeffentliche Registrierung.</p>
      <label>Account<select name="developerUser" required>${options}</select></label>
      <label>PIN<input name="developerPin" type="password" inputmode="numeric" autocomplete="current-password" placeholder="0000" required /></label>
      <button type="submit">Spiel oeffnen</button>
      <span data-community-status></span>
    </form>
  `;
}

function renderIdeaForm(notice = "") {
  if (!communitySettings().ideas) return renderCommunityDisabled("Ideen");
  return `
    <form class="community-form" data-community-form="idea">
      <h2>Idee einreichen</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      <label>Titel<input name="title" maxlength="80" required /></label>
      <label>Kategorie<select name="category" required><option>Gameplay</option><option>Karten</option><option>Design</option><option>Community</option><option>Sonstiges</option></select></label>
      <label class="wide">Beschreibung<textarea name="description" rows="5" required></textarea></label>
      <label>Discord<input name="discord" maxlength="64" /></label>
      <label>E-Mail<input name="email" type="email" maxlength="120" /></label>
      <button type="submit">Absenden</button>
    </form>
  `;
}

function renderBugForm(notice = "") {
  if (!communitySettings().bugs) return renderCommunityDisabled("Fehler melden");
  return `
    <form class="community-form" data-community-form="bug">
      <h2>Fehler melden</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      <label>Titel<input name="title" maxlength="90" required /></label>
      <label>Geraet<input name="device" maxlength="80" required /></label>
      <label>Browser<input name="browser" maxlength="80" required /></label>
      <label>Version<input name="version" maxlength="40" placeholder="z.B. S1 v0.1 Alpha" required /></label>
      <label class="wide">Beschreibung<textarea name="description" rows="5" required></textarea></label>
      <label class="wide">Screenshot (spaeter)<input name="screenshotNote" maxlength="120" placeholder="Noch kein Upload in der Browser-Alpha" /></label>
      <button type="submit">Absenden</button>
    </form>
  `;
}

function renderContactForm(notice = "") {
  if (!communitySettings().contact) return renderCommunityDisabled("Kontakt");
  return `
    <form class="community-form" data-community-form="contact">
      <h2>Kontakt</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      <label>Name<input name="name" maxlength="80" required /></label>
      <label>E-Mail<input name="email" type="email" maxlength="120" required /></label>
      <label class="wide">Betreff<input name="subject" maxlength="120" required /></label>
      <label class="wide">Nachricht<textarea name="message" rows="5" required></textarea></label>
      <button type="submit">Absenden</button>
    </form>
  `;
}

function renderSupportHub(notice = "") {
  return `
    <article class="community-support">
      <h2>Support & Community</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      <div class="support-grid">
        <button type="button" data-community-application="tester">Tester werden</button>
        <button type="button" data-community-application="moderator">Moderator werden</button>
        <button type="button" data-community-application="helper">Community Helfer werden</button>
        <button type="button" data-community-application="admin">Admin Bewerbung</button>
        <button type="button" data-community-application="bug">Fehler melden</button>
        <button type="button" data-community-application="supporter">Projekt unterstuetzen</button>
        <button type="button" data-community-application="discord">Discord</button>
      </div>
    </article>
  `;
}

function renderApplicationFormMarkup(type, notice = "") {
  if (!communitySettings().applications) return renderCommunityDisabled("Bewerbungen");
  const configs = {
    tester: { title: "Tester werden", fields: [["name", "Name"], ["discord", "Discord"], ["device", "Geraet"], ["availability", "Zeit verfuegbar"], ["why", "Warum Tester?", "textarea"]] },
    moderator: { title: "Moderator werden", fields: [["name", "Name"], ["discord", "Discord"], ["experience", "Erfahrung", "textarea"], ["why", "Warum Moderator?", "textarea"]] },
    admin: { title: "Admin Bewerbung", fields: [["name", "Name"], ["discord", "Discord"], ["technicalExperience", "Technische Erfahrung", "textarea"], ["why", "Warum Admin?", "textarea"]] },
    helper: { title: "Community Helfer werden", fields: [["name", "Name"], ["discord", "Discord"], ["area", "Bereich"], ["why", "Warum moechtest du helfen?", "textarea"]] },
    bug: { title: "Fehler melden", fields: [["name", "Name"], ["discord", "Discord"], ["device", "Geraet"], ["description", "Fehlerbeschreibung", "textarea"]] },
    supporter: { title: "Projekt unterstuetzen", fields: [["name", "Name"], ["discord", "Discord"], ["supportType", "Wie moechtest du unterstuetzen?"], ["message", "Nachricht", "textarea"]] },
    discord: { title: "Discord", fields: [["name", "Name"], ["discord", "Discord"], ["message", "Nachricht", "textarea"]] },
  };
  const config = configs[type] || configs.tester;
  return `
    <form class="community-form" data-community-form="${escapeAttr(type)}">
      <h2>${escapeHtml(config.title)}</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      ${config.fields.map(([name, label, kind]) => kind === "textarea"
        ? `<label class="wide">${escapeHtml(label)}<textarea name="${escapeAttr(name)}" rows="4" required></textarea></label>`
        : `<label>${escapeHtml(label)}<input name="${escapeAttr(name)}" required /></label>`).join("")}
      <button type="submit">Absenden</button>
    </form>
  `;
}

function renderApplicationForm(type) {
  els.communityPanel.innerHTML = renderApplicationFormMarkup(type);
}

function renderCommunityForum(notice = "") {
  if (!communitySettings().forum) return renderCommunityDisabled("Community Forum");
  const posts = communityForumPosts();
  return `
    <article class="community-forum">
      <h2>Community Forum</h2>
      ${notice ? `<p class="community-notice">${escapeHtml(notice)}</p>` : ""}
      <div class="forum-category-grid">
        ${COMMUNITY_FORUM_CATEGORIES.map((category) => `
          <article>
            <b>${category.icon}</b>
            <strong>${escapeHtml(category.label)}</strong>
            <span>${posts.filter((post) => post.category === category.id).length} Beitraege</span>
          </article>
        `).join("")}
      </div>
      <form class="community-form compact" data-community-form="forum-post">
        <h3>Neuen Beitrag erstellen</h3>
        <label>Titel<input name="title" maxlength="100" required /></label>
        <label>Autor<input name="author" maxlength="80" required /></label>
        <label>Kategorie<select name="category">${COMMUNITY_FORUM_CATEGORIES.map((category) => `<option value="${escapeAttr(category.id)}">${category.icon} ${escapeHtml(category.label)}</option>`).join("")}</select></label>
        <label class="wide">Beitrag<textarea name="description" rows="4" required></textarea></label>
        <button type="submit">Beitrag speichern</button>
      </form>
      <div class="forum-post-list">
        ${posts.map(renderForumPostCard).join("")}
      </div>
    </article>
  `;
}

function renderForumPostCard(post) {
  const category = COMMUNITY_FORUM_CATEGORIES.find((item) => item.id === post.category) || COMMUNITY_FORUM_CATEGORIES[3];
  return `
    <article class="forum-post-card ${post.pinned ? "pinned" : ""} ${post.closed ? "closed" : ""}">
      <span>${category.icon} ${escapeHtml(category.label)}</span>
      <h3>${escapeHtml(post.title || "Ohne Titel")}</h3>
      <p>${escapeHtml(post.description || "Noch keine Beschreibung.")}</p>
      <footer>
        <b>${escapeHtml(post.author || "Community")}</b>
        <time>${escapeHtml(formatCommunityDate(post.createdAt))}</time>
        <span>${Number(post.replies || 0)} Antworten</span>
        <span>${Number(post.likes || 0)} Likes</span>
        <em>${escapeHtml(post.status || "Neu")}</em>
      </footer>
    </article>
  `;
}

function renderPublicNews() {
  if (!communitySettings().news) return renderCommunityDisabled("News");
  const news = communityNews();
  return `
    <article class="community-news">
      <h2>News</h2>
      <div class="news-list">
        ${news.map((item) => `
          <article class="news-card ${item.pinned ? "pinned" : ""}">
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.summary || item.description || "")}</p>
            <span>${escapeHtml(item.category || "News")} · ${escapeHtml(formatCommunityDate(item.createdAt))}</span>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function renderPublicRoadmap() {
  if (!communitySettings().roadmap) return renderCommunityDisabled("Roadmap");
  return `
    <article class="community-roadmap">
      <h2>Roadmap</h2>
      <div class="roadmap-list">
        ${communityRoadmap().map((item) => `
          <article class="${item.done ? "done" : ""}">
            <b>${item.done ? "☑" : "⬜"}</b>
            <strong>${escapeHtml(item.title)}</strong>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function renderDeveloperSocial() {
  return `
    <article class="developer-social-card">
      <h2>Entwickler & Social Media</h2>
      <div class="creator-card">
        <b>GörnaldoBerlin</b>
        <span>Owner & Creator</span>
        <p>Alle Social-Media-Ziele sind Platzhalter fuer die spaetere Admin-Bearbeitung.</p>
        <div class="social-button-grid">
          ${["Discord", "TikTok", "Twitch", "YouTube", "Instagram", "X", "Support"].map((label) => `<button type="button">${escapeHtml(label)}</button>`).join("")}
          <button type="button" data-community-view="developer-login">Entwickler Login</button>
        </div>
      </div>
    </article>
  `;
}

function renderCommunityDisabled(label) {
  return `<article class="community-welcome"><h2>${escapeHtml(label)}</h2><p>Dieser Community-Bereich ist aktuell deaktiviert.</p></article>`;
}

function renderPublicProjectStatus() {
  return `
    <article class="community-status-card">
      <h2>Projektstatus</h2>
      <strong>Projektfortschritt</strong>
      <div class="status-progress large"><i style="--status-progress:30%"></i></div>
      <b>30%</b>
      <dl>
        <dt>Aktuelle Phase</dt><dd>Core Gameplay</dd>
        <dt>Naechstes Ziel</dt><dd>Packs · Sammlung · Decksystem</dd>
      </dl>
    </article>
  `;
}

function formatCommunityDate(value) {
  if (!value) return "Heute";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function normalizeRoute(action) {
  return {
    play: "match",
    missions: "league",
    profile: "profile",
    settings: "settings",
    notifications: "notifications",
    admin: "admin",
  }[action] || action || "home";
}

function navigateTo(action) {
  const route = normalizeRoute(action);
  const nextHash = `#${route}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = route;
    return;
  }
  applyRoute(route);
}

function handleRouteFromHash() {
  const route = normalizeRoute(window.location.hash.replace(/^#/, "") || "home");
  applyRoute(route);
}

function publicEntryActive() {
  if (publicGameUnlocked) return false;
  const splashVisible = els.publicSplash && !els.publicSplash.classList.contains("is-hidden");
  const hubVisible = els.communityHub && !els.communityHub.classList.contains("is-hidden");
  return Boolean(splashVisible || hubVisible);
}

function applyRoute(route) {
  if (publicEntryActive() && route !== "home") {
    if (window.location.hash) window.location.hash = "";
    return;
  }
  updateMainNavigation(route);
  setLoading(route !== "home", `OEFFNE ${route.toUpperCase()}`);
  setTimeout(() => setLoading(false), 220);
  if (route === "home") {
    closeFeaturePanel();
    closeLoginPanel();
    closeAdminCenter();
    return;
  }
  if (route === "profile") {
    closeLoginPanel();
    closeAdminCenter();
    renderProfileFeature();
    els.featurePanel.classList.remove("is-hidden");
    return;
  }
  if (route === "admin") {
    closeFeaturePanel();
    closeLoginPanel();
    openAdminCenter();
    return;
  }
  if (route === "career") {
    closeLoginPanel();
    closeAdminCenter();
    openFeature("career");
    return;
  }
  if (route === "match") {
    closeFeaturePanel();
    closeLoginPanel();
    closeAdminCenter();
    handlePlayTileTap();
    return;
  }
  closeLoginPanel();
  closeAdminCenter();
  openFeature(route);
}

function updateMainNavigation(route) {
  const activeRoute = normalizeRoute(route);
  document.body.dataset.route = activeRoute;
  document.querySelectorAll("[data-action]").forEach((button) => {
    const buttonRoute = normalizeRoute(button.dataset.action);
    const isActive =
      buttonRoute === activeRoute ||
      (activeRoute === "match" && button.dataset.action === "play") ||
      (activeRoute === "league" && button.dataset.action === "missions");
    button.classList.toggle("active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function setLoading(active, text = "Loading...") {
  if (!els.loadingOverlay) return;
  els.loadingOverlay.classList.toggle("is-hidden", !active);
  const label = els.loadingOverlay.querySelector(".loading-card span");
  if (label) label.textContent = text;
}

function showToast(message, type = "info") {
  if (!els.toastRoot) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  els.toastRoot.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2600);
}

function openDialog(title, message) {
  if (!els.appDialog) return;
  els.appDialogTitle.textContent = title;
  els.appDialogMessage.textContent = message;
  els.appDialog.classList.remove("card-detail-dialog");
  els.appDialog.classList.remove("is-hidden");
  els.appDialogClose?.focus();
}

function closeDialog() {
  els.appDialog?.classList.add("is-hidden");
}

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
    showGame("match");
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
    platzpass: renderPlatzpassFeature,
    collection: renderCollectionFeature,
    league: renderLeagueFeature,
    draft: renderDraftBoardFeature,
    deck: renderDeckFeature,
    shop: renderShopFeature,
    news: renderNewsFeature,
    events: renderEventsFeature,
    rankings: renderRankingsFeature,
    club: renderClubFeature,
    messages: renderMessagesFeature,
    friends: renderFriendsFeature,
    notifications: renderNotificationsFeature,
    settings: renderSettingsFeature,
  };

  if (!views[action]) {
    showToast("Diese Ansicht ist noch nicht verfuegbar.", "error");
    return;
  }
  views[action]();
  els.featurePanel.classList.remove("is-hidden");
  updateMainNavigation(action);
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
  const activePacks = state.boosterPacks.filter((pack) => pack.active).sort((a, b) => (a.order || 999) - (b.order || 999));
  const unopened = unopenedBoosterInventory();
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
          <p>Gratis-Packs werden zuerst verbraucht. Gekaufte Packs landen erst im Inventar und koennen dort geoeffnet werden.</p>
          <div class="pill-row"><span>${formatNumber(state.coins)} Coins</span><span>${formatNumber(state.gems)} Diamanten</span><span>${totalFreePacks()} Gratis-Packs</span><span>${unopened.length} ungeoeffnet</span></div>
        </article>
      </div>
      <section class="feature-card booster-inventory">
        <div class="feature-section-head">
          <div>
            <h3>Ungeoeffnete Booster</h3>
            <p>Jede Pack-Instanz wird gespeichert. Ein Reload erzeugt keine neuen Karten.</p>
          </div>
        </div>
        ${unopened.length ? `<div class="booster-inventory-list">${unopened.map(boosterInventoryTile).join("")}</div>` : `<p class="muted">Noch keine ungeoeffneten Booster vorhanden.</p>`}
      </section>
    `
  );
}

function renderPlatzpassFeature() {
  state.platzPass = normalizePlatzPassState(state.platzPass);
  const config = state.adminData?.platzpass || createDefaultAdminData().platzpass;
  const active = config.active !== false;
  const price = Math.max(0, Number(config.price ?? 950) || 950);
  const progressTarget = Math.max(1, Number(config.xpPerLevel) || 1000);
  const progress = clamp(Math.round(state.platzPass.xp / progressTarget * 100), 0, 100);
  const rewards = [
    { level: 1, free: "500 Credits", premium: "Bronze Pack" },
    { level: 5, free: "1 Gratis Pack", premium: "Silber Pack" },
    { level: 10, free: "750 Credits", premium: "Gold Pack" },
    { level: 20, free: "2 Diamanten", premium: "Elite Chance" },
  ];
  setFeature(
    config.name || "KickOff SuperCard PlatzPass",
    active ? "Saisonpass" : "Saisonpass vorbereitet",
    `
      <section class="feature-card platzpass-hero ${state.platzPass.owned ? "is-owned" : ""}">
        <div>
          <h3>${escapeHtml(config.name || "KickOff SuperCard PlatzPass")}</h3>
          <p>Verdiene XP ueber Matches, Karriere und Missionen. Premium-Belohnungen werden nach Kauf freigeschaltet.</p>
          <div class="pill-row">
            <span>Level ${state.platzPass.level}/${Number(config.maxLevel) || 100}</span>
            <span>${state.platzPass.xp}/${progressTarget} XP</span>
            <span>${state.platzPass.owned ? "Premium aktiv" : `${formatNumber(price)} Credits`}</span>
          </div>
          <div class="card-detail-xp"><span style="--xp-progress:${progress}%"></span></div>
        </div>
        <button type="button" data-feature-action="buy-platzpass" ${state.platzPass.owned || !active || state.coins < price ? "disabled" : ""}>${state.platzPass.owned ? "Gekauft" : "PlatzPass kaufen"}</button>
      </section>
      <section class="feature-card">
        <h3>Belohnungspfad</h3>
        <div class="platzpass-rewards">
          ${rewards.map((reward) => `
            <article>
              <strong>Level ${reward.level}</strong>
              <span>Gratis: ${escapeHtml(reward.free)}</span>
              <span class="${state.platzPass.owned ? "premium-open" : "premium-locked"}">Premium: ${escapeHtml(reward.premium)}</span>
            </article>
          `).join("")}
        </div>
      </section>
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
    "Evolution & Materialauswahl",
    `
      <div class="owned-filter-summary">
        <strong>Evolution</strong>
        <div class="pill-row">
          <span>${maxedCount} Karten auf Level 100</span>
          <span>${readyCount} Fusionen bereit</span>
          <span>Nur gleiche Karte + gleiche Serie</span>
          <span>Level 99 fusioniert nicht</span>
          <span>Favoriten und gesperrte Karten werden geschuetzt</span>
        </div>
      </div>
      <div class="mini-deck fusion-card-grid">
        ${sortedCards.length ? sortedCards.map((card) => miniCard(card, false, "fusion")).join("") : emptyOwnedFilterMessage()}
      </div>
    `
  );
}

function packTile(pack) {
  const normalized = normalizeBoosterPack(pack);
  const { id, name, cost, description, currency = "coins", image = "", tier = "bronze", pool = "mixed", cardCount = 1, positions = [] } = normalized;
  const freeCount = freePackCount(id);
  const hasFreePack = freeCount > 0;
  const amount = currency === "coins" ? state.coins : state.gems;
  const label = currency === "coins" ? "Coins" : "Diamanten";
  const dropValidation = validateBoosterForOpening(normalized);
  const availability = boosterAvailability(normalized);
  const disabled = !hasFreePack && (amount < cost || !dropValidation.ok || !availability.ok);
  const packImageUrl = getPackImageUrl(normalized);
  const packArt = packImageUrl
    ? `<img class="pack-shot" src="${escapeAttr(packImageUrl)}" alt="${escapeAttr(name)}" />`
    : `<div class="pack-shot pack-shot-placeholder ${tier}"><span>${name}</span></div>`;
  return `
    <article class="feature-card pack-card pack-${tier} ${hasFreePack ? "has-free-pack" : ""}" data-feature-action="pack-tap">
      <div class="pack-art" data-feature-action="pack-tap">${packArt}</div>
      <h3>${name}</h3>
      <p>${description}</p>
      <span class="pack-pool">${packPoolLabel(pool)} | ${packPositionLabel(positions)}</span>
      <span class="pack-count">${cardCount} ${cardCount === 1 ? "Karte" : "Karten"}</span>
      ${normalized.guaranteedClass != null ? `<span class="pack-guarantee">Garantie: ${teamClasses[normalized.guaranteedClass]}</span>` : ""}
      ${hasFreePack ? `<strong class="pack-free">Gratis verfuegbar x${freeCount}</strong>` : `<strong>${cost} ${label}</strong>`}
      <div class="pack-actions">
        <button type="button" data-feature-action="buy-pack" ${packActionAttributes(normalized)} ${disabled ? "disabled" : ""}>${hasFreePack ? "Gratis sichern" : "Kaufen"}</button>
        <button type="button" data-feature-action="booster-info" data-pack-id="${escapeAttr(id)}">Drop-Rates</button>
      </div>
      ${!dropValidation.ok || !availability.ok ? `<small class="pack-error">${escapeHtml([...availability.errors, ...dropValidation.errors][0] || "Booster nicht verfuegbar")}</small>` : ""}
    </article>
  `;
}

function packActionAttributes(pack) {
  const normalized = normalizeBoosterPack(pack);
  return `data-pack-id="${escapeAttr(normalized.id)}" data-cost="${normalized.cost}" data-currency="${escapeAttr(normalized.currency)}" data-min="${normalized.minClass}" data-max="${normalized.maxClass}" data-pool="${escapeAttr(normalized.pool)}" data-positions="${escapeAttr(normalized.positions.join(","))}" data-count="${normalized.cardCount}"`;
}

function unopenedBoosterInventory() {
  state.boosterInventory = normalizeBoosterInventory(state.boosterInventory);
  return state.boosterInventory.filter((item) => item.status !== "opened");
}

function boosterInventoryTile(item) {
  const pack = normalizeBoosterPack(state.boosterPacks.find((entry) => entry.id === item.boosterId) || defaultBoosterPacks().find((entry) => entry.id === item.boosterId) || {});
  const packImageUrl = getPackImageUrl(pack);
  const packArt = packImageUrl
    ? `<img src="${escapeAttr(packImageUrl)}" alt="${escapeAttr(pack.name)}" />`
    : `<span>${escapeHtml(pack.name)}</span>`;
  return `
    <article class="booster-inventory-item pack-${escapeAttr(pack.tier)}">
      <div class="booster-inventory-art">${packArt}</div>
      <div>
        <strong>${escapeHtml(pack.name)}</strong>
        <span>${pack.cardCount} ${pack.cardCount === 1 ? "Karte" : "Karten"} | ${item.source === "free" ? "Gratis" : "Gekauft"}</span>
      </div>
      <button type="button" data-feature-action="open-owned-booster" data-inventory-id="${escapeAttr(item.id)}">Oeffnen</button>
    </article>
  `;
}

function renderCareerFeature() {
  const career = state.career;
  const nextOpponent = careerOpponentForTier(career.tier, career.seasonGame);
  const power = careerTeamPower();
  const seasonLeft = Math.max(0, 10 - career.seasonGame);
  setFeature(
    "KickOff SuperCard Karriere",
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
  const visibleCards = virtualCardWindow(cards);
  const proReady = cards.filter((card) => fusionPartnerFor(card)).length;
  setFeature(
    "Sammlung",
    `${ownedCardCount()} / ${GAME_CARDS.length} Karten`,
    `
      <div class="feature-toolbar">
        ${ownedCardFilters("collection")}
      </div>
      <div class="owned-filter-summary"><strong>Evolution</strong><div class="pill-row"><span>Max-Level ${CARD_MAX_LEVEL}</span><span>${proReady} Fusionen bereit</span><span>Bronze 100+100 = Bronzestern</span><span>Silber 100+100 = Silberstern</span><span>Gold+ 100+100 = Goldstern</span><span>Level 99 fusioniert nicht</span></div></div>
      ${ownedCardFilterSummary(cards)}
      ${cards.length > visibleCards.length ? `<p class="virtual-note">${visibleCards.length} von ${cards.length} Karten sichtbar. Filter oder Suche eingrenzen fuer weitere Karten.</p>` : ""}
      <div class="mini-deck collection-grid" data-virtual-total="${cards.length}">
        ${visibleCards.length ? visibleCards.map((card) => miniCard(card, false, "collection")).join("") : emptyOwnedFilterMessage("collection")}
      </div>
    `
  );
}

function renderLeagueFeature() {
  ensurePhase8Systems();
  const league = currentLeagueConfig();
  const week = state.leagueSystem.currentWeek;
  const table = leagueTableRows();
  const playerRow = table.find((row) => row.player);
  const nextMatch = nextLeagueMatch();
  const daily = missionRows("daily");
  const weekly = missionRows("weekly");
  setFeature(
    "Liga & Missionen",
    `${league.name} | Woche ${week.weekId}`,
    `
      <div class="league-week-shell">
        <section class="feature-card league-week-hero">
          <div>
            <span class="eyebrow">Aktive Ligawoche</span>
            <h3>${escapeHtml(league.name)}</h3>
            <p>${escapeHtml(league.description || "")}</p>
            <div class="pill-row">
              <span>Stufe ${league.level}</span>
              <span>${league.participantCount} Teilnehmer</span>
              <span>Aufstieg: ${league.promotionPlaces || 0}</span>
              <span>Abstieg: ${league.relegationPlaces || 0}</span>
              <span>Woche ${escapeHtml(week.weekId)}</span>
            </div>
            <p>${formatDateShort(week.startDate)} bis ${formatDateShort(week.endDate)} | Status ${escapeHtml(week.status)}</p>
          </div>
          <div class="league-rank-badge">
            <strong>#${playerRow?.rank || "-"}</strong>
            <span>${playerRow?.points || 0} Punkte</span>
          </div>
        </section>

        <section class="feature-grid two">
          <article class="feature-card">
            <h3>Naechster Gegner</h3>
            ${nextMatch ? `<p>${escapeHtml(participantName(nextMatch.awayId))} | Spiel ${week.playedPlayerMatches + 1}/${week.maxPlayerMatches}</p>` : `<p>Alle Ligaspiele dieser Woche sind gespielt.</p>`}
            <div class="pill-row"><span>${playerRow?.played || 0} Spiele</span><span>${playerRow?.wins || 0} Siege</span><span>${playerRow?.losses || 0} Niederlagen</span><span>${formatRoundDiff(playerRow?.roundDiff || 0)}</span></div>
            <button type="button" data-feature-action="play-now" ${nextMatch ? "" : "disabled"}>Ligamatch starten</button>
          </article>
          <article class="feature-card">
            <h3>Wochenabschluss</h3>
            <p>${league.promotionPlaces ? `Top ${league.promotionPlaces} steigen auf.` : "In dieser Liga gibt es keinen Aufstieg."} ${league.relegationPlaces ? `Die letzten ${league.relegationPlaces} steigen ab.` : "Kein Abstieg in dieser Liga."}</p>
            <div class="pill-row"><span>${week.playedPlayerMatches}/${week.maxPlayerMatches} Spieltage</span><span>${week.reward?.claimed ? "Belohnung erhalten" : "Belohnung offen"}</span></div>
            <button type="button" data-feature-action="settle-league-week" ${week.status === "completed" || week.playedPlayerMatches < week.maxPlayerMatches ? "disabled" : ""}>Woche abschliessen</button>
          </article>
        </section>

        <section class="feature-card league-table-card">
          <h3>Teilnehmer & Tabelle</h3>
          <div class="league-table-wrap">${renderPhase8LeagueTable(table, league)}</div>
        </section>

        <section class="feature-grid two">
          <article class="feature-card">
            <h3>Taegliche Missionen</h3>
            <div class="mission-list">${daily.map(missionTile).join("")}</div>
          </article>
          <article class="feature-card">
            <h3>Woechentliche Missionen</h3>
            <div class="mission-list">${weekly.map(missionTile).join("")}</div>
          </article>
        </section>
      </div>
    `
  );
}

function missionTile(mission) {
  const progress = missionProgressLabel(mission);
  const reward = rewardLabel(mission.reward);
  const disabled = mission.status !== "claimable";
  return `
    <article class="mission-row ${mission.status}">
      <h3>${escapeHtml(mission.title)}</h3>
      <p>${escapeHtml(mission.description)}</p>
      <div class="mission-progress"><span style="width:${missionProgressPercent(mission)}%"></span></div>
      <strong>${progress} | Belohnung: ${escapeHtml(reward)}</strong>
      <button type="button" data-feature-action="claim-mission" data-mission="${escapeAttr(mission.id)}" ${disabled ? "disabled" : ""}>${mission.status === "claimed" ? "Abgeholt" : mission.status === "completed" || mission.status === "claimable" ? "Belohnung holen" : "Aktiv"}</button>
    </article>
  `;
}

function renderDeckFeature() {
  syncActiveDeckSelection();
  const deck = state.activeDeck;
  const validation = validateActiveDeck();
  const cards = deckEditorCards();
  const visibleCards = virtualCardWindow(cards);
  const strongest = state.deck.find((card) => card.id === validation.strength.strongestCardId);
  const weakest = state.deck.find((card) => card.id === validation.strength.weakestCardId);
  setFeature(
    "Deck",
    `${deckIds(deck).length}/${MATCH_CARD_COUNT} Karten | ${validation.isValid ? "Spielbereit" : "Ungueltig"}`,
    `
      <section class="deck-editor">
        <div class="deck-editor-head">
          <label class="owned-filter">
            Formation
            <select data-deck-control="formation">
              ${Object.values(FORMATIONS).filter((formation) => formation.active !== false).sort((a, b) => (a.order || 0) - (b.order || 0)).map((formation) => `<option value="${escapeAttr(formation.id)}" ${formation.id === deck.formationId ? "selected" : ""}>${escapeHtml(formation.label || formation.name || formation.id)}</option>`).join("")}
            </select>
          </label>
          <div class="deck-strength">
            <strong>${validation.strength.total}</strong>
            <span>Gesamtstaerke</span>
          </div>
          <div class="deck-strength">
            <strong>${validation.strength.average}</strong>
            <span>Durchschnitt</span>
          </div>
          <div class="deck-status ${validation.isValid ? "is-valid" : "is-invalid"}">
            <strong>${validation.isValid ? "Gueltig" : "Ungueltig"}</strong>
            <span>${escapeHtml(deck.name || "Hauptdeck")}</span>
          </div>
        </div>
        <div class="deck-summary">
          <span>Staerkste Karte: <b>${escapeHtml(strongest?.name || "-")}</b></span>
          <span>Schwaechste aktive Karte: <b>${escapeHtml(weakest?.name || "-")}</b></span>
          <span>Formation: <b>${escapeHtml(FORMATIONS[deck.formationId]?.label || deck.formationId)}</b></span>
        </div>
        ${deckValidationMessages(validation)}
        <div class="deck-editor-layout">
          <div class="formation-board">
            ${renderFormationSlots(deck)}
            <div class="bench-board">
              <h3>Ersatzbank</h3>
              <div class="bench-slots">${renderBenchSlots(deck)}</div>
            </div>
          </div>
          <aside class="deck-card-picker">
            <div class="deck-picker-head">
              <h3>Kartenauswahl</h3>
              <p>${pendingDeckCardId ? `Ausgewaehlt: ${escapeHtml(cardNameById(pendingDeckCardId))}` : "Karte antippen oder ziehen, dann Slot waehlen."}</p>
            </div>
            <div class="feature-toolbar">
              ${ownedCardFilters("deck")}
              <label class="owned-filter">
                Verfuegbarkeit
                <select data-deck-control="availability">
                  <option value="all" ${deckFilterValue("availability", "all") === "all" ? "selected" : ""}>Alle Besitzkarten</option>
                  <option value="available" ${deckFilterValue("availability", "all") === "available" ? "selected" : ""}>Nur verfuegbar</option>
                  <option value="matching" ${deckFilterValue("availability", "all") === "matching" ? "selected" : ""}>Passend zum Slot</option>
                </select>
              </label>
            </div>
            ${ownedCardFilterSummary(cards)}
            <div class="deck-card-pool">
              ${visibleCards.length ? visibleCards.map((card) => deckPickerCard(card)).join("") : emptyOwnedFilterMessage("deck")}
            </div>
          </aside>
        </div>
        <div class="deck-actions-row">
          <button class="feature-action" type="button" data-feature-action="deck-save">Deck speichern</button>
          <button class="feature-action ghost" type="button" data-feature-action="deck-autofill">Auto-vervollstaendigen</button>
          <button class="feature-action ghost" type="button" data-feature-action="deck-reset">Deck zuruecksetzen</button>
          <button class="feature-action" type="button" data-feature-action="play-now" ${validation.isValid ? "" : "disabled"}>Mit diesem Deck spielen</button>
        </div>
      </section>
    `
  );
}

function validateActiveDeck() {
  return DECK_SYSTEM?.validateDeck
    ? DECK_SYSTEM.validateDeck(state.activeDeck, state.deck, deckSystemHelpers())
    : { isValid: state.selected.length >= MATCH_CARD_COUNT, errors: [], warnings: [], strength: { total: teamPower(), average: teamPower(), strongestCardId: "", weakestCardId: "" } };
}

function deckValidationMessages(validation) {
  const messages = [...(validation.errors || []), ...(validation.warnings || [])];
  if (!messages.length) return `<div class="deck-messages is-valid">Deck ist vollstaendig und spielbereit.</div>`;
  return `<div class="deck-messages">${messages.map((message) => `<span>${escapeHtml(message)}</span>`).join("")}</div>`;
}

function renderFormationSlots(deck) {
  const formation = FORMATIONS[normalizeFormationKey(deck.formationId)] || FORMATIONS[DEFAULT_FORMATION];
  const slotCounters = {};
  return `
    <div class="formation-slots" data-formation="${escapeAttr(formation.id)}">
      ${(formation.slots || []).map((slot) => {
        slotCounters[slot.category] = (slotCounters[slot.category] || 0) + 1;
        return renderDeckSlot(deck, slot, deckSlotGridArea(slot, slotCounters[slot.category]));
      }).join("")}
    </div>
  `;
}

function renderDeckSlot(deck, slot, gridArea) {
  const cardId = deck.activeSlots?.[slot.id] || "";
  const card = state.deck.find((item) => item.id === cardId);
  const valid = card ? deckCardCategory(card) === slot.category : false;
  return `
    <article class="deck-slot ${card ? "is-filled" : "is-empty"} ${card && !valid ? "is-invalid" : ""}" style="grid-area:${escapeAttr(gridArea)}" data-deck-slot="${escapeAttr(slot.id)}" data-slot-category="${escapeAttr(slot.category)}" data-drop-target="active">
      <header><span>${escapeHtml(slot.label)}</span><b>${escapeHtml(deckCategoryLabel(slot.category))}</b></header>
      ${card ? miniCard(card, false, "deck") : `<div class="empty-deck-slot">Karte waehlen<br><small>${escapeHtml(deckCategoryLabel(slot.category))}</small></div>`}
      <div class="slot-actions">
        <button type="button" data-feature-action="deck-assign-slot" data-slot="${escapeAttr(slot.id)}">${card ? "Ersetzen" : "Setzen"}</button>
        <button type="button" data-feature-action="deck-clear-slot" data-slot="${escapeAttr(slot.id)}" ${card ? "" : "disabled"}>Entfernen</button>
      </div>
    </article>
  `;
}

function deckSlotGridArea(slot, categoryIndex = 1) {
  if (slot.category === "goalkeeper") return "gk";
  if (slot.category === "defense") return categoryIndex > 1 ? "def2" : "def1";
  if (slot.category === "midfield") return categoryIndex > 1 ? "mid2" : "mid1";
  if (slot.category === "attack") return categoryIndex > 1 ? "att2" : "att1";
  return "auto";
}

function renderBenchSlots(deck) {
  return Array.from({ length: MATCH_SUBSTITUTE_COUNT }, (_, index) => {
    const cardId = deck.bench?.[index] || "";
    const card = state.deck.find((item) => item.id === cardId);
    return `
      <article class="deck-slot bench-slot ${card ? "is-filled" : "is-empty"}" data-bench-slot="${index}" data-drop-target="bench">
        <header><span>Bank ${index + 1}</span><b>Flexibel</b></header>
        ${card ? miniCard(card, false, "deck") : `<div class="empty-deck-slot">Ersatzkarte<br><small>beliebige Kategorie</small></div>`}
        <div class="slot-actions">
          <button type="button" data-feature-action="deck-assign-bench" data-bench="${index}">${card ? "Ersetzen" : "Setzen"}</button>
          <button type="button" data-feature-action="deck-clear-bench" data-bench="${index}" ${card ? "" : "disabled"}>Entfernen</button>
        </div>
      </article>
    `;
  }).join("");
}

function deckPickerCard(card) {
  const used = deckUsedIds();
  const selected = pendingDeckCardId === card.id;
  const unavailable = used.has(card.id);
  return `
    <article class="deck-picker-card ${selected ? "is-selected" : ""} ${unavailable ? "is-used" : ""}" draggable="${unavailable ? "false" : "true"}" data-drag-card="${escapeAttr(card.id)}">
      ${miniCard(card, false, "deck")}
      <button type="button" data-feature-action="deck-pick-card" data-card="${escapeAttr(card.id)}" ${unavailable ? "disabled" : ""}>${unavailable ? "Im Deck" : "Waehlen"}</button>
    </article>
  `;
}

function deckEditorCards() {
  const filters = ownedFilterState("deck");
  const used = deckUsedIds();
  const targetCategory = pendingDeckTargetCategory();
  let cards = filteredOwnedCards("deck");
  const availability = deckFilterValue("availability", "all");
  if (availability === "available" || availability === "matching") {
    cards = cards.filter((card) => !used.has(card.id));
  }
  if (availability === "matching" && targetCategory) {
    cards = cards.filter((card) => deckCardCategory(card) === targetCategory);
  }
  if (filters.category !== "Alle Kategorien") {
    cards = cards.filter((card) => cardCategory(card) === filters.category);
  }
  return cards;
}

function pendingDeckTargetCategory() {
  const emptySlot = (FORMATIONS[state.activeDeck.formationId]?.slots || []).find((slot) => !state.activeDeck.activeSlots?.[slot.id]);
  return emptySlot?.category || "";
}

function deckFilterValue(key, fallback) {
  state.cardFilters.deck = { ...state.cardFilters.deck };
  return state.cardFilters.deck[key] || fallback;
}

function setDeckFilterValue(key, value) {
  state.cardFilters.deck = { ...state.cardFilters.deck, [key]: value };
}

function deckUsedIds() {
  return new Set(deckIds(state.activeDeck));
}

function deckCardCategory(card) {
  return DECK_SYSTEM?.cardCategory ? DECK_SYSTEM.cardCategory(card, deckSystemHelpers()) : cardCategory(card);
}

function deckCategoryLabel(category) {
  return DECK_SYSTEM?.CATEGORY_LABELS?.[category] || category;
}

function cardNameById(cardId) {
  return state.deck.find((card) => card.id === cardId)?.name || "Karte";
}

function ownedCardFilters(scope) {
  const filters = ownedFilterState(scope);
  const source = cardCollectionRecords(scope === "collection");
  const leagues = cardOptionValues(source, "league", "Alle Ligen");
  const clubs = cardOptionValues(source.filter((card) => filters.league === "Alle Ligen" || card.league === filters.league), "club", "Alle Vereine");
  const positions = cardOptionValues(source, "position", "Alle Positionen");
  const categories = cardOptionValues(source, "category", "Alle Kategorien");
  const rarities = ["Alle Seltenheiten", ...teamClasses];
  const nations = cardOptionValues(source, "nation", "Alle Nationen");
  const seriesOptions = ["Alle Serien", ...CARD_SERIES.map((series) => series.label)];
  const leagueOptions = [{ value: "Alle Ligen", label: "Alle Ligen" }, ...leagues.map((league) => ({ value: league, label: league }))];
  const clubOptions = [{ value: "Alle Vereine", label: "Alle Vereine" }, ...clubs.map((club) => ({ value: club, label: club }))];
  const positionOptions = [{ value: "Alle Positionen", label: "Alle Positionen" }, ...positions.map((position) => ({ value: position, label: position }))];
  return `
    <label class="owned-filter search-filter">
      Suche
      <input data-feature-filter="${scope}" data-filter-type="search" value="${escapeAttr(filters.search)}" placeholder="Spieler, Verein, Nation..." />
    </label>
    <label class="owned-filter">
      Liga
      <select data-feature-filter="${scope}" data-filter-type="league">
        ${leagueOptions.filter(uniqueOption).map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.league ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Verein
      <select data-feature-filter="${scope}" data-filter-type="club">
        ${clubOptions.filter(uniqueOption).map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.club ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Position
      <select data-feature-filter="${scope}" data-filter-type="position">
        ${positionOptions.filter(uniqueOption).map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === filters.position ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Kategorie
      <select data-feature-filter="${scope}" data-filter-type="category">
        ${categories.map((value) => `<option value="${escapeAttr(value)}" ${value === filters.category ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Seltenheit
      <select data-feature-filter="${scope}" data-filter-type="rarity">
        ${rarities.map((value) => `<option value="${escapeAttr(value)}" ${value === filters.rarity ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Nation
      <select data-feature-filter="${scope}" data-filter-type="nation">
        ${nations.map((value) => `<option value="${escapeAttr(value)}" ${value === filters.nation ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Besitz
      <select data-feature-filter="${scope}" data-filter-type="owned">
        ${["Alle Karten", "Besitz", "Nicht erhalten"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.owned ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Favoriten
      <select data-feature-filter="${scope}" data-filter-type="favorite">
        ${["Alle", "Favoriten", "Keine Favoriten"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.favorite ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Overall
      <select data-feature-filter="${scope}" data-filter-type="overall">
        ${["Alle Overall", "50-99", "100-149", "150-199", "200-249", "250-349"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.overall ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Level
      <select data-feature-filter="${scope}" data-filter-type="level">
        ${["Alle Level", "1-10", "11-20", "21-30", "31-50", "51-100"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.level ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Sterne
      <select data-feature-filter="${scope}" data-filter-type="stars">
        ${["Alle Sterne", "1 Stern", "2 Sterne", "3 Sterne", "4 Sterne", "5 Sterne"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.stars ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Serie
      <select data-feature-filter="${scope}" data-filter-type="series">
        ${seriesOptions.map((value) => `<option value="${escapeAttr(value)}" ${value === filters.series ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      PRO
      <select data-feature-filter="${scope}" data-filter-type="proStatus">
        ${["Alle", "Nur PRO", "Ohne PRO"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.proStatus ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Fusion
      <select data-feature-filter="${scope}" data-filter-type="fusion">
        ${["Alle", "Fusion moeglich", "Keine Fusion"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.fusion ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Duplikate
      <select data-feature-filter="${scope}" data-filter-type="duplicates">
        ${["Alle", "Nur Duplikate", "Ohne Duplikate"].map((value) => `<option value="${escapeAttr(value)}" ${value === filters.duplicates ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
    <label class="owned-filter">
      Sortieren
      <select data-feature-filter="${scope}" data-filter-type="sort">
        ${[
          ["name", "Name"],
          ["overall", "Gesamtstaerke absteigend"],
          ["overall-asc", "Gesamtstaerke aufsteigend"],
          ["rarity", "Seltenheit"],
          ["level", "Level absteigend"],
          ["level-asc", "Level aufsteigend"],
          ["stars", "Sterne"],
          ["duplicates", "Duplikate"],
          ["club", "Verein"],
          ["nation", "Nation"],
          ["position", "Position"],
          ["newest", "Neueste"],
        ].map(([value, label]) => `<option value="${escapeAttr(value)}" ${value === filters.sort ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
      </select>
    </label>
  `;
}

function ownedFilterState(scope) {
  state.cardFilters = state.cardFilters || {};
  const defaults = defaultCardFilters()[scope] || defaultCardFilters().collection;
  state.cardFilters[scope] = { ...defaults, ...(state.cardFilters[scope] || {}) };
  return state.cardFilters[scope];
}

function uniqueOption(option, index, array) {
  return array.findIndex((item) => item.value === option.value) === index;
}

function cardOptionValues(records, field, fallback) {
  if (CARD_SYSTEM?.optionValues) return CARD_SYSTEM.optionValues(records, field, fallback);
  return [fallback, ...[...new Set(records.map((card) => card[field]).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)))];
}

function cardCollectionRecords(includeCatalog = false) {
  const ownedRecords = state.deck.map((card, index) => cardViewModel({ ...card, owned: true, latestAt: card.obtainedAt ? Date.parse(card.obtainedAt) || index : index }));
  if (!includeCatalog) return ownedRecords;
  const ownedSources = new Set(state.deck.map((card) => sourceCardId(card)));
  const missingCatalog = GAME_CARDS
    .filter((card) => !ownedSources.has(sourceCardId(card)))
    .map((card, index) => cardViewModel({ ...card, owned: false, latestAt: -index - 1 }));
  return [...ownedRecords, ...missingCatalog];
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
  const records = cardCollectionRecords(scope === "collection");
  let filtered = CARD_SYSTEM?.filterRecords ? CARD_SYSTEM.filterRecords(records, filters) : records;
  filtered = filtered.filter((card) => {
    const seriesLabel = cardSeriesLabel(card.series);
    const pro = proStars(card) > 0;
    const canFuse = Boolean(fusionPartnerFor(state.deck.find((owned) => owned.id === card.id) || card));
    const duplicates = Math.max(0, Number(card.duplicateCount) || duplicateCardsFor(card).length);
    return (filters.series === "Alle Serien" || filters.series === seriesLabel)
      && (filters.proStatus === "Alle" || (filters.proStatus === "Nur PRO" ? pro : !pro))
      && (filters.fusion === "Alle" || (filters.fusion === "Fusion moeglich" ? canFuse : !canFuse))
      && (filters.duplicates === "Alle" || (filters.duplicates === "Nur Duplikate" ? duplicates > 0 : duplicates === 0));
  });
  return sortCardsForCollection(filtered, filters.sort);
}

function sortCardsForCollection(cards, sort) {
  const sorted = [...cards];
  const key = sort || "overall";
  sorted.sort((a, b) => {
    if (key === "overall-asc") return rating(a) - rating(b);
    if (key === "level-asc") return cardLevel(a) - cardLevel(b) || rating(b) - rating(a);
    if (key === "duplicates") return duplicateCardsFor(b).length - duplicateCardsFor(a).length || rating(b) - rating(a);
    if (CARD_SYSTEM?.sortRecords) return CARD_SYSTEM.sortRecords([a, b], key)[0] === a ? -1 : 1;
    return rating(b) - rating(a);
  });
  return sorted;
}

function virtualCardWindow(cards) {
  const limit = 96;
  return cards.slice(0, limit);
}

function ownedCardCount() {
  return new Set(state.deck.map((card) => sourceCardId(card))).size;
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

function emptyOwnedFilterMessage(scope = "collection") {
  const text = scope === "deck"
    ? "Du besitzt fuer diese Filterauswahl noch keine Spieler."
    : "Fuer diese Filterauswahl wurden keine Karten im Katalog gefunden.";
  return `<article class="feature-card empty-card-filter"><h3>Keine Karten gefunden</h3><p>${text}</p></article>`;
}

function renderShopFeature() {
  const adminOffers = (state.adminData?.shopOffers || []).filter((offer) => offer.active !== false);
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
        ${adminOffers.map((offer) => renderAdminShopOfferTile(offer)).join("")}
      </div>
    `
  );
}

function renderAdminShopOfferTile(offer) {
  const currency = offer.currency === "gems" ? "Diamanten" : "Coins";
  const balance = offer.currency === "gems" ? state.gems : state.coins;
  return `
    <article class="feature-card shop-offer-card">
      <h3>${escapeHtml(offer.name)}</h3>
      <p>${escapeHtml(offer.content || "Admin-Angebot")}</p>
      <strong>${formatNumber(offer.price)} ${currency}</strong>
      <button type="button" data-feature-action="buy-admin-offer" data-offer-id="${escapeAttr(offer.id)}" ${balance < offer.price ? "disabled" : ""}>Kaufen</button>
    </article>
  `;
}

function buyAdminShopOffer(target) {
  const offer = (state.adminData?.shopOffers || []).find((item) => item.id === target.dataset.offerId);
  if (!offer || offer.active === false) {
    showToast("Dieses Shop-Angebot ist nicht verfuegbar.", "error");
    return;
  }
  const price = Math.max(0, Number(offer.price) || 0);
  const currency = offer.currency === "gems" ? "gems" : "coins";
  if (currency === "gems" && state.gems < price) {
    showToast("Nicht genug Diamanten.", "error");
    return;
  }
  if (currency === "coins" && state.coins < price) {
    showToast("Nicht genug Credits.", "error");
    return;
  }
  const fromCoins = state.coins;
  if (currency === "gems") state.gems -= price;
  else state.coins -= price;
  const rewardText = applyAdminOfferReward(offer);
  state.log = [`Shop-Angebot gekauft: ${offer.name}. ${rewardText}`, ...state.log].slice(0, 8);
  saveState();
  render();
  animateCoinChange(fromCoins, state.coins, target);
  showToast(`${offer.name} gekauft.`, "success");
  renderShopFeature();
}

function applyAdminOfferReward(offer) {
  const text = `${offer.name || ""} ${offer.content || ""}`.toLowerCase();
  if (text.includes("diamant") || text.includes("gem")) {
    state.gems += 25;
    return "+25 Diamanten.";
  }
  if (text.includes("pack") || text.includes("booster")) {
    grantFreePack(state.boosterPacks[0]?.id || "pack-bronze", 1);
    return "+1 Gratis Booster.";
  }
  if (text.includes("karte") || text.includes("scout") || text.includes("spieler")) {
    const card = addGeneratedCard(state.teamClassIndex, state.teamClassIndex + 2);
    return `Karte ${safeCardName(card)}.`;
  }
  state.coins += 1000;
  return "+1.000 Credits.";
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

function renderNotificationsFeature() {
  const activeEvents = state.events.filter((event) => event.active).slice(0, 3);
  setFeature(
    "Benachrichtigungen",
    "Status",
    `
      <div class="feature-list">
        ${messageTile("Account bereit", `${escapeHtml(activeUser().name)} ist angemeldet. Coins und Diamanten sind synchronisiert.`)}
        ${messageTile("XP-Fortschritt", "Level 25 | 3250 / 5100 XP. Die XP-Leiste wird im Header angezeigt.")}
        ${activeEvents.length
          ? activeEvents.map((event) => messageTile(event.title, `${event.type} startet am ${event.date} um ${event.startTime || "00:00"}.`)).join("")
          : messageTile("Keine aktiven Events", "Sobald Events aktiv sind, erscheinen sie hier und im Hauptmenue.")}
      </div>
    `
  );
}

function renderSettingsFeature() {
  const user = activeUser();
  setFeature(
    "Einstellungen",
    "Profil & Bedienung",
    `
      <div class="feature-grid two">
        <article class="feature-card settings-profile-card">
          <div class="login-active-user">
            <div class="admin-avatar">${escapeHtml(userInitials(userDisplayName(user)))}</div>
            <div>
              <strong>${escapeHtml(userDisplayName(user))}</strong>
              <span>Level ${Math.max(1, Math.floor(profileStats().xp / 1000) + 1)}</span>
            </div>
          </div>
          <p>Bearbeite Anzeigename, E-Mail und PIN im Profilfenster.</p>
          <button type="button" data-feature-action="open-profile">Profil bearbeiten</button>
          <button type="button" data-feature-action="logout">Logout</button>
        </article>
        <article class="feature-card">
          <h3>Anzeige</h3>
          <p>Stadionlicht, Partikel, Kachelglow und Hover-Effekte verwenden das bestehende KickOff-SuperCard-Design.</p>
          <div class="pill-row"><span>HUD aktiv</span><span>Touch optimiert</span><span>Responsive</span></div>
        </article>
        <article class="feature-card">
          <h3>Sound & Vibration</h3>
          <p>UI-Taps, Pack-Feedback und Coin-Animationen nutzen dezente Browser-Effekte, wenn das Geraet sie unterstuetzt.</p>
          <button type="button" data-feature-action="settings-info">Systemhinweis</button>
        </article>
        <article class="feature-card">
          <h3>Admin Center</h3>
          <p>${canOpenAdmin(user) ? "Deine Rolle darf das Admin Center oeffnen." : "Admin Center ist nur fuer Owner und Admin sichtbar."}</p>
          <button type="button" data-feature-action="open-admin" ${canOpenAdmin(user) ? "" : "disabled"}>Admin Center oeffnen</button>
        </article>
      </div>
    `
  );
}

function profileStats() {
  const user = activeUser();
  user.stats = normalizeUserStats(user.stats);
  const matches = Array.isArray(state.matchHistory) ? state.matchHistory : [];
  const wins = matches.filter((match) => match.result === "win" || match.winner === "player").length + (Number(state.record?.win) || 0);
  const losses = matches.filter((match) => match.result === "loss" || match.winner === "cpu").length + (Number(state.record?.loss) || 0);
  const packsOpened = Array.isArray(state.boosterOpenings) ? state.boosterOpenings.length : 0;
  const rarest = state.deck.reduce((best, card) => normalizeClassIndex(card.cls) > normalizeClassIndex(best?.cls) ? card : best, state.deck[0] || null);
  const missionCompleted = Array.isArray(state.claimedMissions) ? state.claimedMissions.length : 0;
  const xp = matches.length * 120 + packsOpened * 40 + state.deck.length * 10 + missionCompleted * 80;
  return {
    matches: Math.max(matches.length, user.stats.matchesPlayed),
    wins: Math.max(wins, user.stats.matchesWon),
    losses: Math.max(losses, user.stats.matchesLost),
    roundsWon: matches.reduce((sum, match) => sum + (Number(match.playerRounds) || Number(match.roundsWon) || 0), 0),
    highestLeague: leagues[Math.max(0, Number(state.leagueIndex) || 0)] || leagues[0],
    currentLeague: leagues[state.leagueIndex] || leagues[0],
    packsOpened: Math.max(packsOpened, user.stats.packsOpened),
    cardsReceived: state.deck.length,
    collectionCount: Math.max(new Set(state.deck.map(sourceCardId)).size, user.stats.cardsCollected),
    cardsFused: user.stats.cardsFused,
    highestCardLevel: Math.max(user.stats.highestCardLevel, state.deck.reduce((max, card) => Math.max(max, cardLevel(card)), 1)),
    leaguePromotions: user.stats.leaguePromotions,
    rarestCard: rarest ? `${safeCardName(rarest)} (${teamClasses[normalizeClassIndex(rarest.cls)]})` : "Keine Karte",
    missionCompleted,
    jackpots: Array.isArray(state.rewardBoards) ? state.rewardBoards.filter((board) => board.jackpot).length : 0,
    xp,
  };
}

function renderProfileFeature() {
  const user = activeUser();
  const profile = normalizeUserProfile(user.profile, user);
  const stats = profileStats();
  const accountLevel = Math.max(1, Math.floor(stats.xp / 1000) + 1);
  const winRate = stats.wins + stats.losses > 0 ? Math.round((stats.wins / (stats.wins + stats.losses)) * 100) : 0;
  setFeature(
    "Profil",
    "Account & Einstellungen",
    `
      <div class="profile-grid">
        <article class="feature-card profile-summary-card profile-frame-${escapeAttr(profile.frame)}">
          <div class="profile-banner" style="--profile-banner:url('${escapeAttr(profile.banner || "assets/tiles/tile-play.png")}')"></div>
          <div class="login-active-user">
            ${userAvatarMarkup(user)}
            <div>
              <strong>${escapeHtml(profile.displayName)}</strong>
              <span>${escapeHtml(user.role)} | Level ${accountLevel}</span>
            </div>
          </div>
          <div class="pill-row"><span>${escapeHtml(profile.title || "Kein Titel")}</span><span>${escapeHtml(profile.favoriteClub)}</span><span>${formatNumber(stats.xp)} XP</span></div>
          <p>${profile.favoritePlayer ? `Lieblingsspieler: ${escapeHtml(profile.favoritePlayer)}` : "Noch kein Lieblingsspieler gespeichert."}</p>
          <p class="muted">${profile.bio ? escapeHtml(profile.bio) : "Noch keine Profilbeschreibung."}</p>
          <p class="muted">Erstellt: ${escapeHtml(formatDateShort(profile.createdAt))} | Letzter Login: ${escapeHtml(formatDateShort(profile.lastLoginAt))}</p>
        </article>
        <article class="feature-card">
          <h3>Statistiken</h3>
          <div class="phase9-grid profile-stat-grid">
            <article><b>${stats.matches}</b><span>Matches</span></article>
            <article><b>${stats.wins}</b><span>Siege</span></article>
            <article><b>${stats.losses}</b><span>Niederlagen</span></article>
            <article><b>${winRate}%</b><span>Siegquote</span></article>
            <article><b>${stats.packsOpened}</b><span>Packs</span></article>
            <article><b>${stats.collectionCount}</b><span>Sammlung</span></article>
            <article><b>${stats.cardsFused}</b><span>Fusionen</span></article>
            <article><b>${stats.highestCardLevel}</b><span>Top-Level</span></article>
            <article><b>${stats.leaguePromotions}</b><span>Aufstiege</span></article>
          </div>
          <p class="muted">Seltenste Karte: ${escapeHtml(stats.rarestCard)}. Missionen: ${stats.missionCompleted}. Jackpots: ${stats.jackpots}.</p>
        </article>
        <article class="feature-card profile-form-card">
          <h3>Profil bearbeiten</h3>
          <div class="profile-form">
            <label>Anzeigename<input data-profile-field="displayName" maxlength="32" value="${escapeAttr(profile.displayName)}" /></label>
            <label>E-Mail<input data-profile-field="email" type="email" value="${escapeAttr(profile.email || user.email)}" /></label>
            <label>Avatar URL oder Assetpfad<input data-profile-field="avatar" value="${escapeAttr(profile.avatar)}" placeholder="assets/..." /></label>
            <label>Banner URL oder Assetpfad<input data-profile-field="banner" value="${escapeAttr(profile.banner)}" placeholder="assets/tiles/tile-play.png" /></label>
            <label>Lieblingsverein<input data-profile-field="favoriteClub" value="${escapeAttr(profile.favoriteClub)}" /></label>
            <label>Lieblingsspieler<input data-profile-field="favoritePlayer" value="${escapeAttr(profile.favoritePlayer)}" /></label>
            <label>Profil-Titel<input data-profile-field="title" maxlength="42" value="${escapeAttr(profile.title)}" /></label>
            <label>Profilrahmen<select data-profile-field="frame">${["standard", "green", "gold", "elite"].map((frame) => `<option value="${frame}" ${frame === profile.frame ? "selected" : ""}>${frame}</option>`).join("")}</select></label>
            <label>Bio<textarea data-profile-field="bio" maxlength="260">${escapeHtml(profile.bio)}</textarea></label>
            <label>PIN<input data-profile-field="pin" type="text" inputmode="numeric" value="${escapeAttr(user.pin)}" /></label>
            <label>Sprache<select data-profile-field="language"><option value="de" ${profile.language === "de" ? "selected" : ""}>Deutsch</option><option value="en" ${profile.language === "en" ? "selected" : ""}>English</option></select></label>
            <label>Sichtbarkeit<select data-profile-field="visibility"><option value="private" ${profile.visibility === "private" ? "selected" : ""}>Privat</option><option value="friends" ${profile.visibility === "friends" ? "selected" : ""}>Freunde</option><option value="public" ${profile.visibility === "public" ? "selected" : ""}>Oeffentlich</option></select></label>
            <label>Formation<select data-profile-field="preferredFormation">${Object.values(FORMATIONS).filter((formation) => formation.active !== false).map((formation) => `<option value="${escapeAttr(formation.id)}" ${formation.id === profile.preferredFormation ? "selected" : ""}>${escapeHtml(formation.label || formation.name || formation.id)}</option>`).join("")}</select></label>
            <label><input type="checkbox" data-profile-pref="sound" ${profile.preferences.sound ? "checked" : ""} /> Sound</label>
            <label><input type="checkbox" data-profile-pref="music" ${profile.preferences.music ? "checked" : ""} /> Musik</label>
            <label><input type="checkbox" data-profile-pref="animations" ${profile.preferences.animations ? "checked" : ""} /> Animationen</label>
            <label><input type="checkbox" data-profile-pref="notifications" ${profile.preferences.notifications ? "checked" : ""} /> Benachrichtigungen</label>
          </div>
          <button class="feature-action" type="button" data-feature-action="save-profile">Profil speichern</button>
          <button type="button" data-feature-action="open-profile-login">Account wechseln / PIN</button>
          <button type="button" data-feature-action="logout">Logout</button>
        </article>
      </div>
    `
  );
}

function saveProfileFromFeature() {
  const user = activeUser();
  const root = els.featureContent;
  const field = (name) => root.querySelector(`[data-profile-field="${name}"]`)?.value || "";
  const displayName = sanitizeProfileText(field("displayName"), 32);
  if (displayName.length < 3) {
    showToast("Der Anzeigename braucht mindestens 3 Zeichen.", "error");
    return;
  }
  user.name = displayName;
  user.email = normalizeEmail(field("email"), displayName);
  const pin = field("pin").trim();
  if (pin) user.pin = normalizePin(pin, user.role);
  user.profile = normalizeUserProfile({
    ...user.profile,
    displayName,
    email: user.email,
    avatar: field("avatar"),
    banner: field("banner"),
    favoriteClub: sanitizeProfileText(field("favoriteClub"), 64),
    favoritePlayer: sanitizeProfileText(field("favoritePlayer"), 64),
    title: sanitizeProfileText(field("title"), 42),
    frame: field("frame"),
    bio: field("bio"),
    favoriteClubId: sanitizeProfileText(field("favoriteClub"), 64),
    motto: sanitizeProfileText(field("title"), 42),
    language: field("language"),
    visibility: field("visibility"),
    preferredFormation: field("preferredFormation"),
    preferences: {
      sound: Boolean(root.querySelector('[data-profile-pref="sound"]')?.checked),
      music: Boolean(root.querySelector('[data-profile-pref="music"]')?.checked),
      animations: Boolean(root.querySelector('[data-profile-pref="animations"]')?.checked),
      notifications: Boolean(root.querySelector('[data-profile-pref="notifications"]')?.checked),
    },
    updatedAt: new Date().toISOString(),
  }, user);
  state.formation = user.profile.preferredFormation;
  saveState();
  updateAccountUi();
  renderProfileFeature();
  showToast("Profil gespeichert.", "success");
}

function messageTile(title, text) {
  return `<article class="message-row"><h3>${title}</h3><p>${text}</p></article>`;
}

function friendTile(name, league, lp) {
  return `<article class="feature-card"><h3>${name}</h3><p>${league} | ${lp} LP</p><button type="button" data-feature-action="friendly" data-name="${name}">Freundschaftsspiel</button></article>`;
}

function renderCardPhoto(card, className = "card-photo") {
  const photo = playerPhoto(card);
  return photo ? `<img class="${className}" src="${escapeAttr(photo)}" alt="${escapeAttr(safeCardName(card))} Profilbild" loading="lazy" onerror="this.onerror=null;this.src='${PLAYER_IMAGE_SILHOUETTE}'" />` : "";
}

function refreshCardManagementFeature() {
  if (els.featureTitle.textContent === "Fusion") {
    renderFusionFeature();
  } else {
    renderCollectionFeature();
  }
}

function miniCard(card, selectable, context = "") {
  const model = cardViewModel(card);
  const selected = state.selected.includes(card.id);
  const tier = normalizeClassIndex(model.cls);
  const club = getClub(card.club);
  const level = model.level;
  const proReady = model.owned ? fusionPartnerFor(card) : false;
  const starInfo = model.owned ? starUpgradeInfo(card) : null;
  const isFusionContext = context === "fusion";
  const isClickableContext = ["fusion", "collection", "deck"].includes(context);
  const cardId = escapeAttr(card.id);
  const cardAction = selectable && model.owned
    ? `data-feature-action="toggle-card" data-card="${cardId}"`
    : isClickableContext
      ? `data-feature-action="card-details" data-card="${cardId}" tabindex="0" role="button" aria-label="${escapeAttr(safeCardName(card))} Details oeffnen"`
      : "";
  return `
    <article class="mini-card card-tier-${tier} ${selected ? "selected" : ""} ${model.owned ? "is-owned" : "is-missing"} ${model.favorite ? "is-favorite" : ""} ${isClickableContext ? "is-clickable" : ""}" ${cardAction}>
      <div class="card-top">
        <div class="rating">${model.overall}</div>
        <span class="card-position">${escapeHtml(model.position)}</span>
        <img class="card-crest" src="${club.crest}" alt="${club.name} Wappen" />
      </div>
      ${proBadge(card)}
      <span class="series-badge series-${escapeAttr(cardSeries(card))}">${escapeHtml(model.rarity)} | ${escapeHtml(cardSeriesLabel(card.series))}</span>
      ${renderCardPhoto(card)}
      <div class="card-name" title="${escapeAttr(safeCardName(card))}">${escapeHtml(safeCardName(card))}</div>
      <div class="card-meta-row"><span>${escapeHtml(model.flag)}</span><span>${escapeHtml(model.nation)}</span><span>${escapeHtml(model.category)}</span></div>
      <div class="card-progress"><span>${model.starsText} | Level ${level}/${model.levelCap} | XP ${model.xp}</span><i style="--level-progress:${Math.min(100, Math.round(level / model.levelCap * 100))}%"></i></div>
      ${model.owned ? renderCardStats(card) : `<div class="missing-card-lock">Nicht erhalten</div>`}
      <div class="card-ownership"><span>${model.owned ? "Besitz" : "Katalog"}</span><span>Duplikate ${model.duplicateCount}</span></div>
      ${context === "collection" ? `
        <div class="card-actions">
          <button type="button" data-feature-action="card-details" data-card="${cardId}">Details</button>
          <button type="button" data-feature-action="toggle-favorite" data-card="${cardId}" ${model.owned ? "" : "disabled"}>${model.favorite ? "Favorit" : "Merken"}</button>
          <button type="button" data-feature-action="level-card" data-card="${cardId}" ${!model.owned || level >= model.levelCap ? "disabled" : ""}>Leveln</button>
          <button type="button" data-feature-action="toggle-lock-card" data-card="${cardId}" ${model.owned ? "" : "disabled"}>${model.locked ? "Entsperren" : "Sperren"}</button>
        </div>
      ` : ""}
      ${isFusionContext ? `
        <div class="card-actions">
          <button type="button" data-feature-action="card-details" data-card="${cardId}" ${model.owned ? "" : "disabled"}>Details</button>
          <button type="button" data-feature-action="star-card" data-card="${cardId}" ${!starInfo?.canUpgrade || model.locked || model.favorite ? "disabled" : ""}>Stern-Fusion</button>
          <button type="button" data-feature-action="pro-card" data-card="${cardId}" ${!proReady || model.locked || model.favorite ? "disabled" : ""}>PRO-Fusion</button>
        </div>
      ` : ""}
    </article>
  `;
}

function cardViewModel(card) {
  const sourceId = sourceCardId(card);
  const directOwned = state.deck.find((owned) => owned.id === card.id || owned.instanceId === card.instanceId);
  const ownedMatches = state.deck.filter((owned) => sourceCardId(owned) === sourceId);
  const owned = Boolean(directOwned) || Boolean(card.owned);
  const reference = directOwned || card;
  const model = CARD_SYSTEM?.normalizeCardRecord
    ? CARD_SYSTEM.normalizeCardRecord({ ...card, ...reference, owned, ownedCount: ownedMatches.length, duplicateCount: Math.max(0, ownedMatches.length - 1) }, { rating })
    : { ...card, owned, ownedCount: ownedMatches.length, duplicateCount: Math.max(0, ownedMatches.length - 1), overall: rating(reference), rarity: teamClasses[normalizeClassIndex(card.cls)], position: card.pos, category: cardCategory(card), nation: "Deutschland", flag: "DE", level: cardLevel(reference), stars: 1, maxLevel: CARD_MAX_LEVEL, xp: 0 };
  applyCardProgressFields(model);
  const stars = cardStars(model);
  const upgrade = model.owned ? starUpgradeInfo(reference) : { availableDuplicates: 0, duplicatesRequired: CARD_PROGRESSION.starDuplicateCosts[stars] || 0 };
  return {
    ...model,
    id: reference.id || model.id,
    instanceId: reference.instanceId || reference.id || model.instanceId,
    name: safeCardName(model),
    favorite: Boolean(reference.favorite),
    locked: Boolean(reference.locked),
    levelCap: cardLevelCap(model),
    xpToNext: model.xpToNextLevel,
    duplicateCount: Math.max(0, upgrade.availableDuplicates),
    duplicatesRequired: upgrade.duplicatesRequired,
    starsText: "★".repeat(stars) + "☆".repeat(Math.max(0, CARD_PROGRESSION.maxStars - stars)),
  };
}

function cardCategory(card) {
  return CARD_SYSTEM?.positionDefinition ? CARD_SYSTEM.positionDefinition(card.pos).category : isGoalkeeper(card) ? "Torwart" : ["IV", "CB", "LV", "RV"].includes(String(card.pos).toUpperCase()) ? "Verteidigung" : ["ST", "MS", "LA", "RA"].includes(String(card.pos).toUpperCase()) ? "Angriff" : "Mittelfeld";
}

function toggleFavoriteCard(cardId) {
  const target = state.deck.find((card) => card.id === cardId || card.instanceId === cardId);
  if (!target) {
    showToast("Favoriten sind nur fuer Besitzkarten verfuegbar.", "error");
    return;
  }
  target.favorite = !target.favorite;
  saveState();
  showToast(target.favorite ? "Karte als Favorit markiert." : "Favorit entfernt.", "success");
}

function toggleCardLock(cardId) {
  const target = state.deck.find((card) => card.id === cardId || card.instanceId === cardId);
  if (!target) {
    showToast("Karte zum Sperren nicht gefunden.", "error");
    return false;
  }
  target.locked = !target.locked;
  saveState();
  showToast(target.locked ? "Karte gesperrt." : "Karte entsperrt.", "success");
  return true;
}

function showCardDetails(cardId) {
  const owned = state.deck.find((card) => card.id === cardId || card.instanceId === cardId);
  const catalog = GAME_CARDS.find((card) => sourceCardId(card) === cardId || card.id === cardId);
  const card = owned || catalog;
  if (!card) {
    showToast("Karte nicht gefunden.", "error");
    return;
  }
  const model = cardViewModel(card);
  const club = getClub(card.club);
  const ownedCard = owned || state.deck.find((item) => item.id === card.id || item.instanceId === card.instanceId);
  const proReady = ownedCard ? fusionPartnerFor(ownedCard) : null;
  const inActiveDeck = ownedCard ? deckIds(state.activeDeck).includes(ownedCard.id) : false;
  const nowProgression = calculateCardProgression(card, model.level, model.stars);
  const nextProgression = calculateCardProgression(card, Math.min(model.level + 1, model.levelCap), model.stars);
  openDialog(
    `${safeCardName(card)} | ${model.position}`,
    "",
  );
  els.appDialog?.classList.add("card-detail-dialog");
  els.appDialogMessage.innerHTML = `
    <div class="card-detail-layout">
      <div class="card-detail-preview">
        ${miniCard(card, false, "")}
      </div>
      <div class="card-detail-data">
        <button class="card-detail-top-close" type="button" data-feature-action="close-card-detail">Schliessen</button>
        <div class="pill-row">
          <span>${escapeHtml(model.rarity)}</span>
          <span>${escapeHtml(model.category)}</span>
          <span>${escapeHtml(model.nation)} ${escapeHtml(model.flag)}</span>
          <span>${model.owned ? "Besitz" : "Nicht erhalten"}</span>
        </div>
        <dl class="card-detail-list">
          <dt>Karten-ID</dt><dd>${escapeHtml(model.cardId)}</dd>
          <dt>Instanz-ID</dt><dd>${escapeHtml(model.instanceId || card.id)}</dd>
          <dt>Spieler-ID</dt><dd>${escapeHtml(model.playerId)}</dd>
          <dt>Verein</dt><dd><img src="${escapeAttr(club.crest)}" alt="" /> ${escapeHtml(card.club)}</dd>
          <dt>Liga</dt><dd>${escapeHtml(card.league || club.league)}</dd>
          <dt>Kartenserie</dt><dd>${escapeHtml(cardSeriesLabel(card.series))}</dd>
          <dt>Overall</dt><dd>${model.overall}</dd>
          <dt>Level</dt><dd>${model.level}/${model.levelCap} (Endlevel ${CARD_MAX_LEVEL})</dd>
          <dt>Sterne</dt><dd>${model.starsText}</dd>
          <dt>XP</dt><dd>${model.xp} / ${model.xpToNext || (model.level >= model.levelCap && model.levelCap < CARD_MAX_LEVEL ? "Sternaufstieg erforderlich" : "MAX")}</dd>
          <dt>Duplikate</dt><dd>${model.duplicateCount}</dd>
          <dt>PRO-Status</dt><dd>${proStars(card) ? escapeHtml(proStarsText(proStars(card), card.proQuality)) : "Keine Evolution"}</dd>
          <dt>Favorit</dt><dd>${model.favorite ? "Ja" : "Nein"}</dd>
          <dt>Erhalten</dt><dd>${escapeHtml(card.obtainedAt ? formatDateShort(card.obtainedAt) : "Nicht gespeichert")}</dd>
          <dt>Bildquelle</dt><dd>${escapeHtml(resolvePlayerImage(card).source)}</dd>
          <dt>Status</dt><dd>${escapeHtml(model.status)}</dd>
        </dl>
        <div class="card-detail-xp" aria-label="XP Fortschritt">
          <span style="--xp-progress:${model.xpToNext ? Math.min(100, Math.round(model.xp / model.xpToNext * 100)) : 100}%"></span>
        </div>
        ${model.owned ? renderCardStats(card) : `<p class="muted">Diese Karte ist noch nicht in deiner Sammlung. Werte und Rahmen werden im Katalog angezeigt.</p>`}
        <div class="future-development">
          <strong>Zukuenftige Entwicklung</strong>
          <p>Naechste Ausbaustufe: ${model.level >= model.levelCap ? "Sternaufstieg erforderlich" : `Level ${model.level + 1}`}. Sterne erweitern das Max-Level bis 100.</p>
          <p>Wertebonus aktuell: +${nowProgression.statBonus}. Naechstes Level: +${nextProgression.statBonus}.</p>
        </div>
        ${model.owned ? `
          <div class="card-detail-actions">
            <button type="button" data-feature-action="toggle-favorite-detail" data-card="${escapeAttr(ownedCard.id)}">${model.favorite ? "Favorit entfernen" : "Als Favorit markieren"}</button>
            <button type="button" data-feature-action="level-card" data-card="${escapeAttr(ownedCard.id)}" ${model.level >= model.levelCap ? "disabled" : ""}>Leveln</button>
            <button type="button" data-feature-action="toggle-lock-card" data-card="${escapeAttr(ownedCard.id)}">${ownedCard.locked ? "Entsperren" : "Sperren"}</button>
            <button type="button" data-feature-action="${inActiveDeck ? "detail-remove-deck" : "detail-add-deck"}" data-card="${escapeAttr(ownedCard.id)}">${inActiveDeck ? "Aus Deck entfernen" : "Zum Deck hinzufuegen"}</button>
            <button type="button" data-feature-action="open-fusion-from-detail" data-card="${escapeAttr(ownedCard.id)}" ${proReady || model.duplicateCount > 0 ? "" : "disabled"}>Zur Fusion</button>
            <button type="button" data-feature-action="close-card-detail">Schliessen</button>
          </div>
          <p class="muted">Sammlung: Hier kannst du Karten ansehen, leveln, favorisieren, sperren und ins Deck setzen. Fusionen laufen nur im Fusion-Bereich.</p>
        ` : `
          <div class="card-detail-actions">
            <button type="button" data-feature-action="close-card-detail">Schliessen</button>
          </div>
        `}
      </div>
    </div>
  `;
}

function handleFeatureClick(event) {
  const target = event.target.closest("[data-feature-action]");
  if (!target) return;
  const action = target.dataset.featureAction;

  if (action === "buy-pack") {
    buyPack(target);
  } else if (action === "open-owned-booster") {
    openOwnedBooster(target);
  } else if (action === "booster-info") {
    showBoosterInfo(target.dataset.packId);
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
  } else if (action === "draft-pick") {
    claimDraftPick(target);
  } else if (action === "draft-close") {
    closeFeaturePanel();
    showMenu();
  } else if (action === "settle-league-week") {
    settleLeagueWeek();
    render();
    renderLeagueFeature();
  } else if (action === "toggle-card") {
    toggleSelected(target.dataset.card);
    renderDeckFeature();
  } else if (action === "deck-pick-card") {
    pendingDeckCardId = target.dataset.card || "";
    renderDeckFeature();
  } else if (action === "deck-assign-slot") {
    assignPendingCardToSlot(target.dataset.slot);
  } else if (action === "deck-clear-slot") {
    clearDeckSlot(target.dataset.slot);
  } else if (action === "deck-assign-bench") {
    assignPendingCardToBench(Number(target.dataset.bench));
  } else if (action === "deck-clear-bench") {
    clearDeckBench(Number(target.dataset.bench));
  } else if (action === "deck-autofill") {
    autoFillActiveDeck();
  } else if (action === "deck-reset") {
    resetActiveDeck();
  } else if (action === "deck-save") {
    saveActiveDeckFromEditor();
    recordGameEvent("deck_saved", { id: `deck-${Date.now()}` });
  } else if (action === "toggle-favorite") {
    toggleFavoriteCard(target.dataset.card);
    renderCollectionFeature();
  } else if (action === "toggle-favorite-detail") {
    toggleFavoriteCard(target.dataset.card);
    showCardDetails(target.dataset.card);
  } else if (action === "toggle-lock-card") {
    toggleCardLock(target.dataset.card);
    if (!els.appDialog.classList.contains("is-hidden")) showCardDetails(target.dataset.card);
    else refreshCardManagementFeature();
  } else if (action === "card-details") {
    showCardDetails(target.dataset.card);
  } else if (action === "level-card") {
    levelCard(target.dataset.card);
    recordGameEvent("card_leveled", { id: `level-${target.dataset.card}-${Date.now()}`, cardId: target.dataset.card });
    saveState();
    render();
    refreshCardManagementFeature();
    if (!els.appDialog.classList.contains("is-hidden")) showCardDetails(target.dataset.card);
  } else if (action === "level-card-small") {
    levelCard(target.dataset.card, 1);
    recordGameEvent("card_leveled", { id: `level-${target.dataset.card}-${Date.now()}`, cardId: target.dataset.card });
    saveState();
    render();
    refreshCardManagementFeature();
    if (!els.appDialog.classList.contains("is-hidden")) showCardDetails(target.dataset.card);
  } else if (action === "star-card") {
    const card = state.deck.find((item) => item.id === target.dataset.card);
    const info = starUpgradeInfo(card);
    if (!card || !window.confirm(`${safeCardName(card)} auf ${info.nextStars} Sterne entwickeln? Verbrauch: ${info.duplicatesRequired} Duplikat(e).`)) return;
    if (raiseCardStars(target.dataset.card)) {
      recordGameEvent("card_star_upgraded", { id: `star-${target.dataset.card}-${Date.now()}` });
      saveState();
      render();
      refreshCardManagementFeature();
      showCardDetails(target.dataset.card);
    }
  } else if (action === "pro-card") {
    const card = state.deck.find((item) => item.id === target.dataset.card);
    const partner = fusionPartnerFor(card);
    if (!card || !partner || !window.confirm(`${safeCardName(card)} mit ${safeCardName(partner)} zur Evolution fusionieren? Die Partnerkarte wird verbraucht.`)) return;
    fuseCardToPro(target.dataset.card);
    recordGameEvent("card_fused", { id: `pro-${target.dataset.card}-${Date.now()}` });
    saveState();
    render();
    refreshCardManagementFeature();
    showCardDetails(target.dataset.card);
  } else if (action === "detail-add-deck") {
    addCardToActiveDeckFromDetails(target.dataset.card);
    showCardDetails(target.dataset.card);
  } else if (action === "detail-remove-deck") {
    removeCardFromActiveDeck(target.dataset.card);
    showCardDetails(target.dataset.card);
  } else if (action === "open-fusion-from-detail") {
    closeDialog();
    openFeature("fusion");
  } else if (action === "close-card-detail") {
    closeDialog();
  } else if (action === "save-profile") {
    saveProfileFromFeature();
  } else if (action === "buy-scout-ticket") {
    if (!spendCoins(75)) return;
    const card = addGeneratedCard(state.teamClassIndex, state.teamClassIndex + 1);
    recordGameEvent("credits_earned", { id: `shop-spend-${Date.now()}`, amount: 0 });
    showToast(`Scout gezogen: ${safeCardName(card)}.`, "success");
    render();
    renderShopFeature();
  } else if (action === "buy-coins") {
    if (state.gems < 25) {
      showToast("Nicht genug Diamanten.", "error");
      return;
    }
    state.gems -= 25;
    const fromCoins = state.coins;
    state.coins += 1000;
    saveState();
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderShopFeature();
  } else if (action === "buy-gold-scout") {
    if (!spendCoins(400)) return;
    const card = addGeneratedCard(5, 10);
    showToast(`Gold Scout: ${safeCardName(card)} erhalten.`, "success");
    render();
    renderShopFeature();
  } else if (action === "buy-admin-offer") {
    buyAdminShopOffer(target);
  } else if (action === "buy-platzpass") {
    const price = Math.max(0, Number(state.adminData?.platzpass?.price ?? 950) || 950);
    if (state.platzPass?.owned) {
      showToast("PlatzPass ist bereits aktiv.", "success");
      return;
    }
    if (state.coins < price) {
      showToast("Nicht genug Credits fuer den PlatzPass.", "error");
      return;
    }
    const fromCoins = state.coins;
    state.coins -= price;
    state.platzPass = { ...normalizePlatzPassState(state.platzPass), owned: true };
    state.log = [`PlatzPass gekauft: ${state.adminData?.platzpass?.name || "KickOff SuperCard PlatzPass"}.`, ...state.log].slice(0, 8);
    saveState();
    render();
    animateCoinChange(fromCoins, state.coins, target);
    renderPlatzpassFeature();
  } else if (action === "event-cup") {
    const fromCoins = state.coins;
    state.coins += 180;
    state.lp += 12;
    state.log = ["Event: Weekend Cup gespielt. +180 Coins, +12 LP.", ...state.log].slice(0, 8);
    recordGameEvent("credits_earned", { id: `event-cup-${Date.now()}`, amount: 180 });
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
  } else if (action === "open-profile") {
    closeFeaturePanel();
    navigateTo("profile");
  } else if (action === "open-profile-login") {
    openLoginPanel("Account wechseln oder PIN bearbeiten.");
  } else if (action === "logout") {
    logoutActiveUser();
  } else if (action === "open-starter-pack") {
    openStarterPackForActiveUser();
  } else if (action === "open-admin") {
    closeFeaturePanel();
    navigateTo("admin");
  } else if (action === "settings-info") {
    openDialog("KickOff SuperCard Einstellungen", "Diese Phase stellt die Benutzeroberflaeche bereit. Gameplay-, Booster- und Shop-Systeme werden hier nicht erweitert.");
  }
}

function handleFeatureChange(event) {
  const deckControl = event.target.closest("[data-deck-control]");
  if (deckControl) {
    handleDeckControlChange(deckControl);
    return;
  }
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
  } else if (Object.prototype.hasOwnProperty.call(filters, type)) {
    filters[type] = field.value;
  }
  if (scope === "deck") {
    renderDeckFeature();
  } else {
    renderCollectionFeature();
  }
}

function handleDeckControlChange(control) {
  if (control.dataset.deckControl === "formation") {
    changeActiveDeckFormation(control.value);
  } else if (control.dataset.deckControl === "availability") {
    setDeckFilterValue("availability", control.value);
    renderDeckFeature();
  }
}

function handleDeckDragStart(event) {
  const card = event.target.closest("[data-drag-card]");
  if (!card) return;
  event.dataTransfer?.setData("text/plain", card.dataset.dragCard);
  pendingDeckCardId = card.dataset.dragCard || "";
}

function handleDeckDragOver(event) {
  if (event.target.closest("[data-drop-target]")) {
    event.preventDefault();
  }
}

function handleDeckDrop(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target) return;
  event.preventDefault();
  const cardId = event.dataTransfer?.getData("text/plain") || pendingDeckCardId;
  if (target.dataset.dropTarget === "active") {
    assignPendingCardToSlot(target.dataset.deckSlot, cardId);
  } else if (target.dataset.dropTarget === "bench") {
    assignPendingCardToBench(Number(target.dataset.benchSlot), cardId);
  }
}

function assignPendingCardToSlot(slotId, cardId = pendingDeckCardId) {
  const card = state.deck.find((item) => item.id === cardId);
  const slot = (FORMATIONS[state.activeDeck.formationId]?.slots || []).find((item) => item.id === slotId);
  if (!card || !slot) {
    showToast("Bitte zuerst eine gueltige Karte und einen Slot waehlen.", "error");
    return;
  }
  if (deckUsedIds().has(card.id) && state.activeDeck.activeSlots?.[slotId] !== card.id) {
    showToast("Diese Karteninstanz ist bereits im Deck.", "error");
    return;
  }
  if (deckCardCategory(card) !== slot.category) {
    showToast(`${card.name} passt nicht auf ${deckCategoryLabel(slot.category)}.`, "error");
    return;
  }
  state.activeDeck.activeSlots[slotId] = card.id;
  pendingDeckCardId = "";
  syncActiveDeckSelection();
  saveState();
  render();
  renderDeckFeature();
}

function assignPendingCardToBench(index, cardId = pendingDeckCardId) {
  const card = state.deck.find((item) => item.id === cardId);
  if (!card || index < 0 || index >= MATCH_SUBSTITUTE_COUNT) {
    showToast("Bitte zuerst eine gueltige Ersatzkarte waehlen.", "error");
    return;
  }
  if (deckUsedIds().has(card.id) && state.activeDeck.bench?.[index] !== card.id) {
    showToast("Diese Karteninstanz ist bereits im Deck.", "error");
    return;
  }
  state.activeDeck.bench[index] = card.id;
  pendingDeckCardId = "";
  syncActiveDeckSelection();
  saveState();
  render();
  renderDeckFeature();
}

function clearDeckSlot(slotId) {
  if (state.activeDeck.activeSlots?.[slotId]) {
    state.activeDeck.activeSlots[slotId] = "";
    syncActiveDeckSelection();
    saveState();
  }
  render();
  renderDeckFeature();
}

function clearDeckBench(index) {
  if (Array.isArray(state.activeDeck.bench) && index >= 0 && index < MATCH_SUBSTITUTE_COUNT) {
    state.activeDeck.bench[index] = "";
    syncActiveDeckSelection();
    saveState();
  }
  render();
  renderDeckFeature();
}

function addCardToActiveDeckFromDetails(cardId) {
  const card = state.deck.find((item) => item.id === cardId);
  if (!card) {
    showToast("Karte nicht gefunden.", "error");
    return false;
  }
  if (deckUsedIds().has(card.id)) {
    showToast("Diese Karte ist bereits im Deck.", "error");
    return false;
  }
  const formation = FORMATIONS[state.activeDeck.formationId] || FORMATIONS[DEFAULT_FORMATION];
  const matchingSlot = (formation.slots || []).find((slot) => !state.activeDeck.activeSlots?.[slot.id] && deckCardCategory(card) === slot.category);
  if (matchingSlot) {
    state.activeDeck.activeSlots[matchingSlot.id] = card.id;
  } else {
    const benchIndex = (state.activeDeck.bench || []).findIndex((item) => !item);
    if (benchIndex < 0) {
      showToast("Kein freier Deck- oder Bankplatz verfuegbar.", "error");
      return false;
    }
    state.activeDeck.bench[benchIndex] = card.id;
  }
  syncActiveDeckSelection();
  saveState();
  render();
  showToast(`${safeCardName(card)} wurde dem Deck hinzugefuegt.`, "success");
  return true;
}

function removeCardFromActiveDeck(cardId) {
  let removed = false;
  Object.keys(state.activeDeck.activeSlots || {}).forEach((slotId) => {
    if (state.activeDeck.activeSlots[slotId] === cardId) {
      state.activeDeck.activeSlots[slotId] = "";
      removed = true;
    }
  });
  state.activeDeck.bench = (state.activeDeck.bench || []).map((item) => {
    if (item === cardId) {
      removed = true;
      return "";
    }
    return item;
  });
  if (!removed) {
    showToast("Diese Karte ist nicht im aktiven Deck.", "error");
    return false;
  }
  syncActiveDeckSelection();
  saveState();
  render();
  showToast("Karte wurde aus dem Deck entfernt.", "success");
  return true;
}

function autoFillActiveDeck() {
  const filled = DECK_SYSTEM?.autoCompleteDeck?.(state.deck, state.activeDeck.formationId, deckSystemHelpers());
  if (!filled) return;
  state.activeDeck = filled;
  pendingDeckCardId = "";
  syncActiveDeckSelection();
  saveState();
  showToast(filled.validation.isValid ? "Deck automatisch vervollstaendigt." : "Auto-Fill konnte kein gueltiges Deck erstellen.", filled.validation.isValid ? "success" : "error");
  render();
  renderDeckFeature();
}

function resetActiveDeck() {
  state.activeDeck = DECK_SYSTEM?.createEmptyDeck ? DECK_SYSTEM.createEmptyDeck("Hauptdeck", state.activeDeck.formationId) : createStarterActiveDeck([]);
  pendingDeckCardId = "";
  syncActiveDeckSelection();
  saveState();
  render();
  renderDeckFeature();
}

function saveActiveDeckFromEditor() {
  syncActiveDeckSelection();
  const validation = validateActiveDeck();
  state.activeDeck.validation = validation;
  state.activeDeck.strength = validation.strength.total;
  state.activeDeck.updatedAt = new Date().toISOString();
  state.savedDecks = [state.activeDeck];
  saveState();
  showToast(validation.isValid ? "Deck gespeichert und spielbereit." : "Deck gespeichert, aber noch nicht spielbereit.", validation.isValid ? "success" : "error");
  render();
  renderDeckFeature();
}

function changeActiveDeckFormation(nextFormationId) {
  const normalized = normalizeFormationKey(nextFormationId);
  if (normalized === state.activeDeck.formationId) return;
  const preview = reflowDeckForFormation(state.activeDeck, normalized);
  const removedCount = preview.removed.length;
  const message = removedCount
    ? `Durch den Formationswechsel werden ${removedCount} Karten aus der Startaufstellung entfernt. Fortfahren?`
    : "Formation wechseln und passende Karten uebernehmen?";
  if (typeof window !== "undefined" && !window.confirm(message)) {
    renderDeckFeature();
    return;
  }
  state.activeDeck = preview.deck;
  state.formation = normalized;
  pendingDeckCardId = "";
  syncActiveDeckSelection();
  saveState();
  render();
  renderDeckFeature();
}

function reflowDeckForFormation(deck, formationId) {
  const formation = FORMATIONS[formationId] || FORMATIONS[DEFAULT_FORMATION];
  const next = DECK_SYSTEM?.createEmptyDeck ? DECK_SYSTEM.createEmptyDeck(deck.name || "Hauptdeck", formationId) : createStarterActiveDeck([]);
  const previousIds = deckIds(deck);
  const used = new Set();
  const removed = [];
  (formation.slots || []).forEach((slot) => {
    const cardId = previousIds.find((id) => {
      const card = state.deck.find((item) => item.id === id);
      return card && !used.has(id) && deckCardCategory(card) === slot.category;
    });
    if (cardId) {
      next.activeSlots[slot.id] = cardId;
      used.add(cardId);
    }
  });
  const leftovers = previousIds.filter((id) => !used.has(id));
  next.bench = Array.from({ length: MATCH_SUBSTITUTE_COUNT }, (_, index) => {
    const cardId = leftovers[index] || "";
    if (cardId) used.add(cardId);
    return cardId;
  });
  removed.push(...leftovers.slice(MATCH_SUBSTITUTE_COUNT));
  return { deck: DECK_SYSTEM?.normalizeDeck ? DECK_SYSTEM.normalizeDeck(next, state.deck, deckSystemHelpers()) : next, removed };
}

function buyPack(target) {
  const packId = target.dataset.packId;
  if (processingBoosterActions.has(`buy:${packId}`)) return;
  processingBoosterActions.add(`buy:${packId}`);

  const pack = normalizeBoosterPack(state.boosterPacks.find((item) => item.id === packId) || {});
  const cardNode = target.closest(".pack-card");
  const isFree = freePackCount(packId) > 0;
  const validation = validateBoosterForOpening(pack);
  const availability = boosterAvailability(pack);
  const currency = pack.currency;
  const cost = isFree ? 0 : pack.cost;
  const balanceBefore = currency === "coins" ? state.coins : state.gems;
  let balanceAfter = balanceBefore;

  if (!pack.id || !validation.ok || !availability.ok) {
    const message = [...availability.errors, ...validation.errors][0] || "Booster kann nicht gekauft werden.";
    recordBoosterTransaction(pack, cost, currency, balanceBefore, balanceAfter, "failed", message);
    showToast(message, "error");
    processingBoosterActions.delete(`buy:${packId}`);
    return;
  }

  if (!isFree && balanceBefore < cost) {
    const message = currency === "coins" ? "Nicht genug Coins fuer diesen Booster." : "Nicht genug Diamanten fuer diesen Booster.";
    recordBoosterTransaction(pack, cost, currency, balanceBefore, balanceAfter, "failed", message);
    showToast(message, "error");
    processingBoosterActions.delete(`buy:${packId}`);
    return;
  }

  if (isFree) {
    consumeFreePack(packId);
  } else if (currency === "coins") {
    state.coins -= cost;
  } else {
    state.gems -= cost;
  }
  balanceAfter = currency === "coins" ? state.coins : state.gems;

  const transaction = recordBoosterTransaction(pack, cost, currency, balanceBefore, balanceAfter, "success", "");
  const inventoryItem = createBoosterInventoryItem(pack.id, isFree ? "free" : "purchase", transaction.id);
  state.boosterInventory.push(inventoryItem);
  state.log = [`Booster gekauft: ${pack.name}. Oeffnung startet.`, ...state.log].slice(0, 8);
  saveState();

  target.disabled = true;
  cardNode?.classList.add("is-previewing", "is-opening");
  playUiSound("pack");
  vibrate([18, 28, 22, 36, 42]);
  setTimeout(() => {
    const result = openBoosterInventoryItem(inventoryItem);
    processingBoosterActions.delete(`buy:${packId}`);
    cardNode?.classList.remove("is-opening");
    if (!result.ok) {
      showToast(result.error || "Booster konnte nicht geoeffnet werden.", "error");
      target.disabled = false;
      render();
      renderBoosterFeature();
      return;
    }
    render();
    renderBoosterFeature();
    showToast(isFree ? "Gratis-Booster geoeffnet." : "Booster gekauft und geoeffnet.", "success");
    showPackReveal(result.cards, result.pack, result.opening);
  }, 760);
}

function openOwnedBooster(target) {
  const inventoryId = target.dataset.inventoryId;
  if (!inventoryId || processingBoosterActions.has(`open:${inventoryId}`)) return;
  processingBoosterActions.add(`open:${inventoryId}`);
  const item = state.boosterInventory.find((entry) => entry.id === inventoryId);
  if (!item) {
    showToast("Booster wurde nicht gefunden.", "error");
    processingBoosterActions.delete(`open:${inventoryId}`);
    return;
  }
  const cardNode = target.closest(".booster-inventory-item");
  cardNode?.classList.add("is-opening");
  target.disabled = true;
  playUiSound("pack");
  vibrate([18, 28, 22, 36, 42]);

  setTimeout(() => {
    const result = openBoosterInventoryItem(item);
    processingBoosterActions.delete(`open:${inventoryId}`);
    cardNode?.classList.remove("is-opening");
    if (!result.ok) {
      showToast(result.error || "Booster konnte nicht geoeffnet werden.", "error");
      target.disabled = false;
      return;
    }
    render();
    renderBoosterFeature();
    showPackReveal(result.cards, result.pack, result.opening);
  }, 760);
}

function validateBoosterForOpening(pack) {
  const normalized = normalizeBoosterPack(pack);
  const dropValidation = BOOSTER_SYSTEM?.validateDropRates
    ? BOOSTER_SYSTEM.validateDropRates(normalized, teamClasses)
    : validateLocalDropRates(normalized);
  const classes = boosterOpeningClasses(normalized);
  const hasPool = classes.every((classIndex) => boosterPoolForClass(normalized, classIndex).length > 0);
  const errors = [...(dropValidation.errors || [])];
  if (!hasPool) errors.push("Fuer mindestens eine moegliche Klasse fehlen Karten im Pool.");
  return { ok: dropValidation.ok && hasPool, errors };
}

function validateLocalDropRates(pack) {
  const entries = Object.entries(pack.dropRates || {}).map(([key, value]) => [Number(key), Number(value)]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  const errors = [];
  if (Math.abs(total - 100) > 0.001) errors.push(`Dropchancen ergeben ${total} statt 100 Prozent.`);
  if (!entries.some(([, value]) => value > 0)) errors.push("Alle Dropchancen sind 0.");
  entries.forEach(([classIndex, value]) => {
    if (!pack.allowedClasses.includes(classIndex)) errors.push(`${teamClasses[classIndex] || classIndex} ist nicht im Pool erlaubt.`);
    if (!Number.isFinite(value) || value < 0) errors.push(`${teamClasses[classIndex] || classIndex} hat eine ungueltige Dropchance.`);
  });
  return { ok: errors.length === 0, errors, total };
}

function boosterAvailability(pack) {
  const normalized = normalizeBoosterPack(pack);
  return BOOSTER_SYSTEM?.validateAvailability
    ? BOOSTER_SYSTEM.validateAvailability(normalized, { transactions: state.boosterTransactions, classCount: teamClasses.length })
    : { ok: normalized.active !== false, errors: normalized.active === false ? ["Booster ist deaktiviert."] : [] };
}

function boosterOpeningClasses(pack) {
  const normalized = normalizeBoosterPack(pack);
  const classes = Object.entries(normalized.dropRates || {})
    .filter(([, value]) => Number(value) > 0)
    .map(([key]) => Number(key));
  if (normalized.guaranteedClass != null && !classes.includes(normalized.guaranteedClass)) classes.push(normalized.guaranteedClass);
  return classes;
}

function boosterPoolForClass(pack, classIndex) {
  const normalized = normalizeBoosterPack(pack);
  const exact = GAME_CARDS.filter((card) => normalizeClassIndex(card.cls) === classIndex && cardMatchesPackPool(card, normalized.pool) && cardMatchesPackPositions(card, normalized.positions));
  if (exact.length) return exact;
  if (normalized.pool === "icon" && classIndex >= teamClasses.length - 1) {
    const iconSources = GAME_CARDS.filter((card) => cardMatchesPackPool(card, "icon") && cardMatchesPackPositions(card, normalized.positions));
    if (iconSources.length) return iconSources;
  }
  return GAME_CARDS.filter((card) => normalizeClassIndex(card.cls) >= normalized.minClass && normalizeClassIndex(card.cls) <= normalized.maxClass && cardMatchesPackPool(card, normalized.pool) && cardMatchesPackPositions(card, normalized.positions));
}

function createBoosterInventoryItem(boosterId, source, transactionId) {
  return BOOSTER_SYSTEM?.createInventoryItem
    ? BOOSTER_SYSTEM.createInventoryItem(boosterId, source, transactionId)
    : {
      id: `inventory-${boosterId}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      boosterId,
      source,
      transactionId,
      status: "unopened",
      createdAt: new Date().toISOString(),
      openedAt: "",
      openingId: "",
    };
}

function recordBoosterTransaction(pack, price, currency, balanceBefore, balanceAfter, status, error = "") {
  state.boosterTransactions = normalizeBoosterTransactions(state.boosterTransactions);
  const transaction = {
    id: `txn-${pack.id || "pack"}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: "booster-purchase",
    boosterId: pack.id || "",
    quantity: 1,
    price,
    currency,
    balanceBefore,
    balanceAfter,
    date: new Date().toISOString(),
    status,
    error,
    openingId: "",
  };
  state.boosterTransactions.push(transaction);
  saveState();
  return transaction;
}

function openBoosterInventoryItem(item) {
  state.boosterInventory = normalizeBoosterInventory(state.boosterInventory);
  state.boosterOpenings = normalizeBoosterOpenings(state.boosterOpenings);
  const inventoryItem = state.boosterInventory.find((entry) => entry.id === item.id);
  const pack = normalizeBoosterPack(state.boosterPacks.find((entry) => entry.id === item.boosterId) || {});
  if (!inventoryItem) return { ok: false, error: "Booster-Instanz fehlt." };
  if (inventoryItem.openingId) {
    const existing = state.boosterOpenings.find((opening) => opening.id === inventoryItem.openingId);
    const cards = existing ? existing.cardIds.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean) : [];
    return cards.length ? { ok: true, pack, opening: existing, cards } : { ok: false, error: "Gespeicherte Oeffnung ist unvollstaendig." };
  }
  if (inventoryItem.status === "opened") return { ok: false, error: "Booster wurde bereits geoeffnet." };
  const validation = validateBoosterForOpening(pack);
  if (!validation.ok) return { ok: false, error: validation.errors[0] };

  const classPlan = BOOSTER_SYSTEM?.makeOpeningPlan ? BOOSTER_SYSTEM.makeOpeningPlan(pack) : localBoosterOpeningPlan(pack);
  const openingId = `opening-${pack.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const cards = classPlan.map((classIndex) => drawBoosterSourceCard(pack, classIndex)).map((sourceCard) => {
    const duplicate = state.deck.some((owned) => sourceCardId(owned) === sourceCardId(sourceCard));
    return { ...cloneCardForCollection(sourceCard, openingId), duplicate };
  });
  state.deck.push(...cards);

  const opening = {
    id: openingId,
    boosterId: pack.id,
    inventoryItemId: inventoryItem.id,
    createdAt: new Date().toISOString(),
    cardIds: cards.map((card) => card.id),
    sourceCardIds: cards.map((card) => sourceCardId(card)),
    guaranteedClass: pack.guaranteedClass,
    status: "opened",
  };
  inventoryItem.status = "opened";
  inventoryItem.openedAt = opening.createdAt;
  inventoryItem.openingId = openingId;
  const transaction = state.boosterTransactions.find((entry) => entry.id === inventoryItem.transactionId);
  if (transaction) transaction.openingId = openingId;
  state.boosterOpenings.push(opening);
  recordGameEvent("booster_opened", { id: openingId });
  recordGameEvent("card_received", { id: `cards-${openingId}`, count: cards.length });
  const best = bestPulledCard(cards);
  state.log = [`${pack.name} geoeffnet: ${cards.length} Karten, beste Karte ${best.name} (${teamClasses[best.cls]}).`, ...state.log].slice(0, 8);
  saveState();
  return { ok: true, pack, opening, cards };
}

function localBoosterOpeningPlan(pack) {
  const normalized = normalizeBoosterPack(pack);
  const classes = [];
  if (normalized.guaranteedClass != null) classes.push(normalized.guaranteedClass);
  while (classes.length < normalized.cardCount) {
    classes.push(pickClassFromDropRates(normalized.dropRates, normalized.minClass, normalized.maxClass));
  }
  return classes.slice(0, normalized.cardCount);
}

function drawBoosterSourceCard(pack, classIndex) {
  const pool = boosterPoolForClass(pack, classIndex);
  if (!pool.length) throw new Error("Booster-Pool ist leer.");
  const exact = pool.filter((card) => normalizeClassIndex(card.cls) === classIndex);
  const selected = pick(exact.length ? exact : pool);
  if (!exact.length && normalizeBoosterPack(pack).pool === "icon" && classIndex >= teamClasses.length - 1) {
    return { ...selected, cls: classIndex, series: "icon" };
  }
  return selected;
}

function showBoosterInfo(packId) {
  const pack = normalizeBoosterPack(state.boosterPacks.find((item) => item.id === packId) || {});
  const rates = Object.entries(pack.dropRates || {})
    .filter(([, value]) => Number(value) > 0)
    .map(([classIndex, value]) => `${teamClasses[Number(classIndex)]}: ${value}%`)
    .join("\n");
  const guarantee = pack.guaranteedClass != null ? `\nGarantie: mindestens 1x ${teamClasses[pack.guaranteedClass]}` : "";
  openDialog(`${pack.name} Drop-Rates`, `${rates || "Keine Drop-Rates hinterlegt."}${guarantee}\nKarten pro Pack: ${pack.cardCount}`);
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
  if (!card) {
    state.log = ["Keine Karten im Katalog vorhanden.", ...state.log].slice(0, 8);
    showToast("Keine Karten im Katalog vorhanden.", "warning");
    return null;
  }
  state.deck.push(card);
  recordGameEvent("card_received", { id: `card-${card.id}`, count: 1 });
  state.log = [`Neue Karte: ${card.name} (${teamClasses[card.cls]}).`, ...state.log].slice(0, 8);
  return card;
}

function addGeneratedCards(minClass, maxClass, pool = "mixed", count = 1, dropRates = null, positions = []) {
  const cards = Array.from({ length: normalizePackCardCount(count) }, () => drawGameCard(minClass, maxClass, pool, dropRates, positions)).filter(Boolean);
  if (!cards.length) {
    state.log = ["Pack konnte nicht geoeffnet werden: keine Karten im Katalog vorhanden.", ...state.log].slice(0, 8);
    showToast("Keine Karten im Katalog vorhanden.", "warning");
    return [];
  }
  state.deck.push(...cards);
  recordGameEvent("card_received", { id: `cards-${Date.now()}-${cards.length}`, count: cards.length });
  const best = bestPulledCard(cards);
  state.log = [`Pack geoeffnet: ${cards.length} ${cards.length === 1 ? "Karte" : "Karten"}, beste Karte ${best.name} (${teamClasses[best.cls]}).`, ...state.log].slice(0, 8);
  return cards;
}

function bestPulledCard(cards) {
  return [...(cards || [])].sort((a, b) => rating(b) - rating(a))[0] || null;
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
  ensurePhase8Systems();
  const mission = [...state.missionSystem.daily, ...state.missionSystem.weekly].find((item) => item.id === target.dataset.mission);
  if (!mission || mission.claimed || mission.status !== "claimable") {
    showToast("Mission ist noch nicht abholbereit oder wurde bereits abgeholt.", "warning");
    return;
  }
  const fromCoins = state.coins;
  grantMissionReward(mission.reward);
  mission.claimed = true;
  mission.claimable = false;
  mission.status = "claimed";
  const transaction = { id: `mission-${mission.id}`, missionId: mission.id, reward: mission.reward, createdAt: new Date().toISOString(), status: "success" };
  if (!state.missionSystem.transactions.some((item) => item.id === transaction.id)) state.missionSystem.transactions.push(transaction);
  state.claimedMissions = [...new Set([...(state.claimedMissions || []), mission.id])];
  saveState();
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
      if (!card) return;
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

function showPackReveal(cards, pack = null, opening = null) {
  const pulledCards = Array.isArray(cards) ? cards : [cards].filter(Boolean);
  if (!pulledCards.length) return;
  const best = bestPulledCard(pulledCards);
  const packName = typeof pack === "string" ? pack : pack?.name || "Booster Pack";
  let revealedCount = 0;
  const packArt = typeof pack === "object" && pack?.image
    ? `<img src="${escapeAttr(getPackImageUrl(pack))}" alt="${escapeAttr(packName)}" />`
    : `<span>${escapeHtml(packName)}</span>`;
  const reveal = document.createElement("div");
  reveal.className = "pack-reveal";
  reveal.innerHTML = `
    <div class="pack-reveal-panel" role="dialog" aria-modal="true" aria-label="Gezogene Karten">
      <div class="pack-reveal-head">
        <span>${escapeHtml(packName)} | ${pulledCards.length} ${pulledCards.length === 1 ? "Karte" : "Karten"}</span>
        <strong>Beste Karte: ${rating(best)} ${escapeHtml(best.name)}${opening?.id ? ` | ${escapeHtml(opening.id.slice(0, 18))}` : ""}</strong>
        <button type="button" class="pack-reveal-close" aria-label="Pack-Reveal schliessen">Fertig</button>
      </div>
      <div class="pack-opening-stage">
        <div class="pack-opening-aura"></div>
        <div class="pack-opening-pack">${packArt}</div>
        <p>Pack wird geoeffnet. Die Inhalte sind bereits gespeichert und bleiben nach Reload identisch.</p>
      </div>
      <div class="pack-reveal-grid">
        ${pulledCards.map((card, index) => renderPackRevealCard(card, index)).join("")}
      </div>
      <div class="pack-reveal-actions">
        <button type="button" data-reveal-action="skip">Ueberspringen</button>
        <button type="button" data-reveal-action="next">Naechste Karte</button>
        <button type="button" data-reveal-action="all">Alle aufdecken</button>
        <button type="button" class="pack-reveal-close">Fertig</button>
      </div>
    </div>
  `;
  document.body.appendChild(reveal);
  playUiSound("reveal");
  setTimeout(() => reveal.classList.add("is-visible"), 20);
  const updateReveal = (count) => {
    revealedCount = clamp(count, 0, pulledCards.length);
    reveal.querySelectorAll(".pack-reveal-card").forEach((cardNode, index) => {
      cardNode.classList.toggle("is-revealed", index < revealedCount);
    });
    reveal.classList.toggle("opening-complete", revealedCount >= pulledCards.length);
  };
  setTimeout(() => updateReveal(1), window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ? 80 : 980);
  const closeReveal = () => {
    reveal.classList.remove("is-visible");
    reveal.addEventListener("transitionend", () => reveal.remove(), { once: true });
  };
  reveal.querySelectorAll(".pack-reveal-close").forEach((button) => button.addEventListener("click", closeReveal));
  reveal.addEventListener("click", (event) => {
    const action = event.target.closest("[data-reveal-action]");
    if (action) {
      if (action.dataset.revealAction === "skip" || action.dataset.revealAction === "all") updateReveal(pulledCards.length);
      if (action.dataset.revealAction === "next") updateReveal(revealedCount + 1);
      return;
    }
    const cardNode = event.target.closest("[data-reveal-card]");
    if (cardNode?.classList.contains("is-revealed")) {
      showCardDetails(cardNode.dataset.revealCard);
      return;
    }
    if (event.target === reveal) closeReveal();
  });
}

function renderPackRevealCard(card, index = 0) {
  const tier = normalizeClassIndex(card.cls);
  const club = getClub(card.club);
  const rare = tier >= 8 ? " rare-hit" : "";
  return `
    <article class="pack-reveal-card card-tier-${tier}${rare}" data-reveal-card="${escapeAttr(card.id)}" style="--reveal-delay:${index * 90}ms">
      <button type="button" class="pack-card-cover" data-reveal-action="next">Karte aufdecken</button>
      <div class="pack-reveal-card-top">
        <strong>${rating(card)}</strong>
        <span>${escapeHtml(card.pos)}</span>
        <img src="${club.crest}" alt="${club.name} Wappen" />
      </div>
      <span class="series-badge series-${escapeAttr(cardSeries(card))}">${escapeHtml(cardSeriesLabel(card.series))}</span>
      ${renderCardPhoto(card, "pack-reveal-photo")}
      <b>${escapeHtml(card.name)}</b>
      <i>${teamClasses[tier]} | ${escapeHtml(cardSeriesLabel(card.series))}${card.duplicate ? " | Duplikat" : ""}</i>
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
  if (state.sessionLoggedOut) {
    openLoginPanel("Bitte zuerst einloggen, bevor das Admin Center geoeffnet wird.");
    showToast("Login erforderlich.", "error");
    return;
  }
  const user = activeUser();
  if (!canOpenAdmin(user)) {
    const message = state.adminData?.enabled === false ? "Admin Center ist deaktiviert." : `Admin Center fuer ${user.role} nicht freigegeben.`;
    showToast(message, "error");
    openLoginPanel(message);
    return;
  }
  renderAdminControls();
  els.adminCenter.classList.remove("is-hidden");
  markAdminContentViews();
  const firstSection = canUseAdminModule("dashboard", user) ? "dashboard" : firstAllowedAdminSection(user);
  renderAdminNavigationShell(firstSection);
  setActiveAdminNav(firstSection);
  setAdminContentView(firstSection);
  renderAdminDashboard();
  renderAdminPhase9Module(firstSection);
  logAdminAction("admin", "open", firstSection);
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
  els.loginActiveName.textContent = userDisplayName(user);
  els.loginActiveRole.textContent = user.role;
  els.loginActiveAvatar.textContent = userInitials(userDisplayName(user));
  els.profileNameInput.value = userDisplayName(user);
  els.profileEmailInput.value = user.email;
  els.profilePinInput.value = user.pin;
  els.loginPin.value = "";
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const user = state.adminUsers.find((item) => item.id === els.loginUserSelect.value);
  if (!user) {
    els.loginStatus.textContent = "Benutzer nicht gefunden.";
    showToast("Benutzer nicht gefunden.", "error");
    return;
  }
  if (user.locked) {
    els.loginStatus.textContent = `${user.name} ist gesperrt.`;
    showToast("Dieser Benutzer ist gesperrt.", "error");
    return;
  }
  if (!verifyPin(user, els.loginPin.value)) {
    els.loginStatus.textContent = "PIN stimmt nicht.";
    showToast("PIN stimmt nicht.", "error");
    return;
  }
  syncActiveUserWallet();
  snapshotCurrentUserData(state.activeUserId);
  state.activeUserId = user.id;
  state.sessionLoggedOut = false;
  applyUserData(user.id);
  user.profile = normalizeUserProfile({ ...user.profile, lastLoginAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, user);
  loadActiveUserWallet();
  els.loginStatus.textContent = `Eingeloggt als ${user.name} (${user.role}).`;
  updateAccountUi();
  render();
  saveState();
  showToast(`Eingeloggt als ${user.name}.`, "success");
  setTimeout(() => {
    closeLoginPanel();
    maybeOpenStarterPackFlow(user.id);
  }, 350);
}

function logoutActiveUser() {
  snapshotCurrentUserData(state.activeUserId);
  syncActiveUserWallet();
  state.sessionLoggedOut = true;
  state.deck = [];
  state.selected = [];
  state.activeDeck = createStarterActiveDeck([]);
  state.savedDecks = [state.activeDeck];
  state.coins = 0;
  state.gems = 0;
  saveState();
  closeFeaturePanel();
  closeAdminCenter();
  updateAccountUi();
  render();
  openLoginPanel("Du bist abgemeldet. Waehle einen Account und gib die PIN ein.");
  showToast("Logout erfolgreich.", "success");
}

function maybeOpenStarterPackFlow(userId = state.activeUserId) {
  state.userData = state.userData || {};
  const data = normalizeUserData(state.userData[userId] || createDefaultUserData(userId, [], null, []), userId);
  state.userData[userId] = data;
  if (data.starterPack.status === "completed") return false;
  closeAdminCenter();
  closeDialog();
  setFeature(
    "Starter-Pack",
    "Willkommen bei KickOff SuperCard",
    `
      <section class="feature-card starter-pack-card">
        <h3>Dein Startkader wartet</h3>
        <p>Oeffne dein einmaliges Starter-Pack. Es enthaelt genau 10 Karten: 6 Bronze, 3 Silber und 1 Gold. Die Goldkarte wird zuletzt aufgedeckt.</p>
        <div class="pill-row">
          <span>1 Torwart</span>
          <span>2 Verteidiger</span>
          <span>2 Mittelfeld</span>
          <span>1 Sturm</span>
          <span>Instanzkarten</span>
        </div>
        <button class="feature-action" type="button" data-feature-action="open-starter-pack">Starter-Pack oeffnen</button>
      </section>
    `
  );
  els.featurePanel.classList.remove("is-hidden");
  document.body.classList.add("menu-open");
  return true;
}

function openStarterPackForActiveUser() {
  const userId = state.activeUserId;
  state.userData = state.userData || {};
  const data = normalizeUserData(state.userData[userId] || createDefaultUserData(userId, [], null, []), userId);
  if (data.starterPack.status === "completed") {
    showToast("Starter-Pack wurde bereits abgeschlossen.", "success");
    closeFeaturePanel();
    return;
  }

  let cards = data.starterPack.cardIds
    .map((id) => data.ownedCardInstances.find((card) => card.id === id || card.instanceId === id))
    .filter(Boolean);

  if (!cards.length) {
    cards = createStarterPackCards();
    if (!cards.length) {
      data.starterPack = { status: "pending", cardIds: [], startedAt: "", completedAt: "" };
      state.userData[userId] = normalizeUserData(data, userId);
      saveState();
      showToast("Starter-Pack ist leer, weil noch keine Karten im Katalog vorhanden sind.", "warning");
      closeFeaturePanel();
      return;
    }
    data.ownedCardInstances = [...data.ownedCardInstances, ...cards];
    data.starterPack = {
      status: "opening",
      cardIds: cards.map((card) => card.id),
      startedAt: new Date().toISOString(),
      completedAt: "",
    };
  }

  const starterDeckCards = cards.slice(0, MATCH_CARD_COUNT);
  const starterDeck = createStarterActiveDeck(starterDeckCards);
  data.activeDeck = starterDeck;
  data.decks = [starterDeck];
  data.activeDeckId = starterDeck.id || "main-deck";
  data.selected = deckIds(starterDeck);
  data.starterPack.status = "completed";
  data.starterPack.completedAt = new Date().toISOString();
  state.userData[userId] = normalizeUserData(data, userId);
  applyUserData(userId);
  snapshotCurrentUserData(userId);
  saveState();
  render();
  closeFeaturePanel();
  showPackReveal(cards, "Starter-Pack", { keepOpen: true });
  showToast("Starter-Pack geoeffnet. Dein Startdeck wurde erstellt.", "success");
}

function createStarterPackCards() {
  const plan = [
    { group: "keeper", cls: 2 },
    { group: "defense", cls: 2 },
    { group: "defense", cls: 2 },
    { group: "midfield", cls: 2 },
    { group: "midfield", cls: 2 },
    { group: "attack", cls: 2 },
    { group: "mixed", cls: 3 },
    { group: "mixed", cls: 3 },
    { group: "mixed", cls: 4 },
    { group: "mixed", cls: 5 },
  ];
  return plan.map((entry) => drawStarterCard(entry.group, entry.cls)).filter(Boolean);
}

function drawStarterCard(positionGroup, classIndex) {
  const positions = starterPositionGroup(positionGroup);
  const pool = playableCardPool();
  const candidates = pool.filter((card) => normalizeClassIndex(card.cls) === classIndex && (!positions.length || positions.includes(String(card.pos || "").toUpperCase())));
  const fallback = pool.filter((card) => normalizeClassIndex(card.cls) === classIndex);
  const source = pick(candidates.length ? candidates : fallback.length ? fallback : pool);
  const instance = cloneCardForCollection(source, "starter-pack");
  if (!instance) return null;
  instance.source = "starter-pack";
  instance.ownerUserId = state.activeUserId;
  instance.level = 1;
  instance.currentLevel = 1;
  instance.xp = 0;
  instance.currentXp = 0;
  instance.stars = 1;
  instance.currentStars = 1;
  return instance;
}

function starterPositionGroup(group) {
  return {
    keeper: ["TW", "GK"],
    defense: ["IV", "CB", "LV", "RV"],
    midfield: ["ZDM", "DM", "ZM", "CM", "ZOM", "OM", "CAM", "LM", "RM"],
    attack: ["ST", "MS", "LF", "RF", "LA", "RA"],
  }[group] || [];
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const user = activeUser();
  const displayName = sanitizeProfileText(els.profileNameInput.value || userDisplayName(user), 32);
  user.name = displayName;
  user.profile = normalizeUserProfile({ ...user.profile, displayName, updatedAt: new Date().toISOString() }, user);
  user.email = normalizeEmail(els.profileEmailInput.value, user.name);
  user.pin = normalizePin(els.profilePinInput.value, user.role);
  els.loginStatus.textContent = "Profil gespeichert.";
  updateAccountUi();
  renderLoginPanel();
  renderAdminUsers();
  saveState();
  showToast("Profil gespeichert.", "success");
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
  updateAdminNavigationVisibility();
  renderAdminDashboard();
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
  renderAdminPhase9Module(currentAdminSection());
}

function currentAdminSection() {
  return document.querySelector(".admin-subnav [data-admin-section].active")?.dataset.adminSection
    || document.querySelector(".admin-nav [data-admin-section].active")?.dataset.adminSection
    || "dashboard";
}

function firstAllowedAdminSection(user = activeUser()) {
  return firstAllowedAdminPageInGroup(firstAllowedAdminGroup(user), user)?.section || "dashboard";
}

function updateAdminNavigationVisibility() {
  renderAdminNavigationShell(currentAdminSection());
}

function renderAdminDashboard() {
  const project = state.adminData?.project || createDefaultAdminData().project;
  const metrics = adminMetrics();
  const headerCards = document.querySelectorAll(".admin-header .admin-top-card strong");
  if (headerCards[0]) headerCards[0].textContent = project.version;
  if (headerCards[1]) headerCards[1].textContent = project.season;
  if (headerCards[2]) headerCards[2].textContent = state.adminData?.enabled === false ? "Deaktiviert" : "Lokal";
  if (headerCards[3]) headerCards[3].textContent = state.adminData?.dataStatus?.lastSquadUpdate || project.lastUpdated || "Lokal gespeichert";

  const hero = document.querySelector(".admin-hero");
  if (!hero) return;
  const section = currentAdminSection();
  const title = adminSectionTitle(section);
  hero.querySelector(".eyebrow").textContent = "Admin Center";
  hero.querySelector("h2").textContent = title;
  const dataStatus = state.adminData?.dataStatus || SEASON_2026_27_STATUS;
  hero.querySelector("span").textContent = `${project.name} | ${project.status} | ${project.releaseName} | Kaderstand ${dataStatus.lastSquadUpdate}${dataStatus.transferWindowOpen ? " | Transferfenster offen" : ""}`;
  const metricRoot = hero.querySelector(".admin-metrics");
  if (metricRoot) {
    metricRoot.innerHTML = [
      ["Spieler", metrics.players, `${metrics.missingImages} ohne Bild`],
      ["Karten", metrics.cards, `${metrics.ownedCards} im Besitz`],
      ["Vereine", metrics.clubs, `${metrics.leagues} Ligen`],
      ["Booster", metrics.boosters, `${metrics.activeBoosters} aktiv`],
      ["Warnungen", metrics.warnings, `${metrics.auditLog} Logs`],
    ].map(([label, value, detail]) => `<article><i>LC</i><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong><em>${escapeHtml(String(detail))}</em></article>`).join("");
  }
}

function adminMetrics() {
  const validations = validateAdminData();
  return {
    players: new Set(GAME_CARDS.map((card) => card.playerId || card.name)).size,
    cards: GAME_CARDS.length,
    ownedCards: state.deck.length,
    clubs: CLUBS.length,
    nations: new Set(GAME_CARDS.map((card) => card.nation || "Unbekannt")).size,
    leagues: DB_LEAGUES.length - 1,
    boosters: state.boosterPacks.length,
    activeBoosters: state.boosterPacks.filter((pack) => pack.active).length,
    events: state.events.filter((event) => event.active).length,
    news: state.adminData?.news?.filter((item) => item.active).length || 0,
    warnings: validations.warnings.length + validations.errors.length,
    auditLog: state.adminData?.auditLog?.length || 0,
    missingImages: GAME_CARDS.filter((card) => !card.image || card.image === PLAYER_IMAGE_PLACEHOLDER).length,
  };
}

function adminSectionTitle(section) {
  const navMatch = adminNavPageBySection(section);
  if (navMatch?.page?.section === section && navMatch.page.label) return navMatch.page.label;
  return {
    dashboard: "Dashboard",
    users: "Benutzer",
    roles: "Rollen & Rechte",
    players: "Spieler-Verwaltung",
    cards: "Karten-Verwaltung",
    clubs: "Vereine-Verwaltung",
    nations: "Nationen-Verwaltung",
    leagues: "Ligen-Verwaltung",
    datacheck: "Datenpruefung",
    boosters: "Booster-Verwaltung",
    draftboard: "Draft-Board",
    droprates: "Dropchancen",
    missions: "Missionen",
    news: "News",
    events: "Kalender & Events",
    shop: "Shop-Angebote",
    platzpass: "Platzpass-Vorbereitung",
    design: "Design",
    texts: "Texte",
    version: "Version",
    status: "Projektstatus",
    import: "Datenimport",
    export: "Datenexport",
    backups: "Backups",
    logs: "Aenderungsprotokoll",
    settings: "Einstellungen",
    transfers: "Transfers",
    editor: "Karten-Editor",
  }[section] || "Admin Center";
}

function validateAdminData() {
  const errors = [];
  const warnings = [];
  state.boosterPacks.forEach((pack) => {
    const normalized = normalizeBoosterPack(pack);
    const sum = dropRateSum(normalized.dropRates, normalized.minClass, normalized.maxClass);
    if (Math.abs(sum - 100) > 0.01) errors.push(`${pack.name}: Dropchancen ergeben ${sum.toFixed(1)}% statt 100%.`);
    if (!normalized.cardCount || normalized.cardCount < 1) errors.push(`${pack.name}: Kartenanzahl ungueltig.`);
    if (!matchingCardsForPack(normalized).length) warnings.push(`${pack.name}: Kartenpool ist leer.`);
    if (normalized.guaranteedClass != null && (normalized.guaranteedClass < normalized.minClass || normalized.guaranteedClass > normalized.maxClass)) {
      errors.push(`${pack.name}: Garantieklasse liegt ausserhalb des Bereichs.`);
    }
  });
  const league = leagueConfigById(state.leagueSystem?.currentLeagueId) || leagueConfigByIndex(state.leagueIndex);
  if (!league?.id) errors.push("Aktive Liga besitzt keine ID.");
  if (league && (league.promote + league.relegate > league.size)) errors.push(`${league.name}: Auf- und Abstiegsplaetze ueberschneiden sich.`);
  const ownerCount = state.adminUsers.filter((user) => user.role === "Owner" && !user.locked).length;
  if (ownerCount < 1) errors.push("Es muss mindestens ein aktiver Owner vorhanden sein.");
  const nationCodes = new Set();
  GAME_CARDS.forEach((card) => {
    const code = card.nation || "DE";
    if (nationCodes.has(code) && code.length < 2) warnings.push(`Nation ${code}: Kurzcode pruefen.`);
    nationCodes.add(code);
    if (!card.name || !card.club || !card.pos) errors.push(`${card.id || "Karte"}: Pflichtdaten fehlen.`);
  });
  const currentSeasonCards = currentSeasonCardPool();
  const duplicateCurrentPlayers = new Map();
  currentSeasonCards.forEach((card) => {
    const key = normalizeIdentity(`${card.name}|${card.club}`);
    duplicateCurrentPlayers.set(key, (duplicateCurrentPlayers.get(key) || 0) + 1);
    if (!getClub(card.club)?.name) errors.push(`${card.name}: unbekannter Verein ${card.club}.`);
    if (!card.league) errors.push(`${card.name}: Liga fehlt.`);
    if (!card.pos) errors.push(`${card.name}: Position fehlt.`);
  });
  duplicateCurrentPlayers.forEach((count, key) => {
    if (count > 1) warnings.push(`Moegliche Dublette im aktuellen Kader: ${key} (${count} Karten).`);
  });
  const clubsWithoutCurrentSquad = CLUBS.filter((club) => !currentSeasonCards.some((card) => card.club === club.name));
  if (clubsWithoutCurrentSquad.length) warnings.push(`${clubsWithoutCurrentSquad.length} Vereine besitzen noch keinen verifizierten 2026/27-Kader.`);
  if (SEASON_2026_27_STATUS.transferWindowOpen) warnings.push("Sommertransferfenster 2026 ist offen; Kader sind nicht final.");
  return { errors, warnings };
}

function normalizeIdentity(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9|]+/g, " ")
    .trim()
    .toLowerCase();
}

function normalizePlayerName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]/g, "");
}

function teamIdForClubName(clubName, teamType = "men-first") {
  const normalizedClub = normalizePlayerIdentity(clubName || "unassigned-club") || "unassigned-club";
  const normalizedTeam = normalizePlayerIdentity(teamType || "men-first") || "men-first";
  return `${normalizedClub}-${normalizedTeam}`;
}

function isHistoricalSeasonCard(card) {
  const season = String(card?.season || "");
  return card?.isHistorical === true || HISTORICAL_SEASONS.has(season);
}

function isCurrentSeasonCard(card, season = CURRENT_SEASON) {
  return Boolean(
    card &&
    card.season === season &&
    card.squadStatus === "active" &&
    card.verifiedForSeason === true &&
    card.isActiveSeasonCard === true &&
    card.isHistorical !== true &&
    card.isActive !== false &&
    card.isPackable !== false
  );
}

function isHistoricalPackPool(pool) {
  const normalized = String(pool || "").toLowerCase();
  return normalized.includes("historical") || normalized.includes("retro") || normalized.includes("archive");
}

function currentSeasonCardPool(cards = GAME_CARDS, season = CURRENT_SEASON) {
  return (Array.isArray(cards) ? cards : []).filter((card) => isCurrentSeasonCard(card, season));
}

function getSeasonSquadMemberships(season = CURRENT_SEASON) {
  const seasonData = season === CURRENT_SEASON ? globalThis.LIGA_CLASH_SEASON_2026_27 : null;
  const memberships = Array.isArray(seasonData?.squadMemberships) ? seasonData.squadMemberships : [];
  return memberships.filter((entry) => entry.season === season);
}

function getCurrentSquad(teamId, season = CURRENT_SEASON) {
  return getSeasonSquadMemberships(season).filter((entry) => (
    entry.teamId === teamId &&
    entry.season === season &&
    entry.squadStatus === "active" &&
    entry.verifiedForSeason === true
  ));
}

globalThis.getCurrentSquad = getCurrentSquad;

function validateSeasonData(season = SEASON_2026_27_STATUS.season) {
  const generatedAt = new Date().toISOString().slice(0, 10);
  const issues = [];
  const duplicates = [];
  const knownPlayers = new Map();
  const playerRows = [];
  const currentCards = season === CURRENT_SEASON
    ? currentSeasonCardPool(GAME_CARDS, season)
    : GAME_CARDS.filter((card) => card.season === season && isHistoricalSeasonCard(card));
  const cardPlayerIds = new Map();

  const addIssue = (severity, type, message, refs = []) => {
    issues.push({ severity, type, message, refs: refs.filter(Boolean).map(String) });
  };

  if (globalThis.LIGA_CLASH_SEASON_2026_27?.players?.length) {
    globalThis.LIGA_CLASH_SEASON_2026_27.players
      .filter((player) => player.season === season || player.squadSeason === season)
      .forEach((player) => playerRows.push({ ...player, source: "season-player" }));
  }

  currentCards.forEach((card) => {
    const playerId = sourceCardId(card);
    playerRows.push({
      id: playerId,
      playerId,
      displayName: card.name,
      dateOfBirth: card.dateOfBirth || "",
      nationality: card.nationality || card.nation || "",
      position: card.pos,
      clubName: card.club,
      leagueId: card.league,
      squadStatus: card.squadStatus || card.status || "active",
      season: card.season,
      source: "card",
      cardId: card.id,
    });
    if (!cardPlayerIds.has(playerId)) cardPlayerIds.set(playerId, []);
    cardPlayerIds.get(playerId).push(card.id);
  });

  playerRows.forEach((player) => {
    const playerId = player.playerId || player.id;
    const displayName = player.displayName || player.name || "";
    if (!playerId) addIssue("error", "missing-player-id", `${displayName || "Unbekannter Spieler"} besitzt keine playerId.`, [player.cardId]);
    if (!displayName) addIssue("error", "missing-name", `${playerId || "Unbekannter Spieler"} besitzt keinen Namen.`, [player.cardId]);
    if (!player.position && !player.realPosition) addIssue("error", "missing-position", `${displayName || playerId} besitzt keine Position.`, [playerId]);
    if (!player.nationality && !player.nation) addIssue("warning", "missing-nationality", `${displayName || playerId} besitzt keine Nationalitaet.`, [playerId]);
    if (!player.clubName && !player.club && !player.currentClubId) addIssue("error", "missing-current-club", `${displayName || playerId} besitzt keinen aktuellen Verein.`, [playerId]);
    if (playerId) {
      if (!knownPlayers.has(playerId)) knownPlayers.set(playerId, []);
      knownPlayers.get(playerId).push(player);
    }
  });

  knownPlayers.forEach((matches, playerId) => {
    const activeClubs = new Set(matches.filter((player) => (player.squadStatus || "active") === "active").map((player) => player.clubName || player.club || player.currentClubId).filter(Boolean));
    if (activeClubs.size > 1) addIssue("error", "player-multiple-active-clubs", `${playerId} ist in mehreren aktiven Kadern.`, [...activeClubs]);
  });

  const byStrictId = new Map();
  playerRows.forEach((player) => {
    const playerId = player.playerId || player.id;
    if (!playerId) return;
    byStrictId.set(playerId, (byStrictId.get(playerId) || 0) + 1);
  });
  byStrictId.forEach((count, playerId) => {
    if (count > 1) addIssue("warning", "duplicate-player-id-reference", `${playerId} wird ${count}x referenziert.`, [playerId]);
  });

  const byIdentity = new Map();
  playerRows.forEach((player) => {
    const name = normalizePlayerName(player.displayName || player.name);
    if (!name) return;
    const birth = player.dateOfBirth || "";
    const nationality = normalizePlayerName(player.nationality || player.nation || "");
    const position = String(player.position || player.realPosition || "").toUpperCase();
    const key = birth ? `${name}|${birth}` : `${name}|${nationality}|${position}`;
    if (!byIdentity.has(key)) byIdentity.set(key, []);
    byIdentity.get(key).push(player);
  });

  byIdentity.forEach((matches, key) => {
    const ids = [...new Set(matches.map((player) => player.playerId || player.id).filter(Boolean))];
    const clubs = [...new Set(matches.map((player) => player.clubName || player.club || player.currentClubId).filter(Boolean))];
    if (ids.length > 1 || clubs.length > 1) {
      const suggestedCanonicalId = ids.find((id) => !String(id).includes("part1-")) || ids[0] || "";
      duplicates.push({
        key,
        matches: matches.map((player) => `${player.displayName || player.name || "?"} (${player.playerId || player.id || "ohne ID"} / ${player.clubName || player.club || player.currentClubId || "ohne Verein"})`),
        reason: "Name plus Geburtsdatum oder Nationalitaet/Position stimmen ueberein.",
        suggestedCanonicalId,
      });
      addIssue("warning", "possible-duplicate-person", `Moegliche doppelte Person: ${key}`, ids);
    }
  });

  currentCards.forEach((card) => {
    const playerId = sourceCardId(card);
    if (!playerId) addIssue("error", "card-without-player", `${card.name || card.id} besitzt keine Spielerreferenz.`, [card.id]);
    if (card.isPackable !== false && (card.isActive === false || card.squadStatus === "departed")) addIssue("error", "inactive-packable-card", `${card.name} ist inaktiv, aber packbar.`, [card.id]);
    if (!card.pos) addIssue("error", "card-missing-position", `${card.name || card.id} besitzt keine Kartenposition.`, [card.id]);
  });

  GAME_CARDS.forEach((card) => {
    if (HISTORICAL_SEASONS.has(card.season) && (card.isActiveSeasonCard === true || card.squadStatus === "active" && card.verifiedForSeason === true)) {
      addIssue("error", "historical-card-active-current-squad", `${card.name} (${card.season}) ist historisch, aber als aktueller Kader markiert.`, [card.id]);
    }
    if (card.season === CURRENT_SEASON && card.squadStatus === "active" && card.verifiedForSeason !== true) {
      addIssue("error", "current-card-missing-verification", `${card.name} ist 2026/27 aktiv, aber nicht fuer die Saison bestaetigt.`, [card.id]);
    }
    if (card.season === CURRENT_SEASON && card.isHistorical === true) {
      addIssue("error", "current-card-marked-historical", `${card.name} ist 2026/27, aber als historisch markiert.`, [card.id]);
    }
  });

  const seasonMemberships = getSeasonSquadMemberships(season);
  seasonMemberships.forEach((entry) => {
    if (entry.squadStatus === "active" && entry.verifiedForSeason !== true) addIssue("error", "active-squad-unverified", `${entry.playerId} ist aktiv, aber nicht verifiziert.`, [entry.playerId, entry.teamId]);
  });

  const packPoolRisks = state.boosterPacks.flatMap((pack) => matchingCardsForPack(normalizeBoosterPack(pack)).filter((card) => {
    const normalizedPack = normalizeBoosterPack(pack);
    if (isHistoricalPackPool(normalizedPack.pool)) return false;
    return card.season !== season || !isCurrentSeasonCard(card, season);
  }).map((card) => `${pack.name}: ${card.name} (${card.season || "ohne Saison"})`));
  packPoolRisks.forEach((risk) => addIssue("error", "pack-pool-invalid-current-card", `Ungueltige aktuelle Karte im Pack-Pool: ${risk}`));

  const leagues = DB_LEAGUES.map((league) => {
    const cards = currentCards.filter((card) => card.league === league);
    const clubs = new Set(cards.map((card) => card.club));
    const isWomenLeague = league.includes("Frauen");
    return {
      name: league,
      clubCount: clubs.size,
      activePlayers: cards.length,
      malePlayers: isWomenLeague ? 0 : cards.length,
      femalePlayers: isWomenLeague ? cards.length : 0,
      status: cards.length ? "teilweise geladen" : "fehlt",
    };
  });

  leagues.forEach((league) => {
    if (!league.activePlayers) addIssue("error", "league-missing-current-rosters", `${league.name} besitzt keine aktiven 2026/27-Kaderdaten.`);
    else if (league.clubCount < 10) addIssue("warning", "league-incomplete-current-rosters", `${league.name} wirkt unvollstaendig: nur ${league.clubCount} Vereine mit aktiven Karten.`);
  });

  const errorCount = issues.filter((issue) => issue.severity === "error").length;
  const warningCount = issues.filter((issue) => issue.severity !== "error").length;
  return {
    season,
    generatedAt,
    issues,
    duplicates,
    leagues,
    summary: {
      playerRows: playerRows.length,
      cardCount: currentCards.length,
      duplicateGroups: duplicates.length,
      errorCount,
      warningCount,
      ownedCardsPreserved: state.allUsersData ? Object.values(state.allUsersData).reduce((sum, userData) => sum + (userData.ownedCardInstances?.length || 0), 0) : state.deck.length,
    },
  };
}

globalThis.validateSeasonData = validateSeasonData;

function repairSeasonMixing() {
  const result = {
    historicalCardsMarked: 0,
    currentCardsDisabled: 0,
    packEntriesProtected: 0,
    ownedCardsPreserved: state.allUsersData ? Object.values(state.allUsersData).reduce((sum, userData) => sum + (userData.ownedCardInstances?.length || 0), 0) : state.deck.length,
  };

  GAME_CARDS.forEach((card) => {
    if (HISTORICAL_SEASONS.has(card.season)) {
      if (card.isHistorical !== true || card.isActiveSeasonCard !== false || card.squadStatus === "active" && card.verifiedForSeason === true) {
        result.historicalCardsMarked += 1;
      }
      card.isHistorical = true;
      card.isActiveSeasonCard = false;
      card.verifiedForSeason = false;
      if (card.squadStatus === "active") card.squadStatus = "historical";
      if (card.isPackable !== false) {
        card.isPackable = false;
        result.packEntriesProtected += 1;
      }
      return;
    }

    if (card.season === CURRENT_SEASON) {
      const canBeCurrent = card.squadStatus === "active" && card.verifiedForSeason === true && card.isHistorical !== true;
      card.isActiveSeasonCard = canBeCurrent;
      if (!canBeCurrent && card.isPackable !== false) {
        card.isPackable = false;
        result.currentCardsDisabled += 1;
      }
    }
  });

  return result;
}

function dropRateSum(rates, minClass = 0, maxClass = teamClasses.length - 1) {
  return teamClasses.reduce((sum, _, index) => sum + (index >= minClass && index <= maxClass ? Number(rates?.[index]) || 0 : 0), 0);
}

function matchingCardsForPack(pack) {
  return GAME_CARDS.filter((card) => {
    const historicalPack = isHistoricalPackPool(pack.pool);
    if (!historicalPack && !isCurrentSeasonCard(card)) return false;
    const cls = normalizeClassIndex(card.cls);
    const inClass = cls >= pack.minClass && cls <= pack.maxClass;
    const inPool = pack.pool === "mixed" || pack.pool === "all" || cardMatchesPackPool(card, pack.pool);
    const inPosition = !pack.positions?.length || pack.positions.includes(card.pos);
    return inClass && inPool && inPosition;
  });
}

function cardMatchesPackPool(card, pool) {
  if (!isHistoricalPackPool(pool) && !isCurrentSeasonCard(card)) return false;
  if (isHistoricalPackPool(pool) && !isHistoricalSeasonCard(card)) return false;
  if (pool === "men-bundesliga") return card.league === "1. Bundesliga" && (card.season !== CURRENT_SEASON || card.isPackable !== false);
  if (pool === "women-bundesliga") return card.league === "Google Pixel Frauen-Bundesliga";
  if (pool === "dfb-pokal") return DB_LEAGUES.includes(card.league);
  if (pool === "totw") return card.series === "totw" || normalizeClassIndex(card.cls) >= 8;
  if (pool === "icon") return normalizeClassIndex(card.cls) >= teamClasses.length - 1 || card.series === "icon";
  return true;
}

function renderAdminPhase9Module(section = currentAdminSection()) {
  if (!els.adminPhase9Content) return;
  if (!canUseAdminModule(section)) {
    els.adminPhase9Content.innerHTML = `<h3>${escapeHtml(adminSectionTitle(section))}</h3><p>Keine Berechtigung fuer dieses Modul.</p>`;
    return;
  }
  if (section.startsWith("community-")) {
    els.adminPhase9Content.innerHTML = renderAdminCommunityModule(section);
    return;
  }
  if (section === "dashboard") {
    els.adminPhase9Content.innerHTML = renderAdminDashboardModule();
    return;
  }
  if (section.endsWith("-overview") || ["squads", "season-archive", "level-system", "star-system", "fusion", "deck-rules", "match-rules", "season-management", "schedules", "promotion-relegation", "battle-pass", "daily-login", "rights", "admin-audit", "data-duplicates", "system-general", "storage"].includes(section)) {
    els.adminPhase9Content.innerHTML = renderAdminStructuredModule(section);
    return;
  }
  if (!["players", "nations", "leagues", "datacheck", "droprates", "roles", "news", "shop", "platzpass", "draftboard", "design", "texts", "version", "status", "settings", "export", "backups", "logs"].includes(section)) {
    els.adminPhase9Content.innerHTML = renderAdminOverviewPanel(section);
    return;
  }
  const renderers = {
    players: renderAdminPlayersModule,
    nations: renderAdminNationsModule,
    leagues: renderAdminLeaguesModule,
    datacheck: renderAdminDataCheckModule,
    droprates: renderAdminDropRatesModule,
    roles: renderAdminRolesModule,
    news: renderAdminNewsModule,
    shop: renderAdminShopModule,
    platzpass: renderAdminPlatzpassModule,
    draftboard: renderAdminDraftBoardModule,
    design: renderAdminDesignModule,
    texts: renderAdminTextsModule,
    version: renderAdminVersionModule,
    status: renderAdminStatusModule,
    settings: renderAdminSettingsModule,
    export: renderAdminExportModule,
    backups: renderAdminBackupsModule,
    logs: renderAdminLogsModule,
  };
  els.adminPhase9Content.innerHTML = renderers[section]();
}

function renderAdminCommunityModule(section) {
  const data = communityAdminData();
  const renderers = {
    "community-dashboard": () => renderAdminCommunityDashboard(data),
    "community-ideas": () => renderAdminCommunityRecords({
      title: "Ideen",
      storageKey: COMMUNITY_STORAGE_KEYS.ideas,
      records: data.ideas,
      statuses: COMMUNITY_ITEM_STATUSES,
      fields: ["title", "category", "author", "description"],
      emptyText: "Noch keine Ideen gespeichert.",
    }),
    "community-forum": () => renderAdminCommunityRecords({
      title: "Forum",
      storageKey: COMMUNITY_STORAGE_KEYS.forum,
      records: data.forum,
      statuses: COMMUNITY_ITEM_STATUSES,
      fields: ["title", "category", "author", "description"],
      extraActions: ["pin", "close"],
      emptyText: "Noch keine Forenbeitraege gespeichert.",
    }),
    "community-applications": () => renderAdminCommunityRecords({
      title: "Bewerbungen",
      storageKey: COMMUNITY_STORAGE_KEYS.applications,
      records: data.applications,
      statuses: COMMUNITY_APPLICATION_STATUSES,
      fields: ["type", "name", "discord", "why"],
      emptyText: "Noch keine Bewerbungen gespeichert.",
    }),
    "community-bugs": () => renderAdminCommunityRecords({
      title: "Fehlermeldungen",
      storageKey: COMMUNITY_STORAGE_KEYS.bugs,
      records: data.bugs,
      statuses: COMMUNITY_BUG_STATUSES,
      fields: ["title", "device", "browser", "version", "description"],
      emptyText: "Noch keine Fehlermeldungen gespeichert.",
    }),
    "community-messages": () => renderAdminCommunityRecords({
      title: "Nachrichten",
      storageKey: COMMUNITY_STORAGE_KEYS.contacts,
      records: data.contacts,
      statuses: COMMUNITY_ITEM_STATUSES,
      fields: ["name", "email", "subject", "message"],
      emptyText: "Noch keine Nachrichten gespeichert.",
    }),
    "community-news": () => renderAdminCommunityNews(data.news),
    "community-roadmap": () => renderAdminCommunityRoadmap(data.roadmap),
    "community-settings": () => renderAdminCommunitySettings(data.settings),
  };
  return (renderers[section] || renderers["community-dashboard"])();
}

function communityAdminData() {
  return {
    ideas: readCommunityRecords(COMMUNITY_STORAGE_KEYS.ideas),
    bugs: readCommunityRecords(COMMUNITY_STORAGE_KEYS.bugs),
    applications: readCommunityRecords(COMMUNITY_STORAGE_KEYS.applications),
    contacts: readCommunityRecords(COMMUNITY_STORAGE_KEYS.contacts),
    forum: readCommunityRecords(COMMUNITY_STORAGE_KEYS.forum),
    news: communityNews(),
    roadmap: communityRoadmap(),
    settings: communitySettings(),
  };
}

function renderAdminCommunityDashboard(data = communityAdminData()) {
  const metrics = [
    ["Neue Ideen", data.ideas.filter((item) => item.status === "Neu").length, data.ideas.length],
    ["Fehlermeldungen", data.bugs.filter((item) => item.status !== "Behoben" && item.status !== "Geschlossen").length, data.bugs.length],
    ["Bewerbungen", data.applications.filter((item) => item.status === "Neu" || item.status === "In Prüfung").length, data.applications.length],
    ["Nachrichten", data.contacts.filter((item) => item.status === "Neu").length, data.contacts.length],
    ["Forum Posts", data.forum.length, communityForumPosts().length],
    ["News", data.news.length, data.news.filter((item) => item.pinned).length],
  ];
  const quickLinks = [
    ["Ideen pruefen", "community-ideas"],
    ["Forum moderieren", "community-forum"],
    ["Bewerbungen bearbeiten", "community-applications"],
    ["Bugs pruefen", "community-bugs"],
    ["News verwalten", "community-news"],
    ["Roadmap bearbeiten", "community-roadmap"],
    ["Einstellungen", "community-settings"],
  ];
  return `
    <h3>Community Dashboard</h3>
    <p>Alle Community-Eingaben werden lokal im Browser gespeichert und sind hier fuer Owner/Admin verwaltbar.</p>
    <div class="community-admin-dashboard">
      ${metrics.map(([label, open, total]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(open))}</strong><em>${escapeHtml(String(total))} gesamt</em></article>`).join("")}
    </div>
    <div class="admin-linked-pages">
      ${quickLinks.map(([label, section]) => `<button type="button" data-admin-quick-section="${escapeAttr(section)}">${escapeHtml(label)}</button>`).join("")}
    </div>
  `;
}

function renderAdminCommunityRecords({ title, storageKey, records, statuses, fields, extraActions = [], emptyText }) {
  return `
    <h3>${escapeHtml(title)}</h3>
    <p>Status bearbeiten, Eintraege moderieren oder nicht mehr benoetigte Datensaetze entfernen.</p>
    <div class="community-admin-list">
      ${records.length ? records.map((item) => renderAdminCommunityRecordCard(storageKey, item, statuses, fields, extraActions)).join("") : `<article><p>${escapeHtml(emptyText)}</p></article>`}
    </div>
  `;
}

function renderAdminCommunityRecordCard(storageKey, item, statuses, fields, extraActions = []) {
  return `
    <article class="community-admin-card ${item.pinned ? "is-pinned" : ""} ${item.closed ? "is-closed" : ""}">
      <header>
        <div>
          <strong>${escapeHtml(item.title || item.subject || item.name || item.type || "Eintrag")}</strong>
          <span>${escapeHtml(formatCommunityDate(item.createdAt))} · ${escapeHtml(item.author || item.name || item.discord || "Community")}</span>
        </div>
        <select class="community-status-select" data-phase9-action="community-status" data-community-key="${escapeAttr(storageKey)}" data-community-id="${escapeAttr(item.id)}">
          ${communityStatusOptions(statuses, item.status || "Neu")}
        </select>
      </header>
      <dl>
        ${fields.map((field) => `<dt>${escapeHtml(communityFieldLabel(field))}</dt><dd>${escapeHtml(communityFieldValue(item, field))}</dd>`).join("")}
      </dl>
      <footer class="community-admin-actions">
        ${extraActions.includes("pin") ? `<button type="button" data-phase9-action="community-toggle-pin" data-community-key="${escapeAttr(storageKey)}" data-community-id="${escapeAttr(item.id)}">${item.pinned ? "Pin entfernen" : "Anpinnen"}</button>` : ""}
        ${extraActions.includes("close") ? `<button type="button" data-phase9-action="community-toggle-close" data-community-key="${escapeAttr(storageKey)}" data-community-id="${escapeAttr(item.id)}">${item.closed ? "Oeffnen" : "Schliessen"}</button>` : ""}
        <button type="button" data-phase9-action="community-delete" data-community-key="${escapeAttr(storageKey)}" data-community-id="${escapeAttr(item.id)}">Loeschen</button>
      </footer>
    </article>
  `;
}

function renderAdminCommunityNews(news) {
  return `
    <h3>Community News</h3>
    <p>News fuer den Community Hub lokal erstellen, anpinnen oder entfernen.</p>
    <div class="phase9-form community-admin-editor">
      <label>Titel<input id="communityNewsTitle" maxlength="90" /></label>
      <label>Kategorie<input id="communityNewsCategory" maxlength="40" value="Update" /></label>
      <label class="wide">Text<textarea id="communityNewsSummary" rows="3"></textarea></label>
      <button type="button" data-phase9-action="community-add-news">News erstellen</button>
    </div>
    <div class="community-admin-list">
      ${news.map((item) => renderAdminCommunityRecordCard(COMMUNITY_STORAGE_KEYS.news, item, COMMUNITY_ITEM_STATUSES, ["title", "category", "summary"], ["pin"])).join("")}
    </div>
  `;
}

function renderAdminCommunityRoadmap(roadmap) {
  return `
    <h3>Community Roadmap</h3>
    <p>Roadmap-Punkte fuer die oeffentliche Anzeige bearbeiten. Erledigte Punkte werden im Hub abgehakt.</p>
    <div class="phase9-form community-admin-editor">
      <label>Roadmap-Punkt<input id="communityRoadmapTitle" maxlength="90" /></label>
      <button type="button" data-phase9-action="community-add-roadmap">Punkt hinzufuegen</button>
    </div>
    <div class="community-admin-list">
      ${roadmap.map((item) => `
        <article class="community-admin-card">
          <header>
            <div>
              <strong>${item.done ? "☑" : "⬜"} ${escapeHtml(item.title)}</strong>
              <span>${item.done ? "Erledigt" : "Offen"}</span>
            </div>
          </header>
          <footer class="community-admin-actions">
            <button type="button" data-phase9-action="community-toggle-roadmap" data-community-id="${escapeAttr(item.id)}">${item.done ? "Auf offen setzen" : "Als erledigt markieren"}</button>
            <button type="button" data-phase9-action="community-delete-roadmap" data-community-id="${escapeAttr(item.id)}">Loeschen</button>
          </footer>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAdminCommunitySettings(settings) {
  const labels = {
    ideas: "Ideen",
    forum: "Forum",
    bugs: "Fehler melden",
    applications: "Bewerbungen",
    contact: "Kontakt",
    news: "News",
    roadmap: "Roadmap",
  };
  return `
    <h3>Community Einstellungen</h3>
    <p>Oeffentliche Community-Bereiche aktivieren oder deaktivieren. Deaktivierte Bereiche blockieren keine Klicks, sondern zeigen einen Hinweis.</p>
    <div class="community-admin-settings">
      ${Object.keys(COMMUNITY_FEATURE_DEFAULTS).map((key) => `
        <label>
          <input type="checkbox" data-community-setting="${escapeAttr(key)}" ${settings[key] ? "checked" : ""} />
          <span>${escapeHtml(labels[key] || key)}</span>
        </label>
      `).join("")}
    </div>
    <button type="button" class="feature-action" data-phase9-action="community-save-settings">Einstellungen speichern</button>
  `;
}

function communityStatusOptions(statuses, selected) {
  return (statuses || COMMUNITY_ITEM_STATUSES).map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`).join("");
}

function communityFieldLabel(field) {
  return {
    title: "Titel",
    category: "Kategorie",
    author: "Autor",
    description: "Beschreibung",
    type: "Typ",
    name: "Name",
    discord: "Discord",
    why: "Motivation",
    device: "Geraet",
    browser: "Browser",
    version: "Version",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    summary: "Text",
  }[field] || field;
}

function communityFieldValue(item, field) {
  if (field === "category") {
    const category = COMMUNITY_FORUM_CATEGORIES.find((entry) => entry.id === item.category);
    return category ? category.label : item.category || "-";
  }
  if (field === "type") {
    return {
      tester: "Tester",
      moderator: "Moderator",
      admin: "Admin",
      helper: "Community Helfer",
      supporter: "Supporter",
      discord: "Discord",
      bug: "Fehler",
    }[item.type] || item.type || "-";
  }
  return item[field] || "-";
}

function renderAdminDashboardModule() {
  const metrics = adminMetrics();
  const seasonReport = validateSeasonData(CURRENT_SEASON);
  const users = state.adminUsers || [];
  const activeUsers = users.filter((user) => user.status !== "gesperrt" && user.locked !== true).length;
  const womenCards = currentSeasonCardPool().filter((card) => String(card.league || "").includes("Frauen")).length;
  const menCards = currentSeasonCardPool().length - womenCards;
  const womenTeams = CLUBS.filter((club) => String(club.league || "").includes("Frauen")).length;
  const menTeams = CLUBS.length - womenTeams;
  const incompleteRosters = seasonReport.leagues.filter((league) => league.status !== "teilweise geladen" || league.clubCount < 10).length;
  const tiles = [
    ["Registrierte Benutzer", users.length],
    ["Aktive Benutzer", activeUsers],
    ["Vereine", metrics.clubs],
    ["Maennerteams", menTeams],
    ["Frauenteams", womenTeams],
    ["Spieler", menCards],
    ["Spielerinnen", womenCards],
    ["Karten", metrics.cards],
    ["Aktive Ligen", metrics.leagues],
    ["Aktive Packs", metrics.activeBoosters],
    ["Offene Datenfehler", seasonReport.summary.errorCount],
    ["Erkannte Duplikate", seasonReport.summary.duplicateGroups],
    ["Unvollstaendige Kader", incompleteRosters],
    ["Letzter Datenstand", SEASON_2026_27_STATUS.lastSquadUpdate],
    ["Aktuelle Saison", CURRENT_SEASON],
    ["Projektversion", state.adminData?.project?.version || "0.1 Alpha"],
  ];
  const quickActions = [
    ["Spieler verwalten", "players"],
    ["Verein anlegen", "clubs"],
    ["Karte anlegen", "cards"],
    ["Pack anlegen", "boosters"],
    ["Liga bearbeiten", "leagues"],
    ["Benutzer verwalten", "users"],
    ["Datenpruefung starten", "datacheck"],
    ["Einstellungen oeffnen", "system-general"],
  ];
  return `
    <h3>Dashboard</h3>
    <p>Kompakte Spieluebersicht fuer KickOff SuperCard. Schnellaktionen fuehren direkt in die passenden Unterseiten.</p>
    <div class="admin-dashboard-grid">
      ${tiles.map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></article>`).join("")}
    </div>
    <h4>Schnellaktionen</h4>
    <div class="admin-quick-actions">
      ${quickActions.map(([label, section]) => `<button type="button" data-admin-quick-section="${escapeAttr(section)}">${escapeHtml(label)}</button>`).join("")}
    </div>
  `;
}

function renderAdminStructuredModule(section) {
  const active = adminNavPageBySection(section);
  const group = active.group;
  const page = active.page;
  const cards = currentSeasonCardPool();
  const seasonReport = validateSeasonData(CURRENT_SEASON);
  const missingImages = GAME_CARDS.filter((card) => resolvePlayerImage(card).fallback).length;
  const duplicateCount = seasonReport.summary.duplicateGroups;
  const rowsBySection = {
    "clubs-overview": [
      ["Vereine", CLUBS.length],
      ["Mannschaften", new Set(cards.map((card) => card.teamId || teamIdForClubName(card.club))).size],
      ["Spieler", cards.filter((card) => !String(card.league || "").includes("Frauen")).length],
      ["Spielerinnen", cards.filter((card) => String(card.league || "").includes("Frauen")).length],
      ["Spieler ohne Verein", GAME_CARDS.filter((card) => !card.club).length],
      ["Spieler ohne Position", GAME_CARDS.filter((card) => !card.pos).length],
      ["Fehlende Profilbilder", missingImages],
      ["Moegliche Duplikate", duplicateCount],
      ["Unvollstaendige Kader", seasonReport.leagues.filter((league) => league.clubCount < 10).length],
      ["Letzter Kaderabgleich", SEASON_2026_27_STATUS.lastSquadUpdate],
    ],
    squads: [
      ["Status", "Noch keine offiziellen Kaderdaten vorhanden."],
      ["Offizielle aktive Spieler", cards.length],
      ["Entfernte Platzhalterkarten", REMOVED_TEMPORARY_PLAYER_COUNT],
      ["Saison-Fallback", "deaktiviert"],
      ["Hinweis", "Kader werden in einer spaeteren Version neu und sauber ergaenzt."],
    ],
    rights: adminPermissionCategoryRows(),
    teams: CLUBS.slice(0, 20).map((club) => [club.name, club.league, String(club.league || "").includes("Frauen") ? "Frauen erste Mannschaft" : "Maenner erste Mannschaft", teamIdForClubName(club.name, String(club.league || "").includes("Frauen") ? "women-first" : "men-first")]),
    "player-images": GAME_CARDS.filter((card) => resolvePlayerImage(card).fallback).slice(0, 40).map((card) => [card.name, card.club, card.pos, resolvePlayerImage(card).reason || "Silhouette"]),
    "player-duplicates": seasonReport.duplicates.slice(0, 40).map((item) => [item.key, item.matches.join(" | "), item.reason, item.suggestedCanonicalId || "-"]),
    "data-duplicates": seasonReport.duplicates.slice(0, 40).map((item) => [item.key, item.matches.join(" | "), item.reason, item.suggestedCanonicalId || "-"]),
    "season-archive": SQUAD_SEASONS.map((season) => [season, season === CURRENT_SEASON ? "AKTUELL" : "HISTORISCH", GAME_CARDS.filter((card) => card.season === season).length, season === CURRENT_SEASON ? "Nur verifizierte Kader aktiv" : "Archivansicht"]),
    "season-mixing": seasonReport.issues.filter((issue) => issue.type.includes("season") || issue.type.includes("historical") || issue.type.includes("pack-pool")).map((issue) => [issue.severity, issue.type, issue.message, issue.refs.join(", ")]),
    storage: [
      ["LocalStorage-Key", "liga-clash-state-v1"],
      ["Karten", GAME_CARDS.length],
      ["Spieler im Besitz", state.deck.length],
      ["Benutzer", state.adminUsers?.length || 0],
    ],
    "admin-audit": (state.adminData?.auditLog || []).slice(0, 40).map((log) => [log.time, log.userName, log.area, log.action, log.result]),
    "error-log": [...seasonReport.issues, ...validateAdminData().errors.map((message) => ({ severity: "error", type: "admin-data", message, refs: [] }))].slice(0, 60).map((issue) => [issue.severity, issue.type, issue.message, issue.refs?.join(", ") || "-"]),
  };
  const table = rowsBySection[section];
  const headers = {
    "clubs-overview": ["Kennzahl", "Wert"],
    squads: ["Bereich", "Status"],
    rights: ["Kategorie", "Ansehen", "Erstellen", "Bearbeiten", "Loeschen", "Import/Export"],
    teams: ["Verein", "Liga", "Mannschaft", "teamId"],
    "player-images": ["Spieler", "Verein", "Position", "Status"],
    "player-duplicates": ["Schluessel", "Treffer", "Grund", "Kanonisch"],
    "data-duplicates": ["Schluessel", "Treffer", "Grund", "Kanonisch"],
    "season-archive": ["Saison", "Status", "Karten", "Hinweis"],
    "season-mixing": ["Schwere", "Typ", "Meldung", "Referenzen"],
    storage: ["Bereich", "Wert"],
    "admin-audit": ["Zeit", "Admin", "Bereich", "Aktion", "Status"],
    "error-log": ["Schwere", "Typ", "Meldung", "Referenzen"],
  };
  const mappedLinks = (group.pages || []).filter((item) => item.section !== section && canUseAdminModule(item.section)).slice(0, 10);
  return `
    <h3>${escapeHtml(page.label || adminSectionTitle(section))}</h3>
    <p>${escapeHtml(adminStructuredDescription(section, group.label))}</p>
    ${table ? renderPhase9Table(headers[section] || ["Name", "Wert"], table) : renderAdminLinkedPageSummary(section)}
    <div class="admin-linked-pages">
      ${mappedLinks.map((item) => `<button type="button" data-admin-quick-section="${escapeAttr(item.section)}">${escapeHtml(item.label)}</button>`).join("")}
    </div>
  `;
}

function adminStructuredDescription(section, groupLabel) {
  const descriptions = {
    squads: "Noch keine offiziellen Kaderdaten vorhanden. Es werden keine alten Saisons als aktueller Kader verwendet.",
    "cards-overview": "Karten koennen nach Saison, Verein, Liga, Position und aktiver/historischer Karte gefiltert werden.",
    "season-mixing": "Prueft alte Saisonkarten in aktuellen Kadern und aktuelle Pack-Pools auf falsche historische Eintraege.",
    "data-sources": "Datenanbieter und API-Verbindungen werden vorbereitet. Geheime Schluessel duerfen nicht im Frontend gespeichert werden.",
    maintenance: "Wartungsaktionen duerfen keine Benutzerdaten ungefragt loeschen.",
  };
  return descriptions[section] || `${groupLabel}: ${adminSectionTitle(section)} ist in die neue zweistufige Admin-Struktur eingeordnet.`;
}

function adminPermissionCategoryRows() {
  return [
    ["Admin Center", "admin.open", "-", "admin.manage", "-", "-"],
    ["Vereine & Spieler", "game-data.manage", "-", "game-data.manage", "-", "-"],
    ["Karten & Gameplay", "game-data.manage", "game-data.manage", "game-data.manage", "-", "-"],
    ["Wettbewerbe", "events.manage", "events.manage", "events.manage", "-", "-"],
    ["Belohnungen & Wirtschaft", "shop.manage", "boosters.manage", "shop.manage", "-", "-"],
    ["Benutzer & Rechte", "users.view", "users.manage", "roles.manage", "users.manage", "-"],
    ["Datenverwaltung", "game-data.manage", "-", "backup.create", "data.reset", "export.read"],
    ["Einstellungen", "project.manage", "-", "project.manage", "-", "-"],
  ];
}

function renderAdminLinkedPageSummary(section) {
  const links = {
    squads: ["Saisonfilter", "Liga", "Verein", "Mannschaft", "Kaderstatus"],
    "card-designs": ["Bronze", "Silber", "Gold", "Elite", "Icon", "PRO", "Fusion"],
    "card-values": ["Overall", "Tempo", "Abschluss", "Passspiel", "Dribbling", "Defensive", "Physis"],
    "level-system": ["Maximallevel", "XP-Kurve", "Levelkosten", "Overall-Steigerung"],
    "star-system": ["Maximale Sterne", "Duplikate", "PRO-Freischaltung"],
    fusion: ["Fusionsregeln", "Kosten", "Sternaufstieg", "Favoritenschutz"],
    "deck-rules": ["Formationen", "Positionsregeln", "Teamstaerke"],
    "match-rules": ["Runden", "Punktesystem", "Heim/Auswaerts"],
    "cpu-opponents": ["KI-Staerke", "Schwierigkeitsgrade", "Kartenwahl"],
    "season-management": ["Saison anlegen", "Aktivieren", "Archivieren"],
    tables: ["Punkte", "Siege", "Niederlagen", "Spielpunkte"],
    schedules: ["Spieltage", "Heim/Auswaerts", "Verschiebungen"],
    currencies: ["Coins", "Gems", "XP", "Fusion-Ressourcen"],
    achievements: ["Bedingung", "Fortschritt", "Belohnung"],
    "battle-pass": ["Free", "Premium", "Elite", "Belohnungen"],
    "daily-login": ["Serienbonus", "Monatskalender", "Verpasste Tage"],
    mailbox: ["Nachrichten", "Geschenke", "Ablaufdatum"],
    notifications: ["Wartung", "Events", "Neue Packs"],
    support: ["Nutzeranfragen", "Fehlermeldungen", "Status"],
    reports: ["Gemeldete Inhalte", "Bearbeiter", "Status"],
    rights: ["Bereich ansehen", "Erstellen", "Bearbeiten", "Loeschen", "Importieren"],
    bans: ["Zeitweise Sperre", "Permanente Sperre", "Sperrgrund"],
    "login-history": ["Letzter Login", "Registrierung", "Session"],
    migrations: ["Schema-Version", "Ausgefuehrt", "Ausstehend", "Fehler"],
    "system-general": ["Spielname", "Slogan", "Saison", "Wartungsmodus"],
    "data-sources": ["Spieler-API", "Bildquellen", "Datenstichtag"],
    security: ["PIN-Regeln", "Adminrechte", "Kritische Aktionen"],
  };
  const rows = (links[section] || ["Bestehende Funktionen", "Rechtepruefung", "Navigation", "Status"]).map((item) => [item, "vorbereitet / vorhandene Daten angebunden"]);
  return renderPhase9Table(["Funktion", "Status"], rows);
}

function renderAdminOverviewPanel(section) {
  const validation = validateAdminData();
  return `
    <h3>${escapeHtml(adminSectionTitle(section))}</h3>
    <p>Dieses Modul nutzt die vorhandenen KickOff-SuperCard-Daten. Detailansichten sind ueber die linke Navigation erreichbar.</p>
    <div class="phase9-grid">
      <article><b>${GAME_CARDS.length}</b><span>Karten im Datenpool</span></article>
      <article><b>${CLUBS.length}</b><span>Vereine integriert</span></article>
      <article><b>${state.boosterPacks.length}</b><span>Booster konfiguriert</span></article>
      <article><b>${validation.errors.length}</b><span>Datenfehler</span></article>
    </div>
  `;
}

function renderAdminPlayersModule() {
  const players = playableCardPool().slice(0, 80);
  return `
    <h3>Spieler-Verwaltung</h3>
    <p>Es sind aktuell keine offiziellen Spielerdaten im aktiven Katalog vorhanden. Neue Kader muessen spaeter sauber importiert werden.</p>
    ${players.length ? renderPhase9Table(["Spieler", "Verein", "Liga", "Position", "Basis-OVR", "Bildstatus", "Status"], players.map((card) => {
      const image = resolvePlayerImage(card);
      return [
      safeCardName(card),
      getClub(card.club).name,
      card.league,
      card.pos,
      card.baseOverall,
      image.fallback ? "Silhouette aktiv" : "freigegeben",
      "aktiv",
    ];
    })) : `<div class="empty-state">Keine Spieler vorhanden.</div>`}
  `;
}

function renderAdminNationsModule() {
  const nations = [...new Set(GAME_CARDS.map((card) => card.nation || "Deutschland"))].sort();
  return `
    <h3>Nationen-Verwaltung</h3>
    <p>Nationencodes werden aus den vorhandenen Kartendaten abgeleitet und fuer spaetere Importe zentral validiert.</p>
    ${renderPhase9Table(["Nation", "Code", "Spieler", "Status"], nations.map((nation) => [
      nation,
      String(nation).slice(0, 3).toUpperCase(),
      GAME_CARDS.filter((card) => (card.nation || "Deutschland") === nation).length,
      "aktiv",
    ]))}
  `;
}

function renderAdminLeaguesModule() {
  ensurePhase8Systems();
  const league = currentLeagueConfig();
  const week = state.leagueSystem.currentWeek;
  const participants = week.participants || [];
  const cpuCount = participants.filter((participant) => !participant.player).length;
  const freeSlots = Math.max(0, league.participantCount - participants.length);
  return `
    <h3>Ligen-Verwaltung</h3>
    <p>Aufstieg, Abstieg, Teilnehmer und Wochenlogik stammen aus Phase 8. Aktive Ligawochen sind geschuetzt und werden hier als Verwaltungsvorschau angezeigt.</p>
    <div class="phase9-grid">
      <article><b>${escapeHtml(league.name)}</b><span>Aktuelle Liga</span></article>
      <article><b>${participants.length}/${league.participantCount}</b><span>Teilnehmer</span></article>
      <article><b>${cpuCount}</b><span>CPU-Gegner</span></article>
      <article><b>${freeSlots}</b><span>Freie Plaetze</span></article>
    </div>
    ${renderPhase9Table(["Liga", "Kurz", "Stufe", "Teilnehmer", "Aufstieg", "Abstieg", "Saison"], LEAGUE_PHASE_CONFIG.map((league) => [
      league.name,
      league.shortName,
      league.level,
      league.participantCount,
      league.promotionPlaces,
      league.relegationPlaces,
      state.adminData.project.season,
    ]))}
    <h3>Liga-Teilnehmer: ${escapeHtml(league.name)}</h3>
    ${renderPhase9Table(["Teilnehmer", "Typ", "Deckstaerke", "Formation", "Schwierigkeit", "Punkte", "Status"], participants.map((participant) => [
      participant.displayName,
      participant.player ? "Spieler" : "CPU",
      participant.deckStrength,
      participant.formation,
      participant.player ? "-" : CPU_DIFFICULTIES[participant.difficulty]?.label || participant.difficulty,
      participant.points,
      participant.status,
    ]))}
    <h3>Spielplan-Vorschau</h3>
    ${renderPhase9Table(["Spiel", "Heim", "Auswaerts", "Abgeschlossen"], (week.schedule || []).slice(0, 12).map((match) => [
      match.matchNumber,
      participantName(match.homeId),
      participantName(match.awayId),
      match.completed ? "ja" : "nein",
    ]))}
  `;
}

function renderAdminDropRatesModule() {
  const validation = validateAdminData();
  return `
    <h3>Dropchancen-Verwaltung</h3>
    <p>Dropchancen werden beim Speichern automatisch auf 100% im ausgewaehlten Klassenbereich angepasst.</p>
    ${renderPhase9Table(["Booster", "Klassen", "Summe", "Pool", "Kartenpool"], state.boosterPacks.map((pack) => {
      const normalized = normalizeBoosterPack(pack);
      return [
        normalized.name,
        `${classLabel(normalized.minClass)} - ${classLabel(normalized.maxClass)}`,
        `${dropRateSum(normalized.dropRates, normalized.minClass, normalized.maxClass).toFixed(1)}%`,
        packPoolLabel(normalized.pool),
        matchingCardsForPack(normalized).length,
      ];
    }))}
    ${renderValidationList(validation)}
  `;
}

function renderAdminRolesModule() {
  const rolePermissions = normalizeRolePermissions(state.adminData.rolePermissions);
  return `
    <h3>Rollen & Rechte</h3>
    <p>Rollen sind die zentrale Stelle fuer Rechte. Einzelne Benutzer zeigen nur Profil- und Accountdaten.</p>
    <div class="role-permission-grid">
      ${ADMIN_ROLES.map((role) => `
        <article class="feature-card role-permission-card" data-role-permission="${escapeAttr(role)}">
          <h4>${escapeHtml(role)}</h4>
          <p>${role === "Owner" ? "Vollzugriff, geschuetzt und nicht loeschbar." : role === "Admin" ? "Verwaltung ohne Owner-Entzug und kritische Systemloeschungen." : role === "Moderator" ? "Benutzer ansehen, sperren und Inhalte moderieren." : role === "Tester" ? "Testbereiche und Leserechte ohne Datenveraenderung." : "Normaler Spieler ohne Admin Center."}</p>
          <span>${state.adminUsers.filter((user) => user.role === role).length} Benutzer</span>
          <span>${rolePermissions[role]?.length || 0} Rechte</span>
          <span>${role === "Owner" ? "geschuetzt" : "aktiv"}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAdminNewsModule() {
  const news = state.adminData.news || [];
  return `
    <h3>News-Verwaltung</h3>
    <p>News werden als sichere Textdaten gespeichert; ungefiltertes HTML wird nicht gerendert.</p>
    <div class="phase9-form">
      <input id="adminNewsTitle" placeholder="News-Titel" />
      <input id="adminNewsSummary" placeholder="Kurztext" />
      <button type="button" data-phase9-action="add-news">News anlegen</button>
    </div>
    ${renderPhase9Table(["Titel", "Kategorie", "Aktiv", "Autor"], news.map((item) => [item.title, item.category, item.active ? "ja" : "nein", item.author]))}
  `;
}

function renderAdminShopModule() {
  const offers = state.adminData.shopOffers || [];
  return `
    <h3>Shop-Verwaltung</h3>
    <p>Nur Ingame-Angebote. Echtgeldzahlungen und Zahlungsanbieter sind nicht Teil von Phase 9.</p>
    <div class="phase9-form">
      <input id="adminOfferName" placeholder="Angebotsname" />
      <input id="adminOfferPrice" type="number" min="0" value="100" />
      <select id="adminOfferCurrency"><option value="coins">Coins</option><option value="gems">Diamanten</option></select>
      <button type="button" data-phase9-action="add-offer">Angebot anlegen</button>
    </div>
    ${renderPhase9Table(["Angebot", "Inhalt", "Preis", "Aktiv"], offers.map((offer) => [offer.name, offer.content, `${offer.price} ${offer.currency}`, offer.active ? "ja" : "nein"]))}
  `;
}

function renderAdminPlatzpassModule() {
  const pass = state.adminData.platzpass;
  return `
    <h3>Platzpass-Vorbereitung</h3>
    <p>Vorbereitetes Modul ohne Echtgeld, Kaufstatus oder Premium-Aktivierung.</p>
    ${renderKeyValueForm("platzpass", pass, ["seasonId", "name", "startDate", "endDate", "maxLevel", "xpPerLevel", "price", "active"])}
  `;
}

function renderAdminDraftBoardModule() {
  const settings = normalizeDraftBoardSettings(state.draftBoardSettings);
  const totalSlots = settings.rows * settings.columns;
  return `
    <h3>Draft-Board Verwaltung</h3>
    <p>Diese Werte steuern das echte Draft-Board nach Matches. Typ <b>Karte</b> erzeugt zufaellige Spieler-Karten, Typ <b>Stufenkarte</b> gibt den Board-Reset frei.</p>
    <div class="phase9-form draft-settings-form" data-draft-settings-form>
      <label>Aktiv<select data-draft-setting="enabled"><option value="true" ${settings.enabled ? "selected" : ""}>aktiv</option><option value="false" ${!settings.enabled ? "selected" : ""}>deaktiviert</option></select></label>
      <label>Reihen<input type="number" min="2" max="8" data-draft-setting="rows" value="${settings.rows}" /></label>
      <label>Spalten<input type="number" min="2" max="8" data-draft-setting="columns" value="${settings.columns}" /></label>
      <label>Picks Sieg<input type="number" min="1" max="${totalSlots}" data-draft-setting="picksWin" value="${settings.picksWin}" /></label>
      <label>Picks Unentschieden<input type="number" min="1" max="${totalSlots}" data-draft-setting="picksDraw" value="${settings.picksDraw}" /></label>
      <label>Picks Niederlage<input type="number" min="1" max="${totalSlots}" data-draft-setting="picksLoss" value="${settings.picksLoss}" /></label>
      <label>Reset nach Abschluss<select data-draft-setting="resetWhenCompleted"><option value="false" ${!settings.resetWhenCompleted ? "selected" : ""}>erst Stufenkarte</option><option value="true" ${settings.resetWhenCompleted ? "selected" : ""}>nach Abschluss</option></select></label>
      <label>Jackpot<select data-draft-setting="jackpotEnabled"><option value="true" ${settings.jackpotEnabled ? "selected" : ""}>aktiv</option><option value="false" ${!settings.jackpotEnabled ? "selected" : ""}>deaktiviert</option></select></label>
      <label>Jackpot-Chance %<input type="number" min="0" max="100" step="0.1" data-draft-setting="jackpotChance" value="${settings.jackpotChance}" /></label>
      <label>Max. Belohnungsstufe<select data-draft-setting="maxRewardTier">${teamClasses.map((label, index) => `<option value="${index}" ${index === settings.maxRewardTier ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}</select></label>
    </div>
    <div class="admin-reward-pool-list standalone-draft-pool">
      ${renderRewardPoolRowsMarkup("draft", normalizeRewardPool(settings.rewardPool, 8))}
    </div>
    <div class="draft-admin-preview">
      <strong>Vorschau: ${settings.rows} x ${settings.columns} (${totalSlots} Felder)</strong>
      <div class="draft-board-grid" style="--draft-columns:${settings.columns}">
        ${Array.from({ length: totalSlots }, (_, index) => `<button type="button" class="draft-slot" disabled><strong>${index === 0 && settings.jackpotEnabled ? "Stufenkarte" : "Belohnung"}</strong><span>Feld ${index + 1}</span></button>`).join("")}
      </div>
    </div>
    <button type="button" data-phase9-action="save-draftboard">Draft-Board speichern</button>
  `;
}

function renderAdminDesignModule() {
  const assets = normalizeAdminAssets(state.adminData.assets);
  const currentLogo = resolveAdminAssetUrl(state.adminData.design.logo);
  return `
    <h3>Design & Asset-Verwaltung</h3>
    <p>Bilder, Logos, Kartenrahmen, Boosterbilder und Hintergruende werden lokal im Spielstand gespeichert und koennen wiederverwendet werden.</p>
    ${renderKeyValueForm("design", state.adminData.design, ["logo", "background", "slogan", "accent"])}
    <section class="phase9-panel asset-manager">
      <h4>Asset hochladen</h4>
      <div class="phase9-form">
        <label>Name<input id="adminAssetName" maxlength="48" placeholder="z.B. KickOff SuperCard Logo" /></label>
        <label>Typ<select id="adminAssetType">${assetTypeOptions().map((item) => `<option value="${escapeAttr(item.value)}">${escapeHtml(item.label)}</option>`).join("")}</select></label>
        <label class="asset-upload-field">Datei<input id="adminAssetUpload" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" /></label>
      </div>
      <button type="button" data-phase9-action="upload-asset">Asset speichern</button>
    </section>
    <section class="phase9-panel asset-manager">
      <h4>Asset-Bibliothek</h4>
      ${currentLogo ? `<p>Aktuelles Logo:</p><img class="asset-logo-preview" src="${escapeAttr(currentLogo)}" alt="Aktuelles Logo" />` : ""}
      <div class="asset-grid">
        ${assets.length ? assets.map(renderAdminAssetTile).join("") : `<article class="asset-tile empty"><strong>Noch keine Uploads</strong><span>PNG, JPG, WebP oder SVG hochladen.</span></article>`}
      </div>
    </section>
  `;
}

function renderAdminTextsModule() {
  return `<h3>Texte-Verwaltung</h3><p>Zentrale UI-Texte fuer spaetere Internationalisierung.</p>${renderKeyValueForm("texts", state.adminData.texts, Object.keys(state.adminData.texts))}`;
}

function renderAdminVersionModule() {
  return `<h3>Version</h3><p>Projektversion, Build, Release-Name und Kaderdatenstand sind zentral verwaltbar.</p>${renderKeyValueForm("project", state.adminData.project, ["version", "season", "build", "releaseName", "lastUpdated"])}${renderSeasonDataStatusPanel()}`;
}

function renderAdminStatusModule() {
  return `<h3>Projektstatus</h3><p>Wartungsmodus ist nur vorbereitet, da kein Backend vorhanden ist.</p>${renderKeyValueForm("project", state.adminData.project, ["name", "status", "progress", "maintenance"])}${renderSeasonDataStatusPanel()}`;
}

function renderSeasonDataStatusPanel() {
  const dataStatus = state.adminData?.dataStatus || SEASON_2026_27_STATUS;
  const currentCards = currentSeasonCardPool(GAME_CARDS, dataStatus.season || CURRENT_SEASON);
  const activeClubs = new Set(currentCards.map((card) => card.club));
  return `
    <section class="phase9-panel">
      <h4>Kaderdaten ${escapeHtml(dataStatus.season)}</h4>
      <p>${escapeHtml(dataStatus.note || "Datenstand fuer aktuelle Saisonkarten.")}</p>
      <div class="phase9-grid">
        <article><b>${escapeHtml(dataStatus.lastSquadUpdate || "-")}</b><span>Datenstichtag</span></article>
        <article><b>${dataStatus.transferWindowOpen ? "Offen" : "Geschlossen"}</b><span>Transferfenster</span></article>
        <article><b>${escapeHtml(dataStatus.completeness || "partial")}</b><span>Vollstaendigkeit</span></article>
        <article><b>${currentCards.length}</b><span>aktuelle Karten</span></article>
        <article><b>${activeClubs.size}/${CLUBS.length}</b><span>Vereine mit 26/27-Kader</span></article>
      </div>
    </section>
  `;
}

function renderAdminSettingsModule() {
  const providers = state.adminData.playerSearchProviders = normalizePlayerSearchProviders(state.adminData.playerSearchProviders);
  const providerRows = Object.entries(providers).map(([id, provider]) => [
    id,
    provider.label,
    provider.enabled ? "aktiv" : "inaktiv",
    provider.requiresApiKey ? "server-only" : "nein",
    provider.baseUrl || "-",
    provider.dailyLimit || "-",
    provider.monthlyLimit || "-",
    provider.lastSuccessfulConnection || "-",
    provider.lastError || "-",
  ]);
  return `
    <h3>Einstellungen</h3>
    <p>Globale Admin-Einstellungen und Datenquellen fuer Spielerimporte.</p>
    ${renderKeyValueForm("project", state.adminData.project, ["name", "version", "season", "status", "releaseName"])}
    <section class="phase9-panel">
      <h4>Datenquellen</h4>
      <p>Geheime API-Schluessel werden nicht im Browser gespeichert. Fuer Anbieter mit Key ist ein sicherer Backend-Proxy noetig; alternativ lokale Suche, manuelle URL, JSON oder CSV nutzen.</p>
      ${renderPhase9Table(["ID", "Anbieter", "Status", "API-Key", "Basis-URL", "Tag", "Monat", "Letzte Verbindung", "Fehler"], providerRows)}
      <div class="phase9-form" data-provider-settings>
        <label>Anbieter<select id="scoutProviderId">${Object.entries(providers).map(([id, provider]) => optionHtml(id, provider.label, "manualUrl")).join("")}</select></label>
        <label>API-Basis-URL<input id="scoutProviderBaseUrl" placeholder="https://api.example.test/players" /></label>
        <label>Taegliches Limit<input id="scoutProviderDaily" type="number" min="0" value="0" /></label>
        <label>Monatliches Limit<input id="scoutProviderMonthly" type="number" min="0" value="0" /></label>
      </div>
      <div class="admin-actions">
        <button type="button" data-phase9-action="scout-save-provider">Provider speichern</button>
        <button type="button" data-phase9-action="scout-test-provider">Testverbindung</button>
      </div>
    </section>
  `;
}

function assetTypeOptions() {
  return [
    { value: "logo", label: "Logo" },
    { value: "background", label: "Hintergrund" },
    { value: "card-frame", label: "Kartenrahmen" },
    { value: "booster", label: "Boosterbild" },
    { value: "player", label: "Spielerbild" },
    { value: "club-logo", label: "Vereinslogo" },
    { value: "field", label: "Spielfeld" },
    { value: "tile", label: "Menue-Kachel" },
    { value: "other", label: "Sonstiges" },
  ];
}

function normalizeAdminAssets(assets) {
  return Array.isArray(assets)
    ? assets
        .filter((asset) => asset && asset.id && asset.dataUrl)
        .map((asset) => ({
          id: String(asset.id),
          name: String(asset.name || asset.fileName || "Asset"),
          fileName: String(asset.fileName || asset.name || "upload"),
          category: normalizeAssetCategory(asset.category || asset.type),
          mimeType: String(asset.mimeType || asset.type || "image/png"),
          size: Math.max(0, Number(asset.size) || 0),
          dataUrl: String(asset.dataUrl),
          createdAt: asset.createdAt || new Date().toISOString(),
          source: asset.source || "admin-upload-local",
          usedAs: Array.isArray(asset.usedAs) ? asset.usedAs : [],
        }))
        .slice(0, 80)
    : [];
}

function normalizeAssetCategory(category) {
  const value = String(category || "other").toLowerCase();
  return assetTypeOptions().some((item) => item.value === value) ? value : "other";
}

function renderAdminAssetTile(asset) {
  const url = resolveAdminAssetUrl(asset.id) || asset.dataUrl;
  const typeLabel = assetTypeOptions().find((item) => item.value === asset.category)?.label || asset.category;
  return `
    <article class="asset-tile" data-admin-asset-id="${escapeAttr(asset.id)}">
      <img src="${escapeAttr(url)}" alt="${escapeAttr(asset.name)}" />
      <strong>${escapeHtml(asset.name)}</strong>
      <span>${escapeHtml(typeLabel)} | ${formatFileSize(asset.size)}</span>
      <small>${escapeHtml(asset.fileName)}<br>${escapeHtml(formatDateShort(asset.createdAt))}</small>
      <div class="asset-actions">
        ${asset.category === "logo" ? `<button type="button" data-phase9-action="apply-asset" data-asset-target="logo" data-asset-id="${escapeAttr(asset.id)}">Als Logo</button>` : ""}
        ${asset.category === "background" ? `<button type="button" data-phase9-action="apply-asset" data-asset-target="background" data-asset-id="${escapeAttr(asset.id)}">Als Hintergrund</button>` : ""}
        ${asset.category === "booster" ? `<button type="button" data-phase9-action="apply-asset" data-asset-target="booster-library" data-asset-id="${escapeAttr(asset.id)}">Fuer Booster</button>` : ""}
        <button class="danger" type="button" data-phase9-action="delete-asset" data-asset-id="${escapeAttr(asset.id)}">Entfernen</button>
      </div>
    </article>
  `;
}

function resolveAdminAssetUrl(reference) {
  const value = String(reference || "").trim();
  if (!value) return "";
  const asset = state?.adminData?.assets?.find((item) => item.id === value);
  if (asset?.dataUrl) return asset.dataUrl;
  const packAsset = state?.adminData?.packImages?.find((item) => item.id === value);
  if (packAsset?.dataUrl) return packAsset.dataUrl;
  return value;
}

function formatFileSize(size) {
  const bytes = Math.max(0, Number(size) || 0);
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function renderAdminExportModule() {
  return `
    <h3>Datenexport</h3>
    <p>Exportiert Spiel- und Admin-Daten ohne PINs oder sensible Zugangsdaten.</p>
    <button type="button" data-phase9-action="create-export">Export erzeugen</button>
    <textarea id="adminExportText" readonly rows="8">${escapeHtml(JSON.stringify(createAdminExportPayload(), null, 2))}</textarea>
  `;
}

function renderAdminBackupsModule() {
  const backups = state.adminData.backups || [];
  return `
    <h3>Backups</h3>
    <p>Vor kritischen Aenderungen werden lokale Snapshots erzeugt. Wiederherstellung ist als Vorschau dokumentiert.</p>
    <button type="button" data-phase9-action="create-backup">Backup erstellen</button>
    ${renderPhase9Table(["Zeit", "Grund", "Bereiche", "Groesse"], backups.map((backup) => [backup.createdAt, backup.reason, backup.areas.join(", "), `${backup.size} B`]))}
  `;
}

function renderAdminLogsModule() {
  const logs = state.adminData.auditLog || [];
  return `
    <h3>Aenderungsprotokoll</h3>
    <p>Rollen, Loeschungen, Importe, Exporte, Backups und Admin-Aktionen werden ohne PINs protokolliert.</p>
    ${renderPhase9Table(["Zeit", "Benutzer", "Rolle", "Bereich", "Aktion", "Ergebnis"], logs.map((log) => [log.time, log.userName, log.role, log.area, log.action, log.result]))}
  `;
}

function renderPhase9Table(headers, rows) {
  return `<div class="phase9-table-wrap"><table class="phase9-table"><thead><tr>${headers.map((header) => `<th>${escapeHtml(String(header))}</th>`).join("")}</tr></thead><tbody>${rows.length ? rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell ?? ""))}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="${headers.length}">Keine Daten vorhanden.</td></tr>`}</tbody></table></div>`;
}

function renderValidationList(validation) {
  const items = [...validation.errors.map((item) => ["Fehler", item]), ...validation.warnings.map((item) => ["Warnung", item])];
  return `<div class="phase9-validation">${items.length ? items.map(([type, text]) => `<p class="${type === "Fehler" ? "error" : "warning"}"><b>${type}</b>${escapeHtml(text)}</p>`).join("") : "<p><b>OK</b>Keine kritischen Datenfehler gefunden.</p>"}</div>`;
}

function renderKeyValueForm(area, source, keys) {
  return `<div class="phase9-form" data-phase9-form="${escapeAttr(area)}">${keys.map((key) => `<label>${escapeHtml(key)}<input data-phase9-field="${escapeAttr(key)}" value="${escapeAttr(String(source[key] ?? ""))}" /></label>`).join("")}<button type="button" data-phase9-action="save-settings" data-phase9-area="${escapeAttr(area)}">Speichern</button></div>`;
}

function hasRolePermission(role, permission) {
  const permissions = adminPermissionsFor(role);
  return permissions.includes(permission) || permissions.includes("admin.manage");
}

function createAdminExportPayload(scope = "full") {
  const user = activeUser();
  return {
    exportVersion: 1,
    schemaVersion: "phase9-admin-v1",
    createdAt: new Date().toISOString(),
    createdBy: { id: user.id, name: user.name, role: user.role },
    scope,
    data: {
      cards: safeAdminSnapshot(GAME_CARDS),
      clubs: safeAdminSnapshot(CLUBS),
      leagues: safeAdminSnapshot(LEAGUE_PHASE_CONFIG),
      boosters: safeAdminSnapshot(state.boosterPacks),
      missions: safeAdminSnapshot({ daily: DAILY_MISSION_CONFIG, weekly: WEEKLY_MISSION_CONFIG, state: state.missionSystem }),
      events: safeAdminSnapshot(state.events),
      news: safeAdminSnapshot(state.adminData.news),
      shopOffers: safeAdminSnapshot(state.adminData.shopOffers),
      assets: safeAdminSnapshot(state.adminData.assets),
      settings: safeAdminSnapshot({ project: state.adminData.project, design: state.adminData.design, texts: state.adminData.texts, platzpass: state.adminData.platzpass }),
    },
  };
}

function handleAdminPhase9Action(event) {
  const button = event.target.closest("[data-phase9-action]");
  if (!button) return;
  const action = button.dataset.phase9Action;
  if (action.startsWith("community-")) {
    handleAdminCommunityAction(action, button);
    return;
  }
  if (action === "data-check-refresh") {
    renderAdminPhase9Module("datacheck");
    setAdminStatus("Datenpruefung aktualisiert.");
    return;
  }
  if (action === "repair-season-mixing") {
    if (!requireAdminPermission("game-data.manage")) return;
    const result = repairSeasonMixing();
    saveState();
    renderAdminPhase9Module("datacheck");
    setAdminStatus(`Saisonvermischung repariert: ${result.historicalCardsMarked} historische Karten markiert, ${result.currentCardsDisabled} unbestaetigte aktuelle Karten deaktiviert.`);
    return;
  }
  if (action.startsWith("scout-")) {
    handlePlayerScoutAction(action, button);
    return;
  }
  if (action === "add-news") {
    if (!requireAdminPermission("content.manage")) return;
    const title = document.querySelector("#adminNewsTitle")?.value.trim();
    const summary = document.querySelector("#adminNewsSummary")?.value.trim();
    if (!title) {
      setAdminStatus("News benoetigt einen Titel.");
      return;
    }
    const item = normalizeAdminNewsItem({ title, summary, author: activeUser().name, publishDate: new Date().toISOString().slice(0, 10) });
    state.adminData.news.unshift(item);
    logAdminAction("news", "create", item.id, null, item);
    setAdminStatus(`${item.title} wurde als News angelegt.`);
  } else if (action === "add-offer") {
    if (!requireAdminPermission("shop.manage")) return;
    const offer = normalizeShopOffer({
      name: document.querySelector("#adminOfferName")?.value.trim(),
      price: document.querySelector("#adminOfferPrice")?.value,
      currency: document.querySelector("#adminOfferCurrency")?.value,
      content: "Ingame-Angebot",
    });
    state.adminData.shopOffers.unshift(offer);
    logAdminAction("shop", "create", offer.id, null, offer);
    setAdminStatus(`${offer.name} wurde als Shop-Angebot angelegt.`);
  } else if (action === "save-settings") {
    if (!requireAdminPermission("project.manage")) return;
    const area = button.dataset.phase9Area;
    const form = button.closest("[data-phase9-form]");
    const target = area === "project" ? state.adminData.project : area === "design" ? state.adminData.design : area === "texts" ? state.adminData.texts : area === "platzpass" ? state.adminData.platzpass : null;
    if (!target || !form) return;
    const before = safeAdminSnapshot(target);
    form.querySelectorAll("[data-phase9-field]").forEach((input) => {
      const key = input.dataset.phase9Field;
      const oldValue = target[key];
      if (typeof oldValue === "boolean") target[key] = ["true", "1", "ja", "aktiv"].includes(String(input.value).toLowerCase());
      else if (typeof oldValue === "number") target[key] = Math.max(0, Number(input.value) || 0);
      else target[key] = input.value.trim();
    });
    state.adminData.project.lastUpdated = new Date().toISOString().slice(0, 10);
    logAdminAction(area, "save", area, before, target);
    setAdminStatus(`${adminSectionTitle(currentAdminSection())} gespeichert.`);
  } else if (action === "upload-asset") {
    uploadAdminAsset();
    return;
  } else if (action === "apply-asset") {
    if (!requireAdminPermission("project.manage", "Keine Berechtigung fuer Asset-Zuweisungen.")) return;
    const assetId = button.dataset.assetId;
    const target = button.dataset.assetTarget;
    const asset = state.adminData.assets.find((item) => item.id === assetId);
    if (!asset) return;
    const before = safeAdminSnapshot(state.adminData.design);
    if (target === "logo") {
      state.adminData.design.logo = asset.id;
    } else if (target === "background") {
      state.adminData.design.background = asset.id;
    } else if (target === "booster-library") {
      state.adminData.packImages = upsertById(state.adminData.packImages || [], {
        id: asset.id,
        name: asset.name,
        type: asset.mimeType,
        size: asset.size,
        dataUrl: asset.dataUrl,
        createdAt: asset.createdAt,
        source: "admin-asset-library",
      }).slice(0, 40);
      saveBoosterConfig();
    }
    asset.usedAs = [...new Set([...(asset.usedAs || []), target])];
    logAdminAction("assets", "apply", asset.id, before, { target, design: state.adminData.design });
    setAdminStatus(`${asset.name} wurde angewendet.`);
  } else if (action === "delete-asset") {
    if (!requireAdminPermission("project.manage", "Keine Berechtigung zum Entfernen von Assets.")) return;
    const assetId = button.dataset.assetId;
    const asset = state.adminData.assets.find((item) => item.id === assetId);
    if (!asset) return;
    if (!window.confirm(`${asset.name} wirklich aus der Asset-Bibliothek entfernen?`)) return;
    createAdminBackup(`Asset entfernt: ${asset.name}`, ["adminData"]);
    state.adminData.assets = state.adminData.assets.filter((item) => item.id !== assetId);
    state.adminData.packImages = (state.adminData.packImages || []).filter((item) => item.id !== assetId);
    ["logo", "background"].forEach((key) => {
      if (state.adminData.design[key] === assetId) state.adminData.design[key] = "";
    });
    logAdminAction("assets", "delete", asset.id, asset, null);
    setAdminStatus(`${asset.name} wurde entfernt.`);
  } else if (action === "create-export") {
    if (!requireAdminPermission("export.read")) return;
    const payload = createAdminExportPayload();
    state.adminData.exportHistory.unshift({ id: `export-${Date.now()}`, createdAt: payload.createdAt, scope: payload.scope, size: JSON.stringify(payload).length });
    state.adminData.exportHistory = state.adminData.exportHistory.slice(0, 20);
    logAdminAction("export", "create", payload.scope, null, { size: JSON.stringify(payload).length });
    setAdminStatus("Export wurde erzeugt.");
  } else if (action === "create-backup") {
    if (!requireAdminPermission("backup.create")) return;
    createAdminBackup("Manuelles Phase-9-Backup", ["events", "boosters", "adminData", "leagueSystem", "missionSystem"]);
    setAdminStatus("Backup wurde erstellt.");
  } else if (action === "save-draftboard") {
    if (!requireAdminPermission("draftboard.manage")) return;
    state.rewardPools = state.rewardPools || {};
    const before = safeAdminSnapshot(state.draftBoardSettings);
    const form = document.querySelector("[data-draft-settings-form]");
    const field = (name) => form?.querySelector(`[data-draft-setting="${name}"]`)?.value;
    const rewardPool = readRewardPoolRowsFromRoot(document.querySelector(".standalone-draft-pool"));
    state.rewardPools.draft = rewardPool;
    state.draftBoardSettings = normalizeDraftBoardSettings({
      ...state.draftBoardSettings,
      enabled: field("enabled") === "true",
      rows: field("rows"),
      columns: field("columns"),
      picksWin: field("picksWin"),
      picksDraw: field("picksDraw"),
      picksLoss: field("picksLoss"),
      resetWhenCompleted: field("resetWhenCompleted") === "true",
      jackpotEnabled: field("jackpotEnabled") === "true",
      jackpotChance: field("jackpotChance"),
      maxRewardTier: field("maxRewardTier"),
      rewardPool,
    });
    logAdminAction("draftboard", "save", "draftBoardSettings", before, state.draftBoardSettings);
    setAdminStatus("Draft-Board Einstellungen und Belohnungen gespeichert.");
  } else if (action === "save-role-permissions") {
    if (!requireAdminPermission("roles.manage", "Nur Owner duerfen Rollenrechte speichern.")) return;
    const before = safeAdminSnapshot(state.adminData.rolePermissions);
    const next = {};
    document.querySelectorAll("[data-role-permission]").forEach((card) => {
      const role = normalizeAdminRole(card.dataset.rolePermission);
      next[role] = [...card.querySelectorAll("[data-role-permission-key]")]
        .filter((input) => input.checked)
        .map((input) => input.dataset.rolePermissionKey);
    });
    next.Owner = [...new Set([...(next.Owner || []), "admin.open", "admin.manage", "roles.manage", "users.manage"])];
    state.adminData.rolePermissions = normalizeRolePermissions(next);
    logAdminAction("roles", "save-permissions", "rolePermissions", before, state.adminData.rolePermissions);
    setAdminStatus("Rollenrechte gespeichert.");
  }
  renderAdminDashboard();
  renderAdminPhase9Module(currentAdminSection());
  saveState();
}

function handleAdminPhase9Change(event) {
  const actionTarget = event.target.closest("[data-phase9-action]");
  if (actionTarget?.dataset.phase9Action?.startsWith("community-")) {
    handleAdminCommunityAction(actionTarget.dataset.phase9Action, actionTarget);
  } else if (event.target.matches("[data-phase9-field]")) {
    setAdminStatus("Ungespeicherte Admin-Aenderung erkannt.");
  } else if (event.target.matches("#adminAssetUpload")) {
    const file = event.target.files?.[0];
    setAdminStatus(file ? `Asset ausgewaehlt: ${file.name}` : "Kein Asset ausgewaehlt.");
  } else if (event.target.matches("[data-draft-setting], [data-reward-field]")) {
    refreshDraftAdminPreview();
    setAdminStatus("Ungespeicherte Draft-Board-Aenderung erkannt.");
  }
}

function handleAdminCommunityAction(action, element) {
  if (!requireAdminPermission("content.manage", "Keine Berechtigung fuer Community-Verwaltung.")) return;
  const storageKey = element.dataset.communityKey;
  const id = element.dataset.communityId;
  let changed = false;
  if (action === "community-status" && storageKey && id) {
    changed = updateCommunityRecord(storageKey, id, () => ({ status: element.value || "Neu" }));
    if (changed) setAdminStatus("Community-Status gespeichert.");
  } else if (action === "community-delete" && storageKey && id) {
    if (!window.confirm("Community-Eintrag wirklich loeschen?")) return;
    changed = deleteCommunityRecord(storageKey, id);
    if (changed) setAdminStatus("Community-Eintrag geloescht.");
  } else if (action === "community-toggle-pin" && storageKey && id) {
    changed = updateCommunityRecord(storageKey, id, (item) => ({ pinned: !item.pinned }));
    if (changed) setAdminStatus("Pin-Status aktualisiert.");
  } else if (action === "community-toggle-close" && storageKey && id) {
    changed = updateCommunityRecord(storageKey, id, (item) => ({ closed: !item.closed }));
    if (changed) setAdminStatus("Forum-Status aktualisiert.");
  } else if (action === "community-add-news") {
    const title = document.querySelector("#communityNewsTitle")?.value.trim();
    const category = document.querySelector("#communityNewsCategory")?.value.trim() || "Update";
    const summary = document.querySelector("#communityNewsSummary")?.value.trim();
    if (!title) {
      setAdminStatus("Community-News benoetigt einen Titel.");
      return;
    }
    const records = readCommunityRecords(COMMUNITY_STORAGE_KEYS.news);
    records.unshift({ id: `community-news-${Date.now()}`, title, category, summary, status: "Neu", pinned: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: activeUser().name });
    writeCommunityRecords(COMMUNITY_STORAGE_KEYS.news, records);
    changed = true;
    setAdminStatus("Community-News erstellt.");
  } else if (action === "community-add-roadmap") {
    const title = document.querySelector("#communityRoadmapTitle")?.value.trim();
    if (!title) {
      setAdminStatus("Roadmap-Punkt benoetigt einen Titel.");
      return;
    }
    const records = readCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap);
    const source = records.length ? records : defaultCommunityRoadmap();
    source.push({ id: `roadmap-${Date.now()}`, title, done: false, createdAt: new Date().toISOString() });
    writeCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap, source);
    changed = true;
    setAdminStatus("Roadmap-Punkt hinzugefuegt.");
  } else if (action === "community-toggle-roadmap" && id) {
    const records = readCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap);
    const source = records.length ? records : defaultCommunityRoadmap();
    const next = source.map((item) => item.id === id ? { ...item, done: !item.done, updatedAt: new Date().toISOString() } : item);
    writeCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap, next);
    changed = true;
    setAdminStatus("Roadmap-Punkt aktualisiert.");
  } else if (action === "community-delete-roadmap" && id) {
    if (!window.confirm("Roadmap-Punkt wirklich loeschen?")) return;
    const records = readCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap);
    const source = records.length ? records : defaultCommunityRoadmap();
    writeCommunityRecords(COMMUNITY_STORAGE_KEYS.roadmap, source.filter((item) => item.id !== id));
    changed = true;
    setAdminStatus("Roadmap-Punkt geloescht.");
  } else if (action === "community-save-settings") {
    const settings = {};
    document.querySelectorAll("[data-community-setting]").forEach((input) => {
      settings[input.dataset.communitySetting] = input.checked;
    });
    localStorage.setItem(COMMUNITY_STORAGE_KEYS.settings, JSON.stringify({ ...COMMUNITY_FEATURE_DEFAULTS, ...settings }));
    changed = true;
    setAdminStatus("Community-Einstellungen gespeichert.");
  }
  if (!changed) return;
  showToast("Community-Verwaltung aktualisiert.", "success");
  renderAdminDashboard();
  renderAdminPhase9Module(currentAdminSection());
}

function uploadAdminAsset() {
  if (!requireAdminPermission("project.manage", "Keine Berechtigung zum Hochladen von Assets.")) return;
  const input = document.querySelector("#adminAssetUpload");
  const file = input?.files?.[0];
  const category = normalizeAssetCategory(document.querySelector("#adminAssetType")?.value);
  const name = document.querySelector("#adminAssetName")?.value.trim() || file?.name || "Asset";
  if (!file) {
    setAdminStatus("Bitte zuerst eine Datei auswaehlen.");
    return;
  }
  const validation = validateAdminAssetFile(file);
  if (!validation.ok) {
    setAdminStatus(validation.message);
    showToast(validation.message, "error");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const asset = {
      id: `asset-${category}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name,
      fileName: file.name,
      category,
      mimeType: file.type || "image/svg+xml",
      size: file.size,
      dataUrl: String(reader.result || ""),
      createdAt: new Date().toISOString(),
      source: "admin-upload-local",
      usedAs: [],
    };
    state.adminData.assets = [asset, ...normalizeAdminAssets(state.adminData.assets)].slice(0, 80);
    if (category === "booster") {
      state.adminData.packImages = upsertById(state.adminData.packImages || [], {
        id: asset.id,
        name: asset.name,
        type: asset.mimeType,
        size: asset.size,
        dataUrl: asset.dataUrl,
        createdAt: asset.createdAt,
        source: "admin-asset-library",
      }).slice(0, 40);
    }
    logAdminAction("assets", "upload", asset.id, null, { name: asset.name, category: asset.category, size: asset.size });
    setAdminStatus(`${asset.name} wurde in der Asset-Bibliothek gespeichert.`);
    showToast("Asset gespeichert.", "success");
    saveState();
    renderAdminDashboard();
    renderAdminPhase9Module("design");
  });
  reader.addEventListener("error", () => {
    setAdminStatus("Asset konnte nicht gelesen werden.");
    showToast("Asset konnte nicht gelesen werden.", "error");
  });
  reader.readAsDataURL(file);
}

function validateAdminAssetFile(file) {
  const allowed = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
  if (!allowed.includes(file.type)) return { ok: false, message: "Nur PNG, JPG, WebP oder SVG sind erlaubt." };
  if (file.size > 3 * 1024 * 1024) return { ok: false, message: "Assets duerfen maximal 3 MB gross sein." };
  return { ok: true, message: "Asset ist gueltig." };
}

function upsertById(items, item) {
  const list = Array.isArray(items) ? items.filter(Boolean) : [];
  return [item, ...list.filter((existing) => existing.id !== item.id)];
}

function refreshDraftAdminPreview() {
  const preview = document.querySelector(".draft-admin-preview");
  const form = document.querySelector("[data-draft-settings-form]");
  if (!preview || !form) return;
  const rows = clamp(Math.round(Number(form.querySelector('[data-draft-setting="rows"]')?.value) || 5), 2, 8);
  const columns = clamp(Math.round(Number(form.querySelector('[data-draft-setting="columns"]')?.value) || 5), 2, 8);
  const jackpotEnabled = form.querySelector('[data-draft-setting="jackpotEnabled"]')?.value !== "false";
  const totalSlots = rows * columns;
  preview.innerHTML = `
    <strong>Vorschau: ${rows} x ${columns} (${totalSlots} Felder)</strong>
    <div class="draft-board-grid" style="--draft-columns:${columns}">
      ${Array.from({ length: totalSlots }, (_, index) => `<button type="button" class="draft-slot" disabled><strong>${index === 0 && jackpotEnabled ? "Stufenkarte" : "Belohnung"}</strong><span>Feld ${index + 1}</span></button>`).join("")}
    </div>
  `;
}

function renderAdminDataCheckModule() {
  const report = validateSeasonData(SEASON_2026_27_STATUS.season);
  const issueRows = report.issues.slice(0, 80).map((issue) => [
    issue.severity,
    issue.type,
    issue.message,
    issue.refs.join(", ") || "-",
  ]);
  const duplicateRows = report.duplicates.slice(0, 60).map((duplicate) => [
    duplicate.key,
    duplicate.matches.join(" | "),
    duplicate.reason,
    duplicate.suggestedCanonicalId || "-",
    "Manuelle Freigabe erforderlich",
  ]);
  const leagueRows = report.leagues.map((league) => [
    league.name,
    league.clubCount,
    league.activePlayers,
    league.malePlayers,
    league.femalePlayers,
    league.status,
  ]);
  const seasonMixingRows = report.issues
    .filter((issue) => [
      "historical-card-active-current-squad",
      "current-card-missing-verification",
      "current-card-marked-historical",
      "active-squad-unverified",
      "pack-pool-invalid-current-card",
    ].includes(issue.type))
    .map((issue) => [issue.severity, issue.type, issue.message, issue.refs.join(", ") || "-", "Saisonvermischung reparieren"]);
  return `
    <h3>Datenpruefung Saison ${escapeHtml(report.season)}</h3>
    <p>Phase A ist aktiv: Dubletten, alte aktive Kaderzuordnungen und kaputte Referenzen werden sichtbar gemacht, bevor neue Kader importiert werden.</p>
    <div class="phase9-grid">
      <article><b>${report.summary.playerRows}</b><span>Spielerzeilen</span></article>
      <article><b>${report.summary.cardCount}</b><span>Karten</span></article>
      <article><b>${report.summary.duplicateGroups}</b><span>Duplikatgruppen</span></article>
      <article><b>${report.summary.errorCount}</b><span>Fehler</span></article>
      <article><b>${report.summary.warningCount}</b><span>Warnungen</span></article>
      <article><b>${escapeHtml(report.generatedAt)}</b><span>Datenstand</span></article>
    </div>
    <div class="admin-actions">
      <button type="button" data-phase9-action="data-check-refresh">Pruefung aktualisieren</button>
      <button type="button" data-phase9-action="repair-season-mixing">Saisonvermischung reparieren</button>
    </div>
    <h4>Ligenstatus</h4>
    ${renderPhase9Table(["Liga", "Vereine", "Aktive Spieler", "Maenner", "Frauen", "Status"], leagueRows)}
    <h4>Datenpruefung -> Saisonvermischung</h4>
    ${seasonMixingRows.length ? renderPhase9Table(["Schwere", "Typ", "Meldung", "Referenzen", "Reparatur"], seasonMixingRows) : "<p>Keine Saisonvermischung in den geladenen Daten gefunden.</p>"}
    <h4>Spieler-Duplikate</h4>
    ${duplicateRows.length ? renderPhase9Table(["Schluessel", "Treffer", "Grund", "Kanonisch", "Aktion"], duplicateRows) : "<p>Keine eindeutigen Dubletten in den geladenen aktuellen Daten.</p>"}
    <h4>Validierungsfehler</h4>
    ${issueRows.length ? renderPhase9Table(["Schwere", "Typ", "Meldung", "Referenzen"], issueRows) : "<p>Keine Fehler in der aktuellen Pruefung.</p>"}
  `;
}

function renderAdminPlayerScoutModule() {
  const scout = state.adminData.playerScout = normalizePlayerScoutState(state.adminData.playerScout);
  const filters = scout.filters;
  const providers = state.adminData.playerSearchProviders = normalizePlayerSearchProviders(state.adminData.playerSearchProviders);
  const selected = scout.preview || scout.results.find((item) => item.id === scout.selectedId) || null;
  const duplicate = selected ? checkPlayerImportDuplicate(selected) : null;
  const providerRows = Object.entries(providers).map(([id, provider]) => [
    provider.label,
    provider.enabled ? "aktiv" : "inaktiv",
    provider.requiresApiKey ? "Backend-Proxy erforderlich" : "kein geheimer Key",
    provider.baseUrl || "-",
    provider.dailyLimit || "-",
    provider.monthlyLimit || "-",
    provider.lastSuccessfulConnection || "-",
    provider.lastError || "-",
    provider.dataDate || "-",
  ]);
  const resultRows = scout.results.map((result) => {
    const dupe = checkPlayerImportDuplicate(result);
    return [
      result.image ? `<img class="scout-thumb" src="${escapeAttr(result.image)}" alt="${escapeAttr(result.displayName)}" />` : "Silhouette",
      escapeHtml(result.displayName),
      escapeHtml(result.dateOfBirth || "-"),
      escapeHtml(result.nationality || "-"),
      escapeHtml(result.position || "-"),
      escapeHtml(result.clubName || "-"),
      escapeHtml(result.leagueId || "-"),
      escapeHtml(result.sourceName || "-"),
      escapeHtml(dupe.label),
      `<button type="button" data-phase9-action="scout-preview" data-scout-id="${escapeAttr(result.id)}">Vorschau</button>`,
    ];
  });
  return `
    <h3>Spieler-Scout / Online-Import</h3>
    <p>Suche lokal, pruefe externe JSON-Quellen oder importiere CSV/JSON mit Vorschau. Geheime API-Keys werden in dieser statischen Browser-App nicht gespeichert.</p>
    <section class="phase9-panel scout-panel">
      <h4>Spieler suchen</h4>
      <div class="phase9-form" data-player-scout-form>
        <label>Spielername<input id="scoutName" value="${escapeAttr(filters.name)}" placeholder="Romano Schmid" /></label>
        <label>Verein<select id="scoutClub">${scoutClubOptions(filters.club)}</select></label>
        <label>Liga<select id="scoutLeague">${scoutLeagueOptions(filters.league)}</select></label>
        <label>Land/Nationalitaet<input id="scoutNationality" value="${escapeAttr(filters.nationality)}" placeholder="Oesterreich" /></label>
        <label>Position<input id="scoutPosition" value="${escapeAttr(filters.position)}" placeholder="ZM" /></label>
        <label>Maenner/Frauen<select id="scoutGender">${optionHtml("all", "Alle", filters.gender)}${optionHtml("male", "Maenner", filters.gender)}${optionHtml("female", "Frauen", filters.gender)}</select></label>
        <label>Saison<input id="scoutSeason" value="${escapeAttr(filters.season)}" /></label>
        <label>Datenquelle<select id="scoutSource">${Object.entries(providers).map(([id, provider]) => optionHtml(id, provider.label, filters.source)).join("")}</select></label>
        <label class="wide">Manuelle Quellen-URL<input id="scoutSourceUrl" value="${escapeAttr(filters.sourceUrl)}" placeholder="https://.../player.json" /></label>
      </div>
      <div class="admin-actions">
        <button type="button" data-phase9-action="scout-search">Spieler suchen</button>
        <button type="button" data-phase9-action="scout-reset">Filter zuruecksetzen</button>
        <button type="button" data-phase9-action="scout-local">Lokale Datenbank pruefen</button>
        <button type="button" data-phase9-action="scout-online">Online suchen</button>
      </div>
      <p>${escapeHtml(scout.lastMessage || "Bereit fuer Suche.")}</p>
    </section>
    <section class="phase9-panel scout-panel">
      <h4>Datenquellen</h4>
      <p>API-Schluessel duerfen nicht im Frontend gespeichert werden. Fuer geheime Anbieter ist ein sicherer Backend-Proxy vorgesehen.</p>
      ${renderPhase9Table(["Anbieter", "Status", "Key", "Basis-URL", "Tag", "Monat", "Letzte Verbindung", "Fehler", "Datenstand"], providerRows)}
      <div class="phase9-form" data-provider-settings>
        <label>Anbieter<select id="scoutProviderId">${Object.entries(providers).map(([id, provider]) => optionHtml(id, provider.label, filters.source || "local")).join("")}</select></label>
        <label>API-Basis-URL<input id="scoutProviderBaseUrl" placeholder="https://api.example.test/players" /></label>
        <label>Taegliches Limit<input id="scoutProviderDaily" type="number" min="0" value="0" /></label>
        <label>Monatliches Limit<input id="scoutProviderMonthly" type="number" min="0" value="0" /></label>
      </div>
      <div class="admin-actions">
        <button type="button" data-phase9-action="scout-save-provider">Provider speichern</button>
        <button type="button" data-phase9-action="scout-test-provider">Testverbindung</button>
      </div>
    </section>
    <section class="phase9-panel scout-panel">
      <h4>JSON-/CSV-Import</h4>
      <textarea id="scoutCsvJsonInput" rows="5" placeholder="JSON Array oder CSV mit name, birth_date, nationality, position, club, league">${escapeHtml(scout.csvJsonInput)}</textarea>
      <div class="admin-actions">
        <button type="button" data-phase9-action="scout-parse-import">Datei/Text pruefen</button>
        <button type="button" data-phase9-action="scout-batch-import">Ausgewaehlte uebernehmen</button>
      </div>
    </section>
    <section class="phase9-panel scout-results">
      <h4>Suchergebnisse</h4>
      ${renderPhase9TableRich(["Bild", "Name", "Geburt", "Nation", "Pos", "Verein", "Liga", "Quelle", "Duplikat", "Aktion"], resultRows)}
    </section>
    ${selected ? renderScoutPreview(selected, duplicate) : ""}
    <section class="phase9-panel">
      <h4>Importverlauf</h4>
      ${renderPhase9Table(["Datum", "Admin", "Spieler", "Aktion", "Quelle", "Ergebnis", "Warnungen"], state.adminData.playerImportLogs.map((log) => [log.importedAt, log.performedByUserId, log.playerId, log.action, log.sourceName, log.result, log.warnings.join(", ")]))}
    </section>
  `;
}

function renderScoutPreview(result, duplicate) {
  return `
    <section class="phase9-panel scout-preview">
      <h4>Importvorschau</h4>
      <div class="scout-preview-grid">
        <article>
          <h5>Lokaler Abgleich</h5>
          <strong>${escapeHtml(duplicate.label)}</strong>
          <p>${escapeHtml(duplicate.message)}</p>
          ${duplicate.matches.length ? renderPhase9Table(["Lokale ID", "Name", "Verein", "Position", "Karten"], duplicate.matches.map((match) => [sourceCardId(match), match.name, match.club, match.pos, matchingOwnedCards(match).length])) : "<p>Keine lokale Uebereinstimmung gefunden.</p>"}
        </article>
        <article>
          <h5>Online-/Importdaten</h5>
          <div class="phase9-form" data-scout-preview-form data-scout-id="${escapeAttr(result.id)}">
            <label>playerId<input id="previewPlayerId" value="${escapeAttr(result.playerId || suggestedPlayerId(result))}" /></label>
            <label>External ID<input id="previewExternalId" value="${escapeAttr(result.externalId || "")}" /></label>
            <label>Vorname<input id="previewFirstName" value="${escapeAttr(result.firstName || "")}" /></label>
            <label>Nachname<input id="previewLastName" value="${escapeAttr(result.lastName || "")}" /></label>
            <label>Anzeigename<input id="previewDisplayName" value="${escapeAttr(result.displayName || "")}" /></label>
            <label>Geburtsdatum<input id="previewDateOfBirth" value="${escapeAttr(result.dateOfBirth || "")}" /></label>
            <label>Nationalitaet<input id="previewNationality" value="${escapeAttr(result.nationality || "")}" /></label>
            <label>Sek. Nationalitaet<input id="previewSecondaryNationality" value="${escapeAttr(result.secondaryNationality || "")}" /></label>
            <label>Geschlecht<select id="previewGender">${optionHtml("male", "Maenner", result.gender)}${optionHtml("female", "Frauen", result.gender)}</select></label>
            <label>Realposition<input id="previewRealPosition" value="${escapeAttr(result.realPosition || result.position || "")}" /></label>
            <label>Spielposition<input id="previewGamePosition" value="${escapeAttr(result.gamePosition || result.position || "")}" /></label>
            <label>Rueckennummer<input id="previewShirtNumber" type="number" min="0" value="${escapeAttr(result.shirtNumber ?? "")}" /></label>
            <label>Liga<select id="previewLeague">${scoutLeagueOptions(result.leagueId || "1. Bundesliga")}</select></label>
            <label>Verein<select id="previewClub">${scoutClubOptions(result.clubName || "Alle Vereine")}</select></label>
            <label>Teamtyp<select id="previewTeamType">${optionHtml("men-first", "Maenner erste Mannschaft", result.teamType)}${optionHtml("women-first", "Frauen erste Mannschaft", result.teamType)}${optionHtml("men-second", "Maenner zweite Mannschaft", result.teamType)}${optionHtml("youth", "U-Mannschaft", result.teamType)}</select></label>
            <label>Kaderstatus<select id="previewSquadStatus">${optionHtml("active", "active", result.squadStatus)}${optionHtml("loaned-out", "loaned-out", result.squadStatus)}${optionHtml("departed", "departed", result.squadStatus)}</select></label>
            <label>Fuer Saison bestaetigt<select id="previewVerifiedForSeason">${optionHtml("true", "Ja", String(result.verifiedForSeason !== false))}${optionHtml("false", "Nein", String(result.verifiedForSeason !== false))}</select></label>
            <label>Vertrag bis<input id="previewContractUntil" value="${escapeAttr(result.contractUntil || "")}" /></label>
            <label>Leihstatus<select id="previewLoanStatus">${optionHtml("none", "none", result.loanStatus)}${optionHtml("loan-in", "loan-in", result.loanStatus)}${optionHtml("loan-out", "loan-out", result.loanStatus)}</select></label>
            <label>Saison<input id="previewSeason" value="${escapeAttr(result.season || SEASON_2026_27_STATUS.season)}" /></label>
            <label>Quelle<input id="previewSourceName" value="${escapeAttr(result.sourceName || "")}" /></label>
            <label class="wide">Quellen-URL<input id="previewSourceUrl" value="${escapeAttr(result.sourceUrl || "")}" /></label>
            <label class="wide">Bild-URL oder lokaler Pfad<input id="previewImage" value="${escapeAttr(result.image || PLAYER_IMAGE_PLACEHOLDER)}" /></label>
            <label>Bildquelle<input id="previewImageSource" value="${escapeAttr(result.imageSource || "silhouette")}" /></label>
            <label>Bildlizenz<input id="previewImageLicense" value="${escapeAttr(result.imageLicense || "fallback")}" /></label>
            <label>Karte erstellen<select id="previewCreateCard">${optionHtml("auto", "Automatische Raritaet", "auto")}${optionHtml("none", "Keine Karte", "auto")}${teamClasses.map((label, index) => optionHtml(String(index), label, "auto")).join("")}</select></label>
          </div>
          <div class="scout-image-candidates">
            ${renderScoutImageCandidate(PLAYER_IMAGE_PLACEHOLDER, "Standardsilhouette", "fallback", result.image || PLAYER_IMAGE_PLACEHOLDER)}
            ${result.image && result.image !== PLAYER_IMAGE_PLACEHOLDER ? renderScoutImageCandidate(result.image, result.imageSource || "Importquelle", result.imageLicense || "zu pruefen", result.image) : ""}
          </div>
          <div class="admin-actions">
            <button type="button" data-phase9-action="scout-import-player">Spieler anlegen</button>
            <button type="button" data-phase9-action="scout-update-player">Vorhandenen Spieler aktualisieren</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderScoutImageCandidate(url, source, license, selected) {
  return `<button type="button" data-phase9-action="scout-select-image" data-image-url="${escapeAttr(url)}" data-image-source="${escapeAttr(source)}" data-image-license="${escapeAttr(license)}" class="${url === selected ? "active" : ""}"><img src="${escapeAttr(url)}" alt="${escapeAttr(source)}" /><span>${escapeHtml(source)}</span><small>${escapeHtml(license)}</small></button>`;
}

function optionHtml(value, label, selected) {
  return `<option value="${escapeAttr(value)}"${String(value) === String(selected) ? " selected" : ""}>${escapeHtml(label)}</option>`;
}

function scoutClubOptions(selected = "Alle Vereine") {
  return [{ name: "Alle Vereine" }, ...CLUBS]
    .map((club) => optionHtml(club.name, club.name, selected))
    .join("");
}

function scoutLeagueOptions(selected = "Alle Ligen") {
  return DB_LEAGUES.map((league) => optionHtml(league, league, selected)).join("");
}

function handlePlayerScoutAction(action, button) {
  if (!requireAdminPermission("managePlayerImport", "Keine Berechtigung fuer den Spieler-Scout.")) return;
  if (action === "scout-search" || action === "scout-local") {
    runLocalPlayerScoutSearch();
  } else if (action === "scout-reset") {
    state.adminData.playerScout = defaultPlayerScoutState();
    setAdminStatus("Spieler-Scout Filter zurueckgesetzt.");
  } else if (action === "scout-online") {
    runOnlinePlayerScoutSearch();
    return;
  } else if (action === "scout-preview") {
    selectScoutPreview(button.dataset.scoutId);
  } else if (action === "scout-parse-import") {
    parseScoutImportText();
  } else if (action === "scout-import-player") {
    importScoutPreviewAsPlayer({ updateExisting: false });
  } else if (action === "scout-update-player") {
    importScoutPreviewAsPlayer({ updateExisting: true });
  } else if (action === "scout-select-image") {
    selectScoutImage(button.dataset.imageUrl, button.dataset.imageSource, button.dataset.imageLicense);
  } else if (action === "scout-save-provider") {
    saveScoutProviderSettings();
  } else if (action === "scout-test-provider") {
    testScoutProviderConnection();
    return;
  } else if (action === "scout-batch-import") {
    importScoutResultsBatch();
  }
  saveState();
  renderAdminDashboard();
  renderAdminPhase9Module("playerscout");
}

function readScoutFiltersFromDom() {
  const scout = state.adminData.playerScout = normalizePlayerScoutState(state.adminData.playerScout);
  scout.filters = {
    name: document.querySelector("#scoutName")?.value.trim() || "",
    club: document.querySelector("#scoutClub")?.value || "Alle Vereine",
    league: document.querySelector("#scoutLeague")?.value || "Alle Ligen",
    nationality: document.querySelector("#scoutNationality")?.value.trim() || "",
    position: document.querySelector("#scoutPosition")?.value.trim() || "",
    gender: document.querySelector("#scoutGender")?.value || "all",
    season: document.querySelector("#scoutSeason")?.value.trim() || SEASON_2026_27_STATUS.season,
    source: document.querySelector("#scoutSource")?.value || "local",
    sourceUrl: document.querySelector("#scoutSourceUrl")?.value.trim() || "",
  };
  return scout.filters;
}

function runLocalPlayerScoutSearch() {
  const filters = readScoutFiltersFromDom();
  const results = GAME_CARDS
    .filter((card) => scoutCardMatchesFilters(card, filters))
    .map((card) => scoutResultFromCard(card, "local"))
    .slice(0, 80);
  state.adminData.playerScout.results = results;
  state.adminData.playerScout.preview = results[0] || null;
  state.adminData.playerScout.selectedId = results[0]?.id || "";
  state.adminData.playerScout.lastMessage = results.length ? `${results.length} lokale Treffer gefunden.` : "Keine lokalen Treffer gefunden.";
  setAdminStatus(state.adminData.playerScout.lastMessage);
}

function scoutCardMatchesFilters(card, filters) {
  const haystack = normalizePlayerIdentity(`${card.name} ${card.club} ${card.nationality || card.nation || ""} ${card.pos}`);
  if (filters.name && !haystack.includes(normalizePlayerIdentity(filters.name))) return false;
  if (filters.club !== "Alle Vereine" && card.club !== filters.club) return false;
  if (filters.league !== "Alle Ligen" && card.league !== filters.league) return false;
  if (filters.nationality && !normalizePlayerIdentity(card.nationality || card.nation || "").includes(normalizePlayerIdentity(filters.nationality))) return false;
  if (filters.position && !String(card.pos || "").toUpperCase().includes(String(filters.position || "").toUpperCase())) return false;
  if (filters.gender === "female" && !String(card.league || "").includes("Frauen")) return false;
  if (filters.gender === "male" && String(card.league || "").includes("Frauen")) return false;
  return true;
}

function scoutResultFromCard(card, sourceName = "local") {
  const [firstName, ...rest] = String(card.name || "").split(" ");
  return normalizeScoutResult({
    id: `scout-${sourceName}-${sourceCardId(card)}`,
    externalId: sourceCardId(card),
    playerId: sourceCardId(card),
    firstName,
    lastName: rest.join(" "),
    displayName: card.name,
    dateOfBirth: card.dateOfBirth || "",
    nationality: card.nationality || card.nation || "Deutschland",
    secondaryNationality: card.secondaryNationality || "",
    gender: String(card.league || "").includes("Frauen") ? "female" : "male",
    realPosition: card.pos,
    gamePosition: card.pos,
    position: card.pos,
    secondaryPositions: card.secondaryPositions || [],
    shirtNumber: card.shirtNumber ?? null,
    clubName: card.club,
    leagueId: card.league,
    teamType: String(card.league || "").includes("Frauen") ? "women-first" : "men-first",
    squadStatus: card.squadStatus || "active",
    loanStatus: card.loanStatus || "none",
    season: card.season || SEASON_2026_27_STATUS.season,
    image: resolvePlayerImage(card).src || PLAYER_IMAGE_PLACEHOLDER,
    imageSource: card.imageSource || "local",
    imageLicense: card.imageLicense || "",
    sourceName,
    sourceUrl: card.sourceUrl || "",
    lastVerifiedAt: card.lastVerifiedAt || "",
  });
}

function normalizeScoutResult(result = {}) {
  const displayName = String(result.displayName || result.name || [result.firstName, result.lastName].filter(Boolean).join(" ") || "Unbekannter Spieler").trim();
  const [firstName, ...rest] = displayName.split(" ");
  return {
    id: String(result.id || `scout-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    externalId: String(result.externalId || result.external_id || ""),
    playerId: String(result.playerId || result.player_id || ""),
    externalIds: result.externalIds && typeof result.externalIds === "object" ? result.externalIds : {},
    firstName: String(result.firstName || result.first_name || firstName || ""),
    lastName: String(result.lastName || result.last_name || rest.join(" ") || ""),
    displayName,
    dateOfBirth: String(result.dateOfBirth || result.birth_date || result.date_of_birth || ""),
    nationality: String(result.nationality || result.country || ""),
    secondaryNationality: String(result.secondaryNationality || result.secondary_nationality || ""),
    gender: ["male", "female"].includes(result.gender) ? result.gender : "male",
    realPosition: String(result.realPosition || result.real_position || result.position || ""),
    gamePosition: String(result.gamePosition || result.game_position || result.position || ""),
    position: String(result.position || result.gamePosition || result.game_position || result.realPosition || result.real_position || ""),
    secondaryPositions: Array.isArray(result.secondaryPositions) ? result.secondaryPositions.map(String) : [],
    shirtNumber: result.shirtNumber ?? result.shirt_number ?? null,
    clubName: String(result.clubName || result.club || result.currentClub || ""),
    leagueId: String(result.leagueId || result.league || ""),
    teamType: String(result.teamType || (String(result.league || "").includes("Frauen") ? "women-first" : "men-first")),
    squadStatus: String(result.squadStatus || result.squad_status || "active"),
    verifiedForSeason: result.verifiedForSeason === false || result.verifiedForSeason === "false" ? false : true,
    contractUntil: String(result.contractUntil || result.contract_until || ""),
    loanStatus: String(result.loanStatus || result.loan_status || "none"),
    season: String(result.season || SEASON_2026_27_STATUS.season),
    image: String(result.image || result.photo || PLAYER_IMAGE_PLACEHOLDER),
    imageSource: String(result.imageSource || result.image_source || "silhouette"),
    imageLicense: String(result.imageLicense || result.image_license || "fallback"),
    imageVerifiedAt: String(result.imageVerifiedAt || result.image_verified_at || ""),
    sourceName: String(result.sourceName || result.source || "manual"),
    sourceUrl: String(result.sourceUrl || result.source_url || ""),
    lastVerifiedAt: String(result.lastVerifiedAt || result.last_verified_at || new Date().toISOString().slice(0, 10)),
    verificationStatus: String(result.verificationStatus || result.verification_status || "needs-review"),
    imported: Boolean(result.imported),
  };
}

function normalizePlayerIdentity(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]/g, "");
}

function renderPhase9TableRich(headers, rows) {
  return `<div class="phase9-table-wrap"><table class="phase9-table"><thead><tr>${headers.map((header) => `<th>${escapeHtml(String(header))}</th>`).join("")}</tr></thead><tbody>${rows.length ? rows.map((row) => `<tr>${row.map((cell) => `<td>${String(cell ?? "")}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="${headers.length}">Keine Daten vorhanden.</td></tr>`}</tbody></table></div>`;
}

function runOnlinePlayerScoutSearch() {
  const filters = readScoutFiltersFromDom();
  const url = filters.sourceUrl || state.adminData.playerSearchProviders?.[filters.source]?.baseUrl || "";
  if (!isSafeHttpUrl(url)) {
    state.adminData.playerScout.lastMessage = "Keine gueltige HTTPS-Quellen-URL angegeben. Lokale Suche bleibt verfuegbar.";
    setAdminStatus(state.adminData.playerScout.lastMessage);
    saveState();
    renderAdminPhase9Module("playerscout");
    return;
  }
  state.adminData.playerScout.lastMessage = "Online-Suche laeuft...";
  setAdminStatus("Online-Suche laeuft...");
  fetch(url, { headers: { Accept: "application/json,text/csv,text/plain" } })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    })
    .then((text) => {
      const parsed = parseScoutRecords(text, url);
      const results = parsed.filter((item) => scoutResultMatchesFilters(item, filters)).slice(0, 100);
      state.adminData.playerScout.results = results;
      state.adminData.playerScout.preview = results[0] || null;
      state.adminData.playerScout.selectedId = results[0]?.id || "";
      state.adminData.playerScout.lastMessage = `${results.length} Online-/Importtreffer geladen.`;
      const provider = state.adminData.playerSearchProviders?.[filters.source];
      if (provider) {
        provider.lastSuccessfulConnection = new Date().toISOString();
        provider.lastError = "";
        provider.dataDate = new Date().toISOString().slice(0, 10);
      }
      saveState();
      renderAdminPhase9Module("playerscout");
      setAdminStatus(state.adminData.playerScout.lastMessage);
    })
    .catch((error) => {
      const provider = state.adminData.playerSearchProviders?.[filters.source];
      if (provider) provider.lastError = error.message;
      state.adminData.playerScout.lastMessage = `Onlinequelle nicht erreichbar: ${error.message}`;
      saveState();
      renderAdminPhase9Module("playerscout");
      setAdminStatus(state.adminData.playerScout.lastMessage);
      showToast("Onlinequelle nicht erreichbar.", "error");
    });
}

function isSafeHttpUrl(url) {
  try {
    const parsed = new URL(String(url || ""));
    return parsed.protocol === "https:" || parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";
  } catch {
    return false;
  }
}

function parseScoutImportText() {
  const scout = state.adminData.playerScout = normalizePlayerScoutState(state.adminData.playerScout);
  scout.csvJsonInput = document.querySelector("#scoutCsvJsonInput")?.value || "";
  const records = parseScoutRecords(scout.csvJsonInput, "manual-import");
  scout.results = records.slice(0, 100);
  scout.preview = scout.results[0] || null;
  scout.selectedId = scout.preview?.id || "";
  scout.lastMessage = records.length ? `${records.length} Datensaetze aus JSON/CSV vorbereitet.` : "Keine gueltigen Datensaetze gefunden.";
  setAdminStatus(scout.lastMessage);
}

function parseScoutRecords(text, sourceUrl = "") {
  const value = String(text || "").trim();
  if (!value) return [];
  try {
    const json = JSON.parse(value);
    const rows = Array.isArray(json) ? json : Array.isArray(json.players) ? json.players : Array.isArray(json.data) ? json.data : [json];
    return rows.map((row) => normalizeScoutResult({ ...row, sourceName: "json", sourceUrl })).filter((row) => row.displayName);
  } catch {
    return parseScoutCsv(value, sourceUrl);
  }
}

function parseScoutCsv(text, sourceUrl = "") {
  const lines = String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = splitCsvLine(lines[0]).map((header) => normalizePlayerIdentity(header));
  return lines.slice(1).map((line, index) => {
    const cells = splitCsvLine(line);
    const row = {};
    headers.forEach((header, cellIndex) => {
      row[header] = cells[cellIndex] || "";
    });
    return normalizeScoutResult({
      id: `csv-${Date.now()}-${index}`,
      displayName: row.name || row.displayname || row.player || row.spieler,
      firstName: row.firstname || row.vorname,
      lastName: row.lastname || row.nachname,
      dateOfBirth: row.birthdate || row.birth_date || row.geburtsdatum,
      nationality: row.nationality || row.nation || row.land,
      position: row.position || row.pos,
      clubName: row.club || row.verein,
      leagueId: row.league || row.liga,
      shirtNumber: row.shirtnumber || row.number || row.nummer,
      season: row.season || row.saison || SEASON_2026_27_STATUS.season,
      gender: row.gender || row.geschlecht || "male",
      sourceName: "csv",
      sourceUrl,
      lastVerifiedAt: new Date().toISOString().slice(0, 10),
    });
  }).filter((row) => row.displayName);
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (const char of String(line || "")) {
    if (char === "\"") quoted = !quoted;
    else if (char === "," && !quoted) {
      cells.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current.trim());
  return cells;
}

function scoutResultMatchesFilters(result, filters) {
  if (filters.name && !normalizePlayerIdentity(result.displayName).includes(normalizePlayerIdentity(filters.name))) return false;
  if (filters.club !== "Alle Vereine" && result.clubName !== filters.club) return false;
  if (filters.league !== "Alle Ligen" && result.leagueId !== filters.league) return false;
  if (filters.nationality && !normalizePlayerIdentity(result.nationality).includes(normalizePlayerIdentity(filters.nationality))) return false;
  if (filters.position && !String(result.position || "").toUpperCase().includes(String(filters.position || "").toUpperCase())) return false;
  if (filters.gender !== "all" && result.gender !== filters.gender) return false;
  return true;
}

function selectScoutPreview(id) {
  const scout = state.adminData.playerScout;
  const result = scout.results.find((item) => item.id === id);
  if (!result) return;
  scout.selectedId = id;
  scout.preview = result;
  scout.lastMessage = `${result.displayName} in Vorschau geoeffnet.`;
  setAdminStatus(scout.lastMessage);
}

function checkPlayerImportDuplicate(result) {
  const nameKey = normalizePlayerIdentity(result.displayName);
  const birthKey = String(result.dateOfBirth || "");
  const nationKey = normalizePlayerIdentity(result.nationality);
  const matches = GAME_CARDS.filter((card) => {
    const sameName = normalizePlayerIdentity(card.name) === nameKey;
    const sameBirth = birthKey && String(card.dateOfBirth || "") === birthKey;
    const sameNation = nationKey && normalizePlayerIdentity(card.nationality || card.nation || "") === nationKey;
    const sameClub = result.clubName && card.club === result.clubName;
    const samePosition = result.position && String(card.pos || "").toUpperCase() === String(result.position).toUpperCase();
    const sameExternal = result.externalId && (card.externalId === result.externalId || card.externalIds?.provider === result.externalId);
    return sameExternal || (sameName && (sameBirth || sameNation || sameClub || samePosition));
  });
  if (matches.some((card) => normalizePlayerIdentity(card.name) === nameKey && (!birthKey || String(card.dateOfBirth || "") === birthKey))) {
    return { level: "exact", label: "Exakter bestehender Spieler", message: "Name und vorhandene Identitaetsdaten passen zu einem lokalen Spieler.", matches };
  }
  if (matches.length) return { level: "possible", label: "Moegliche Uebereinstimmung", message: "Ein oder mehrere lokale Spieler passen teilweise. Bitte vor Import pruefen.", matches };
  return { level: "none", label: "Keine Uebereinstimmung gefunden", message: "Kein lokaler Treffer anhand Name, Geburtsdatum, Nation, Verein oder Position.", matches: [] };
}

function matchingOwnedCards(catalogCard) {
  const catalogId = sourceCardId(catalogCard);
  return state.deck.filter((card) => sourceCardId(card) === catalogId || card.playerId === catalogId || card.name === catalogCard.name);
}

function readScoutPreviewForm() {
  const value = (selector) => document.querySelector(selector)?.value?.trim() || "";
  const clubName = value("#previewClub");
  const club = getClub(clubName === "Alle Vereine" ? "" : clubName);
  const displayName = value("#previewDisplayName");
  return normalizeScoutResult({
    id: state.adminData.playerScout?.selectedId || `manual-${Date.now()}`,
    playerId: value("#previewPlayerId") || suggestedPlayerId({ displayName }),
    externalId: value("#previewExternalId"),
    firstName: value("#previewFirstName"),
    lastName: value("#previewLastName"),
    displayName,
    dateOfBirth: value("#previewDateOfBirth"),
    nationality: value("#previewNationality"),
    secondaryNationality: value("#previewSecondaryNationality"),
    gender: value("#previewGender") || "male",
    realPosition: value("#previewRealPosition"),
    gamePosition: value("#previewGamePosition"),
    position: value("#previewGamePosition") || value("#previewRealPosition"),
    shirtNumber: value("#previewShirtNumber") ? Number(value("#previewShirtNumber")) : null,
    clubName: club.name,
    leagueId: value("#previewLeague") || club.league,
    teamType: value("#previewTeamType"),
    squadStatus: value("#previewSquadStatus") || "active",
    verifiedForSeason: value("#previewVerifiedForSeason") !== "false",
    contractUntil: value("#previewContractUntil"),
    loanStatus: value("#previewLoanStatus") || "none",
    season: value("#previewSeason") || SEASON_2026_27_STATUS.season,
    sourceName: value("#previewSourceName") || "manual",
    sourceUrl: value("#previewSourceUrl"),
    image: value("#previewImage") || PLAYER_IMAGE_SILHOUETTE,
    imageSource: value("#previewImageSource") || "silhouette",
    imageLicense: value("#previewImageLicense") || "fallback",
    lastVerifiedAt: new Date().toISOString().slice(0, 10),
    verificationStatus: "needs-review",
  });
}

function validateScoutImport(result) {
  const errors = [];
  if (!result.displayName) errors.push("Name fehlt.");
  if (!result.playerId) errors.push("playerId fehlt.");
  if (!result.position) errors.push("Position fehlt.");
  if (!result.clubName || result.clubName === "FC Augsburg" && document.querySelector("#previewClub")?.value === "Alle Vereine") errors.push("Verein muss ausgewaehlt werden.");
  if (!result.leagueId || result.leagueId === "Alle Ligen") errors.push("Liga muss ausgewaehlt werden.");
  if (result.image && result.image !== PLAYER_IMAGE_SILHOUETTE && !isSafeImageReference(result.image)) errors.push("Bild-URL/Pfad ist ungueltig.");
  return errors;
}

function isSafeImageReference(value) {
  const text = String(value || "");
  if (!text) return false;
  if (text.startsWith("assets/players/") || text.startsWith("data:image/")) return true;
  return isSafeHttpUrl(text);
}

function suggestedPlayerId(result) {
  return `player-${normalizePlayerIdentity(result.displayName || result.name || "spieler") || Date.now()}`;
}

function importScoutPreviewAsPlayer({ updateExisting = false } = {}) {
  if (!requireAdminPermission("managePlayerImport", "Keine Berechtigung fuer Spielerimporte.")) return false;
  const scout = state.adminData.playerScout = normalizePlayerScoutState(state.adminData.playerScout);
  if (scout.isSaving) return false;
  scout.isSaving = true;
  try {
    const result = readScoutPreviewForm();
    const errors = validateScoutImport(result);
    if (errors.length) {
      scout.lastMessage = errors.join(" ");
      setAdminStatus(scout.lastMessage);
      showToast("Importdaten unvollstaendig.", "error");
      return false;
    }
    const duplicate = checkPlayerImportDuplicate(result);
    let card;
    if (updateExisting || duplicate.level === "exact") {
      card = duplicate.matches[0];
      if (!card) {
        scout.lastMessage = "Kein vorhandener Spieler zum Aktualisieren gefunden.";
        setAdminStatus(scout.lastMessage);
        return false;
      }
      updateCatalogCardFromScout(card, result);
      registerPlayerImport(result, card, "player-updated", duplicate);
      scout.lastMessage = `${result.displayName} wurde aktualisiert.`;
    } else {
      const existingSeasonCard = GAME_CARDS.find((item) => item.playerId === result.playerId && item.season === result.season && cardSeries(item) === "standard");
      if (existingSeasonCard) {
        scout.lastMessage = "Diese Saisonkarte existiert bereits. Import abgebrochen.";
        setAdminStatus(scout.lastMessage);
        return false;
      }
      card = createCatalogCardFromScout(result);
      GAME_CARDS.push(card);
      state.adminData.playerImports = normalizePlayerImports([registerImportedPlayerRecord(result, card), ...(state.adminData.playerImports || [])]);
      registerPlayerImport(result, card, "player-created", duplicate);
      scout.lastMessage = `${result.displayName} wurde angelegt.`;
    }
    scout.results = scout.results.map((item) => item.id === scout.selectedId ? { ...item, imported: true } : item);
    scout.preview = scout.results.find((item) => item.id === scout.selectedId) || result;
    renderAdminDatabase();
    setAdminStatus(scout.lastMessage);
    showToast(scout.lastMessage, "success");
    return true;
  } finally {
    scout.isSaving = false;
  }
}

function createCatalogCardFromScout(result) {
  const cls = scoutClassFromPreview();
  const values = defaultCardValuesForPosition(result.position, cls);
  const id = `${result.playerId}-base-${String(result.season || "2627").replace(/[^0-9]/g, "") || "2627"}`;
  const card = cardDef(id, result.displayName, result.position, result.clubName, cls, values.atk, values.mid, values.def, result.image || PLAYER_IMAGE_SILHOUETTE);
  const isCurrent = result.season === CURRENT_SEASON && result.squadStatus === "active" && result.verifiedForSeason === true;
  return {
    ...card,
    id,
    cardId: id,
    playerId: result.playerId,
    externalIds: result.externalId ? { provider: result.externalId } : {},
    firstName: result.firstName,
    lastName: result.lastName,
    displayName: result.displayName,
    dateOfBirth: result.dateOfBirth,
    nationality: result.nationality,
    secondaryNationality: result.secondaryNationality,
    gender: result.gender,
    realPosition: result.realPosition,
    gamePosition: result.gamePosition,
    shirtNumber: result.shirtNumber,
    clubId: result.clubName,
    currentClubId: result.clubName,
    leagueId: result.leagueId,
    teamType: result.teamType,
    teamId: teamIdForClubName(result.clubName, result.teamType),
    squadStatus: result.squadStatus,
    squadSeason: result.season,
    verifiedForSeason: result.verifiedForSeason === true,
    contractUntil: result.contractUntil,
    loanStatus: result.loanStatus,
    season: result.season,
    image: result.image || PLAYER_IMAGE_SILHOUETTE,
    imageSource: result.imageSource,
    imageLicense: result.imageLicense,
    imageVerifiedAt: result.imageLicense === "fallback" ? "" : new Date().toISOString().slice(0, 10),
    sourceName: result.sourceName,
    sourceUrl: result.sourceUrl,
    lastVerifiedAt: result.lastVerifiedAt,
    verificationStatus: result.verificationStatus,
    isHistorical: result.season !== CURRENT_SEASON,
    isActiveSeasonCard: isCurrent,
    isActive: isCurrent,
    isPackable: isCurrent,
    cardSeries: "base",
    series: "standard",
  };
}

function scoutClassFromPreview() {
  const value = document.querySelector("#previewCreateCard")?.value || "auto";
  if (value === "none") return 2;
  if (value !== "auto") return clamp(Number(value) || 0, 0, teamClasses.length - 1);
  return 3;
}

function updateCatalogCardFromScout(card, result) {
  const before = { ...card };
  Object.assign(card, {
    playerId: card.playerId || result.playerId,
    externalIds: { ...(card.externalIds || {}), ...(result.externalId ? { provider: result.externalId } : {}) },
    firstName: result.firstName,
    lastName: result.lastName,
    displayName: result.displayName,
    dateOfBirth: result.dateOfBirth || card.dateOfBirth,
    nationality: result.nationality || card.nationality,
    secondaryNationality: result.secondaryNationality || card.secondaryNationality,
    gender: result.gender,
    realPosition: result.realPosition || card.realPosition,
    gamePosition: result.gamePosition || card.gamePosition,
    pos: result.position || card.pos,
    shirtNumber: result.shirtNumber ?? card.shirtNumber,
    currentClubId: result.clubName || card.currentClubId,
    leagueId: result.leagueId || card.leagueId,
    teamType: result.teamType || card.teamType,
    teamId: result.clubName ? teamIdForClubName(result.clubName, result.teamType || card.teamType) : card.teamId,
    squadStatus: result.squadStatus || card.squadStatus,
    squadSeason: result.season || card.squadSeason,
    season: result.season || card.season,
    verifiedForSeason: result.verifiedForSeason === true,
    isHistorical: (result.season || card.season) !== CURRENT_SEASON,
    isActiveSeasonCard: (result.season || card.season) === CURRENT_SEASON && result.squadStatus === "active" && result.verifiedForSeason === true,
    isPackable: (result.season || card.season) === CURRENT_SEASON && result.squadStatus === "active" && result.verifiedForSeason === true,
    isActive: (result.season || card.season) === CURRENT_SEASON && result.squadStatus === "active" && result.verifiedForSeason === true,
    contractUntil: result.contractUntil || card.contractUntil,
    loanStatus: result.loanStatus || card.loanStatus,
    image: result.image || card.image,
    imageSource: result.imageSource || card.imageSource,
    imageLicense: result.imageLicense || card.imageLicense,
    sourceName: result.sourceName || card.sourceName,
    sourceUrl: result.sourceUrl || card.sourceUrl,
    lastVerifiedAt: result.lastVerifiedAt,
    verificationStatus: result.verificationStatus,
  });
  if (result.clubName) {
    card.club = result.clubName;
    card.league = result.leagueId || getClub(result.clubName).league;
    card.crest = getClub(result.clubName).crest;
  }
  return before;
}

function registerImportedPlayerRecord(result, card) {
  return normalizeScoutImportedRecord({
    ...result,
    cardId: card.id,
    card,
  });
}

function normalizeScoutImportedRecord(record = {}) {
  if (!record.playerId && !record.cardId) return null;
  return {
    playerId: String(record.playerId || sourceCardId(record.card || {})),
    cardId: String(record.cardId || record.card?.id || ""),
    importedAt: String(record.importedAt || new Date().toISOString()),
    sourceName: String(record.sourceName || ""),
    sourceUrl: String(record.sourceUrl || ""),
    player: normalizeScoutResult(record),
    card: record.card ? normalizeCard(record.card) : null,
  };
}

function applyAdminPlayerImportsToCatalog(imports = []) {
  normalizePlayerImports(imports).forEach((record) => {
    if (!record.card || GAME_CARDS.some((card) => card.id === record.card.id)) return;
    GAME_CARDS.push(record.card);
  });
}

function registerPlayerImport(result, card, action, duplicate) {
  const user = activeUser();
  state.adminData.playerImportLogs = normalizePlayerImportLogs([
    {
      id: `player-import-log-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      action,
      playerId: result.playerId,
      cardId: card.id,
      performedByUserId: user.id,
      sourceName: result.sourceName,
      sourceUrl: result.sourceUrl,
      importedAt: new Date().toISOString(),
      changedFields: ["currentClubId", "leagueId", "squadStatus", "image", "season"],
      duplicateCheckResult: duplicate.label,
      imageSource: result.imageSource,
      result: "success",
      warnings: duplicate.level === "possible" ? ["Moegliches Duplikat wurde manuell uebernommen."] : [],
    },
    ...(state.adminData.playerImportLogs || []),
  ]);
  logAdminAction("playerscout", action, result.playerId, null, { cardId: card.id, duplicate: duplicate.label }, "success");
}

function saveScoutProviderSettings() {
  const providerId = document.querySelector("#scoutProviderId")?.value || "manualUrl";
  const providers = state.adminData.playerSearchProviders = normalizePlayerSearchProviders(state.adminData.playerSearchProviders);
  const provider = providers[providerId];
  if (!provider) return;
  provider.baseUrl = document.querySelector("#scoutProviderBaseUrl")?.value.trim() || provider.baseUrl;
  provider.dailyLimit = Math.max(0, Number(document.querySelector("#scoutProviderDaily")?.value) || provider.dailyLimit || 0);
  provider.monthlyLimit = Math.max(0, Number(document.querySelector("#scoutProviderMonthly")?.value) || provider.monthlyLimit || 0);
  provider.enabled = true;
  provider.lastError = provider.requiresApiKey ? "API-Key bleibt serverseitig. Im Browser wird kein geheimer Schluessel gespeichert." : "";
  setAdminStatus(`${provider.label} gespeichert.`);
  logAdminAction("playerscout", "provider-save", providerId, null, { baseUrl: provider.baseUrl }, "success");
}

function testScoutProviderConnection() {
  const providerId = document.querySelector("#scoutProviderId")?.value || "manualUrl";
  const provider = state.adminData.playerSearchProviders?.[providerId];
  if (!provider) return;
  const url = document.querySelector("#scoutProviderBaseUrl")?.value.trim() || provider.baseUrl;
  if (provider.requiresApiKey) {
    provider.lastError = "Test nur ueber sicheren Backend-Proxy moeglich. Kein API-Key im Frontend.";
    setAdminStatus(provider.lastError);
    saveState();
    renderAdminPhase9Module("playerscout");
    return;
  }
  if (!isSafeHttpUrl(url)) {
    provider.lastError = "Keine gueltige HTTPS-URL.";
    setAdminStatus(provider.lastError);
    saveState();
    renderAdminPhase9Module("playerscout");
    return;
  }
  fetch(url, { method: "GET" })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      provider.lastSuccessfulConnection = new Date().toISOString();
      provider.lastError = "";
      provider.dataDate = new Date().toISOString().slice(0, 10);
      setAdminStatus("Provider-Verbindung erfolgreich.");
    })
    .catch((error) => {
      provider.lastError = error.message;
      setAdminStatus(`Provider-Test fehlgeschlagen: ${error.message}`);
    })
    .finally(() => {
      saveState();
      renderAdminPhase9Module("playerscout");
    });
}

function selectScoutImage(url, source, license) {
  const image = document.querySelector("#previewImage");
  const imageSource = document.querySelector("#previewImageSource");
  const imageLicense = document.querySelector("#previewImageLicense");
  if (image) image.value = url || PLAYER_IMAGE_SILHOUETTE;
  if (imageSource) imageSource.value = source || "silhouette";
  if (imageLicense) imageLicense.value = license || "fallback";
  const preview = state.adminData.playerScout.preview;
  if (preview) {
    preview.image = image?.value || PLAYER_IMAGE_SILHOUETTE;
    preview.imageSource = imageSource?.value || "silhouette";
    preview.imageLicense = imageLicense?.value || "fallback";
  }
  setAdminStatus("Bildauswahl in Vorschau uebernommen.");
}

function importScoutResultsBatch() {
  const scout = state.adminData.playerScout = normalizePlayerScoutState(state.adminData.playerScout);
  let imported = 0;
  let skipped = 0;
  for (const result of scout.results.slice(0, 25)) {
    const duplicate = checkPlayerImportDuplicate(result);
    if (duplicate.level !== "none") {
      skipped += 1;
      continue;
    }
    const normalized = { ...result, playerId: result.playerId || suggestedPlayerId(result) };
    const card = createCatalogCardFromScout(normalized);
    if (GAME_CARDS.some((item) => item.id === card.id || (item.playerId === card.playerId && item.season === card.season))) {
      skipped += 1;
      continue;
    }
    GAME_CARDS.push(card);
    state.adminData.playerImports = normalizePlayerImports([registerImportedPlayerRecord(normalized, card), ...(state.adminData.playerImports || [])]);
    registerPlayerImport(normalized, card, "batch-player-created", duplicate);
    imported += 1;
  }
  scout.lastMessage = `Stapelimport: ${imported} angelegt, ${skipped} uebersprungen.`;
  setAdminStatus(scout.lastMessage);
}

function renderAdminUsers() {
  if (!state.adminUsers.length) {
    state.adminUsers = defaultAdminUsers();
  }
  syncActiveUserWallet();
  renderAdminWalletTools();
  const canManageRoles = hasAdminPermission("roles.manage");
  const canManageUsers = hasAdminPermission("users.manage") || canManageRoles;
  els.adminUserList.innerHTML = state.adminUsers
    .map((user) => {
      const wallet = userWallet(user);
      const profile = normalizeUserProfile(user.profile, user);
      return `
      <article class="${user.locked ? "locked" : ""} ${user.id === state.activeUserId ? "active-user" : ""}" data-user-id="${user.id}">
        <h4>${escapeHtml(user.name)}</h4>
        <label>Anzeigename<input data-user-field="name" type="text" value="${escapeAttr(user.name)}" /></label>
        <label>E-Mail<input data-user-field="email" type="email" value="${escapeAttr(user.email)}" /></label>
        <select data-user-action="role" ${canManageRoles ? "" : "disabled"}>
          ${ADMIN_ROLES.map((role) => `<option value="${role}" ${role === user.role ? "selected" : ""}>${role}</option>`).join("")}
        </select>
        <label>Avatar<input data-user-field="avatar" type="text" value="${escapeAttr(profile.avatar)}" /></label>
        <label>Lieblingsverein<input data-user-field="favoriteClub" type="text" value="${escapeAttr(profile.favoriteClub)}" /></label>
        <label>PIN<input data-user-field="pin" type="text" inputmode="numeric" value="${escapeAttr(user.pin)}" /></label>
        <span>${user.id === state.activeUserId ? "Aktiv | " : ""}${user.locked ? "Gesperrt" : "Freigegeben"}<br />Rolle: ${escapeHtml(user.role)} | Rechte werden ueber die Rolle verwaltet.<br />${formatNumber(wallet.coins)} Credits | ${formatNumber(wallet.gems)} Diamanten<br />Erstellt: ${escapeHtml(formatDateShort(profile.createdAt))} | Login: ${escapeHtml(formatDateShort(profile.lastLoginAt))}</span>
        <button type="button" data-user-action="save" ${canManageUsers ? "" : "disabled"}>Speichern</button>
        <button type="button" data-user-action="lock" ${canManageUsers && user.role !== "Owner" ? "" : "disabled"}>${user.locked ? "Entsperren" : "Sperren"}</button>
        <button class="danger" type="button" data-user-action="delete" ${canManageUsers && user.role !== "Owner" ? "" : "disabled"}>Entfernen</button>
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
  if (!requireAdminPermission("wallet.grant", "Nur Owner und Admins duerfen Wallets gutschreiben.")) return;
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
  logAdminAction("wallet", "grant", user.id, { coins: wallet.coins - coins, gems: wallet.gems - gems }, wallet);
  state.log = [`Admin-Gutschrift fuer ${user.name}: +${formatNumber(coins)} Credits, +${formatNumber(gems)} Diamanten.`, ...state.log].slice(0, 8);
  setAdminStatus(`${user.name} erhielt ${formatNumber(coins)} Credits und ${formatNumber(gems)} Diamanten.`);
  render();
  renderAdminUsers();
  saveState();
}

function renderAdminRewardPools() {
  renderRewardPoolEditor("quick", document.querySelector("#quickRewardPoolList"), 5);
  renderRewardPoolEditor("draft", document.querySelector("#draftRewardPoolList"), 8);
}

function renderRewardPoolEditor(poolKey, list, size) {
  if (!list) return;
  const rewards = normalizeRewardPool(state.rewardPools?.[poolKey], size);
  list.innerHTML = renderRewardPoolRowsMarkup(poolKey, rewards);
  syncRewardPoolPackSelects(list, rewards);
}

function renderRewardPoolRowsMarkup(poolKey, rewards) {
  const rewardTypes = poolKey === "draft" ? ["coins", "gems", "xp", "freePack", "card", "tierCard"] : ["coins", "gems", "xp", "freePack", "card"];
  const packOptions = state.boosterPacks
    .map((pack) => `<option value="${escapeAttr(pack.id)}">${escapeHtml(pack.name)}</option>`)
    .join("");
  return rewards.map((reward, index) => `
    <article class="reward-pool-row" data-reward-pool="${escapeAttr(poolKey)}" data-reward-index="${index}">
      <label>Aktiv
        <select data-reward-field="active">
          <option value="true" ${reward.active ? "selected" : ""}>Ja</option>
          <option value="false" ${!reward.active ? "selected" : ""}>Nein</option>
        </select>
      </label>
      <label>Typ
        <select data-reward-field="type">
          ${rewardTypes.map((type) => `<option value="${type}" ${reward.type === type ? "selected" : ""}>${rewardTypeLabel(type)}</option>`).join("")}
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
}

function syncRewardPoolPackSelects(root, rewards) {
  rewards.forEach((reward, index) => {
    const row = root.querySelector(`[data-reward-index="${index}"]`);
    const packSelect = row?.querySelector('[data-reward-field="packId"]');
    if (packSelect) packSelect.value = reward.packId;
  });
}

function saveQuickRewardPool() {
  state.rewardPools = state.rewardPools || {};
  state.rewardPools.quick = readRewardPoolRows("quickRewardPoolList");
  state.rewardPools.draft = readRewardPoolRows("draftRewardPoolList");
  renderAdminRewardPools();
  setAdminStatus("Preis-Pools fuer Schnelles KI-Spiel und Draft-Board gespeichert.");
  saveState();
}

function readRewardPoolRows(listId) {
  return readRewardPoolRowsFromRoot(document.querySelector(`#${listId}`));
}

function readRewardPoolRowsFromRoot(root) {
  return [...(root?.querySelectorAll("[data-reward-index]") || [])].map((row) => ({
    active: row.querySelector('[data-reward-field="active"]').value === "true",
    type: row.querySelector('[data-reward-field="type"]').value,
    amount: Math.max(1, Number(row.querySelector('[data-reward-field="amount"]').value) || 1),
    chance: clamp(Number(row.querySelector('[data-reward-field="chance"]').value) || 0, 0, 100),
    packId: row.querySelector('[data-reward-field="packId"]').value || "pack-bronze",
    classIndex: normalizeClassIndex(row.querySelector('[data-reward-field="classIndex"]').value),
  }));
}

function handleAdminUserAction(event) {
  const row = event.target.closest("[data-user-id]");
  if (!row) return;
  const user = state.adminUsers.find((item) => item.id === row.dataset.userId);
  if (!user) return;
  const action = event.target.dataset.userAction;
  if (!action) return;

  if (action === "role") {
    if (!requireAdminPermission("roles.manage", "Nur Owner duerfen Rollen aendern.")) {
      event.target.value = user.role;
      return;
    }
    const nextRole = normalizeAdminRole(event.target.value);
    if (!canChangeAdminRole(user, nextRole)) {
      event.target.value = user.role;
      return;
    }
    const before = safeAdminSnapshot(user);
    user.role = nextRole;
    user.pin = user.pin || defaultPinForRole(user.role);
    logAdminAction("users", "role", user.id, before, user);
    setAdminStatus(`${user.name} ist jetzt ${user.role}.`);
  } else if (action === "save") {
    if (!requireAdminPermission("users.manage", "Keine Berechtigung zum Speichern von Benutzern.")) return;
    const before = safeAdminSnapshot(user);
    user.name = (row.querySelector('[data-user-field="name"]')?.value || user.name).trim();
    user.email = normalizeEmail(row.querySelector('[data-user-field="email"]')?.value, user.name);
    const nextRole = normalizeAdminRole(row.querySelector('[data-user-action="role"]')?.value || user.role);
    if (nextRole !== user.role && !canChangeAdminRole(user, nextRole)) return;
    user.role = nextRole;
    user.pin = normalizePin(row.querySelector('[data-user-field="pin"]')?.value, user.role);
    user.extraPermissions = [...row.querySelectorAll("[data-user-permission]")]
      .filter((input) => input.checked)
      .map((input) => input.dataset.userPermission);
    user.profile = normalizeUserProfile({
      ...user.profile,
      displayName: user.name,
      email: user.email,
      avatar: row.querySelector('[data-user-field="avatar"]')?.value || "",
      title: row.querySelector('[data-user-field="title"]')?.value || "",
      favoriteClub: row.querySelector('[data-user-field="favoriteClub"]')?.value || "",
      updatedAt: new Date().toISOString(),
    }, user);
    logAdminAction("users", "save", user.id, before, user);
    setAdminStatus(`${user.name} wurde gespeichert.`);
  } else if (action === "lock" && user.role !== "Owner") {
    if (!requireAdminPermission("users.manage", "Keine Berechtigung zum Sperren von Benutzern.")) return;
    const before = safeAdminSnapshot(user);
    user.locked = !user.locked;
    if (user.id === state.activeUserId && user.locked) state.activeUserId = normalizeActiveUserId(user.id, state.adminUsers);
    logAdminAction("users", user.locked ? "lock" : "unlock", user.id, before, user);
    setAdminStatus(`${user.name} wurde ${user.locked ? "gesperrt" : "entsperrt"}.`);
  } else if (action === "delete" && user.role !== "Owner") {
    if (!requireAdminPermission("users.manage", "Keine Berechtigung zum Entfernen von Benutzern.")) return;
    createAdminBackup("Benutzer entfernt", ["adminUsers"]);
    logAdminAction("users", "delete", user.id, user, null);
    state.adminUsers = state.adminUsers.filter((item) => item.id !== user.id);
    if (user.id === state.activeUserId) state.activeUserId = normalizeActiveUserId(user.id, state.adminUsers);
    setAdminStatus(`${user.name} wurde entfernt.`);
  }
  updateAccountUi();
  renderAdminUsers();
  saveState();
}

function addAdminUser() {
  if (!requireAdminPermission("users.manage", "Keine Berechtigung zum Anlegen von Benutzern.")) return;
  const name = (els.adminNewUserName.value || "Neuer Benutzer").trim();
  const role = normalizeAdminRole(els.adminNewUserRole.value || "Moderator");
  const user = {
    id: `admin-user-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    email: normalizeEmail("", name),
    role,
    pin: defaultPinForRole(role),
    locked: false,
    wallet: { coins: 0, gems: 0 },
    extraPermissions: [],
    userData: createDefaultUserData(`admin-user-${Date.now()}`),
  };
  user.userData = createDefaultUserData(user.id);
  state.userData = state.userData || {};
  state.userData[user.id] = user.userData;
  state.adminUsers.push(user);
  logAdminAction("users", "create", user.id, null, user);
  els.adminNewUserName.value = "";
  renderAdminUsers();
  setAdminStatus(`${name} wurde als ${role} angelegt.`);
  saveState();
}

function canChangeAdminRole(user, nextRole) {
  if (!ADMIN_ROLES.includes(nextRole)) {
    setAdminStatus("Ungueltige Rolle.");
    return false;
  }
  const activeOwners = state.adminUsers.filter((item) => item.role === "Owner" && !item.locked);
  if (user.role === "Owner" && nextRole !== "Owner" && activeOwners.length <= 1) {
    setAdminStatus("Der letzte aktive Owner darf nicht entfernt werden.");
    showToast("Der letzte aktive Owner bleibt geschuetzt.", "error");
    return false;
  }
  if (user.id === state.activeUserId && user.role === "Owner" && nextRole !== "Owner") {
    const confirmed = window.confirm("Du entziehst dir Owner-Rechte. Wirklich fortfahren?");
    if (!confirmed) return false;
  }
  return true;
}

function activeUser() {
  if (!state.adminUsers.length) state.adminUsers = defaultAdminUsers();
  let user = state.adminUsers.find((item) => item.id === state.activeUserId && !item.locked);
  if (!user) {
    state.activeUserId = normalizeActiveUserId(state.activeUserId, state.adminUsers);
    user = state.adminUsers.find((item) => item.id === state.activeUserId) || state.adminUsers[0];
  }
  user.profile = normalizeUserProfile(user.profile, user);
  return user;
}

function canOpenAdmin(user) {
  return Boolean(state.adminData?.enabled) && hasAdminPermission("admin.open", user);
}

function adminPermissionsForStatic(role) {
  return ADMIN_PERMISSION_MATRIX[normalizeAdminRole(role)] || [];
}

function normalizeRolePermissions(rolePermissions = {}) {
  return Object.fromEntries(ADMIN_ROLES.map((role) => {
    const permissions = Array.isArray(rolePermissions[role]) ? rolePermissions[role] : adminPermissionsForStatic(role);
    const unique = [...new Set(permissions.filter(Boolean))];
    if (role === "Owner" && !unique.includes("admin.manage")) unique.push("admin.manage");
    if (role === "Owner" && !unique.includes("admin.open")) unique.push("admin.open");
    return [role, unique];
  }));
}

function adminPermissionsFor(role) {
  const normalized = normalizeAdminRole(role);
  return (typeof state !== "undefined" && state.adminData?.rolePermissions?.[normalized]) || adminPermissionsForStatic(normalized);
}

function hasAdminPermission(permission, user = activeUser()) {
  const checkedUser = user || activeUser();
  if (!checkedUser || checkedUser.locked) return false;
  const permissions = adminPermissionsFor(checkedUser.role);
  const extra = Array.isArray(checkedUser.extraPermissions) ? checkedUser.extraPermissions : [];
  return permissions.includes(permission) || permissions.includes("admin.manage") || extra.includes(permission);
}

function canUseAdminModule(section, user = activeUser()) {
  const permission = ADMIN_MODULE_PERMISSIONS[section] || "admin.open";
  return hasAdminPermission(permission, user);
}

function canViewAdminSection(user, groupId) {
  const group = ADMIN_NAV_GROUPS.find((item) => item.id === groupId);
  return Boolean(group && allowedAdminPages(group, user).length);
}

function canEditAdminPage(user, section) {
  return canUseAdminModule(section, user);
}

function canImportPlayers(user = activeUser()) {
  return hasAdminPermission("managePlayerImport", user);
}

function requireAdminPermission(permission, message = "Keine Berechtigung fuer diese Admin-Aktion.") {
  if (hasAdminPermission(permission)) return true;
  setAdminStatus(message);
  showToast(message, "error");
  logAdminAction("security", permission, "", null, null, "denied", message);
  return false;
}

function safeAdminSnapshot(value) {
  if (value == null) return value;
  try {
    return JSON.parse(JSON.stringify(value, (key, item) => key === "pin" ? "***" : item));
  } catch {
    return "[nicht serialisierbar]";
  }
}

function logAdminAction(area, action, recordId = "", before = null, after = null, result = "success", error = "") {
  if (!state.adminData) state.adminData = createDefaultAdminData();
  const user = activeUser();
  state.adminData.auditLog = [
    {
      id: `log-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      userId: user.id,
      userName: user.name,
      role: user.role,
      area,
      action,
      recordId,
      before: safeAdminSnapshot(before),
      after: safeAdminSnapshot(after),
      time: new Date().toISOString(),
      result,
      error,
    },
    ...(state.adminData.auditLog || []),
  ].slice(0, 80);
}

function createAdminBackup(reason = "Manuelles Backup", areas = ["state"]) {
  if (!state.adminData) state.adminData = createDefaultAdminData();
  const user = activeUser();
  const snapshot = {
    version: 1,
    reason,
    areas,
    createdAt: new Date().toISOString(),
    createdBy: { id: user.id, name: user.name, role: user.role },
    data: {
      events: safeAdminSnapshot(state.events),
      boosterPacks: safeAdminSnapshot(state.boosterPacks),
      rewardPools: safeAdminSnapshot(state.rewardPools),
      adminData: safeAdminSnapshot({ ...state.adminData, backups: [], auditLog: [] }),
      leagueSystem: safeAdminSnapshot(state.leagueSystem),
      missionSystem: safeAdminSnapshot(state.missionSystem),
    },
  };
  state.adminData.backups = [
    {
      id: `backup-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      reason,
      areas,
      createdAt: snapshot.createdAt,
      createdBy: snapshot.createdBy,
      size: JSON.stringify(snapshot).length,
      snapshot,
    },
    ...(state.adminData.backups || []),
  ].slice(0, 10);
  logAdminAction("backups", "create", reason, null, { areas }, "success");
  return state.adminData.backups[0];
}

function verifyPin(user, pin) {
  return String(pin || "") === String(user.pin || defaultPinForRole(user.role));
}

function updateAccountUi() {
  if (state.sessionLoggedOut) {
    els.headerUserName.textContent = "ABGEMELDET";
    els.headerUserRole.textContent = "LOGIN ERFORDERLICH";
    els.headerAvatar.textContent = "LC";
    els.adminHeaderName.textContent = "Abgemeldet";
    els.adminHeaderRole.textContent = "Login";
    els.adminHeaderAvatar.textContent = "LC";
    els.loginActiveName.textContent = "Kein aktiver Account";
    els.loginActiveRole.textContent = "Bitte anmelden";
    els.loginActiveAvatar.textContent = "LC";
    els.openAdmin.hidden = true;
    els.openAdmin.setAttribute("aria-hidden", "true");
    return;
  }
  const user = activeUser();
  const displayName = userDisplayName(user);
  const initials = userInitials(displayName);
  const accountLevel = Math.max(1, Math.floor(profileStats().xp / 1000) + 1);
  els.headerUserName.textContent = displayName;
  els.headerUserRole.textContent = `LEVEL ${accountLevel}`;
  if (user.profile.avatar) {
    els.headerAvatar.innerHTML = `<img src="${escapeAttr(user.profile.avatar)}" alt="${escapeAttr(displayName)} Avatar" onerror="this.remove();this.parentElement.textContent='${escapeAttr(initials)}'" />`;
  } else {
    els.headerAvatar.textContent = initials;
  }
  els.adminHeaderName.textContent = displayName;
  els.adminHeaderRole.textContent = user.role;
  els.adminHeaderAvatar.textContent = initials;
  els.loginActiveName.textContent = displayName;
  els.loginActiveRole.textContent = user.role;
  els.loginActiveAvatar.textContent = initials;
  els.openAdmin.hidden = !canOpenAdmin(user);
  els.openAdmin.setAttribute("aria-hidden", String(!canOpenAdmin(user)));
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
        .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === normalizedPack.image ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
        .join("");
      const minClassOptions = teamClasses
        .map((_, index) => `<option value="${index}" ${index === normalizedPack.minClass ? "selected" : ""}>${escapeHtml(classLabel(index))}</option>`)
        .join("");
      const maxClassOptions = teamClasses
        .map((_, index) => `<option value="${index}" ${index === normalizedPack.maxClass ? "selected" : ""}>${escapeHtml(classLabel(index))}</option>`)
        .join("");
      const poolOptions = packPoolOptions()
        .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === normalizedPack.pool ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
        .join("");
      const positionValue = packPositionOptionValue(normalizedPack.positions);
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
      <article class="${normalizedPack.active ? "" : "disabled"}" data-pack-id="${escapeAttr(normalizedPack.id)}">
        <div class="admin-booster-art">
          ${normalizedPack.image ? `<img src="${escapeAttr(getPackImageUrl(normalizedPack))}" alt="${escapeAttr(normalizedPack.name)}" />` : `<span>${escapeHtml(normalizedPack.name.slice(0, 2))}</span>`}
        </div>
        <div class="admin-booster-editor">
          <label>Name<input data-pack-field="name" value="${escapeAttr(normalizedPack.name)}" /></label>
          <label>Preis<input data-pack-field="cost" type="number" min="0" step="1" value="${normalizedPack.cost}" /></label>
          <label>Waehrung
            <select data-pack-field="currency">
              <option value="coins" ${normalizedPack.currency === "coins" ? "selected" : ""}>Coins</option>
              <option value="gems" ${normalizedPack.currency === "gems" ? "selected" : ""}>Diamanten</option>
            </select>
          </label>
          <label>Von<select data-pack-field="minClass">${minClassOptions}</select></label>
          <label>Bis<select data-pack-field="maxClass">${maxClassOptions}</select></label>
          <label>Karten<input data-pack-field="cardCount" type="number" min="1" max="20" step="1" value="${normalizedPack.cardCount}" /></label>
          <label>Kauflimit<input data-pack-field="purchaseLimit" type="number" min="0" step="1" value="${normalizedPack.purchaseLimit || 0}" /><small>0 = keine Beschraenkung</small></label>
          <label>Pool<select data-pack-field="pool">${poolOptions}</select></label>
          <label>Positionen<select data-pack-field="positions">${positionOptions}</select></label>
          <label>Bild<select data-pack-field="image">${imageOptions}</select></label>
          <label class="pack-upload-field">Bild hochladen<input data-pack-upload="image" type="file" accept="image/png,image/jpeg,image/webp" /></label>
          <fieldset class="drop-rate-grid">
            <legend>Drop-Rate nach Klasse</legend>
            ${dropRateInputs}
          </fieldset>
          <label class="wide">Beschreibung<textarea data-pack-field="description" rows="2">${escapeHtml(normalizedPack.description)}</textarea></label>
          <span>${normalizedPack.active ? "Aktiv" : "Deaktiviert"} | ${normalizedPack.cardCount} ${normalizedPack.cardCount === 1 ? "Karte" : "Karten"} | Limit ${normalizedPack.purchaseLimit || 0 ? normalizedPack.purchaseLimit : "keins"} | ${teamClasses[normalizedPack.minClass]} bis ${teamClasses[normalizedPack.maxClass]} | ${escapeHtml(packPoolLabel(normalizedPack.pool))} | ${escapeHtml(packPositionLabel(normalizedPack.positions))}${normalizedPack.imageSource === "admin-upload" ? " | eigenes Bild" : ""}</span>
        </div>
        <div class="admin-booster-actions">
          <button type="button" data-pack-action="save">Speichern</button>
          <button type="button" data-pack-action="toggle">${normalizedPack.active ? "Deaktivieren" : "Aktivieren"}</button>
          <button class="danger" type="button" data-pack-action="delete">Loeschen</button>
        </div>
      </article>
    `;
    }).join("")
    : `<p class="empty-admin-list">Keine Booster angelegt.</p>`;
}

function createAdminBooster() {
  if (!requireAdminPermission("boosters.manage", "Keine Berechtigung zum Anlegen von Boostern.")) return;
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
    purchaseLimit: 0,
    pool: normalizePackPool(els.adminBoosterPool.value),
    positions: packPositionsFromOption(els.adminBoosterPositions.value),
    dropRates: defaultDropRates(minClass, maxClass),
    description: els.adminBoosterDescription.value.trim() || "Neuer Booster fuer den Pack-Shop.",
    image,
    tier: packTierFromImage(image),
    active: true,
  });
  state.boosterPacks.push(pack);
  logAdminAction("boosters", "create", pack.id, null, pack);
  resetAdminBoosterForm();
  renderAdminBoosters();
  setAdminStatus(`${pack.name} wurde angelegt.`);
  saveBoosterConfig();
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
    if (!requireAdminPermission("boosters.manage", "Keine Berechtigung zum Bearbeiten von Boostern.")) return;
    const before = safeAdminSnapshot(pack);
    const minClass = normalizeClassIndex(row.querySelector('[data-pack-field="minClass"]').value);
    const maxClass = clamp(normalizeClassIndex(row.querySelector('[data-pack-field="maxClass"]').value), minClass, teamClasses.length - 1);
    pack.name = row.querySelector('[data-pack-field="name"]').value.trim() || pack.name;
    pack.cost = Math.max(0, Number(row.querySelector('[data-pack-field="cost"]').value) || 0);
    pack.currency = row.querySelector('[data-pack-field="currency"]').value === "gems" ? "gems" : "coins";
    pack.minClass = minClass;
    pack.maxClass = maxClass;
    pack.cardCount = normalizePackCardCount(row.querySelector('[data-pack-field="cardCount"]').value);
    pack.purchaseLimit = Math.max(0, Math.round(Number(row.querySelector('[data-pack-field="purchaseLimit"]')?.value) || 0));
    pack.limitConfigured = true;
    pack.pool = normalizePackPool(row.querySelector('[data-pack-field="pool"]').value);
    pack.positions = packPositionsFromOption(row.querySelector('[data-pack-field="positions"]').value);
    const dropRates = readDropRates(row, minClass, maxClass, { strict: true });
    const sum = dropRateSum(dropRates, minClass, maxClass);
    pack.dropRates = rebalanceDropRates(dropRates, minClass, maxClass, pack.id);
    pack.image = row.querySelector('[data-pack-field="image"]').value;
    pack.imageSource = isAdminUploadedImageRef(pack.image) ? "admin-upload" : pack.image ? "asset" : "placeholder";
    pack.tier = packTierFromImage(pack.image || getPackImageUrl(pack));
    pack.description = row.querySelector('[data-pack-field="description"]').value.trim() || pack.description;
    pack.updatedAt = new Date().toISOString();
    state.boosterPacks = state.boosterPacks.map((item) => item.id === pack.id ? normalizeBoosterPack(pack) : item);
    logAdminAction("boosters", "save", pack.id, before, pack);
    setAdminStatus(`${pack.name} wurde gespeichert.${Math.abs(sum - 100) > 0.01 ? ` Dropchancen wurden von ${sum.toFixed(1)}% auf 100% normalisiert.` : ""}`);
  } else if (button.dataset.packAction === "toggle") {
    if (!requireAdminPermission("boosters.manage", "Keine Berechtigung zum Aktivieren von Boostern.")) return;
    const before = safeAdminSnapshot(pack);
    pack.active = !pack.active;
    pack.updatedAt = new Date().toISOString();
    state.boosterPacks = state.boosterPacks.map((item) => item.id === pack.id ? normalizeBoosterPack(pack) : item);
    logAdminAction("boosters", pack.active ? "activate" : "deactivate", pack.id, before, pack);
    setAdminStatus(`${pack.name} wurde ${pack.active ? "aktiviert" : "deaktiviert"}.`);
  } else if (button.dataset.packAction === "delete") {
    if (!requireAdminPermission("boosters.manage", "Keine Berechtigung zum Loeschen von Boostern.")) return;
    if (!window.confirm(`${pack.name} wirklich entfernen? Ein Backup wird erstellt.`)) return;
    createAdminBackup(`Booster geloescht: ${pack.name}`, ["boosterPacks"]);
    logAdminAction("boosters", "delete", pack.id, pack, null);
    state.deletedBoosterPackIds = [...new Set([...(state.deletedBoosterPackIds || []), pack.id])];
    state.boosterPacks = state.boosterPacks.filter((item) => item.id !== pack.id);
    state.openedPacks = state.openedPacks || {};
    delete state.openedPacks[pack.id];
    setAdminStatus(`${pack.name} wurde geloescht.`);
  }

  renderAdminBoosters();
  saveBoosterConfig();
  saveState();
}

function handleAdminBoosterImageUpload(event) {
  const input = event.target.closest("[data-pack-upload='image']");
  if (!input) return;
  const row = input.closest("[data-pack-id]");
  const pack = state.boosterPacks.find((item) => item.id === row?.dataset.packId);
  const file = input.files?.[0];
  if (!pack || !file) return;
  if (!requireAdminPermission("boosters.manage", "Keine Berechtigung zum Hochladen von Booster-Bildern.")) {
    input.value = "";
    return;
  }
  const validation = validatePackImage(file);
  if (!validation.ok) {
    setAdminStatus(validation.message);
    showToast(validation.message, "error");
    input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const before = safeAdminSnapshot(pack);
    const asset = {
      id: `pack-img-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      packId: pack.id,
      name: file.name,
      type: file.type,
      size: file.size,
      dataUrl: String(reader.result || ""),
      createdAt: new Date().toISOString(),
      source: "admin-upload-local",
    };
    state.adminData.packImages = [asset, ...(state.adminData.packImages || [])].slice(0, 40);
    pack.previousImages = [pack.image, ...(pack.previousImages || [])].filter(Boolean).slice(0, 5);
    pack.image = asset.id;
    pack.imageSource = "admin-upload";
    pack.uploadStatus = "ready";
    pack.updatedAt = asset.createdAt;
    pack.tier = packTierFromImage(asset.name);
    logAdminAction("boosters", "upload-image", pack.id, before, pack);
    setAdminStatus(`${pack.name}: Bild ${file.name} wurde lokal zugeordnet.`);
    showToast("Booster-Bild zugeordnet.", "success");
    renderAdminBoosters();
    saveBoosterConfig();
    saveState();
  });
  reader.addEventListener("error", () => {
    setAdminStatus("Booster-Bild konnte nicht gelesen werden.");
    showToast("Bild konnte nicht gelesen werden.", "error");
  });
  reader.readAsDataURL(file);
}

function validatePackImage(file) {
  const allowed = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
  if (!allowed.includes(file.type)) return { ok: false, message: "Nur PNG, JPG, WebP oder SVG sind erlaubt." };
  if (file.size > 2.5 * 1024 * 1024) return { ok: false, message: "Das Booster-Bild darf maximal 2,5 MB gross sein." };
  return { ok: true, message: "Bild ist gueltig." };
}

function isAdminUploadedImageRef(image) {
  const value = String(image || "");
  return value.startsWith("pack-img-") || value.startsWith("asset-booster-") || Boolean(state.adminData?.packImages?.some((asset) => asset.id === value));
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
  if (!requireAdminPermission("events.manage", "Keine Berechtigung fuer Event-Aenderungen.")) return;
  const selected = state.events.find((item) => item.id === state.selectedAdminEventId);
  if (!selected) return;
  const before = safeAdminSnapshot(selected);

  if (button.dataset.eventAction === "toggle") {
    selected.active = !selected.active;
    logAdminAction("events", selected.active ? "activate" : "deactivate", selected.id, before, selected);
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
    logAdminAction("events", "save", selected.id, before, selected);
    setAdminStatus(`${selected.title} wurde gespeichert.`);
  } else if (button.dataset.eventAction === "delete") {
    if (!window.confirm(`${selected.title} wirklich entfernen? Ein Backup wird erstellt.`)) return;
    createAdminBackup(`Event geloescht: ${selected.title}`, ["events"]);
    logAdminAction("events", "delete", selected.id, selected, null);
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
    logAdminAction("events", "duplicate", selected.id, selected, copy);
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
  if (!requireAdminPermission("events.manage", "Keine Berechtigung zum Anlegen von Events.")) return;
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
  logAdminAction("events", "create", event.id, null, event);
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

function handleAdminNav(button, requestedSection = "") {
  const groupId = button.dataset.adminGroup || adminNavPageBySection(requestedSection || button.dataset.adminSection).group.id;
  const group = ADMIN_NAV_GROUPS.find((item) => item.id === groupId) || firstAllowedAdminGroup();
  let section = requestedSection || button.dataset.adminSection;
  if (button.dataset.adminGroup && !canUseAdminModule(section)) {
    section = firstAllowedAdminPageInGroup(group)?.section || section;
  }
  if (!canUseAdminModule(section)) {
    setAdminStatus("Keine Berechtigung fuer dieses Admin-Modul.");
    showToast("Admin-Modul gesperrt.", "error");
    return;
  }
  setActiveAdminNav(section);
  renderAdminNavigationShell(section);
  setAdminContentView(section);
  renderAdminDashboard();
  renderAdminPhase9Module(section);

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
    droprates: { selector: ".admin-phase9-panel", message: "Dropchancen-Verwaltung geoeffnet." },
    players: { selector: ".admin-phase9-panel", message: "Spieler-Verwaltung geoeffnet." },
    nations: { selector: ".admin-phase9-panel", message: "Nationen-Verwaltung geoeffnet." },
    leagues: { selector: ".admin-phase9-panel", message: "Ligen-Verwaltung geoeffnet." },
    news: { selector: ".admin-phase9-panel", message: "News-Verwaltung geoeffnet." },
    shop: { selector: ".admin-phase9-panel", message: "Shop-Verwaltung geoeffnet." },
    platzpass: { selector: ".admin-phase9-panel", message: "Platzpass-Vorbereitung geoeffnet." },
    design: { selector: ".admin-phase9-panel", message: "Design-Verwaltung geoeffnet." },
    texts: { selector: ".admin-phase9-panel", message: "Texte-Verwaltung geoeffnet." },
    version: { selector: ".admin-phase9-panel", message: "Version geoeffnet." },
    status: { selector: ".admin-phase9-panel", message: "Projektstatus geoeffnet." },
    roles: { selector: ".admin-phase9-panel", message: "Rollenmatrix geoeffnet." },
    export: { selector: ".admin-phase9-panel", message: "Datenexport geoeffnet." },
    backups: { selector: ".admin-phase9-panel", message: "Backups geoeffnet." },
    draftboard: { selector: ".admin-phase9-panel", message: "Draft-Board Belohnungen geoeffnet." },
    "clubs-overview": { selector: ".admin-phase9-panel", message: "Vereine & Spieler Uebersicht geoeffnet." },
    teams: { selector: ".admin-phase9-panel", message: "Mannschaften geoeffnet." },
    squads: { selector: ".admin-database", message: "Kaderverwaltung geoeffnet.", run: renderAdminDatabase },
    "player-images": { selector: ".admin-phase9-panel", message: "Profilbilder geoeffnet." },
    "player-duplicates": { selector: ".admin-phase9-panel", message: "Duplikate geoeffnet." },
    "season-archive": { selector: ".admin-database", message: "Saisonarchiv geoeffnet.", run: renderAdminDatabase },
    "cards-overview": { selector: ".admin-database", message: "Kartenuebersicht geoeffnet.", run: renderAdminDatabase },
    "card-designs": { selector: ".admin-phase9-panel", message: "Kartenrahmen & Designs geoeffnet." },
    "card-values": { selector: ".admin-phase9-panel", message: "Kartenwerte geoeffnet." },
    "level-system": { selector: ".admin-phase9-panel", message: "Levelsystem geoeffnet." },
    "star-system": { selector: ".admin-phase9-panel", message: "Sternesystem geoeffnet." },
    fusion: { selector: ".admin-phase9-panel", message: "Fusion geoeffnet." },
    "deck-rules": { selector: ".admin-phase9-panel", message: "Deckregeln geoeffnet." },
    "match-rules": { selector: ".admin-phase9-panel", message: "Matchregeln geoeffnet." },
    "cpu-opponents": { selector: ".admin-phase9-panel", message: "KI-Gegner geoeffnet." },
    "season-management": { selector: ".admin-phase9-panel", message: "Saisonverwaltung geoeffnet." },
    tables: { selector: ".admin-phase9-panel", message: "Tabellen geoeffnet." },
    schedules: { selector: ".admin-phase9-panel", message: "Spielplaene geoeffnet." },
    "promotion-relegation": { selector: ".admin-phase9-panel", message: "Aufstieg & Abstieg geoeffnet." },
    cups: { selector: ".admin-phase9-panel", message: "Pokale geoeffnet." },
    tournaments: { selector: ".admin-phase9-panel", message: "Turniere geoeffnet." },
    "economy-overview": { selector: ".admin-phase9-panel", message: "Wirtschaftsuebersicht geoeffnet." },
    currencies: { selector: ".admin-phase9-panel", message: "Waehrungen geoeffnet." },
    achievements: { selector: ".admin-phase9-panel", message: "Erfolge geoeffnet." },
    "battle-pass": { selector: ".admin-phase9-panel", message: "Battle Pass geoeffnet." },
    "daily-login": { selector: ".admin-phase9-panel", message: "Daily Login geoeffnet." },
    "reward-pools": { selector: ".admin-reward-pools", message: "Belohnungspools geoeffnet.", run: renderAdminRewardPools },
    mailbox: { selector: ".admin-phase9-panel", message: "Postfach geoeffnet." },
    notifications: { selector: ".admin-phase9-panel", message: "Benachrichtigungen geoeffnet." },
    support: { selector: ".admin-phase9-panel", message: "Support geoeffnet." },
    "community-events": { selector: ".admin-calendar-board", message: "Community-Events geoeffnet." },
    reports: { selector: ".admin-phase9-panel", message: "Meldungen geoeffnet." },
    "community-dashboard": { selector: ".admin-phase9-panel", message: "Community Dashboard geoeffnet." },
    "community-ideas": { selector: ".admin-phase9-panel", message: "Community-Ideen geoeffnet." },
    "community-forum": { selector: ".admin-phase9-panel", message: "Community-Forum geoeffnet." },
    "community-applications": { selector: ".admin-phase9-panel", message: "Community-Bewerbungen geoeffnet." },
    "community-bugs": { selector: ".admin-phase9-panel", message: "Community-Fehlermeldungen geoeffnet." },
    "community-messages": { selector: ".admin-phase9-panel", message: "Community-Nachrichten geoeffnet." },
    "community-news": { selector: ".admin-phase9-panel", message: "Community-News geoeffnet." },
    "community-roadmap": { selector: ".admin-phase9-panel", message: "Community-Roadmap geoeffnet." },
    "community-settings": { selector: ".admin-phase9-panel", message: "Community-Einstellungen geoeffnet." },
    rights: { selector: ".admin-phase9-panel", message: "Rechte geoeffnet." },
    bans: { selector: ".admin-users", message: "Sperren geoeffnet.", run: renderAdminUsers },
    "login-history": { selector: ".admin-phase9-panel", message: "Loginverlauf geoeffnet." },
    "admin-audit": { selector: ".admin-phase9-panel", message: "Admin-Protokoll geoeffnet." },
    "data-overview": { selector: ".admin-phase9-panel", message: "Datenverwaltung geoeffnet." },
    "data-duplicates": { selector: ".admin-phase9-panel", message: "Daten-Duplikate geoeffnet." },
    "season-mixing": { selector: ".admin-phase9-panel", message: "Saisonvermischung geoeffnet." },
    migrations: { selector: ".admin-phase9-panel", message: "Migrationen geoeffnet." },
    "error-log": { selector: ".admin-phase9-panel", message: "Fehlerprotokoll geoeffnet." },
    "system-general": { selector: ".admin-phase9-panel", message: "Allgemein geoeffnet." },
    "data-sources": { selector: ".admin-phase9-panel", message: "Datenquellen geoeffnet." },
    storage: { selector: ".admin-phase9-panel", message: "Speicher geoeffnet." },
    security: { selector: ".admin-phase9-panel", message: "Sicherheit geoeffnet." },
    maintenance: { selector: ".admin-phase9-panel", message: "Wartung geoeffnet." },
  };

  const action = actions[section];
  if (!action) return;
  if (action.run) action.run();
  setAdminStatus(action.message);
}

function setActiveAdminNav(section) {
  const active = adminNavPageBySection(section);
  document.querySelectorAll(".admin-nav [data-admin-group]").forEach((item) => {
    item.classList.toggle("active", item.dataset.adminGroup === active.group.id);
    item.setAttribute("aria-expanded", item.dataset.adminGroup === active.group.id ? "true" : "false");
  });
  document.querySelectorAll(".admin-subnav [data-admin-section]").forEach((item) => {
    item.classList.toggle("active", item.dataset.adminSection === section);
  });
  renderAdminBreadcrumb(active.group.id, section);
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
    cards: [".admin-database", ".admin-controls", ".admin-recent"],
    transfers: [".admin-transfers"],
    editor: [".admin-controls"],
    boosters: [".admin-boosters"],
    events: [".admin-calendar-board"],
    missions: [".event-categories"],
    users: [".admin-users"],
    settings: [".admin-reward-pools", ".admin-users", ".admin-system"],
    logs: [".admin-phase9-panel"],
    droprates: [".admin-phase9-panel"],
    players: [".admin-phase9-panel"],
    nations: [".admin-phase9-panel"],
    leagues: [".admin-phase9-panel"],
    news: [".admin-phase9-panel"],
    shop: [".admin-phase9-panel"],
    platzpass: [".admin-phase9-panel"],
    design: [".admin-phase9-panel"],
    texts: [".admin-phase9-panel"],
    version: [".admin-phase9-panel"],
    status: [".admin-phase9-panel"],
    roles: [".admin-phase9-panel"],
    export: [".admin-phase9-panel"],
    backups: [".admin-phase9-panel"],
    draftboard: [".admin-phase9-panel"],
    "clubs-overview": [".admin-phase9-panel"],
    teams: [".admin-phase9-panel"],
    squads: [".admin-phase9-panel"],
    "player-images": [".admin-phase9-panel"],
    "player-duplicates": [".admin-phase9-panel"],
    "season-archive": [".admin-database", ".admin-phase9-panel"],
    "cards-overview": [".admin-database", ".admin-phase9-panel"],
    "card-designs": [".admin-phase9-panel"],
    "card-values": [".admin-phase9-panel"],
    "level-system": [".admin-phase9-panel"],
    "star-system": [".admin-phase9-panel"],
    fusion: [".admin-phase9-panel"],
    "deck-rules": [".admin-phase9-panel"],
    "match-rules": [".admin-phase9-panel"],
    "cpu-opponents": [".admin-phase9-panel"],
    "season-management": [".admin-phase9-panel"],
    tables: [".admin-phase9-panel"],
    schedules: [".admin-phase9-panel"],
    "promotion-relegation": [".admin-phase9-panel"],
    cups: [".admin-phase9-panel"],
    tournaments: [".admin-phase9-panel"],
    "economy-overview": [".admin-phase9-panel"],
    currencies: [".admin-phase9-panel"],
    achievements: [".admin-phase9-panel"],
    "battle-pass": [".admin-phase9-panel"],
    "daily-login": [".admin-phase9-panel"],
    "reward-pools": [".admin-reward-pools", ".admin-phase9-panel"],
    mailbox: [".admin-phase9-panel"],
    notifications: [".admin-phase9-panel"],
    support: [".admin-phase9-panel"],
    "community-events": [".admin-calendar-board", ".admin-phase9-panel"],
    reports: [".admin-phase9-panel"],
    "community-dashboard": [".admin-phase9-panel"],
    "community-ideas": [".admin-phase9-panel"],
    "community-forum": [".admin-phase9-panel"],
    "community-applications": [".admin-phase9-panel"],
    "community-bugs": [".admin-phase9-panel"],
    "community-messages": [".admin-phase9-panel"],
    "community-news": [".admin-phase9-panel"],
    "community-roadmap": [".admin-phase9-panel"],
    "community-settings": [".admin-phase9-panel"],
    rights: [".admin-phase9-panel"],
    bans: [".admin-users", ".admin-phase9-panel"],
    "login-history": [".admin-phase9-panel"],
    "admin-audit": [".admin-phase9-panel"],
    "data-overview": [".admin-phase9-panel"],
    "data-duplicates": [".admin-phase9-panel"],
    "season-mixing": [".admin-phase9-panel"],
    migrations: [".admin-phase9-panel"],
    "error-log": [".admin-phase9-panel"],
    "system-general": [".admin-phase9-panel"],
    "data-sources": [".admin-phase9-panel"],
    storage: [".admin-phase9-panel"],
    security: [".admin-phase9-panel"],
    maintenance: [".admin-phase9-panel"],
  };
  const visibleSelectors = new Set(viewMap[section] || []);
  document.querySelectorAll("[data-admin-view]").forEach((item) => {
    item.classList.toggle("is-hidden", !visibleSelectors.has(item.dataset.adminView));
  });
}

function markAdminContentViews() {
  const viewSelectors = {
    ".admin-hero": ".admin-hero",
    ".admin-calendar-board": ".admin-calendar-board",
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
    ".admin-phase9-panel": ".admin-phase9-panel",
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
    els.adminDbSeason,
    DB_SEASONS
  );
  els.adminDbSeason.value = CURRENT_SEASON;
  fillValueSelect(
    els.adminDbLeague,
    DB_LEAGUES.map((league) => ({ value: league, label: league }))
  );
  els.adminDbLeague.value = "Alle Ligen";
  updateAdminDatabaseDropdowns("league");
}

function updateAdminDatabaseDropdowns(changed) {
  const selectedSeason = els.adminDbSeason.value || CURRENT_SEASON;
  const selectedLeague = els.adminDbLeague.value || "Alle Ligen";
  if (changed === "season" || changed === "league") {
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
  const players = getFilteredCards(selectedLeague, selectedClub, "Alle Spieler", selectedSeason);
  fillValueSelect(els.adminDbPlayer, [
    { value: "Alle Spieler", label: "Alle Spieler" },
    ...players.map((card) => ({ value: card.id, label: card.name })),
  ]);
}

function setAdminStatus(message) {
  els.adminStatus.textContent = message;
}

function renderAdminDatabase() {
  const selectedSeason = els.adminDbSeason.value || CURRENT_SEASON;
  const selectedLeague = els.adminDbLeague.value || "Alle Ligen";
  const selectedClub = els.adminDbClub.value || "Alle Vereine";
  const selectedPlayer = els.adminDbPlayer.value || "Alle Spieler";
  const filteredClubs = getFilteredClubs(selectedLeague);
  const filteredCards = getFilteredCards(selectedLeague, selectedClub, selectedPlayer, selectedSeason);

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

  els.adminDbSummary.textContent = `${filteredClubs.length} Vereine, ${filteredCards.length} Karten angezeigt | Saison ${selectedSeason === "all" ? "alle" : selectedSeason}`;
  els.adminClubList.innerHTML = clubs
    .map(([club, cards]) => {
      const best = cards.length ? Math.max(...cards.map((card) => rating(card))) : "-";
      const clubData = getClub(club);
      const activeCards = selectedSeason === CURRENT_SEASON ? cards.filter((card) => isCurrentSeasonCard(card)) : cards;
      const roster = rosterBreakdown(activeCards);
      const isWomenClub = String(clubData.league || "").includes("Frauen");
      return `<div class="admin-club-chip"><img src="${clubData.crest}" alt="${clubData.name} Wappen" /><strong>${clubData.name}</strong><span>${activeCards.length} aktiv | TW ${roster.keeper} | ABW ${roster.defense} | MIT ${roster.midfield} | ST ${roster.attack} | Top ${best}</span><em>Kaderstand ${SEASON_2026_27_STATUS.lastSquadUpdate}</em><small>Mannschaften: ${isWomenClub ? "Frauen - 1. Mannschaft" : "Maenner - 1. Mannschaft"} | weitere Teams im Vereinsdatensatz vorbereiten</small></div>`;
    })
    .join("");

  els.adminPlayerRows.innerHTML = sortedCards
    .map((card) => {
      const owned = state.deck.some((ownedCard) => sourceCardId(ownedCard) === card.id && cardSeries(ownedCard) === cardSeries(card));
      return `
        <tr class="${owned ? "player-row" : ""}">
          <td><span class="player-cell">${renderPlayerListPhoto(card)}${card.name}</span></td>
          <td><span class="club-cell"><img src="${getClub(card.club).crest}" alt="${card.club} Wappen" />${getClub(card.club).name}</span></td>
          <td>${card.shirtNumber ?? "-"}</td>
          <td>${card.pos}</td>
          <td>${escapeHtml(card.nationality || card.nation || "-")}</td>
          <td>${card.league}</td>
          <td>${teamClasses[card.cls]}</td>
          <td>${escapeHtml(cardSeriesLabel(card.series))}</td>
          <td>${rating(card)}</td>
          <td>${compactStatsText(card)}</td>
          <td>${escapeHtml(cardSeasonStatusLabel(card))}</td>
          <td>${escapeHtml(card.lastVerifiedAt || "-")}</td>
          <td>${owned ? "Im Besitz" : "Nicht gezogen"} | ${card.performance ? "Saisonwerte" : "Basiswerte"}</td>
        </tr>
      `;
    })
    .join("");
}

function rosterBreakdown(cards) {
  return cards.reduce((summary, card) => {
    const category = cardCategory(card);
    if (category === "Torwart") summary.keeper += 1;
    else if (category === "Verteidigung") summary.defense += 1;
    else if (category === "Mittelfeld") summary.midfield += 1;
    else summary.attack += 1;
    return summary;
  }, { keeper: 0, defense: 0, midfield: 0, attack: 0 });
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

function createDefaultAdminData() {
  return {
    enabled: true,
    project: {
      name: "KickOff SuperCard",
      version: "0.1 Alpha",
      season: "2026/27",
      status: "Alpha",
      build: "local-static",
      releaseName: "KickOff SuperCard Rebranding",
      progress: 65,
      maintenance: false,
      lastUpdated: SEASON_2026_27_STATUS.lastSquadUpdate,
    },
    dataStatus: { ...SEASON_2026_27_STATUS },
    seasonSources: SEASON_2026_27_DATA?.sourcePolicy || [],
    news: [],
    shopOffers: [],
    design: {
      logo: "assets/branding/logo.png",
      background: "",
      slogan: "Football Card Game",
      accent: "#79ff31",
    },
    assets: [],
    texts: {
      home: "Hauptmenue",
      play: "Spielen",
      collection: "Sammlung",
      shop: "Shop",
      adminDenied: "Kein Zugriff auf das Admin Center.",
    },
    packImages: [],
    rolePermissions: Object.fromEntries(ADMIN_ROLES.map((role) => [role, adminPermissionsForStatic(role)])),
    platzpass: {
      seasonId: "platzpass-2026-27",
      name: "KickOff SuperCard PlatzPass",
      startDate: "",
      endDate: "",
      maxLevel: 100,
      xpPerLevel: 1000,
      price: 950,
      active: false,
      preparedOnly: true,
    },
    importPreview: null,
    exportHistory: [],
    backups: [],
    auditLog: [],
    validationReports: [],
  };
}

function normalizeAdminData(data) {
  const fresh = createDefaultAdminData();
  const adminData = data && typeof data === "object" ? data : {};
  const normalized = {
    ...fresh,
    ...adminData,
    enabled: adminData.enabled !== false,
    project: { ...fresh.project, ...(adminData.project || {}) },
    dataStatus: { ...fresh.dataStatus, ...(adminData.dataStatus || {}) },
    seasonSources: Array.isArray(adminData.seasonSources) ? adminData.seasonSources : fresh.seasonSources,
    news: Array.isArray(adminData.news) ? adminData.news.map(normalizeAdminNewsItem) : fresh.news,
    shopOffers: Array.isArray(adminData.shopOffers) ? adminData.shopOffers.map(normalizeShopOffer) : fresh.shopOffers,
    design: { ...fresh.design, ...(adminData.design || {}) },
    assets: normalizeAdminAssets(adminData.assets || fresh.assets),
    texts: { ...fresh.texts, ...(adminData.texts || {}) },
    packImages: Array.isArray(adminData.packImages) ? adminData.packImages.slice(0, 40) : fresh.packImages,
    rolePermissions: normalizeRolePermissions(adminData.rolePermissions || fresh.rolePermissions),
    platzpass: { ...fresh.platzpass, ...(adminData.platzpass || {}) },
    exportHistory: Array.isArray(adminData.exportHistory) ? adminData.exportHistory.slice(0, 20) : fresh.exportHistory,
    backups: Array.isArray(adminData.backups) ? adminData.backups.slice(0, 10) : fresh.backups,
    auditLog: Array.isArray(adminData.auditLog) ? adminData.auditLog.slice(0, 80) : fresh.auditLog,
    validationReports: Array.isArray(adminData.validationReports) ? adminData.validationReports.slice(0, 20) : fresh.validationReports,
  };
  return normalizeBrandingAdminData(normalized);
}

function normalizeBrandingAdminData(adminData) {
  const fresh = createDefaultAdminData();
  const projectName = String(adminData.project?.name || "");
  const projectVersion = String(adminData.project?.version || "");
  const designLogo = String(adminData.design?.logo || "");
  const designSlogan = String(adminData.design?.slogan || "");
  const platzPassName = String(adminData.platzpass?.name || "");
  return {
    ...adminData,
    project: {
      ...adminData.project,
      name: /liga\s*clash/i.test(projectName) ? fresh.project.name : adminData.project.name,
      version: /0\.2/i.test(projectVersion) ? fresh.project.version : adminData.project.version,
    },
    design: {
      ...adminData.design,
      logo: !designLogo || /assets\/logo\/logo\.png/i.test(designLogo) ? fresh.design.logo : adminData.design.logo,
      slogan: /the football card game/i.test(designSlogan) ? fresh.design.slogan : adminData.design.slogan,
    },
    platzpass: {
      ...adminData.platzpass,
      name: /liga\s*clash/i.test(platzPassName) ? fresh.platzpass.name : adminData.platzpass.name,
    },
  };
}

function defaultPlayerSearchProviders() {
  return {
    local: {
      enabled: true,
      label: "Lokale Datenbank",
      baseUrl: "",
      requiresApiKey: false,
      dailyLimit: 0,
      monthlyLimit: 0,
      lastSuccessfulConnection: "",
      lastError: "",
      dataDate: SEASON_2026_27_STATUS.lastSquadUpdate,
    },
    manualUrl: {
      enabled: true,
      label: "Manuelle Quellen-URL",
      baseUrl: "",
      requiresApiKey: false,
      dailyLimit: 0,
      monthlyLimit: 0,
      lastSuccessfulConnection: "",
      lastError: "",
      dataDate: "",
    },
    footballApi: {
      enabled: false,
      label: "Fussball-Daten-API ueber sicheren Backend-Proxy",
      baseUrl: "",
      requiresApiKey: true,
      apiKeyStorage: "server-only",
      dailyLimit: 100,
      monthlyLimit: 1000,
      lastSuccessfulConnection: "",
      lastError: "Statisches Frontend: geheime API-Keys duerfen hier nicht gespeichert werden.",
      dataDate: "",
    },
  };
}

function normalizePlayerSearchProviders(providers = {}) {
  const fresh = defaultPlayerSearchProviders();
  return Object.fromEntries(Object.entries(fresh).map(([id, defaults]) => {
    const source = providers[id] || {};
    return [id, {
      ...defaults,
      ...source,
      enabled: source.enabled ?? defaults.enabled,
      label: String(source.label || defaults.label),
      baseUrl: String(source.baseUrl || ""),
      requiresApiKey: Boolean(source.requiresApiKey ?? defaults.requiresApiKey),
      apiKeyStorage: defaults.requiresApiKey ? "server-only" : "none",
      dailyLimit: Math.max(0, Math.round(Number(source.dailyLimit ?? defaults.dailyLimit) || 0)),
      monthlyLimit: Math.max(0, Math.round(Number(source.monthlyLimit ?? defaults.monthlyLimit) || 0)),
      lastSuccessfulConnection: String(source.lastSuccessfulConnection || ""),
      lastError: String(source.lastError || ""),
      dataDate: String(source.dataDate || defaults.dataDate || ""),
    }];
  }));
}

function defaultPlayerScoutState() {
  return {
    filters: {
      name: "",
      club: "Alle Vereine",
      league: "Alle Ligen",
      nationality: "",
      position: "",
      gender: "all",
      season: SEASON_2026_27_STATUS.season,
      source: "local",
      sourceUrl: "",
    },
    results: [],
    selectedId: "",
    preview: null,
    csvJsonInput: "",
    isSaving: false,
    lastMessage: "",
  };
}

function normalizePlayerScoutState(scout = {}) {
  const fresh = defaultPlayerScoutState();
  return {
    ...fresh,
    ...scout,
    filters: { ...fresh.filters, ...(scout.filters || {}) },
    results: Array.isArray(scout.results) ? scout.results.map(normalizeScoutResult).slice(0, 100) : fresh.results,
    selectedId: String(scout.selectedId || ""),
    preview: scout.preview ? normalizeScoutResult(scout.preview) : null,
    csvJsonInput: String(scout.csvJsonInput || ""),
    isSaving: false,
    lastMessage: String(scout.lastMessage || ""),
  };
}

function normalizePlayerImports(imports = []) {
  return Array.isArray(imports) ? imports.map(normalizeScoutImportedRecord).filter(Boolean).slice(0, 500) : [];
}

function normalizePlayerImportLogs(logs = []) {
  return Array.isArray(logs) ? logs.map((log) => ({
    id: String(log.id || `player-import-log-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    action: String(log.action || "player-import"),
    playerId: String(log.playerId || ""),
    cardId: String(log.cardId || ""),
    performedByUserId: String(log.performedByUserId || ""),
    sourceName: String(log.sourceName || ""),
    sourceUrl: String(log.sourceUrl || ""),
    importedAt: String(log.importedAt || new Date().toISOString()),
    changedFields: Array.isArray(log.changedFields) ? log.changedFields.map(String) : [],
    duplicateCheckResult: String(log.duplicateCheckResult || ""),
    imageSource: String(log.imageSource || ""),
    result: String(log.result || "success"),
    warnings: Array.isArray(log.warnings) ? log.warnings.map(String) : [],
  })).slice(0, 100) : [];
}

function normalizePlatzPassState(pass) {
  const source = pass && typeof pass === "object" ? pass : {};
  return {
    owned: Boolean(source.owned),
    level: clamp(Math.round(Number(source.level) || 1), 1, 100),
    xp: Math.max(0, Math.round(Number(source.xp) || 0)),
    premiumClaimed: Array.isArray(source.premiumClaimed) ? source.premiumClaimed.filter(Boolean).slice(0, 100) : [],
  };
}

function normalizeAdminNewsItem(item) {
  item = item || {};
  return {
    id: item.id || `news-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: String(item.title || "Neue Meldung").trim(),
    summary: String(item.summary || "").trim(),
    body: String(item.body || "").trim(),
    category: String(item.category || "Allgemein").trim(),
    publishDate: String(item.publishDate || ""),
    expireDate: String(item.expireDate || ""),
    active: item.active !== false,
    priority: Math.max(0, Math.round(Number(item.priority) || 0)),
    audience: String(item.audience || "Alle Spieler").trim(),
    author: String(item.author || "System").trim(),
  };
}

function normalizeShopOffer(offer) {
  offer = offer || {};
  return {
    id: offer.id || `offer-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: String(offer.name || "Neues Angebot").trim(),
    content: String(offer.content || "coins").trim(),
    price: Math.max(0, Math.round(Number(offer.price) || 0)),
    currency: offer.currency === "gems" ? "gems" : "coins",
    startDate: String(offer.startDate || ""),
    endDate: String(offer.endDate || ""),
    limit: Math.max(0, Math.round(Number(offer.limit) || 0)),
    active: offer.active !== false,
    audience: String(offer.audience || "Alle Spieler").trim(),
    order: Math.max(0, Math.round(Number(offer.order) || 999)),
  };
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
    activeDeck: createStarterActiveDeck(baseCards),
    savedDecks: [],
    selected: deckIds(createStarterActiveDeck(baseCards)),
    formation: DEFAULT_FORMATION,
    cpuDifficulty: "normal",
    fieldTheme: "stadium",
    deletedBoosterPackIds: [],
    activeMatch: null,
    matchHistory: [],
    pendingRewardBoard: null,
    draftBoardSettings: defaultDraftBoardSettings(),
    cardFilters: defaultCardFilters(),
    leagueRows,
    record: { win: 0, draw: 0, loss: 0 },
    events: [],
    selectedAdminEventId: null,
    boosterPacks: defaultBoosterPacks(),
    boosterInventory: [],
    boosterTransactions: [],
    boosterOpenings: [],
    cardProgressTransactions: [],
    freePacks: {},
    platzPass: { owned: false, level: 1, xp: 0, premiumClaimed: [] },
    rewardPools: defaultRewardPools(),
    adminData: createDefaultAdminData(),
    adminUsers: defaultAdminUsers(),
    activeUserId: ADMIN_OWNER_ID,
    sessionLoggedOut: false,
    schemaVersion: 2,
    career: defaultCareerState(),
    leagueSystem: createDefaultLeagueSystem(1),
    missionSystem: createDefaultMissionSystem(),
  };
}

function normalizeState(saved) {
  const fresh = createInitialState();
  const boosterOverride = loadBoosterConfigOverride();
  const deletedBoosterPackIds = boosterOverride?.deletedBoosterPackIds || (Array.isArray(saved.deletedBoosterPackIds) ? saved.deletedBoosterPackIds.filter(Boolean) : fresh.deletedBoosterPackIds);
  const savedBoosterPacks = boosterOverride?.boosterPacks || (Array.isArray(saved.boosterPacks) ? saved.boosterPacks : fresh.boosterPacks);
  const migratedDeck = ensureStarterDeckSize(removeTemporaryPlayerCards(Array.isArray(saved.deck) && saved.deck.length ? saved.deck : fresh.deck).map(normalizeCard));
  const migratedSelected = Array.isArray(saved.selected) && saved.selected.length ? migrateSelectedIds(saved.selected, migratedDeck) : fresh.selected;
  const migratedActiveDeck = normalizeActiveDeckState(saved.activeDeck, migratedDeck, migratedSelected, saved.formation || fresh.formation);
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
  const normalizedDraftSettings = normalizeDraftBoardSettings(saved.draftBoardSettings);
  const migratedUserData = migrateUserDataForUsers(migratedUsers, saved, migratedDeck, migratedActiveDeck, migratedSelected);
  return {
    ...fresh,
    ...saved,
    teamClassIndex: normalizeClassIndex(saved.teamClassIndex ?? fresh.teamClassIndex),
    formation: migratedActiveDeck.formationId,
    cpuDifficulty: normalizeCpuDifficulty(saved.cpuDifficulty),
    fieldTheme: normalizeFieldTheme(saved.fieldTheme),
    activeMatch: normalizeStoredMatch(saved.activeMatch),
    matchHistory: normalizeMatchHistory(saved.matchHistory),
    pendingRewardBoard: normalizePendingRewardBoard(saved.pendingRewardBoard),
    draftBoardSettings: normalizedDraftSettings,
    gems: Number.isFinite(saved.gems) ? saved.gems : fresh.gems,
    dailyClaimed: Boolean(saved.dailyClaimed),
    mailGiftClaimed: Boolean(saved.mailGiftClaimed),
    clubLevel: Number.isFinite(saved.clubLevel) ? saved.clubLevel : fresh.clubLevel,
    claimedMissions: Array.isArray(saved.claimedMissions) ? saved.claimedMissions : fresh.claimedMissions,
    record: { ...fresh.record, ...(saved.record || {}) },
    events: migratedEvents,
    selectedAdminEventId: migratedEvents.some((event) => event.id === saved.selectedAdminEventId) ? saved.selectedAdminEventId : migratedEvents[0]?.id || null,
    deletedBoosterPackIds,
    boosterPacks: mergeDefaultBoosterPacks(savedBoosterPacks, deletedBoosterPackIds),
    boosterInventory: normalizeBoosterInventory(saved.boosterInventory),
    boosterTransactions: normalizeBoosterTransactions(saved.boosterTransactions),
    boosterOpenings: normalizeBoosterOpenings(saved.boosterOpenings),
    cardProgressTransactions: Array.isArray(saved.cardProgressTransactions) ? saved.cardProgressTransactions.slice(0, 80) : fresh.cardProgressTransactions,
    freePacks: normalizeFreePacks(saved.freePacks),
    platzPass: normalizePlatzPassState(saved.platzPass),
    rewardPools: normalizeRewardPools(saved.rewardPools),
    adminData: normalizeAdminData(saved.adminData),
    adminUsers: migratedUsers,
    userData: migratedUserData,
    activeUserId,
    sessionLoggedOut: Boolean(saved.sessionLoggedOut),
    schemaVersion: 2,
    career: normalizeCareerState(saved.career),
    cardFilters: normalizeCardFilters(saved.cardFilters),
    deck: migratedDeck,
    activeDeck: migratedActiveDeck,
    savedDecks: [migratedActiveDeck],
    selected: deckIds(migratedActiveDeck).length ? deckIds(migratedActiveDeck) : migratedSelected,
    leagueRows: Array.isArray(saved.leagueRows) && saved.leagueRows.length ? saved.leagueRows : fresh.leagueRows,
    leagueSystem: normalizeLeagueSystem(saved.leagueSystem, saved.leagueIndex ?? fresh.leagueIndex),
    missionSystem: normalizeMissionSystem(saved.missionSystem),
  };
}

function createDefaultLeagueSystem(leagueIndex = 1) {
  const league = leagueConfigByIndex(leagueIndex);
  const week = createLeagueWeek(league.id);
  return {
    currentLeagueId: league.id,
    history: [],
    currentWeek: week,
    lastError: "",
  };
}

function normalizeLeagueSystem(system, legacyLeagueIndex = 1) {
  const fresh = createDefaultLeagueSystem(legacyLeagueIndex);
  const currentLeagueId = LEAGUE_PHASE_CONFIG.some((league) => league.id === system?.currentLeagueId) ? system.currentLeagueId : fresh.currentLeagueId;
  const normalized = {
    ...fresh,
    ...(system || {}),
    currentLeagueId,
    history: Array.isArray(system?.history) ? system.history.slice(0, 12) : [],
    lastError: String(system?.lastError || ""),
  };
  normalized.currentWeek = normalizeLeagueWeek(system?.currentWeek, currentLeagueId);
  return normalized;
}

function createLeagueWeek(leagueId, now = new Date()) {
  const league = leagueConfigById(leagueId);
  const range = leagueWeekRange(now);
  const participants = createLeagueParticipants(league);
  const weekId = `${league.id}-${range.startDate}`;
  const schedule = createLeagueSchedule(league, participants, weekId);
  const week = {
    weekId,
    leagueId: league.id,
    startDate: range.startDate,
    endDate: range.endDate,
    status: "active",
    participants,
    schedule,
    matches: [],
    cpuSimulations: [],
    maxPlayerMatches: LEAGUE_PLAYER_MATCHES_PER_WEEK,
    playedPlayerMatches: 0,
    promotionPlaces: league.promotionPlaces,
    relegationPlaces: league.relegationPlaces,
    reward: { prepared: false, claimed: false, amount: 0, outcome: "", transactionId: "" },
    closure: null,
    archived: false,
  };
  simulateCpuLeagueMatches(week);
  updateLeagueTable(week);
  return week;
}

function normalizeLeagueWeek(week, leagueId) {
  if (!week || typeof week !== "object" || !week.weekId) return createLeagueWeek(leagueId);
  const league = leagueConfigById(week.leagueId || leagueId);
  const fresh = createLeagueWeek(league.id);
  const participants = Array.isArray(week.participants) && week.participants.length === league.participantCount
    ? week.participants.map((participant, index) => normalizeLeagueParticipant(participant, league, index))
    : fresh.participants;
  const normalized = {
    ...fresh,
    ...week,
    leagueId: league.id,
    status: LEAGUE_WEEK_STATUS.includes(week.status) ? week.status : "active",
    participants,
    schedule: Array.isArray(week.schedule) ? week.schedule.map(normalizeLeagueScheduleMatch) : fresh.schedule,
    matches: Array.isArray(week.matches) ? week.matches.map(normalizeLeagueMatchRecord) : [],
    cpuSimulations: Array.isArray(week.cpuSimulations) ? week.cpuSimulations.map(normalizeLeagueMatchRecord) : [],
    maxPlayerMatches: Math.max(1, Number(week.maxPlayerMatches) || LEAGUE_PLAYER_MATCHES_PER_WEEK),
    playedPlayerMatches: Math.max(0, Number(week.playedPlayerMatches) || 0),
    promotionPlaces: Math.max(0, Number(week.promotionPlaces) || league.promotionPlaces),
    relegationPlaces: Math.max(0, Number(week.relegationPlaces) || league.relegationPlaces),
    reward: normalizeLeagueWeekReward(week.reward),
    closure: week.closure || null,
    archived: Boolean(week.archived),
  };
  simulateCpuLeagueMatches(normalized);
  updateLeagueTable(normalized);
  return normalized;
}

function normalizeLeagueParticipant(participant, league, index) {
  const id = participant?.id || `cpu-${league.id}-${index}`;
  return {
    id,
    playerId: participant?.playerId || id,
    displayName: participant?.displayName || participant?.name || `CPU ${index + 1}`,
    avatar: participant?.avatar || "",
    logo: participant?.logo || "",
    leagueId: league.id,
    weekId: participant?.weekId || "",
    played: Math.max(0, Number(participant?.played) || 0),
    wins: Math.max(0, Number(participant?.wins) || 0),
    losses: Math.max(0, Number(participant?.losses) || 0),
    roundWins: Math.max(0, Number(participant?.roundWins) || 0),
    roundLosses: Math.max(0, Number(participant?.roundLosses) || 0),
    points: Math.max(0, Number(participant?.points) || 0),
    roundDiff: Number(participant?.roundDiff) || 0,
    rank: Math.max(1, Number(participant?.rank) || index + 1),
    lastRank: Math.max(1, Number(participant?.lastRank) || index + 1),
    form: Array.isArray(participant?.form) ? participant.form.slice(-5) : [],
    deckStrength: Math.max(0, Number(participant?.deckStrength) || 420 + index * 8),
    difficulty: normalizeCpuDifficulty(participant?.difficulty || "normal"),
    formation: normalizeFormationKey(participant?.formation || DEFAULT_FORMATION),
    status: participant?.status || "active",
    player: Boolean(participant?.player),
  };
}

function normalizeLeagueScheduleMatch(match) {
  return {
    id: String(match?.id || `league-match-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    homeId: String(match?.homeId || "player"),
    awayId: String(match?.awayId || ""),
    matchNumber: Math.max(1, Number(match?.matchNumber) || 1),
    tableRelevant: match?.tableRelevant !== false,
    completed: Boolean(match?.completed),
    linkedMatchId: match?.linkedMatchId || "",
  };
}

function normalizeLeagueMatchRecord(record) {
  return {
    id: String(record?.id || ""),
    scheduleId: String(record?.scheduleId || ""),
    matchId: String(record?.matchId || record?.id || ""),
    homeId: String(record?.homeId || ""),
    awayId: String(record?.awayId || ""),
    score: { home: Math.max(0, Number(record?.score?.home) || 0), away: Math.max(0, Number(record?.score?.away) || 0) },
    result: record?.result || "",
    roundWins: Math.max(0, Number(record?.roundWins) || 0),
    roundLosses: Math.max(0, Number(record?.roundLosses) || 0),
    points: Math.max(0, Number(record?.points) || 0),
    simulated: Boolean(record?.simulated),
    simulationVersion: record?.simulationVersion || "",
    counted: record?.counted !== false,
    completedAt: record?.completedAt || new Date().toISOString(),
  };
}

function normalizeLeagueWeekReward(reward) {
  return {
    prepared: Boolean(reward?.prepared),
    claimed: Boolean(reward?.claimed),
    amount: Math.max(0, Number(reward?.amount) || 0),
    outcome: reward?.outcome || "",
    transactionId: reward?.transactionId || "",
  };
}

function createLeagueParticipants(league) {
  const player = normalizeLeagueParticipant({
    id: "player",
    playerId: "local-player",
    displayName: "GoernaldoBerlin",
    deckStrength: 520,
    difficulty: "normal",
    formation: DEFAULT_FORMATION,
    player: true,
  }, league, 0);
  const cpuNames = [...opponents, ...names.map((name) => `${name} SC`), ...careerOpponents];
  const cpus = [];
  for (let index = 1; index < league.participantCount; index += 1) {
    const seed = stableHash(`${league.id}-${index}`);
    cpus.push(normalizeLeagueParticipant({
      id: `cpu-${league.id}-${index}`,
      displayName: cpuNames[(index + seed) % cpuNames.length],
      deckStrength: 390 + (league.level * 35) + (seed % 160),
      difficulty: index % 5 === 0 ? "hard" : index % 2 === 0 ? "normal" : "easy",
      formation: Object.keys(FORMATIONS)[index % Object.keys(FORMATIONS).length],
      form: [],
    }, league, index));
  }
  return [player, ...cpus];
}

function createLeagueSchedule(league, participants, weekId) {
  const cpus = participants.filter((participant) => !participant.player);
  const playerMatches = cpus.slice(0, LEAGUE_PLAYER_MATCHES_PER_WEEK).map((opponent, index) => ({
    id: `${weekId}-player-${index + 1}`,
    homeId: "player",
    awayId: opponent.id,
    matchNumber: index + 1,
    tableRelevant: true,
    completed: false,
    linkedMatchId: "",
  }));
  const cpuMatches = [];
  for (let index = 0; index < cpus.length; index += 2) {
    const home = cpus[index];
    const away = cpus[(index + 1) % cpus.length];
    if (home && away && home.id !== away.id) {
      cpuMatches.push({
        id: `${weekId}-cpu-${index + 1}`,
        homeId: home.id,
        awayId: away.id,
        matchNumber: index + 1,
        tableRelevant: true,
        completed: false,
        linkedMatchId: "",
      });
    }
  }
  return [...playerMatches, ...cpuMatches];
}

function createDefaultMissionSystem() {
  const dailyKey = missionDayKey();
  const weeklyKey = leagueWeekRange(new Date()).startDate;
  return {
    dailyKey,
    weeklyKey,
    daily: createMissionSet(DAILY_MISSION_CONFIG, dailyKey),
    weekly: createMissionSet(WEEKLY_MISSION_CONFIG, weeklyKey),
    processedEvents: [],
    transactions: [],
    lastResetAt: new Date().toISOString(),
    lastError: "",
  };
}

function normalizeMissionSystem(system) {
  const fresh = createDefaultMissionSystem();
  const normalized = {
    ...fresh,
    ...(system || {}),
    daily: Array.isArray(system?.daily) ? system.daily.map((mission) => normalizeMission(mission, "daily")) : fresh.daily,
    weekly: Array.isArray(system?.weekly) ? system.weekly.map((mission) => normalizeMission(mission, "weekly")) : fresh.weekly,
    processedEvents: Array.isArray(system?.processedEvents) ? system.processedEvents.slice(-500) : [],
    transactions: Array.isArray(system?.transactions) ? system.transactions.slice(-100) : [],
    lastResetAt: system?.lastResetAt || fresh.lastResetAt,
    lastError: String(system?.lastError || ""),
  };
  resetMissionsIfNeeded(normalized);
  return normalized;
}

function createMissionSet(configs, resetKey) {
  const now = new Date();
  return configs.map((config) => normalizeMission({
    ...config,
    id: `${config.id}-${resetKey}`,
    baseId: config.id,
    resetKey,
    currentProgress: 0,
    status: "active",
    claimable: false,
    claimed: false,
    repeatable: false,
    active: true,
    startTime: now.toISOString(),
    endTime: config.type === "daily" ? endOfDay(now).toISOString() : new Date(`${leagueWeekRange(now).endDate}T23:59:59`).toISOString(),
  }, config.type));
}

function normalizeMission(mission, typeFallback = "daily") {
  const config = [...DAILY_MISSION_CONFIG, ...WEEKLY_MISSION_CONFIG].find((item) => item.id === mission?.baseId || item.id === mission?.id);
  const targetValue = Math.max(1, Number(mission?.targetValue ?? config?.targetValue) || 1);
  const currentProgress = clamp(Number(mission?.currentProgress) || 0, 0, targetValue);
  const claimed = Boolean(mission?.claimed);
  const status = claimed ? "claimed" : currentProgress >= targetValue ? "claimable" : ["locked", "active", "completed", "claimable", "claimed", "expired"].includes(mission?.status) ? mission.status : "active";
  return {
    id: String(mission?.id || `${config?.id || "mission"}-${missionDayKey()}`),
    baseId: mission?.baseId || config?.id || mission?.id || "mission",
    type: mission?.type || config?.type || typeFallback,
    title: mission?.title || config?.title || "Mission",
    description: mission?.description || config?.description || "",
    targetType: mission?.targetType || config?.targetType || "matches_played",
    targetValue,
    currentProgress,
    reward: normalizeMissionReward(mission?.reward || config?.reward),
    startTime: mission?.startTime || new Date().toISOString(),
    endTime: mission?.endTime || endOfDay(new Date()).toISOString(),
    status,
    claimable: status === "claimable",
    claimed,
    repeatable: Boolean(mission?.repeatable),
    active: mission?.active !== false,
    order: Number(mission?.order ?? config?.order) || 0,
    resetKey: mission?.resetKey || "",
  };
}

function normalizeMissionReward(reward) {
  return {
    type: ["coins", "gems", "freePack", "card", "material"].includes(reward?.type) ? reward.type : "coins",
    amount: Math.max(1, Number(reward?.amount) || 1),
    packId: reward?.packId || "pack-bronze",
    classIndex: normalizeClassIndex(reward?.classIndex || 0),
    material: reward?.material || "training",
  };
}

function ensurePhase8Systems() {
  state.leagueSystem = normalizeLeagueSystem(state.leagueSystem, state.leagueIndex);
  state.missionSystem = normalizeMissionSystem(state.missionSystem);
  const player = state.leagueSystem.currentWeek.participants.find((participant) => participant.player);
  if (player) {
    player.playerId = state.activeUserId;
    player.displayName = activeUser()?.name || "GoernaldoBerlin";
    player.deckStrength = deckStrengthValue();
    player.formation = normalizeFormationKey(state.formation);
  }
  updateLeagueTable(state.leagueSystem.currentWeek);
}

function leagueConfigById(id) {
  return LEAGUE_PHASE_CONFIG.find((league) => league.id === id) || LEAGUE_PHASE_CONFIG[LEAGUE_PHASE_CONFIG.length - 1];
}

function leagueConfigByIndex(index) {
  const mapped = ["league-1", "league-2", "league-3", "league-bottom", "league-bottom"][clamp(Number(index) || 0, 0, 4)];
  return leagueConfigById(mapped || "league-bottom");
}

function currentLeagueConfig() {
  return leagueConfigById(state.leagueSystem?.currentLeagueId);
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

function endOfDay(date) {
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return end;
}

function missionDayKey(date = new Date()) {
  return isoDate(date);
}

function stableHash(value) {
  return String(value).split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) >>> 0, 2166136261);
}

function seededNumber(seed, min, max) {
  return min + (stableHash(seed) % (max - min + 1));
}

function deckStrengthValue() {
  return activeDeckMatchCards().reduce((sum, card) => sum + rating(card), 0);
}

function simulateCpuLeagueMatches(week) {
  const simulatedIds = new Set((week.cpuSimulations || []).map((match) => match.scheduleId || match.id));
  const cpuSchedule = (week.schedule || []).filter((match) => match.homeId !== "player" && match.awayId !== "player");
  cpuSchedule.forEach((match) => {
    if (simulatedIds.has(match.id)) return;
    const home = week.participants.find((participant) => participant.id === match.homeId);
    const away = week.participants.find((participant) => participant.id === match.awayId);
    if (!home || !away) return;
    const record = simulateCpuLeagueMatch(match, home, away, week.weekId);
    week.cpuSimulations.push(record);
    match.completed = true;
    match.linkedMatchId = record.id;
  });
}

function simulateCpuLeagueMatch(match, home, away, weekId) {
  const homeEdge = home.deckStrength - away.deckStrength + (home.form.filter((item) => item === "W").length - away.form.filter((item) => item === "W").length) * 8;
  const swing = seededNumber(`${weekId}-${match.id}`, -35, 35);
  const homeWins = clamp(3 + Math.round((homeEdge + swing) / 55), 0, 5);
  const awayWins = 5 - homeWins;
  const homeWon = homeWins > awayWins;
  return {
    id: `${match.id}-sim`,
    scheduleId: match.id,
    matchId: `${match.id}-sim`,
    homeId: home.id,
    awayId: away.id,
    score: { home: homeWins, away: awayWins },
    result: homeWon ? "home" : "away",
    roundWins: homeWins,
    roundLosses: awayWins,
    points: homeWon ? LEAGUE_POINTS.win : LEAGUE_POINTS.loss,
    simulated: true,
    simulationVersion: PHASE8_SIMULATION_VERSION,
    counted: true,
    completedAt: new Date().toISOString(),
  };
}

function updateLeagueTable(week) {
  week.participants.forEach((participant) => {
    participant.lastRank = participant.rank || participant.lastRank || 1;
    participant.played = 0;
    participant.wins = 0;
    participant.losses = 0;
    participant.roundWins = 0;
    participant.roundLosses = 0;
    participant.points = 0;
    participant.roundDiff = 0;
    participant.form = [];
  });
  [...(week.cpuSimulations || []), ...(week.matches || [])].filter((match) => match.counted !== false).forEach((match) => applyMatchRecordToParticipants(week, match));
  const sorted = [...week.participants].sort(compareLeagueParticipants);
  sorted.forEach((participant, index) => {
    participant.rank = index + 1;
  });
  return sorted;
}

function applyMatchRecordToParticipants(week, match) {
  const home = week.participants.find((participant) => participant.id === match.homeId);
  const away = week.participants.find((participant) => participant.id === match.awayId);
  if (!home || !away) return;
  const homeRounds = Number(match.score?.home) || 0;
  const awayRounds = Number(match.score?.away) || 0;
  home.played += 1;
  away.played += 1;
  home.roundWins += homeRounds;
  home.roundLosses += awayRounds;
  away.roundWins += awayRounds;
  away.roundLosses += homeRounds;
  home.roundDiff = home.roundWins - home.roundLosses;
  away.roundDiff = away.roundWins - away.roundLosses;
  if (homeRounds > awayRounds) {
    home.wins += 1;
    away.losses += 1;
    home.points += LEAGUE_POINTS.win;
    home.form.push("W");
    away.form.push("L");
  } else {
    away.wins += 1;
    home.losses += 1;
    away.points += LEAGUE_POINTS.win;
    away.form.push("W");
    home.form.push("L");
  }
  home.form = home.form.slice(-5);
  away.form = away.form.slice(-5);
}

function compareLeagueParticipants(a, b) {
  return b.points - a.points || b.roundDiff - a.roundDiff || b.roundWins - a.roundWins || String(a.id).localeCompare(String(b.id));
}

function leagueTableRows() {
  ensurePhase8Systems();
  return updateLeagueTable(state.leagueSystem.currentWeek).map((participant) => ({ ...participant }));
}

function nextLeagueMatch() {
  const week = state.leagueSystem.currentWeek;
  return (week.schedule || []).find((match) => match.homeId === "player" && !match.completed) || null;
}

function participantName(id) {
  return state.leagueSystem.currentWeek.participants.find((participant) => participant.id === id)?.displayName || id;
}

function completeLeagueMatch(match) {
  ensurePhase8Systems();
  const week = state.leagueSystem.currentWeek;
  if ((week.matches || []).some((record) => record.matchId === match.id)) return;
  const scheduled = nextLeagueMatch();
  const awayId = scheduled?.awayId || week.participants.find((participant) => !participant.player)?.id || "";
  const playerWon = match.result === "win";
  const record = normalizeLeagueMatchRecord({
    id: `league-${match.id}`,
    scheduleId: scheduled?.id || `manual-${match.id}`,
    matchId: match.id,
    homeId: "player",
    awayId,
    score: { home: match.score.player, away: match.score.cpu },
    result: playerWon ? "home" : "away",
    roundWins: match.score.player,
    roundLosses: match.score.cpu,
    points: playerWon ? LEAGUE_POINTS.win : LEAGUE_POINTS.loss,
    simulated: false,
    counted: true,
    completedAt: match.endedAt || new Date().toISOString(),
  });
  week.matches.push(record);
  if (scheduled) {
    scheduled.completed = true;
    scheduled.linkedMatchId = match.id;
  }
  week.playedPlayerMatches = week.matches.filter((item) => item.homeId === "player").length;
  updateLeagueTable(week);
  const player = week.participants.find((participant) => participant.player);
  state.lp = player ? player.points * 25 + player.roundWins * 2 : state.lp;
  recordGameEvent("league_match_completed", { id: `league-${match.id}` });
  if (playerWon) recordGameEvent("league_match_won", { id: `league-win-${match.id}` });
}

function settleLeagueWeek() {
  ensurePhase8Systems();
  const system = state.leagueSystem;
  const week = system.currentWeek;
  if (week.status === "completed" || week.reward.claimed) {
    system.lastError = "Diese Ligawoche wurde bereits abgeschlossen.";
    showToast(system.lastError, "warning");
    return;
  }
  if (week.playedPlayerMatches < week.maxPlayerMatches) {
    const remaining = week.maxPlayerMatches - week.playedPlayerMatches;
    system.lastError = `Ligawoche kann erst nach allen Ligaspielen abgeschlossen werden. Noch ${remaining} ${remaining === 1 ? "Spiel" : "Spiele"} offen.`;
    showToast(system.lastError, "warning");
    return;
  }
  simulateCpuLeagueMatches(week);
  const table = updateLeagueTable(week);
  const playerRank = table.find((participant) => participant.player)?.rank || table.length;
  const outcome = leagueOutcome(playerRank, currentLeagueConfig());
  const rewardAmount = weeklyLeagueReward(currentLeagueConfig(), outcome, playerRank);
  const previousLeagueId = system.currentLeagueId;
  const nextLeagueId = nextLeagueAfterOutcome(previousLeagueId, outcome);
  const fromCoins = state.coins;
  state.coins += rewardAmount;
  week.reward = { prepared: true, claimed: true, amount: rewardAmount, outcome, transactionId: `league-week-${week.weekId}` };
  week.status = "completed";
  week.closure = { playerRank, outcome, rewardAmount, completedAt: new Date().toISOString(), previousLeagueId, nextLeagueId };
  system.history = [week, ...(system.history || [])].slice(0, 12);
  system.currentLeagueId = nextLeagueId;
  state.leagueIndex = leagueIndexFromPhaseId(nextLeagueId);
  system.currentWeek = createLeagueWeek(nextLeagueId);
  state.log = [`Ligawoche abgeschlossen: Platz ${playerRank}, ${leagueOutcomeLabel(outcome)}, +${rewardAmount} Coins.`, ...state.log].slice(0, 8);
  recordGameEvent("credits_earned", { id: week.reward.transactionId, amount: rewardAmount });
  saveState();
  animateCoinChange(fromCoins, state.coins, els.playMatch);
}

function leagueOutcome(rank, league) {
  if (league.promotionPlaces && rank <= league.promotionPlaces) return "promotion";
  if (league.relegationPlaces && rank > league.participantCount - league.relegationPlaces) return "relegation";
  return "stay";
}

function weeklyLeagueReward(league, outcome, rank) {
  const base = league.rewards[outcome] || league.rewards.stay || 300;
  return Math.max(100, base + Math.max(0, league.participantCount - rank) * 12);
}

function nextLeagueAfterOutcome(leagueId, outcome) {
  const index = LEAGUE_PHASE_CONFIG.findIndex((league) => league.id === leagueId);
  if (outcome === "promotion") return LEAGUE_PHASE_CONFIG[Math.max(0, index - 1)]?.id || leagueId;
  if (outcome === "relegation") return LEAGUE_PHASE_CONFIG[Math.min(LEAGUE_PHASE_CONFIG.length - 1, index + 1)]?.id || leagueId;
  return leagueId;
}

function leagueIndexFromPhaseId(leagueId) {
  return { "league-1": 0, "league-2": 1, "league-3": 2, "league-bottom": 4 }[leagueId] ?? 1;
}

function leagueOutcomeLabel(outcome) {
  return outcome === "promotion" ? "Aufstieg" : outcome === "relegation" ? "Abstieg" : "Klassenerhalt";
}

function renderPhase8LeagueTable(rows, league) {
  return `
    <table class="mini-table phase8-league-table">
      <thead><tr><th>#</th><th>Teilnehmer</th><th>Status</th><th>Sp</th><th>S</th><th>N</th><th>RD</th><th>Pkt</th><th>Deck</th><th>Formation</th><th>Zone</th></tr></thead>
      <tbody>${rows.map((row) => {
        const zone = row.rank <= league.promotionPlaces ? "promotion" : league.relegationPlaces && row.rank > league.participantCount - league.relegationPlaces ? "relegation" : "stay";
        const zoneLabel = zone === "promotion" ? "Aufstieg" : zone === "relegation" ? "Abstieg" : "Bleibt";
        return `<tr class="${row.player ? "player-row" : ""} ${zone}">
          <td>${row.rank}</td>
          <td><span class="league-participant-name"><i>${escapeHtml(row.logo || row.avatar || (row.player ? "DU" : "CPU"))}</i>${escapeHtml(row.displayName)}${row.player ? " <b>Du</b>" : ""}</span></td>
          <td>${row.player ? "Spieler" : `CPU ${escapeHtml(CPU_DIFFICULTIES[row.difficulty]?.label || row.difficulty)}`}</td>
          <td>${row.played}</td>
          <td>${row.wins}</td>
          <td>${row.losses}</td>
          <td>${formatRoundDiff(row.roundDiff)}</td>
          <td>${row.points}</td>
          <td>${row.deckStrength}</td>
          <td>${escapeHtml(row.formation)}</td>
          <td>${zoneLabel}</td>
        </tr>`;
      }).join("")}</tbody>
    </table>
  `;
}

function missionRows(type) {
  ensurePhase8Systems();
  const list = type === "weekly" ? state.missionSystem.weekly : state.missionSystem.daily;
  return [...list].sort((a, b) => a.order - b.order);
}

function resetMissionsIfNeeded(system = state.missionSystem) {
  const dayKey = missionDayKey();
  const weekKey = leagueWeekRange(new Date()).startDate;
  if (system.dailyKey !== dayKey) {
    system.dailyKey = dayKey;
    system.daily = createMissionSet(DAILY_MISSION_CONFIG, dayKey);
  }
  if (system.weeklyKey !== weekKey) {
    system.weeklyKey = weekKey;
    system.weekly = createMissionSet(WEEKLY_MISSION_CONFIG, weekKey);
  }
}

function recordGameEvent(type, payload = {}) {
  if (!state.missionSystem) return;
  resetMissionsIfNeeded(state.missionSystem);
  const eventId = payload.id || `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const uniqueKey = `${type}:${eventId}`;
  if (state.missionSystem.processedEvents.includes(uniqueKey)) return;
  state.missionSystem.processedEvents.push(uniqueKey);
  state.missionSystem.processedEvents = state.missionSystem.processedEvents.slice(-500);
  updateActiveUserStats(type, payload);
  [...state.missionSystem.daily, ...state.missionSystem.weekly].forEach((mission) => {
    if (!mission.active || mission.claimed || mission.status === "expired") return;
    const increment = missionIncrement(mission.targetType, type, payload);
    if (!increment) return;
    mission.currentProgress = clamp(mission.currentProgress + increment, 0, mission.targetValue);
    if (mission.currentProgress >= mission.targetValue) {
      mission.status = "claimable";
      mission.claimable = true;
    }
  });
}

function missionIncrement(targetType, eventType, payload) {
  const map = {
    matches_played: ["match_completed"],
    matches_won: ["match_won"],
    rounds_won: ["round_won"],
    booster_opened: ["booster_opened"],
    cards_received: ["card_received"],
    credits_earned: ["credits_earned"],
    deck_saved: ["deck_saved"],
    league_matches_played: ["league_match_completed"],
    league_matches_won: ["league_match_won"],
    reward_board_completed: ["reward_board_completed"],
    cards_owned: ["card_received"],
    card_leveled: ["card_leveled"],
  };
  if (!map[targetType]?.includes(eventType)) return 0;
  if (targetType === "rounds_won") return Math.max(1, Number(payload.count) || 1);
  if (targetType === "cards_received") return Math.max(1, Number(payload.count) || 1);
  return 1;
}

function updateActiveUserStats(type, payload = {}) {
  const user = activeUser();
  user.stats = normalizeUserStats(user.stats);
  if (type === "match_completed" || type === "league_match_completed") {
    user.stats.matchesPlayed += 1;
    const match = state.matchHistory?.find((item) => item.id === payload.id) || state.activeMatch;
    if (match?.result === "loss" || match?.winner === "cpu") user.stats.matchesLost += 1;
  } else if (type === "match_won" || type === "league_match_won") {
    user.stats.matchesWon += 1;
  } else if (type === "booster_opened") {
    user.stats.packsOpened += 1;
  } else if (type === "card_received") {
    user.stats.cardsCollected = Math.max(user.stats.cardsCollected, ownedCardCount());
  } else if (type === "card_fused" || type === "card_star_upgraded") {
    user.stats.cardsFused += 1;
  } else if (type === "card_leveled") {
    const card = state.deck.find((item) => item.id === payload.cardId || item.id === String(payload.id || "").replace(/^level-/, "").replace(/-\d+$/, ""));
    user.stats.highestCardLevel = Math.max(user.stats.highestCardLevel, card ? cardLevel(card) : 1);
  } else if (type === "league_promoted") {
    user.stats.leaguePromotions += 1;
  }
}

function grantMissionReward(reward) {
  if (reward.type === "coins") {
    state.coins += reward.amount;
    recordGameEvent("credits_earned", { id: `mission-credit-${Date.now()}`, amount: reward.amount });
  } else if (reward.type === "gems") {
    state.gems += reward.amount;
  } else if (reward.type === "freePack") {
    grantFreePack(reward.packId, reward.amount);
  } else if (reward.type === "xp") {
    state.log = [`Draft-XP: ${reward.amount} Karriere-XP erhalten.`, ...state.log].slice(0, 8);
  } else if (reward.type === "card") {
    const card = drawGameCard(reward.classIndex, reward.classIndex, "mixed");
    if (!card) {
      state.log = ["Missions-Kartenbelohnung konnte nicht erstellt werden: kein Kartenkatalog vorhanden.", ...state.log].slice(0, 8);
      return;
    }
    state.deck.push(card);
    recordGameEvent("card_received", { id: `mission-card-${card.id}`, count: 1 });
  } else {
    state.log = [`Material erhalten: ${reward.amount} ${reward.material}.`, ...state.log].slice(0, 8);
  }
}

function missionProgressPercent(mission) {
  return clamp(Math.round((mission.currentProgress / Math.max(1, mission.targetValue)) * 100), 0, 100);
}

function missionProgressLabel(mission) {
  return `${mission.currentProgress}/${mission.targetValue}`;
}

function rewardLabel(reward) {
  if (reward.type === "coins") return `${reward.amount} Coins`;
  if (reward.type === "gems") return `${reward.amount} Diamanten`;
  if (reward.type === "freePack") return `${reward.amount} Gratis-Pack`;
  if (reward.type === "card") return `${classLabel(reward.classIndex)} Karte`;
  if (reward.type === "tierCard") return `${classLabel(reward.classIndex)} Stufenkarte`;
  return `${reward.amount} Material`;
}

function formatRoundDiff(value) {
  return `${value > 0 ? "+" : ""}${value}`;
}

function formatDateShort(value) {
  if (!value) return "-";
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
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

function deckSystemHelpers() {
  return {
    rating,
    cardCategory: (card) => cardCategory(card),
    normalizePosition: (position) => CARD_SYSTEM?.normalizePosition ? CARD_SYSTEM.normalizePosition(position) : normalizeCardPosition(position),
  };
}

function createStarterActiveDeck(cards) {
  return DECK_SYSTEM?.autoCompleteDeck
    ? DECK_SYSTEM.autoCompleteDeck(cards, DEFAULT_FORMATION, deckSystemHelpers())
    : {
      id: "main-deck",
      name: "Hauptdeck",
      formationId: DEFAULT_FORMATION,
      activeSlots: {},
      bench: cards.slice(MATCH_ACTIVE_COUNT, MATCH_CARD_COUNT).map((card) => card.id),
      strength: 0,
      validation: { isValid: false, errors: [] },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    };
}

function normalizeActiveDeckState(savedDeck, ownedCards, selectedIds, formationKey) {
  const fromSelected = selectedIdsToDeck(selectedIds, ownedCards, formationKey);
  const source = savedDeck && typeof savedDeck === "object" ? savedDeck : fromSelected;
  return DECK_SYSTEM?.normalizeDeck
    ? DECK_SYSTEM.normalizeDeck(source, ownedCards, deckSystemHelpers())
    : fromSelected;
}

function selectedIdsToDeck(selectedIds, ownedCards, formationKey = DEFAULT_FORMATION) {
  const formationId = normalizeFormationKey(formationKey);
  const deck = DECK_SYSTEM?.createEmptyDeck ? DECK_SYSTEM.createEmptyDeck("Hauptdeck", formationId) : createStarterActiveDeck(ownedCards);
  const formation = FORMATIONS[formationId] || FORMATIONS[DEFAULT_FORMATION];
  const ids = (Array.isArray(selectedIds) ? selectedIds : []).filter((id) => ownedCards.some((card) => card.id === id));
  const used = new Set();
  (formation.slots || []).forEach((slot, index) => {
    const id = ids[index] || "";
    if (id && !used.has(id)) {
      deck.activeSlots[slot.id] = id;
      used.add(id);
    }
  });
  deck.bench = Array.from({ length: MATCH_SUBSTITUTE_COUNT }, (_, index) => {
    const id = ids[MATCH_ACTIVE_COUNT + index] || "";
    if (id && !used.has(id)) {
      used.add(id);
      return id;
    }
    return "";
  });
  return deck;
}

function deckIds(deck) {
  if (!deck || typeof deck !== "object") return [];
  const formation = FORMATIONS[normalizeFormationKey(deck.formationId || deck.formation)] || FORMATIONS[DEFAULT_FORMATION];
  const active = (formation.slots || []).map((slot) => deck.activeSlots?.[slot.id]).filter(Boolean);
  const bench = Array.isArray(deck.bench) ? deck.bench.filter(Boolean) : [];
  return [...active, ...bench];
}

function syncActiveDeckSelection() {
  state.activeDeck = DECK_SYSTEM?.normalizeDeck
    ? DECK_SYSTEM.normalizeDeck(state.activeDeck, state.deck, deckSystemHelpers())
    : state.activeDeck;
  state.formation = normalizeFormationKey(state.activeDeck.formationId);
  state.selected = deckIds(state.activeDeck);
  state.savedDecks = [state.activeDeck];
}

function normalizeFormationKey(key) {
  const normalized = DECK_SYSTEM?.normalizeFormationId ? DECK_SYSTEM.normalizeFormationId(key) : key;
  return FORMATIONS[normalized] ? normalized : DEFAULT_FORMATION;
}

function normalizeCpuDifficulty(value) {
  return CPU_DIFFICULTIES[value] ? value : "normal";
}

function normalizeFieldTheme(value) {
  return FIELD_THEMES.includes(value) ? value : "stadium";
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
  const activeStatuses = ["preparing", "active", "resolving_round", "awaiting_selection", "round_complete"];
  const completedStatuses = ["completed", "match_complete"];
  const storedStatus = [...activeStatuses, ...completedStatuses, "aborted", "failed"].includes(match.status) ? match.status : "aborted";
  const manualActive = match.manualPlayerSelection && ["awaiting_selection", "round_complete"].includes(storedStatus);
  const status = manualActive ? storedStatus : activeStatuses.includes(storedStatus) ? "aborted" : completedStatuses.includes(storedStatus) ? "match_complete" : storedStatus;
  return {
    id: String(match.id),
    date: match.date || new Date().toISOString(),
    playerId: match.playerId || "local-player",
    startedAt: match.startedAt || match.date || new Date().toISOString(),
    endedAt: match.endedAt || "",
    status,
    manualPlayerSelection: Boolean(match.manualPlayerSelection),
    autoResolveMatch: match.autoResolveMatch === true,
    mode: match.mode || "cpu",
    playerDeck: Array.isArray(match.playerDeck) ? match.playerDeck.slice(0, MATCH_CARD_COUNT) : [],
    cpuDeck: Array.isArray(match.cpuDeck) ? match.cpuDeck.slice(0, MATCH_CARD_COUNT) : [],
    cpuCards: Array.isArray(match.cpuCards) ? match.cpuCards.map(normalizeCard).slice(0, MATCH_CARD_COUNT) : [],
    situationIds: Array.isArray(match.situationIds) ? match.situationIds.slice(0, MATCH_ROUNDS) : [],
    pendingPlayerCardId: match.pendingPlayerCardId || "",
    playerSubstitutes: Array.isArray(match.playerSubstitutes) ? match.playerSubstitutes.slice(0, MATCH_SUBSTITUTE_COUNT) : [],
    cpuSubstitutes: Array.isArray(match.cpuSubstitutes) ? match.cpuSubstitutes.slice(0, MATCH_SUBSTITUTE_COUNT) : [],
    cpu: {
      name: match.cpu?.name || "CPU",
      power: Math.max(1, Number(match.cpu?.power) || 1),
      classIndex: normalizeClassIndex(match.cpu?.classIndex),
      leagueIndex: clamp(Number(match.cpu?.leagueIndex) || 0, 0, leagues.length - 1),
    },
    difficulty: normalizeCpuDifficulty(match.difficulty),
    formation: normalizeFormationKey(match.formation),
    playerFormation: normalizeFormationKey(match.playerFormation || match.formation),
    cpuFormation: normalizeFormationKey(match.cpuFormation || match.formation),
    currentRound: clamp(Number(match.currentRound) || (Array.isArray(match.rounds) ? match.rounds.length : 0), 0, MATCH_ROUNDS),
    maxRounds: MATCH_ROUNDS,
    rounds: Array.isArray(match.rounds) ? match.rounds.slice(0, MATCH_ROUNDS) : [],
    score: normalizeMatchScore(match.score),
    result: status === "aborted" ? "pending" : ["win", "loss", "draw", "pending"].includes(match.result) ? match.result : "pending",
    usedCards: Array.isArray(match.usedCards) ? match.usedCards : [],
    usedPlayerCards: Array.isArray(match.usedPlayerCards) ? match.usedPlayerCards : [],
    usedCpuCards: Array.isArray(match.usedCpuCards) ? match.usedCpuCards : [],
    aborted: status === "aborted",
    completed: status === "match_complete",
    rewarded: Boolean(match.rewarded || match.rewards?.claimed),
    rewards: normalizeMatchRewards(match.rewards),
    rewardHandoff: match.rewardHandoff || null,
    summary: match.summary || null,
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
    tier: rewards?.tier || "",
  };
}

function normalizeMatchHistory(history) {
  return Array.isArray(history) ? history.map(normalizeStoredMatch).filter(Boolean).slice(0, 20) : [];
}

function normalizePendingRewardBoard(board) {
  if (!board || typeof board !== "object" || !board.matchId) return null;
  const settings = normalizeDraftBoardSettings(board.settings || {});
  const maxSlots = clamp(Math.round(Number(board.rows || settings.rows) || 5) * Math.round(Number(board.columns || settings.columns) || 5), 4, 64);
  const slots = Array.isArray(board.slots) ? board.slots.slice(0, maxSlots).map((slot, index) => ({
    id: slot?.id || `slot-${index}`,
    index,
    revealed: Boolean(slot?.revealed),
    claimed: Boolean(slot?.claimed),
    reward: normalizeDraftReward(slot?.reward),
  })) : [];
  return {
    id: board.id || `draft-${board.matchId}`,
    matchId: String(board.matchId),
    result: ["win", "loss", "draw"].includes(board.result) ? board.result : "loss",
    selectionCount: Math.max(0, Number(board.selectionCount) || 0),
    picksRemaining: Math.max(0, Number(board.picksRemaining ?? board.selectionCount) || 0),
    rewardTier: board.rewardTier || (board.result === "win" ? "winner" : "consolation"),
    rewarded: Boolean(board.rewarded),
    status: ["ready", "prepared", "completed"].includes(board.status) ? board.status : "prepared",
    deckStage: board.deckStage || null,
    resetUnlocked: Boolean(board.resetUnlocked),
    lastMatchId: board.lastMatchId || board.matchId,
    createdAt: board.createdAt || new Date().toISOString(),
    rows: clamp(Math.round(Number(board.rows || settings.rows) || 5), 2, 8),
    columns: clamp(Math.round(Number(board.columns || settings.columns) || 5), 2, 8),
    slots,
    claimedSlots: Array.isArray(board.claimedSlots) ? board.claimedSlots : [],
    claimedRewards: Array.isArray(board.claimedRewards) ? board.claimedRewards.map(normalizeDraftReward) : [],
  };
}

function normalizeDraftReward(reward) {
  reward = reward || {};
  return {
    type: reward.type || "coins",
    amount: Math.max(0, Number(reward.amount) || 0),
    packId: reward.packId || "",
    classIndex: reward.classIndex == null ? 0 : normalizeClassIndex(reward.classIndex),
    material: reward.material || "",
    label: reward.label || rewardLabel(reward),
    slotId: reward.slotId || "",
    stageClass: reward.stageClass == null ? null : normalizeClassIndex(reward.stageClass),
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

function normalizeBoosterInventory(items) {
  return BOOSTER_SYSTEM?.normalizeInventory
    ? BOOSTER_SYSTEM.normalizeInventory(items)
    : (Array.isArray(items) ? items : []).map((item) => ({
      id: item.id || `inventory-${item.boosterId || "pack"}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      boosterId: item.boosterId || item.packId || "pack-bronze",
      source: item.source || "purchase",
      transactionId: item.transactionId || "",
      status: item.status === "opened" ? "opened" : "unopened",
      createdAt: item.createdAt || new Date().toISOString(),
      openedAt: item.openedAt || "",
      openingId: item.openingId || "",
    }));
}

function normalizeBoosterTransactions(items) {
  return BOOSTER_SYSTEM?.normalizeTransactions ? BOOSTER_SYSTEM.normalizeTransactions(items) : (Array.isArray(items) ? items : []);
}

function normalizeBoosterOpenings(items) {
  return BOOSTER_SYSTEM?.normalizeOpenings ? BOOSTER_SYSTEM.normalizeOpenings(items) : (Array.isArray(items) ? items : []);
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
    draft: [
      { active: true, type: "coins", amount: 120, chance: 38, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "gems", amount: 10, chance: 10, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "freePack", amount: 1, chance: 16, packId: "pack-bronze", classIndex: 0 },
      { active: true, type: "freePack", amount: 1, chance: 8, packId: "pack-silver", classIndex: 0 },
      { active: true, type: "card", amount: 1, chance: 18, packId: "pack-bronze", classIndex: 2 },
      { active: true, type: "card", amount: 1, chance: 8, packId: "pack-bronze", classIndex: 5 },
      { active: true, type: "tierCard", amount: 1, chance: 2, packId: "pack-gold", classIndex: 7 },
      { active: false, type: "freePack", amount: 1, chance: 0, packId: "pack-gold", classIndex: 0 },
    ],
  };
}

function normalizeRewardPools(pools) {
  return {
    ...defaultRewardPools(),
    ...(pools || {}),
    quick: normalizeQuickRewardPool(pools?.quick),
    draft: normalizeRewardPool(pools?.draft, 8),
  };
}

function normalizeQuickRewardPool(pool) {
  return normalizeRewardPool(pool, 5, defaultRewardPools().quick);
}

function normalizeRewardPool(pool, size = 5, fallback = null) {
  const fallbackRewards = fallback || defaultRewardPools().draft;
  const source = Array.isArray(pool) && pool.length ? pool : fallbackRewards;
  return Array.from({ length: size }, (_, index) => {
    const reward = source[index] || fallbackRewards[index] || fallbackRewards[0];
    return {
      active: reward.active !== false,
      type: ["coins", "gems", "xp", "freePack", "card", "tierCard"].includes(reward.type) ? reward.type : "coins",
      amount: Math.max(1, Number(reward.amount) || 1),
      chance: clamp(Number(reward.chance) || 0, 0, 100),
      packId: reward.packId || "pack-bronze",
      classIndex: normalizeClassIndex(reward.classIndex),
    };
  });
}

function defaultDraftBoardSettings() {
  return {
    enabled: true,
    rows: 5,
    columns: 5,
    picksWin: 4,
    picksDraw: 3,
    picksLoss: 2,
    resetWhenCompleted: false,
    jackpotEnabled: true,
    jackpotChance: 2,
    maxRewardTier: teamClasses.length - 1,
    leagueScaling: true,
    seasonScaling: true,
    rewardPool: normalizeRewardPool(null, 8),
  };
}

function normalizeDraftBoardSettings(settings) {
  const fresh = defaultDraftBoardSettings();
  const source = settings && typeof settings === "object" ? settings : {};
  const rows = clamp(Math.round(Number(source.rows ?? fresh.rows) || fresh.rows), 2, 8);
  const columns = clamp(Math.round(Number(source.columns ?? fresh.columns) || fresh.columns), 2, 8);
  return {
    ...fresh,
    ...source,
    enabled: source.enabled !== false,
    rows,
    columns,
    picksWin: clamp(Math.round(Number(source.picksWin ?? fresh.picksWin) || fresh.picksWin), 1, rows * columns),
    picksDraw: clamp(Math.round(Number(source.picksDraw ?? fresh.picksDraw) || fresh.picksDraw), 1, rows * columns),
    picksLoss: clamp(Math.round(Number(source.picksLoss ?? fresh.picksLoss) || fresh.picksLoss), 1, rows * columns),
    resetWhenCompleted: Boolean(source.resetWhenCompleted),
    jackpotEnabled: source.jackpotEnabled !== false,
    jackpotChance: clamp(Number(source.jackpotChance ?? fresh.jackpotChance) || 0, 0, 100),
    maxRewardTier: normalizeClassIndex(source.maxRewardTier ?? fresh.maxRewardTier),
    leagueScaling: source.leagueScaling !== false,
    seasonScaling: source.seasonScaling !== false,
    rewardPool: normalizeRewardPool(source.rewardPool || source.rewards, 8),
  };
}

function createDefaultUserData(userId, deck = [], activeDeck = null, selected = []) {
  const normalizedDeck = removeTemporaryPlayerCards(deck).map(normalizeCard);
  const normalizedActiveDeck = normalizeActiveDeckState(activeDeck, normalizedDeck, selected, DEFAULT_FORMATION);
  return {
    ownedCardInstances: normalizedDeck,
    decks: [normalizedActiveDeck],
    activeDeckId: normalizedActiveDeck.id || "main-deck",
    activeDeck: normalizedActiveDeck,
    selected: deckIds(normalizedActiveDeck).length ? deckIds(normalizedActiveDeck) : selected,
    starterPack: { status: userId === ADMIN_OWNER_ID ? "completed" : "pending", cardIds: [], startedAt: "", completedAt: "" },
    favorites: normalizedDeck.filter((card) => card.favorite).map((card) => card.instanceId || card.id),
    progression: {},
  };
}

function migrateUserDataForUsers(users, saved, migratedDeck, migratedActiveDeck, migratedSelected) {
  const existing = saved.userData && typeof saved.userData === "object" ? saved.userData : {};
  return Object.fromEntries(users.map((user) => {
    const data = existing[user.id] || user.userData || (user.id === saved.activeUserId || user.id === ADMIN_OWNER_ID ? createDefaultUserData(user.id, migratedDeck, migratedActiveDeck, migratedSelected) : createDefaultUserData(user.id, [], null, []));
    return [user.id, normalizeUserData(data, user.id)];
  }));
}

function normalizeUserData(data, userId) {
  const cards = removeTemporaryPlayerCards(Array.isArray(data?.ownedCardInstances) ? data.ownedCardInstances : Array.isArray(data?.deck) ? data.deck : [])
    .map(normalizeCard)
    .map((card) => ({ ...card, ownerUserId: userId }));
  const activeDeck = normalizeActiveDeckState(data?.activeDeck || data?.decks?.[0], cards, data?.selected || [], DEFAULT_FORMATION);
  const starter = data?.starterPack || {};
  return {
    ownedCardInstances: cards,
    decks: Array.isArray(data?.decks) && data.decks.length ? data.decks.map((deck) => normalizeActiveDeckState(deck, cards, data?.selected || [], deck?.formationId || DEFAULT_FORMATION)) : [activeDeck],
    activeDeckId: data?.activeDeckId || activeDeck.id || "main-deck",
    activeDeck,
    selected: Array.isArray(data?.selected) ? data.selected.filter(Boolean) : deckIds(activeDeck),
    starterPack: {
      status: ["pending", "opening", "completed"].includes(starter.status) ? starter.status : userId === ADMIN_OWNER_ID ? "completed" : "pending",
      cardIds: Array.isArray(starter.cardIds) ? starter.cardIds : [],
      startedAt: starter.startedAt || "",
      completedAt: starter.completedAt || "",
    },
    favorites: Array.isArray(data?.favorites) ? data.favorites : cards.filter((card) => card.favorite).map((card) => card.instanceId || card.id),
    progression: data?.progression && typeof data.progression === "object" ? data.progression : {},
  };
}

function snapshotCurrentUserData(userId = state.activeUserId) {
  if (!userId) return;
  state.userData = state.userData || {};
  state.userData[userId] = normalizeUserData({
    ownedCardInstances: state.deck,
    decks: state.savedDecks?.length ? state.savedDecks : [state.activeDeck],
    activeDeckId: state.activeDeck?.id || "main-deck",
    activeDeck: state.activeDeck,
    selected: state.selected,
    starterPack: state.userData?.[userId]?.starterPack,
    favorites: state.deck.filter((card) => card.favorite).map((card) => card.instanceId || card.id),
    progression: state.userData?.[userId]?.progression,
  }, userId);
}

function applyUserData(userId) {
  state.userData = state.userData || {};
  const data = normalizeUserData(state.userData[userId] || createDefaultUserData(userId, [], null, []), userId);
  state.userData[userId] = data;
  state.deck = data.ownedCardInstances;
  state.activeDeck = data.activeDeck;
  state.savedDecks = data.decks;
  state.selected = data.selected;
  syncActiveDeckSelection();
}

function rewardTypeLabel(type) {
  return {
    coins: "Muenzen",
    gems: "Diamanten",
    xp: "Karriere XP",
    freePack: "Gratis Pack",
    card: "Karte",
    tierCard: "Stufenkarte",
  }[type] || type;
}

function defaultCardFilters() {
  const cardDefaults = CARD_SYSTEM?.DEFAULT_FILTERS || {};
  return {
    collection: { ...cardDefaults, league: "Alle Ligen", club: "Alle Vereine", position: "Alle Positionen", series: "Alle Serien", proStatus: "Alle", fusion: "Alle", duplicates: "Alle" },
    deck: { ...cardDefaults, league: "Alle Ligen", club: "Alle Vereine", position: "Alle Positionen", owned: "Besitz", series: "Alle Serien", proStatus: "Alle", fusion: "Alle", duplicates: "Alle" },
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
    { id: "user-tester-preview", name: "LigaTester", email: "tester@liga-clash.local", role: "Tester", pin: "5555", locked: false, wallet: { coins: 0, gems: 0 } },
    { id: "user-support", name: "SupportTeam", email: "support@liga-clash.local", role: "Moderator", pin: "3333", locked: true, wallet: { coins: 0, gems: 0 } },
    { id: "user-player-test", name: "TestSpieler", email: "spieler@liga-clash.local", role: "User", pin: "4444", locked: false, wallet: { coins: 0, gems: 0 } },
  ];
}

function normalizeAdminUser(user) {
  const id = user.id || `admin-user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const ownerName = id === ADMIN_OWNER_ID ? "G\u00d6RNALDOBERLIN" : user.name;
  const role = normalizeAdminRole(user.role);
  return {
    id,
    name: ownerName || "Unbenannter Benutzer",
    email: user.email || "user@liga-clash.local",
    role,
    pin: String(user.pin || defaultPinForRole(role)),
    locked: Boolean(user.locked),
    wallet: normalizeWallet(user.wallet),
    profile: normalizeUserProfile(user.profile, { id, name: ownerName || user.name, role }),
    stats: normalizeUserStats(user.stats),
    extraPermissions: Array.isArray(user.extraPermissions) ? user.extraPermissions.filter(Boolean) : [],
    userData: user.userData || null,
  };
}

function normalizeUserProfile(profile = {}, user = {}) {
  const now = new Date().toISOString();
  const displayName = sanitizeProfileText(profile.displayName || user.name || "GoernaldoBerlin", 32) || "GoernaldoBerlin";
  const formation = normalizeFormationKey(profile.preferredFormation || DEFAULT_FORMATION);
  return {
    profileId: profile.profileId || `profile-${user.id || "local"}`,
    userId: profile.userId || user.id || "",
    displayName,
    email: normalizeEmail(profile.email || user.email || "", user.name || displayName),
    avatar: sanitizeAvatar(profile.avatar || ""),
    banner: sanitizeAvatar(profile.banner || ""),
    favoriteClub: sanitizeProfileText(profile.favoriteClub || profile.favoriteClubId || "Werder Bremen", 64),
    favoritePlayer: sanitizeProfileText(profile.favoritePlayer || "", 64),
    title: sanitizeProfileText(profile.title || profile.motto || "", 42),
    frame: ["standard", "green", "gold", "elite"].includes(profile.frame) ? profile.frame : "standard",
    favoriteClubId: profile.favoriteClubId || profile.favoriteClub || "Werder Bremen",
    favoriteNationId: profile.favoriteNationId || "Deutschland",
    bio: sanitizeProfileText(profile.bio || "", 260),
    motto: sanitizeProfileText(profile.motto || "", 72),
    language: ["de", "en"].includes(profile.language) ? profile.language : "de",
    visibility: ["private", "friends", "public"].includes(profile.visibility) ? profile.visibility : "private",
    preferences: {
      sound: profile.preferences?.sound !== false,
      music: profile.preferences?.music !== false,
      animations: profile.preferences?.animations !== false,
      notifications: profile.preferences?.notifications !== false,
    },
    preferredFormation: formation,
    createdAt: profile.createdAt || now,
    lastLoginAt: profile.lastLoginAt || profile.updatedAt || now,
    updatedAt: profile.updatedAt || now,
  };
}

function normalizeUserStats(stats = {}) {
  return {
    matchesPlayed: Math.max(0, Number(stats.matchesPlayed) || 0),
    matchesWon: Math.max(0, Number(stats.matchesWon) || 0),
    matchesLost: Math.max(0, Number(stats.matchesLost) || 0),
    packsOpened: Math.max(0, Number(stats.packsOpened) || 0),
    cardsCollected: Math.max(0, Number(stats.cardsCollected) || 0),
    cardsFused: Math.max(0, Number(stats.cardsFused) || 0),
    highestCardLevel: Math.max(1, Number(stats.highestCardLevel) || 1),
    leaguePromotions: Math.max(0, Number(stats.leaguePromotions) || 0),
  };
}

function sanitizeProfileText(value, maxLength) {
  return String(value || "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function sanitizeAvatar(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (/^(https?:|data:image\/|assets\/)/.test(text)) return text.slice(0, 240);
  return "";
}

function userDisplayName(user = activeUser()) {
  user.profile = normalizeUserProfile(user.profile, user);
  return user.profile.displayName || user.name;
}

function userAvatarMarkup(user = activeUser(), className = "admin-avatar") {
  user.profile = normalizeUserProfile(user.profile, user);
  const avatar = user.profile.avatar;
  return avatar
    ? `<img class="${className}" src="${escapeAttr(avatar)}" alt="${escapeAttr(userDisplayName(user))} Avatar" onerror="this.replaceWith(document.createTextNode('${escapeAttr(userInitials(userDisplayName(user)))}'))" />`
    : `<div class="${className}">${escapeHtml(userInitials(userDisplayName(user)))}</div>`;
}

function normalizeAdminRole(role) {
  return ADMIN_ROLES.includes(role) ? role : "User";
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
    Tester: "5555",
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
  const phaseFiveDefaults = BOOSTER_SYSTEM?.defaultBoosterConfigs ? BOOSTER_SYSTEM.defaultBoosterConfigs() : [];
  const requiredById = new Map(phaseFiveDefaults.map((pack) => [pack.id, pack]));
  return [
    requiredById.get("pack-bronze") || { id: "pack-bronze", name: "Bronze Pack", cost: 100, currency: "coins", minClass: 0, maxClass: 5, cardCount: 5, guaranteedClass: 5, description: "Guenstiges Pack mit Chance auf Bronze-Karten.", image: "assets/packs/bronze.png", tier: "bronze", pool: "mixed", active: true },
    requiredById.get("pack-silver") || { id: "pack-silver", name: "Silber Pack", cost: 250, currency: "coins", minClass: 1, maxClass: 6, cardCount: 5, guaranteedClass: 6, description: "Bessere Chance auf Silber und seltene Karten.", image: "assets/packs/silver.png", tier: "silver", pool: "mixed", active: true },
    requiredById.get("pack-gold") || { id: "pack-gold", name: "Gold Pack", cost: 600, currency: "coins", minClass: 3, maxClass: 8, cardCount: 5, guaranteedClass: 7, description: "Starker Fortschritt mit Chance auf Gold und Episch.", image: "assets/packs/gold.png", tier: "gold", pool: "mixed", active: true },
    requiredById.get("pack-elite") || { id: "pack-elite", name: "Elite Pack", cost: 40, currency: "gems", minClass: 7, maxClass: 10, cardCount: 5, guaranteedClass: 10, description: "High-End Karten bis zur Elite-Klasse.", image: "assets/packs/elite.png", tier: "elite", pool: "mixed", active: true },
    { id: "pack-bundesliga", name: "Bundesliga Pack", cost: 350, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Zieht Spieler aus der 1. Bundesliga der Maenner.", image: "assets/packs/gold.png", tier: "bundesliga", pool: "men-bundesliga", active: true },
    { id: "pack-frauen-bundesliga", name: "Frauen-Bundesliga Pack", cost: 350, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Zieht Karten aus der Google Pixel Frauen-Bundesliga.", image: "assets/packs/elite.png", tier: "women", pool: "women-bundesliga", active: true },
    { id: "pack-mixed", name: "Mixed Pack", cost: 500, currency: "coins", minClass: 3, maxClass: 8, cardCount: 3, description: "Maenner- und Frauenkarten gemeinsam in einem Pack.", image: "assets/packs/silver.png", tier: "mixed", pool: "mixed", active: true },
    { id: "pack-dfb-pokal", name: "DFB-Pokal Pack", cost: 650, currency: "coins", minClass: 3, maxClass: 9, cardCount: 3, description: "Cup-Feeling mit Karten aus allen deutschen Ligen.", image: "assets/packs/bronze.png", tier: "dfb", pool: "dfb-pokal", active: true },
    { id: "pack-totw", name: "Team of the Week Pack", cost: 25, currency: "gems", minClass: 8, maxClass: 10, cardCount: 3, description: "Formstarke Karten ab Episch mit Elite-Chance.", image: "assets/packs/gold.png", tier: "totw", pool: "totw", active: true },
    { ...(requiredById.get("pack-icon") || { id: "pack-icon", name: "Icon Pack", cost: 120, currency: "gems", minClass: 11, maxClass: 11, cardCount: 1, guaranteedClass: 11, description: "Nur Icon-Karten und die staerksten Namen im Spiel.", image: "assets/packs/elite.png", tier: "icon", pool: "icon", active: true }), purchaseLimit: 0 },
    { id: "pack-angriff", name: "Angriff Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Stuermer und Fluegelspieler.", image: "assets/packs/gold.png", tier: "gold", pool: "mixed", positions: ["ST", "MS", "LA", "RA"], active: true },
    { id: "pack-mittelfeld", name: "Mittelfeld Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer zentrale und offensive Mittelfeldspieler.", image: "assets/packs/silver.png", tier: "silver", pool: "mixed", positions: ["ZM", "DM", "OM", "CAM", "LM", "RM"], active: true },
    { id: "pack-abwehr", name: "Abwehr Pack", cost: 850, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Innenverteidiger, Aussenverteidiger und Wingbacks.", image: "assets/packs/bronze.png", tier: "bronze", pool: "mixed", positions: ["IV", "CB", "LV", "RV", "LWB", "RWB"], active: true },
    { id: "pack-torwart", name: "Torwart Pack", cost: 700, currency: "coins", minClass: 2, maxClass: 8, cardCount: 2, description: "Gezieltes Pack fuer Torhueter.", image: "assets/packs/elite.png", tier: "elite", pool: "mixed", positions: ["TW", "GK"], active: true },
  ];
}

function mergeDefaultBoosterPacks(savedPacks, deletedPackIds = []) {
  const deletedIds = new Set(Array.isArray(deletedPackIds) ? deletedPackIds.filter(Boolean) : []);
  const normalizedSaved = Array.isArray(savedPacks)
    ? savedPacks
        .filter((pack) => pack?.id && !deletedIds.has(pack.id))
        .map(normalizeBoosterPack)
    : [];
  const savedIds = new Set(normalizedSaved.map((pack) => pack.id));
  const missingDefaults = defaultBoosterPacks()
    .filter((pack) => !savedIds.has(pack.id) && !deletedIds.has(pack.id))
    .map(normalizeBoosterPack);
  return [...normalizedSaved, ...missingDefaults];
}

function loadBoosterConfigOverride() {
  try {
    const raw = localStorage.getItem(BOOSTER_CONFIG_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return {
      boosterPacks: Array.isArray(parsed.boosterPacks) ? parsed.boosterPacks : [],
      deletedBoosterPackIds: Array.isArray(parsed.deletedBoosterPackIds) ? parsed.deletedBoosterPackIds.filter(Boolean) : [],
      savedAt: parsed.savedAt || "",
    };
  } catch {
    return null;
  }
}

function saveBoosterConfig() {
  try {
    localStorage.setItem(BOOSTER_CONFIG_STORAGE_KEY, JSON.stringify({
      schemaVersion: 1,
      savedAt: new Date().toISOString(),
      boosterPacks: state.boosterPacks.map(normalizeBoosterPack),
      deletedBoosterPackIds: Array.isArray(state.deletedBoosterPackIds) ? state.deletedBoosterPackIds.filter(Boolean) : [],
    }));
    return true;
  } catch {
    setAdminStatus("Booster gespeichert, aber Browser-Speicher ist voll. Bitte grosse Uploads entfernen.");
    return false;
  }
}

function normalizeBoosterPack(pack) {
  pack = pack || {};
  const phaseFiveDefault = BOOSTER_SYSTEM?.defaultBoosterConfigs ? BOOSTER_SYSTEM.defaultBoosterConfigs().find((item) => item.id === pack.id) : null;
  const legacyIconPack = pack.name === "Icon Jagd" || (pack.id === "pack-icon" && !pack.pool && pack.name !== "Icon Pack");
  const minClass = legacyIconPack ? teamClasses.length - 1 : normalizeClassIndex(pack.minClass ?? phaseFiveDefault?.minClass);
  const maxClass = legacyIconPack ? teamClasses.length - 1 : clamp(normalizeClassIndex(pack.maxClass ?? phaseFiveDefault?.maxClass ?? minClass), minClass, teamClasses.length - 1);
  const image = pack.image || phaseFiveDefault?.image || (pack.id === "pack-elite" || pack.name === "Elite Pack" || legacyIconPack ? "assets/packs/elite.png" : "");
  const migratedName = legacyIconPack ? "Icon Pack" : pack.name || phaseFiveDefault?.name;
  const storedCount = Number(pack.cardCount);
  const cardCount = Number.isFinite(storedCount)
    ? normalizePackCardCount(storedCount)
    : normalizePackCardCount(phaseFiveDefault?.cardCount ?? defaultPackCardCount(pack.id));
  const base = {
    id: pack.id || `pack-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: migratedName || "Neuer Booster",
    cost: Math.max(0, Number(pack.cost ?? phaseFiveDefault?.cost) || 0),
    price: Math.max(0, Number(pack.price ?? pack.cost ?? phaseFiveDefault?.price ?? phaseFiveDefault?.cost) || 0),
    currency: pack.currency ? (pack.currency === "gems" ? "gems" : "coins") : phaseFiveDefault?.currency === "gems" ? "gems" : "coins",
    minClass,
    maxClass,
    cardCount,
    pool: normalizePackPool(pack.pool || poolFromLegacyPack(pack)),
    positions: normalizePackPositions(pack.positions),
    dropRates: normalizeDropRates(pack.dropRates || phaseFiveDefault?.dropRates, minClass, maxClass, pack.id),
    allowedClasses: Array.isArray(pack.allowedClasses) && pack.allowedClasses.length ? pack.allowedClasses.map(normalizeClassIndex) : Array.from({ length: maxClass - minClass + 1 }, (_, index) => minClass + index),
    guaranteedClass: pack.guaranteedClass == null || pack.guaranteedClass === "" ? phaseFiveDefault?.guaranteedClass ?? null : normalizeClassIndex(pack.guaranteedClass),
    description: pack.description || phaseFiveDefault?.description || "Boosterbeschreibung fehlt.",
    image,
    tier: pack.tier || phaseFiveDefault?.tier || packTierFromImage(image),
    startDate: pack.startDate || phaseFiveDefault?.startDate || "",
    endDate: pack.endDate || phaseFiveDefault?.endDate || "",
    purchaseLimit: pack.limitConfigured ? Math.max(0, Number(pack.purchaseLimit) || 0) : Math.max(0, Number(pack.id === "pack-icon" && Number(pack.purchaseLimit) === 1 ? 0 : pack.purchaseLimit ?? 0) || 0),
    limitConfigured: Boolean(pack.limitConfigured),
    animation: pack.animation || phaseFiveDefault?.animation || packTierFromImage(image),
    order: Math.max(0, Number(pack.order ?? phaseFiveDefault?.order) || 999),
    imageSource: pack.imageSource || (String(image).startsWith("pack-img-") ? "admin-upload" : image ? "asset" : "placeholder"),
    uploadStatus: pack.uploadStatus || "",
    updatedAt: pack.updatedAt || "",
    previousImages: Array.isArray(pack.previousImages) ? pack.previousImages.filter(Boolean).slice(0, 5) : [],
    active: pack.active !== false,
  };
  return BOOSTER_SYSTEM?.normalizeBoosterConfig ? BOOSTER_SYSTEM.normalizeBoosterConfig(base, { classCount: teamClasses.length }) : base;
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
    "pack-icon": { min: 11, max: 11 },
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
    "pack-icon": { min: 10, max: 10 },
    "pack-angriff": { min: 2, max: 7 },
    "pack-mittelfeld": { min: 2, max: 7 },
    "pack-abwehr": { min: 2, max: 7 },
    "pack-torwart": { min: 2, max: 7 },
  }[id] || null;
}

function readDropRates(row, minClass, maxClass, options = {}) {
  const values = {};
  row.querySelectorAll("[data-pack-drop-rate]").forEach((input) => {
    values[input.dataset.packDropRate] = input.value;
  });
  if (options.strict) {
    const result = {};
    teamClasses.forEach((_, index) => {
      const raw = values[index] == null ? 0 : Number(values[index]);
      result[index] = index >= minClass && index <= maxClass ? clamp(Number.isFinite(raw) ? raw : 0, 0, 100) : 0;
    });
    return result;
  }
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

function rebalanceDropRates(rates, minClass = 0, maxClass = teamClasses.length - 1, packId = "") {
  const bounded = normalizeDropRates(rates, minClass, maxClass, packId);
  const range = teamClasses.map((_, index) => index).filter((index) => index >= minClass && index <= maxClass);
  const sum = range.reduce((total, index) => total + (Number(bounded[index]) || 0), 0);
  if (sum <= 0) return defaultDropRates(minClass, maxClass, packId);
  const result = {};
  teamClasses.forEach((_, index) => {
    result[index] = range.includes(index) ? Math.round(((Number(bounded[index]) || 0) / sum) * 1000) / 10 : 0;
  });
  const adjustedSum = dropRateSum(result, minClass, maxClass);
  const last = range[range.length - 1];
  result[last] = Math.max(0, Math.round((result[last] + (100 - adjustedSum)) * 10) / 10);
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
    "pack-icon": { 11: 100 },
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
    "pack-bronze": 5,
    "pack-silver": 5,
    "pack-gold": 5,
    "pack-elite": 5,
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
  const value = String(image || "").toLowerCase();
  if (value.includes("bronze")) return "bronze";
  if (value.includes("silver") || value.includes("silber")) return "silver";
  if (value.includes("gold")) return "gold";
  if (value.includes("elite")) return "elite";
  return "elite";
}

function boosterImageOptions() {
  const uploaded = (state.adminData?.packImages || []).map((asset) => ({
    value: asset.id,
    label: `Upload: ${asset.name || asset.id}`,
  }));
  return [
    { value: "", label: "Platzhalter" },
    { value: "assets/packs/bronze.png", label: "Bronze Pack Bild" },
    { value: "assets/packs/silver.png", label: "Silber Pack Bild" },
    { value: "assets/packs/gold.png", label: "Gold Pack Bild" },
    { value: "assets/packs/elite.png", label: "Elite Pack Bild" },
    { value: "assets/packs/bundesliga.png", label: "Bundesliga Pack Bild" },
    { value: "assets/packs/frauen-bundesliga.png", label: "Frauen-Bundesliga Pack Bild" },
    { value: "assets/packs/mixed.png", label: "Mixed Pack Bild" },
    { value: "assets/packs/dfb-pokal.png", label: "DFB-Pokal Pack Bild" },
    { value: "assets/packs/totw.png", label: "Team of the Week Pack Bild" },
    { value: "assets/packs/icon.png", label: "Icon Pack Bild" },
    ...uploaded,
  ];
}

function getPackImageUrl(pack) {
  const image = typeof pack === "string" ? pack : pack?.image;
  if (!image) return "";
  const uploaded = state.adminData?.packImages?.find((asset) => asset.id === image);
  if (uploaded?.dataUrl) return uploaded.dataUrl;
  return image;
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
  if (!state.sessionLoggedOut) {
    syncActiveDeckSelection();
    syncActiveUserWallet();
  }
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
  state.fieldTheme = normalizeFieldTheme(state.fieldTheme);
  selectedFormation = state.formation;
  document.querySelectorAll(".formation-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.formation === selectedFormation);
  });
  if (els.cpuDifficulty) els.cpuDifficulty.value = state.cpuDifficulty;
  if (els.fieldTheme) els.fieldTheme.value = state.fieldTheme;
  document.querySelector(".pitch")?.setAttribute("data-field-theme", state.fieldTheme);
  renderOverlayLogo();
  const lineup = getLineup();
  const avgClass = state.deck.length ? Math.round(state.deck.reduce((sum, card) => sum + normalizeClassIndex(card.cls), 0) / state.deck.length) : normalizeClassIndex(state.teamClassIndex);
  state.teamClassIndex = Math.max(normalizeClassIndex(state.teamClassIndex), avgClass);

  els.playerLeague.textContent = leagues[state.leagueIndex];
  els.teamClass.textContent = teamClasses[state.teamClassIndex];
  els.leaguePoints.textContent = state.lp;
  els.menuCoins.textContent = formatNumber(state.coins);
  document.querySelector(".wallet .gem + strong").textContent = formatNumber(state.gems);
  renderHeaderClubCrest();
  renderProjectStatusStrip();
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
  renderFieldTeamCards(lineup);
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

function projectCompletionPercent() {
  const checks = [
    GAME_CARDS.length >= 120,
    CLUBS.length >= 56,
    state.boosterPacks.some((pack) => pack.active),
    Boolean(state.rewardPools?.draft?.length),
    Boolean(state.rewardPools?.quick?.length),
    Boolean(state.leagueSystem?.currentWeek),
    Boolean(state.missionSystem?.daily?.length),
    Boolean(state.adminData?.enabled),
    Boolean(state.adminData?.shopOffers?.length),
    state.events.some((event) => event.active),
  ];
  const base = Math.round((checks.filter(Boolean).length / checks.length) * 100);
  const validationPenalty = Math.min(18, validateAdminData().errors.length * 3);
  return clamp(base - validationPenalty, 0, 100);
}

function renderProjectStatusStrip() {
  const strip = document.querySelector(".project-status-strip");
  if (!strip) return;
  const percent = projectCompletionPercent();
  const project = state.adminData?.project || createDefaultAdminData().project;
  const missingImages = GAME_CARDS.filter((card) => resolvePlayerImage(card).fallback).length;
  strip.innerHTML = `
    <div>
      <strong>${escapeHtml(project.name || "KickOff SuperCard")}</strong>
      <span>${escapeHtml(project.status || "Alpha")} | ${GAME_CARDS.length} Karten | ${CLUBS.length} Vereine | ${missingImages} Bilder offen</span>
    </div>
    <div class="project-status-meter"><i style="--project-progress:${percent}%"></i><b>${percent}%</b></div>
  `;
  state.adminData.project.progress = percent;
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

function renderFieldTeamCards(lineup) {
  if (!els.homeFieldCards || !els.awayFieldCards) return;
  const homeCards = [lineup.keeper, ...(lineup.defense || []), ...(lineup.mid || []), ...(lineup.attack || [])].filter(Boolean).slice(0, MATCH_CARD_COUNT);
  const match = state.activeMatch;
  const revealedCpuIds = new Set((match?.rounds || []).map((round) => round.cpu?.cardId).filter(Boolean));
  const cpuCards = Array.isArray(match?.cpuCards) ? match.cpuCards.filter((card) => revealedCpuIds.has(card.id)).slice(0, MATCH_CARD_COUNT) : [];
  const hiddenCpuCount = match?.cpuCards?.length ? Math.max(0, MATCH_CARD_COUNT - cpuCards.length) : 0;
  els.homeFieldCards.innerHTML = homeCards.length
    ? homeCards.map((card) => fieldTeamCardChip(card, "home")).join("")
    : `<span class="field-team-empty">Deck leer</span>`;
  els.awayFieldCards.innerHTML = cpuCards.length
    ? `${cpuCards.map((card) => fieldTeamCardChip(card, "away")).join("")}${hiddenCpuCount ? hiddenCpuCards(hiddenCpuCount) : ""}`
    : hiddenCpuCount ? hiddenCpuCards(Math.min(MATCH_CARD_COUNT, hiddenCpuCount)) : `<span class="field-team-empty">CPU bereit</span>`;
}

function hiddenCpuCards(count) {
  return Array.from({ length: count }, (_, index) => `<span class="field-team-card away is-hidden-card"><b>?</b><em>G${index + 1}</em></span>`).join("");
}

function fieldTeamCardChip(card, side) {
  const club = getClub(card.club);
  return `
    <span class="field-team-card ${side}" title="${escapeAttr(safeCardName(card))}">
      <img src="${escapeAttr(club.crest)}" alt="" />
      <b>${rating(card)}</b>
      <em>${escapeHtml(card.pos)}</em>
    </span>
  `;
}

function currentGameLogo() {
  const configured = String(state.adminData?.design?.logo || "").trim();
  return resolveAdminAssetUrl(configured) || "assets/branding/logo.png";
}

function renderOverlayLogo() {
  const logo = document.querySelector(".overlay-logo");
  if (!logo) return;
  const src = currentGameLogo();
  if (src) {
    logo.classList.add("has-image-logo");
    logo.innerHTML = `
      <img src="${escapeAttr(src)}" alt="KickOff SuperCard Logo" />
      <span>${escapeHtml(state.adminData?.design?.slogan || "Football Card Game")}</span>
    `;
    return;
  }
  logo.classList.remove("has-image-logo");
}

function renderDeck() {
  els.deckGrid.innerHTML = "";
  state.deck.forEach((card) => {
    const node = createCard(card, false);
    node.classList.toggle("selected", state.selected.includes(card.id));
    node.classList.toggle("used-in-match", Boolean(state.activeMatch?.usedPlayerCards?.includes(card.id)));
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
  if (match.status === "failed") return "Match fehlgeschlagen";
  if (!["completed", "match_complete"].includes(match.status)) return "Match laeuft";
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
    if (match?.status === "awaiting_selection") {
      renderManualRoundSelection(match);
    } else {
      els.battleBoard.innerHTML = `
        <p class="muted">Starte ein Match, um Runde fuer Runde selbst Karten auszuwaehlen.</p>
      `;
    }
    return;
  }
  if (match.status === "awaiting_selection") {
    renderManualRoundSelection(match);
    return;
  }
  els.roundTag.textContent = `Runde ${match.currentRound || match.rounds.length}/${match.maxRounds || MATCH_ROUNDS}`;
  const actionHtml = match.status === "round_complete"
    ? `<button class="primary-button" type="button" data-battle-action="next-round">Naechste Runde</button>`
    : match.status === "match_complete"
      ? `<button class="primary-button" type="button" data-battle-action="open-draft">Draft-Board oeffnen</button>`
      : "";
  els.battleBoard.innerHTML = `
    ${match.rounds.map((round) => `
    <article class="battle-round ${round.winner === "player" ? "won" : "lost"}">
      <header>
        <strong>Runde ${round.round}</strong>
        <span>${escapeHtml(round.category)}</span>
      </header>
      <h3>${escapeHtml(round.situation)}</h3>
      <p>${escapeHtml(round.call)}</p>
      <p class="battle-explain">${escapeHtml(round.explanation || "")}</p>
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
    `).join("")}
    <div class="manual-round-actions">${actionHtml}</div>
  `;
}

function renderManualRoundSelection(match) {
  const situation = situationById(match.situationIds?.[match.currentRound - 1]) || matchSituations[0];
  const options = manualRoundOptions(match);
  els.roundTag.textContent = `Runde ${match.currentRound}/${match.maxRounds || MATCH_ROUNDS}`;
  els.battleBoard.innerHTML = `
    <article class="battle-round manual-pick">
      <header>
        <strong>Runde ${match.currentRound}</strong>
        <span>${escapeHtml(situation.category)}</span>
      </header>
      <h3>${escapeHtml(situation.label)}</h3>
      <p>${escapeHtml(situation.call)}</p>
      <p class="battle-explain">${escapeHtml(situation.description || "Waehle eine verfuegbare Karte. Passende Positionen sind hervorgehoben.")}</p>
      <div class="manual-card-grid">
        ${options.map((option) => manualCardChoice(option, match.pendingPlayerCardId === option.card.id)).join("")}
      </div>
      ${!options.some((option) => option.preferred && !option.used) ? `<p class="fallback-note">Keine perfekte Karte mehr frei. Fallback ist erlaubt, aber der Positionsmalus wird in der Berechnung sichtbar.</p>` : ""}
      <div class="manual-round-actions">
        <button class="primary-button" type="button" data-battle-action="confirm-card" ${match.pendingPlayerCardId ? "" : "disabled"}>Auswahl bestaetigen</button>
      </div>
    </article>
  `;
}

function manualCardChoice(option, selected) {
  const card = option.card;
  const disabled = option.disabled;
  return `
    <button type="button" class="manual-card-choice ${selected ? "selected" : ""} ${option.preferred ? "preferred" : ""} ${option.fallback ? "fallback" : ""} ${option.used ? "used" : ""}" data-battle-action="select-card" data-card="${escapeAttr(card.id)}" ${disabled ? "disabled" : ""}>
      ${renderCardPhoto(card, "manual-card-photo")}
      <span>${escapeHtml(card.pos)} | ${escapeHtml(cardCategory(card))}</span>
      <strong>${escapeHtml(card.name)}</strong>
      <em>OVR ${rating(card)} | Wert ${option.power} | Lvl ${cardLevel(card)} | ${proStars(card)} Stern(e)</em>
      <small>${option.used ? "Bereits verwendet" : option.preferred ? "Passende Karte" : option.fallback ? `Fallback: ${option.fit.label}` : "Gesperrt: passende Karte verfuegbar"}</small>
    </button>
  `;
}

function battleSide(label, data, won) {
  const card = findBattleCard(data.cardId, label === "CPU");
  return `
    <div class="battle-side ${won ? "winner" : ""}">
      <span>${label}</span>
      ${card ? battleMiniCard(card) : ""}
      <strong>${escapeHtml(data.name)}</strong>
      <em>${escapeHtml(data.pos)} | ${escapeHtml(data.positionText)}</em>
    </div>
  `;
}

function findBattleCard(cardId, cpu = false) {
  const match = state.activeMatch;
  if (!cardId || !match) return null;
  if (cpu) return (match.cpuCards || []).find((card) => card.id === cardId) || null;
  return state.deck.find((card) => card.id === cardId) || null;
}

function battleMiniCard(card) {
  return `
    <div class="battle-mini-card card-tier-${normalizeClassIndex(card.cls)}">
      ${renderCardPhoto(card, "battle-mini-photo")}
      <b>${rating(card)}</b>
      <small>${escapeHtml(card.pos)}</small>
      <strong>${escapeHtml(safeCardName(card))}</strong>
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
  const resultLabel = match.status === "aborted" ? "Abgebrochen" : match.result === "win" ? "Sieg" : match.result === "loss" ? "Niederlage" : "Offen";
  const summary = match.summary || summarizeMatch(match);
  els.matchSummary.innerHTML = `
    <div class="panel-title"><h2>Matchabschluss</h2><span>${resultLabel}</span></div>
    <div class="summary-score"><strong>${match.score.player}:${match.score.cpu}</strong><em>${escapeHtml(match.cpu.name)}</em></div>
    <p>${rewardBoardText(match)} fuer das spaetere 5x5-Belohnungsboard vorbereitet.</p>
    <div class="summary-grid">
      <span>Staerkste Karte: <b>${escapeHtml(summary.bestPlayerCard || "-")}</b></span>
      <span>Staerkste CPU: <b>${escapeHtml(summary.bestCpuCard || "-")}</b></span>
      <span>Knappste Runde: <b>${escapeHtml(summary.closestRound || "-")}</b></span>
      <span>Deutlichste Runde: <b>${escapeHtml(summary.biggestRound || "-")}</b></span>
      <span>Effektivwerte: <b>${summary.playerTotal}:${summary.cpuTotal}</b></span>
      <span>Dauer: <b>${escapeHtml(summary.durationText || "-")}</b></span>
    </div>
    <p class="muted">Match-ID: ${escapeHtml(match.id)}</p>
  `;
}

function benchChip(card) {
  return `<span>${escapeHtml(card.pos)} ${escapeHtml(card.name)}</span>`;
}

function renderLeague() {
  ensurePhase8Systems();
  const league = currentLeagueConfig();
  const rows = leagueTableRows();
  els.leagueBody.innerHTML = "";
  rows.slice(0, league.participantCount).forEach((row) => {
    const status = row.rank <= league.promotionPlaces ? "Aufstieg" : league.relegationPlaces && row.rank > league.participantCount - league.relegationPlaces ? "Abstieg" : "Bleibt";
    const statusClass = status === "Aufstieg" ? "status-up" : status === "Abstieg" ? "status-down" : "status-stay";
    const tr = document.createElement("tr");
    if (row.player) tr.classList.add("player-row");
    tr.innerHTML = `
      <td>${row.rank}</td>
      <td>${escapeHtml(row.displayName)}</td>
      <td>${row.points}</td>
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
  return buildFormationLineup(activeDeckMatchCards(), selectedFormation).lineup;
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
  if (state.activeMatch && ["awaiting_selection", "round_complete"].includes(state.activeMatch.status)) {
    render();
    return;
  }
  startManualMatch("league");
}

function startManualMatch(mode = "league") {
  const prepared = prepareMatch("league");
  if (!prepared.ok) {
    state.log = [prepared.message, ...state.log].slice(0, 8);
    render();
    return;
  }
  const startedAt = new Date().toISOString();
  const situations = drawMatchSituations(MATCH_ROUNDS);
  state.homeScore = 0;
  state.awayScore = 0;
  state.activeMatch = {
    id: `match-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    playerId: state.activeUserId,
    date: startedAt,
    startedAt,
    endedAt: "",
    status: "awaiting_selection",
    manualPlayerSelection: true,
    autoResolveMatch: false,
    mode,
    difficulty: prepared.difficulty,
    formation: prepared.formation,
    playerFormation: prepared.formation,
    cpuFormation: prepared.formation,
    currentRound: 1,
    maxRounds: MATCH_ROUNDS,
    situationIds: situations.map((situation) => situation.id),
    pendingPlayerCardId: "",
    playerDeck: prepared.playerDeck.map((card) => card.id),
    cpuDeck: prepared.cpuDeck.map((card) => card.id),
    cpuCards: prepared.cpuDeck.map((card) => ({ ...card })),
    playerSubstitutes: (prepared.playerSubstitutes || []).map((card) => card.id),
    cpuSubstitutes: (prepared.cpuSubstitutes || []).map((card) => card.id),
    cpu: { name: prepared.cpu.name, power: prepared.cpu.power, classIndex: prepared.cpu.classIndex, leagueIndex: prepared.cpu.leagueIndex },
    score: { player: 0, cpu: 0 },
    rounds: [],
    usedCards: [],
    usedPlayerCards: [],
    usedCpuCards: [],
    result: "pending",
    aborted: false,
    completed: false,
    rewarded: false,
    rewards: { selectionCount: 0, prepared: false, claimed: false },
    rewardHandoff: null,
    summary: null,
  };
  state.log = [`Match gestartet: Runde 1 wartet auf deine Kartenauswahl.`, ...state.log].slice(0, 8);
  saveState();
  render();
}

function handleBattleBoardClick(event) {
  const target = event.target.closest("[data-battle-action]");
  if (!target) return;
  const action = target.dataset.battleAction;
  if (action === "select-card") {
    selectManualMatchCard(target.dataset.card);
  } else if (action === "confirm-card") {
    resolveManualRound();
  } else if (action === "next-round") {
    advanceManualRound();
  } else if (action === "open-draft") {
    openFeature("draft");
  }
}

function selectManualMatchCard(cardId) {
  const match = state.activeMatch;
  if (!match || match.status !== "awaiting_selection") return;
  const options = manualRoundOptions(match);
  const option = options.find((item) => item.card.id === cardId);
  if (!option || option.disabled) {
    showToast("Diese Karte ist fuer die aktuelle Runde nicht verfuegbar.", "warning");
    return;
  }
  match.pendingPlayerCardId = cardId;
  state.log = [`${option.card.name} fuer Runde ${match.currentRound} ausgewaehlt.`, ...state.log].slice(0, 8);
  saveState();
  render();
}

function resolveManualRound() {
  const match = state.activeMatch;
  if (!match || match.status !== "awaiting_selection" || !match.pendingPlayerCardId) return;
  match.status = "resolving_round";
  const round = createManualRoundResult(match, match.pendingPlayerCardId);
  if (!round) {
    match.status = "awaiting_selection";
    showToast("Runde konnte nicht ausgewertet werden.", "error");
    return;
  }
  if (round.winner === "player") match.score.player += 1;
  if (round.winner === "cpu") match.score.cpu += 1;
  match.rounds.push(round);
  match.usedPlayerCards.push(round.player.cardId);
  match.usedCpuCards.push(round.cpu.cardId);
  match.usedCards.push(round.player.cardId, round.cpu.cardId);
  match.pendingPlayerCardId = "";
  match.status = match.rounds.length >= MATCH_ROUNDS ? "match_complete" : "round_complete";
  if (match.status === "match_complete") {
    finishManualMatch(match);
  } else {
    state.log = [roundLogLine(round), `Klicke Naechste Runde fuer Runde ${match.currentRound + 1}.`, ...state.log].slice(0, 8);
  }
  saveState();
  render();
}

function advanceManualRound() {
  const match = state.activeMatch;
  if (!match || match.status !== "round_complete") return;
  match.currentRound = Math.min(MATCH_ROUNDS, match.currentRound + 1);
  match.status = "awaiting_selection";
  match.pendingPlayerCardId = "";
  state.log = [`Runde ${match.currentRound}: Situation anzeigen, Karte waehlen.`, ...state.log].slice(0, 8);
  saveState();
  render();
}

function createManualRoundResult(match, playerCardId) {
  const playerCards = match.playerDeck.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  const cpuCards = Array.isArray(match.cpuCards) ? match.cpuCards.map(normalizeCard) : [];
  const playerLineup = buildFormationLineup(playerCards, match.formation).lineup;
  const cpuLineup = buildFormationLineup(cpuCards, match.formation).lineup;
  const situation = situationById(match.situationIds?.[match.currentRound - 1]) || drawMatchSituations(1)[0];
  const playerCard = playerCards.find((card) => card.id === playerCardId);
  if (!playerCard) return null;
  const cpuUsed = new Set(match.usedCpuCards || []);
  const cpuCard = chooseBattleCard(cpuLineup, situation, cpuUsed, { isCpu: true, difficulty: CPU_DIFFICULTIES[match.difficulty] });
  const playerCalc = calculateRoundValue(playerCard, situation, selectedTactic, "player", CPU_DIFFICULTIES[match.difficulty]);
  const cpuCalc = calculateRoundValue(cpuCard, situation, situation.tactic, "cpu", CPU_DIFFICULTIES[match.difficulty]);
  const winner = determineRoundWinner(playerCalc, cpuCalc);
  return {
    round: match.currentRound,
    scenarioId: situation.id,
    situation: situation.label,
    description: situation.description || situation.call,
    category: situation.category,
    call: situation.call,
    winner,
    player: { cardId: playerCard.id, name: playerCard.name, pos: playerCard.pos, ...playerCalc },
    cpu: { cardId: cpuCard.id, name: cpuCard.name, pos: cpuCard.pos, ...cpuCalc },
    margin: Math.abs(playerCalc.total - cpuCalc.total),
    explanation: roundExplanation(winner, playerCalc, cpuCalc),
  };
}

function finishManualMatch(match) {
  match.result = match.score.player > match.score.cpu ? "win" : match.score.player < match.score.cpu ? "loss" : "draw";
  match.endedAt = new Date().toISOString();
  match.completed = true;
  match.summary = summarizeMatch(match);
  match.rewards = {
    selectionCount: rewardSelectionsForResult(match.result),
    prepared: true,
    claimed: false,
    tier: match.result === "win" ? "winner" : "consolation",
  };
  const fromCoins = state.coins;
  const points = match.result === "win" ? 25 : match.result === "draw" ? 10 : 5;
  const coins = match.result === "win" ? 45 : match.result === "draw" ? 25 : 15;
  state.record[match.result] += 1;
  state.lp += points;
  state.coins += coins;
  state.homeScore = match.score.player;
  state.awayScore = match.score.cpu;
  state.matchHistory = [match, ...state.matchHistory].slice(0, 20);
  state.pendingRewardBoard = createDraftBoard(match);
  match.rewardHandoff = state.pendingRewardBoard;
  recordGameEvent("match_completed", { id: match.id });
  if (match.result === "win") recordGameEvent("match_won", { id: `match-win-${match.id}` });
  recordGameEvent("round_won", { id: `rounds-${match.id}`, count: match.score.player });
  completeLeagueMatch(match);
  state.log = [`${match.score.player}:${match.score.cpu} gegen ${match.cpu.name}. Draft-Board mit ${match.rewards.selectionCount} Picks bereit.`, ...match.rounds.map(roundLogLine), ...state.log].slice(0, 8);
  currentOpponent = createOpponent();
  animateCoinChange(fromCoins, state.coins, els.playMatch);
  setTimeout(() => openFeature("draft"), 120);
}

function situationById(id) {
  return matchSituations.find((situation) => situation.id === id) || null;
}

function manualRoundOptions(match) {
  const playerCards = match.playerDeck.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  const lineup = buildFormationLineup(playerCards, match.formation).lineup;
  const situation = situationById(match.situationIds?.[match.currentRound - 1]) || matchSituations[0];
  const preferred = new Set(situationLineupCards(lineup, situation).map((card) => card.id));
  const unused = playerCards.filter((card) => !(match.usedPlayerCards || []).includes(card.id));
  const hasPreferredUnused = unused.some((card) => preferred.has(card.id));
  return playerCards.map((card) => {
    const used = (match.usedPlayerCards || []).includes(card.id);
    const preferredForRound = preferred.has(card.id);
    return {
      card,
      used,
      preferred: preferredForRound,
      fallback: !preferredForRound && !hasPreferredUnused,
      disabled: used || (!preferredForRound && hasPreferredUnused),
      power: situationPower(card, situation),
      fit: positionFit(card, preferredRoleForSituation(situation, "player")),
    };
  });
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
  recordGameEvent("match_completed", { id: match.id });
  if (match.result === "win") recordGameEvent("match_won", { id: `match-win-${match.id}` });
  recordGameEvent("round_won", { id: `rounds-${match.id}`, count: match.score.player });
  recordGameEvent("reward_board_completed", { id: `reward-board-${match.id}` });
  if (rewards.lp) completeLeagueMatch(match);
  state.log = [`${match.score.player}:${match.score.cpu} gegen ${match.cpu.name}. ${rewardBoardText(match)} vorbereitet.`, ...match.rounds.map(roundLogLine), ...state.log].slice(0, 8);
  currentOpponent = createOpponent();
  render();
  animateCoinChange(fromCoins, state.coins, els.playMatch);
}

function lineupCards(lineup) {
  return [lineup.keeper, ...lineup.defense, ...lineup.mid, ...lineup.attack].filter(Boolean);
}

function prepareMatch(mode = "league") {
  const playerDeck = activeDeckMatchCards();
  const playerCheck = validateMatchDeck(playerDeck, state.formation, state.activeDeck, state.deck);
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
    playerActiveDeck: playerCheck.deck,
    playerSubstitutes: playerCheck.substitutes,
    cpu: currentOpponent,
    cpuDeck,
    cpuLineup: cpuCheck.lineup,
    cpuActiveDeck: cpuCheck.deck,
    cpuSubstitutes: cpuCheck.substitutes,
  };
}

function activeDeckMatchCards() {
  const ids = deckIds(state.activeDeck);
  const cards = ids.map((id) => state.deck.find((card) => card.id === id)).filter(Boolean);
  return cards.length ? cards.slice(0, MATCH_CARD_COUNT) : activeMatchCards();
}

function validateMatchDeck(cards, formationKey = DEFAULT_FORMATION, deckObject = null, ownedCards = cards) {
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
  let centralDeck = null;
  let centralValidation = null;
  if (DECK_SYSTEM?.validateDeck) {
    centralDeck = deckObject || DECK_SYSTEM.autoCompleteDeck(cleanCards, formationKey, deckSystemHelpers());
    centralValidation = DECK_SYSTEM.validateDeck(centralDeck, ownedCards, deckSystemHelpers());
    if (!centralValidation.isValid) errors.push(...centralValidation.errors);
  }
  const built = buildFormationLineup(cleanCards, formationKey);
  errors.push(...built.errors);
  return {
    ok: !errors.length,
    errors: [...new Set(errors)],
    lineup: built.lineup,
    active: built.active,
    substitutes: built.substitutes,
    deck: centralDeck,
    validation: centralValidation,
  };
}

function buildCpuDeck(difficultyKey, playerDeck) {
  const difficulty = CPU_DIFFICULTIES[normalizeCpuDifficulty(difficultyKey)];
  const targetClass = clamp(Math.round(playerDeck.reduce((sum, card) => sum + normalizeClassIndex(card.cls), 0) / Math.max(1, playerDeck.length)) + difficulty.classOffset, 0, teamClasses.length - 1);
  const gamePool = playableCardPool();
  const pool = gamePool
    .filter((card) => Math.abs(normalizeClassIndex(card.cls) - targetClass) <= 2)
    .sort((a, b) => rating(b) - rating(a));
  const source = pool.length ? pool : gamePool;
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
  const gamePool = playableCardPool();
  const roleSource = role === "sub"
    ? source
    : source.filter((card) => positionFit(card, role).kind !== "wrong");
  const globalRoleSource = role === "sub"
    ? gamePool
    : gamePool.filter((card) => positionFit(card, role).kind !== "wrong");
  const candidates = (roleSource.length ? roleSource : globalRoleSource).filter((card) => !usedSources.has(sourceCardId(card)));
  const fallback = source.filter((card) => !usedSources.has(sourceCardId(card)));
  const sorted = [...(candidates.length ? candidates : fallback)].sort((a, b) => rating(b) - rating(a));
  if (!sorted.length) return null;
  if (difficulty.decisionSkill < 0.7 && sorted.length > 2) return sorted[rand(0, Math.min(3, sorted.length - 1))];
  if (difficulty.decisionSkill < 1 && sorted.length > 1) return sorted[rand(0, Math.min(1, sorted.length - 1))];
  return sorted[0];
}

function runMatchEngine(prepared) {
  const startedAt = new Date().toISOString();
  const match = {
    id: `match-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    playerId: state.activeUserId,
    date: startedAt,
    startedAt,
    endedAt: "",
    status: "preparing",
    mode: prepared.mode,
    difficulty: prepared.difficulty,
    formation: prepared.formation,
    playerFormation: prepared.formation,
    cpuFormation: prepared.formation,
    currentRound: 0,
    maxRounds: MATCH_ROUNDS,
    playerDeck: prepared.playerDeck.map((card) => card.id),
    cpuDeck: prepared.cpuDeck.map((card) => card.id),
    playerSubstitutes: (prepared.playerSubstitutes || []).map((card) => card.id),
    cpuSubstitutes: (prepared.cpuSubstitutes || []).map((card) => card.id),
    cpu: { name: prepared.cpu.name, power: prepared.cpu.power, classIndex: prepared.cpu.classIndex, leagueIndex: prepared.cpu.leagueIndex },
    score: { player: 0, cpu: 0 },
    rounds: [],
    usedCards: [],
    usedPlayerCards: [],
    usedCpuCards: [],
    result: "pending",
    aborted: false,
    completed: false,
    rewarded: false,
    rewards: { selectionCount: 0, prepared: false, claimed: false },
    rewardHandoff: null,
    summary: null,
  };
  state.activeMatch = match;
  saveState();
  match.status = "active";
  const playerUsed = new Set();
  const cpuUsed = new Set();
  drawMatchSituations(MATCH_ROUNDS).forEach((situation, index) => {
    match.status = "resolving_round";
    match.currentRound = index + 1;
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
    match.usedPlayerCards.push(round.player.cardId);
    match.usedCpuCards.push(round.cpu.cardId);
    match.usedCards.push(round.player.cardId, round.cpu.cardId);
    match.status = "round_complete";
    state.activeMatch = match;
    saveState();
  });
  match.result = match.score.player > match.score.cpu ? "win" : match.score.player < match.score.cpu ? "loss" : "draw";
  match.status = "match_complete";
  match.endedAt = new Date().toISOString();
  match.completed = true;
  match.summary = summarizeMatch(match);
  match.rewards = {
    selectionCount: rewardSelectionsForResult(match.result),
    prepared: true,
    claimed: false,
    tier: match.result === "win" ? "winner" : "consolation",
  };
  match.rewardHandoff = prepareRewardBoard(match);
  state.activeMatch = match;
  saveState();
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
  const winner = determineRoundWinner(playerCalc, cpuCalc);
  return {
    round,
    scenarioId: situation.id,
    situation: situation.label,
    description: situation.description || situation.call,
    category: situation.category,
    call: situation.call,
    winner,
    player: { cardId: playerCard.id, name: playerCard.name, pos: playerCard.pos, ...playerCalc },
    cpu: { cardId: cpuCard.id, name: cpuCard.name, pos: cpuCard.pos, ...cpuCalc },
    margin: Math.abs(playerCalc.total - cpuCalc.total),
    explanation: roundExplanation(winner, playerCalc, cpuCalc),
  };
}

function determineRoundWinner(playerCalc, cpuCalc) {
  if (playerCalc.total !== cpuCalc.total) return playerCalc.total > cpuCalc.total ? "player" : "cpu";
  if (playerCalc.rawTotal !== cpuCalc.rawTotal) return playerCalc.rawTotal > cpuCalc.rawTotal ? "player" : "cpu";
  if (playerCalc.base !== cpuCalc.base) return playerCalc.base > cpuCalc.base ? "player" : "cpu";
  return playerCalc.positionModifier >= cpuCalc.positionModifier ? "player" : "cpu";
}

function roundExplanation(winner, playerCalc, cpuCalc) {
  const label = winner === "player" ? "Du gewinnst" : "CPU gewinnt";
  const tie = playerCalc.total === cpuCalc.total ? " Tie-Break: ungerundeter Wert, Grundwert und Positionsfit." : "";
  return `${label} die Runde durch ${playerCalc.total}:${cpuCalc.total}. Zufall sichtbar: ${playerCalc.random >= 0 ? "+" : ""}${playerCalc.random} / ${cpuCalc.random >= 0 ? "+" : ""}${cpuCalc.random}.${tie}`;
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
    primaryStat: situation.primaryStat || situation.stats?.[0]?.key || "",
    secondaryStat: situation.secondaryStat || situation.stats?.[1]?.key || "",
    primaryWeight: situation.primaryWeight || situation.stats?.[0]?.weight || 1,
    secondaryWeight: situation.secondaryWeight || situation.stats?.[1]?.weight || 0,
    category: situation.category,
    levelBonus,
    starBonus,
    positionModifier: fit.multiplier,
    positionText: fit.label,
    tacticBonus,
    formationBonus,
    random,
    extraModifier: cpuBonus,
    rawTotal: modifiedBase + levelBonus + starBonus + tacticBonus + formationBonus + random + cpuBonus,
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

function summarizeMatch(match) {
  const rounds = Array.isArray(match?.rounds) ? match.rounds : [];
  const playerTotal = rounds.reduce((sum, round) => sum + (Number(round.player?.total) || 0), 0);
  const cpuTotal = rounds.reduce((sum, round) => sum + (Number(round.cpu?.total) || 0), 0);
  const bestPlayer = [...rounds].sort((a, b) => (b.player?.total || 0) - (a.player?.total || 0))[0];
  const bestCpu = [...rounds].sort((a, b) => (b.cpu?.total || 0) - (a.cpu?.total || 0))[0];
  const closest = [...rounds].sort((a, b) => (a.margin ?? Math.abs((a.player?.total || 0) - (a.cpu?.total || 0))) - (b.margin ?? Math.abs((b.player?.total || 0) - (b.cpu?.total || 0))))[0];
  const biggest = [...rounds].sort((a, b) => (b.margin ?? Math.abs((b.player?.total || 0) - (b.cpu?.total || 0))) - (a.margin ?? Math.abs((a.player?.total || 0) - (a.cpu?.total || 0))))[0];
  const durationMs = match?.startedAt && match?.endedAt ? Math.max(0, new Date(match.endedAt) - new Date(match.startedAt)) : 0;
  return {
    bestPlayerCard: bestPlayer?.player?.name || "",
    bestCpuCard: bestCpu?.cpu?.name || "",
    closestRound: closest ? `R${closest.round} ${closest.player.total}:${closest.cpu.total}` : "",
    biggestRound: biggest ? `R${biggest.round} ${biggest.player.total}:${biggest.cpu.total}` : "",
    playerTotal,
    cpuTotal,
    difficulty: match?.difficulty || "normal",
    durationMs,
    durationText: durationMs ? `${Math.max(1, Math.round(durationMs / 1000))}s` : "<1s",
  };
}

function rewardSelectionsForResult(result) {
  const settings = normalizeDraftBoardSettings(state.draftBoardSettings);
  if (result === "win") return settings.picksWin;
  if (result === "loss") return settings.picksLoss;
  return settings.picksDraw;
}

function prepareRewardBoard(match) {
  const existing = state.pendingRewardBoard;
  if (existing?.matchId === match.id) return existing;
  return createDraftBoard(match);
}

function createDraftBoard(match) {
  const settings = normalizeDraftBoardSettings(state.draftBoardSettings);
  if (!settings.enabled) {
    return {
      id: `draft-${match.id}`,
      matchId: match.id,
      lastMatchId: match.id,
      result: match.result,
      selectionCount: 0,
      picksRemaining: 0,
      rewardTier: "disabled",
      rewarded: true,
      status: "completed",
      deckStage: topDeckDraftStage(),
      resetUnlocked: false,
      createdAt: new Date().toISOString(),
      slots: [],
      rows: settings.rows,
      columns: settings.columns,
      claimedSlots: [],
      claimedRewards: [],
    };
  }
  const existing = state.pendingRewardBoard;
  const selectionCount = rewardSelectionsForResult(match.result);
  const boardSize = settings.rows * settings.columns;
  if (existing && Array.isArray(existing.slots) && existing.slots.length === boardSize && !existing.resetUnlocked) {
    existing.matchId = match.id;
    existing.result = match.result;
    existing.selectionCount = selectionCount;
    existing.picksRemaining = Math.min(boardSize, Math.max(0, Number(existing.picksRemaining) || 0) + selectionCount);
    existing.rewardTier = match.result === "win" ? "winner" : "consolation";
    existing.status = "ready";
    existing.lastMatchId = match.id;
    return existing;
  }
  if (existing?.matchId === match.id && Array.isArray(existing.slots) && existing.slots.length === boardSize) return existing;
  const deckStage = topDeckDraftStage();
  const slots = Array.from({ length: boardSize }, (_, index) => createDraftRewardSlot(match, index, deckStage));
  const tierIndex = rand(0, slots.length - 1);
  if (settings.jackpotEnabled) slots[tierIndex].reward = createDraftTierCardReward(deckStage);
  return {
    id: `draft-${match.id}`,
    matchId: match.id,
    lastMatchId: match.id,
    result: match.result,
    selectionCount,
    picksRemaining: selectionCount,
    rewardTier: match.result === "win" ? "winner" : "consolation",
    rewarded: false,
    status: "ready",
    deckStage,
    resetUnlocked: false,
    createdAt: new Date().toISOString(),
    slots,
    rows: settings.rows,
    columns: settings.columns,
    claimedSlots: [],
    claimedRewards: [],
  };
}

function rewardBoardText(match) {
  return `${match.rewards.selectionCount} Belohnungsauswahlen`;
}

function createDraftRewardSlot(match, index, deckStage = topDeckDraftStage()) {
  const reward = rollDraftReward(match, deckStage);
  return { id: `slot-${index}`, index, revealed: false, claimed: false, reward };
}

function topDeckDraftStage() {
  const cards = activeDeckMatchCards().length ? activeDeckMatchCards() : state.deck.slice(0, MATCH_CARD_COUNT);
  const top = [...cards].sort((a, b) => rating(b) - rating(a)).slice(0, MATCH_ACTIVE_COUNT);
  const averageClass = top.reduce((sum, card) => sum + normalizeClassIndex(card.cls), 0) / Math.max(1, top.length);
  const averageLevel = top.reduce((sum, card) => sum + cardLevel(card), 0) / Math.max(1, top.length);
  const levelBoost = averageLevel >= 80 ? 2 : averageLevel >= 50 ? 1 : 0;
  const classIndex = clamp(Math.round(averageClass) + levelBoost, 0, teamClasses.length - 1);
  return { classIndex, label: `${teamClasses[classIndex]} Draft-Stufe`, averageLevel: Math.round(averageLevel), deckPower: Math.round(top.reduce((sum, card) => sum + rating(card), 0) / Math.max(1, top.length)) };
}

function rollDraftReward(match, deckStage = topDeckDraftStage()) {
  const settings = normalizeDraftBoardSettings(state.draftBoardSettings);
  const pool = normalizeRewardPool(settings.rewardPool || state.rewardPools?.draft, 8).filter((reward) => reward.active && reward.type !== "tierCard" && reward.chance > 0);
  const fallback = normalizeRewardPool(defaultRewardPools().draft, 8).filter((reward) => reward.active && reward.type !== "tierCard");
  const source = pool.length ? pool : fallback;
  const total = source.reduce((sum, reward) => sum + reward.chance, 0);
  let roll = Math.random() * Math.max(1, total);
  let picked = source[source.length - 1];
  for (const reward of source) {
    roll -= reward.chance;
    if (roll <= 0) {
      picked = reward;
      break;
    }
  }
  return hydrateDraftReward(picked, match, deckStage);
}

function hydrateDraftReward(reward, match, deckStage = topDeckDraftStage()) {
  const win = match.result === "win";
  const bonusClass = win ? 1 : 0;
  if (reward.type === "coins") return { ...reward, amount: Math.max(1, reward.amount + (win ? 40 : 0)), label: `${reward.amount + (win ? 40 : 0)} Credits` };
  if (reward.type === "gems") return { ...reward, label: `${reward.amount} Diamanten` };
  if (reward.type === "freePack") {
    const pack = state.boosterPacks.find((item) => item.id === reward.packId) || defaultBoosterPacks().find((item) => item.id === reward.packId);
    return { ...reward, label: `${reward.amount} Gratis ${pack?.name || "Pack"}` };
  }
  if (reward.type === "card") {
    const classIndex = clamp(Math.max(reward.classIndex, deckStage.classIndex + bonusClass - 2), 0, teamClasses.length - 1);
    return { ...reward, classIndex, label: `${teamClasses[classIndex]} Karte` };
  }
  return { ...reward, label: reward.label || rewardTypeLabel(reward.type) };
}

function createDraftTierCardReward(deckStage = topDeckDraftStage()) {
  return {
    type: "tierCard",
    amount: 1,
    classIndex: deckStage.classIndex,
    stageClass: deckStage.classIndex,
    label: `${teamClasses[deckStage.classIndex]} Stufenkarte`,
  };
}

function renderDraftBoardFeature() {
  const board = state.pendingRewardBoard;
  if (!board || !Array.isArray(board.slots) || !board.slots.length) {
    setFeature("Draft-Board", "Belohnungs-Draft", `<article class="feature-card"><h3>Kein Draft bereit</h3><p>Schliesse zuerst ein Match ab.</p></article>`);
    return;
  }
  const done = board.picksRemaining <= 0 || board.status === "completed";
  setFeature(
    "Draft-Board",
    `${board.picksRemaining} Picks | ${board.deckStage?.label || "Draft-Stufe"}`,
    `
      <section class="feature-card draft-board-shell">
        <div class="feature-section-head">
          <div>
            <h3>Belohnungs-Draft</h3>
            <p>Das Board bleibt ueber Matches bestehen. Es resettet erst, wenn du die Stufenkarte aus dem Board gezogen hast.</p>
          </div>
          <strong>${board.picksRemaining} Picks uebrig</strong>
        </div>
        <div class="pill-row">
          <span>${escapeHtml(board.deckStage?.label || "Deck-Stufe")}</span>
          <span>Top-Deck Level ${board.deckStage?.averageLevel || 1}</span>
          <span>Deckpower ${board.deckStage?.deckPower || 0}</span>
          <span>${board.resetUnlocked ? "Reset freigegeben" : "Reset gesperrt bis Stufenkarte"}</span>
        </div>
        <div class="draft-board-grid" style="--draft-columns:${Math.max(2, Number(board.columns) || 5)}">
          ${board.slots.map((slot) => draftBoardSlot(slot, done)).join("")}
        </div>
        <div class="draft-reward-log">
          ${(board.claimedRewards || []).length ? board.claimedRewards.map((reward) => `<span>${escapeHtml(reward.label)}</span>`).join("") : "<span>Noch keine Felder gewaehlt.</span>"}
        </div>
        <button class="feature-action" type="button" data-feature-action="draft-close">${done ? "Fertig" : "Spaeter weiter waehlen"}</button>
      </section>
    `
  );
}

function draftBoardSlot(slot, done) {
  const label = slot.claimed || slot.revealed ? slot.reward.label : "?";
  return `
    <button type="button" class="draft-slot ${slot.claimed ? "claimed" : ""}" data-feature-action="draft-pick" data-slot-index="${slot.index}" ${slot.claimed || done ? "disabled" : ""}>
      <strong>${escapeHtml(label)}</strong>
      <span>${slot.claimed ? "Geoeffnet" : "Verdeckt"}</span>
    </button>
  `;
}

function claimDraftPick(target) {
  const board = state.pendingRewardBoard;
  if (!board || board.status === "completed") return;
  const index = Number(target.dataset.slotIndex);
  const slot = board.slots?.[index];
  if (!slot || slot.claimed || board.picksRemaining <= 0) return;
  slot.claimed = true;
  slot.revealed = true;
  board.picksRemaining = Math.max(0, board.picksRemaining - 1);
  board.claimedSlots = [...new Set([...(board.claimedSlots || []), slot.id])];
  grantDraftReward(slot.reward);
  board.claimedRewards = [...(board.claimedRewards || []), { ...slot.reward, slotId: slot.id }];
  if (slot.reward.type === "tierCard") {
    board.resetUnlocked = true;
    board.status = "completed";
    board.rewarded = true;
  } else if (board.picksRemaining <= 0) {
    board.status = "completed";
    board.rewarded = false;
    const match = state.activeMatch?.id === board.matchId ? state.activeMatch : state.matchHistory.find((item) => item.id === board.matchId);
    if (match?.rewards) match.rewards.claimed = true;
    recordGameEvent("reward_board_completed", { id: board.id });
  }
  saveState();
  render();
  renderDraftBoardFeature();
}

function grantDraftReward(reward) {
  if (reward.type === "coins") {
    state.coins += reward.amount;
    recordGameEvent("credits_earned", { id: `draft-credit-${Date.now()}`, amount: reward.amount });
  } else if (reward.type === "gems") {
    state.gems += reward.amount;
  } else if (reward.type === "freePack") {
    grantFreePack(reward.packId, reward.amount);
  } else if (reward.type === "card") {
    const card = drawGameCard(reward.classIndex, reward.classIndex, "mixed");
    if (!card) {
      state.log = ["Draft-Kartenbelohnung konnte nicht erstellt werden: kein Kartenkatalog vorhanden.", ...state.log].slice(0, 8);
      return;
    }
    state.deck.push(card);
    recordGameEvent("card_received", { id: `draft-card-${card.id}`, count: 1 });
  } else if (reward.type === "tierCard") {
    const card = drawGameCard(reward.classIndex, reward.classIndex, "mixed");
    if (!card) {
      state.log = ["Draft-Stufenkarte konnte nicht erstellt werden: kein Kartenkatalog vorhanden.", ...state.log].slice(0, 8);
      return;
    }
    card.series = "totw";
    state.deck.push(card);
    recordGameEvent("card_received", { id: `draft-tier-card-${card.id}`, count: 1 });
    state.log = [`Draft-Stufenkarte erhalten: ${safeCardName(card)} (${teamClasses[normalizeClassIndex(card.cls)]}). Neues Board wird beim naechsten Match moeglich.`, ...state.log].slice(0, 8);
  } else {
    state.log = [`Draft-Material: ${reward.amount} ${reward.material}.`, ...state.log].slice(0, 8);
  }
}

function roundLogLine(round) {
  const result = round.winner === "player" ? "Punkt fuer dich" : "Punkt fuer CPU";
  return `Runde ${round.round}: ${round.situation}. ${round.player.name} ${round.player.total} vs ${round.cpu.name} ${round.cpu.total}. ${result}.`;
}

function openPack() {
  state.log = ["Scout-Pack ist deaktiviert: Es sind keine offiziellen Karten im Katalog vorhanden.", ...state.log].slice(0, 8);
  showToast("Keine Karten im Katalog vorhanden.", "warning");
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
  return drawGameCard(cls, cls);
}

function cardDef(id, name, pos, club, cls, atk, mid, def, photo = "", series = "standard") {
  const normalizedClass = normalizeClassIndex(cls);
  const performance = SEASON_PERFORMANCE_DATA[id] || generatedSeasonPerformance(pos, atk, mid, def);
  const baseOverall = normalizeBaseOverall(null, normalizedClass);
  const base = withClub({ id, cardId: id, playerId: id, name, pos, club, cls: normalizedClass, baseOverall, currentOverall: calculateCardOverall(baseOverall, 1, 1, 0), atk, mid, def, series: normalizeCardSeries(series), performance, stats: buildCardStats(pos, atk, mid, def, normalizedClass, performance), photo, nation: "Deutschland", flag: "DE", level: 1, stars: 1, xp: 0, status: "historical", season: "2025/26", squadStatus: "historical", isHistorical: true, isActiveSeasonCard: false, verifiedForSeason: false });
  return CARD_SYSTEM?.normalizeCardRecord ? CARD_SYSTEM.normalizeCardRecord(base, { rating: (card) => rating({ ...base, ...card }) }) : base;
}

function normalizeBundesligaSquadCard(entry) {
  if (!Array.isArray(entry)) return null;
  const [id, name, pos, club, cls = 4] = entry;
  if (!id || !name || !pos || !club) return null;
  const details = globalThis.LIGA_CLASH_2627_PLAYER_DETAILS?.[id];
  const values = defaultCardValuesForPosition(pos, cls);
  const card = markCurrentSeasonCard(cardDef(id, name, pos, club, cls, values.atk, values.mid, values.def, details?.image || details?.photo || ""));
  if (!details) return card;
  return {
    ...card,
    id: `${details.id}-base-2627`,
    playerId: details.id,
    cardId: `${details.id}-base-2627`,
    sourceId: details.id,
    firstName: details.firstName,
    lastName: details.lastName,
    name: details.displayName,
    displayName: details.displayName,
    dateOfBirth: details.dateOfBirth,
    nationality: details.nationality,
    nation: details.nationality,
    position: details.position,
    pos: details.position,
    secondaryPositions: details.secondaryPositions || [],
    shirtNumber: details.shirtNumber,
    clubId: details.clubId,
    leagueId: details.leagueId,
    squadStatus: details.squadStatus,
    squadSeason: details.squadSeason || CURRENT_SEASON,
    teamId: details.teamId || teamIdForClubName(details.clubName || club, details.gender === "female" ? "women-first" : "men-first"),
    currentClubId: details.currentClubId || details.clubId || club,
    currentLeagueId: details.currentLeagueId || details.leagueId,
    verifiedForSeason: details.verifiedForSeason !== false,
    isHistorical: false,
    isActiveSeasonCard: details.squadStatus !== "departed" && details.verifiedForSeason !== false,
    loanStatus: details.loanStatus,
    image: details.image,
    photo: details.image,
    isActive: details.isActive !== false,
    isPackable: details.isPackable !== false,
    lastVerifiedAt: details.lastVerifiedAt,
    sourceStatus: details.sourceStatus,
    cardSeries: "base",
    series: "standard",
  };
}

function markCurrentSeasonCard(card) {
  const teamType = String(card.league || "").includes("Frauen") ? "women-first" : "men-first";
  const playerId = card.playerId || sourceCardId(card);
  const currentCardId = String(card.cardId || card.id || playerId).endsWith("-base-2627")
    ? String(card.cardId || card.id || playerId)
    : `${playerId}-base-2627`;
  return {
    ...card,
    id: currentCardId,
    cardId: currentCardId,
    sourceId: playerId,
    playerId,
    season: CURRENT_SEASON,
    squadSeason: CURRENT_SEASON,
    teamId: card.teamId || teamIdForClubName(card.club, teamType),
    currentClubId: card.currentClubId || card.club,
    currentLeagueId: card.currentLeagueId || card.league,
    lastVerifiedAt: SEASON_2026_27_STATUS.lastSquadUpdate,
    dataStatus: SEASON_2026_27_STATUS.completeness,
    squadStatus: "active",
    verifiedForSeason: true,
    isHistorical: false,
    isActiveSeasonCard: true,
    isActive: true,
    isPackable: true,
  };
}

function defaultCardValuesForPosition(position, cls = 4) {
  const normalizedPosition = CARD_SYSTEM?.normalizePosition ? CARD_SYSTEM.normalizePosition(position) : String(position || "").toUpperCase();
  const classBonus = normalizeClassIndex(cls) * 3;
  const templates = {
    TW: { atk: 35, mid: 62, def: 78 },
    IV: { atk: 43, mid: 61, def: 77 },
    LV: { atk: 62, mid: 70, def: 73 },
    RV: { atk: 62, mid: 70, def: 73 },
    ZDM: { atk: 58, mid: 74, def: 76 },
    ZM: { atk: 67, mid: 77, def: 68 },
    ZOM: { atk: 75, mid: 80, def: 54 },
    LM: { atk: 74, mid: 76, def: 58 },
    RM: { atk: 74, mid: 76, def: 58 },
    LF: { atk: 80, mid: 72, def: 46 },
    RF: { atk: 80, mid: 72, def: 46 },
    ST: { atk: 82, mid: 64, def: 45 },
  };
  const base = templates[normalizedPosition] || templates.ST;
  return {
    atk: clamp(base.atk + classBonus, 30, 98),
    mid: clamp(base.mid + classBonus, 30, 98),
    def: clamp(base.def + classBonus, 30, 98),
  };
}

function cardIdentityExists(cards, card) {
  return cards.some((existing) => {
    if (existing.id === card.id) return true;
    if (card.season === CURRENT_SEASON) return false;
    return existing.name === card.name && existing.club === card.club && cardSeries(existing) === cardSeries(card);
  });
}

function applyPartOneRosterOverrides(cards) {
  const partOnePlayers = Array.isArray(globalThis.LIGA_CLASH_2627_PART1_PLAYERS) ? globalThis.LIGA_CLASH_2627_PART1_PLAYERS : [];
  if (!partOnePlayers.length) return;
  const targetClubNames = new Set(partOnePlayers.map((player) => player.clubName));
  const activePlayerIds = new Set(partOnePlayers.map((player) => player.id));
  for (const card of cards) {
    if (!targetClubNames.has(card.club) || card.season !== CURRENT_SEASON) continue;
    if (activePlayerIds.has(card.playerId) || activePlayerIds.has(card.id)) continue;
    card.currentClubId = null;
    card.squadStatus = "departed";
    card.verifiedForSeason = false;
    card.isActiveSeasonCard = false;
    card.isActive = false;
    card.isPackable = false;
    card.lastVerifiedAt = SEASON_2026_27_STATUS.lastSquadUpdate;
  }
}

function clearTemporaryPlayerCatalog(cards) {
  if (!Array.isArray(cards)) return 0;
  const removed = cards.length;
  cards.splice(0, cards.length);
  return removed;
}

function isTemporaryPlayerCard(card) {
  return Boolean(card?.isTestCard === true || card?.isPlaceholder === true);
}

function removeTemporaryPlayerCards(cards) {
  return (Array.isArray(cards) ? cards : []).filter((card) => card && typeof card === "object" && !isTemporaryPlayerCard(card));
}

function playableCardPool(cards = GAME_CARDS) {
  return currentSeasonCardPool(removeTemporaryPlayerCards(cards));
}

function cloneCardForCollection(card, prefix = "owned") {
  if (!card) return null;
  const instanceId = `${prefix}-${card.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return {
    ...card,
    photo: card.photo || "",
    sourceId: sourceCardId(card),
    id: instanceId,
    instanceId,
    ownerUserId: currentOwnerUserId(),
    obtainedAt: new Date().toISOString(),
    source: prefix,
    series: normalizeCardSeries(card.series),
    level: 1,
    xp: 0,
    stars: 1,
    locked: false,
    proStars: 0,
    proQuality: "",
  };
}

function currentOwnerUserId() {
  try {
    return state?.activeUserId || ADMIN_OWNER_ID;
  } catch {
    return ADMIN_OWNER_ID;
  }
}

function drawGameCard(minClass, maxClass, pool = "mixed", dropRates = null, positions = []) {
  const min = clamp(minClass, 0, teamClasses.length - 1);
  const max = clamp(maxClass, min, teamClasses.length - 1);
  const selectedClass = pickClassFromDropRates(normalizeDropRates(dropRates, min, max), min, max);
  const activePool = isHistoricalPackPool(pool) ? GAME_CARDS.filter(isHistoricalSeasonCard) : playableCardPool();
  const candidates = activePool.filter((card) => card.cls === selectedClass && cardMatchesPackPool(card, pool) && cardMatchesPackPositions(card, positions));
  const fallback = activePool.filter((card) => card.cls >= min && card.cls <= max && cardMatchesPackPool(card, pool) && cardMatchesPackPositions(card, positions));
  const source = candidates.length ? candidates : fallback.length ? fallback : activePool;
  return cloneCardForCollection(pick(source));
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
  if (!isHistoricalPackPool(pool) && !isCurrentSeasonCard(card)) return false;
  if (isHistoricalPackPool(pool) && !isHistoricalSeasonCard(card)) return false;
  if (pool === "men-bundesliga") return card.league === "1. Bundesliga" && (card.season !== CURRENT_SEASON || card.isPackable !== false);
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
  return card.sourceId || card.cardId || card.playerId || card.id;
}

function getFilteredClubs(league) {
  return CLUBS.filter((club) => league === "Alle Ligen" || club.league === league);
}

function getFilteredCards(league, club, player, season = CURRENT_SEASON) {
  return GAME_CARDS.filter((card) => {
    const seasonMatches = season === "all"
      || (season === CURRENT_SEASON ? isCurrentSeasonCard(card, season) : card.season === season && isHistoricalSeasonCard(card));
    const leagueMatches = league === "Alle Ligen" || card.league === league;
    const clubMatches = club === "Alle Vereine" || card.club === club;
    const playerMatches = player === "Alle Spieler" || card.id === player;
    return seasonMatches && leagueMatches && clubMatches && playerMatches;
  });
}

function cardSeasonStatusLabel(card) {
  if (isCurrentSeasonCard(card)) return "AKTUELL";
  if (isHistoricalSeasonCard(card)) return "HISTORISCH";
  if (card.season === CURRENT_SEASON && card.squadStatus === "departed") return "ABGANG";
  if (card.season === CURRENT_SEASON && card.squadStatus === "loaned-out") return "LEIHE";
  if (card.season === CURRENT_SEASON) return "NICHT FUER 2026/27 BESTAETIGT";
  return card.squadStatus || card.status || "-";
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
  const picked = [];
  for (let round = 1; round <= count; round += 1) {
    const pool = matchSituations.filter((situation) => situation.active !== false && (!Array.isArray(situation.allowedRounds) || situation.allowedRounds.includes(round)) && !picked.some((item) => item.id === situation.id));
    const source = pool.length ? pool : matchSituations.filter((situation) => situation.active !== false && !picked.some((item) => item.id === situation.id));
    if (source.length) picked.push(pick(source));
  }
  return picked.slice(0, count);
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
  settleLeagueWeek();
}

function resetLeagueRows() {
  state.leagueRows = names.map((name, index) => ({
    name,
    lp: Math.max(120, state.lp - rand(20, 120) - index * 3),
  }));
  if (state.leagueSystem) {
    const league = leagueConfigByIndex(state.leagueIndex);
    state.leagueSystem.currentLeagueId = league.id;
    state.leagueSystem.currentWeek = createLeagueWeek(league.id);
  }
}

function rating(card) {
  if (Number.isFinite(Number(card?.currentOverall))) {
    return clamp(Math.round(Number(card.currentOverall)), 20, 120);
  }
  if (Number.isFinite(Number(card?.baseOverall))) {
    return calculateCardOverall(card.baseOverall, card.level, card.stars, card.proStars);
  }
  const mainStats = statProfile(card).map((stat) => statValue(card, stat.key));
  const specialStats = SPECIAL_STATS.map((stat) => statValue(card, stat.key));
  const mainAverage = mainStats.reduce((sum, value) => sum + value, 0) / mainStats.length;
  const specialAverage = specialStats.reduce((sum, value) => sum + value, 0) / specialStats.length;
  const derivedBase = normalizeBaseOverall(Math.round(mainAverage * 0.86 + specialAverage * 0.14), card?.cls);
  return calculateCardOverall(derivedBase, card?.level, card?.stars, card?.proStars);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pick(items) {
  if (!Array.isArray(items) || !items.length) return null;
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
  return resolvePlayerImage(card).src;
}

function safeCardName(card) {
  return String(card?.name || card?.playerName || "").trim() || "Unbekannter Spieler";
}

function isApprovedImage(card, kind) {
  if (!card || card.forceSilhouette) return false;
  const type = String(card.imageType || "").toLowerCase();
  if (PLAYER_IMAGE_BLOCKED_TYPES.includes(type)) return false;
  if (card.imageApproved === false || ["rejected", "blocked", "unsuitable"].includes(card.imageStatus)) return false;
  if (kind === "manual") return Boolean(card.imageApproved || card.imageManuallyVerified || card.imageStatus === "approved");
  if (kind === "licensed") return Boolean(card.imageApproved || card.imageManuallyVerified || card.imageLicense || ["cached", "remote_allowed", "approved"].includes(card.imageStatus));
  return false;
}

function resolvePlayerImage(card) {
  if (card?.manualImagePath && isApprovedImage(card, "manual")) return { src: card.manualImagePath, source: "manual", fallback: false };
  if (card?.localImagePath && isApprovedImage(card, "licensed")) return { src: card.localImagePath, source: "licensed-cache", fallback: false };
  if (card?.imageUrl && isApprovedImage(card, "licensed")) return { src: card.imageUrl, source: "licensed-remote", fallback: false };
  if (card?.image && isApprovedImage({ ...card, imageType: card.imageType || "licensed" }, "licensed")) return { src: card.image, source: "licensed-card-image", fallback: false };
  if (card?.photo && isApprovedImage({ ...card, imageType: card.imageType || "licensed" }, "licensed")) return { src: card.photo, source: "legacy-approved", fallback: false };
  return { src: PLAYER_IMAGE_SILHOUETTE, source: "silhouette", fallback: true, reason: card?.imageFallbackReason || "Kein freigegebenes oder lizenziertes Spielerbild vorhanden." };
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
  const instanceId = card.instanceId || (String(card.id || "").startsWith("owned-") || String(card.id || "").startsWith("opening-") || String(card.id || "").startsWith("card-") ? card.id : `inst-${card.id || "card"}-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const cardSeason = normalized.season || card.season || "";
  const isHistorical = card.isHistorical === true || HISTORICAL_SEASONS.has(cardSeason);
  const verifiedForSeason = cardSeason === CURRENT_SEASON && card.verifiedForSeason === true && (card.squadStatus || normalized.squadStatus || "active") === "active" && !isHistorical;
  const placeholderPlayer = card.playerId === null || normalized.isPlaceholder === true || normalized.isTestCard === true;
  const baseOverall = normalizeBaseOverall(normalized.baseOverall ?? normalized.overall ?? normalized.rating, normalized.cls);
  const currentOverall = calculateCardOverall(baseOverall, card.currentLevel ?? card.level, card.currentStars ?? card.stars ?? 1, card.proStars);
  normalized.performance = normalized.performance || SEASON_PERFORMANCE_DATA[sourceCardId(normalized)] || generatedSeasonPerformance(normalized.pos, normalized.atk, normalized.mid, normalized.def);
  normalized.stats = buildCardStats(normalized.pos, normalized.atk, normalized.mid, normalized.def, normalized.cls, normalized.performance);
  const base = {
    ...normalized,
    cardId: normalized.cardId || sourceCardId(normalized),
    playerId: placeholderPlayer ? null : (normalized.playerId || sourceCardId(normalized)),
    baseOverall,
    currentOverall,
    nation: normalized.nation || "Deutschland",
    flag: normalized.flag || "DE",
    image: normalized.image || "",
    photo: normalized.photo || "",
    externalIds: normalized.externalIds || {},
    manualImagePath: normalized.manualImagePath || "",
    localImagePath: normalized.localImagePath || "",
    imageUrl: normalized.imageUrl || "",
    imageProvider: normalized.imageProvider || "",
    imageExternalId: normalized.imageExternalId || "",
    imageStatus: normalized.imageStatus || "placeholder",
    imageUpdatedAt: normalized.imageUpdatedAt || "",
    imageLicense: normalized.imageLicense || "",
    imageType: normalized.imageType || (normalized.imageLicense ? "licensed" : ""),
    imageApproved: normalized.imageApproved === false ? false : normalized.imageApproved === true ? true : "",
    forceSilhouette: Boolean(normalized.forceSilhouette),
    imageFallbackReason: normalized.imageFallbackReason || "",
    imageAuthor: normalized.imageAuthor || "",
    imageAttributionUrl: normalized.imageAttributionUrl || "",
    imageMatchConfidence: Number(normalized.imageMatchConfidence) || 0,
    imageManuallyVerified: Boolean(normalized.imageManuallyVerified),
    sourceId: card.sourceId || matchingGameCardId(normalized) || card.cardId || card.id,
    instanceId,
    id: instanceId,
    ownerUserId: card.ownerUserId || currentOwnerUserId(),
    obtainedAt: card.obtainedAt || "",
    source: card.source || "migration",
    locked: Boolean(card.locked),
    series: normalizeCardSeries(normalized.series),
    level: normalizeCardLevel(card.currentLevel ?? card.level),
    stars: normalizeCardStars(card.currentStars ?? card.stars ?? CARD_SYSTEM?.starsForLevel?.(normalizeCardLevel(card.level)) ?? 1),
    xp: Math.max(0, Number(card.currentXp ?? card.xp) || 0),
    totalXp: Math.max(0, Number(card.totalXp) || Number(card.xp) || 0),
    season: cardSeason,
    squadSeason: normalized.squadSeason || (cardSeason === CURRENT_SEASON ? CURRENT_SEASON : cardSeason),
    teamId: normalized.teamId || (cardSeason === CURRENT_SEASON ? teamIdForClubName(normalized.club, String(normalized.league || "").includes("Frauen") ? "women-first" : "men-first") : ""),
    currentClubId: normalized.currentClubId || (cardSeason === CURRENT_SEASON ? normalized.club : ""),
    currentLeagueId: normalized.currentLeagueId || (cardSeason === CURRENT_SEASON ? normalized.league : ""),
    squadStatus: isHistorical ? "historical" : (normalized.squadStatus || "active"),
    verifiedForSeason,
    isHistorical,
    isActiveSeasonCard: cardSeason === CURRENT_SEASON && verifiedForSeason,
    isPackable: isHistorical ? false : normalized.isPackable !== false,
    lastLeveledAt: normalized.lastLeveledAt || "",
    status: isHistorical ? "historical" : (normalized.status || "active"),
    owned: true,
    ownedCount: Math.max(1, Number(normalized.ownedCount) || 1),
    duplicateCount: Math.max(0, Number(normalized.duplicateCount) || 0),
    frame: normalized.frame || CARD_SYSTEM?.rarityByIndex?.(normalized.cls)?.id || "common",
    proStars: normalizeProStars(card.proStars),
    proQuality: normalizeProStars(card.proStars) ? normalizeProQuality(card.proQuality) : "",
  };
  return applyCardProgressFields(CARD_SYSTEM?.normalizeCardRecord ? CARD_SYSTEM.normalizeCardRecord(base, { rating }) : base);
}

function normalizeClassIndex(value) {
  return clamp(Number(value) || 0, 0, teamClasses.length - 1);
}

function rarityConfigForClass(value) {
  return CARD_CLASS_RANGES[normalizeClassIndex(value)] || CARD_CLASS_RANGES[0];
}

function baseOverallForClass(value) {
  const range = rarityConfigForClass(value);
  return Math.round((range.min + range.max) / 2);
}

function normalizeBaseOverall(value, classIndex = 0) {
  const range = rarityConfigForClass(classIndex);
  const numeric = Number.isFinite(Number(value)) ? Number(value) : baseOverallForClass(classIndex);
  return clamp(Math.round(numeric), range.min, range.max);
}

function calculateCardOverall(baseOverall, level = 1, stars = 1, proStars = 0) {
  const safeBase = Number.isFinite(Number(baseOverall)) ? Math.round(Number(baseOverall)) : 50;
  const levelBonus = Math.floor((normalizeCardLevel(level) - 1) / 10);
  const starBonus = Math.max(0, normalizeCardStars(stars) - 1) * 2;
  const proBonus = Math.max(0, normalizeProStars(proStars)) * 3;
  return clamp(safeBase + levelBonus + starBonus + proBonus, 20, 120);
}

function classRangeLabel(index) {
  const range = CARD_CLASS_RANGES[normalizeClassIndex(index)];
  return range ? `${range.min}-${range.max}` : "";
}

function classLabel(index) {
  const normalized = normalizeClassIndex(index);
  const range = classRangeLabel(normalized);
  return `${CARD_CLASS_RANGES[normalized]?.label || teamClasses[normalized]}${range ? ` (${range})` : ""}`;
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

function normalizeCardStars(stars) {
  return clamp(Math.round(Number(stars) || 1), 1, CARD_PROGRESSION.maxStars);
}

function xpForNextLevel(level) {
  const normalized = normalizeCardLevel(level);
  if (normalized >= CARD_MAX_LEVEL) return 0;
  return CARD_PROGRESSION.xpBase + (normalized - 1) * CARD_PROGRESSION.xpStep;
}

function cardStars(card) {
  card.stars = normalizeCardStars(card.currentStars ?? card.stars);
  card.currentStars = card.stars;
  return card.stars;
}

function cardLevelCap(card) {
  return CARD_PROGRESSION.starLevelCaps[cardStars(card)] || CARD_MAX_LEVEL;
}

function duplicateCardsFor(card) {
  if (!card) return [];
  const key = cardFusionBaseKey(card);
  return state.deck.filter((candidate) => (
    candidate.id !== card.id
    && cardFusionBaseKey(candidate) === key
    && !candidate.favorite
    && !candidate.locked
  ));
}

function starUpgradeInfo(card) {
  if (!card) return { canUpgrade: false, atMax: true, duplicatesRequired: 0, availableDuplicates: 0 };
  const stars = cardStars(card);
  const availableDuplicates = duplicateCardsFor(card).length;
  const duplicatesRequired = CARD_PROGRESSION.starDuplicateCosts[stars] || 0;
  return {
    canUpgrade: stars < CARD_PROGRESSION.maxStars && availableDuplicates >= duplicatesRequired,
    atMax: stars >= CARD_PROGRESSION.maxStars,
    stars,
    nextStars: Math.min(CARD_PROGRESSION.maxStars, stars + 1),
    duplicatesRequired,
    availableDuplicates,
    materialsRequired: [],
  };
}

function applyCardProgressFields(card) {
  const level = normalizeCardLevel(card.currentLevel ?? card.level);
  const stars = normalizeCardStars(card.currentStars ?? card.stars);
  card.level = level;
  card.currentLevel = level;
  card.stars = stars;
  card.currentStars = stars;
  card.maxStars = CARD_PROGRESSION.maxStars;
  card.maxLevel = CARD_MAX_LEVEL;
  card.levelCap = CARD_PROGRESSION.starLevelCaps[stars] || CARD_MAX_LEVEL;
  card.currentXp = Math.max(0, Number(card.currentXp ?? card.xp) || 0);
  card.xp = card.currentXp;
  card.totalXp = Math.max(0, Number(card.totalXp) || card.currentXp);
  card.xpToNextLevel = level >= CARD_MAX_LEVEL || level >= card.levelCap ? 0 : xpForNextLevel(level);
  card.starProgress = Math.max(0, Number(card.starProgress) || 0);
  card.duplicatesRequired = CARD_PROGRESSION.starDuplicateCosts[stars] || 0;
  card.materialsRequired = Array.isArray(card.materialsRequired) ? card.materialsRequired : [];
  return card;
}

function normalizeProStars(stars) {
  return clamp(Math.round(Number(stars) || 0), 0, PRO_MAX_STARS);
}

function cardLevel(card) {
  applyCardProgressFields(card);
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
  if (!card || card.favorite || card.locked || cardLevel(card) < CARD_MAX_LEVEL || proStars(card) >= PRO_MAX_STARS) return null;
  return state.deck.find((candidate) => (
    candidate.id !== card.id
    && cardFusionBaseKey(candidate) === cardFusionBaseKey(card)
    && cardLevel(candidate) >= CARD_MAX_LEVEL
    && !candidate.favorite
    && !candidate.locked
  )) || null;
}

function calculateCardProgression(card, level = cardLevel(card), stars = cardStars(card)) {
  const safeLevel = normalizeCardLevel(level);
  const safeStars = normalizeCardStars(stars);
  const levelBonus = Math.floor((safeLevel - 1) / 10);
  const starBonus = (safeStars - 1) * 2;
  const quality = proStars(card) ? normalizeProQuality(card.proQuality) : "";
  const proBonus = proStars(card) * (quality === "bronze" ? 1 : quality === "silver" ? 2 : 4);
  return {
    level: safeLevel,
    stars: safeStars,
    statBonus: levelBonus + starBonus + proBonus + cardSeriesBonus(card),
    levelCap: CARD_PROGRESSION.starLevelCaps[safeStars] || CARD_MAX_LEVEL,
  };
}

function addCardXp(card, xpAmount) {
  applyCardProgressFields(card);
  const xpGain = Math.max(0, Math.round(Number(xpAmount) || 0));
  card.totalXp += xpGain;
  card.currentXp += xpGain;
  const beforeLevel = card.currentLevel;
  const cap = cardLevelCap(card);
  while (card.currentLevel < cap) {
    const needed = xpForNextLevel(card.currentLevel);
    if (!needed || card.currentXp < needed) break;
    card.currentXp -= needed;
    card.currentLevel += 1;
  }
  card.level = card.currentLevel;
  card.xp = card.currentXp;
  card.lastLeveledAt = new Date().toISOString();
  applyCardProgressFields(card);
  return { beforeLevel, afterLevel: card.currentLevel, cap, capped: card.currentLevel >= cap && cap < CARD_MAX_LEVEL };
}

function levelCard(cardId, amount = 10) {
  const card = state.deck.find((item) => item.id === cardId);
  if (!card) {
    showToast("Karte zum Leveln nicht gefunden.", "error");
    return false;
  }
  const xpGain = amount === 1 ? xpForNextLevel(cardLevel(card)) : CARD_PROGRESSION.levelButtonXp;
  const result = addCardXp(card, xpGain);
  const capHint = result.capped ? " Sternaufstieg erforderlich." : "";
  state.cardProgressTransactions = [
    { id: `card-xp-${card.id}-${Date.now()}`, type: "level", cardId: card.id, xp: xpGain, beforeLevel: result.beforeLevel, afterLevel: result.afterLevel, time: new Date().toISOString() },
    ...(state.cardProgressTransactions || []),
  ].slice(0, 80);
  state.log = [`${safeCardName(card)}: Level ${result.beforeLevel} -> ${result.afterLevel}.${capHint}`, ...state.log].slice(0, 8);
  if (result.afterLevel > result.beforeLevel) {
    showToast(`${safeCardName(card)} ist jetzt Level ${result.afterLevel}.`, "success");
  } else if (result.capped) {
    showToast(`${safeCardName(card)} ist am aktuellen Sternlimit. Stern erhoehen, dann weiter leveln.`, "error");
  } else {
    showToast(`${safeCardName(card)} hat XP erhalten.`, "success");
  }
  return true;
}

function raiseCardStars(cardId) {
  const card = state.deck.find((item) => item.id === cardId);
  if (!card) return false;
  if (card.favorite || card.locked) {
    showToast("Favorisierte oder gesperrte Karten koennen nicht als Fusionsziel verwendet werden.", "error");
    return false;
  }
  const info = starUpgradeInfo(card);
  if (info.atMax) {
    showToast("Diese Karte hat bereits 5 Sterne.", "error");
    return false;
  }
  if (!info.canUpgrade) {
    showToast(`Es fehlen Duplikate: ${info.availableDuplicates}/${info.duplicatesRequired}.`, "error");
    return false;
  }
  const consumed = duplicateCardsFor(card).slice(0, info.duplicatesRequired);
  if (consumed.some((item) => item.favorite || item.locked)) {
    showToast("Favorisierte oder gesperrte Karten werden nicht als Sternmaterial verbraucht.", "error");
    return false;
  }
  const before = cardStars(card);
  card.stars = info.nextStars;
  card.currentStars = info.nextStars;
  applyCardProgressFields(card);
  const consumedIds = consumed.map((item) => item.id);
  state.deck = state.deck.filter((item) => !consumedIds.includes(item.id));
  state.selected = state.selected.filter((id) => !consumedIds.includes(id));
  state.cardProgressTransactions = [
    { id: `card-star-${card.id}-${Date.now()}`, type: "star", cardId: card.id, consumedIds, beforeStars: before, afterStars: info.nextStars, time: new Date().toISOString() },
    ...(state.cardProgressTransactions || []),
  ].slice(0, 80);
  state.log = [`${safeCardName(card)}: ${before} -> ${info.nextStars} Sterne, Levelgrenze ${card.levelCap}.`, ...state.log].slice(0, 8);
  return true;
}

function fuseCardToPro(cardId) {
  let card = state.deck.find((item) => item.id === cardId);
  const partner = fusionPartnerFor(card);
  if (!card || !partner) return;
  if (card.favorite || card.locked) {
    showToast("Favorisierte oder gesperrte Karten koennen nicht fusioniert werden.", "error");
    return;
  }
  if (cardLevel(partner) > cardLevel(card)) {
    card = partner;
  }
  const consumed = card.id === partner.id ? state.deck.find((item) => item.id === cardId) : partner;
  if (consumed?.favorite || consumed?.locked) {
    showToast("Favorisierte oder gesperrte Karten werden nicht fusioniert.", "error");
    return;
  }
  const nextStars = Math.min(PRO_MAX_STARS, proStars(card) + 1);
  const quality = proStars(card) ? normalizeProQuality(card.proQuality) : evolutionQualityFor(card, consumed);
  card.proStars = nextStars;
  card.proQuality = quality;
  card.level = 1;
  card.currentLevel = 1;
  card.currentXp = 0;
  card.xp = 0;
  state.deck = state.deck.filter((item) => item.id !== consumed.id);
  if (state.selected.includes(consumed.id) && !state.selected.includes(card.id)) {
    state.selected = [card.id, ...state.selected].slice(0, MATCH_CARD_COUNT);
  }
  state.selected = state.selected.filter((id) => id !== consumed.id);
  state.cardProgressTransactions = [
    { id: `card-pro-${card.id}-${Date.now()}`, type: "pro", cardId: card.id, consumedIds: [consumed.id], proStars: nextStars, quality, time: new Date().toISOString() },
    ...(state.cardProgressTransactions || []),
  ].slice(0, 80);
  state.log = [`Evolution: ${safeCardName(card)} erhaelt ${proStarsText(nextStars, quality)} und startet wieder bei Level 1.`, ...state.log].slice(0, 8);
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
  return calculateCardProgression(card).statBonus;
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

