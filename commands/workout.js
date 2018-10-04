const inquirer = require("inquirer");
const colors = require("colors");

const controller = [
  { type: "input", name: "workout", message: "What was your workout?" }
];

module.exports = function() {
  inquirer.prompt(controller).then(function(answers) {
    console.log(colors.green("Logged your workout: " + answers.workout));
  });
};
