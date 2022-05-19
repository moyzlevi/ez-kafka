#!/usr/bin/env node
import program  from 'commander';

import start from './actions/start.js'

program.version(process.env.npm_package_version);

program
    .command('start')
    .description('Set kafka bin location')
    .action(start);

program.parse(process.argv);