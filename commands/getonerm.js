const { fetchDB  } = require("../dbUtils/fetchDB");
const { updateDB  } = require("../dbUtils/updateDB");
const inquirer = require("inquirer");
const colors = require("colors");
const { exercises  } = require("../options");
const program = require("commander");

const controller = [
  {
      type: "list",
      name: "exercise",
      message: "Choose an exercise",
      choices: exercises
                    
  }
    
];

getAllOneRM = function() {
          const fileAsJSON = fetchDB();

          benchOneRM = fileAsJSON.onerm["bench press"];
          squatOneRM = fileAsJSON.onerm["squat"];
          deadliftOneRM = fileAsJSON.onerm["deadlift"];
          ohpOneRM = fileAsJSON.onerm["overhead press"];
          rowOneRM = fileAsJSON.onerm["bent over row"];

          console.log(
              colors.green(
                            "Bench Press 1RM: " + benchOneRM + "\n" +
                            "Squat 1RM: " + squatOneRM + "\n" +
                            "Deadlift 1RM: " + deadliftOneRM + "\n" +
                            "Overhead Press 1RM: " + ohpOneRM + "\n" + 
                            "Bent Over Row 1RM: " + rowOneRM + "\n" 
  
                          
              )
                  
          );
      
};



exports.getOneRM = function(exerciseArg, options) {
    if (options.all) {
        getAllOneRM();
    } else if (exerciseArg) {
        const fileAsJSON = fetchDB();

        oneRM = fileAsJSON.onerm[exerciseArg];
        console.log(
                colors.green(
                  "Current one rep max for " + exerciseArg + " is " + oneRM + "."
                )
            );

    }
    else {

    inquirer.prompt(controller).then(function(answers) {
      const fileAsJSON = fetchDB();

      oneRM = fileAsJSON.onerm[answers.exercise];
      
      console.log(
        colors.green(
          "Current one rep max for " + answers.exercise + " is " + oneRM + "."
        )
    );
  });
}};
