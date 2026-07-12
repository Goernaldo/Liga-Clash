import assert from "node:assert/strict";

const roles = ["Owner", "Admin", "Moderator", "Tester", "User"];
const matrix = {
  Owner: ["admin.open", "admin.manage", "users.manage", "roles.manage", "wallet.grant", "economy.test", "data.reset", "import.write", "export.read", "backup.manage", "logs.read", "project.manage", "content.manage", "game-data.manage", "boosters.manage", "droprates.manage", "events.manage", "missions.manage", "shop.manage"],
  Admin: ["admin.open", "users.view", "wallet.grant", "economy.test", "export.read", "backup.create", "logs.read", "project.manage", "content.manage", "game-data.manage", "boosters.manage", "droprates.manage", "events.manage", "missions.manage", "shop.manage"],
  Moderator: ["admin.open", "users.view", "logs.read", "content.manage", "events.manage", "missions.view"],
  Tester: ["admin.open", "logs.read", "export.read", "preview.use"],
  User: [],
};

function can(role, permission) {
  return matrix[role].includes(permission) || matrix[role].includes("admin.manage");
}

assert.deepEqual(roles, ["Owner", "Admin", "Moderator", "Tester", "User"]);
assert.equal(can("Owner", "data.reset"), true);
assert.equal(can("Owner", "roles.manage"), true);
assert.equal(can("Admin", "boosters.manage"), true);
assert.equal(can("Admin", "roles.manage"), false);
assert.equal(can("Moderator", "events.manage"), true);
assert.equal(can("Moderator", "wallet.grant"), false);
assert.equal(can("Tester", "admin.open"), true);
assert.equal(can("Tester", "game-data.manage"), false);
assert.equal(can("User", "admin.open"), false);

function canChangeRole(users, userId, nextRole, activeUserId = "owner") {
  if (!roles.includes(nextRole)) return false;
  const user = users.find((item) => item.id === userId);
  const activeOwners = users.filter((item) => item.role === "Owner" && !item.locked);
  if (user.role === "Owner" && nextRole !== "Owner" && activeOwners.length <= 1) return false;
  if (user.id === activeUserId && user.role === "Owner" && nextRole !== "Owner") return "confirm";
  return true;
}

assert.equal(canChangeRole([{ id: "owner", role: "Owner", locked: false }], "owner", "Admin"), false);
assert.equal(canChangeRole([{ id: "owner", role: "Owner", locked: false }, { id: "owner2", role: "Owner", locked: false }], "owner", "Admin"), "confirm");
assert.equal(canChangeRole([{ id: "mod", role: "Moderator", locked: false }], "mod", "Tester"), true);
assert.equal(canChangeRole([{ id: "mod", role: "Moderator", locked: false }], "mod", "Invalid"), false);

function dropRateValid(values) {
  const sum = values.reduce((total, value) => total + value, 0);
  return Math.abs(sum - 100) <= 0.01 && values.every((value) => value >= 0);
}

assert.equal(dropRateValid([50, 50]), true);
assert.equal(dropRateValid([50, 49]), false);
assert.equal(dropRateValid([50, 51]), false);
assert.equal(dropRateValid([101, -1]), false);

function leagueValid(league) {
  return Boolean(league.id) && league.size > 0 && league.promote >= 0 && league.relegate >= 0 && league.promote + league.relegate <= league.size;
}

assert.equal(leagueValid({ id: "l1", size: 18, promote: 2, relegate: 3 }), true);
assert.equal(leagueValid({ id: "", size: 18, promote: 2, relegate: 3 }), false);
assert.equal(leagueValid({ id: "bad", size: 4, promote: 3, relegate: 3 }), false);

function exportSafe(user) {
  return JSON.stringify(user, (key, value) => key === "pin" ? "***" : value);
}

assert.equal(exportSafe({ name: "Owner", pin: "0000" }).includes("0000"), false);
assert.equal(exportSafe({ name: "Owner", pin: "0000" }).includes("***"), true);

console.log("Phase 9 admin permission simulation checks passed.");
