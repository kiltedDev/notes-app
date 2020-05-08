const chalk = require( 'chalk' );
const fs = require( 'fs' );

const passMsg = ( text ) => chalk.bgGreen.black( text );
const failMsg = ( text ) => chalk.bgRed.black( text );

const getNotes = () => 'Mom\'s Spaghetti';

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync( 'notes.json' );
    const dataJSON = dataBuffer.toString();
    return JSON.parse( dataJSON );
  } catch ( error ) {
    console.log( error.message );
    return [];
  }
};

const saveNotes = ( notes ) => {
  const dataJSON = JSON.stringify( notes );
  fs.writeFileSync( 'notes.json', dataJSON );
};

const addNote = ( title, body ) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(( note ) => note.title === title );

  if ( !duplicateNote ) {
    notes.push({
      title,
      body,
    });
    console.log( passMsg( 'Note Added!' ));
  } else {
    console.log( failMsg( 'Note title taken' ));
  }
  saveNotes( notes );
};

const removeNote = ( title ) => {
  const notes = loadNotes();
  const cleanNotes = notes.filter(( note ) => note.title !== title );
  if ( notes.length > cleanNotes.length ) {
    console.log( passMsg( 'Note Removed' ));
    saveNotes( cleanNotes );
  } else {
    console.log( failMsg( 'No note found!' ));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if ( notes.length > 0 ) {
    console.log( chalk.bgWhite.black( 'Your notes:' ));
    notes.forEach(( note ) => {
      console.log( passMsg( note.title ));
    });
  } else {
    console.log( failMsg( 'You have no notes.' ));
  }
};

const readNote = ( title ) => {
  const notes = loadNotes();

  const foundNote = notes.find(( note ) => note.title === title );

  if ( foundNote ) {
    console.log( passMsg( foundNote.title ));
    console.log( foundNote.body );
  } else {
    console.log( failMsg( 'That note was not found' ));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
