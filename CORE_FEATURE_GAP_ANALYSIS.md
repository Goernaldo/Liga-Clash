# Core Feature Gap Analysis

Stand: 2026-07-12

## 1. Pack-Oeffnungsanimation

- Ursache: `showPackReveal()` rendert direkt die gezogenen Karten in ein Ergebnis-Overlay. Es gibt keine getrennten Phasen fuer Pack-Zentrum, Oeffnen, verdeckte Karten, einzelne Aufdeckung und Abschluss.
- Betroffene Dateien: `game.js`, `styles.css`.
- Bereits vorhanden: `showPackReveal(cards, pack, opening)`, gespeicherte `boosterOpenings`, Packbilder, Karten-Reveal-CSS, `prefers-reduced-motion` ist noch nicht gezielt angebunden.
- Fehlende Funktion: sichtbarer Pack-Opening-State mit Buttons `Ueberspringen`, `Naechste Karte`, `Alle aufdecken`, `Fertig`.
- Geplanter Fix: `showPackReveal()` zu einer gesteuerten Reveal-UI erweitern, Karten anfangs verdecken, Ergebnis bereits vor Animation speichern, Buttons fuer Reveal-Schritte ergaenzen und CSS-Keyframes/Reduced-Motion-Regeln ergaenzen.

## 2. Automatisches Match

- Ursache: `playMatch()` ruft `runMatchEngine()`, und `runMatchEngine()` loest in einer `forEach`-Schleife alle fuenf Runden direkt aus.
- Betroffene Dateien: `game.js`, `index.html`, `styles.css`.
- Bereits vorhanden: Match-State, `prepareMatch()`, `resolveMatchRound()`, CPU-Auswahl, Situationslogik, Battle-Board, Deck-Grid.
- Fehlende Funktion: normaler manueller Rundenstatus mit Spieler-Kartenauswahl und bestaetigtem Weiterklicken.
- Geplanter Fix: manuellen Matchmodus als Standard einfuehren: `startManualMatch()`, `selectManualMatchCard()`, `resolveManualRound()`, `advanceManualRound()`. Automatische Engine bleibt fuer Tests/Admin-Simulation erhalten.

## 3. Manuelle Kartenauswahl

- Ursache: `chooseBattleCard()` waehlt aktuell auch fuer Spieler automatisch die beste Karte; das Deck-Grid toggelt nur Deckauswahl und nicht Matchkarten.
- Betroffene Dateien: `game.js`, `styles.css`.
- Bereits vorhanden: aktive Deckkarten, Used-Card-Markierung, Positionsfit, Situationsgruppen.
- Fehlende Funktion: Karten pro Runde auswahlen, ungueltige/verbrauchte Karten sichtbar sperren, Auswahl bestaetigen.
- Geplanter Fix: Battle-Board zeigt passende Karten als `manual-card-choice`, speichert `pendingPlayerCardId`, blockiert gebrauchte Karten und wertet erst nach Button `Auswahl bestaetigen`.

## 4. Draft-Board nach Match

- Ursache: `prepareRewardBoard(match)` legt nur Meta-Daten (`selectionCount`, `status`) an. Es gibt keine 25 Felder, keine Route/Feature-Ansicht und keine Pick-Aktion.
- Betroffene Dateien: `game.js`, `styles.css`.
- Bereits vorhanden: `pendingRewardBoard`, Pick-Anzahl 4/2, Reward-Pool-Funktionen, Missionsereignis `reward_board_completed`.
- Fehlende Funktion: 5x5 Board mit gespeicherten Inhalten und manuellen Picks.
- Geplanter Fix: `createDraftBoard()` erzeugt 25 Inhalte, `renderDraftBoardFeature()` zeigt das Board, `claimDraftPick()` vergibt ausgewaehlte Belohnungen idempotent, Matchabschluss navigiert automatisch zu `draft`.

## 5. Liga-Namen

- Ursache: `LEAGUE_PHASE_CONFIG` besitzt Namen, aber nicht alle geforderten Anzeige-Metadaten; die UI zeigt nur `league.name` und einzelne Daten.
- Betroffene Dateien: `game.js`, `LEAGUE_SYSTEM.md`.
- Bereits vorhanden: `1. Liga`, `2. Liga`, `3. Liga`, `Unterste Liga` und Wochen-ID.
- Fehlende Funktion: Kurzname, Logo/Fallback, Beschreibung, klare Stufe, Teilnehmerzahl, Zonen in der sichtbaren Liga-UI.
- Geplanter Fix: Liga-Konfiguration um Anzeige-Metadaten erweitern und `Unterste Liga` als `Rookie-Liga` anzeigen.

## 6. Liga-Teilnehmer sichtbar

- Ursache: Teilnehmer werden in `state.leagueSystem.currentWeek.participants` gespeichert, die UI-Tabelle zeigt aber nur wenige Spalten.
- Betroffene Dateien: `game.js`, `styles.css`.
- Bereits vorhanden: stabile IDs, CPU-Namen, Deckstaerke, Formation, Difficulty, Tabellenwerte.
- Fehlende Funktion: sichtbare Teilnehmerdetails inklusive CPU/Spielerstatus, Logo/Avatar, Deckstaerke, Spiele/Siege/Niederlagen/Rundendifferenz/Punkte.
- Geplanter Fix: `renderPhase8LeagueTable()`/Liga-Feature um vollstaendige Teilnehmer-Spalten erweitern und Spielerzeile markieren.

## 7. Admin-Liga-Teilnehmer

- Ursache: Phase-9-Admin-Modul `renderAdminLeaguesModule()` zeigt nur Liga-Metadaten.
- Betroffene Dateien: `game.js`, `ADMIN_CENTER.md`.
- Bereits vorhanden: Admin-Panel, `renderAdminLeaguesModule()`, `state.leagueSystem.currentWeek.participants`.
- Fehlende Funktion: Teilnehmerliste, freie Plaetze, CPU-Gegner, Spielplaene und Tabellenvorschau.
- Geplanter Fix: Admin-Ligen-Modul um aktuelle Teilnehmer, freie Plaetze, CPU-Gegner und Spielplan-Vorschau erweitern; Aenderungen an aktiver Woche bleiben geschuetzt/dokumentiert.

## 8. Packbildverwaltung

- Ursache: Admin-Booster nutzt nur ein festes `<select>` mit vorhandenen Assetpfaden. Browser kann ohne Backend nicht dauerhaft in den Repo-Assetordner schreiben.
- Betroffene Dateien: `index.html`, `game.js`, `styles.css`, `ADMIN_CENTER.md`.
- Bereits vorhanden: Packbildpfad pro Pack, Vorschau im Admin, Packbilder in `assets/packs/`.
- Fehlende Funktion: Upload/Zuordnung, Vorschau, Validierung, wiederherstellbare Bildhistorie, Storage-Abstraktion.
- Geplanter Fix: lokale `AssetStorage`-Schnittstelle mit Data-URL-Testmodus in LocalStorage/State, Dateiinput im Admin-Booster-Modul, Validierung fuer PNG/WebP/JPEG, Vorschau und Zuordnung ohne Originalasset zu ueberschreiben.
