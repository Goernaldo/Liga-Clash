# Liga Clash - Project Analysis

Stand: 10.07.2026  
Projekt Owner: GoernaldoBerlin

## Ziel der Analyse

Diese Analyse dokumentiert den aktuellen Zustand des bestehenden Browsergames "Liga Clash". Das Projekt soll nicht neu gebaut werden. Alle weiteren Arbeiten sollen das vorhandene Spiel verstehen, schuetzen und gezielt erweitern.

## Projektstruktur

```text
liga-clash-game/
  index.html
  styles.css
  game.js
  assets/
    cards/
      player-card-classes.png
    packs/
      bronze.png
      silver.png
      gold.png
      elite.png
    tiles/
      tile-booster.png
      tile-collection.png
      tile-daily-bonus.png
      tile-deck.png
      tile-league.png
      tile-play.png
      tile-shop.png
```

## Wichtige Dateien

### `index.html`

Enthaelt die komplette statische App-Struktur:

- Hauptmenue / Overlay
- Header mit Profil, Club, Logo, Wallet und Schnellzugriff
- grosse Hauptmenue-Kacheln
- untere Navigationsleiste
- Feature-Panel
- Login-Panel
- Admin Center
- Matchbereich
- Deckbereich

Diese Datei darf nicht komplett ersetzt werden. Sie enthaelt viele IDs, die direkt von `game.js` verwendet werden.

### `styles.css`

Enthaelt das komplette visuelle System:

- Dark/Neon/Football-Design
- Hauptmenue-Kacheln
- Header
- Admin Center
- Kalender
- Kartenrahmen
- Booster
- Login
- Matchbereich
- Responsive Layouts
- Animationen fuer Licht, Partikel, Haze, Kachelglow, Pack-Reveal und Coins

Diese Datei ist sehr wichtig fuer den Look des Spiels und darf nicht komplett ersetzt werden.

### `game.js`

Enthaelt fast die gesamte Spiellogik in einer Datei:

- Datenmodelle
- Konstanten
- Spielzustand
- LocalStorage
- Rendering
- Navigation
- Admin Center
- Login/Rollen
- Karten
- Booster
- Events
- Kalender
- Karriere
- Matchsystem
- Fusion/Evolution
- Deckfilter
- Reward Pools

Diese Datei ist aktuell der technische Kern des Spiels und gleichzeitig die groesste technische Schuld, weil sehr viele Systeme monolithisch gebuendelt sind.

## Vorhandene Funktionen

### Hauptmenue

Vorhanden:

- Premium-Football-Overlay mit animierter Stadionatmosphaere
- Header mit Nutzer, Club, Logo, Coins/Diamanten und Schnellzugriff
- grosse Kacheln fuer Fusion, Sammlung, Play, Liga & Missionen, Deck und Shop
- untere Navigation mit Hauptmenue, Booster, News, Events, Ranglisten und Club
- Event-Leiste im Hauptmenue, gesteuert ueber Admin-Events
- Daily-Bonus-Kachel

Status: funktional, optisch weit ausgebaut.

### Login und Profil

Vorhanden:

- Login-Panel
- Benutzer-Auswahl
- PIN-System
- Profilbearbeitung fuer Anzeigename, E-Mail und PIN
- aktive Benutzeranzeige
- Rollen: Owner, Admin, Moderator, User
- gesperrte Benutzer
- Wallet pro Benutzer

Status: funktionaler Prototyp. Noch kein echtes Backend, keine echte Registrierung und keine sichere Authentifizierung.

### Admin Center

Vorhanden:

- Admin-Navigation
- Dashboard-Bereich
- Vereins- und Spieler-Datenbank
- Spieler-Import-Ansicht
- Transfers & Updates
- Karten-Editor/Testwerkzeuge
- Booster & Packs
- Kalender & Events
- Missionen/Event-Kategorien
- Benutzer & Rechte
- Einstellungen mit Reward-Pools
- Systeminformationen
- Logs/Statusmeldungen

Status: sehr umfangreicher lokaler Admin-Prototyp. Viele Bereiche sind funktional, manche sind eher UI/Mock oder Testwerkzeuge.

### Kalender und Events

Vorhanden:

- Admin-Kalender fuer Juli 2026
- Eventliste
- Eventdetails
- Event erstellen
- Event bearbeiten
- Event aktivieren/deaktivieren
- Event loeschen
- Event duplizieren
- Startdatum, Startzeit, Enddatum, Endzeit
- freie Eventtitel und Beschreibung
- Event-Kategorien
- Anzeige aktiver Events im Spielerbereich und Hauptmenue

Status: funktional im LocalStorage. Kalender ist aktuell fest auf Juli 2026 ausgelegt und sollte spaeter dynamisch werden.

### Booster und Packs

Vorhanden:

- Booster-Seite im unteren Menue
- Pack-Bilder fuer Bronze, Silber, Gold und Elite
- Gratis-Packs
- Pack-Kosten in Coins oder Diamanten
- Kartenanzahl pro Pack
- Pool-Auswahl: Mixed, Bundesliga, Frauen-Bundesliga, DFB-Pokal, TOTW, Icon usw.
- Positionspacks
- Drop-Rates pro Pack
- Booster im Admin Center anlegen, bearbeiten, aktivieren/deaktivieren und loeschen
- Pack-Reveal mit mehreren Karten

Status: funktional. Noch ohne echtes Inventar-/Shop-Backend.

### Karten und Sammlung

Vorhanden:

- Kartenklassen:
  - Gewoehnlich
  - Ungewoehnlich
  - Selten
  - Besonders Selten
  - Ultra Selten
  - Bronze
  - Silber
  - Gold
  - Episch
  - Legendaer
  - Elite
- Klassenbereiche von 50 bis 299
- Kartenserien:
  - Standard
  - Rookie
  - Team of the Week
  - Team of the Season
  - Winter
  - Sommer
  - Legend
  - Icon
  - Mythic
  - Anniversary
  - Hall of Fame
- Spielerbilder ueber Wikimedia/Platzhalter-Logik
- Vereinswappen ueber Transfermarkt-CDN-URL-Logik
- Werte fuer Feldspieler
- eigene Torwartwerte
- Spezialwerte Spielintelligenz und Teamgeist
- Levelsystem bis Level 100
- PRO/Evolution-System mit Sternen
- Sammlung mit Filtern nach Liga, Verein und Position
- Deck mit Filtern nach Liga, Verein und Position

Status: spielbar als Prototyp. Die Daten sind aber statisch im JavaScript und noch nicht sauber getrennt.

### Fusion und Evolution

Vorhanden:

- eigene Fusion-Kachel im Hauptmenue
- Fusion-Seite fuer Leveln und Entwickeln
- Level +10 und +1
- Evolution nur bei passenden Karten
- Regeln:
  - Karte Level 100 + gleiche Karte Level 100 = Stern
  - Level 99 fusioniert nicht
  - gleiche Serie und gleicher Evolutionsstand erforderlich
  - Qualitaet Bronze/Silber/Gold wird aus Kartenklasse abgeleitet
- bis zu 5 Sterne vorbereitet

Status: funktional. Fuer langfristige Balance fehlen noch Kosten, Materialien, Animationen und klare UI-Warnungen vor dem Verbrauch einer Karte.

### Deck und Match

Vorhanden:

- 6 Karten im Matchdeck
- Formation:
  - 2-2-1
  - 2-1-2
  - 1-2-2
  - 3-1-1
- 1 Torwart plus Verteidigung/Mittelfeld/Angriff
- CPU/Spiel entscheidet Spielsituationen
- Spielsituationen nutzen unterschiedliche Werte
- Karten werden je Situation gewaehlt
- Matchlog
- LP, Score und Wochenwertung

Status: funktionaler taktischer Kern. Noch kein tiefes Balancing, keine echten Gegnerprofile und keine Online-Logik.

### Karriere / Offline

Vorhanden:

- Karriere-Feature
- Schnelles KI-Spiel
- Challenges
- Gegnerstufen
- Belohnungen
- Karriere-Log
- Saisonfortschritt
- Preis-Pool fuer schnelles KI-Spiel im Admin Center

Status: guter erster Offline-Prototyp. Noch fehlen Tabellenlogik, Auf-/Abstieg in voller Form, Pokalbaum und Missionsfortschritt.

### Shop

Vorhanden:

- Scout-Ticket
- Coin-Kauf gegen Diamanten
- Gold-Scout
- Buttons mit Kostenpruefung

Status: funktional als Prototyp. Kein echtes Payment, kein echtes Shop-Inventar.

### News, Ranglisten, Club, Nachrichten, Freunde

Vorhanden:

- News-Feature
- Ranglisten-Feature
- Club-Feature
- Nachrichten-Feature mit Geschenk
- Freunde-Feature mit Freundschaftsspiel-Buttons

Status: teilweise Mock/Prototyp. Noch keine echten Datenquellen oder Persistenz pro Feature.

## Datenmodelle

### Aktueller Spielzustand

Der zentrale Zustand liegt in `state` und wird ueber LocalStorage gespeichert:

```text
localStorage key: liga-clash-state-v1
```

Enthalten sind unter anderem:

- Coins
- Diamanten
- LP
- Teamklasse
- Liga
- Deck
- ausgewaehlte Karten
- Formation
- Events
- BoosterPacks
- FreePacks
- RewardPools
- AdminUsers
- ActiveUserId
- Career
- Filter fuer Sammlung und Deck

### Persistenz

Vorhanden:

- `loadState()`
- `saveState()`
- `normalizeState()`
- Migrationen fuer alte Events, Booster, Karten, User, Reward Pools und Filter

Status: solide fuer einen lokalen Prototyp. Fuer ein echtes Spiel braucht es spaeter Backend/API oder mindestens modulare Storage-Schicht.

## Assets

Vorhandene Assets:

- Kartenklassen-Uebersicht: `assets/cards/player-card-classes.png`
- Boosterpacks: Bronze, Silber, Gold, Elite
- Hauptmenue-Kacheln: Booster, Sammlung, Daily Bonus, Deck, Liga, Play, Shop

Alle Assets muessen erhalten bleiben. Keine Datei loeschen oder ersetzen, ohne ausdrueckliche Freigabe.

## Was funktioniert bereits gut?

- Das Spiel hat eine klare visuelle Richtung.
- Hauptmenue, Admin Center und Kartenlook passen zum Premium-Mobile-Game-Ziel.
- Viele Nutzerwuensche sind bereits als Systeme umgesetzt.
- LocalStorage-Migrationen verhindern, dass alte Spielstaende sofort kaputtgehen.
- Events, Booster, Benutzer, Wallets und Reward Pools sind bereits im Admin Center editierbar.
- Kartenfilter in Sammlung und Deck sind vorhanden.
- Matchsystem mit Formationen und situationsbasierten Werten existiert.
- Fusion/Evolution ist als Kernsystem angelegt.

## Unvollstaendige Systeme

### Backend / echte Datenbank

Aktuell gibt es keine echte Datenbank. Alles liegt lokal im Browser.

Folgen:

- Spielstand ist geraete- und browserabhaengig.
- Rollen/PINs sind nicht sicher.
- Adminrechte sind nur Prototyp-Logik.
- keine Synchronisierung zwischen Spielern.

### Login / Registrierung

Aktuell ist Login ein lokales PIN-System. Fuer Produktion fehlen:

- Registrierung
- Passwort-Hashing
- Sessions
- echte Rollenrechte serverseitig
- Account-Wiederherstellung
- sichere Owner/Admin-Verwaltung

### Datenbank fuer Vereine und Spieler

Vereine und Karten sind direkt in `game.js` hinterlegt. Fuer langfristige Wartung sollten sie ausgelagert werden:

- `data/clubs.json`
- `data/cards.json`
- `data/players.json`
- `data/leagues.json`
- `data/boosters.json`
- `data/events.json`

### Admin Center

Viele Admin-Bereiche funktionieren, aber einige sind noch oberflaechlich:

- Transfers sind noch keine echte Datenpipeline.
- Spielerimport ist noch lokale Ansicht, kein echter Import.
- Karteneditor ist eher Testwerkzeug als vollwertiger Editor.
- Systeminformationen sind Mock-Daten.
- Logs sind nur kurze Statusmeldungen.

### Kalender

Der Kalender ist auf Juli 2026 fixiert. Fuer ein echtes Spiel braucht es:

- Monatswechsel
- Jahreswechsel
- echte Datumsrechnung
- wiederkehrende Events
- Event-Archiv
- Event-Prioritaeten

### Matchsystem

Der Kern ist da, aber noch fehlen:

- Balancing-Formeln
- klare Matchsimulation ueber mehrere Runden
- Gegner-KI mit Decks
- Belohnungslogik pro Modus
- Karten-XP aus Matches
- Matchabschluss-Screen
- Statistiken

## Technische Schulden

### Monolithisches JavaScript

`game.js` enthaelt ueber 4300 Zeilen. Systeme sind funktional, aber zu stark gekoppelt.

Empfohlene spaetere Aufteilung:

```text
src/
  data/
    clubs.js
    cards.js
    boosters.js
    events.js
  state/
    storage.js
    migrations.js
  systems/
    cards.js
    boosters.js
    events.js
    match.js
    career.js
    fusion.js
    users.js
  ui/
    featurePanel.js
    admin.js
    collection.js
    deck.js
    calendar.js
    render.js
```

### Grosse CSS-Datei

`styles.css` enthaelt fast 4600 Zeilen. Das Design ist stark, aber schwer wartbar.

Empfohlene spaetere Aufteilung:

```text
styles/
  base.css
  layout.css
  menu.css
  cards.css
  admin.css
  calendar.css
  booster.css
  match.css
  responsive.css
```

### Direkte `innerHTML`-Nutzung

Viele UI-Bereiche werden per `innerHTML` gerendert. Das ist fuer den Prototyp schnell, aber spaeter riskant.

Risiken:

- XSS, wenn echte Nutzereingaben oder Serverdaten dazukommen
- schwieriger zu testen
- UI und Logik sind eng gekoppelt

Kurzfristig ist wichtig, weiter konsequent `escapeHtml()` und `escapeAttr()` fuer dynamische Inhalte zu nutzen.

### Encoding / Mojibake

In `index.html` und `game.js` sind einige Zeichen sichtbar falsch codiert, z. B. Icons und Umlaute als `â...` oder `Ã...`.

Auswirkung:

- sichtbare kaputte Icons/Texte in manchen Umgebungen
- erschwerte Wartung

Empfehlung:

- eigene Icon-Komponente oder ASCII-/HTML-Entities verwenden
- Dateien kontrolliert in UTF-8 speichern
- nicht blind die komplette Datei neu speichern, sondern gezielt bereinigen

### Statische externe Bilder

Vereinswappen und Spielerbilder werden teils ueber externe URLs referenziert.

Risiken:

- externe URLs koennen sich aendern
- Offline-Nutzung bricht
- Bildrechte muessen spaeter geklaert werden

Empfehlung:

- Asset-Cache oder eigene Asset-Pipeline
- rechtliche Pruefung vor Produktion

## Gefundene Risiken und Fehler

1. `game.js` und `styles.css` sind sehr gross und schwer zu warten.
2. Daten, Logik und UI-Rendering sind in `game.js` vermischt.
3. LocalStorage ist fuer Produktion nicht ausreichend.
4. Login/PIN/Rollen sind nicht sicher fuer echte Nutzer.
5. Kalender ist fest auf Juli 2026 zugeschnitten.
6. Einige Zeichen/Icons sind durch Encoding-Probleme sichtbar kaputt.
7. Viele Features sind funktional, aber noch ohne echtes Backend.
8. Admin-System erlaubt lokale Bearbeitung, aber keine echte Rechtepruefung ausserhalb des Browsers.
9. Spieler-/Vereinsdaten sind direkt im Code statt in Daten-Dateien.
10. Es gibt keine automatisierten Tests.

## Dateien, die nicht ersetzt werden duerfen

Diese Dateien duerfen nicht komplett neu geschrieben werden:

- `index.html`
- `styles.css`
- `game.js`

Grund:

- Sie enthalten viele gewachsene Funktionen.
- IDs und CSS-Klassen sind eng miteinander verbunden.
- Ein Komplett-Ersatz wuerde sehr wahrscheinlich bestehende Systeme zerstoeren.

## Dateien, die geschuetzt werden sollten

Diese Assets duerfen nicht geloescht werden:

- `assets/cards/player-card-classes.png`
- alle Dateien in `assets/packs/`
- alle Dateien in `assets/tiles/`

## Sinnvolle naechste Phasen

### Phase 1: Stabilisieren

- Encoding-Probleme gezielt bereinigen
- einfache Smoke-Tests dokumentieren
- `PROJECT_ANALYSIS.md` als Leitdokument nutzen
- kritische Funktionen nach jeder Aenderung testen:
  - Hauptmenue
  - Feature-Panel
  - Booster oeffnen
  - Sammlung
  - Deck
  - Fusion
  - Admin Events
  - Admin Booster
  - Login

### Phase 2: Daten auslagern

- Clubs aus `game.js` auslagern
- Karten aus `game.js` auslagern
- Booster-Defaults auslagern
- Event-Defaults auslagern
- Migrationslogik behalten

### Phase 3: Systeme modularisieren

- Booster-System trennen
- Event-System trennen
- Fusion-System trennen
- Match-System trennen
- Admin-Rendering trennen

### Phase 4: Gameplay vertiefen

- Karriere-Tabelle
- Aufstieg/Abstieg
- Pokalmodus
- Karten-XP aus Matches
- Matchabschluss-Screen
- Balancing fuer Spielsituationen

### Phase 5: Backend vorbereiten

- echte Nutzerkonten
- Rollen/Rechte serverseitig
- persistente Datenbank
- Admin-Audit-Logs
- Sync zwischen Geraeten

## Teststatus dieser Analyse

Durchgefuehrt:

- Ordnerstruktur gelesen
- HTML-Datei analysiert
- CSS-Datei analysiert
- JavaScript-Datei analysiert
- Assets aufgelistet
- zentrale Funktionen in `game.js` identifiziert
- LocalStorage-Key identifiziert
- vorhandene Systeme dokumentiert

Nicht durchgefuehrt:

- Browser-Screenshot-Test
- vollstaendiger Klicktest jeder UI
- Responsive-Test im Browser
- LocalStorage-Migration mit mehreren alten Spielstaenden
- visuelle QA im laufenden Spiel

Grund:

Diese Aufgabe war eine Repository-Analyse und Dokumentation. Es wurden keine Spielsysteme veraendert.

## Aktuelle Einschaetzung

Liga Clash ist kein leeres Demo-Projekt mehr. Es ist ein umfangreicher, visuell starker Browsergame-Prototyp mit vielen bereits verbundenen Systemen.

Die groesste Staerke ist die klare Spielvision mit Admin Center, Karten, Booster, Events, Deck, Fusion und Offline-Match.

Die groesste technische Herausforderung ist die monolithische Struktur. Bevor weitere grosse Systeme hinzukommen, sollte das Projekt schrittweise stabilisiert und modularisiert werden, ohne bestehende Funktionen zu zerstoeren.
