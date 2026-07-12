# Data Validation

Phase 9 nutzt `validateAdminData()` in `game.js`.

## Validiert

- Booster-Dropchancen muessen im gueltigen Klassenbereich 100% ergeben.
- Booster benoetigen eine positive Kartenanzahl.
- Leere Kartenpools werden als Warnung angezeigt.
- Garantieklassen muessen im Booster-Klassenbereich liegen.
- Aktive Liga benoetigt eine ID.
- Aufstieg und Abstieg duerfen die Teilnehmerzahl nicht ueberschreiten.
- Mindestens ein aktiver Owner muss vorhanden sein.
- Karten benoetigen Name, Verein und Position.

## Loeschschutz

- Der letzte aktive Owner kann nicht entfernt oder herabgestuft werden.
- Kritische Loeschungen erzeugen vorab ein lokales Backup.
- Wo harte Loeschung riskant ist, wird Deaktivieren bevorzugt.
