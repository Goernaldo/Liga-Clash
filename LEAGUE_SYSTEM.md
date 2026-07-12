# Liga Clash - League System

Stand: 2026-07-12  
Status: Phase 8 umgesetzt, Kernfunktionen nachgebessert und getestet

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

| Liga | Kurz | Stufe | Teilnehmer | Aufstieg | Abstieg |
| --- | --- | ---: | ---: | ---: | ---: |
| 1. Liga | L1 | 1 | 18 | 0 | 3 |
| 2. Liga | L2 | 2 | 18 | 3 | 3 |
| 3. Liga | L3 | 3 | 20 | 3 | 4 |
| Rookie-Liga | RL | 4 | 25 | 4 | 0 |

Die Konfiguration liegt zentral in `LEAGUE_PHASE_CONFIG`. Jede Liga besitzt zusaetzlich Anzeige-Metadaten wie `shortName`, `level`, `tier`, `logo`, `description`, `order`, `active` und `rewards`.

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
- Teilnehmer besitzen sichtbare Metadaten wie `displayName`, `deckStrength`, `formation`, `difficulty`, `avatar`/`logo` und Tabellenwerte.
- Die Spieleroberflaeche zeigt Teilnehmerstatus, Deckstaerke, Formation und Aufstiegs-/Abstiegszone.
- Das Admin Center zeigt fuer die aktuelle Woche Teilnehmer, CPU-Gegner, freie Plaetze und eine Spielplan-Vorschau.

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
- Teilnehmer der aktiven Ligawoche werden im Admin Center aktuell nur angezeigt. Direktes Bearbeiten aktiver Wochen ist absichtlich geschuetzt, damit keine laufende Tabelle beschaedigt wird.
