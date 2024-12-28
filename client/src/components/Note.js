import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import EditNoteModal from './EditNoteModal';

const Note = ({ note, index, onUpdateNote }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const noteStyle = {
    position: 'relative', 
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    width: 'calc(25% - 20px)',
    boxSizing: 'border-box', 
    border: '1px solid goldenrod'
  };

  const titleStyle = {
    marginBottom: '10px',
    color: 'goldenrod',
    wordWrap: 'break-word'
  };

  const contentStyle = {
    color: 'white',
    padding: '2px',
    wordWrap: 'break-word',
    maxHeight: expanded ? 'none' : '3em',
    overflow: 'hidden',
    position: 'relative'
  };

  const viewMoreStyle = {
    color: 'goldenrod',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '5px'
  };

  const penIconStyle = {
    position: 'absolute',
    top: '10px', 
    right: '10px', 
    cursor: 'pointer',
    color: 'goldenrod'
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handlePenClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="note" style={noteStyle}>
      <h3 style={titleStyle}>{note.title}</h3>
      <FontAwesomeIcon icon={faPen} style={penIconStyle} onClick={handlePenClick} />
      <EditNoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        initialContent={note.content} 
        initialTitle={note.title}
        noteId={note._id}
      />
      <p style={contentStyle}>
        {note.content.length > 10 ? (
          <span>
            {expanded ? note.content : note.content.substring(0, 10) + ' '}
            {!expanded && (
              <span onClick={toggleExpand} style={viewMoreStyle}>
                ...View More
              </span>
            )}
          </span>
        ) : (
          note.content
        )}
      </p>
    </div>
  );
};

export default Note;
