import React, { useState } from 'react';
import api from '../api';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/notes', { title, content });
      console.log(response);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <br />
      <label>Content:</label>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NoteForm;

