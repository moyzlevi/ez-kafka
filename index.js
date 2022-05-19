#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
const chalk = require('chalk');

program.version(package.version);

program
    .command('set-home [kafkaBin]')
    .description('Set kafka bin location')
    .action((kafkaBin) => {
        console.log(`Kafka bin set to ${chalk.green(kafkaBin)}`);
    });

program.parse(process.argv);