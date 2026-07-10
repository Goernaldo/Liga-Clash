# Liga Clash - Testplan

Stand: 10.07.2026  
Basis: aktueller Browsergame-Prototyp

## Ziel

Dieser Testplan beschreibt manuelle und technische Pruefungen fuer den bestehenden Stand. Es werden keine neuen Funktionen vorausgesetzt.

## Technischer Schnelltest

### JavaScript-Syntax

```powershell
node --check game.js
```

Erwartung:

- Befehl endet ohne Ausgabe und ohne Fehlercode.

### Projektdateien vorhanden

Pruefen:

- `index.html`
- `styles.css`
- `game.js`
- `PROJECT_ANALYSIS.md`
- Assets in `assets/cards/`
- Assets in `assets/packs/`
- Assets in `assets/tiles/`

## Starttest im Browser

Vorgehen:

1. `index.html` im Browser oeffnen oder lokalen Server starten.
2. Seite laden.

Erwartung:

- Hauptmenue erscheint.
- Header sichtbar.
- grosse Kacheln sichtbar.
- untere Navigation sichtbar.
- keine offensichtlichen JavaScript-Fehler in der Console.

## Hauptmenue-Smoke-Test

Pruefen:

- Profilbutton oeffnet Login/Profil.
- Plus bei Coins/Diamanten oeffnet Shop.
- Nachrichten-Icon oeffnet Nachrichten.
- Freunde-Icon oeffnet Freunde.
- Admin-Icon oeffnet Admin Center, sofern Rolle berechtigt ist.
- Fusion-Kachel oeffnet Fusion.
- Sammlung-Kachel oeffnet Sammlung.
- Play-Kachel oeffnet Karriere/Play-Feature.
- Liga & Missionen oeffnet Liga-Feature.
- Deck-Kachel oeffnet Deck.
- Shop-Kachel oeffnet Shop.
- untere Navigation oeffnet Booster, News, Events, Ranglisten und Club.

## Login- und Profiltest

Vorgehen:

1. Login-Panel oeffnen.
2. Benutzer auswaehlen.
3. PIN eingeben.
4. Einloggen.
5. Profilnamen aendern.
6. Profil speichern.
7. Seite neu laden.

Erwartung:

- aktiver Benutzer wird aktualisiert.
- Profilwerte bleiben im LocalStorage erhalten.
- gesperrte Benutzer koennen sich nicht einloggen.
- falsche PIN wird abgelehnt.

## Admin Center Test

Voraussetzung:

- aktiver Benutzer hat Rolle Owner, Admin oder Moderator.

Pruefen:

- Admin Center oeffnet.
- Admin-Navigation wechselt sichtbare Rubriken.
- Dashboard sichtbar.
- Vereine & Ligen zeigt Datenbank.
- Spieler Import zeigt Filter.
- Spieler & Karten zeigt Karten-/Datenbankbereich.
- Booster & Packs zeigt Booster-Verwaltung.
- Kalender & Events zeigt Kalender, Liste und Details.
- Benutzer & Rechte zeigt Benutzerliste.
- Einstellungen zeigt Reward-Pools/Systembereiche.
- Zurueck zum Spiel schliesst Admin Center.

## Event-Test

Vorgehen:

1. Admin Center oeffnen.
2. Kalender & Events auswaehlen.
3. neues Event mit Titel, Typ, Datum, Startzeit, Enddatum, Endzeit und Beschreibung erstellen.
4. Event speichern.
5. Event deaktivieren.
6. Event wieder aktivieren.
7. Event duplizieren.
8. Event loeschen.
9. Hauptmenue und Spieler-Events pruefen.

Erwartung:

- aktive Events erscheinen im Kalender und Hauptmenue.
- deaktivierte Events erscheinen nicht im Kalender.
- geloeschte Events bleiben nach Reload geloescht.
- Eventdaten bleiben nach Reload erhalten.

Bekannte Einschraenkung:

- Kalender ist aktuell auf Juli 2026 ausgelegt.

## Booster-Test

Vorgehen:

1. Booster-Feature oeffnen.
2. aktiven Booster anzeigen.
3. Pack oeffnen.
4. Pack-Reveal pruefen.
5. Admin Center > Booster & Packs oeffnen.
6. Booster anlegen.
7. Kartenanzahl setzen.
8. Pool setzen.
9. Positionsgruppe setzen.
10. Drop-Rates bearbeiten.
11. Booster speichern.
12. Booster deaktivieren.
13. Booster loeschen.

Erwartung:

- Kosten werden abgezogen, wenn kein Gratis-Pack vorhanden ist.
- Gratis-Pack wird zuerst verbraucht.
- eingestellte Kartenanzahl wird im Reveal angezeigt.
- deaktivierte Booster erscheinen nicht im Spieler-Booster-Feature.
- geloeschte Booster erscheinen nach Reload nicht wieder.

## Sammlung- und Deck-Test

Vorgehen:

1. Sammlung oeffnen.
2. nach Liga filtern.
3. nach Verein filtern.
4. nach Position filtern.
5. Deck oeffnen.
6. Karten auswaehlen/abwaehlen.

Erwartung:

- Filter reduzieren die angezeigten Besitzkarten.
- Deck begrenzt aktive Karten auf die vorhandene Matchanzahl.
- Karten zeigen Rating, Position, Wappen, Bild, Name, Level und Werte.

## Fusion-Test

Vorgehen:

1. Fusion oeffnen.
2. Karte leveln mit `+1`.
3. Karte leveln mit `Level +10`.
4. zwei gleiche Karten auf Level 100 vorbereiten.
5. Evolution ausfuehren.

Erwartung:

- Level steigt bis maximal 100.
- Level 99 + Level 100 fusioniert nicht.
- Level 100 + Level 100 kann bei passender Karte/Serie fusionieren.
- Partnerkarte wird verbraucht.
- Stern/Badeg wird angezeigt.
- Ansicht bleibt im Fusion-Feature.

## Match- und Karriere-Test

Vorgehen:

1. Play/Karriere oeffnen.
2. Formation wechseln:
   - 2-2-1
   - 2-1-2
   - 1-2-2
   - 3-1-1
3. Match starten.
4. Matchlog pruefen.
5. schnelles KI-Spiel starten.
6. Challenge starten.

Erwartung:

- 6 Karten werden genutzt.
- Formation beeinflusst Lineup.
- Spielsituationen werden erzeugt.
- Ergebnis aktualisiert Scores, LP/Log oder Karriere.
- Belohnungen aus Reward-Pool koennen vergeben werden.

## Shop-Test

Pruefen:

- Scout-Ticket Button
- Coins gegen Diamanten
- Gold-Scout
- Buttons werden deaktiviert, wenn Kosten nicht gedeckt sind.
- Coins/Diamanten aktualisieren sich sichtbar.

## Benutzer- und Wallet-Test

Vorgehen:

1. Admin Center > Benutzer & Rechte oeffnen.
2. neuen Benutzer anlegen.
3. Rolle aendern.
4. Benutzer sperren/entsperren.
5. Coins/Diamanten gutschreiben.
6. mit Benutzer einloggen.

Erwartung:

- Benutzer erscheint in Login-Auswahl.
- Rolle wird gespeichert.
- Sperre wird beachtet.
- Wallet wird beim aktiven Benutzer mit Headerwerten synchronisiert.

## Responsive-Test

Manuell pruefen:

- Desktop breit
- Tablet-Breite
- Smartphone-Breite

Bereiche:

- Hauptmenue
- Feature-Panel
- Sammlung/Deck-Karten
- Admin Center
- Kalender
- Booster-Reveal

Erwartung:

- keine unlesbaren Ueberlappungen
- Navigation bleibt bedienbar
- Karten bleiben gleichmaessig skaliert

## LocalStorage-Test

Vorgehen:

1. Events/Booster/Benutzer/Karten veraendern.
2. Seite neu laden.
3. Werte pruefen.
4. LocalStorage loeschen.
5. Seite neu laden.
6. Ungueltigen JSON-Wert fuer `liga-clash-state-v1` setzen.
7. Seite neu laden.

Erwartung:

- gespeicherte Werte bleiben nach Reload erhalten.
- nach Loeschen wird sauberer Initialzustand erzeugt.
- bei korruptem LocalStorage wird der Spielstand zurueckgesetzt und die App startet weiter.
- keine Console-Fehler.

## Bekannte Warnungen

- Login/PIN ist nicht produktionssicher.
- Kalender ist nicht voll dynamisch.
- Keine automatisierten Tests vorhanden.
- Externe Bild-URLs koennen fehlschlagen.
- UI nutzt viel `innerHTML`; bei echten Serverdaten ist strenges Escaping Pflicht.

## Regression-Check nach jeder Aenderung

Mindestens pruefen:

- `node --check game.js`
- Hauptmenue sichtbar
- Feature-Panel oeffnet
- Booster oeffnen
- Sammlung filtern
- Deck auswaehlen
- Fusion leveln
- Admin Events erstellen/deaktivieren/loeschen
- Admin Booster bearbeiten
- Login/Profil speichern
- Reload ohne Datenverlust
