import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login({ username, password });
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Login</h2>
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={{ marginTop: '10px', textAlign: 'center', color: 'white' }}>Don't have an account? <Link to="/register" style={linkStyle}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
