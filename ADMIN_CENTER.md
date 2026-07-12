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
