# Liga Clash - Player Image Data Model

Stand: 10.07.2026

## Aktueller Zustand

Karten besitzen aktuell nur:

```js
photo: ""
```

Es gibt keine getrennte Spielerentitaet. Karten, Spieler, Besitzkarten und Serienkarten sind im Prototyp eng gekoppelt.

## Ziel: Spieler von Karte trennen

Langfristig sollte gelten:

- `Player` = echter Fussballspieler
- `CardDefinition` = Kartenversion dieses Spielers
- `OwnedCard` = Besitzinstanz des Spielers
- `PlayerImage` = Bild- und Lizenzmetadaten

## Player

```ts
type Player = {
  id: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  nationality?: string;
  gender?: "male" | "female" | "unknown";
  currentClubId?: string;
  currentClubName?: string;
  league?: string;
  position?: string;
  externalIds: {
    sportmonks?: string | null;
    apiFootball?: string | null;
    sportradar?: string | null;
  };
};
```

## CardDefinition

```ts
type CardDefinition = {
  id: string;
  playerId: string;
  sourceId?: string;
  series: string;
  classIndex: number;
  clubId?: string;
  clubName: string;
  league: string;
  pos: string;
  atk: number;
  mid: number;
  def: number;
  stats: Record<string, number>;
};
```

## OwnedCard

```ts
type OwnedCard = {
  id: string;
  cardDefinitionId: string;
  playerId: string;
  level: number;
  proStars: number;
  proQuality: "bronze" | "silver" | "gold" | "";
  acquiredAt: string;
};
```

## PlayerImage

Vom Prompt geforderte Felder:

```ts
type PlayerImage = {
  playerId: string;
  externalIds: {
    sportmonks?: string | null;
    apiFootball?: string | null;
  };
  imageProvider?: string | null;
  imageExternalId?: string | null;
  imageUrl?: string | null;
  localImagePath?: string | null;
  manualImagePath?: string | null;
  imageStatus:
    | "missing"
    | "candidate"
    | "needs_review"
    | "remote_allowed"
    | "cached"
    | "manual"
    | "rejected"
    | "error";
  imageUpdatedAt?: string | null;
  imageLicense?: string | null;
  imageAuthor?: string | null;
  imageAttributionUrl?: string | null;
  imageMatchConfidence?: number | null;
  imageManuallyVerified: boolean;
  cacheAllowed: boolean;
  remoteDisplayAllowed: boolean;
  commercialUseAllowed: boolean | null;
  licenseReviewStatus: "unknown" | "approved" | "blocked" | "needs_legal_review";
};
```

## ImportJob

```ts
type PlayerImageImportJob = {
  id: string;
  provider: "sportmonks" | "apiFootball" | "manual";
  scopeType: "leagueSeason" | "club" | "player";
  league?: string;
  season?: string;
  clubId?: string;
  playerId?: string;
  status: "draft" | "preview" | "running" | "paused" | "completed" | "failed" | "cancelled";
  batchSize: number;
  concurrency: number;
  cursor?: string | null;
  totalPlanned: number;
  processed: number;
  matched: number;
  needsReview: number;
  failed: number;
  startedAt?: string | null;
  pausedAt?: string | null;
  finishedAt?: string | null;
  createdBy: string;
};
```

## ImportResult

```ts
type PlayerImageImportResult = {
  id: string;
  jobId: string;
  playerId: string;
  provider: string;
  externalId?: string | null;
  candidateName?: string | null;
  candidateDateOfBirth?: string | null;
  candidateNationality?: string | null;
  candidateClub?: string | null;
  candidatePosition?: string | null;
  imageUrl?: string | null;
  confidence: number;
  status: "matched" | "needs_review" | "rejected" | "missing" | "failed";
  reason?: string | null;
  licenseMetadata?: Record<string, unknown>;
  createdAt: string;
};
```

## ImportLog

```ts
type PlayerImageImportLog = {
  id: string;
  jobId: string;
  level: "info" | "warning" | "error";
  playerId?: string;
  message: string;
  details?: Record<string, unknown>;
  createdAt: string;
};
```

## Migration aus aktuellem Modell

Aktuelle Karte:

```js
{
  id: "ducksch",
  name: "Marvin Ducksch",
  pos: "ST",
  club: "Werder Bremen",
  photo: ""
}
```

Ziel:

```js
Player {
  id: "player-ducksch",
  displayName: "Marvin Ducksch",
  currentClubName: "Werder Bremen",
  position: "ST",
  externalIds: { sportmonks: null, apiFootball: null }
}

CardDefinition {
  id: "ducksch",
  playerId: "player-ducksch",
  series: "standard"
}

PlayerImage {
  playerId: "player-ducksch",
  imageStatus: "missing",
  imageManuallyVerified: false
}
```

## Fehlende Felder im aktuellen Projekt

- `playerId`
- `externalIds`
- `dateOfBirth`
- `nationality`
- `gender`
- `imageProvider`
- `imageExternalId`
- `imageUrl`
- `localImagePath`
- `manualImagePath`
- `imageStatus`
- `imageUpdatedAt`
- `imageLicense`
- `imageAuthor`
- `imageAttributionUrl`
- `imageMatchConfidence`
- `imageManuallyVerified`
- `cacheAllowed`
- `remoteDisplayAllowed`
- `commercialUseAllowed`
- `licenseReviewStatus`

