const inquirer = require("inquirer");
const colors = require("colors");

const controller = [
  { type: "input", name: "meal", message: "What did you eat?" }
];

module.exports = function() {
  inquirer.prompt(controller).then(function(answers) {
    console.log(colors.green("Logged your meal: " + answers.meal));
  });
};
