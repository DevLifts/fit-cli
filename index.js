#!/usr/bin/env node --harmony
const program = require("commander");
const { log } = require("./commands/log");
const { getOneRM } = require("./commands/getonerm")
const { getThreeRM } = require("./commands/getthreerm")
const { getFiveRM } = require("./commands/getfiverm")

program.version("0.0.1").description("Fitness logger for developers");

program
  .command("log")
  .alias("l")
  .description("Log something")

  .action(function() {
    log();
  });

if (process.argv.length < 3) {
      log();

}

program
  .command('onerm [exerciseArg]')
  .alias("one")
  .option('-a, --all','retrieve 1RM for all exercises')
  .description("Fetch one rep max of exercise")

  .action(
      // if -a flag is set, return one rep max for all lifts
      
          function(exerciseArg, options) {
              getOneRM(exerciseArg, options);
    })

program
  .command('threerm [exerciseArg]')
  .alias("three")
  .option('-a, --all','retrieve 3RM for all exercises')
  .description("Fetch three rep max of exercise")

  .action(
      // if -a flag is set, return one rep max for all lifts
      
          function(exerciseArg, options) {
              getThreeRM(exerciseArg, options);
    })

program
  .command('fiverm [exerciseArg]')
  .alias("five")
  .option('-a, --all','retrieve 5RM for all exercises')
  .description("Fetch five rep max of exercise")

  .action(
      // if -a flag is set, return one rep max for all lifts
      
          function(exerciseArg, options) {
              getFiveRM(exerciseArg, options);
    })


program.parse(process.argv);
