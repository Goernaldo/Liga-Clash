# Liga Clash - Spielerbild-Policy

Stand: 2026-07-12

## Prioritaet

Alle Kartenansichten nutzen `resolvePlayerImage(card)`:

1. manuell bestaetigtes Bild
2. lizenziertes/freigegebenes Bild
3. professionelle neutrale Silhouette
4. generischer technischer Fallback ueber `onerror`

## Nicht produktiv anzeigen

Folgende Bildtypen werden blockiert:

- `cartoon`
- `comic`
- `generated`
- `ai-generated`
- `childlike`
- `dummy`
- `placeholder-test`

Bilder mit `imageApproved === false` oder Status `rejected`, `blocked` oder `unsuitable` werden ebenfalls nicht angezeigt.

## Fallback

Der produktive Fallback ist:

`assets/players/player-silhouette.svg`

Die Silhouette ist neutral, ohne Gesicht, ohne Verein, ohne Flagge und passt zum dunklen Liga-Clash-Design.

## Admin Center

Die Spieler-Verwaltung zeigt Bildstatus, Typ, Quelle und Lizenz-/Fallbackhinweis. Da das aktuelle Projekt lokal ohne echtes Backend laeuft, sind Uploads und dauerhafte externe Bildverwaltung nur als Metadaten/Pfade abbildbar.
