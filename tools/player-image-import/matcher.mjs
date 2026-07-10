const MATCH_THRESHOLDS = {
  auto: 95,
  review: 75,
};

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

function namesMatch(localName, providerName) {
  const local = normalizeText(localName);
  const provider = normalizeText(providerName);
  if (!local || !provider) return 0;
  if (local === provider) return 30;
  const localParts = new Set(local.split(" "));
  const providerParts = new Set(provider.split(" "));
  const shared = [...localParts].filter((part) => providerParts.has(part)).length;
  return shared >= Math.min(localParts.size, providerParts.size) ? 22 : shared ? 12 : 0;
}

function fieldMatch(localValue, providerValue, weight) {
  if (!localValue || !providerValue) return 0;
  return normalizeText(localValue) === normalizeText(providerValue) ? weight : 0;
}

export function scoreCandidate(player, candidate) {
  const names = [
    candidate.display_name,
    candidate.common_name,
    candidate.name,
    [candidate.firstname, candidate.lastname].filter(Boolean).join(" "),
  ].filter(Boolean);
  const criteria = [
    { available: Boolean(player.name && names.length), weight: 30, score: Math.max(...names.map((name) => namesMatch(player.name, name)), 0) },
    { available: Boolean(player.dateOfBirth && candidate.date_of_birth), weight: 25, score: fieldMatch(player.dateOfBirth, candidate.date_of_birth, 25) },
    { available: Boolean(player.nationality && candidate.nationality), weight: 15, score: fieldMatch(player.nationality, candidate.nationality, 15) },
    { available: Boolean(player.club && candidate.club), weight: 15, score: fieldMatch(player.club, candidate.club, 15) },
    { available: Boolean(player.pos && candidate.position), weight: 10, score: fieldMatch(player.pos, candidate.position, 10) },
  ].filter((item) => item.available);

  const possible = criteria.reduce((sum, item) => sum + item.weight, 0);
  const score = criteria.reduce((sum, item) => sum + item.score, 0);

  return possible ? Math.min(100, Math.round((score / possible) * 100)) : 0;
}

export function classifyMatch(confidence, candidate) {
  if (!candidate) return "missing";
  if (!candidate.image_path) return confidence >= MATCH_THRESHOLDS.review ? "missing_image" : "rejected";
  if (confidence >= MATCH_THRESHOLDS.auto) return "matched";
  if (confidence >= MATCH_THRESHOLDS.review) return "needs_review";
  return "rejected";
}

export function bestCandidateFor(player, candidates) {
  const ranked = candidates
    .map((candidate) => ({ candidate, confidence: scoreCandidate(player, candidate) }))
    .sort((a, b) => b.confidence - a.confidence);
  const best = ranked[0] || null;
  if (!best) return { candidate: null, confidence: 0, status: "missing" };
  return {
    ...best,
    status: classifyMatch(best.confidence, best.candidate),
  };
}

export function importSummary(results) {
  const total = results.length;
  const matched = results.filter((result) => result.status === "matched").length;
  const missingImages = results.filter((result) => result.status === "missing" || result.status === "missing_image").length;
  const uncertain = results.filter((result) => result.status === "needs_review").length;
  return {
    total,
    matched,
    matchRate: total ? Math.round((matched / total) * 10000) / 100 : 0,
    missingImages,
    uncertain,
  };
}
