# Liga Clash - Phase 8 Report

Datum: 2026-07-11  
Scope: Liga-System und Missionen  
Status: umgesetzt, Phase 9 nicht begonnen.

## Vorher vorhanden

- einfache LP-Wochenwertung ueber `state.lp`
- lokale `leagueRows`
- einfache Rangliste nach LP
- drei statische Missionen mit Coin-Belohnung
- Matchsystem aus Phase 6
- Booster-, Karten- und Reward-Grundlogik

## Umgesetzt

- zentrales Liga-Phasenmodell mit 4 Stufen:
  - 1. Liga, 18 Teilnehmer
  - 2. Liga, 18 Teilnehmer
  - 3. Liga, 20 Teilnehmer
  - Unterste Liga, 25 Teilnehmer
- Ligawoche von Mittwoch bis Dienstag mit stabiler Wochen-ID
- persistente Teilnehmerliste inklusive CPU-Gegnern
- gespeicherter Spielplan mit 10 Spieler-Ligaspielen pro Woche
- gespeicherte CPU-vs-CPU-Simulation
- deterministische Tabellenberechnung nach Punkte, Rundendifferenz, Rundensiege, Teilnehmer-ID
- Phase-6-Matches werden einmalig in der Ligawoche gewertet
- Wochenabschluss mit Aufstieg, Abstieg, Klassenerhalt und einmaliger Coin-Belohnung
- neue Liga-&-Missionen-UI im bestehenden Feature-Panel
- Daily- und Weekly-Missionen
- zentrale Missionsereignisse:
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
- einmalige Missionsbelohnungen mit Transaktionsliste
- Resetlogik fuer taegliche und woechentliche Missionen
- responsive Tabellen- und Missionsdarstellung

## Nicht umgesetzt

- kein echter Multiplayer
- kein Live-Matchmaking
- keine Turniere
- kein Platzpass
- kein Admin-Center-Ausbau
- keine Echtgeldfunktionen
- kein Markt oder Tauschsystem

## Geaenderte Dateien

- `game.js`
- `styles.css`

## Neue Dateien

- `tests/phase8-league-mission-static.test.mjs`
- `tests/phase8-league-mission-simulation.test.mjs`
- `PHASE_8_REPORT.md`
- `PHASE_8_TEST_REPORT.md`
- `PHASE_8_BUG_REPORT.md`
- `LEAGUE_SYSTEM.md`
- `MISSION_SYSTEM.md`

## Offene Einschraenkungen

- Kein Backend; alles bleibt LocalStorage-Prototyp.
- Kein echtes Multiplayer-Ranking.
- Wochenabschluss kann manuell ueber UI ausgelöst werden; automatische Serverzeit gibt es noch nicht.
- Playwright-Smoke-Test bleibt wegen fehlendem Modul uebersprungen.
