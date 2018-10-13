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

getAllFiveRM = function() {
          const fileAsJSON = fetchDB();

          benchFiveRM = fileAsJSON.fiverm["bench press"];
          squatFiveRM = fileAsJSON.fiverm["squat"];
          deadliftFiveRM = fileAsJSON.fiverm["deadlift"];
          ohpFiveRM = fileAsJSON.fiverm["overhead press"];
          rowFiveRM = fileAsJSON.fiverm["bent over row"];

          console.log(
              colors.green(
                            "Bench Press 5RM: " + benchFiveRM + "\n" +
                            "Squat 5RM: " + squatFiveRM + "\n" +
                            "Deadlift 5RM: " + deadliftFiveRM + "\n" +
                            "Overhead Press 5RM: " + ohpFiveRM + "\n" + 
                            "Bent Over Row 5RM: " + rowFiveRM + "\n" 
  
                          
              )
                  
          );
      
};



exports.getFiveRM = function(exerciseArg, options) {
    if (options.all) {
        getAllFiveRM();
    } else if (exerciseArg) {
        const fileAsJSON = fetchDB();

        fiveRM = fileAsJSON.fiverm[exerciseArg];
        console.log(
                colors.green(
                  "Current five rep max for " + exerciseArg + " is " + fiveRM + "."
                )
            );

    }
    else {

    inquirer.prompt(controller).then(function(answers) {
      const fileAsJSON = fetchDB();

      fiveRM = fileAsJSON.fiverm[answers.exercise];
      
      console.log(
        colors.green(
          "Current five rep max for " + answers.exercise + " is " + fiveRM + "."
        )
    );
  });
}};
