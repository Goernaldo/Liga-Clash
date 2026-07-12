# Import und Export

## Export

`createAdminExportPayload()` erstellt einen JSON-faehigen Export mit:

- Exportversion
- Schema-Version
- Datum
- Ersteller
- Karten
- Vereine
- Ligen
- Booster
- Missionen
- Events
- News
- Shop-Angeboten
- Projekt-/Design-/Text-/Platzpass-Einstellungen

PINs und sensible Felder werden ueber `safeAdminSnapshot()` maskiert.

## Import

Phase 9 bereitet Importdaten ueber `state.adminData.importPreview` vor. Ein vollstaendiger Datei-Import mit Konfliktloesung ist noch nicht produktiv umgesetzt.

Geplante Importregeln:

- Schema pruefen
- Pflichtfelder pruefen
- doppelte IDs melden
- Konflikte vorschauen
- Backup vor Schreibvorgang erzeugen
- ungueltige Daten nicht speichern
