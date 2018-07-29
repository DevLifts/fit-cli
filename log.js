const inquirer = require('inquirer');
const colors = require('colors');
const { types } = require('./types');
const onerm = require('./1rm');

const controller = [
  { type: 'list', name: 'type', message: 'What do you want to log?', choices: types }
]

exports.log = () => {
  inquirer
    .prompt(controller)
    .then(function (answers) {
      const { type } = answers;
      console.log(colors.green('Logging ' + type + '...'));

      return type === '1rm' ? onerm() : null
  });
}
