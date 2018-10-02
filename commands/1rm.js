const { fetchDB } = require("../dbUtils/fetchDB");
const { updateDB } = require("../dbUtils/updateDB");
const inquirer = require("inquirer");
const colors = require("colors");
const { exercises } = require("../options");

const controller = [
  {
    type: "list",
    name: "exercise",
    message: "Choose an exercise",
    choices: exercises
  },
  { type: "input", name: "weight", message: "What's your new max?" }
];

module.exports = function() {
  inquirer.prompt(controller).then(function(answers) {
    const fileAsJSON = fetchDB();

    fileAsJSON.onerm[answers.exercise] = answers.weight;

    updateDB(fileAsJSON);

    console.log(
      colors.green(
        "Logged " + answers.weight + " as new " + answers.exercise + " max."
      )
    );
  });
};
