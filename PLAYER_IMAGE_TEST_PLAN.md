# Liga Clash - Player Image Test Plan

Stand: 10.07.2026

## Ziel

Der Bildimport darf keine falschen Spielerbilder zuordnen, keine API-Schluessel offenlegen und keine Lizenzregeln verletzen.

## Testgruppen

### Datenmodell

- Karte ohne `playerId` wird korrekt migriert.
- Besitzkarte mit `sourceId` verweist auf denselben Spieler wie die Basiskarte.
- Serienkarten teilen denselben `playerId`, aber unterschiedliche `cardDefinitionId`.
- `PlayerImage` kann `missing`, `manual`, `cached`, `remote_allowed`, `needs_review`, `error` abbilden.

### Provider-ID und Matching

- Externe Provider-ID passt eindeutig.
- Spieler mit gleichem Namen, aber anderem Geburtsdatum wird nicht automatisch zugeordnet.
- Spieler ohne Geburtsdatum landet maximal in `needs_review`.
- Vereinswechsel wird erkannt und senkt Confidence, blockiert aber nicht zwingend.
- Nationalitaet und Position erhoehen Confidence nur zusammen mit Name/Geburtsdatum.
- Confidence ueber 95 % wird automatisch vorgeschlagen.
- Confidence 75-95 % geht in manuelle Pruefung.
- Confidence unter 75 % wird nicht uebernommen.

### Bilder

- Fehlendes Bild nutzt Platzhalter.
- Ungueltige Bild-URL nutzt Platzhalter.
- Manuell gesetztes Bild hat Prioritaet vor Providerbild.
- Lokaler Cache hat Prioritaet vor Provider-URL, wenn erlaubt.
- Provider-URL wird nur verwendet, wenn Remote-Anzeige erlaubt ist.
- `imageUpdatedAt` verhindert unnoetige Updates.
- Manuell verifizierte Bilder werden nicht automatisch ueberschrieben.

### Lizenz

- Import blockiert, wenn `licenseReviewStatus = unknown`.
- Cache blockiert, wenn `cacheAllowed = false`.
- Remote-Anzeige blockiert, wenn `remoteDisplayAllowed = false`.
- Kommerzielle Nutzung wird als offen markiert, wenn Anbieter keine klare Freigabe liefert.
- Lizenzmetadaten und Attribution werden gespeichert.
- Export zeigt Quelle, Provider, Bild-URL, Autor, Lizenzstatus.

### Sicherheit

- Kein API-Schluessel in `game.js`, `index.html`, LocalStorage oder Browser-Netzwerkrequests.
- Provider-Aufruf erfolgt nur serverseitig.
- Nur Owner/Admin darf Import starten.
- Moderator darf Status sehen, aber keinen Massenimport starten, falls so konfiguriert.
- Fehlerlogs enthalten keine Secrets.

### Batch-Import

- 100 Spieler.
- 1.000 Spieler.
- simuliert 10.000 Spieler.
- Job pausieren.
- Job fortsetzen.
- Rate Limit simulieren.
- API-Ausfall simulieren.
- Doppelte Spieler simulieren.
- Bereits vorhandene Cache-Bilder werden uebersprungen.
- Unsichere Treffer bleiben blockiert.

### Admin Center

- Provider-Verbindung testen.
- Liga/Saison/Verein auswaehlen.
- Einzelspieler suchen.
- Preview starten.
- Treffer bestaetigen.
- Treffer ablehnen.
- Bild manuell ersetzen.
- Fehlerprotokoll exportieren.
- Cache leeren nur bei erlaubtem Cache.

### Kartenintegration

- Sammlung zeigt korrektes Bild.
- Deck zeigt korrektes Bild.
- Pack-Reveal zeigt korrektes Bild.
- Match-/Battle-Karten zeigen korrektes Bild.
- Fehler beim Laden eines Bildes faellt auf Platzhalter zurueck.
- Bild verdeckt nicht Overall, Position, Name, Vereinslogo oder Stats.
- Responsiv auf Desktop und Mobile.

## Automatisierte Tests

Empfohlene Testdateien:

- `tests/player-image-data-model.test.mjs`
- `tests/player-image-matching.test.mjs`
- `tests/player-image-provider-contract.test.mjs`
- `tests/player-image-importer.test.mjs`
- `tests/player-image-security.test.mjs`

## Manuelle Abnahmetests

1. Lizenzstatus auf `unknown` setzen: Import darf nicht starten.
2. Manuelles Bild setzen: Karte muss dieses Bild anzeigen.
3. Providerbild mit 80 % Confidence: Admin muss pruefen.
4. Providerbild mit defekter URL: Platzhalter muss erscheinen.
5. Batch abbrechen und fortsetzen: keine Duplikate.
6. 10.000-Spieler-Simulation: Browser bleibt bedienbar.

## Bestehende Tests

Aktuell existiert:

- `tests/gameplay-static.test.mjs`

Der neue Bildimport sollte eigene Tests bekommen und nicht mit Gameplay-Tests vermischt werden.

