# Liga Clash - Phase 8 Bug Report

Datum: 2026-07-11  
Scope: Liga-System und Missionen

## P8-001

- Bereich: Tests
- Schweregrad: Mittel
- Beschreibung: Der erste Phase-8-Static-Test verglich ein Array aus einem VM-Kontext direkt mit einem Host-Array.
- Ursache: `assert.deepEqual` ist fuer VM-Prototypen in dieser Node-Version ungeeignet.
- Betroffene Dateien: `tests/phase8-league-mission-static.test.mjs`
- Reproduktion: `node .\tests\phase8-league-mission-static.test.mjs`
- Korrektur: Vergleich auf `JSON.stringify`-Vergleich umgestellt.
- Retest: bestanden.
- Status: behoben

## P8-002

- Bereich: Testinfrastruktur
- Schweregrad: Niedrig
- Beschreibung: `ui-phase2-smoke.mjs` ueberspringt den Playwright-Smoke-Test.
- Ursache: Im Projekt gibt es kein `package.json` und kein installiertes Playwright-Modul.
- Betroffene Dateien: keine Produktionsdatei
- Reproduktion: `node .\tests\ui-phase2-smoke.mjs`
- Korrektur: Keine Codeaenderung; Browser-Smoke wurde manuell mit dem Codex In-App Browser durchgefuehrt.
- Retest: Browser-Smoke fuer Liga & Missionen bestanden, keine Konsolenfehler.
- Status: dokumentierte Infrastruktur-Einschraenkung

## P8-003

- Bereich: Liga
- Schweregrad: Hoch
- Beschreibung: Der Wochenabschluss konnte manuell ausgeloest werden, obwohl noch nicht alle 10 Spieler-Ligaspiele abgeschlossen waren. Da nach dem Abschluss direkt eine neue Woche vorbereitet wird, haette ein erneuter manueller Abschluss weitere Wochenbelohnungen ermoeglichen koennen.
- Ursache: `settleLeagueWeek()` pruefte nur `week.status` und `week.reward.claimed`, aber nicht `playedPlayerMatches < maxPlayerMatches`.
- Betroffene Dateien:
  - `game.js`
  - `tests/phase8-league-mission-static.test.mjs`
  - `tests/phase8-league-mission-simulation.test.mjs`
- Reproduktionsschritte:
  1. Liga & Missionen oeffnen.
  2. Vor Abschluss aller 10 Ligaspiele `Woche abschliessen` ausloesen.
  3. Belohnung und neue Woche konnten vorbereitet werden.
- Korrektur:
  - UI-Button wird deaktiviert, solange `playedPlayerMatches < maxPlayerMatches`.
  - `settleLeagueWeek()` blockiert offene Wochen serverunabhaengig im zentralen Handler.
  - Simulationstest prueft Blockade vor 10 Spielen und Idempotenz nach Abschluss.
- Retest:
  - `node --check .\game.js`: bestanden
  - `node .\tests\phase8-league-mission-static.test.mjs`: bestanden
  - `node .\tests\phase8-league-mission-simulation.test.mjs`: bestanden
  - Browser: Button bei `0/10` Ligaspielen sichtbar, aber deaktiviert.
- Status: behoben

## P8-004

- Bereich: Tests
- Schweregrad: Niedrig
- Beschreibung: Die erweiterte Simulation pruefte anfangs den Blockadefall nach bereits abgeschlossenen 10 Spielen und die Doppel-Event-Pruefung verglich gegen den Zustand vor dem ersten Event.
- Ursache: Fehler im neu erweiterten Test-Harness, nicht im Produktionscode.
- Betroffene Dateien: `tests/phase8-league-mission-simulation.test.mjs`
- Reproduktion: erster Lauf der erweiterten Simulation.
- Korrektur: Blockadepruefung vor den 10 simulierten Matches ausgefuehrt; Doppel-Event-Pruefung auf Zustand nach erstem Event korrigiert.
- Retest: bestanden.
- Status: behoben

## Zusammenfassung

- Kritische Fehler: 0 gefunden, 0 offen
- Hohe Fehler: 1 gefunden, 1 behoben, 0 offen
- Mittlere Fehler: 1 gefunden, 1 behoben, 0 offen
- Niedrige Fehler/Einschraenkungen: 2 dokumentiert, 0 kritisch fuer Phase 8

Phase 8 hat nach Retest keine offenen kritischen oder hohen Fehler.
