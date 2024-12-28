import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyNotes from './MyNotes.js';

const Home = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'black'
  };

  const formContainerStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    background: '#fff'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <MyNotes />
    </div>
  );
};

export default Home;
