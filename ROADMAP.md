# Liga Clash - Roadmap

Stand: 10.07.2026  
Basis: aktueller Projektstand, keine erfundenen Funktionen

## Leitprinzip

Keine funktionierenden Systeme ersetzen, wenn eine Erweiterung moeglich ist. Jede Phase muss vorhandene UI, vorhandene Assets und vorhandene LocalStorage-Migrationen schuetzen.

## Phase 0 - Ist-Stand dokumentieren

Status: erledigt

Vorhanden:

- `PROJECT_ANALYSIS.md`
- diese Roadmap
- Spezifikation
- Datenmodell-Dokumentation
- Agenten-Regeln
- Testplan

## Phase 1 - Stabilisierung

Status: Empfehlung

Ziel:

Den bestehenden Prototyp stabil halten, bevor neue groessere Systeme eingebaut werden.

Aufgaben:

- Encoding-Probleme in UI-Texten und Icons gezielt pruefen
- Smoke-Test-Liste aus `TEST_PLAN.md` nach jeder Aenderung ausfuehren
- kritische UI-Flows dokumentiert durchklicken
- keine Komplett-Rewrites von `index.html`, `styles.css` oder `game.js`
- bestehende LocalStorage-Migrationen erhalten

Ergebnis:

- stabilere Grundlage fuer weitere Entwicklung

## Phase 2 - Datenstruktur entkoppeln

Status: Empfehlung

Ziel:

Statische Daten aus `game.js` herausloesen, ohne Verhalten zu veraendern.

Kandidaten:

- Kartenklassen
- Kartenserien
- Ligen
- Vereine
- Karten
- Booster-Defaults
- Event-Typen
- Karriere-Gegner
- Reward-Pools

Moegliche Zielstruktur:

```text
data/
  classes.js
  series.js
  leagues.js
  clubs.js
  cards.js
  boosters.js
  events.js
  career.js
```

Wichtig:

- Erst extrahieren, dann testen.
- Keine Werte veraendern.
- Migrationen muessen weiter funktionieren.

## Phase 3 - Systemmodule vorbereiten

Status: Empfehlung

Ziel:

Die monolithische `game.js` in stabile Verantwortlichkeiten teilen.

Kandidaten:

- Storage und Migrationen
- Kartenlogik
- Boosterlogik
- Eventlogik
- Fusion/Evolution
- Match/Karriere
- Admin Center
- Feature-Panel Rendering

Risiko:

- Hohe Kopplung durch DOM-IDs und gemeinsamen `state`.

Vorgehen:

- kleine Schritte
- jeweils nur ein System auslagern
- nach jedem Schritt `node --check` und Browser-Smoke-Test

## Phase 4 - Admin Center vervollstaendigen

Status: Empfehlung

Vorhandene Basis:

- Events verwaltbar
- Booster verwaltbar
- Benutzer/Rollen verwaltbar
- Wallet-Gutschriften
- Reward-Pools fuer schnelles KI-Spiel
- Datenbankansicht fuer Vereine und Karten

Sinnvolle naechste Verbesserungen:

- klarere Trennung zwischen Mock-Systeminformationen und echten Spielwerten
- Admin-Logs ausbauen
- Kalender dynamisch machen
- Event-Belohnungen im Admin Center editierbar machen
- Karteneditor von Testwerkzeug zu echtem Editor ausbauen

## Phase 5 - Gameplay vertiefen

Status: Empfehlung

Vorhandene Basis:

- 6-Karten-Matchdeck
- Formationen
- situationsbasierte Wertvergleiche
- Karriere, schnelles KI-Spiel und Challenges
- Reward Pools

Sinnvolle naechste Verbesserungen:

- Matchabschluss-Screen
- Karten-XP aus Matches
- sichtbare Belohnungsauflistung nach Match
- Karriere-Tabelle
- Auf-/Abstieg ausarbeiten
- Pokalmodus vorbereiten
- KI-Gegner mit eigenen Deckprofilen

## Phase 6 - Persistenz und Accounts

Status: langfristige Empfehlung

Vorhandene Basis:

- lokales Login mit PIN
- Rollen
- Profile
- Wallets
- LocalStorage

Nicht vorhanden:

- echtes Backend
- sichere Registrierung
- serverseitige Rollenrechte
- Online-Sync
- echte Datenbank

Sinnvolle Richtung:

- Storage-Schicht zuerst entkoppeln
- danach Backend/API planen
- Adminrechte serverseitig absichern

## Phase 7 - Qualitaet und Release-Faehigkeit

Status: langfristige Empfehlung

Aufgaben:

- automatisierte UI-Smoke-Tests
- Responsive-Tests
- Performance-Test fuer grosse Sammlungen
- Asset-Rechte pruefen
- externe Bildquellen pruefen oder lokal cachen
- Error-Handling fuer kaputte Bilder und LocalStorage-Fehler

## Nicht-Ziele fuer sofort

Diese Punkte sind nicht als bereits vorhanden zu behandeln:

- echtes Online-PvP
- echtes Payment
- echte Serverdatenbank
- echte sichere Authentifizierung
- vollstaendige Produktions-Accountverwaltung

