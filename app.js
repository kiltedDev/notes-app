const yargs = require( 'yargs' );

const notes = require( './notes.js' );

// Customize version number
yargs.version( '1.1.0' );

// Add, remove, read, list
// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler( argv ) {
    notes.addNote( argv.title, argv.body );
  },
});

// Create a remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler( argv ) {
    notes.removeNote( argv.title );
  },
});

// Create a list command
yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes();
  },
});

// Create a read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler( argv ) {
    notes.readNote( argv.title );
  },
});

yargs.parse();
