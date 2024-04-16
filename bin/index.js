#!/usr/bin/env node

require('node-absolute-path');

const program = require('commander');

const { installGenkit } = include('lib/services/framework');

program
    .command('install genkit')
    .description('Install Genkit CLI')
    .action(() => {
        installGenkit();
    });
program.parse(process.argv);