const fs = require("fs");
const path = require("path");
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
    console.log(answers);
    // save to this directory as JSON

    const file = fs.readFileSync(
      path.join(__dirname, "..", "localDB.json"),
      "utf8"
    );
    const fileAsJSON = JSON.parse(file);
    fileAsJSON.onerm[answers.exercise] = answers.weight;
    console.log(fileAsJSON);
    fs.writeFileSync(
      path.join(__dirname, "..", "localDB.json"),
      JSON.stringify(fileAsJSON),
      "utf8"
    );
    console.log(
      colors.green(
        "Logged " + answers.weight + " as new " + answers.exercise + " max."
      )
    );
  });
};

module.addMax = (weight, exercise) => {
  console.log("New max of " + weight + " added to " + exercise);
};

module.getMax = exercise => {
  return data.maxes.exercise ? data.maxes.exercise : null;
};
