# Liga Clash - Bug-Bericht: Fusion, Kartenentwicklung, Bilder, Profil

Stand: 2026-07-12

## Behoben

- Fusion-Karten waren nicht als Karte klickbar.
- Leveln ignorierte XP und Stern-Caps.
- Sternaufstieg war nicht als eigenes Duplikatsystem nutzbar.
- Karten-Details zeigten zu wenig Progressionsdaten.
- Unfreigegebene Legacy-Bilder konnten in Karten erscheinen.
- Profilroute oeffnete nur Login statt Profiluebersicht.
- Profilfelder wurden nicht als vollstaendiges Profil gespeichert.

## Bekannte offene Punkte

- Browser-Smoke-Test kann lokal nicht vollautomatisch laufen, solange Playwright nicht installiert ist.
- Spielerbild-Uploads sind ohne Backend nur als lokale Pfade/Metadaten abbildbar.
- Profil-Sichtbarkeit ist gespeichert, aber nicht oeffentlich geteilt.

## Risiko

Mittel: Die Progressionsfelder werden rueckwaertskompatibel normalisiert. Alte Speicherstaende sollten weiter laden, aber sehr alte lokale Daten koennen beim ersten Laden migriert werden.
