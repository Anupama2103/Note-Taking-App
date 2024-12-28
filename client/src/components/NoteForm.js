import React, { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'goldenrod',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px'
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#007bff';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#ccc';
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle} className="note-form">
    <h3 style={{ marginBottom: '10px', color: 'goldenrod' }}>Create Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={inputStyle}
        rows={5}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required
      ></textarea>
      <button type="submit" style={buttonStyle}>Save</button>
    </form>
  );
};

export default NoteForm;
