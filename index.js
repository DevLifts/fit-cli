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

program
  .command("onerm")
  .alias("one")
  .description("Fetch one rep max of exercise")

  .action(function() {
    getOneRM();
  });

if (process.argv.length < 3) {
  log();
}

program.parse(process.argv);
