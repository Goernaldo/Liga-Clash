# Liga Clash - Player Image Import Plan

Stand: 10.07.2026

## Grundregel

Kein Import echter Spielerbilder startet, bevor Providervertrag, Bildrechte, Speichererlaubnis, kommerzielle Nutzung und Attribution schriftlich geklaert sind.

## Empfohlene Reihenfolge

1. Backend/Serverless-Schicht anlegen.
2. Datenmodell fuer `Player`, `PlayerImage`, `ImportJob`, `ImportResult` anlegen.
3. Platzhalterbild `/assets/players/placeholder.webp` erstellen.
4. `resolvePlayerImage(player)` planen und spaeter im Code integrieren.
5. Provider-Abstraktion implementieren.
6. Erst `NullPlayerImageProvider` und `ManualUploadPlayerImageProvider` testen.
7. Nach Lizenzfreigabe Sportmonks-Adapter implementieren.
8. Batch-Importer mit Preview-Modus aktivieren.

## 10.000-Spieler-Import

### Vorbereitung

- Spielerbasis in Datenbank normalisieren.
- Deduplizierung nach internem `playerId`.
- Provider-Zugangsdaten in Server-Secret speichern.
- Lizenzkonfiguration pro Provider setzen:
  - `cacheAllowed`
  - `remoteDisplayAllowed`
  - `commercialUseAllowed`
  - `attributionRequired`
- Batch-Groesse zentral konfigurieren, z. B. `100`.
- Parallelitaet begrenzen, z. B. `3` bis `5`.

### Ablauf

```text
1. Admin waehlt Provider, Liga, Saison, Verein oder Spieler.
2. Backend erstellt ImportJob im Status draft.
3. Preview-Lauf sucht Kandidaten, laedt aber keine Bilder dauerhaft.
4. Matching berechnet Confidence.
5. Treffer werden kategorisiert:
   - >= 95 % matched
   - 75-95 % needs_review
   - < 75 % rejected/missing
6. Admin prueft unsichere Treffer.
7. Admin startet Uebernahme.
8. Backend verarbeitet Spieler in Batches.
9. RateLimiter prueft Provider-Limits.
10. Ergebnisse werden pro Spieler gespeichert.
11. Bei Fehlern werden einzelne Spieler protokolliert, nicht der ganze Job verworfen.
12. Bei Abbruch bleibt Cursor erhalten.
13. Fortsetzen nutzt Cursor und ueberspringt bereits verarbeitete Spieler.
```

### Fortsetzen nach Abbruch

Sportmonks bietet fuer All-Players den Filter `IdAfter`, der fuer Fortsetzung geeignet ist. Zusaetzlich sollte das eigene Backend immer den letzten erfolgreich verarbeiteten internen Spieler speichern.

```text
job.cursor = lastProviderId oder lastInternalPlayerId
```

### Rate-Limit-Behandlung

- Provider-Limits zentral im `ProviderRateLimiter`.
- Bei `429`:
  - Retry-After beachten, falls vorhanden.
  - Job pausieren oder Backoff starten.
  - maximal definierte Retries.
- Keine parallelen unkontrollierten Browser-Requests.
- Keine Provider-Aufrufe aus dem Frontend.

### Keine mehrfachen Downloads

Vor jedem Download pruefen:

- existiert `localImagePath`?
- ist `imageUpdatedAt` noch frisch?
- ist `imageManuallyVerified` true?
- erlaubt Lizenz ein Update?
- ist Provider-URL unveraendert?

Manuell bestaetigte Bilder werden nicht automatisch ueberschrieben.

## Preview-Modus

Preview speichert:

- Kandidatenname
- Provider-ID
- Bild-URL
- Confidence
- Lizenzstatus
- Entscheidungsvorschlag

Preview speichert keine dauerhafte Bildkopie, ausser der Providervertrag erlaubt Cache bereits.

## Admin-Center Flow

```text
Admin Center > Spielerbilder
  Provider testen
  Import-Konfiguration
  Preview starten
  Treffer pruefen
  Import starten
  Fortschritt beobachten
  Fehler exportieren
```

## Fehlerfaelle

| Fehler | Verhalten |
| --- | --- |
| kein Provider-Secret | Import blockieren |
| Provider nicht erreichbar | Job pausieren, Retry |
| Rate Limit | Backoff/Pause |
| Spieler doppelt | zusammenfuehren oder manuell pruefen |
| gleicher Name | nur mit Geburtsdatum/Nationalitaet/Verein automatisch matchen |
| kein Bild | `imageStatus = missing` |
| Bild-URL defekt | `imageStatus = error`, Platzhalter |
| Lizenz unklar | `needs_legal_review`, nicht anzeigen/cache |
| Abbruch | Cursor speichern, fortsetzbar |

## Provider-Wahl fuer ersten echten Adapter

Empfehlung technisch: Sportmonks.

Gruende:

- `image_path` fuer Player Headshot dokumentiert.
- eindeutige Player-ID vorhanden.
- Geburtsdatum, Nationalitaet, Position vorhanden.
- `IdAfter` fuer grosse Imports.
- klare Entity-Rate-Limits.

Aber:

- Bildrechte muessen vorher schriftlich geklaert werden.
- Ohne Freigabe nur Platzhalter oder manuell lizenzierte Uploads verwenden.

## Dateien, die spaeter betroffen waeren

Frontend:

- `game.js`
- `index.html`
- `styles.css`

Neue Dateien/Ordner:

- `assets/players/placeholder.webp`
- `src/player-images/resolvePlayerImage.*`
- `src/player-images/providers/*`
- `src/player-images/importer/*`
- `supabase/functions/player-image-import/*` oder vergleichbare Backend-Struktur
- Datenbankmigrationen fuer `players`, `player_images`, `player_image_import_jobs`, `player_image_import_results`, `player_image_import_logs`

