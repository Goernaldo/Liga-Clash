# Liga Clash - Phase 8 Bug Report

Datum: 2026-07-11

## P8-001

- Schweregrad: Mittel
- Beschreibung: Beim ersten Testlauf schlug der neue Static-Test wegen VM-Prototyp-Vergleich unter Node 24 fehl.
- Ursache: `assert.deepEqual` verglich ein Array aus einem VM-Kontext mit einem Host-Array.
- Betroffene Datei: `tests/phase8-league-mission-static.test.mjs`
- Korrektur: Assertion auf `JSON.stringify`-Vergleich umgestellt.
- Testergebnis: bestanden.
- Status: behoben

## P8-002

- Schweregrad: Niedrig
- Beschreibung: `ui-phase2-smoke.mjs` ueberspringt Browser-Smoke wegen fehlendem Playwright-Modul.
- Ursache: Im Projekt existiert kein `package.json` und kein lokales Playwright-Setup.
- Betroffene Datei: keine Phase-8-Produktionsdatei
- Korrektur: Keine Codeaenderung, Browser-Smoke wurde manuell mit dem In-App-Browser ausgefuehrt.
- Testergebnis: keine Konsolenfehler im Browser-Smoke.
- Status: dokumentierte Infrastruktur-Einschraenkung

## Zusammenfassung

- Kritische Fehler: 0
- Hohe Fehler: 0
- Mittlere Fehler: 1 gefunden, 1 behoben
- Niedrige Einschraenkungen: 1 dokumentiert
