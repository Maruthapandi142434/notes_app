// Import required modules
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Define the api function
const api = {
  // Function to get notes
  getNotes: async () => {
    try {
      const response = await axios.get('/api/notes');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // Function to create a new note
  createNote: async (note) => {
    try {
      const response = await axios.post('/api/notes', note);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // Function to update a note
  updateNote: async (id, note) => {
    try {
      const response = await axios.put(`/api/notes/${id}`, note);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // Function to delete a note
  deleteNote: async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

// Export the api object
export default api;

