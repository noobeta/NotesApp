const fs = require('fs');

const getNotes = function() {
  return 'your notes ...';
};

const addNotes = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(each_note_object) {
    if (each_note_object.title === title) return true;
    else return false;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log(notes);
    saveNotes(notes);
  } else {
    console.log('duplicate available');
  }
};

const removeNote = function(title) {
  //console.log('removing notes');
  const notes = loadNotes();
  const notetokeep = notes.filter(function(note) {
    return note.title != title;
  });
  saveNotes(notetokeep);
  console.log(notetokeep);
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    //console.log(dataJSON);
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNotes = function(title) {
  const readData = loadNotes();
  const note = readData.find(function(indivisualNote) {
    return indivisualNote.title === title;
  });
  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log('no note found');
  }
};

const listNote = function() {
  const data = loadNotes();

  data.forEach(function(note) {
    console.log('Title of the note : ' + note.title);
    console.log('Contents : ' + note.body);
  });
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNote: listNote,
  readNotes: readNotes
};
