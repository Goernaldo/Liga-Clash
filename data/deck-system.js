(function initLigaClashDeckSystem(global) {
  const CATEGORY_LABELS = {
    goalkeeper: "Torwart",
    defense: "Verteidigung",
    midfield: "Mittelfeld",
    attack: "Angriff",
  };

  const FORMATIONS = [
    formation("1-2-1-2", "1-2-1-2", ["goalkeeper", "defense", "defense", "midfield", "attack", "attack"], 1),
    formation("1-1-2-2", "1-1-2-2", ["goalkeeper", "defense", "midfield", "midfield", "attack", "attack"], 2),
    formation("1-2-2-1", "1-2-2-1", ["goalkeeper", "defense", "defense", "midfield", "midfield", "attack"], 3),
  ];

  const FORMATION_BY_ID = Object.fromEntries(FORMATIONS.map((item) => [item.id, item]));
  const LEGACY_FORMATION_MAP = {
    "1-2-1-1": "1-2-2-1",
    "1-1-2-1": "1-2-1-2",
    "1-1-1-2": "1-1-2-2",
    "2-2-1": "1-2-2-1",
    "2-1-2": "1-2-1-2",
    "1-2-2": "1-1-2-2",
    "3-1-1": "1-2-2-1",
  };

  function formation(id, name, categories, order) {
    const counts = categories.reduce((map, category) => {
      map[category] = (map[category] || 0) + 1;
      return map;
    }, {});
    return {
      id,
      name,
      active: true,
      order,
      keeper: counts.goalkeeper || 0,
      defense: counts.defense || 0,
      mid: counts.midfield || 0,
      attack: counts.attack || 0,
      slots: categories.map((category, index) => ({
        id: `${category}-${index + 1}`,
        category,
        label: `${CATEGORY_LABELS[category]} ${counts[category] > 1 ? indexWithin(categories, category, index) : ""}`.trim(),
        sort: index + 1,
      })),
    };
  }

  function indexWithin(categories, category, targetIndex) {
    return categories.slice(0, targetIndex + 1).filter((item) => item === category).length;
  }

  function normalizeFormationId(id) {
    const mapped = LEGACY_FORMATION_MAP[id] || id;
    return FORMATION_BY_ID[mapped]?.active ? mapped : FORMATIONS[0].id;
  }

  function cardCategory(card, helpers = {}) {
    if (!card) return "";
    const german = card.category || helpers.cardCategory?.(card) || "";
    if (german === "Torwart") return "goalkeeper";
    if (german === "Verteidigung") return "defense";
    if (german === "Mittelfeld") return "midfield";
    if (german === "Angriff") return "attack";
    const pos = helpers.normalizePosition ? helpers.normalizePosition(card.pos || card.position) : String(card.pos || card.position || "").toUpperCase();
    if (pos === "TW" || pos === "GK") return "goalkeeper";
    if (["IV", "CB", "LV", "RV", "LWB", "RWB"].includes(pos)) return "defense";
    if (["ZDM", "DM", "ZM", "ZOM", "OM", "CAM", "LM", "RM"].includes(pos)) return "midfield";
    return "attack";
  }

  function createEmptyDeck(name = "Hauptdeck", formationId = FORMATIONS[0].id) {
    const formation = FORMATION_BY_ID[normalizeFormationId(formationId)];
    const now = new Date().toISOString();
    return {
      id: "main-deck",
      name,
      formationId: formation.id,
      activeSlots: Object.fromEntries(formation.slots.map((slot) => [slot.id, ""])),
      bench: ["", "", ""],
      strength: 0,
      validation: { isValid: false, errors: ["Deck ist leer."], warnings: [] },
      createdAt: now,
      updatedAt: now,
      isActive: true,
    };
  }

  function normalizeDeck(deck, ownedCards = [], helpers = {}) {
    const fresh = createEmptyDeck(deck?.name || "Hauptdeck", deck?.formationId || deck?.formation || FORMATIONS[0].id);
    const formation = FORMATION_BY_ID[fresh.formationId];
    const activeSlots = { ...fresh.activeSlots };
    const savedSlots = deck?.activeSlots && typeof deck.activeSlots === "object" ? deck.activeSlots : {};
    formation.slots.forEach((slot, index) => {
      activeSlots[slot.id] = sanitizeCardId(savedSlots[slot.id] || deck?.active?.[index] || "");
    });
    const bench = Array.from({ length: 3 }, (_, index) => sanitizeCardId(deck?.bench?.[index] || ""));
    const normalized = {
      ...fresh,
      ...deck,
      id: deck?.id || fresh.id,
      name: deck?.name || fresh.name,
      formationId: formation.id,
      activeSlots,
      bench,
      createdAt: deck?.createdAt || fresh.createdAt,
      updatedAt: deck?.updatedAt || fresh.updatedAt,
      isActive: deck?.isActive !== false,
    };
    const validation = validateDeck(normalized, ownedCards, helpers);
    return { ...normalized, strength: validation.strength.total, validation };
  }

  function sanitizeCardId(value) {
    return typeof value === "string" ? value : "";
  }

  function validateDeck(deck, ownedCards = [], helpers = {}) {
    const errors = [];
    const warnings = [];
    const formationId = normalizeFormationId(deck?.formationId || deck?.formation);
    const formation = FORMATION_BY_ID[formationId];
    if (!formation || !formation.active) errors.push("Formation ist ungueltig oder deaktiviert.");
    const cardMap = new Map(ownedCards.filter(Boolean).map((card) => [card.id, card]));
    const activeEntries = formation.slots.map((slot) => ({ slot, cardId: sanitizeCardId(deck?.activeSlots?.[slot.id] || "") }));
    const benchEntries = Array.from({ length: 3 }, (_, index) => ({ index, cardId: sanitizeCardId(deck?.bench?.[index] || "") }));
    const missingSlots = activeEntries.filter((entry) => !entry.cardId).map((entry) => entry.slot.id);
    const missingBench = benchEntries.filter((entry) => !entry.cardId).map((entry) => `bench-${entry.index + 1}`);
    if (missingSlots.length) errors.push("Alle Formationsslots muessen belegt sein.");
    if (missingBench.length) errors.push("Die Ersatzbank braucht genau 3 Karten.");
    const allIds = [...activeEntries.map((entry) => entry.cardId), ...benchEntries.map((entry) => entry.cardId)].filter(Boolean);
    const duplicates = allIds.filter((id, index) => allIds.indexOf(id) !== index);
    if (duplicates.length) errors.push("Eine Karteninstanz darf nur einmal im Deck vorkommen.");
    const invalidCards = allIds.filter((id) => !cardMap.has(id));
    if (invalidCards.length) errors.push("Gespeicherte Karten fehlen in der Sammlung.");
    const wrongPositions = [];
    activeEntries.forEach(({ slot, cardId }) => {
      const card = cardMap.get(cardId);
      if (card && cardCategory(card, helpers) !== slot.category) wrongPositions.push({ slotId: slot.id, cardId, expected: slot.category, actual: cardCategory(card, helpers) });
    });
    if (wrongPositions.length) errors.push("Mindestens eine Karte steht auf einer falschen Hauptposition.");
    const activeCards = activeEntries.map((entry) => cardMap.get(entry.cardId)).filter(Boolean);
    const benchCards = benchEntries.map((entry) => cardMap.get(entry.cardId)).filter(Boolean);
    const activeCounts = activeCards.reduce((map, card) => {
      const category = cardCategory(card, helpers);
      map[category] = (map[category] || 0) + 1;
      return map;
    }, {});
    if ((activeCounts.goalkeeper || 0) !== 1) errors.push("Aktiv muss genau 1 Torwart vorhanden sein.");
    if (activeCards.length - (activeCounts.goalkeeper || 0) !== 5) errors.push("Aktiv muessen genau 5 Feldspieler vorhanden sein.");
    if (benchCards.length !== 3) errors.push("Es muessen genau 3 Ersatzkarten vorhanden sein.");
    if (benchCards.length === 3 && !benchCards.some((card) => cardCategory(card, helpers) !== "goalkeeper")) warnings.push("Mindestens ein Ersatzspieler sollte kein Torwart sein.");
    const strength = calculateDeckStrength(activeCards, benchCards, helpers, wrongPositions);
    return {
      isValid: errors.length === 0,
      ok: errors.length === 0,
      errors: [...new Set(errors)],
      warnings,
      missingSlots,
      duplicateCards: [...new Set(duplicates)],
      wrongPositions,
      invalidCards,
      strength,
      formationId,
    };
  }

  function calculateDeckStrength(activeCards, benchCards = [], helpers = {}, wrongPositions = []) {
    const scoreCard = (card) => {
      const overall = helpers.rating ? helpers.rating(card) : Number(card.overall) || 0;
      const level = Number(card.level) || 1;
      const stars = Math.max(1, Number(card.stars || card.proStars) || 1);
      const rarity = Number(card.cls) || 0;
      return Math.round(overall + level * 0.35 + stars * 4 + rarity * 1.5);
    };
    const activeScores = activeCards.map((card) => ({ card, score: scoreCard(card) - (wrongPositions.some((item) => item.cardId === card.id) ? 12 : 0) }));
    const benchScores = benchCards.map((card) => ({ card, score: Math.round(scoreCard(card) * 0.35) }));
    const activeTotal = activeScores.reduce((sum, item) => sum + item.score, 0);
    const benchTotal = benchScores.reduce((sum, item) => sum + item.score, 0);
    const sorted = [...activeScores].sort((a, b) => b.score - a.score);
    return {
      total: activeTotal + benchTotal,
      activeTotal,
      benchTotal,
      average: activeScores.length ? Math.round(activeTotal / activeScores.length) : 0,
      strongestCardId: sorted[0]?.card.id || "",
      weakestCardId: sorted.at(-1)?.card.id || "",
    };
  }

  function autoCompleteDeck(ownedCards = [], formationId = FORMATIONS[0].id, helpers = {}) {
    const deck = createEmptyDeck("Hauptdeck", formationId);
    const formation = FORMATION_BY_ID[normalizeFormationId(formationId)];
    const used = new Set();
    formation.slots.forEach((slot) => {
      const card = bestAvailable(ownedCards, used, (item) => cardCategory(item, helpers) === slot.category, helpers);
      if (card) {
        deck.activeSlots[slot.id] = card.id;
        used.add(card.id);
      }
    });
    for (let index = 0; index < 3; index += 1) {
      const card = bestAvailable(ownedCards, used, () => true, helpers);
      if (card) {
        deck.bench[index] = card.id;
        used.add(card.id);
      }
    }
    return normalizeDeck(deck, ownedCards, helpers);
  }

  function bestAvailable(cards, used, predicate, helpers) {
    return cards
      .filter((card) => card?.id && !used.has(card.id) && predicate(card))
      .sort((a, b) => compareCards(b, a, helpers))[0] || null;
  }

  function compareCards(a, b, helpers = {}) {
    const ratingA = helpers.rating ? helpers.rating(a) : Number(a.overall) || 0;
    const ratingB = helpers.rating ? helpers.rating(b) : Number(b.overall) || 0;
    return ratingA - ratingB
      || (Number(a.level) || 1) - (Number(b.level) || 1)
      || (Number(a.stars || a.proStars) || 1) - (Number(b.stars || b.proStars) || 1)
      || (Number(a.cls) || 0) - (Number(b.cls) || 0);
  }

  global.LigaClashDeckSystem = {
    CATEGORY_LABELS,
    FORMATIONS,
    FORMATION_BY_ID,
    LEGACY_FORMATION_MAP,
    normalizeFormationId,
    cardCategory,
    createEmptyDeck,
    normalizeDeck,
    validateDeck,
    calculateDeckStrength,
    autoCompleteDeck,
    compareCards,
  };
})(globalThis);
