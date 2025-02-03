import React from 'react';

const NotesList = ({ notes, setNotes, handleAddNote }) => {
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleAddNewNote = () => {
    const newNote = { id: Date.now(), title: 'New Note', content: 'This is a new note' };
    handleAddNote(newNote);
  };

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddNewNote}>Add New Note</button>
    </div>
  );
};

export default NotesList;
