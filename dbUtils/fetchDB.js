const fs = require("fs");
const path = require("path");

function fetchDB() {
  const file = fs.readFileSync(
    path.join(__dirname, "..", "localDB.json"),
    "utf8"
  );
  const fileAsJSON = JSON.parse(file);
  return fileAsJSON;
}
exports.fetchDB = fetchDB;
