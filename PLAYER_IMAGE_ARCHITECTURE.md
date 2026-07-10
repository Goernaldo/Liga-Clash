# Liga Clash - Player Image Architecture

Stand: 10.07.2026

## Zielbild

Das Spielerbild-System soll austauschbar, rechtssicher und backendgestuetzt sein. Die Kartenlogik darf nie direkt von Sportmonks, API-Football oder einem anderen Anbieter abhaengen.

## Nicht-Ziele fuer den ersten Durchlauf

- Kein API-Schluessel im Frontend
- Kein Scraping
- Keine Google Images Suche
- Kein Download von Vereinsseiten, Wikipedia, Transferportalen oder Suchmaschinen
- Kein direkter Umbau von `game.js`
- Kein echter Import vor Lizenzklaerung

## Architekturuebersicht

```text
Admin Center
  -> eigenes Backend / Edge Function
    -> PlayerImageImportService
      -> PlayerImageProvider Adapter
        -> Sportmonks / API-Football / lokaler Upload
    -> Datenbank
    -> optionaler Bildcache / Storage

Spielkarten
  -> resolvePlayerImage(player)
    -> manuelles Bild
    -> lokaler Cache
    -> erlaubte Provider-URL
    -> placeholder.webp
```

## Provider-Abstraktion

Interface:

```ts
interface PlayerImageProvider {
  providerId: string;
  searchPlayer(player: PlayerIdentity): Promise<PlayerImageCandidate[]>;
  getPlayerByExternalId(externalId: string): Promise<PlayerImageCandidate | null>;
  getPlayerImageUrl(externalId: string): Promise<PlayerImageUrlResult>;
  downloadOrCacheImage(player: PlayerRecord): Promise<ImageCacheResult>;
  validateImage(imageUrl: string): Promise<ImageValidationResult>;
  getLicenseMetadata(externalId: string): Promise<ImageLicenseMetadata>;
  getAttributionMetadata(externalId: string): Promise<ImageAttributionMetadata>;
}
```

## Provider-Adapter

Geplante Adapter:

- `SportmonksPlayerImageProvider`
- `ApiFootballPlayerImageProvider`
- `ManualUploadPlayerImageProvider`
- `NullPlayerImageProvider`

`NullPlayerImageProvider` liefert immer den Platzhalter und ist wichtig fuer Tests.

## Backend-Pflicht

Das aktuelle Projekt besitzt kein sicheres Backend. Fuer echte Provider muss eines ergaenzt werden.

Empfehlung:

- Supabase Edge Functions fuer API-Aufrufe
- Supabase Secrets fuer Tokens
- Supabase Postgres fuer Metadaten
- Supabase Storage fuer erlaubte lokale Bildkopien

Alternative:

- Cloudflare Workers + D1/Postgres + R2
- Node Backend + Postgres + S3-kompatibler Storage

## Sicherheitsregeln

- Provider-Token nur als Server-Secret.
- Keine Provider-Token in `game.js`, `index.html`, LocalStorage oder GitHub.
- Admin Center spricht nur eigenes Backend an.
- Backend validiert Rolle: nur Owner/Admin darf Import starten.
- Import-Jobs brauchen Audit-Log.
- Bilddownloads nur, wenn Lizenzcache `cacheAllowed = true` hat.

## Zentrale Bildauflösung

Geplante Funktion:

```ts
function resolvePlayerImage(player: PlayerRecord): ResolvedPlayerImage {
  if (player.manualImagePath) return manual;
  if (player.localImagePath && player.imageStatus === "cached") return local;
  if (player.imageUrl && player.imageStatus === "remote_allowed") return remote;
  return placeholder;
}
```

Prioritaet:

1. manuell bestaetigtes Bild
2. erlaubter lokaler Cache
3. erlaubte Provider-URL
4. `/assets/players/placeholder.webp`

## Matching-Architektur

Matching darf nicht nur anhand des Namens passieren.

Scoring-Vorschlag:

| Kriterium | Gewicht |
| --- | ---: |
| externe Provider-ID existiert und passt | 100 |
| Name exact/normalisiert | 30 |
| Geburtsdatum | 25 |
| Nationalitaet | 15 |
| Verein | 15 |
| Position | 10 |

Entscheidung:

- ab 95 Prozent: automatische Zuordnung moeglich
- 75 bis 95 Prozent: manuelle Pruefung
- unter 75 Prozent: nicht uebernehmen

Diese Werte muessen konfigurierbar bleiben.

## Batch-Importer

Komponenten:

- `PlayerImageImportJob`
- `PlayerImageImportQueue`
- `PlayerImageMatcher`
- `ProviderRateLimiter`
- `ImageCacheService`
- `ImportAuditLog`

Job-Stati:

- `draft`
- `preview`
- `running`
- `paused`
- `completed`
- `failed`
- `cancelled`

## Admin-Center Modul

Geplante Rubrik:

```text
Spielerbilder
```

Funktionen:

- Provider waehlen
- API-Verbindung testen
- Liga/Saison/Verein waehlen
- Einzelspieler suchen
- Batch-Vorschau erstellen
- Import starten, pausieren, fortsetzen
- Fortschritt anzeigen
- unsichere Treffer pruefen
- fehlende Bilder anzeigen
- manuelles Bild ersetzen
- Lizenzdaten anzeigen
- Fehlerlog exportieren
- Cache leeren, sofern Lizenz erlaubt

## Caching-Regeln

`cacheAllowed` kommt aus Providervertrag/Backend-Konfiguration.

Wenn erlaubt:

- Download serverseitig
- Konvertierung nach WebP
- Pfad: `/assets/players/<internalPlayerId>.webp` oder Storage-Key `players/<internalPlayerId>.webp`
- Original-URL und Lizenzmetadaten speichern
- Bilder nicht neu laden, wenn `imageUpdatedAt` frisch genug ist

Wenn nicht erlaubt:

- Nur erlaubte Remote-URL speichern
- Kein dauerhafter Download
- Hotlinking-Regeln beachten
- Fallback verwenden, falls Remote-URL fehlschlaegt

## Auswirkungen auf bestehenden Code bei spaeterer Umsetzung

Zu aendern waeren voraussichtlich:

- `game.js`: Kartenmodell normalisieren, `playerPhoto` durch `resolvePlayerImage` ersetzen
- `index.html`: Admin-Rubrik Spielerbilder
- `styles.css`: Admin-Import-UI, Platzhalterdarstellung
- neue Backend-Dateien fuer Provider/Importer
- neue Asset-/Storage-Struktur fuer `assets/players/placeholder.webp`

