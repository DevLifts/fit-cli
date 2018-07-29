#!/usr/bin/env node --harmony
const program = require('commander')
const { log } = require('./log');

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

program
    .command('test')
    .alias('t')
    .description('Test')

    .action(function () {
        console.log("tested!")
    });

program.parse(process.argv);