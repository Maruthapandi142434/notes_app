const api = {
  post: async (endpoint, data) => {
    try {
      const response = await fetch(`http://localhost:3001${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;
