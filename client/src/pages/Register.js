import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
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
    border: '1px solid goldenrod',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to bottom, rgba(0, 174, 255, 0.05), rgba(0, 0, 255, 0.05))'
  };
  
  

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'goldenrod'
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textAlign: 'left'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'goldenrod',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'goldenrod',
    fontWeight: 'bold'
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await register({ username, password });
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Register</h2>
        {/* {error && <div style={errorStyle}>{error}</div>} */}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
        <p style={{ marginTop: '10px', textAlign: 'center', color: 'white' }}>Already have an account? <Link to="/login" style={linkStyle}>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
