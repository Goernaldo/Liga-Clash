# Liga Clash - Profil-System

Stand: 2026-07-12

## Datenquelle

Das Profil erweitert die bestehenden `adminUsers`. Es gibt kein zweites Benutzersystem.

## Gespeicherte Profilfelder

- `profileId`
- `userId`
- `displayName`
- `avatar`
- `favoriteClubId`
- `favoriteNationId`
- `bio`
- `motto`
- `language`
- `visibility`
- `preferences`
- `preferredFormation`
- `createdAt`
- `updatedAt`

## UI

Die Route `#profile` oeffnet die Profilansicht im bestehenden Featurepanel. Login und PIN-Bearbeitung bleiben im vorhandenen Loginpanel erreichbar.

## Header-Synchronisierung

Header, Admin-Header, Loginpanel und Profil lesen denselben aktiven User. Aenderungen an Anzeigename oder Avatar werden nach dem Speichern direkt in der Kopfzeile angezeigt.

## Statistiken

Profilstatistiken stammen aus vorhandenen lokalen Systemen:

- Matchverlauf
- Record
- Booster-Oeffnungen
- Deck/Sammlung
- Missionen
- Ligaindex

Es werden keine Fake-Werte erzeugt.

## Datenschutz

Die Sichtbarkeit `private`, `friends` oder `public` wird nur lokal gespeichert. Es wird keine echte oeffentliche Profilfreigabe vorgetaeuscht.
