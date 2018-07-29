const inquirer = require('inquirer');
const colors = require('colors');
const { exercises } = require('../exercises');

const controller = [
  { type: 'list', name: 'exercise', message: 'Choose an exercise', choices: exercises },
  { type: 'input', name: 'weight', message: 'What\'s your new max?' },
];

module.exports = function () {
  inquirer
    .prompt(controller)
    .then(function (answers) {
        console.log(colors.green('Logged ' + answers.weight + ' as new ' + answers.exercise + ' max.'));
    });
};

module.addMax = (weight, exercise) => {
  console.log('New max of ' + weight + ' added to ' + exercise);
}

module.getMax = (exercise) => {
  return data.maxes.exercise ? data.maxes.exercise : null
}