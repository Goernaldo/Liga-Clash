# Liga Clash - Gameplay Analysis

Stand: 10.07.2026
Quelle: vorhandene Projektdokumentation und aktueller Code in `game.js`.

## Zweck

Diese Analyse vergleicht das vorhandene Gameplay im Code mit den Regeln aus der Projektdokumentation. Es wurden keine bestehenden Gameplay-Dateien geaendert.

Ausgewertete Dokumente:

- `docs/GAME_RULES.md`
- `docs/CARD_SYSTEM.md`
- `docs/DATA_MODEL.md`
- `docs/LIGA_CLASH_SPEC.md`
- `docs/PROJECT_ANALYSIS.md`
- `docs/ROADMAP.md`
- `docs/TEST_PLAN.md`

Wichtigste Codequelle:

- `game.js`

## Kurzfazit

Das Projekt besitzt bereits eine spielbare lokale Gameplay-Schleife:

- Karten sammeln und verwalten
- bis zu 6 aktive Matchkarten
- Formation auswaehlen
- situationsbasierte Matchsimulation
- Taktikbonus
- einfache CPU-Gegnerstaerke
- LP, Coins, Scores und Matchlog
- Offline-Karriere mit Saisonspiel, schnellem KI-Spiel und Challenge
- Reward-Pool fuer schnelles KI-Spiel

Das Gameplay ist aber noch ein Prototyp. Die groessten Luecken sind:

- keine echte CPU-Decklogik
- keine persistente Matchhistorie
- kein detaillierter Matchabschluss-Screen
- keine Karten-XP aus Matches
- keine robuste Positionspflicht fuer das aktive Deck
- keine vollstaendige Karriere-Tabelle
- Matchsimulation basiert stark auf Zufall und Einzelwerten statt auf einem tieferen Spielmodell

## Vorhandene Funktionen

### Matchdeck

Vorhanden:

- `MATCH_CARD_COUNT = 6`
- aktive Karten werden in `state.selected` gespeichert
- Besitzkarten liegen in `state.deck`
- Auswahl im Deck-Feature ueber `toggleSelected(id)`
- maximal 6 aktive Karten, neue Auswahl verschiebt bei Ueberlauf die aelteste Karte aus der Auswahl
- mindestens 1 Karte bleibt ausgewaehlt
- wenn weniger als 6 Karten ausgewaehlt sind, fuellt `activeMatchCards()` aus dem restlichen Besitzdeck auf

Bewertung:

- Die 6-Karten-Regel ist vorhanden.
- Das Deck ist funktional, aber nicht streng validiert.
- Es wird nicht verhindert, dass eine Formation ohne echte passende Positionskarten gespielt wird; der Code nimmt dann Fallback-Karten.

### Formationen

Vorhandene Formationen laut Code und Dokumentation:

| Formation | Abwehr | Mittelfeld | Angriff |
| --- | ---: | ---: | ---: |
| 2-2-1 | 2 | 2 | 1 |
| 2-1-2 | 2 | 1 | 2 |
| 1-2-2 | 1 | 2 | 2 |
| 3-1-1 | 3 | 1 | 1 |

Umsetzung:

- `FORMATIONS` definiert die Feldspieler-Verteilung.
- `selectedFormation` startet mit `2-2-1`.
- Formation wird in `state.formation` gespeichert.
- `buildFormationLineup(cards, formationKey)` baut daraus Keeper, Defense, Midfield und Attack.

Bewertung:

- Formationen sind vorhanden.
- Die Formation steuert die Rollenverteilung.
- Der Torwart ist zusaetzlich zur Feldspielerformation vorgesehen.

### Taktik

Vorhanden:

- `selectedTactic` startet mit `pressing`.
- Taktikbuttons setzen `selectedTactic`.
- Matchsituationen enthalten `tactic`.
- Bei passender Taktik gibt es einen Bonus:
  - `playMatch()` nutzt +7.
  - `simulateOfflineMatch()` nutzt +6.

Bewertung:

- Taktik ist im Match wirksam.
- Taktik wird nicht im `state` persistiert, sondern nur als Laufzeitvariable gehalten.
- Nach Reload faellt die Taktik wieder auf `pressing` zurueck.

### Spielsituationen

Vorhanden:

- `matchSituations` enthaelt 10 Situationen.
- Pro Match werden 5 Situationen per `drawMatchSituations(5)` zufaellig gezogen.
- Jede Situation hat:
  - `label`
  - `call`
  - gewichtete `stats`
  - passende `tactic`
  - `goalBias`

Situationen laut Code:

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

Bewertung:

- Die dokumentierten Situationen sind im Code vorhanden.
- Das System entscheidet die Situation automatisch.
- Der Spieler waehlt nicht manuell den Wert, was zur dokumentierten Designrichtung passt.

### Matchauswertung

Vorhanden in `playMatch()`:

1. Scores werden auf 0 gesetzt.
2. Aktuelles Lineup wird gebaut.
3. 5 Situationen werden gezogen.
4. Fuer jede Situation wird eine passende Karte gewaehlt.
5. Karte wird fuer diese Matchrunde aus `availableCards` entfernt.
6. `playerPower` wird berechnet aus:
   - `situationPower(card, situation)`
   - Taktikbonus
   - Zufall `rand(0, 16)`
7. `opponentPower` wird berechnet aus:
   - `currentOpponent.power`
   - `situation.goalBias`
   - Zufall `rand(-9, 17)`
8. Klare Ueberlegenheit erzeugt Tor oder Gegentor.
9. Enges Ergebnis erzeugt neutrale Logzeile.
10. Ergebnis gibt LP und Coins.
11. Record und Tabellenzeilen werden angepasst.
12. Neuer Gegner wird erzeugt.
13. Eventueller Ligaaufstieg wird geprueft.

Bewertung:

- Eine echte Matchschleife ist vorhanden.
- Es gibt einfache Ergebnislogik.
- Es gibt keine detaillierte Nachbereitung je Karte.
- Es gibt keine Speicherung eines vollstaendigen Matchobjekts.

### Offline-Karriere

Vorhanden:

- `state.career`
- `defaultCareerState()`
- `normalizeCareerState(career)`
- `runCareerMatch(mode, target)`
- Modi:
  - `season`
  - `quick`
  - `challenge`

Karriere speichert:

- `tier`
- `seasonGame`
- `points`
- `goalsFor`
- `goalsAgainst`
- `xp`
- `tickets`
- `record`
- `log`

Bewertung:

- Offline-Karriere ist vorhanden.
- Saisonspiele zaehlen hoch.
- Nach 10 Spielen wird Saisonabschluss geprueft.
- Karriere ist aber noch keine vollstaendige Liga mit Tabelle, Gegnerliste und Auf-/Abstiegstabelle.

### Schnelles KI-Spiel

Vorhanden:

- `runCareerMatch("quick", target)`
- `applyQuickRewardPool(result)`
- Reward-Pool ist im Admin Center bearbeitbar.
- Quick Rewards koennen Coins, Diamanten, XP, Gratis-Packs oder Karten sein.
- Gewinnchance beeinflusst Reward-Chance; bei Niederlage wird Chance reduziert.
- Falls nichts gewonnen wird, gibt es Trost-Coins.

Bewertung:

- Schnelles KI-Spiel ist funktional.
- Reward-Pool ist konfigurierbar.
- Es gibt keine separate Matchhistorie oder detaillierte Belohnungsanzeige ausser Logtext.

### Challenges

Vorhanden:

- `runCareerMatch("challenge", target)`
- Challenge nutzt staerkeren Gegnerboost.
- Bei Sieg sind Coins, XP und Diamanten-Chance hoeher als im normalen Saisonspiel.

Bewertung:

- Challenge-Modus existiert als Variante der Offline-Simulation.
- Spezielle Challenge-Regeln wie "nur Bronze", "ohne Wechsel" usw. sind noch nicht umgesetzt.

## Fehlende Funktionen

Aus Dokumentation und Roadmap ergeben sich folgende Luecken:

### Matchabschluss-Screen

Fehlt:

- eigener Screen nach dem Match
- klare Anzeige von Ergebnis, Rewards, XP, Kartenfortschritt, wichtigen Szenen
- separate Darstellung fuer Karriere, Quick Match und Challenge

Aktuell:

- Ergebnis landet in `state.log` und `career.log`.
- Scores werden im Hauptmatchbereich aktualisiert.

### Karten-XP aus Matches

Fehlt:

- XP pro eingesetzter Karte
- Fortschritt je Karte nach Match
- Level-up durch Matchteilnahme
- visuelle XP-Auswertung

Aktuell:

- Karten koennen manuell im Fusion/Sammlung-Feature gelevelt werden.
- Karriere-XP existiert, aber keine Karten-XP aus Matches.

### CPU-Decks

Fehlt:

- CPU-Gegner mit eigenen Karten
- CPU-Formationen
- CPU-Taktik
- CPU-Kartenwerte pro Situation
- CPU-Deckprofile nach Liga/Karrierelevel

Aktuell:

- Gegner sind Namen plus Powerwert.
- `currentOpponent.power` und `careerOpponentForTier()` bestimmen die Gegenseite abstrakt.

### Vollstaendige Karriere-Tabelle

Fehlt:

- echte Tabelle mit mehreren KI-Teams pro Saison
- Spielplan
- Auf-/Abstieg auf Basis einer simulierten Liga
- Pokal-/KO-Modus

Aktuell:

- Karriere hat Punkte, Bilanz und Log.
- Saisonabschluss prueft nach 10 Spielen Punkte.

### Strenge Deck- und Positionsvalidierung

Fehlt:

- Blockade, wenn keine gueltige Formation mit passenden Positionen gestellt werden kann
- klare UI-Warnung bei fehlendem Torwart/fehlender Rolle
- Formation-spezifische Mindestanforderungen

Aktuell:

- Fallbacks nehmen notfalls beliebige Karten.
- Dadurch bleibt das Spiel immer spielbar, aber positionslogisch unscharf.

### Matchspeicherung

Fehlt:

- Match-ID
- vollstaendiger Matchdatensatz
- gespeicherte Runden/Situationen
- verwendete Karten
- Gegnerdaten
- Rewards
- Ergebnisverlauf
- Historie pro Modus

Aktuell:

- Nur kurze Logs werden gespeichert:
  - `state.log` maximal 8 Eintraege
  - `career.log` maximal 6 Eintraege
- Scores `homeScore` und `awayScore` speichern nur das aktuelle/letzte Hauptmatch.

## Fehlerhafte oder problematische Funktionen

### Taktik wird nicht gespeichert

Problem:

- `selectedTactic` ist eine Laufzeitvariable.
- Nach Reload geht die aktive Taktik verloren.

Risiko:

- UI kann eine andere aktive Taktik suggerieren als intern genutzt wird, falls nicht sauber synchronisiert.

### `selectedFormation` und `state.formation` koennen auseinanderlaufen

Vorhandene Absicherung:

- `render()` setzt `selectedFormation = FORMATIONS[state.formation] ? state.formation : selectedFormation`.

Problem:

- Die globale Laufzeitvariable bleibt dennoch eine zweite Quelle neben `state.formation`.
- Matchfunktionen nutzen `selectedFormation` statt direkt `state.formation`.

Risiko:

- Spaetere Erweiterungen koennen versehentlich falsche Formation nutzen.

### Matchlog ist zu kurz fuer vollstaendige Analyse

Problem:

- `state.log = [...].slice(0, 8)`.
- Ein Match erzeugt 1 Ergebniszeile + 5 Szenen, alte Logs werden gemischt.
- Karriere schreibt zusaetzlich in `career.log`, aber auch kurz.

Risiko:

- Kein verlaesslicher Verlauf fuer Debugging, Balancing oder Spielerhistorie.

### Gegnerlogik ist abstrakt und nicht kartenbasiert

Problem:

- CPU hat keine Karten und keine Werte.
- Gegnerpower ist ein einzelner Zahlenwert plus Zufall.

Risiko:

- Kartenwerte des Spielers koennen sich weniger bedeutsam anfuehlen, weil die Gegenseite nicht transparent vergleichbar ist.

### Positionsfallback kann Gameplay verwaessern

Problem:

- `buildFormationLineup()` nimmt bei fehlender passender Rolle eine beliebige beste Karte.
- Ein Spieler kann theoretisch ohne echten Torwart oder ohne passende Verteidiger spielen.

Risiko:

- Positionssuche und positionsspezifische Packs verlieren an Gameplay-Bedeutung, wenn jede Karte fast ueberall funktionieren kann.

### Rating-Skala passt nicht sichtbar zur Klassenskala 50-299

Dokumentation nennt Klassenbereiche:

- Gewoehnlich 50-69
- ...
- Elite 250-299

Code:

- `rating(card)` mittelt Stats und clamp't auf 20-299.
- Einzelstats werden meist auf 20-99 begrenzt.
- Dadurch liegt das sichtbare Rating praktisch eher im klassischen 20-99 Bereich, nicht wirklich in 50-299.

Risiko:

- Klassenbereiche und sichtbarer Overall koennen fuer Spieler widerspruechlich wirken.

## Bereits vorhandene Matchlogik

### Hauptmatch

Funktion:

- `playMatch()`

Ablauf:

- nutzt aktuelle Formation und aktive Karten
- zieht 5 zufaellige Situationen
- waehlt je Situation automatisch eine Karte
- vergleicht Spielerpower gegen CPU-Power
- erzeugt Tore, Gegentore oder neutrale Szenen
- vergibt LP und Coins
- aktualisiert Record und Liga-KI-Zeilen
- schreibt Log
- erzeugt neuen Gegner

### Offline/Karriere-Match

Funktionen:

- `runCareerMatch(mode, target)`
- `simulateOfflineMatch(opponent, mode)`

Ablauf:

- nutzt dieselbe Grundidee wie Hauptmatch
- Karrieregegner kommt ueber `careerOpponentForTier()`
- `mode` beeinflusst Gegnerboost und Rewards
- Saisonmodus schreibt Karrierepunkte, Tore, Gegentore und Bilanz
- Quick-Modus nutzt Reward-Pool
- Challenge hat bessere Rewards und staerkere Gegner

### Situationsauswahl

Funktion:

- `drawMatchSituations(count)`

Aktuell:

- mischt die vorhandene Situationsliste zufaellig
- nimmt die ersten `count` Situationen

### Kartenwahl pro Situation

Funktionen:

- `chooseCardForMatchSituation(availableCards, lineup, situation)`
- `situationLineupCards(lineup, situation)`
- `chooseCardForSituation(cards, situation)`

Logik:

- defensive Situationen bevorzugen Keeper + Defense
- Spielaufbau/Flanke/Freistoss bevorzugen Midfield + Attack
- andere Offensivsituationen bevorzugen Attack + Midfield
- aus den passenden Karten gewinnt die Karte mit hoechster `situationPower`
- verwendete Karte wird aus `availableCards` entfernt, bis alle durch sind

## Vorhandene Kartenwertberechnung

### Wertebasis

Vorhandene Werte:

Feldspieler:

- Tempo (`pace`)
- Abschluss (`finish`)
- Passspiel (`passing`)
- Dribbling (`dribble`)
- Defensive (`defense`)
- Physis (`physical`)

Torhueter:

- Reflexe (`reflexes`)
- Fangsicherheit (`handling`)
- Strafraumbeherrschung (`area`)
- Abschlaege (`kicking`)
- Reaktion (`reaction`)
- Organisation (`organization`)

Spezialwerte:

- Spielintelligenz (`iq`)
- Teamgeist (`teamgeist`)

### Berechnung

Funktion:

- `buildCardStats(pos, atk, mid, def, cls, performance)`

Quellen:

- Basiswerte `atk`, `mid`, `def`
- Kartenklasse als `classBoost`
- generierte oder gespeicherte Saisonperformance
- Positionsrolle

Feldspielerperformance nutzt unter anderem:

- Tore
- Vorlagen
- Minuten
- Zweikampfquote
- Passquote
- Dribbling-Erfolg
- Laufdistanz
- Gelbe/Rote Karten als Penalty

Torhueterperformance nutzt unter anderem:

- Paraden
- Weiße Westen
- Gegentore pro Spiel
- gehaltene Elfmeter
- Fangquote
- Passquote

Bewertung:

- Die dokumentierte Idee einer automatischen Wertberechnung aus Leistungsdaten ist im Prototyp teilweise vorhanden.
- Es sind aber generierte oder statische Performancewerte, keine echte externe Saison-Datenpipeline.

### Overall / Rating

Funktion:

- `rating(card)`

Logik:

- holt Hauptwerte aus `statProfile(card)`
- holt Spezialwerte aus `SPECIAL_STATS`
- Rating = 86 Prozent Hauptwertdurchschnitt + 14 Prozent Spezialwertdurchschnitt
- clamp auf 20 bis 299

Auffaelligkeit:

- Obwohl bis 299 geclamped wird, kommen die Werte aus 20-99 Stats.
- Klassenbereiche 150-299 werden dadurch nicht wirklich ausgespielt.

### Matchpower

Funktion:

- `situationPower(card, situation)`

Logik:

- berechnet gewichteten Durchschnitt der zur Situation gehoerenden Werte
- Torhueterwerte werden ueber `actionStatValue()` auf Feldspieleraktionen gemappt

Beispiel:

- Tempo bei Torhueter -> Reaktion
- Abschluss bei Torhueter -> Abschlaege
- Passspiel bei Torhueter -> Organisation

## CPU-Logik

### Hauptmatch-CPU

Vorhanden:

- `currentOpponent = createOpponent()`
- Gegner hat Name, Ligaindex, Klassenindex und `power`
- `opponentPower` = Gegnerpower + Situationsbias + Zufall

Nicht vorhanden:

- CPU-Karten
- CPU-Deck
- CPU-Formation
- CPU-Taktik
- sichtbare CPU-Werte
- CPU-Kartenwahl pro Situation

### Karriere-CPU

Vorhanden:

- `careerOpponents` als Namensliste
- `careerOpponentForTier(tier, gameIndex)` liefert Gegnerdaten
- `simulateOfflineMatch()` nutzt Gegnerpower mit Mode-Boost

Nicht vorhanden:

- persistente Gegnerprofile
- eigene KI-Kader
- Karriere-Tabelle mit KI-Teamfortschritt

## Deck- und Positionspruefung

### Vorhanden

- `toggleSelected(id)` begrenzt Auswahl auf 6 Karten.
- `activeMatchCards()` nutzt Auswahl und fuellt bei Bedarf aus Besitzkarten auf.
- `buildFormationLineup()` versucht die besten Karten pro Rolle zu nehmen:
  - Keeper ueber `isGoalkeeper()`
  - Defense ueber `isDefender()`
  - Midfield ueber `isMidfielder()`
  - Attack ueber `isAttacker()`
- Fallback nimmt beliebige beste Karte, falls Rolle fehlt.

### Nicht vorhanden

- harte Pruefung auf genau 1 TW
- harte Pruefung auf Formationserfuellung
- Fehlermeldung, wenn Formation nicht sauber besetzt werden kann
- Positionschemie
- Strafen fuer falsche Position
- automatische UI-Anzeige "Formation ungueltig"

Bewertung:

- Die aktuelle Loesung ist ein guter Prototyp, weil sie Matches nicht blockiert.
- Fuer ein langfristiges Kartenspiel sollte Positionsvalidierung spaeter strenger werden.

## Matchspeicherung

### Vorhanden

Gespeichert wird im globalen State:

- `homeScore`
- `awayScore`
- `record`
- `lp`
- `coins`
- `leagueRows`
- `log`
- `career.log`
- `career.record`
- `career.points`
- `career.goalsFor`
- `career.goalsAgainst`

Persistenz:

- `saveState()` speichert `state` in `localStorage` unter `liga-clash-state-v1`.
- `normalizeState()` migriert/normalisiert gespeicherte Felder.

### Fehlend

- eigene `matches`-Liste
- Match-ID
- Datum/Zeit
- Modus
- Gegnerobjekt
- verwendete Formation
- verwendete Taktik
- eingesetzte Karten
- gezogene Situationen
- Rewards
- Karten-XP
- Replay- oder Detailansicht

Bewertung:

- Matchspeicherung ist aktuell nur Ergebnis-/Log-Speicherung, keine echte Historie.

## Vergleich Code vs. Dokumentation

| Bereich | Dokumentiert | Im Code vorhanden | Bewertung |
| --- | --- | --- | --- |
| 6 aktive Matchkarten | Ja | Ja | vorhanden |
| Formation 2-2-1 etc. | Ja | Ja | vorhanden |
| Torwart + Feldspieler | Ja | Ja, mit Fallback | vorhanden, aber weich |
| CPU entscheidet Situation | Ja | Ja | vorhanden |
| Situation nutzt gewichtete Werte | Ja | Ja | vorhanden |
| Taktikbonus | Ja | Ja | vorhanden |
| Matchlog | Ja | Ja | vorhanden, kurz |
| LP/Scores/Record | Ja | Ja | vorhanden |
| Karriere | Ja | Ja | vorhanden |
| Schnelles KI-Spiel | Ja | Ja | vorhanden |
| Reward-Pool Quick Match | Ja | Ja | vorhanden |
| Karten-XP aus Matches | Als Empfehlung/Luecke | Nein | fehlt |
| Matchabschluss-Screen | Als Empfehlung/Luecke | Nein | fehlt |
| Vollstaendige Karriere-Tabelle | Als Empfehlung/Luecke | Nein | fehlt |
| KI-Gegner mit Deckprofilen | Roadmap | Nein | fehlt |
| Matchhistorie | Datenmodell nicht voll vorhanden | Nein | fehlt |

## Betroffene Dateien

Direkt betroffen:

- `game.js`
  - Gameplaydaten, Matchsituationen, Formationen, State, Matchsimulation, Karriere, Reward-Pools, Kartenwerte, Decklogik
- `index.html`
  - Matchbereich, Formation-/Taktikbuttons, Deck- und Karriere-UI-Struktur
- `styles.css`
  - visuelle Darstellung von Match, Deck, Karten, Karriere und Logs

Dokumentation:

- `docs/GAME_RULES.md`
- `docs/CARD_SYSTEM.md`
- `docs/DATA_MODEL.md`
- `docs/LIGA_CLASH_SPEC.md`
- `docs/PROJECT_ANALYSIS.md`
- `docs/ROADMAP.md`
- `docs/TEST_PLAN.md`

Persistenz:

- Browser-LocalStorage Key: `liga-clash-state-v1`

## Risiken bei der Erweiterung

### Alles liegt in `game.js`

Risiko:

- Gameplay, UI, Daten, Admin und Persistenz sind stark gekoppelt.
- Erweiterungen am Matchsystem koennen unbeabsichtigt Booster, Karten, Admin oder Rendering beeinflussen.

Empfehlung:

- Vor groesseren Gameplay-Aenderungen Matchlogik in eigene Module oder Datenbereiche trennen.

### LocalStorage-Migration

Risiko:

- Neue Felder wie Matchhistorie, CPU-Decks oder Karten-XP muessen sauber normalisiert werden.
- Alte Spielstaende duerfen nicht brechen.

Empfehlung:

- Jede State-Erweiterung in `createInitialState()` und `normalizeState()` gemeinsam einbauen.

### Balancing-Risiko

Risiko:

- Rating, Klasse, Stats und Matchpower sind noch nicht sauber auf dieselbe Skala abgestimmt.
- Wenn echte 50-299 Overalls eingefuehrt werden, muss Matchpower neu kalibriert werden.

Empfehlung:

- Vor neuen Kartenklassen/Rewards eine klare Skalenentscheidung treffen:
  - entweder sichtbares Rating 20-99 beibehalten
  - oder echtes Liga-Clash-Overall 50-299 vollstaendig einbauen

### CPU-Transparenz

Risiko:

- Spieler koennen schwer nachvollziehen, warum eine Szene verloren wurde, wenn CPU nur eine Powerzahl ist.

Empfehlung:

- CPU-Gegner langfristig mit Kartenprofilen ausstatten.

### Positionssystem

Risiko:

- Position Packs und Formation verlieren Wert, wenn Fallbacks jede Position ausgleichen.

Empfehlung:

- Erst Warnungen einfuehren, danach optional harte Validierung oder Positionsstrafen.

### Matchhistorie und Logs

Risiko:

- Kurze Logs reichen nicht fuer Debugging, Balancing oder spaetere Spielerstatistiken.

Empfehlung:

- Ein `matchHistory`-Modell planen, bevor Karriere, Events und Missionen staerker an Matchdaten gekoppelt werden.

### UI-Erweiterung

Risiko:

- Matchabschluss, Karten-XP, Rewards und Karriere-Tabelle koennen die bestehende UI ueberladen.

Empfehlung:

- Neue Matchauswertung als eigenes Panel/Modal bauen, nicht in den vorhandenen Logbereich stopfen.

## Empfohlene naechste Schritte

Keine Umsetzung in dieser Analyse. Sinnvolle Reihenfolge nach Freigabe:

1. Matchdatenmodell definieren (`matchHistory`, `rounds`, `rewards`, `usedCards`).
2. Taktik in `state` persistieren.
3. Matchabschluss-Screen auf Basis vorhandener `playMatch()`-Ergebnisse erstellen.
4. Karten-XP nur vorbereiten, solange Balancing der Rating-Skala offen ist.
5. CPU-Gegnerprofile separat planen, bevor echte CPU-Decks eingebaut werden.
6. Positionsvalidierung zuerst als Warnsystem einbauen, nicht sofort hart blockieren.
