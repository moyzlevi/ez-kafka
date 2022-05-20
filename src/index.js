#!/usr/bin/env node
import program  from 'commander';

import start from './actions/start.js'

program.version(process.env.npm_package_version);

program
    .command('start [location]')
    .description('Set kafka location path')
    .action(start);

program.parse(process.argv);