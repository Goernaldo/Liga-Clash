# Core Feature Bug Report

Stand: 2026-07-12

## Gefundene und behobene Fehler

### Pack-Reveal zaehlte potenziell doppelt

Ursache: Nach der Umstellung auf delegierte Reveal-Actions waren noch direkte Listener fuer `skip`, `next` und `all` vorhanden.

Fix:

- direkte Reveal-Action-Listener entfernt
- ein zentraler delegierter Listener verarbeitet alle `data-reveal-action`-Buttons

Status: behoben.

### `getPackImageUrl()` fehlte

Ursache: Die neue Pack-Reveal- und Admin-Vorschau nutzte bereits eine einheitliche Bildaufloesung, die Funktion war aber noch nicht implementiert.

Fix:

- `getPackImageUrl(pack)` implementiert
- Assetpfade und lokale `state.adminData.packImages` werden einheitlich aufgeloest

Status: behoben.

### Booster-Bild-Upload-Handler fehlte

Ursache: Der Change-Listener war bereits am Admin-Booster-Listenelement registriert, aber `handleAdminBoosterImageUpload()` existierte noch nicht.

Fix:

- Upload-Handler implementiert
- Dateityp- und Groessenvalidierung ergaenzt
- lokales Admin-Asset mit Metadaten gespeichert
- Pack wird auf das neue Bild gesetzt

Status: behoben.

### Phase-8-Tests erwarteten alten Liganamen

Ursache: `Unterste Liga` wurde als sichtbarer Name durch `Rookie-Liga` ersetzt.

Fix:

- statische und simulierte Phase-8-Tests auf `Rookie-Liga` aktualisiert
- Test um Liga-Kurzname und Admin-Teilnehmeranzeige erweitert

Status: behoben.

## Offene Fehler

Keine bekannten kritischen Fehler aus dieser Nachbesserung.

## Bekannte Einschraenkungen

- Lokale Booster-Bild-Uploads sind kein echter Server-Upload.
- Admin-Liga-Teilnehmerverwaltung zeigt und prueft Teilnehmer, bearbeitet aber aktive Wochen nicht direkt.
- Der In-App-Browser-Viewport-Override konnte nicht eindeutig auf mobile Pixelmasse umgeschaltet werden.

## Risiko bei Erweiterung

- Data-URLs in `localStorage` koennen bei vielen grossen Bildern Speicherlimits erreichen.
- Wenn spaeter ein Backend kommt, sollte `state.adminData.packImages` durch eine echte AssetStorage-Abstraktion ersetzt werden.
- Manuelle Matches und automatische Simulation teilen sich Matchdaten. Neue Gameplay-Features muessen beide Pfade bewusst unterscheiden.
