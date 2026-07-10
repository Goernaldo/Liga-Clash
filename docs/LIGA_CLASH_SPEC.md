# Liga Clash - Spezifikation

Stand: 10.07.2026  
Basis: vorhandener Code, vorhandene UI, vorhandene Assets und `PROJECT_ANALYSIS.md`

## Projektstatus

Liga Clash ist ein lokales Browsergame-Prototyp-Projekt. Die Anwendung besteht aktuell aus `index.html`, `styles.css`, `game.js` und mehreren Bildassets. Es gibt kein Backend und keine externe Datenbank im Projekt. Persistenz erfolgt ueber `localStorage`.

## Produktziel

Liga Clash ist als hochwertiges Fussball-Kartenspiel im Stil eines Premium-Mobile-Games angelegt. Der vorhandene Schwerpunkt liegt auf:

- Hauptmenue mit Football-Overlay
- Karten sammeln
- Booster oeffnen
- Deck verwalten
- Match/Karriere gegen KI
- Events/Kalender
- Admin Center fuer lokale Verwaltung
- Login-/Profil-Prototyp mit Rollen

## Vorhandene App-Bereiche

### Hauptmenue

Vorhandene Elemente:

- animierte Stadionatmosphaere mit Flutlicht, Haze, Partikeln und Licht-Sweep
- Header mit Profilzugriff, Clubblock, Logo, Coins/Diamanten und Schnellzugriffen
- grosse Kacheln:
  - Fusion
  - Sammlung
  - Play
  - Liga & Missionen
  - Deck
  - Shop
- Event-Leiste fuer aktive Events aus dem Admin Center
- untere Navigation:
  - Hauptmenue
  - Booster
  - News
  - Events
  - Ranglisten
  - Club
- Daily-Bonus-Kachel

### Feature-Panel

Das Feature-Panel ist ein wiederverwendbares Overlay fuer Menuefunktionen. Es wird per `setFeature(title, eyebrow, html)` gefuellt.

Vorhandene Feature-Ansichten:

- Booster
- Fusion
- Karriere
- Sammlung
- Liga & Missionen
- Deck
- Shop
- News
- Events
- Ranglisten
- Club
- Nachrichten
- Freunde

### Login und Profil

Vorhanden:

- Login-Panel
- Benutzer-Auswahl
- PIN-Eingabe
- Profilformular fuer Name, E-Mail und PIN
- aktive Account-Anzeige
- Rollen:
  - Owner
  - Admin
  - Moderator
  - User
- gesperrte Benutzer

Einschraenkung:

- Nur lokaler Prototyp. PINs und Rollen sind nicht sicher gegen Manipulation im Browser.

### Admin Center

Vorhandene Rubriken:

- Dashboard
- Vereine & Ligen
- Spieler Import
- Spieler & Karten
- Transfers & Updates
- Karten Editor
- Booster & Packs
- Kalender & Events
- Missionen
- Benutzer & Rechte
- Einstellungen
- Logs

Das Admin Center arbeitet lokal mit dem gemeinsamen `state`.

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
- freie Eingabe fuer Titel, Typ, Startdatum, Startzeit, Enddatum, Endzeit und Beschreibung
- Event-Kategorien
- aktive Events im Hauptmenue
- aktive Events im Spieler-Event-Feature

Einschraenkung:

- Der Kalender ist aktuell fest fuer Juli 2026 aufgebaut.

### Booster und Packs

Vorhanden:

- Booster-Feature ueber untere Navigation
- Pack-Anzeige mit Bild oder Platzhalter
- Kosten in Coins oder Diamanten
- Gratis-Packs pro Pack-ID
- Kartenanzahl pro Pack
- Pool-Auswahl
- Positionsfilter pro Pack
- Drop-Rates pro Kartenklasse
- Pack-Reveal mit mehreren Karten
- Admin-Verwaltung:
  - anlegen
  - speichern/bearbeiten
  - aktivieren/deaktivieren
  - loeschen

Vorhandene Pack-Assets:

- `assets/packs/bronze.png`
- `assets/packs/silver.png`
- `assets/packs/gold.png`
- `assets/packs/elite.png`

### Karten

Vorhandene Kartenklassen:

| Index | Klasse | Wertebereich |
| --- | --- | --- |
| 0 | Gewoehnlich | 50-69 |
| 1 | Ungewoehnlich | 70-89 |
| 2 | Selten | 90-109 |
| 3 | Besonders Selten | 110-129 |
| 4 | Ultra Selten | 130-149 |
| 5 | Bronze | 150-169 |
| 6 | Silber | 170-189 |
| 7 | Gold | 190-209 |
| 8 | Episch | 210-229 |
| 9 | Legendaer | 230-249 |
| 10 | Elite | 250-299 |

Vorhandene Kartenserien:

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

Vorhandene Feldspielerwerte:

- Tempo
- Abschluss
- Passspiel
- Dribbling
- Defensive
- Physis

Vorhandene Torwartwerte:

- Reflexe
- Fangsicherheit
- Strafraumbeherrschung
- Abschlaege
- Reaktion
- Organisation

Vorhandene Spezialwerte:

- Spielintelligenz
- Teamgeist

### Sammlung und Deck

Vorhanden:

- Sammlung zeigt Karten aus `state.deck`
- Deck-Feature fuer aktive Karten
- Filter nach:
  - Liga
  - Verein
  - Position
- Karten zeigen Rating, Position, Wappen, Bild, Name, Level, Stats und Evolution-Badge

### Fusion und Evolution

Vorhanden:

- Fusion-Kachel im Hauptmenue
- Fusion-Feature im Feature-Panel
- Level +10
- Level +1
- Evolution

Regeln laut Code:

- normale Karten haben Max-Level 100
- PRO-Karten haben Max-Level 100
- maximal 5 PRO-Sterne
- Fusion benoetigt gleiche Karte, gleiche Serie, gleichen PRO-Stand und passenden Level
- Level 100 + Level 100 kann fusionieren
- Level 99 reicht nicht
- eine Partnerkarte wird bei Fusion aus dem Deck entfernt

### Match und Karriere

Vorhanden:

- 6 aktive Matchkarten
- 1 Torwart plus Feldspieler
- Formationen:
  - 2-2-1
  - 2-1-2
  - 1-2-2
  - 3-1-1
- Spielsituationen werden vom System gezogen
- Matchauswertung nutzt Kartenwerte
- Matchlog
- LP, Scores, Record und Wochenwertung
- Karriere-Feature
- Schnelles KI-Spiel
- Challenges
- Karriere-Belohnungen
- Reward-Pool fuer schnelles KI-Spiel im Admin Center

### Shop

Vorhanden:

- Scout-Ticket
- Coins gegen Diamanten
- Gold-Scout

Einschraenkung:

- Kein echtes Payment, kein Server-Shop.

## Design-Spezifikation

Vorhandener Stil:

- Dark Theme
- Neon Green
- Cyan
- Gold
- Carbon/Glass/Metal-Anmutung
- Football-Stadion-Atmosphaere
- Mobile-Game-Kachellayout
- responsive CSS-Regeln

Assets duerfen nicht geloescht oder ersetzt werden, sofern nicht ausdruecklich beauftragt.

## Technische Einschraenkungen

- keine Modulstruktur
- keine Build-Pipeline
- keine automatisierten Tests
- keine echte Datenbank
- keine serverseitige Authentifizierung
- grosse zentrale Dateien:
  - `game.js`: 4301 Zeilen
  - `styles.css`: 4596 Zeilen
  - `index.html`: 732 Zeilen

## Empfehlungen

Diese Punkte sind Empfehlungen, keine aktuell vorhandenen Funktionen:

- Daten aus `game.js` in eigene Datenmodule auslagern
- Admin-, Booster-, Event-, Match- und Fusion-Systeme trennen
- Encoding-Probleme gezielt bereinigen
- Kalender dynamisch machen
- einfache Smoke-Tests und Browser-Tests automatisieren
- spaeter Backend/API fuer echte Accounts, Rechte und Datenpersistenz vorbereiten
