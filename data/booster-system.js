(function initLigaClashBoosterSystem(global) {
  "use strict";

  const REQUIRED_BOOSTERS = [
    {
      id: "pack-bronze",
      name: "Bronze Pack",
      description: "Guenstiges Starter-Pack mit fuenf Karten und garantierter Bronze-Chance.",
      image: "assets/packs/bronze.png",
      price: 100,
      cost: 100,
      currency: "coins",
      cardCount: 5,
      minClass: 0,
      maxClass: 5,
      allowedClasses: [0, 1, 2, 3, 4, 5],
      guaranteedClass: 5,
      dropRates: { 0: 44, 1: 28, 2: 15, 3: 8, 4: 3, 5: 2 },
      tier: "bronze",
      pool: "mixed",
      animation: "bronze",
      order: 10,
      active: true,
    },
    {
      id: "pack-silver",
      name: "Silber Pack",
      description: "Fuenf Karten mit Silber-Garantie und hoeheren Chancen auf starke Klassen.",
      image: "assets/packs/silver.png",
      price: 250,
      cost: 250,
      currency: "coins",
      cardCount: 5,
      minClass: 1,
      maxClass: 6,
      allowedClasses: [1, 2, 3, 4, 5, 6],
      guaranteedClass: 6,
      dropRates: { 1: 38, 2: 25, 3: 16, 4: 10, 5: 7, 6: 4 },
      tier: "silver",
      pool: "mixed",
      animation: "silver",
      order: 20,
      active: true,
    },
    {
      id: "pack-gold",
      name: "Gold Pack",
      description: "Fuenf Karten mit Gold-Garantie und Chance auf Episch oder Legendaer.",
      image: "assets/packs/gold.png",
      price: 600,
      cost: 600,
      currency: "coins",
      cardCount: 5,
      minClass: 3,
      maxClass: 8,
      allowedClasses: [3, 4, 5, 6, 7, 8],
      guaranteedClass: 7,
      dropRates: { 3: 34, 4: 24, 5: 18, 6: 13, 7: 8, 8: 3 },
      tier: "gold",
      pool: "mixed",
      animation: "gold",
      order: 30,
      active: true,
    },
    {
      id: "pack-elite",
      name: "Elite Pack",
      description: "Premium-Pack mit fuenf High-End-Karten und garantierter Elite-Karte.",
      image: "assets/packs/elite.png",
      price: 40,
      cost: 40,
      currency: "gems",
      cardCount: 5,
      minClass: 7,
      maxClass: 10,
      allowedClasses: [7, 8, 9, 10],
      guaranteedClass: 10,
      dropRates: { 7: 58, 8: 28, 9: 11, 10: 3 },
      tier: "elite",
      pool: "mixed",
      animation: "elite",
      order: 40,
      active: true,
    },
    {
      id: "pack-icon",
      name: "Icon Pack",
      description: "Seltenes Spezial-Pack mit einer garantierten Icon-Karte.",
      image: "assets/packs/elite.png",
      price: 120,
      cost: 120,
      currency: "gems",
      cardCount: 1,
      minClass: 11,
      maxClass: 11,
      allowedClasses: [11],
      guaranteedClass: 11,
      dropRates: { 11: 100 },
      tier: "icon",
      pool: "icon",
      animation: "icon",
      order: 50,
      active: true,
      purchaseLimit: 1,
    },
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function className(index, labels) {
    return labels?.[index] || `Klasse ${index}`;
  }

  function normalizeInteger(value, fallback, min = 0, max = Number.MAX_SAFE_INTEGER) {
    const number = Math.round(Number(value));
    if (!Number.isFinite(number)) return fallback;
    return Math.min(max, Math.max(min, number));
  }

  function normalizeCurrency(value) {
    return value === "gems" ? "gems" : "coins";
  }

  function normalizeAllowedClasses(pack, classCount = 12) {
    const min = normalizeInteger(pack.minClass, 0, 0, classCount - 1);
    const max = normalizeInteger(pack.maxClass, min, min, classCount - 1);
    const source = Array.isArray(pack.allowedClasses) && pack.allowedClasses.length
      ? pack.allowedClasses
      : Array.from({ length: max - min + 1 }, (_, offset) => min + offset);
    return [...new Set(source.map((item) => normalizeInteger(item, min, 0, classCount - 1)).filter((item) => item >= min && item <= max))];
  }

  function normalizeDropRates(rates, allowedClasses) {
    const result = {};
    allowedClasses.forEach((classIndex) => {
      const value = rates && rates[classIndex] != null ? Number(rates[classIndex]) : 0;
      result[classIndex] = Number.isFinite(value) ? Math.max(0, value) : 0;
    });
    return result;
  }

  function normalizeBoosterConfig(pack, options = {}) {
    const classCount = options.classCount || 12;
    const required = REQUIRED_BOOSTERS.find((item) => item.id === pack?.id) || {};
    const merged = { ...required, ...(pack || {}) };
    const minClass = normalizeInteger(merged.minClass, required.minClass ?? 0, 0, classCount - 1);
    const maxClass = normalizeInteger(merged.maxClass, required.maxClass ?? minClass, minClass, classCount - 1);
    const allowedClasses = normalizeAllowedClasses({ ...merged, minClass, maxClass }, classCount);
    const guaranteedClass = merged.guaranteedClass == null || merged.guaranteedClass === ""
      ? null
      : normalizeInteger(merged.guaranteedClass, minClass, minClass, maxClass);
    return {
      ...merged,
      id: merged.id || `pack-${Date.now()}`,
      name: merged.name || "Booster Pack",
      description: merged.description || "Boosterbeschreibung fehlt.",
      image: merged.image || "",
      price: normalizeInteger(merged.price ?? merged.cost, required.price ?? 0, 0),
      cost: normalizeInteger(merged.cost ?? merged.price, required.cost ?? 0, 0),
      currency: normalizeCurrency(merged.currency),
      cardCount: normalizeInteger(merged.cardCount, required.cardCount ?? 1, 1, 20),
      minClass,
      maxClass,
      allowedClasses,
      guaranteedClass,
      dropRates: normalizeDropRates(merged.dropRates || required.dropRates, allowedClasses),
      startDate: merged.startDate || "",
      endDate: merged.endDate || "",
      purchaseLimit: normalizeInteger(merged.purchaseLimit, required.purchaseLimit ?? 0, 0),
      animation: merged.animation || merged.tier || "standard",
      order: normalizeInteger(merged.order, required.order ?? 999, 0),
      active: merged.active !== false,
      pool: merged.pool || "mixed",
      positions: Array.isArray(merged.positions) ? merged.positions : [],
      tier: merged.tier || merged.animation || "bronze",
    };
  }

  function defaultBoosterConfigs() {
    return clone(REQUIRED_BOOSTERS);
  }

  function validateDropRates(booster, labels) {
    const pack = normalizeBoosterConfig(booster, { classCount: labels?.length || 12 });
    const errors = [];
    Object.entries(booster?.dropRates || {}).forEach(([key, value]) => {
      const classIndex = Number(key);
      if (!pack.allowedClasses.includes(classIndex)) errors.push(`${className(classIndex, labels)} ist nicht im Pool erlaubt.`);
      if (!Number.isFinite(Number(value)) || Number(value) < 0) errors.push(`${className(classIndex, labels)} hat eine ungueltige Dropchance.`);
    });
    const entries = Object.entries(pack.dropRates).map(([key, value]) => [Number(key), Number(value)]);
    const total = entries.reduce((sum, [, value]) => sum + value, 0);
    if (!entries.length) errors.push("Keine Dropchancen hinterlegt.");
    entries.forEach(([classIndex, value]) => {
      if (!pack.allowedClasses.includes(classIndex)) errors.push(`${className(classIndex, labels)} ist nicht im Pool erlaubt.`);
      if (!Number.isFinite(value) || value < 0) errors.push(`${className(classIndex, labels)} hat eine ungueltige Dropchance.`);
    });
    if (Math.abs(total - 100) > 0.001) errors.push(`Dropchancen ergeben ${total} statt 100 Prozent.`);
    if (entries.every(([, value]) => value <= 0)) errors.push("Alle Dropchancen sind 0.");
    if (pack.guaranteedClass != null && !pack.allowedClasses.includes(pack.guaranteedClass)) {
      errors.push("Garantierte Klasse ist nicht im Booster-Pool enthalten.");
    }
    return { ok: errors.length === 0, errors, total };
  }

  function purchaseCountForBooster(transactions, boosterId) {
    return (Array.isArray(transactions) ? transactions : []).filter((item) => item.boosterId === boosterId && item.type === "booster-purchase" && item.status === "success").length;
  }

  function validateAvailability(booster, context = {}) {
    const pack = normalizeBoosterConfig(booster, { classCount: context.classCount || 12 });
    const now = context.now ? new Date(context.now) : new Date();
    const errors = [];
    if (!pack.active) errors.push("Booster ist deaktiviert.");
    if (pack.startDate && now < new Date(pack.startDate)) errors.push("Booster ist noch nicht verfuegbar.");
    if (pack.endDate && now > new Date(pack.endDate)) errors.push("Booster ist abgelaufen.");
    if (pack.purchaseLimit > 0 && purchaseCountForBooster(context.transactions, pack.id) >= pack.purchaseLimit) {
      errors.push("Kauflimit erreicht.");
    }
    return { ok: errors.length === 0, errors };
  }

  function rollClass(booster, rng = Math.random) {
    const pack = normalizeBoosterConfig(booster);
    const entries = Object.entries(pack.dropRates).map(([key, value]) => [Number(key), Number(value)]).filter(([, value]) => value > 0);
    const total = entries.reduce((sum, [, value]) => sum + value, 0);
    if (!entries.length || total <= 0) throw new Error("Booster hat keinen gueltigen Drop-Pool.");
    let roll = rng() * total;
    for (const [classIndex, value] of entries) {
      roll -= value;
      if (roll <= 0) return classIndex;
    }
    return entries[entries.length - 1][0];
  }

  function createInventoryItem(boosterId, source = "purchase", transactionId = "") {
    return {
      id: `inventory-${boosterId}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      boosterId,
      source,
      transactionId,
      status: "unopened",
      createdAt: new Date().toISOString(),
      openedAt: "",
      openingId: "",
    };
  }

  function normalizeInventory(items) {
    return (Array.isArray(items) ? items : []).map((item) => ({
      id: item.id || `inventory-${item.boosterId || "pack"}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      boosterId: item.boosterId || item.packId || "pack-bronze",
      source: item.source || "purchase",
      transactionId: item.transactionId || "",
      status: item.status === "opened" ? "opened" : "unopened",
      createdAt: item.createdAt || new Date().toISOString(),
      openedAt: item.openedAt || "",
      openingId: item.openingId || "",
    }));
  }

  function normalizeTransactions(items) {
    return (Array.isArray(items) ? items : []).map((item) => ({
      id: item.id || `txn-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      type: item.type || "booster-purchase",
      boosterId: item.boosterId || item.packId || "",
      quantity: normalizeInteger(item.quantity, 1, 1),
      price: normalizeInteger(item.price, 0, 0),
      currency: normalizeCurrency(item.currency),
      balanceBefore: normalizeInteger(item.balanceBefore, 0, 0),
      balanceAfter: normalizeInteger(item.balanceAfter, 0, 0),
      date: item.date || new Date().toISOString(),
      status: item.status || "success",
      error: item.error || "",
      openingId: item.openingId || "",
    }));
  }

  function normalizeOpenings(items) {
    return (Array.isArray(items) ? items : []).map((item) => ({
      id: item.id || item.openingId || `opening-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      boosterId: item.boosterId || "",
      inventoryItemId: item.inventoryItemId || "",
      createdAt: item.createdAt || new Date().toISOString(),
      cardIds: Array.isArray(item.cardIds) ? item.cardIds : [],
      sourceCardIds: Array.isArray(item.sourceCardIds) ? item.sourceCardIds : [],
      guaranteedClass: item.guaranteedClass ?? null,
      status: item.status || "opened",
    }));
  }

  function makeOpeningPlan(booster, rng = Math.random) {
    const pack = normalizeBoosterConfig(booster);
    const validation = validateDropRates(pack);
    if (!validation.ok) throw new Error(validation.errors.join(" "));
    const classes = [];
    if (pack.guaranteedClass != null) classes.push(pack.guaranteedClass);
    while (classes.length < pack.cardCount) classes.push(rollClass(pack, rng));
    return classes.slice(0, pack.cardCount);
  }

  global.LigaClashBoosterSystem = {
    defaultBoosterConfigs,
    normalizeBoosterConfig,
    validateDropRates,
    validateAvailability,
    rollClass,
    makeOpeningPlan,
    createInventoryItem,
    normalizeInventory,
    normalizeTransactions,
    normalizeOpenings,
    purchaseCountForBooster,
  };
})(globalThis);
