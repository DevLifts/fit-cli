const { fetchDB  } = require("../dbUtils/fetchDB");
const { updateDB  } = require("../dbUtils/updateDB");
const inquirer = require("inquirer");
const colors = require("colors");
const { exercises  } = require("../options");

const controller = [
  {
      type: "list",
      name: "exercise",
      message: "Choose an exercise",
      choices: exercises
                    
  }
    
];

exports.getOneRM = function() {
    inquirer.prompt(controller).then(function(answers) {
      const fileAsJSON = fetchDB();

      oneRM = fileAsJSON.onerm[answers.exercise];
      
      console.log(
        colors.green(
          "Current one rep max for " + answers.exercise + " is " + oneRM + "."
        )
    );
  });
};
