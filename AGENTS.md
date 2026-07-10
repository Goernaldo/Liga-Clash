# Liga Clash - Agentenregeln

Stand: 10.07.2026  
Gilt fuer Arbeiten an diesem Projektordner.

## Rolle

Arbeite an Liga Clash wie an einem bestehenden Game-Projekt. Das Projekt ist kein leerer Entwurf. Vorhandene Systeme, UI und Assets haben Vorrang.

## Pflicht vor Aenderungen

Vor jeder Code-Aenderung:

1. `PROJECT_ANALYSIS.md` lesen.
2. Betroffene Stellen in `index.html`, `styles.css` und `game.js` pruefen.
3. Vorhandene IDs, Klassen, State-Felder und LocalStorage-Migrationen beachten.
4. Nur die noetigen Bereiche aendern.

## Strikte Schutzregeln

Nicht komplett ersetzen:

- `index.html`
- `styles.css`
- `game.js`

Nicht loeschen:

- `assets/cards/player-card-classes.png`
- Dateien in `assets/packs/`
- Dateien in `assets/tiles/`

Nicht tun:

- funktionierende Systeme ohne Grund neu bauen
- grosse Dateien unnoetig neu formatieren
- bestehende UI-Farben/Assets ohne Auftrag austauschen
- LocalStorage-Key ohne Migration aendern
- neue Features als vorhanden dokumentieren, wenn sie nur Idee sind

## Aktuelle Architektur

Die App ist aktuell monolithisch:

- `index.html`: statische Struktur und feste DOM-IDs
- `styles.css`: gesamtes Design
- `game.js`: Daten, State, Rendering, Events, Admin, Match, Booster, Fusion

Der zentrale State wird lokal gespeichert:

```text
localStorage key: liga-clash-state-v1
```

## Arbeitsweise fuer neue Features

1. Bestehende Funktion suchen.
2. Erweiterungspunkt verwenden.
3. Bestehende Helper nutzen, z. B.:
   - `escapeHtml`
   - `escapeAttr`
   - `normalizeState`
   - `saveState`
   - `render`
   - `setFeature`
4. Neue State-Felder immer normalisieren.
5. Nach Aenderung testen.

## Dokumentationsregeln

Wenn etwas nur empfohlen oder geplant ist, klar markieren:

```text
Status: Empfehlung
```

Wenn etwas im Code existiert:

```text
Status: vorhanden
```

Wenn etwas nur teilweise existiert:

```text
Status: Prototyp / teilweise vorhanden
```

## Testpflicht nach Code-Aenderungen

Mindestens:

- `node --check game.js`
- Hauptmenue oeffnet
- Feature-Panel oeffnet
- Booster-Feature oeffnet
- Sammlung oeffnet
- Deck oeffnet
- Fusion oeffnet
- Admin Center oeffnet fuer Owner/Admin/Moderator
- Events koennen angelegt/deaktiviert/geloescht werden
- Booster koennen angelegt/bearbeitet/deaktiviert werden
- Login/Profil speichert lokal
- LocalStorage bleibt lesbar

## Bekannte Risiken

- `game.js` ist gross und stark gekoppelt.
- `styles.css` ist gross und schwer zu ueberblicken.
- UI wird haeufig per `innerHTML` erzeugt.
- Login/Rollen sind nur lokaler Prototyp.
- Kalender ist auf Juli 2026 begrenzt.
- Externe Bild-URLs koennen ausfallen.
- Encoding-Probleme bei Sonderzeichen koennen auftreten.

## Empfohlene Entwicklungsrichtung

Empfehlung:

1. erst Stabilisierung
2. dann Daten auslagern
3. dann Systeme modularisieren
4. dann Gameplay erweitern
5. danach Backend vorbereiten

Keine dieser Empfehlungen ist automatisch als umgesetzt zu betrachten.

