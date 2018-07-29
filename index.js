#!/usr/bin/env node --harmony
const program = require('commander')
const { log } = require('./commands/log');

program
  .version('0.0.1')
  .description('Fitness logger for developers');

program
    .command('log')
    .alias('l')
    .description('Log something')

    .action(function () {
        log();
    });

if ( process.argv.length < 3 ) {
  log();
}

program.parse(process.argv);