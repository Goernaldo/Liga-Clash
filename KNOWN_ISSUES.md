# Liga Clash - Known Issues

Stand: 11.07.2026

## Offen

### KI / Gameplay

- Matchauswahl der Karten erfolgt automatisch. Manuelle Rundenauswahl ist nicht vorhanden.
- Reward-Handoff ist vorhanden, aber echtes Reward-Board fehlt.

### Belohnungen

- 5x5-Belohnungsboard und Pick-Mechanik fehlen.
- Board-Reload-Stabilitaet kann nicht getestet werden, weil die UI fehlt.
- Doppelvergabe-Schutz fuer fertige Board-Picks ist noch nicht nachweisbar.

### Missionen

- Kein zentraler Eventbus.
- Keine eindeutigen Mission-Event-IDs fuer alle Spielereignisse.
- Missionen reagieren nicht systemweit auf alle Events aus dem Release-Testauftrag.

### Liga

- Liga ist lokaler Prototyp.
- CPU-Ligaspiele und Wochenabschluss sind nicht als voll persistente Saisonlogik ausgebaut.

### Admin Center

- Admin Center nutzt lokale Browserdaten.
- Rollen sind ohne Backend manipulierbar.
- Systeminformationen sind teilweise Prototyp-/Mock-Daten.
- Kein vollstaendiger Backup-/Restore-Bereich vorhanden.

### Import / Export

- Spielerbild-Testimport existiert unter `tools/player-image-import`.
- Vollstaendiger Spielstand-Import, Export und Backup fehlen.

### Assets

- Mindestens ein externes Vereinswappen ist im Browser defekt: `https://tmssl.akamaized.net/images/wappen/head/196.png`.
- Externe Bildquellen bleiben ein Risiko fuer Offline-Nutzung und Release.

### Tests

- Kein `package.json`.
- Keine installierten Node-Abhaengigkeiten.
- `tests/ui-phase2-smoke.mjs` wird wegen fehlender Playwright-Abhaengigkeit uebersprungen.
- Keine automatisierten Lasttests fuer 10.000 Karten, 1.000 Booster oder 1.000 Matches im echten App-State.

## Behoben in diesem Testlauf

- Mobiler Admin-Button wurde von der Fusion-Kachel ueberlagert und oeffnete dadurch die falsche Route. Behoben durch mobile Header-Layout-Korrektur und Stylesheet-Cache-Buster.
