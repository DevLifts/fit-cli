const colors = require("colors");
const { exercises } = require("../options");
const { fetchDB } = require("../dbUtils/fetchDB");

exports.list = () => {
  console.log("YOUR LOGS");
  console.log("------------------");

  exercises.forEach(exercise => {
    console.log("%s %s", colors.bold(exercise));
  });
}

exports.all1rm = () => {
  console.log("YOUR MAXES");
  console.log("------------------");

  for (const [key, value] of Object.entries(fetchDB.onerm)) {
    console.log(`${key}: ${value}`);
  }
}