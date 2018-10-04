const inquirer = require("inquirer");
const colors = require("colors");

const controller = [
  { type: "input", name: "sleep", message: "How many hours did you sleep?" }
];

module.exports = function() {
  inquirer.prompt(controller).then(function(answers) {
    console.log(
      colors.green("Great! You slept  " + answers.sleep + " hours last night.")
    );
  });
};
