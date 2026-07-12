# Liga Clash - Mission System

Stand: 2026-07-11  
Status: Phase 8 umgesetzt und getestet

## Dateien

Das Missionssystem liegt aktuell im monolithischen `game.js`. Es gibt noch keine getrennten Missionsdateien.

Betroffene Hauptfunktionen:

- `DAILY_MISSION_CONFIG`
- `WEEKLY_MISSION_CONFIG`
- `createDefaultMissionSystem`
- `normalizeMissionSystem`
- `createMissionSet`
- `normalizeMission`
- `resetMissionsIfNeeded`
- `recordGameEvent`
- `missionIncrement`
- `claimMission`
- `grantMissionReward`

## Missionstypen

Aktiv:

- taegliche Missionen
- woechentliche Missionen

Vorbereitet im Datenmodell:

- saisonale Missionen
- Event-Missionen
- Tutorial-Missionen
- Platzpass-Missionen

## Taegliche Missionen

- Spiele 2 Matches
- Gewinne 5 Runden
- Oeffne 1 Booster

## Woechentliche Missionen

- Spiele 5 Ligamatches
- Gewinne 3 Matches
- Bereite 2 Belohnungsboards vor

## Zentrale Ereignisse

Missionen reagieren ueber `recordGameEvent()` auf:

- `match_completed`
- `match_won`
- `round_won`
- `booster_opened`
- `card_received`
- `credits_earned`
- `deck_saved`
- `league_match_completed`
- `league_match_won`
- `reward_board_completed`
- `card_leveled`

Verarbeitete Events werden in `missionSystem.processedEvents` gespeichert. Dadurch zaehlt die gleiche Event-ID nicht mehrfach.

## Belohnungen

Unterstuetzt:

- Coins
- Diamanten
- Gratis-Packs
- Karten
- Material als lokale Logmeldung

Missionstransaktionen werden in `missionSystem.transactions` gespeichert. Eine Mission kann nur abgeholt werden, wenn sie `claimable` ist und noch nicht `claimed` wurde.

## Reset

- Daily-Reset ueber Tages-Key `YYYY-MM-DD`
- Weekly-Reset ueber Startdatum der Ligawoche
- Missionen werden nicht bei jedem Laden neu erzeugt
- Fortschritt wird beim passenden Zeitraumwechsel zurueckgesetzt

## Einschraenkungen

- Kein Admin-Missionseditor in Phase 8.
- Kein Platzpass-XP aktiv.
- Kein Serverzeit-Abgleich.
- Nicht abgeholte alte Missionen werden beim Reset ersetzt; ein nachtraegliches Claim-Archiv ist noch nicht vorhanden.
