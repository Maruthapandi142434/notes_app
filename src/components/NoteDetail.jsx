import React, { useState, useEffect } from 'react';
import api from './api'; // Import the api module


const NoteDetail = () => {
  const [notes, setNotes] = useState([]); // Define the notes state and setNotes function
  const [note, setNote] = useState({}); // Define the note state
  const [id, setId] = useState(null); // Define the id state

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.getNotes();
        setNotes(response.data);
        const noteId = id;
        const selectedNote = response.data.find((note) => note.id === noteId);
        setNote(selectedNote);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNote();
  }, [id]);

  return (
    <div>
      <h2>Note Detail</h2>
      {note && (
        <div>
          <p>Title: {note.title}</p>
          <p>Content: {note.content}</p>
        </div>
      )}
    </div>
  );
};

export default NoteDetail;