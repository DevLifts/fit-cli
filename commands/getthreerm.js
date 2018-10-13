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

getAllThreeRM = function() {
          const fileAsJSON = fetchDB();

          benchThreeRM = fileAsJSON.threerm["bench press"];
          squatThreeRM = fileAsJSON.threerm["squat"];
          deadliftThreeRM = fileAsJSON.threerm["deadlift"];
          ohpThreeRM = fileAsJSON.threerm["overhead press"];
          rowThreeRM = fileAsJSON.threerm["bent over row"];

          console.log(
              colors.green(
                            "Bench Press 3RM: " + benchThreeRM + "\n" +
                            "Squat 3RM: " + squatThreeRM + "\n" +
                            "Deadlift 3RM: " + deadliftThreeRM + "\n" +
                            "Overhead Press 3RM: " + ohpThreeRM + "\n" + 
                            "Bent Over Row 3RM: " + rowThreeRM + "\n" 
  
                          
              )
                  
          );
      
};



exports.getThreeRM = function(exerciseArg, options) {
    if (options.all) {
        getAllThreeRM();
    } else if (exerciseArg) {
        const fileAsJSON = fetchDB();

        threeRM = fileAsJSON.threerm[exerciseArg];
        console.log(
                colors.green(
                  "Current three rep max for " + exerciseArg + " is " + threeRM + "."
                )
            );

    }
    else {

    inquirer.prompt(controller).then(function(answers) {
      const fileAsJSON = fetchDB();

      threeRM = fileAsJSON.threerm[answers.exercise];
      
      console.log(
        colors.green(
          "Current three rep max for " + answers.exercise + " is " + threeRM + "."
        )
    );
  });
}};
