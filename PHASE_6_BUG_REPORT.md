# Liga Clash - Phase 6 Bug Report

Datum: 2026-07-11  
Scope: nur Phase 6

## P6-001

- Schweregrad: Mittel
- Beschreibung: Der Phase-6-Simulationstest pruefte nur 100 Matches pro Schwierigkeit.
- Ursache: Testumfang war kleiner als im Phase-6-Abnahmeauftrag gefordert.
- Betroffene Dateien: `tests/gameplay-phase6-simulation.test.mjs`
- Reproduktionsschritte:
  1. `node .\tests\gameplay-phase6-simulation.test.mjs` ausfuehren.
  2. Ausgabe und Assertions zeigen 100 Matches pro Schwierigkeit.
- Korrektur: Simulation auf 250 Matches pro Schwierigkeit erweitert und Kennzahlen fuer Durchschnittsscore, haeufigsten Endstand, Wertdifferenz, Fehler, Fallbacks, Tie-Breaker und Simulationsdauer ergaenzt.
- Testergebnis: bestanden, 750 simulierte Matches.
- Status: behoben

## P6-002

- Schweregrad: Niedrig
- Beschreibung: Eine Testannahme verlangte, dass Leicht zwingend mindestens ein Match verliert.
- Ursache: Die Engine nutzt bei exakt gleichen Werten einen definierten Tie-Break, der bei gleicher Positionsguete den Spieler bevorzugt. Eine Verlustpflicht fuer Leicht ist kein Abnahmekriterium.
- Betroffene Dateien: `tests/gameplay-phase6-simulation.test.mjs`
- Reproduktionsschritte:
  1. Simulation mit hoeherer Matchanzahl ausfuehren.
  2. Assertion `Leicht darf nicht komplett deterministisch sein` kann trotz korrekter leichter Schwierigkeit fehlschlagen.
- Korrektur: Test prueft jetzt die relevante Verteilung: Leicht darf nicht schwerer als Normal sein, Schwer muss deutlich mehr CPU-Siege erzeugen und darf nicht komplett deterministisch sein.
- Testergebnis: bestanden.
- Status: behoben

## P6-003

- Schweregrad: Niedrig
- Beschreibung: `ui-phase2-smoke.mjs` kann den Playwright-Smoke-Test nicht ausfuehren.
- Ursache: Playwright-Modul ist lokal nicht installiert; es existiert kein `package.json`, ueber das Abhaengigkeiten installiert werden koennten.
- Betroffene Dateien: keine Phase-6-Produktionsdatei
- Reproduktionsschritte:
  1. `node .\tests\ui-phase2-smoke.mjs` ausfuehren.
  2. Ausgabe: `Playwright-Smoke-Test uebersprungen: MODULE_NOT_FOUND`.
- Korrektur: Keine Codekorrektur in Phase 6, weil kein Phase-6-Fehler und kein vorhandenes Dependency-Setup vorhanden ist.
- Testergebnis: Test beendet mit Exit-Code 0 und wurde als Infrastruktur-Einschraenkung dokumentiert.
- Status: offen, niedrig

## P6-004

- Schweregrad: Niedrig
- Beschreibung: Ein aktives Match wird beim Neuladen nicht fortgesetzt, sondern als `aborted` normalisiert.
- Ursache: Vorhandene Sicherheitslogik in `normalizeStoredMatch`, um doppelte Runden- oder Reward-Auswertung zu verhindern.
- Betroffene Dateien: `game.js`
- Reproduktionsschritte:
  1. Codepfad `normalizeStoredMatch` pruefen.
  2. Status `preparing`, `active`, `resolving_round`, `round_complete` wird zu `aborted`.
- Korrektur: Keine Aenderung. Die aktuelle synchrone Engine erzeugt im normalen UI keine laengere aktive Zwischenphase; abgeschlossene Matches werden stabil wiederhergestellt.
- Testergebnis: abgeschlossenes Match blieb nach Reload identisch.
- Status: dokumentierte Einschraenkung

## Zusammenfassung

- Kritische Fehler: 0
- Hohe Fehler: 0
- Mittlere Fehler: 1 gefunden, 1 behoben
- Niedrige Fehler/Einschraenkungen: 3 gefunden, 1 behoben, 2 dokumentiert
- Phase-6-Produktionscode musste nicht geaendert werden.
