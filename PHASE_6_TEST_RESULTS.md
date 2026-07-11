# Liga Clash - Phase 6 Test Results

Datum: 2026-07-11

## Untersuchte Dateien

- `PROJECT_ANALYSIS.md`
- `LIGA_CLASH_SPEC.md`
- `ROADMAP.md`
- `AGENTS.md`
- `DATA_MODEL.md`
- `TEST_PLAN.md`
- `docs/CARD_SYSTEM.md`
- `docs/GAME_RULES.md`
- `docs/UI_GUIDELINES.md`
- `GAMEPLAY_ANALYSIS.md`
- `game.js`
- `index.html`
- `styles.css`
- `data/deck-system.js`
- `tests/card-system-static.test.mjs`
- `tests/deck-system-static.test.mjs`
- `tests/booster-system-static.test.mjs`
- `tests/gameplay-static.test.mjs`
- `tests/gameplay-phase6-simulation.test.mjs`
- `tests/player-image-import-static.test.mjs`
- `tests/ui-phase2-smoke.mjs`

Nicht vorhanden:

- `PHASE_4_REPORT.md`
- `PHASE_5_REPORT.md`
- `PHASE_6_REPORT.md`
- `HUD_OVERLAY_ANALYSIS.md`

## Geaenderte Dateien

- `tests/gameplay-phase6-simulation.test.mjs`
- `PHASE_6_TEST_REPORT.md`
- `PHASE_6_BUG_REPORT.md`
- `PHASE_6_TEST_RESULTS.md`

## Testergebnisse

| Test | Ergebnis |
| --- | --- |
| `node --check .\game.js` | bestanden |
| `node --check .\tests\gameplay-phase6-simulation.test.mjs` | bestanden |
| `node .\tests\card-system-static.test.mjs` | bestanden |
| `node .\tests\deck-system-static.test.mjs` | bestanden |
| `node .\tests\booster-system-static.test.mjs` | bestanden |
| `node .\tests\gameplay-static.test.mjs` | bestanden |
| `node .\tests\gameplay-phase6-simulation.test.mjs` | bestanden |
| `node .\tests\player-image-import-static.test.mjs` | bestanden |
| `node .\tests\ui-phase2-smoke.mjs` | uebersprungen wegen `MODULE_NOT_FOUND`, Exit-Code 0 |
| Browserkonsole nach Matchstart und Reload | bestanden, 0 Fehler |
| Desktop 1920 x 1080 | bestanden |
| Desktop 1366 x 768 | bestanden |
| Tablet 834 x 1112 | bestanden |
| Smartphone 390 x 844 | bestanden |
| Smartphone Querformat 844 x 390 | bestanden |

Erfolgreiche Tests: 14  
Fehlgeschlagene Tests: 0  
Uebersprungen: 1

## Browser-Match

- Startpfad: Hauptmenue -> Deck -> Mit diesem Deck spielen -> Match starten
- Ergebnis: Niederlage 2:3
- Runden: 5
- Verwendete Spielerkarten: 5
- Match-ID: `match-1783796115214-edcce0c1a319b`
- Belohnungshandoff: 2 Auswahlen fuer Niederlage
- Reload: Summary und Runden identisch
- Browserkonsolenfehler: 0

## Simulationsergebnisse

```json
{
  "easy": {
    "matches": 250,
    "wins": 146,
    "losses": 104,
    "invalidRounds": 0,
    "duplicateUse": 0,
    "invalidScores": 0,
    "invalidSelections": 0,
    "missingRoundResults": 0,
    "fallbackSituations": 226,
    "tieBreakers": 104,
    "averageScore": "2.70:2.30",
    "mostFrequentScore": "3:2",
    "averageEffectiveDiff": 3.71,
    "averageDurationMs": 7.98
  },
  "normal": {
    "matches": 250,
    "wins": 144,
    "losses": 106,
    "invalidRounds": 0,
    "duplicateUse": 0,
    "invalidScores": 0,
    "invalidSelections": 0,
    "missingRoundResults": 0,
    "fallbackSituations": 196,
    "tieBreakers": 99,
    "averageScore": "2.72:2.28",
    "mostFrequentScore": "3:2",
    "averageEffectiveDiff": 3.77,
    "averageDurationMs": 8.18
  },
  "hard": {
    "matches": 250,
    "wins": 38,
    "losses": 212,
    "invalidRounds": 0,
    "duplicateUse": 0,
    "invalidScores": 0,
    "invalidSelections": 0,
    "missingRoundResults": 0,
    "fallbackSituations": 211,
    "tieBreakers": 80,
    "averageScore": "1.51:3.49",
    "mostFrequentScore": "1:4",
    "averageEffectiveDiff": 4.46,
    "averageDurationMs": 8.18
  }
}
```

## Abnahmepunkte

- Exakt 5 Runden: ja
- Karten-Mehrfachnutzung verhindert: ja
- CPU haelt Kartenverbrauch ein: ja
- Deckvalidierung angebunden: ja
- CPU-Deck-Erzeugung vorhanden: ja
- Wertberechnung nachvollziehbar: ja
- Jede Runde hat genau einen Sieger: ja
- Matchsieger korrekt aus Punktestand: ja
- Sieg ergibt 4 Auswahlen: ja, statisch und ueber Reward-Handoff-Regel geprueft
- Niederlage ergibt 2 Auswahlen: ja, Browser-Match bestaetigt
- Reload abgeschlossener Ergebnisse stabil: ja
- Doppelte Belohnung verhindert: ja, Handoff ist pro Match-ID idempotent vorbereitet
- Desktop und Smartphone bedienbar: ja
- Karten-, Deck- oder Booster-System beschaedigt: nein

## Finale Entscheidung

Phase 6 ist abgenommen. Es bleiben nur dokumentierte niedrige Infrastruktur- und Architektur-Einschraenkungen offen.
