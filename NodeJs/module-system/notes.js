const chalk = require('chalk');
const fs = require('fs');
const { title, argv } = require('process');

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note title taken!');
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title);
    
    if(notes.length > noteToKeep.length){
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(noteToKeep);
    }else{
        console.log(chalk.red.inverse("Note not found"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    if(notes.length > 0){
        notes.forEach(note => {
            console.log(chalk.green.inverse(note.title));
        });
    }else{
        console.log(chalk.red.inverse("There is no note"));
    }
}

const readNote = title => {
    const notes = loadNotes();
    const noteFind = notes.find((note) => note.title === title);

    if(noteFind){
        console.log(chalk.green.inverse(noteFind.title, noteFind.body));
    }else{
        console.log(chalk.red.inverse("This note does't exist"));
    }
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}