# Liga Clash - League System

Stand: 10.07.2026  
Quelle: vorhandener Code in `game.js`

## Status

Das Liga-System ist als lokaler Prototyp vorhanden. Es nutzt LP, eine lokale Tabelle und Wochenabrechnung.

## Spieler-Ligen

Vorhandene Ligen:

- Bundesliga
- 2. Bundesliga
- 3. Liga
- Regionalliga
- Landesliga

Diese Liste ist fuer den Spielerfortschritt. Sie ist nicht identisch mit den Datenbankligen fuer Vereine.

## Datenbank-Ligen

Vorhandene Datenbankfilter:

- Alle Ligen
- 1. Bundesliga
- 2. Bundesliga
- 3. Liga
- Google Pixel Frauen-Bundesliga
- 2. Frauen-Bundesliga

Diese werden fuer Vereins-/Kartenfilter im Admin Center und bei Karten verwendet.

## Ligapunkte

`state.lp` speichert die Ligapunkte des Spielers.

Vorhandene Nutzung:

- Anzeige in Liga & Missionen
- Tabelle
- Wochenwertung
- Admin kann LP setzen
- Admin kann Sieg simulieren

## Ligatabelle

Vorhanden:

- lokale `leagueRows`
- Spieler wird als `Du` in die Tabelle eingefuegt
- Tabelle sortiert nach LP
- Tordifferenz wird angezeigt, wenn Daten vorhanden sind

## Aufstieg und Abstieg

Vorhandene Wochenabrechnung:

- Platz 1 bis 3: Aufstieg, wenn moeglich
- Platz 16 oder schlechter: Abstieg, wenn moeglich
- sonst Liga gehalten
- nach Abrechnung werden LP reduziert
- Liga-Zeilen werden neu generiert

Vorhandene Sofortpruefung:

- `maybePromoteLeague()` kann nach Sieg/LP-Aenderung einen Aufstieg ausloesen, wenn der Spieler Top 3 ist.

## Liga & Missionen Feature

Vorhandene UI:

- aktuelle Liga
- Wochenwertung
- Bilanz
- Button zur Tabelle
- Button zum Match
- drei Missionen

## Karriere-Abgrenzung

Die Offline-Karriere ist ein eigenes System mit:

- Karrierestufe
- Saisonspiel
- Punkten
- Toren
- XP
- Log

Sie ist nicht identisch mit der Wochenliga.

## Empfehlung

Noch nicht vollstaendig:

- echte Saisonhistorie
- echte Gegnerprofile
- vollstaendige Tabelle mit Auf-/Abstieg ueber mehrere Wochen
- Belohnungen fuer Wochenplatzierung
- Online-Ranglisten
