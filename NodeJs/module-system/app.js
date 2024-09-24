const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'body note',
            demandOption: true,
            type: 'string',
        }
    },

    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title:{
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv){
        notes.readNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List notes',
    biulder: {
        describe: 'List notes',
        demandOption: true,
        type: 'string',
    },
    handler: function (){
        notes.listNotes();
    }
});

yargs.parse()