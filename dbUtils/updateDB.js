const fs = require("fs");
const path = require("path");

function updateDB(fileAsJSON) {
  fs.writeFileSync(
    path.join(__dirname, "..", "localDB.json"),
    JSON.stringify(fileAsJSON),
    "utf8"
  );
}
exports.updateDB = updateDB;
