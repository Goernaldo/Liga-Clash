# Liga Clash - League System

Stand: 2026-07-11  
Status: Phase 8 umgesetzt

## Ligastufen

| Liga | Teilnehmer | Aufstieg | Abstieg |
| --- | ---: | ---: | ---: |
| 1. Liga | 18 | 0 | 3 |
| 2. Liga | 18 | 3 | 3 |
| 3. Liga | 20 | 3 | 4 |
| Unterste Liga | 25 | 4 | 0 |

Die Konfiguration liegt zentral in `LEAGUE_PHASE_CONFIG`.

## Ligawoche

Eine Ligawoche laeuft von Mittwoch bis Dienstag. Die Woche besitzt:

- `weekId`
- `startDate`
- `endDate`
- `status`
- `participants`
- `schedule`
- `matches`
- `cpuSimulations`
- `reward`
- `closure`

## Tabelle

Sortierung:

1. Punkte
2. Rundendifferenz
3. gewonnene Runden
4. stabile Teilnehmer-ID

## Spielplan

Die erste Phase-8-Version erzeugt:

- 10 Spieler-Ligaspiele pro Woche
- CPU-vs-CPU-Spiele fuer gespeicherte Tabellendynamik
- keine direkte Neuberechnung gespeicherter CPU-Ergebnisse

## Matchwertung

Ligamatches verwenden das Phase-6-Matchsystem. Nach Matchabschluss wird ein Matchrecord gespeichert. Eine Match-ID wird nur einmal gewertet.

## Wochenabschluss

Beim Wochenabschluss:

1. CPU-Spiele werden final simuliert.
2. Tabelle wird berechnet.
3. Platzierung wird bestimmt.
4. Aufstieg, Abstieg oder Klassenerhalt wird berechnet.
5. Wochenbelohnung wird einmalig vergeben.
6. Eine neue Woche fuer die neue Liga wird vorbereitet.

## Einschraenkungen

- Kein Backend.
- Kein echter Multiplayer.
- Wochenabschluss ist lokal und manuell ausloesbar.
