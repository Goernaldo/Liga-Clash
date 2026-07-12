# Core Feature Fix Report

Stand: 2026-07-12

## Umfang

Umgesetzt wurden ausschliesslich die Nachbesserungen aus `CORE_FEATURE_GAP_ANALYSIS.md`:

- Pack-Oeffnungsanimation
- manuelle Matchrunden mit Kartenauswahl
- Draft-/Pick-Board nach Match
- sichtbarere Liga-Metadaten und Teilnehmer
- Admin-Anzeige fuer Liga-Teilnehmer und Spielplan
- Admin-Zuordnung eigener Booster-Packbilder

Es wurde keine neue Phase begonnen und kein zweites Gameplay-, Booster-, Liga- oder Admin-System angelegt.

## Umgesetzte Fixes

### Pack-Oeffnung

- `showPackReveal()` zeigt jetzt eine Pack-Buehne mit Packbild, Aura und Oeffnungsanimation.
- Karten starten verdeckt und werden schrittweise aufgedeckt.
- Buttons vorhanden: `Ueberspringen`, `Naechste Karte`, `Alle aufdecken`, `Fertig`.
- Die gezogenen Karten werden weiterhin vor der Animation gespeichert, damit Reloads keine anderen Inhalte erzeugen.

### Manuelles Gameplay

- `playMatch()` startet jetzt `startManualMatch()` statt ein komplettes Match automatisch durch `runMatchEngine()` zu spielen.
- Pro Runde wird zuerst die Spielsituation angezeigt.
- Der Spieler waehlt eine Karte aus dem Battle-Board.
- Die Runde wird erst nach `Auswahl bestaetigen` gewertet.
- Verbrauchte Karten werden gesperrt.
- Nach einer Runde wartet das System auf `Naechste Runde`.
- Die automatische Engine bleibt fuer Simulationen und Tests erhalten.

### Draft-Board

- `createDraftBoard()` erzeugt 25 Slots.
- `renderDraftBoardFeature()` zeigt das 5x5-Board.
- `claimDraftPick()` vergibt nur die manuell ausgewaehlten Slots.
- Matchabschluss erstellt `state.pendingRewardBoard` und oeffnet die Draft-Ansicht.
- Belohnungen koennen Coins, Diamanten, Gratis-Packs, Karten oder Material sein.

### Liga-System

- `LEAGUE_PHASE_CONFIG` besitzt jetzt Anzeige-Metadaten wie Kurzname, Stufe, Teilnehmerzahl, Beschreibung und Rewards.
- `Unterste Liga` wurde in `Rookie-Liga` umbenannt.
- Die Liga-Ansicht zeigt Teilnehmerstatus, Deckstaerke, Formation und Zone.

### Admin Center

- `renderAdminLeaguesModule()` zeigt aktuelle Liga, Teilnehmer, CPU-Gegner, freie Plaetze, Teilnehmerliste und Spielplan-Vorschau.
- Booster & Packs besitzt Upload-Felder pro Pack.
- `handleAdminBoosterImageUpload()` validiert PNG/JPG/WebP bis 2,5 MB.
- Uploads werden lokal in `state.adminData.packImages` als Data-URL mit Lizenz-/Quellmetadaten gespeichert.
- `getPackImageUrl()` loest Assetpfade und lokale Uploads einheitlich auf.

## Geaenderte Dateien

- `game.js`
- `index.html`
- `styles.css`
- `LEAGUE_SYSTEM.md`
- `ADMIN_CENTER.md`
- `docs/LEAGUE_SYSTEM.md`
- `tests/phase8-league-mission-static.test.mjs`
- `tests/phase8-league-mission-simulation.test.mjs`

## Neue Dateien

- `CORE_FEATURE_FIX_REPORT.md`
- `CORE_FEATURE_TEST_REPORT.md`
- `CORE_FEATURE_BUG_REPORT.md`
- `tests/core-feature-fixes-static.test.mjs`

## Bekannte Grenzen

- Booster-Bilduploads sind lokal im Spielstand gespeichert. Ohne Backend werden keine Dateien in den Asset-Ordner geschrieben.
- Admin-Liga-Teilnehmer sind aktuell sichtbar, aber aktive Ligawochen werden nicht direkt manuell umsortiert oder ueberschrieben.
- Der In-App-Browser-Viewport-Override hat im Test nicht auf die angeforderten Pixelwerte umgeschaltet; die App wurde trotzdem im Browser geladen und auf Konsolenfehler geprueft.
