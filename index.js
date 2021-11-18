#!/usr/bin/env node --harmony
const program = require("commander");
const { all1rm } = require("./commands/list");
const { log } = require("./commands/log");

program.version('0.0.1', '-v, --version', 'output the current version').description("Fitness logger for developers");

program
  .command("log")
  .alias("l")
  .option('-a, --all', 'List all one rep maxes')
  .action((e)=>{
    if (process.argv.length > 3) {
      if(process.argv.at(-2) == "1rm" && (process.argv.at(-1) == "-a" || process.argv.at(-1) == "--all")){
        all1rm()
      }
    }
    else{
      log();
    }
  })
  program.parse(process.argv);
