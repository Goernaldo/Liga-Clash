(function initLigaClashCardSystem(global) {
  const POSITION_DEFINITIONS = [
    { id: "TW", label: "TW", category: "Torwart", sort: 1 },
    { id: "IV", label: "IV", category: "Verteidigung", sort: 2 },
    { id: "LV", label: "LV", category: "Verteidigung", sort: 3 },
    { id: "RV", label: "RV", category: "Verteidigung", sort: 4 },
    { id: "ZDM", label: "ZDM", category: "Mittelfeld", sort: 5 },
    { id: "ZM", label: "ZM", category: "Mittelfeld", sort: 6 },
    { id: "ZOM", label: "ZOM", category: "Mittelfeld", sort: 7 },
    { id: "LM", label: "LM", category: "Mittelfeld", sort: 8 },
    { id: "RM", label: "RM", category: "Mittelfeld", sort: 9 },
    { id: "LF", label: "LF", category: "Angriff", sort: 10 },
    { id: "RF", label: "RF", category: "Angriff", sort: 11 },
    { id: "ST", label: "ST", category: "Angriff", sort: 12 },
  ];

  const POSITION_ALIASES = {
    GK: "TW",
    CB: "IV",
    DM: "ZDM",
    CAM: "ZOM",
    OM: "ZOM",
    LA: "LF",
    RA: "RF",
    MS: "ST",
    LWB: "LV",
    RWB: "RV",
  };

  const RARITIES = [
    { id: "common", label: "Gew\u00f6hnlich", legacyIndex: 0, color: "#cfd7d5", animation: "soft-pulse", effect: "stone", dropChance: 28 },
    { id: "uncommon", label: "Ungew\u00f6hnlich", legacyIndex: 1, color: "#72db83", animation: "green-glow", effect: "leaf", dropChance: 22 },
    { id: "rare", label: "Selten", legacyIndex: 2, color: "#63caff", animation: "blue-shimmer", effect: "ice", dropChance: 16 },
    { id: "special-rare", label: "Besonders Selten", legacyIndex: 3, color: "#238cff", animation: "deep-blue-flare", effect: "deep-ice", dropChance: 10 },
    { id: "ultra-rare", label: "Ultra Selten", legacyIndex: 4, color: "#d253ff", animation: "violet-surge", effect: "violet", dropChance: 7 },
    { id: "bronze", label: "Bronze", legacyIndex: 5, color: "#c47a3b", animation: "bronze-spark", effect: "metal-bronze", dropChance: 6 },
    { id: "silver", label: "Silber", legacyIndex: 6, color: "#d9e4e8", animation: "silver-shine", effect: "metal-silver", dropChance: 4 },
    { id: "gold", label: "Gold", legacyIndex: 7, color: "#ffe15a", animation: "gold-flash", effect: "metal-gold", dropChance: 3 },
    { id: "epic", label: "Episch", legacyIndex: 8, color: "#ff8a1e", animation: "ember-glow", effect: "ember", dropChance: 2 },
    { id: "legendary", label: "Legend\u00e4r", legacyIndex: 9, color: "#ffe66b", animation: "legend-aura", effect: "legend", dropChance: 1.2 },
    { id: "elite", label: "Elite", legacyIndex: 10, color: "#ffd86b", animation: "elite-aura", effect: "elite", dropChance: 0.65 },
    { id: "icon", label: "Icon", legacyIndex: 11, color: "#ffffff", animation: "icon-prism", effect: "icon", dropChance: 0.15 },
  ];

  const STAR_TIERS = [
    { stars: 1, maxLevel: 10 },
    { stars: 2, maxLevel: 20 },
    { stars: 3, maxLevel: 30 },
    { stars: 4, maxLevel: 50 },
    { stars: 5, maxLevel: 100 },
  ];

  const DEFAULT_FILTERS = Object.freeze({
    search: "",
    league: "Alle Ligen",
    club: "Alle Vereine",
    position: "Alle Positionen",
    category: "Alle Kategorien",
    rarity: "Alle Seltenheiten",
    nation: "Alle Nationen",
    owned: "Alle Karten",
    favorite: "Alle",
    overall: "Alle Overall",
    level: "Alle Level",
    stars: "Alle Sterne",
    sort: "overall",
  });

  function normalizePosition(position) {
    const raw = String(position || "").toUpperCase();
    return POSITION_ALIASES[raw] || raw || "ST";
  }

  function positionDefinition(position) {
    const normalized = normalizePosition(position);
    return POSITION_DEFINITIONS.find((item) => item.id === normalized) || POSITION_DEFINITIONS.find((item) => item.id === "ST");
  }

  function rarityByIndex(index) {
    const normalized = Math.max(0, Math.min(RARITIES.length - 1, Number(index) || 0));
    return RARITIES[normalized] || RARITIES[0];
  }

  function rarityByLabel(label) {
    return RARITIES.find((rarity) => rarity.label === label || rarity.id === label) || null;
  }

  function maxLevelForStars(stars) {
    const normalized = Math.max(1, Math.min(5, Number(stars) || 1));
    return STAR_TIERS.find((tier) => tier.stars === normalized)?.maxLevel || 10;
  }

  function starsForLevel(level) {
    const normalized = Math.max(1, Math.min(100, Number(level) || 1));
    if (normalized > 50) return 5;
    if (normalized > 30) return 4;
    if (normalized > 20) return 3;
    if (normalized > 10) return 2;
    return 1;
  }

  function xpForLevel(level, rarityIndex) {
    const rarityFactor = 1 + Math.max(0, Number(rarityIndex) || 0) * 0.12;
    return Math.round((Number(level) || 1) * 100 * rarityFactor);
  }

  function normalizeCardRecord(card, helpers = {}) {
    const rarity = rarityByIndex(card.cls);
    const position = normalizePosition(card.pos);
    const posDef = positionDefinition(position);
    const level = Math.max(1, Math.min(100, Number(card.level) || 1));
    const stars = Math.max(Number(card.stars) || 0, starsForLevel(level), Number(card.proStars) || 0, 1);
    const maxLevel = maxLevelForStars(stars);
    const overall = helpers.rating ? helpers.rating(card) : Number(card.overall) || Math.round(((Number(card.atk) || 50) + (Number(card.mid) || 50) + (Number(card.def) || 50)) / 3);
    const sourceId = card.sourceId || card.cardId || card.id;
    return {
      ...card,
      cardId: sourceId,
      playerId: card.playerId || sourceId,
      rarityId: rarity.id,
      rarity: rarity.label,
      rarityColor: rarity.color,
      rarityAnimation: rarity.animation,
      rarityEffect: rarity.effect,
      dropChance: rarity.dropChance,
      position,
      pos: card.pos || position,
      category: card.category || posDef.category,
      subPosition: position,
      nation: card.nation || "Deutschland",
      flag: card.flag || "DE",
      overall,
      level,
      stars,
      xp: Math.max(0, Number(card.xp) || 0),
      maxLevel,
      frame: card.frame || rarity.id,
      status: card.status || "active",
      favorite: Boolean(card.favorite),
      owned: Boolean(card.owned),
      ownedCount: Number(card.ownedCount) || 0,
      duplicateCount: Number(card.duplicateCount) || 0,
      latestAt: Number(card.latestAt) || 0,
      xpToNext: level >= maxLevel ? 0 : xpForLevel(level + 1, rarity.legacyIndex),
    };
  }

  function duplicateCounts(ownedCards) {
    return ownedCards.reduce((map, card) => {
      const key = card.sourceId || card.cardId || card.id;
      map[key] = (map[key] || 0) + 1;
      return map;
    }, {});
  }

  function collectionRecords({ catalogCards, ownedCards, helpers = {} }) {
    const counts = duplicateCounts(ownedCards);
    const ownedBySource = new Map();
    ownedCards.forEach((card) => {
      const source = card.sourceId || card.cardId || card.id;
      if (!ownedBySource.has(source)) ownedBySource.set(source, card);
    });
    return catalogCards.map((catalogCard, index) => {
      const source = catalogCard.sourceId || catalogCard.cardId || catalogCard.id;
      const ownedCard = ownedBySource.get(source);
      return normalizeCardRecord(
        {
          ...catalogCard,
          ...(ownedCard || {}),
          cardId: source,
          sourceId: source,
          owned: Boolean(ownedCard),
          ownedCount: counts[source] || 0,
          duplicateCount: Math.max(0, (counts[source] || 0) - 1),
          latestAt: ownedCard?.latestAt || index,
        },
        helpers,
      );
    });
  }

  function filterRecords(records, filters) {
    const safe = { ...DEFAULT_FILTERS, ...(filters || {}) };
    const search = safe.search.trim().toLowerCase();
    return records.filter((card) => {
      const matchesSearch = !search || [card.name, card.club, card.position, card.nation, card.rarity].some((value) => String(value || "").toLowerCase().includes(search));
      const matchesClub = safe.club === "Alle Vereine" || card.club === safe.club;
      const matchesLeague = safe.league === "Alle Ligen" || card.league === safe.league;
      const matchesPosition = safe.position === "Alle Positionen" || card.position === safe.position || card.pos === safe.position;
      const matchesCategory = safe.category === "Alle Kategorien" || card.category === safe.category;
      const matchesRarity = safe.rarity === "Alle Seltenheiten" || card.rarity === safe.rarity;
      const matchesNation = safe.nation === "Alle Nationen" || card.nation === safe.nation;
      const matchesOwned = safe.owned === "Alle Karten" || (safe.owned === "Besitz" ? card.owned : !card.owned);
      const matchesFavorite = safe.favorite === "Alle" || (safe.favorite === "Favoriten" ? card.favorite : !card.favorite);
      const matchesOverall = safe.overall === "Alle Overall" || rangeMatch(card.overall, safe.overall);
      const matchesLevel = safe.level === "Alle Level" || rangeMatch(card.level, safe.level);
      const matchesStars = safe.stars === "Alle Sterne" || String(card.stars) === String(safe.stars).replace(/\D/g, "");
      return matchesSearch && matchesClub && matchesLeague && matchesPosition && matchesCategory && matchesRarity && matchesNation && matchesOwned && matchesFavorite && matchesOverall && matchesLevel && matchesStars;
    });
  }

  function rangeMatch(value, range) {
    const [min, max] = String(range).split("-").map((item) => Number(item));
    if (!Number.isFinite(min)) return true;
    return value >= min && (!Number.isFinite(max) || value <= max);
  }

  function sortRecords(records, sort) {
    const sorted = [...records];
    const key = sort || "overall";
    const compareText = (a, b, field) => String(a[field] || "").localeCompare(String(b[field] || ""));
    sorted.sort((a, b) => {
      if (key === "name") return compareText(a, b, "name");
      if (key === "rarity") return b.cls - a.cls || b.overall - a.overall;
      if (key === "level") return b.level - a.level || b.overall - a.overall;
      if (key === "stars") return b.stars - a.stars || b.level - a.level;
      if (key === "club") return compareText(a, b, "club") || b.overall - a.overall;
      if (key === "nation") return compareText(a, b, "nation") || b.overall - a.overall;
      if (key === "position") return positionDefinition(a.position).sort - positionDefinition(b.position).sort || b.overall - a.overall;
      if (key === "newest") return b.latestAt - a.latestAt;
      return b.overall - a.overall || b.cls - a.cls;
    });
    return sorted;
  }

  function optionValues(records, field, fallback) {
    return [fallback, ...[...new Set(records.map((card) => card[field]).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)))];
  }

  global.LigaClashCardSystem = {
    POSITION_DEFINITIONS,
    RARITIES,
    STAR_TIERS,
    DEFAULT_FILTERS,
    normalizePosition,
    positionDefinition,
    rarityByIndex,
    rarityByLabel,
    maxLevelForStars,
    starsForLevel,
    xpForLevel,
    normalizeCardRecord,
    collectionRecords,
    filterRecords,
    sortRecords,
    optionValues,
  };
})(globalThis);
