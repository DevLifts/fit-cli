const inquirer = require("inquirer");
const colors = require("colors");

const { fetchDB } = require("../dbUtils/fetchDB");
const { updateDB } = require("../dbUtils/updateDB");
const { getToday } = require("../utils/getToday");

const controller = [
  { type: "input", name: "sleep", message: "How many hours did you sleep?" }
];

module.exports = function() {
  const fileAsJSON = fetchDB();
  const today = getToday();

  if (fileAsJSON.sleep[today]) {
    controller.push({
      type: "confirm",
      name: "really",
      message: `You already logged ${
        fileAsJSON.sleep[today]
      } hours as last nights' sleep. Want to overwrite?`
    });
  }

  inquirer.prompt(controller).then(function(answers) {
    if (answers.really === false) {
      return console.log(colors.green("Nothing was changed."));
    }
    fileAsJSON.sleep[today] = answers.sleep;
    updateDB(fileAsJSON);

    console.log(
      colors.green("Great! You slept  " + answers.sleep + " hours last night.")
    );
  });
};
