# Liga Clash - Mission System

Stand: 2026-07-11  
Status: Phase 8 umgesetzt

## Missionstypen

Aktiv:

- taegliche Missionen
- woechentliche Missionen

Vorbereitet durch Datenmodell:

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

## Fortschritt

Missionen reagieren zentral auf Spielereignisse:

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

Verarbeitete Events werden gespeichert, damit Fortschritt nicht doppelt zaehlt.

## Belohnungen

Unterstuetzt:

- Coins
- Diamanten
- Gratis-Packs
- Karten
- Material als vorbereitete lokale Logmeldung

Eine Mission kann nur einmal abgeholt werden. Claims werden in `missionSystem.transactions` gespeichert.

## Reset

- Daily-Reset ueber Tages-Key `YYYY-MM-DD`
- Weekly-Reset ueber Ligawochen-Startdatum
- Missionen werden nicht bei jedem Laden neu gewuerfelt

## Einschraenkungen

- Kein Admin-Missionseditor in Phase 8.
- Kein Platzpass-XP aktiv.
- Kein Serverzeit-Abgleich.
