const chalk = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note...');
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    handler: function (){
        console.log("Removing the note!");
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function (){
        console.log("Read the note!");
    }
});
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function (){
        console.log("List notes!");
    }
});

console.log(yargs.argv);