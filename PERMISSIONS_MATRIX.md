# Permissions Matrix

## Rollen

- Owner
- Admin
- Moderator
- Tester
- User

## Rechte

| Recht | Owner | Admin | Moderator | Tester | User |
| --- | --- | --- | --- | --- | --- |
| Admin oeffnen | ja | ja | ja | ja | nein |
| Rollen verwalten | ja | nein | nein | nein | nein |
| Benutzer verwalten | ja | nein | nein | nein | nein |
| Wallet gutschreiben | ja | ja | nein | nein | nein |
| Spiel-/Kartendaten verwalten | ja | ja | nein | nein | nein |
| Booster verwalten | ja | ja | nein | nein | nein |
| Dropchancen verwalten | ja | ja | nein | nein | nein |
| Events verwalten | ja | ja | ja | nein | nein |
| Missionen verwalten | ja | ja | eingeschraenkt | nein | nein |
| News verwalten | ja | ja | ja | nein | nein |
| Shop verwalten | ja | ja | nein | nein | nein |
| Projektstatus/Design/Texte | ja | ja | nein | nein | nein |
| Export | ja | ja | nein | ja | nein |
| Backups | ja | erstellen | nein | nein | nein |
| Logs lesen | ja | ja | ja | ja | nein |
| Reset | ja | nein | nein | nein | nein |

Die technische Quelle ist `ADMIN_PERMISSION_MATRIX` in `game.js`.
