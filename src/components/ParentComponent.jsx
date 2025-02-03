import React, { useState } from 'react';
import NotesList from './NotesList';

const ParentComponent = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'This is note 1' },
    { id: 2, title: 'Note 2', content: 'This is note 2' },
    { id: 3, title: 'Note 3', content: 'This is note 3' },
  ]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NotesList notes={notes} setNotes={setNotes} handleAddNote={handleAddNote} />
    </div>
  );
};

export default ParentComponent;
