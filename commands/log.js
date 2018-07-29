const inquirer = require('inquirer');
const colors = require('colors');
const { types } = require('../options');
const onerm = require('./1rm');
const meal = require('./meal');
const sleep = require('./sleep');
const workout = require('./workout');

const controller = [
  { type: 'list', name: 'type', message: 'What do you want to log?', choices: types }
]

exports.log = () => {
  inquirer
    .prompt(controller)
    .then(function (answers) {
      const { type } = answers;
      console.log(colors.green('Logging ' + type + '...'));

      switch (type) {
        case '1rm':
          onerm();
          break;
        case 'meal':
          meal();
          break;
        case 'sleep':
          sleep();
          break;
        case 'workout':
          workout();
          break;
        default:
          console.log("error");
      }
  });
}
