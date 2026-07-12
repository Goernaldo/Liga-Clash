# Liga Clash - League System

Stand: 2026-07-11  
Status: Phase 8 umgesetzt und getestet

## Dateien

Das Liga-System liegt aktuell im monolithischen `game.js`. Es gibt noch keine getrennten Liga-Dateien.

Betroffene Hauptfunktionen:

- `LEAGUE_PHASE_CONFIG`
- `createDefaultLeagueSystem`
- `normalizeLeagueSystem`
- `createLeagueWeek`
- `leagueWeekRange`
- `createLeagueParticipants`
- `createLeagueSchedule`
- `simulateCpuLeagueMatches`
- `completeLeagueMatch`
- `updateLeagueTable`
- `compareLeagueParticipants`
- `settleLeagueWeek`

## Ligastufen

| Liga | Teilnehmer | Aufstieg | Abstieg |
| --- | ---: | ---: | ---: |
| 1. Liga | 18 | 0 | 3 |
| 2. Liga | 18 | 3 | 3 |
| 3. Liga | 20 | 3 | 4 |
| Unterste Liga | 25 | 4 | 0 |

Die Konfiguration liegt zentral in `LEAGUE_PHASE_CONFIG`.

## Ligawoche

Eine Ligawoche laeuft von Mittwoch bis Dienstag.

Felder:

- `weekId`
- `leagueId`
- `startDate`
- `endDate`
- `status`
- `participants`
- `schedule`
- `matches`
- `cpuSimulations`
- `maxPlayerMatches`
- `playedPlayerMatches`
- `reward`
- `closure`

## Teilnehmer und Spielplan

- Der lokale Spieler ist genau einmal enthalten.
- CPU-Gegner fuellen die Liga bis zur konfigurierten Teilnehmerzahl.
- Pro Woche gibt es 10 Spieler-Ligaspiele.
- CPU-vs-CPU-Spiele werden gespeichert und nicht bei jedem Laden neu berechnet.

## Tabelle

Sortierung:

1. Punkte
2. Rundendifferenz
3. gewonnene Runden
4. stabile Teilnehmer-ID

## Matchwertung

Ligamatches verwenden die Phase-6-Matchengine. `completeLeagueMatch()` speichert ein Matchrecord je Match-ID. Eine bereits gewertete Match-ID wird nicht erneut gezaehlt.

## Wochenabschluss

`settleLeagueWeek()` ist zentraler Abschluss-Handler.

Regeln:

- Abschluss nur, wenn die Woche nicht bereits abgeschlossen ist.
- Abschluss nur, wenn die Wochenbelohnung noch nicht beansprucht ist.
- Abschluss nur, wenn alle 10 Spieler-Ligaspiele absolviert wurden.
- Danach werden Tabelle, Platzierung, Aufstieg/Abstieg/Klassenerhalt und Reward berechnet.
- Die abgeschlossene Woche wandert in `history`.
- Eine neue Woche fuer die naechste Liga wird vorbereitet.

## Einschraenkungen

- Kein Backend.
- Keine serverseitige Fairness-Pruefung.
- Wochenlogik nutzt Clientzeit.
- Wochenabschluss ist lokal und manuell ueber UI ausloesbar, sobald die Ligaspiele vollstaendig sind.
