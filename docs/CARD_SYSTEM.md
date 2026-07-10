# Liga Clash - Card System

Stand: 10.07.2026  
Quelle: vorhandener Code in `game.js`

## Status

Das Kartensystem ist im Prototyp vorhanden und wird zentral in `game.js` verwaltet.

## Kartenklassen

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

## Kartenserien

Vorhandene Serien:

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

Serien besitzen im Code einen Bonuswert.

## Kartendaten

Vorhandene statische Kartenquellen:

- `GAME_CARDS`
- `SEASON_26_27_CARDS`
- `baseCards`

Besitzkarten liegen in:

```text
state.deck
```

## Kartenfelder

Bekannte Felder:

- `id`
- `sourceId`
- `name`
- `pos`
- `club`
- `cls`
- `atk`
- `mid`
- `def`
- `photo`
- `series`
- `level`
- `proStars`
- `proQuality`
- `stats`

## Werte

Feldspieler:

- Tempo
- Abschluss
- Passspiel
- Dribbling
- Defensive
- Physis

Torhueter:

- Reflexe
- Fangsicherheit
- Strafraumbeherrschung
- Abschlaege
- Reaktion
- Organisation

Spezialwerte:

- Spielintelligenz
- Teamgeist

## Rating

Das sichtbare Rating wird im Code ueber `rating(card)` berechnet. Es beruecksichtigt:

- Hauptwerte
- Spezialwerte
- Kartenklasse
- Serie
- Level-/PRO-Fortschritt

## Bilder und Wappen

Vorhanden:

- Vereinswappen ueber `crestUrl(clubId)`
- Spielerbilder ueber `playerPhoto(card)`, wenn fuer die Karte ein echtes Bild gespeichert ist
- lokale Kartenklassen-Uebersicht: `assets/cards/player-card-classes.png`

Einschraenkung:

- Einige Bilder kommen aus externen Quellen. Diese Quellen koennen sich aendern.
- Karten ohne gespeichertes Spielerbild rendern keinen generierten Dummy-Platzhalter mehr.

## Sammlung

Vorhanden:

- Sammlung zeigt Besitzkarten aus `state.deck`.
- Filter nach Liga, Verein und Position.
- Karten zeigen Rating, Position, Vereinswappen, Spielerbild, Name, Level und Werte.

## Deck

Vorhanden:

- Deck nutzt Besitzkarten.
- Ausgewaehlte Karten liegen in `state.selected`.
- Maximal 6 aktive Matchkarten.
- Filter nach Liga, Verein und Position.

## Levelsystem

Vorhanden:

- `CARD_MAX_LEVEL = 100`
- `PRO_MAX_LEVEL = 100`
- Leveln ueber `levelCard(cardId, amount)`
- UI-Buttons: `Level +10` und `+1`

## Fusion / Evolution

Vorhanden:

- `PRO_MAX_STARS = 5`
- `fusionPartnerFor(card)`
- `fuseCardToPro(cardId)`
- `proBadge(card)`

Regeln:

- Karte muss Level 100 haben.
- Partnerkarte muss gleiche Basis, gleiche Serie, gleiche PRO-Sterne und passende PRO-Qualitaet haben.
- Level 99 fusioniert nicht.
- Eine Karte wird bei Fusion verbraucht.

Qualitaet:

- niedrigere Klassen koennen Bronze-Qualitaet erhalten
- Silberklasse kann Silber-Qualitaet erhalten
- Gold und hoeher koennen Gold-Qualitaet erhalten

## Empfehlung

Noch nicht voll ausgebaut:

- sichere Warnung vor Verbrauch einer Karte
- Kosten/Materialien fuer Fusion
- Karten-XP aus Matches
- eigene Detailseite pro Karte
- Daten-Auslagerung aus `game.js`
