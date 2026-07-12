# Liga Clash - Kartenfusion, Profil und Bilder: Gap-Analyse

Stand: 2026-07-12

## 1. Fusion-Karten nicht anklickbar

- Ursache: `renderFusionFeature()` rendert Karten mit `miniCard(card, false, "collection")`. Dadurch bekommt die Karte selbst kein `data-feature-action`; nur die kleinen Collection-Buttons sind aktiv.
- Betroffene Dateien: `game.js`, `styles.css`.
- Vorhandene Teilfunktion: `showCardDetails(cardId)` existiert bereits und kann Karteninformationen im Dialog anzeigen.
- Fehlende Funktion: Die gesamte Karte in der Fusion-Ansicht ist nicht als klick- oder touchbares Ziel markiert.
- Geplanter Fix: Fusion-Karten mit eigenem Kontext rendern und das Karten-Article selbst mit `data-feature-action="card-details"` ausstatten.

## 2. Karten-Leveln bis Level 100

- Ursache: `levelCard()` erhöht aktuell direkt das Level und ignoriert XP, Stern-Levelgrenzen und zentrale Fortschrittsdaten.
- Betroffene Dateien: `game.js`.
- Vorhandene Teilfunktion: `CARD_MAX_LEVEL = 100`, `normalizeCardLevel()` und `cardLevel()` existieren.
- Fehlende Funktion: Zentraler XP-Pfad, Level-Cap je Sternstufe, gespeicherte Fortschrittsfelder und UI-Feedback bei Cap.
- Geplanter Fix: Zentrale Progression-Konfiguration mit XP-Kurve, Level-Caps, Fortschrittsberechnung und gespeicherten Feldern ergänzen.

## 3. Sternesystem

- Ursache: `stars` wird zwar normalisiert, aber nicht als Level-Cap-System genutzt. Das vorhandene `proStars` beschreibt Evolution und ist nicht identisch mit Stern-Levelgrenzen.
- Betroffene Dateien: `game.js`, `data/card-system.js`.
- Vorhandene Teilfunktion: `starsForLevel()` im Kartensystem und `proStars`/Evolution-Badges sind vorhanden.
- Fehlende Funktion: Sternaufstieg mit Duplikatkosten, Transaktion, UI-Button und Levelgrenzen.
- Geplanter Fix: `currentStars`, `levelCap`, Duplikatkosten und `raiseCardStars()` zentral ergänzen, ohne `proStars` zu ersetzen.

## 4. Fusion und Duplikate

- Ursache: `fuseCardToPro()` verbraucht eine Partnerkarte, aber ohne Bestätigungsdialog, Transaktionsschutz oder sichtbare Vorschau im Detaildialog.
- Betroffene Dateien: `game.js`.
- Vorhandene Teilfunktion: `fusionPartnerFor()` und `cardFusionBaseKey()` existieren.
- Fehlende Funktion: Bestätigung, Doppelklickschutz, Transaktions-ID und klare Detailinformationen.
- Geplanter Fix: Fusion im Handler bestätigen, Transaktionen speichern und Detaildialog um Vorschau/Kosten erweitern.

## 5. Spielernamen auf Karten

- Ursache: Namen werden angezeigt, liegen aber in manchen Kartenvarianten zu nah an Bild- und Werteebenen; fehlende Namen haben keinen zentralen Fallback.
- Betroffene Dateien: `game.js`, `styles.css`.
- Vorhandene Teilfunktion: `.card-name` existiert.
- Fehlende Funktion: Zentraler Name-Fallback, bessere Z-Ebene, feste Höhe und robustes Wrapping.
- Geplanter Fix: `safeCardName()` verwenden und CSS für Kontrast, Zeilenumbruch und Layoutstabilität verbessern.

## 6. Spielerbild-Fallback

- Ursache: `resolvePlayerImage()` zeigt jedes Legacy-`photo` an, auch wenn das Bild nicht freigegeben, lizenziert oder als geeignet markiert ist.
- Betroffene Dateien: `game.js`, `assets/players`.
- Vorhandene Teilfunktion: Zentraler `resolvePlayerImage()` existiert.
- Fehlende Funktion: Bildstatus, Ablehnung ungeeigneter Bilder und professionelle Silhouette als produktiver Fallback.
- Geplanter Fix: Bildpriorität zentralisieren, ungeeignete Typen blockieren und `assets/players/player-silhouette.svg` verwenden.

## 7. Admin-Bildstatus

- Ursache: Die Spieler-Verwaltung zeigt nur grob "vorhanden" oder "fehlt".
- Betroffene Dateien: `game.js`.
- Vorhandene Teilfunktion: `renderAdminPlayersModule()` existiert.
- Fehlende Funktion: Status, Typ, Quelle, Lizenz und Fallback-Hinweis.
- Geplanter Fix: Tabelle um Bildstatusdaten aus `resolvePlayerImage()` erweitern; lokale Speichergrenze dokumentieren.

## 8. Account-Profil

- Ursache: Die Route `profile` öffnet nur das Loginpanel. `handleProfileSubmit()` speichert Name, E-Mail und PIN, aber keine Spielprofilfelder.
- Betroffene Dateien: `game.js`, `index.html`, `styles.css`.
- Vorhandene Teilfunktion: `adminUsers`, `activeUser()`, Wallet-Sync und LocalStorage-State existieren.
- Fehlende Funktion: Profilübersicht, editierbare Profilfelder, Statistiken, Einstellungen und Header-Synchronisierung.
- Geplanter Fix: Bestehende `adminUsers` um ein `profile`-Objekt erweitern, Profilroute als Featurepanel rendern und Header/Login mit denselben Daten synchronisieren.

## 9. Speicherung

- Ursache: Profil- und Progressionsfelder werden nicht vollständig normalisiert; dadurch können ältere Speicherstände keine neuen Felder enthalten.
- Betroffene Dateien: `game.js`.
- Vorhandene Teilfunktion: `normalizeState()`, `normalizeAdminUser()` und `saveState()` existieren.
- Fehlende Funktion: Migration für Profil- und Kartenfortschritt.
- Geplanter Fix: Normalisierung erweitert neue Felder rückwärtskompatibel und speichert weiterhin im bestehenden State.
