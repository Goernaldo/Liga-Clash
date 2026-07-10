# Liga Clash - Booster System

Stand: 10.07.2026  
Quelle: vorhandener Code in `game.js`

## Status

Das Booster-System ist im Prototyp vorhanden. Booster werden lokal im `state` gespeichert und im Admin Center verwaltet.

## Spieler-Feature

Booster sind ueber die untere Hauptmenue-Navigation erreichbar.

Vorhanden:

- aktive Booster anzeigen
- Packbild anzeigen
- Beschreibung anzeigen
- Kosten anzeigen
- Gratis-Pack-Status anzeigen
- Pack oeffnen
- Pack-Reveal anzeigen

## Admin-Verwaltung

Admin Center > Booster & Packs bietet:

- Booster anlegen
- Booster bearbeiten/speichern
- Booster aktivieren/deaktivieren
- Booster loeschen
- Kosten setzen
- Waehrung setzen
- Mindestklasse setzen
- Maximal klasse setzen
- Kartenanzahl setzen
- Pool setzen
- Positionsgruppe setzen
- Packbild setzen
- Beschreibung setzen
- Drop-Rates bearbeiten

## Booster-Datenmodell

Felder:

- `id`
- `name`
- `cost`
- `currency`
- `minClass`
- `maxClass`
- `cardCount`
- `description`
- `image`
- `tier`
- `pool`
- `positions`
- `dropRates`
- `active`

## Standard-Booster

Vorhandene Default-Booster:

- Bronze Pack
- Silber Pack
- Gold Pack
- Elite Pack
- Bundesliga Pack
- Frauen-Bundesliga Pack
- Mixed Pack
- DFB-Pokal Pack
- Team of the Week Pack
- Icon Pack
- Angriff Pack
- Mittelfeld Pack
- Abwehr Pack
- Torwart Pack

## Waehrungen

Vorhandene Waehrungen:

- Coins
- Diamanten

## Gratis-Packs

Gratis-Packs werden pro Pack-ID gespeichert:

```text
state.freePacks[packId] = Anzahl
```

Regeln:

- Wenn Gratis-Packs vorhanden sind, wird zuerst ein Gratis-Pack verbraucht.
- Der Preis verschwindet in der Packanzeige zugunsten des Gratis-Hinweises.
- Nach Verbrauch wird der Zaehler reduziert.

## Pack-Pools

Vorhandene Pools laut Code:

- Mixed
- Maenner-Bundesliga
- Frauen-Bundesliga
- DFB-Pokal
- Team of the Week
- Icon

Die genaue Anzeige kommt aus `packPoolOptions()` und `packPoolLabel(pool)`.

## Positionspacks

Vorhandene Positionsgruppen:

- Alle Positionen
- Angriff: ST, MS, LA, RA
- Mittelfeld: ZM, DM, OM, CAM, LM, RM
- Abwehr: IV, CB, LV, RV, LWB, RWB
- Torwart: TW, GK

## Drop-Rates

Drop-Rates werden je Kartenklasse gespeichert. Werte ausserhalb der erlaubten Klassenrange werden auf 0 gesetzt.

Vorhandene Funktionen:

- `readDropRates`
- `normalizeDropRates`
- `defaultDropRates`
- `defaultClassWeight`

## Pack-Reveal

Vorhanden:

- Reveal-Overlay
- mehrere Karten pro Pack
- Schliessen per Button/Klick
- Karten werden der Sammlung hinzugefuegt

## Empfehlung

Noch nicht produktionsreif:

- keine serverseitige Ziehungspruefung
- keine Audit-Logs fuer Admin-Aenderungen
- keine echte Shop-/Payment-Anbindung
- Drop-Rates sind lokal manipulierbar
