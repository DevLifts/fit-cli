#!/usr/bin/env node --harmony
const program = require("commander");
const { log } = require("./commands/log");
const { getOneRM } = require("./commands/getonerm")

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
  .command("onerm")
  .alias("one")
  .option('-a, --all','retrieve 1RM for all exercises')
  .description("Fetch one rep max of exercise")

  .action(
      // if -a flag is set, return one rep max for all lifts
      
          function(options) {
              getOneRM(options);
    })
.parse(process.argv);

if (process.argv.length < 3) {
  log();
}

program.parse(process.argv);
