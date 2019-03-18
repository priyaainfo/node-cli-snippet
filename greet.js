#!/usr/bin/env node
console.log('Hello, world!');
var program = require('commander');

program
    .option('-u, --username <username>', 'The user to authenticate as')
    .action(function (file) {
        console.log('Hello,  %s!!!',
            program.username);
    })
    .parse(process.argv);