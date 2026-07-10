# Liga Clash - Mission System

Stand: 10.07.2026  
Quelle: vorhandener Code in `game.js`

## Status

Missionen sind im Prototyp vorhanden, aber noch einfach umgesetzt. Sie sind aktuell Teil des Features "Liga & Missionen" und teilweise mit Events/Kategorien im Admin Center verbunden.

## Spieler-Missionen

Vorhandene Missionen:

| ID | Name | Bedingung | Belohnung |
| --- | --- | --- | ---: |
| `daily-win` | Tagessieg | Gewinne 3 Matches | 150 Coins |
| `lp-350` | LP-Jagd | Erreiche 350 Liga-Punkte | 250 Coins |
| `collector-8` | Sammler | Besitze 8 Karten | 200 Coins |

## Missionsstatus

Abgeholte Missionen werden gespeichert in:

```text
state.claimedMissions
```

## Belohnung

Vorhandene Logik:

- Mission prueft, ob sie bereits abgeholt wurde.
- Mission-ID wird in `state.claimedMissions` eingetragen.
- Coins werden addiert.
- Coin-Animation wird gestartet.
- Liga-Feature wird neu gerendert.

## Admin-Bezug

Im Admin Center existiert eine Rubrik "Missionen". Aktuell springt sie auf Event-Kategorien.

Vorhanden:

- Event-Kategorien werden gezaehlt.
- Mission Event ist als Eventtyp vorhanden.
- Missionen sind noch nicht als eigener vollwertiger Admin-Datensatz modelliert.

## Events und Missionen

Events koennen als "Mission Event" angelegt werden. Diese Events erscheinen im Kalender und in der Eventuebersicht, sind aber nicht direkt mit den drei Spieler-Missionen verdrahtet.

## Empfehlung

Noch nicht vollstaendig:

- eigener Missionseditor
- Missionsziele als Datenmodell
- wiederholbare Missionen
- Tages-/Wochen-/Eventmissionen getrennt
- Claim-Reset nach Zeit
- mehrere Belohnungstypen pro Mission
- Missionsfortschritt visuell detaillierter anzeigen
