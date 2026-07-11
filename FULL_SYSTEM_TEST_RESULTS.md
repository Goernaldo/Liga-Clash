# Liga Clash - Full System Test Results

Stand: 11.07.2026

## Automatisierte Tests

| Test | Ergebnis |
| --- | --- |
| `node --check game.js` | Bestanden |
| `node --check data/card-system.js` | Bestanden |
| `node --check data/deck-system.js` | Bestanden |
| `node --check data/booster-system.js` | Bestanden |
| `tests/card-system-static.test.mjs` | Bestanden |
| `tests/deck-system-static.test.mjs` | Bestanden |
| `tests/booster-system-static.test.mjs` | Bestanden |
| `tests/gameplay-static.test.mjs` | Bestanden |
| `tests/gameplay-phase6-simulation.test.mjs` | Bestanden |
| `tests/player-image-import-static.test.mjs` | Bestanden |
| `tests/ui-phase2-smoke.mjs` | Uebersprungen, `MODULE_NOT_FOUND` |

## Gameplay-Simulation

`tests/gameplay-phase6-simulation.test.mjs`:

| Schwierigkeit | Matches | Siege | Niederlagen | Ungueltige Runden | Doppelte Kartennutzung | Ungueltige Scores |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| easy | 100 | 97 | 3 | 0 | 0 | 0 |
| normal | 100 | 56 | 44 | 0 | 0 | 0 |
| hard | 100 | 15 | 85 | 0 | 0 | 0 |

## Browser-Tests

Lokaler Server:

```text
http://127.0.0.1:8134/
```

Gepruefte Seiten/Zustaende:

- Home
- Sammlung
- Deck
- Booster
- Liga & Missionen
- Admin Center
- Matchabschluss
- Booster-Reveal

Gepruefte Viewports:

- 1366x768
- 834x1112
- 390x844

Ergebnisse:

- Keine JavaScript-Konsolenfehler.
- Keine horizontale Scrollleiste.
- Sammlung oeffnet.
- Deck oeffnet.
- Booster oeffnet.
- Liga & Missionen oeffnet.
- Admin Center oeffnet nach Fix auf Desktop, Tablet und Handy.
- Match erzeugt exakt 5 Runden.
- Matchabschluss erzeugt Reward-Handoff.
- Boosterkauf erzeugt Inventarinstanz.
- Booster-Oeffnung zeigt exakt 5 Karten.

## Gefundene Browser-Warnungen

- Ein externes Wappenbild ist defekt: `https://tmssl.akamaized.net/images/wappen/head/196.png`.

## Nicht voll testbar

- Vollstaendiges 5x5-Belohnungsboard: nicht vorhanden.
- Reward-Picks und Doppelvergabe-Schutz im Board: nicht vorhanden.
- Vollstaendige Missions-Eventpipeline: nicht vorhanden.
- Wochenabschluss mit echten persistenten CPU-Ligaspielen: nur Prototyp-Logik vorhanden.
- Import/Export/Backup/Restore: nicht als App-System vorhanden.
- Sicherheitspruefung gegen echte Angriffe: ohne Backend nicht moeglich.

## Zusammenfassung

Bestanden:

- Syntax
- Karten
- Deck
- Booster
- Gameplay
- Spielerbild-Import-Test
- Browser-Navigation
- Responsive Basis
- Browser-Konsole

Nicht bestanden beziehungsweise nicht releasefaehig:

- Phase 7 Belohnungsboard
- Missions-Eventbus
- Import/Export/Backup
- Produktionssicherheit
