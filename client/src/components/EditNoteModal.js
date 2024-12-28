import React, { useState } from 'react';
import { updateNote, deleteNote } from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EditNoteModal = ({ isOpen, onClose, initialTitle, initialContent, noteId }) => {
    const [editedTitle, setEditedTitle] = useState(initialTitle);
    const [editedContent, setEditedContent] = useState(initialContent);

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setEditedContent(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            await updateNote(noteId, { title: editedTitle, content: editedContent });
            window.location.reload();
            onClose && onClose();
        } catch (error) {
            console.error('Failed to update note:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteNote(noteId);
            window.location.reload();
            onClose && onClose();
        } catch (error) {
            console.log("Failed to Delete:", error);
        }
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
    };

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        border: '1px solid goldenrod'
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        width: '100%',
        height: '100px',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        resize: 'vertical'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: 'goldenrod',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px'
    };

    const deleteIconStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        color: 'goldenrod'
    };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div style={overlayStyle} onClick={onClose}></div>
            <div style={modalStyle}>
                <FontAwesomeIcon icon={faTrash} style={deleteIconStyle} onClick={handleDelete} />
                <h2 style={{ marginBottom: '10px', color: 'goldenrod' }}>Edit Note</h2>
                <input
                    type="text"
                    value={editedTitle}
                    onChange={handleTitleChange}
                    placeholder="Enter updated title..."
                    style={inputStyle}
                />
                <textarea
                    value={editedContent}
                    onChange={handleContentChange}
                    placeholder="Enter your updated note content..."
                    style={textareaStyle}
                />
                <button style={buttonStyle} onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
};

export default EditNoteModal;
