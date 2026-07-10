# Liga Clash - Player Image Analysis

Stand: 10.07.2026

## Auftrag

Diese Datei analysiert ausschliesslich das vorhandene Kartensystem, die Spielerdatenbank und die aktuelle Bildzuordnung. Es wurde kein Spielcode geaendert.

## Untersuchte Dateien

- `game.js`
- `index.html`
- `styles.css`
- `DATA_MODEL.md`
- `docs/DATA_MODEL.md`
- `docs/CARD_SYSTEM.md`
- `PROJECT_ANALYSIS.md`

## Aktueller Projektstatus

Liga Clash ist aktuell ein reines Browser-Frontend. Der Spielstand wird im Browser per `localStorage` gespeichert:

```text
localStorage key: liga-clash-state-v1
```

Es gibt kein Backend, keine Datenbank, keine Serverless Functions und keinen sicheren Secret-Speicher im Projekt. API-Schluessel duerfen deshalb aktuell nicht direkt integriert werden.

## Wo werden Spieler gespeichert?

Spieler/Karten liegen im Moment direkt in `game.js`.

Wichtige Quellen:

- `GAME_CARDS`
- `SEASON_26_27_CARDS`
- `baseCards`
- `state.deck`

`GAME_CARDS` enthaelt statische Kartendefinitionen ueber `cardDef(...)`.
`SEASON_26_27_CARDS` ergaenzt weitere Karten.
`baseCards` erzeugt den Starterbesitz.
`state.deck` enthaelt die Besitzkarten des Spielers.

## Welche eindeutigen Spieler-IDs existieren?

Aktuell gibt es nur interne Karten-IDs, zum Beispiel:

- `ducksch`
- `musiala`
- `bayern-1`
- `werder-f-1`

Bei Besitzkarten wird aus der Quellkarte eine neue Instanz erzeugt:

```text
owned-<sourceId>-<timestamp>-<random>
```

Zusaetzlich existiert `sourceId`, um Besitzkarten wieder auf ihre Ursprungskarte zurueckzufuehren.

Bewertung:

- Interne IDs sind fuer Spielkarten nutzbar.
- Es gibt noch keine stabile, echte Spieler-ID unabhaengig von Kartenserie und Besitzinstanz.
- Fuer Bildimport sollte zwischen `playerId` und `cardId` getrennt werden.

## Sind externe Provider-IDs vorhanden?

Nein. Es gibt aktuell keine Felder wie:

- `externalIds`
- `sportmonksId`
- `apiFootballId`
- `imageExternalId`

## Wie werden Spielerbilder momentan geladen?

Aktuelle Logik:

```js
function playerPhoto(card) {
  return card.photo || "";
}
```

Die Anzeige laeuft ueber:

```js
renderCardPhoto(card, className)
renderPlayerListPhoto(card)
```

Wenn `card.photo` leer ist, wird kein Spielerbild gerendert. Ein einheitlicher Platzhalter existiert aktuell nicht.

## Welche Kartenkomponenten verwenden Bilder?

Spielerbilder werden verwendet in:

- Mini-Karten in Sammlung/Deck/Fusion ueber `renderCardPhoto(card)`
- Pack-Reveal-Karten ueber `renderCardPhoto(card, "pack-reveal-photo")`
- Spielerlisten ueber `renderPlayerListPhoto(card)`
- normale Match-/Deckkarten ueber `renderPlayerCard(card)`

Vereinswappen laufen separat ueber:

- `crestUrl(clubId)`
- `getClub(name)`
- `card.crest`

## Gibt es Platzhalterbilder?

Nein. Nach der letzten Kartenbereinigung werden Karten ohne Bild leer dargestellt. Der Prompt fordert spaeter:

```text
/assets/players/placeholder.webp
```

Diese Datei existiert aktuell nicht.

## Ist das Projekt GitHub-Pages-Frontend oder Backend-App?

Das vorhandene Projekt wirkt wie ein statisches Browsergame:

- `index.html`
- `styles.css`
- `game.js`
- lokale Assets
- kein `package.json`
- kein Backend-Code
- keine Server-Konfiguration
- keine Datenbank-Migrationen

Fuer GitHub Pages waere dieses Setup lauffaehig, aber nicht geeignet fuer geheime API-Zugriffe.

## Wo koennen API-Schluessel sicher gespeichert werden?

Aktuell nirgendwo im Projekt.

Erforderlich ist eine Backend- oder Serverless-Schicht, zum Beispiel:

- Supabase Edge Functions mit Secrets
- Cloudflare Workers mit Environment Variables
- eigenes Node/Express Backend
- GitHub Actions nur fuer manuelle, serverseitige Import-Jobs, falls keine Runtime benoetigt wird

Der Browserclient darf nur ein eigenes Backend ansprechen, nie direkt den Provider mit Secret.

## Welche Speicherloesung wird verwendet?

Aktuell nur `localStorage`.

Das reicht nicht fuer:

- 10.000 Spieler
- Batch-Status
- Import-Protokolle
- Bild-Lizenzmetadaten
- manuelle Verifikationen
- serverseitigen Bildcache

Empfohlen:

- Supabase Postgres fuer Spieler, Karten, Bildmetadaten, Imports
- Supabase Storage oder eigener Object Storage fuer erlaubte lokale Bilder
- Edge Functions fuer Provider-Aufrufe

## Provider-Recherche

### Sportmonks

Offizielle Dokumentation:

- Players Endpoint: https://docs.sportmonks.com/v3/endpoints-and-entities/endpoints/players/get-all-players
- Rate Limits: https://docs.sportmonks.com/v3/api/rate-limit
- Football API/Pricing: https://www.sportmonks.com/football-api/
- Terms: https://www.sportmonks.com/terms-of-service/

Relevante Fakten:

- Player-Endpoint liefert `id`, `name`, `display_name`, `position_id`, `date_of_birth`, `gender` und `image_path`.
- `image_path` ist laut Docs der Pfad zum Player Headshot.
- `IdAfter`-Filter eignet sich zum Fortsetzen grosser Imports.
- Pagination ist aktiv, Standard `25`, max `50` pro Seite.
- Rate Limits sind pro Entity und pro Stunde: Starter 2.000, Pro 2.500, Growth 3.000, Enterprise 5.000 API Calls pro Entity/Stunde.
- Preise starten laut Website bei 29 EUR/Monat fuer 5 Ligen; hoehere Plaene decken mehr Ligen ab.

Lizenzstatus:

- Technisch sehr geeignet.
- Sportmonks Terms sagen aber, dass Logos und Profilfotos urheberrechtlich ihren Rechteinhabern gehoeren und der Nutzer die Rechte/Erlaubnis selbst klaeren muss.
- Lokale Speicherung und kommerzielle Kartennutzung von Profilfotos: vor Vertragsabschluss schriftlich klaeren.

### API-Football / API-Sports

Offizielle Dokumentation:

- Documentation: https://www.api-football.com/documentation-v3
- Pricing: https://www.api-football.com/pricing
- Terms: https://www.api-football.com/terms

Relevante Fakten:

- Pricing nennt `Players & Coachs` als enthaltenen Endpoint-Bereich.
- Tageslimits: Free 100 Requests/Tag, Pro 7.500, Ultra 75.000, Mega 150.000 Requests/Tag.
- Dashboard-Subscriptions stoppen laut Terms bei erreichtem Quota fuer den Rest des Tages.
- Terms behandeln Logos, Images und Trademarks separat.

Lizenzstatus:

- API-Football stellt Bilder/Logos laut Terms fuer Identifikation und Beschreibung bereit, beansprucht daran aber keine IP-Rechte.
- Drittanbieterrechte koennen betroffen sein; der Nutzer ist fuer Erlaubnisse verantwortlich.
- Speichererlaubnis, kommerzielle Nutzung, Hotlinking und Attribution fuer Spielerbilder: vor Vertragsabschluss klaeren.

## Provider-Vergleich

| Kriterium | Sportmonks | API-Football |
| --- | --- | --- |
| Spielerabdeckung | Sehr breite Football API mit 2.500+ Ligen laut Website | Alle Plaene enthalten alle Wettbewerbe/Endpoints, Free bei Seasons begrenzt |
| Spielerbilder | `image_path` fuer Player Headshot dokumentiert | Bilder/Images in Terms behandelt; konkrete Player-Foto-Felder in oeffentlich auslesbarer Doku hier nicht eindeutig verifizierbar |
| Kostenmodell | Liga-basiert, ab 29 EUR/Monat; mehr Ligen in hoeheren Plaenen | Request-basiert, Free bis Mega; Pro ab 19 USD/Monat laut Pricing |
| Rate Limits | pro Entity/Stunde, z. B. 2.000 bis 5.000 | pro Tag, z. B. 100 bis 150.000 |
| Fortsetzen grosser Imports | `IdAfter` explizit dokumentiert | Muss ueber Pagination/Status/Provider-Endpunkte geplant werden |
| Speichererlaubnis | Vor Vertragsabschluss klaeren | Vor Vertragsabschluss klaeren |
| Anzeigeerlaubnis | Vor Vertragsabschluss klaeren | Nur Identifikation/Beschreibung genannt; Rechtsfreigabe klaeren |
| kommerzielle Nutzung | Terms erlauben Produkte auf Basis der Daten grundsaetzlich, aber Bildrechte gesondert klaeren | Terms warnen vor notwendigen Lizenzen, besonders bei kommerziellen/Fantasy-Nutzungen |
| Quellenangabe | Vor Vertragsabschluss klaeren | Vor Vertragsabschluss klaeren |
| Technische Integration | Stark geeignet wegen Headshot-Feld, IdAfter, Includes, Entity-Ratelimit | Gutes Preis-/Request-Modell, aber Bildfeld-Details und Rechte unklarer |

## Fazit

Technisch ist Sportmonks fuer den ersten echten Import am besten geeignet, weil Player-IDs, `image_path`, Geburtsdatum, Position, Filter und Fortsetzungsmechanik gut dokumentiert sind.

Rechtlich ist keiner der Anbieter ohne weitere Klaerung sofort fuer ein kommerzielles Kartenspiel freigegeben. Vor Download, Cache oder Anzeige echter Spielerfotos muessen Bildrechte, Speicherrechte, kommerzielle Nutzung und Attribution schriftlich geklaert werden.

