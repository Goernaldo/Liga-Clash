# Admin Center

Das Admin Center bleibt die bestehende zentrale Oberflaeche in `index.html` (`#adminCenter`). Phase 9 erweitert diese Shell und erzeugt kein zweites Admin Center.

## Architektur

- UI: `index.html`, `styles.css`
- Logik: `game.js`
- Persistenz: `localStorage` ueber `saveState()` und `loadState()`
- Phase-9-Daten: `state.adminData`

## Module

Umgesetzt oder angebunden:

- Dashboard
- Benutzer
- Rollen
- Spieler
- Karten
- Vereine
- Nationen
- Ligen
- Booster
- Dropchancen
- Missionen
- News
- Events
- Shop
- Platzpass-Vorbereitung
- Design
- Texte
- Version
- Projektstatus
- Export
- Backups
- Logs
- Einstellungen

## Liga-Verwaltung

Das Modul `renderAdminLeaguesModule()` nutzt die vorhandene Phase-8-Ligawoche und erzeugt keine zweite Liga-Logik.

Vorhandene Anzeigen:

- aktuelle Liga mit Name und Teilnehmerzahl
- Anzahl CPU-Gegner
- freie Plaetze
- zentrale Ligakonfiguration aus `LEAGUE_PHASE_CONFIG`
- aktuelle Liga-Teilnehmer mit Typ, Deckstaerke, Formation, Schwierigkeit, Punkten und Status
- Spielplan-Vorschau der aktuellen Woche

Aktive Ligawochen sind geschuetzt. Das Admin Center zeigt Teilnehmer und Spielplan aktuell als Verwaltungsvorschau, damit laufende Tabellen nicht durch manuelle Eingriffe beschaedigt werden.

## Booster-Bildverwaltung

Booster & Packs unterstuetzt neben festen Asset-Pfaden auch lokal zugeordnete Packbilder.

Vorhandene Funktionen:

- Bildauswahl aus vorhandenen Assets
- Upload-Feld pro vorhandenem Booster
- Validierung fuer PNG, JPG und WebP
- Dateigroessenlimit von 2,5 MB
- Speicherung als lokales Admin-Asset in `state.adminData.packImages`
- Zuordnung zum Booster ueber `pack.image`
- Metadaten wie Dateiname, MIME-Typ, Groesse, Erstellzeit und Quelle
- Bildhistorie im Pack ueber `previousImages`

Ohne Backend schreibt der Browser keine Dateien in `assets/`. Uploads werden als lokale Data-URL im Spielstand gespeichert und dienen als Test-/Prototypmodus.

## Zugriff

`canOpenAdmin()` nutzt die zentrale Berechtigungsmatrix. Sichtbare Navigation wird rollenbasiert gefiltert. Kritische Aktionen rufen zusaetzlich `requireAdminPermission()` auf.

## Datenquellen

Das Admin Center liest die vorhandenen Spielsysteme:

- `GAME_CARDS`
- `CLUBS`
- `LEAGUE_PHASE_CONFIG`
- `DAILY_MISSION_CONFIG`
- `WEEKLY_MISSION_CONFIG`
- `state.events`
- `state.boosterPacks`
- `state.rewardPools`
- `state.adminUsers`
- `state.adminData`

Neue lokale Admin-Assets werden in `state.adminData.packImages` gespeichert.
