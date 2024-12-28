const BASE_URL = 'http://localhost:5000/api';

export const getAllNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
  const data = await response.json();
  return data;
};

export const createNote = async (noteData) => {
  await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(noteData)
  });
};

export const deleteNote = async (noteId) => {
  await fetch(`${BASE_URL}/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};

export const updateNote = async (noteId, updatedNoteData) => {
  await fetch(`${BASE_URL}/notes/${noteId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(updatedNoteData)
  });
};

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.token;
};

export const register = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.token;
};