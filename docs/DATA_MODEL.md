# Liga Clash - Data Model

Stand: 10.07.2026  
Quelle: `game.js`, `index.html`, vorhandene Assets und `PROJECT_ANALYSIS.md`

## Persistenz

Der Spielstand wird lokal im Browser gespeichert.

```text
localStorage key: liga-clash-state-v1
```

Zentrale Funktionen:

- `loadState()`
- `createInitialState()`
- `normalizeState(saved)`
- `saveState()`

## Globaler State

Der zentrale `state` enthaelt unter anderem:

| Feld | Bedeutung |
| --- | --- |
| `coins` | Credits/Coins des aktiven Spielers |
| `gems` | Diamanten des aktiven Spielers |
| `lp` | Ligapunkte |
| `leagueIndex` | Index der aktuellen Spieler-Liga |
| `teamClassIndex` | aktuelle Team-/Kartenklasse fuer Generatoren |
| `homeScore` | letzter/eingestellter Heimscore |
| `awayScore` | letzter/eingestellter Gegnerscore |
| `record` | Siege, Remis, Niederlagen |
| `leagueRows` | lokale Ligatabelle |
| `log` | kurze Status-/Spielmeldungen |
| `deck` | Besitzkarten/Sammlung |
| `selected` | aktive Karten-IDs fuer das Matchdeck |
| `formation` | aktive Formation |
| `mailGiftClaimed` | Status des Nachrichtengeschenks |
| `events` | lokale Events |
| `selectedAdminEventId` | aktuell gewaehltes Admin-Event |
| `boosterPacks` | lokale Booster-Konfigurationen |
| `freePacks` | Gratis-Pack-Zaehler je Pack-ID |
| `rewardPools` | Belohnungspools, z. B. fuer schnelles KI-Spiel |
| `adminUsers` | lokale Benutzer/Rollen |
| `activeUserId` | aktiver lokaler Benutzer |
| `career` | Offline-Karrierezustand |
| `cardFilters` | Filter fuer Sammlung und Deck |

## Kartenklassen

Konstante: `teamClasses`

| Index | Name | Range |
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

Range-Quelle: `CARD_CLASS_RANGES`

## Kartenserien

Konstante: `CARD_SERIES`

Felder:

| Feld | Bedeutung |
| --- | --- |
| `value` | technischer Serienwert |
| `label` | Anzeige |
| `bonus` | Serienbonus fuer Rating/Progress |

Vorhandene Serien:

- `standard`
- `rookie`
- `totw`
- `tots`
- `winter`
- `summer`
- `legend`
- `icon`
- `mythic`
- `anniversary`
- `hall-of-fame`

## Club-Modell

Konstante: `CLUBS`

Felder:

| Feld | Bedeutung |
| --- | --- |
| `name` | Vereinsname |
| `league` | Liga |
| `crest` | Wappen-URL |

Vorhandene Datenquellen im Code:

- `DB_LEAGUES`
- `CLUBS`
- `LEGACY_CLUB_MAP`
- `crestUrl(clubId)`

Vorhandene Ligen fuer Datenbankfilter:

- Alle Ligen
- 1. Bundesliga
- 2. Bundesliga
- 3. Liga
- Google Pixel Frauen-Bundesliga
- 2. Frauen-Bundesliga

## Karten-Definition

Konstanten:

- `GAME_CARDS`
- `SEASON_26_27_CARDS`
- `baseCards`

Karten werden ueber `cardDef(...)` definiert.

Bekannte Felder einer Karte:

| Feld | Bedeutung |
| --- | --- |
| `id` | technische Karten-ID |
| `sourceId` | Ursprungs-ID fuer Besitzkarten/Migration |
| `name` | Spielername |
| `pos` | Position |
| `club` | Vereinsname |
| `cls` | Kartenklassenindex |
| `atk` | Legacy-Angriffswert |
| `mid` | Legacy-Mittelfeldwert |
| `def` | Legacy-Defensivwert |
| `photo` | optionale Bild-URL |
| `series` | Kartenserie |
| `level` | Kartenlevel |
| `proStars` | Evolution-/PRO-Sterne |
| `proQuality` | Evolution-Qualitaet |
| `stats` | berechnete Detailwerte |

## Werte-Modell

Feldspielerwerte: `FIELD_STATS`

- `pace`
- `finish`
- `passing`
- `dribble`
- `defense`
- `physical`

Torwartwerte: `KEEPER_STATS`

- `reflexes`
- `handling`
- `area`
- `kicking`
- `reaction`
- `organization`

Spezialwerte: `SPECIAL_STATS`

- `iq`
- `teamgeist`

Berechnung:

- `ensureCardStats(card)`
- `buildCardStats(pos, atk, mid, def, cls, performance)`
- `generatedSeasonPerformance(pos, atk, mid, def)`
- `SEASON_PERFORMANCE_DATA` fuer einzelne Spieler/IDs

## Booster-Modell

Quelle:

- `defaultBoosterPacks()`
- `normalizeBoosterPack(pack)`
- `createAdminBooster()`
- `renderAdminBoosters()`

Felder:

| Feld | Bedeutung |
| --- | --- |
| `id` | Pack-ID |
| `name` | Packname |
| `cost` | Kosten |
| `currency` | `coins` oder `gems` |
| `minClass` | niedrigste moegliche Klasse |
| `maxClass` | hoechste moegliche Klasse |
| `description` | Beschreibung |
| `active` | sichtbar/kaufbar |
| `image` | Packbild |
| `tier` | optischer Pack-Tier |
| `pool` | Kartenpool |
| `cardCount` | Anzahl Karten pro Pack |
| `positions` | erlaubte Positionen |
| `dropRates` | Drop-Chancen je Klasse |

Gratis-Packs:

```text
state.freePacks[packId] = Anzahl
```

## Event-Modell

Quelle:

- `normalizeEvent(event)`
- `createAdminEvent()`
- `renderAdminEvents()`

Felder:

| Feld | Bedeutung |
| --- | --- |
| `id` | Event-ID |
| `title` | Eventname |
| `type` | Eventtyp |
| `date` | Startdatum im Format `DD.MM.YYYY` |
| `startTime` | Startzeit |
| `endDate` | Enddatum |
| `endTime` | Endzeit |
| `description` | Beschreibung |
| `rewards` | Belohnungstexte |
| `active` | aktiv/deaktiviert |

Eventtypen kommen aus `eventTypes()`.

Einschraenkung:

- Kalenderzellen sind aktuell fuer Juli 2026 fest aufgebaut.

## Benutzer- und Rollenmodell

Quelle:

- `defaultAdminUsers()`
- `normalizeAdminUser(user)`
- `activeUser()`
- `canOpenAdmin(user)`

Felder:

| Feld | Bedeutung |
| --- | --- |
| `id` | Benutzer-ID |
| `name` | Anzeigename |
| `email` | E-Mail |
| `role` | Rolle |
| `pin` | lokaler PIN |
| `locked` | gesperrt |
| `wallet` | Coins und Diamanten |

Rollen:

- Owner
- Admin
- Moderator
- User

Admin-Zugang:

- `Owner`, `Admin` und `Moderator` duerfen das Admin Center oeffnen.
- Wallet-Gutschriften sind im Code auf `Owner` und `Admin` begrenzt.

## Karriere-Modell

Quelle:

- `defaultCareerState()`
- `normalizeCareerState(career)`

Bekannte Felder:

| Feld | Bedeutung |
| --- | --- |
| `tier` | Karrierestufe |
| `seasonGame` | Spielnummer in Saison |
| `points` | Karrierepunkte |
| `goalsFor` | Tore |
| `goalsAgainst` | Gegentore |
| `xp` | Erfahrung |
| `tickets` | Tickets |
| `record` | Siege/Remis/Niederlagen |
| `log` | Karriere-Log |

## Match-Modell

Konstanten:

- `FORMATIONS`
- `MATCH_CARD_COUNT = 6`
- `matchSituations`

Formationen:

- `2-2-1`
- `2-1-2`
- `1-2-2`
- `3-1-1`

Lineup:

- Keeper
- Defense
- Midfield
- Attack

Wichtige Funktionen:

- `activeMatchCards()`
- `buildFormationLineup(cards, formationKey)`
- `chooseCardForMatchSituation(availableCards, lineup, situation)`
- `situationPower(card, situation)`
- `playMatch()`

## Reward-Pool-Modell

Quelle:

- `defaultRewardPools()`
- `normalizeRewardPools(pools)`
- `normalizeQuickRewardPool(pool)`
- `saveQuickRewardPool()`

Felder je Reward:

| Feld | Bedeutung |
| --- | --- |
| `active` | Reward aktiv |
| `type` | coins, gems, xp, freePack oder card |
| `amount` | Menge |
| `chance` | Chance in Prozent |
| `packId` | Pack fuer FreePack-Rewards |
| `classIndex` | Klasse fuer Karten-Rewards |

## Migrationen und Normalisierung

Vorhandene Normalisierer:

- `normalizeState`
- `normalizeCard`
- `normalizeEvent`
- `normalizeBoosterPack`
- `normalizeAdminUser`
- `normalizeWallet`
- `normalizeCareerState`
- `normalizeRewardPools`
- `normalizeCardFilters`

Wichtig:

Bei jeder kuenftigen Datenmodell-Aenderung muss eine Migration oder Normalisierung fuer alte LocalStorage-Spielstaende ergaenzt werden.

