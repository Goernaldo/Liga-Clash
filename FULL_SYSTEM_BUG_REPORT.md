# Liga Clash - Full System Bug Report

Stand: 11.07.2026

## Behobene Fehler

### Hoch - Admin-Button auf Tablet/Handy oeffnet Fusion statt Admin

Status: behoben

Betroffene Dateien:

- `styles.css`
- `index.html`

Ursache:

- Die mobile Hauptmenue-Topbar wurde mehrzeilig, aber die erste Zeile des `home-overlay` blieb auf `101px` fixiert.
- Die Quick-Icons ragten in den Bereich der Hauptkacheln.
- Der Trefferpunkt des Admin-Buttons lag dadurch ueber der Fusion-Kachel.
- Der Browser nutzte zusaetzlich eine gecachte CSS-Datei.

Fix:

- Mobile `home-overlay`-Rows auf automatische Hoehe gesetzt.
- Mobile `overlay-topbar`-Margins und Padding zurueckgesetzt.
- Stylesheet-Link mit Version versehen.

Regression:

- Admin oeffnet bei 1366x768, 834x1112 und 390x844 korrekt `#admin`.
- Keine Konsolenfehler.
- Keine horizontale Scrollleiste.

## Offene Fehler und Risiken

### Mittel - Defektes externes Vereinswappen

Status: offen

Beobachtung:

- Browser meldet ein defektes Bild fuer `https://tmssl.akamaized.net/images/wappen/head/196.png`.

Risiko:

- Einzelne Vereinswappen koennen in UI und Kartenansichten fehlen, wenn externe Quellen ausfallen oder IDs nicht stimmen.

Empfehlung:

- Lokalen Asset-Fallback fuer Vereinswappen verwenden.
- Externe Wappen-IDs validieren und problematische IDs ersetzen.

### Mittel - Playwright-Smoke-Test wird uebersprungen

Status: offen

Beobachtung:

- `tests/ui-phase2-smoke.mjs` endet mit `Playwright-Smoke-Test uebersprungen: MODULE_NOT_FOUND`.

Risiko:

- Automatisierter E2E-Test ist im aktuellen Projekt nicht wirklich aktiv.

Empfehlung:

- `package.json` und Testabhängigkeiten definieren oder den Smoke-Test auf die vorhandene Browser-Teststrategie umstellen.

### Hoch fuer Release - Belohnungsboard nicht implementiert

Status: offen, Feature-Luecke

Beobachtung:

- Das Match erzeugt `pendingRewardBoard` und einen Handoff-Text.
- Im DOM existiert kein 5x5-Reward-Board und keine Pick-Interaktion.

Risiko:

- Phase 7 ist nicht releasefaehig.

Empfehlung:

- Phase 7 gezielt implementieren und anschliessend separat testen.

### Hoch fuer Release - Kein zentraler Missions-Eventbus

Status: offen, Feature-Luecke

Beobachtung:

- Missionen werden ueber einfache Bedingungen und `claimedMissions` abgebildet.
- Ereignisse wie `match_started`, `booster_opened`, `reward_board_completed` sind nicht als zentrale Eventpipeline vorhanden.

Risiko:

- Missionen koennen spaeter nicht robust phasenuebergreifend zaehlen.

Empfehlung:

- Zentrales Mission-Event-System als eigene Phase umsetzen.

### Hoch fuer Release - Keine produktionssicheren Rollen/Rechte

Status: offen, Architekturgrenze

Beobachtung:

- Rollen liegen lokal im Browser-State.
- Kein Backend, keine serverseitige Autorisierung.

Risiko:

- Admin-/Owner-Rechte sind manipulierbar.

Empfehlung:

- Sicherheit erst mit Backend/API und serverseitiger Rechtepruefung als releasefaehig bewerten.

### Mittel - Import/Export/Backup fehlen als Spielsystem

Status: offen

Beobachtung:

- Es gibt Spielerbild-Import-Tools.
- Kein vollwertiger Spielstand-Export, Backup oder Restore im Admin Center.

Risiko:

- Release-Testpunkte fuer Wiederherstellung koennen nicht voll bestanden werden.

Empfehlung:

- Datenexport, Backup und Restore als getrennte Admin-Unterphase planen.
