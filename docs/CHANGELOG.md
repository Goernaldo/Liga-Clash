# Liga Clash - Changelog

Alle Eintraege basieren auf dem vorhandenen Projektstand und den zuletzt erstellten Dateien.

## 2026-07-10

### Phase 1 - Stabilisierung

- LocalStorage-Laden gegen korrupten JSON-Spielstand abgesichert.
- LocalStorage-Speichern gegen Quota-/Private-Mode-Fehler abgesichert, damit die laufende Session spielbar bleibt.
- LocalStorage-Testplan um korrupten Spielstand erweitert.
- Aktive Projektdateien auf Encoding-Mojibake gescannt.

### Karten-Cleanup

- Generierte Dummy-Portraits fuer Spielerkarten entfernt.
- Karten ohne echtes Spielerbild lassen den Bildbereich leer, statt eine Platzhaltergrafik zu erzeugen.
- CSS-gezeichnete Dummy-Spielerkoerper in den Play-Kachel-Karten entfernt.
- Kartenrahmen, Overall, Position, Name, Vereinslogo, Seltenheit, Hover-Effekte und Animationen bleiben erhalten.

### Dokumentation

- `PROJECT_ANALYSIS.md` erstellt.
- `LIGA_CLASH_SPEC.md` erstellt.
- `ROADMAP.md` erstellt.
- `DATA_MODEL.md` erstellt.
- `AGENTS.md` erstellt.
- `TEST_PLAN.md` erstellt.
- `/docs`-Ordner erstellt.
- vorhandene Basisdokumente nach `/docs` kopiert.
- `GAME_RULES.md` erstellt.
- `CARD_SYSTEM.md` erstellt.
- `BOOSTER_SYSTEM.md` erstellt.
- `LEAGUE_SYSTEM.md` erstellt.
- `MISSION_SYSTEM.md` erstellt.
- `UI_GUIDELINES.md` erstellt.
- `CHANGELOG.md` erstellt.

### Bekannter Projektstand

- Hauptmenue mit Fusion-Kachel und Booster in der unteren Navigation vorhanden.
- Admin Center mit Events, Booster, Benutzern, Wallet-Gutschriften und Reward-Pools vorhanden.
- Kartenklassen von Gewoehnlich bis Elite vorhanden.
- Kartenserien vorhanden.
- Kartenlevel und Fusion/Evolution vorhanden.
- Booster mit Packbildern, Gratis-Packs, Kartenanzahl, Pools, Positionen und Drop-Rates vorhanden.
- Sammlung und Deck mit Liga-, Vereins- und Positionsfiltern vorhanden.
- Matchsystem mit 6 Karten, Formationen und Spielsituationen vorhanden.
- Offline-Karriere, schnelles KI-Spiel und Challenges vorhanden.

### Hinweise

- Es wurde fuer diese Changelog-Erstellung kein bestehender Spielcode veraendert.
- Die Dokumente unterscheiden vorhandene Funktionen und Empfehlungen.
