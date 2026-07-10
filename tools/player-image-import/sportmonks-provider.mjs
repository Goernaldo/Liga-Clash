const SPORTMONKS_BASE_URL = "https://api.sportmonks.com/v3/football";
const TOKEN_ENV = "SPORTMONKS_API_TOKEN";

function requireToken() {
  const token = process.env[TOKEN_ENV];
  if (!token) {
    throw new Error(`${TOKEN_ENV} fehlt. Der Import darf nur mit Environment Variable gestartet werden.`);
  }
  return token;
}

function sanitizeError(error) {
  return String(error?.message || error).replace(/[A-Za-z0-9_=-]{24,}/g, "[redacted]");
}

async function requestSportmonks(path, params = {}) {
  const token = requireToken();
  const url = new URL(`${SPORTMONKS_BASE_URL}${path}`);
  url.searchParams.set("api_token", token);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Liga Clash player-image-import/phase-1",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Sportmonks Anfrage fehlgeschlagen (${response.status}). ${sanitizeError(await response.text())}`);
  }
  return response.json();
}

function normalizePlayer(item) {
  return {
    provider: "sportmonks",
    id: item.id,
    name: item.name,
    display_name: item.display_name,
    common_name: item.common_name,
    firstname: item.firstname,
    lastname: item.lastname,
    date_of_birth: item.date_of_birth,
    nationality: item.nationality?.name || item.country?.name || "",
    position: item.position?.name || item.detailedposition?.name || "",
    image_path: item.image_path || "",
    rawProviderFields: {
      country_id: item.country_id,
      nationality_id: item.nationality_id,
      position_id: item.position_id,
      gender: item.gender,
    },
  };
}

export class SportmonksPlayerImageProvider {
  providerId = "sportmonks";

  async searchPlayer(player) {
    const json = await requestSportmonks(`/players/search/${encodeURIComponent(player.name)}`, {
      include: "nationality;position",
      per_page: 50,
    });
    return (json.data || []).map(normalizePlayer);
  }

  async getLicenseMetadata(externalId) {
    return {
      provider: this.providerId,
      externalId,
      license: "provider_contract_required",
      attributionRequired: true,
      cacheAllowed: false,
      remoteDisplayAllowed: false,
      commercialUseAllowed: false,
      licenseReviewStatus: "needs_legal_review",
    };
  }
}

export const SPORTMONKS_TOKEN_ENV = TOKEN_ENV;
