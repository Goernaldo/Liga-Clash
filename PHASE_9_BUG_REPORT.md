# Phase 9 Bug Report

Stand: 2026-07-12

## Gefundene Probleme

- Die alte Admin-Startansicht enthielt statische Fake-Metriken. Behoben: Dashboard-Metriken werden nun aus echten Spiel- und Admin-Daten gerendert.
- Admin-Aktionen waren teilweise nur ueber sichtbare Buttons begrenzt. Behoben: zentrale technische Rechtepruefung ergaenzt.
- Der Kalender war nicht als Admin-View markiert. Behoben: Kalender ist dem Events-Modul zugeordnet.
- Dropchancen konnten ohne exakte 100%-Summe normalisiert statt blockiert werden. Behoben: Speichern im Admin Center blockiert ungueltige Summen.
- Der Browser lud durch den alten Query-String noch `game.js?v=gameplay-core-1`. Behoben: Script-Version auf `game.js?v=phase9-admin-1` aktualisiert.
- Beim direkten Admin-Aufruf blieb der Hero-Titel zunaechst auf dem alten Event-Titel. Behoben: Dashboard wird nach dem Setzen der aktiven Admin-Rubrik erneut gerendert.
- Gespeicherte News haetten beim naechsten Seitenladen auf `activeUser()` zugreifen koennen, bevor `state` voll initialisiert ist. Behoben: News-Normalisierung nutzt nun nur gespeicherte Autorwerte oder `System`.

## Offene Punkte

- Keine serverseitige Sicherheit ohne Backend.
- Import ist als Modell und Export/Backup-Struktur vorbereitet; ein vollstaendiger Datei-Import mit Konfliktauflistung bleibt eine spaetere Erweiterung.
- Spieler/Karten/Vereine/Nationen werden aus bestehenden Arrays dargestellt; persistente CRUD-Datenquellen fuer Stammdaten existieren noch nicht separat.
