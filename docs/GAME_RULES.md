# Liga Clash - Game Rules

Stand: 10.07.2026  
Quelle: vorhandener Code in `game.js`

## Status

Dieses Dokument beschreibt nur Regeln, die im aktuellen Prototyp vorhanden sind. Empfehlungen sind gesondert markiert.

## Grundprinzip

Liga Clash ist aktuell ein lokales Fussball-Kartenspiel mit:

- Karten sammeln
- Deck zusammenstellen
- Booster oeffnen
- KI-Matches spielen
- LP sammeln
- Missionen abschliessen
- Karten leveln und fusionieren

Es gibt kein echtes Online-PvP und kein Backend im Projekt.

## Matchdeck

Vorhandene Regeln:

- Das Matchdeck nutzt bis zu 6 aktive Karten.
- Eine Formation bestimmt, wie viele Feldspieler in Abwehr, Mittelfeld und Angriff genutzt werden.
- Der Code waehlt zusaetzlich einen Torwart, wenn passende Karten vorhanden sind.

Vorhandene Formationen:

| Formation | Abwehr | Mittelfeld | Angriff |
| --- | ---: | ---: | ---: |
| 2-2-1 | 2 | 2 | 1 |
| 2-1-2 | 2 | 1 | 2 |
| 1-2-2 | 1 | 2 | 2 |
| 3-1-1 | 3 | 1 | 1 |

## Taktik

Vorhandene Taktiklogik:

- `selectedTactic` startet mit `pressing`.
- Spielsituationen haben teilweise eine passende Taktik.
- Wenn die aktive Taktik zur Situation passt, gibt es im Offline-Match einen Bonus.

## Spielsituationen

Das Spiel zieht pro Match mehrere Situationen aus einer Liste. Jede Situation nutzt bestimmte Werte.

Vorhandene Situationen:

| Situation | Werte |
| --- | --- |
| Konter | Tempo + Abschluss |
| Fluegelangriff | Tempo + Dribbling |
| Flanke | Passspiel + Spielintelligenz |
| Hoher Ball | Physis + Abschluss |
| Freistoss | Abschluss + Spielintelligenz |
| Spielaufbau | Passspiel + Teamgeist |
| Eins gegen Eins | Dribbling + Tempo |
| Pressing | Defensive + Physis |
| Letzte Abwehraktion | Defensive + Spielintelligenz |
| Fernschuss | Abschluss + Passspiel |

Die Kartenwahl erfolgt automatisch durch das System. Je nach Situation werden eher Torwart/Abwehr, Mittelfeld/Angriff oder Angriff/Mittelfeld beruecksichtigt.

## Matchauswertung

Vorhandene Regeln:

- Spielerkarte und Gegner werden ueber Situationspower verglichen.
- Die Situationspower basiert auf gewichteten Kartenwerten.
- Ein taktischer Bonus kann hinzukommen.
- Zufallswerte beeinflussen das Ergebnis.
- Klare Ueberlegenheit fuehrt zu Toren.
- Ausgeglichene Situationen werden als neutral geloggt.

## Liga-Punkte

Vorhanden:

- `state.lp` speichert Ligapunkte.
- Siege und Admin-Simulationen koennen LP veraendern.
- Wochenabrechnung nutzt Tabellenplatz.

## Wochenwertung

Vorhandene Regeln:

- Top 3 steigen auf, wenn eine hoehere Liga vorhanden ist.
- Platz 16 oder schlechter steigt ab, wenn eine niedrigere Liga vorhanden ist.
- Sonst wird die Liga gehalten.
- Nach Wochenabrechnung werden LP teilweise reduziert.

## Karriere / Offline

Vorhandene Modi:

- Karriere-Saisonspiel
- Schnelles KI-Spiel
- Challenge

Vorhandene Karriere-Regeln:

- Karriere hat Stufe, Saisonspiel, Punkte, Tore, Gegentore, XP, Tickets, Bilanz und Log.
- Saisonspiele erhoehen `seasonGame`.
- Nach 10 Saisonspielen wird die Saison abgeschlossen.
- Bei genug Punkten kann ein Aufstieg in eine hoehere Karrierestufe passieren.
- Schnelles KI-Spiel nutzt den konfigurierbaren Reward-Pool.

## Belohnungen

Vorhandene Belohnungen:

- Coins
- Diamanten
- XP
- Gratis-Packs
- Karten

Belohnungen kommen aus:

- Karriere-/Challenge-Logik
- schnellem KI-Spiel Reward-Pool
- Missionen
- Daily Bonus
- Shop-/Scout-Funktionen

## Fusion und Leveln

Vorhandene Regeln:

- normale Karten: Max-Level 100
- PRO-Karten: Max-Level 100
- maximal 5 PRO-Sterne
- Level 100 + gleiche Karte Level 100 kann fusionieren
- Level 99 reicht nicht
- gleiche Karte, gleiche Serie, gleicher PRO-Stand und gleiche PRO-Qualitaet werden benoetigt
- bei erfolgreicher Fusion wird eine Partnerkarte verbraucht

## Empfehlung

Folgende Punkte sind noch nicht vollstaendig als robuste Spielregeln umgesetzt:

- detaillierter Matchabschluss-Screen
- Karten-XP aus Matches
- vollstaendige Karriere-Tabelle
- Pokalmodus
- echtes Online-PvP
- serverseitige Fairness-Pruefung
