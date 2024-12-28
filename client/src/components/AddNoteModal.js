import React from 'react';
import NoteForm from './NoteForm';

const AddNoteModal = ({ isOpen, onClose, onSubmit }) => {
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentStyle = {
    backgroundColor: 'black',
    color: 'white', 
    padding: '20px',
    borderRadius: '5px',
    width: '50%',
    height: '50%',
    maxWidth: '600px',
    maxHeight: '700px',
    overflowY: 'auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    border: '1px solid goldenrod'
  };
  

  const handleClose = () => {
    onClose();
  };

  return (
    <div style={modalStyle} onClick={handleClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <NoteForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddNoteModal;
