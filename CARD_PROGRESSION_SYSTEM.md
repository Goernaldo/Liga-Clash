# Liga Clash - Kartenentwicklung

Stand: 2026-07-12

## Zentrale Konfiguration

Die Kartenentwicklung ist in `game.js` ueber `CARD_PROGRESSION` zentral konfiguriert:

- Max-Level: 100
- Stern-Levelgrenzen: 1 Stern = 10, 2 Sterne = 20, 3 Sterne = 30, 4 Sterne = 50, 5 Sterne = 100
- Duplikatkosten: 1->2 = 1, 2->3 = 2, 3->4 = 3, 4->5 = 5
- XP-Kurve: `xpBase + (level - 1) * xpStep`

## Gespeicherte Felder

Karten werden rueckwaertskompatibel normalisiert und enthalten:

- `currentLevel` / `level`
- `maxLevel`
- `currentXp` / `xp`
- `xpToNextLevel`
- `totalXp`
- `levelCap`
- `currentStars` / `stars`
- `maxStars`
- `starProgress`
- `duplicatesRequired`
- `materialsRequired`
- `lastLeveledAt`

## Leveln

`levelCard()` vergibt XP ueber `addCardXp()`. Eine Karte steigt nur bis zur aktuellen Stern-Levelgrenze. Erreicht sie diese Grenze, bleibt restliche XP gespeichert und die UI zeigt, dass ein Sternaufstieg noetig ist.

## Sternaufstieg

`raiseCardStars()` verwendet Duplikate derselben Kartenbasis. Die Hauptkarte bleibt erhalten, Duplikate werden entfernt und eine Transaktion in `cardProgressTransactions` gespeichert.

## Evolution

Die bestehende PRO-/Evolution-Logik bleibt erhalten. Sie verwendet weiterhin `proStars` und verbraucht eine passende zweite Level-100-Karte. Stern-Levelgrenzen und PRO-Evolution sind getrennte Systeme.

## Werteberechnung

`calculateCardProgression(card, level, stars)` liefert den zentralen Bonus fuer Level, Sterne, Serie und Evolution. `cardProgressBonus()` nutzt diese Funktion, damit Kartenwerte nicht in mehreren UI-Komponenten unterschiedlich berechnet werden.
