# Liga Clash - Fix-Bericht: Fusion, Kartenentwicklung, Bilder, Profil

Stand: 2026-07-12

## Umgesetzt

- Fusion-Karten sind als komplette Karte klick- und touchbar.
- Kartendetails zeigen Progression, XP, Level-Cap, Sterne, Duplikate, Bildquelle und Aktionen.
- Leveln nutzt XP und respektiert Stern-Levelgrenzen.
- Sternaufstieg verbraucht Duplikate und speichert Transaktionen.
- Bestehende PRO-/Evolution-Fusion bleibt erhalten, jetzt mit Bestaetigung und Transaktion.
- Spielernamen nutzen `safeCardName()` und haben robustere CSS-Darstellung.
- Ungeeignete/unfreigegebene Bilder fallen auf eine professionelle Silhouette zurueck.
- Profilseite wurde im bestehenden Featurepanel ergaenzt.
- Profilfelder und Einstellungen werden im bestehenden State gespeichert.
- Header und Profil verwenden dieselben Userdaten.

## Geaenderte Dateien

- `game.js`
- `styles.css`

## Neue Dateien

- `assets/players/player-silhouette.svg`
- `tests/card-fusion-profile-static.test.mjs`
- `CARD_FUSION_PROFILE_GAP_ANALYSIS.md`
- `CARD_PROGRESSION_SYSTEM.md`
- `PLAYER_IMAGE_POLICY.md`
- `PROFILE_SYSTEM.md`
- `CARD_FUSION_PROFILE_FIX_REPORT.md`
- `CARD_FUSION_PROFILE_TEST_REPORT.md`
- `CARD_FUSION_PROFILE_BUG_REPORT.md`

## Nicht umgesetzt

- Echte Backend-Uploads fuer Spielerbilder. Das Projekt nutzt aktuell lokale Metadaten und LocalStorage.
- Echte oeffentliche Profilfreigabe. Sichtbarkeit wird vorbereitet gespeichert.
