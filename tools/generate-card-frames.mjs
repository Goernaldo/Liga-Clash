import fs from "node:fs";
import path from "node:path";

const outputDir = path.join(process.cwd(), "assets", "cards");

const tiers = [
  ["common", "#cfd7d5", "#525a5a", "#0d1011"],
  ["uncommon", "#72db83", "#1f8c39", "#07140a"],
  ["rare", "#63caff", "#137fb8", "#06111a"],
  ["special-rare", "#238cff", "#0d4fd3", "#041024"],
  ["ultra-rare", "#d253ff", "#7c21bd", "#17031f"],
  ["bronze", "#c47a3b", "#6f3b18", "#170b05"],
  ["silver", "#d9e4e8", "#758188", "#0d1114"],
  ["gold", "#ffe15a", "#b58a16", "#171105"],
  ["epic", "#ff8a1e", "#b44105", "#1b0802"],
  ["legendary", "#ffe66b", "#d6a817", "#181202"],
  ["elite", "#ffd86b", "#090b0c", "#020303"],
  ["icon", "#fff3a6", "#d7b64d", "#120e04"],
];

function cardFrame([name, accent, metal, dark]) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1400" viewBox="0 0 1024 1400" fill="none">
  <defs>
    <linearGradient id="plate" x1="120" y1="80" x2="920" y2="1320" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#11181b" stop-opacity=".95"/>
      <stop offset=".42" stop-color="${dark}" stop-opacity=".98"/>
      <stop offset="1" stop-color="#020405" stop-opacity=".98"/>
    </linearGradient>
    <linearGradient id="metal" x1="120" y1="80" x2="910" y2="1280" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".78"/>
      <stop offset=".13" stop-color="${accent}" stop-opacity=".96"/>
      <stop offset=".48" stop-color="${metal}" stop-opacity=".88"/>
      <stop offset=".72" stop-color="#ffffff" stop-opacity=".54"/>
      <stop offset="1" stop-color="${accent}" stop-opacity=".95"/>
    </linearGradient>
    <linearGradient id="glass" x1="230" y1="210" x2="795" y2="1040" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${accent}" stop-opacity=".22"/>
      <stop offset=".5" stop-color="#111111" stop-opacity=".18"/>
      <stop offset="1" stop-color="${accent}" stop-opacity=".1"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="19%" r="72%">
      <stop offset="0" stop-color="${accent}" stop-opacity=".34"/>
      <stop offset=".48" stop-color="${accent}" stop-opacity=".09"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="softGlow" x="-15%" y="-10%" width="130%" height="120%">
      <feGaussianBlur stdDeviation="11" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="cardClip"><path d="M102 66H922L988 138L946 1272L854 1366H170L78 1272L36 138L102 66Z"/></clipPath>
  </defs>
  <g clip-path="url(#cardClip)">
    <path d="M102 66H922L988 138L946 1272L854 1366H170L78 1272L36 138L102 66Z" fill="url(#plate)"/>
    <path d="M72 128L136 92H888L952 128L918 1224L828 1326H196L106 1224L72 128Z" fill="url(#glow)"/>
    <path d="M130 152H894L908 184L872 454C840 412 790 381 725 362C651 341 576 336 512 336C448 336 373 341 299 362C234 381 184 412 152 454L116 184L130 152Z" fill="url(#glass)" stroke="${accent}" stroke-opacity=".22" stroke-width="3"/>
    <path d="M190 916H834L884 979L844 1166H180L140 979L190 916Z" fill="#030607" fill-opacity=".72" stroke="${accent}" stroke-opacity=".44" stroke-width="4"/>
    <path d="M170 1194H854L816 1306H208L170 1194Z" fill="#050708" fill-opacity=".84" stroke="${accent}" stroke-opacity=".34" stroke-width="3"/>
    <path d="M210 1217H814M202 1262H822M262 1217V1306M512 1217V1306M762 1217V1306" stroke="${accent}" stroke-opacity=".18" stroke-width="4"/>
    <path d="M116 128H278L246 284H98L82 158L116 128Z" fill="#050708" fill-opacity=".74" stroke="${accent}" stroke-opacity=".56" stroke-width="4"/>
    <path d="M746 128H908L942 158L926 284H778L746 128Z" fill="#050708" fill-opacity=".74" stroke="${accent}" stroke-opacity=".56" stroke-width="4"/>
    <path d="M132 318H238L218 426H144L132 318Z" fill="#050708" fill-opacity=".66" stroke="${accent}" stroke-opacity=".28" stroke-width="3"/>
    <path d="M786 318H892L880 426H806L786 318Z" fill="#050708" fill-opacity=".66" stroke="${accent}" stroke-opacity=".28" stroke-width="3"/>
    <path d="M168 1032H856" stroke="${accent}" stroke-opacity=".22" stroke-width="5"/>
    <path d="M150 172L248 96H776L874 172" stroke="url(#metal)" stroke-width="10" stroke-linejoin="round" filter="url(#softGlow)"/>
    <path d="M80 152L118 1224L208 1328M944 152L906 1224L816 1328" stroke="url(#metal)" stroke-width="12" stroke-linejoin="round" filter="url(#softGlow)"/>
    <path d="M208 1328H816" stroke="url(#metal)" stroke-width="12" stroke-linecap="round" filter="url(#softGlow)"/>
    <path d="M178 88L106 154L132 212M846 88L918 154L892 212M170 1316L108 1238L134 1180M854 1316L916 1238L890 1180" stroke="${accent}" stroke-opacity=".9" stroke-width="8" stroke-linecap="round"/>
    <path d="M236 510C310 456 414 430 512 430C610 430 714 456 788 510L760 872C685 834 597 816 512 816C427 816 339 834 264 872L236 510Z" fill="#000000" fill-opacity=".08" stroke="${accent}" stroke-opacity=".16" stroke-width="3"/>
    <g opacity=".16">
      <path d="M110 260L900 1080M164 176L948 990M74 470L760 1308" stroke="#ffffff" stroke-width="2"/>
      <path d="M900 230L124 1098M846 154L76 970M952 482L268 1320" stroke="${accent}" stroke-width="2"/>
    </g>
    <g opacity=".5">
      <circle cx="178" cy="210" r="3" fill="${accent}"/><circle cx="846" cy="210" r="3" fill="${accent}"/><circle cx="196" cy="1174" r="3" fill="${accent}"/><circle cx="828" cy="1174" r="3" fill="${accent}"/>
      <circle cx="512" cy="112" r="5" fill="${accent}"/><circle cx="512" cy="1342" r="5" fill="${accent}"/>
    </g>
  </g>
</svg>
`;
}

fs.mkdirSync(outputDir, { recursive: true });

for (const tier of tiers) {
  fs.writeFileSync(path.join(outputDir, `liga-card-${tier[0]}.svg`), cardFrame(tier));
}

console.log(`created ${tiers.length} Liga Clash card frames in ${outputDir}`);
