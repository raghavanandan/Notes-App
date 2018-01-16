const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title already exists');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note fetched');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command == 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var msg = noteRemoved ? 'Note was removed' : 'No note removed';
  console.log(msg);
} else {
  console.log('Command not recognized');
}
