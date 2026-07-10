# Liga Clash - UI Guidelines

Stand: 10.07.2026  
Quelle: vorhandene UI in `index.html` und `styles.css`

## Status

Dieses Dokument beschreibt den vorhandenen Stil und Regeln fuer weitere UI-Arbeiten.

## Visuelle Richtung

Vorhandener Stil:

- Premium Mobile Game
- Football Card Game
- Dark Theme
- Carbon/Glass/Metal-Anmutung
- Neon Green als Hauptakzent
- Gold fuer Wertigkeit/Belohnungen
- Cyan/Blau fuer Liga/Event-Elemente
- rote/orange Akzente fuer Shop/Warnungen

## Hauptmenue

Vorhandene Elemente:

- Stadium-Atmosphere Layer
- Flutlicht
- Haze/Nebel
- Partikel
- Light Sweep
- Topbar mit Nutzer, Club, Logo, Wallet und Schnellzugriff
- grosse Kacheln
- Event-Leiste
- Bottom-Navigation
- Daily Bonus

Regel:

- Hauptmenue-Kacheln sollen grosse, bildstarke Einstiegspunkte bleiben.
- Booster ist aktuell in der unteren Navigation.
- Fusion ist aktuell eine grosse Kachel.

## Karten-UI

Vorhanden:

- Rating oben
- Position
- Vereinswappen
- Spielerbild
- Name
- Level-Fortschritt
- Hauptwerte
- Spezialwerte
- PRO/Evolution-Badge

Regel:

- Karten sollen einheitliche Groessen behalten.
- Vereinsname steht nicht prominent auf der Karte, Wappen uebernimmt die Vereinskennung.

## Admin Center

Vorhandener Stil:

- linke Sidebar
- dunkle Panels
- Neon-Green aktive Navigation
- Dashboard-/Kalenderoptik
- kompakte Formulare
- Statusmeldung unten

Regel:

- Admin-Inhalte sollen ueber die Sidebar gezielt sichtbar werden.
- Kalender bleibt zentrale Ansicht fuer Events.

## Feature-Panel

Vorhanden:

- gemeinsames Overlay fuer Menuefunktionen
- Header mit Eyebrow und Titel
- dynamischer Inhalt ueber JavaScript

Regel:

- Neue Menuefunktionen sollen bevorzugt im Feature-Panel integriert werden, sofern sie keine eigene Vollbild-Spielansicht brauchen.

## Animationen

Vorhanden:

- Hintergrundatmosphaere
- Kachelglow
- Play-Tap-Effekt
- Pack-Tap/Reveal
- Coin-Animation
- Vibrationsaufruf fuer unterstuetzte Geraete
- Soundeffekt ueber WebAudio

Regel:

- Animationen dezent halten.
- Gameplay-Feedback darf deutlich sein, aber UI darf nicht unruhig werden.

## Responsive Verhalten

Vorhanden:

- CSS Media Queries
- angepasste Grid-Spalten
- responsive Navigation
- Karten-/Admin-Layouts mit Umbruch

Regel:

- Keine Texte duerfen aus Buttons/Karten herauslaufen.
- Admin Center muss bedienbar bleiben, auch wenn es auf kleinen Screens dichter wird.

## Assets

Vorhandene lokale Assets:

- `assets/cards/player-card-classes.png`
- `assets/packs/bronze.png`
- `assets/packs/silver.png`
- `assets/packs/gold.png`
- `assets/packs/elite.png`
- `assets/tiles/tile-booster.png`
- `assets/tiles/tile-collection.png`
- `assets/tiles/tile-daily-bonus.png`
- `assets/tiles/tile-deck.png`
- `assets/tiles/tile-league.png`
- `assets/tiles/tile-play.png`
- `assets/tiles/tile-shop.png`

Regel:

- Assets nicht loeschen.
- Assets nicht ohne Auftrag ersetzen.
- Neue UI soll bestehende Bildsprache aufnehmen.

## Bekannte UI-Risiken

- Einige Sonderzeichen/Icons koennen bei falschem Encoding kaputt erscheinen.
- Sehr grosse CSS-Datei erschwert gezielte Aenderungen.
- Viele UI-Teile werden via `innerHTML` erzeugt.

## Empfehlung

- Icons langfristig vereinheitlichen.
- CSS spaeter in Bereiche aufteilen.
- wiederverwendbare UI-Komponenten definieren.
- visuelle Regressionstests fuer Hauptmenue, Karten, Booster und Admin Center einfuehren.
