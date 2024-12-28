import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Note from '../components/Note';
import { getAllNotes, createNote } from '../utils/api';
import AddNoteModal from '../components/AddNoteModal';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchNotes();
    }
  }, [navigate]);

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'black',
    padding: '20px'
  };

  const noteListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 15,
    width: '100%',
    boxSizing: 'border-box'
  };

  const addNoteButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    background: 'goldenrod',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const logoutButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    background: 'goldenrod',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px'
  };

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await getAllNotes();
      setNotes(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitNote = (newNote) => {
    createNote(newNote);
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>My Notes</h2>
      {notes.length > 0 ? (
        <div className="note-list" style={noteListStyle}>
          {notes.map((note, index) => (
            <Note key={index} note={note} index={index} />
          ))}
        </div>
      ) : (
        <div style={{ color: '#fff', textAlign: 'center' }}>No notes available. Click the button below to add a new note.</div>
      )}
      <button onClick={handleAddNote} style={addNoteButtonStyle}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button onClick={handleLogout} style={logoutButtonStyle}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
      <AddNoteModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitNote} />
    </div>
  );
};

export default MyNotes;