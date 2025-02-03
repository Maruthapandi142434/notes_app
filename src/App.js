import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/new" element={<NoteForm />} />
      </Routes>
    </div>
  );
}


export default App;