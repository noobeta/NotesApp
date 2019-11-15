const getNotes = require('./note.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'this command is used for adding notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, //it needs to be always provided
      type: 'string' //we are always expecting a string
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    /*         console.log('this is the title of the note : '+argv.title);
        console.log('this is the body of the note : '+argv.body);
 */
    getNotes.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'this command is used for removing notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    //console.log('removing a note');
    getNotes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'this command is used for listing the notes',
  handler: function() {
    getNotes.listNote();
  }
});

yargs.command({
  command: 'read',
  describe: 'this command is used for reading the notes',
  builder: {
    title: {
      describe: 'title',
      demand: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    getNotes.readNotes(argv.title);
    // console.log('command used for reading the contents from the notes');
  }
});
yargs.parse();
/* const command = process.argv[2];
if(command == 'add')
{
   console.log('adding');
}
 */
//console.log(process.argv);
//console.log(msg);
