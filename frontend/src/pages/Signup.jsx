import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    console.log('Signup data:', { username, email, password });
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundImage: "url('background.jpg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '189vh', // Adjust width as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(32, 15, 60, 0.9)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            width: '24rem',
          }}
        >
          <h1
            style={{
              color: '#eeeeee',
              textAlign: 'center',
              fontSize: '2em',
              fontWeight: 'bold',
              marginBottom: '1.5em',
            }}
          >
            Sign Up
          </h1>
          <p
            style={{
              color: '#c9b9f0',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Create an account to start tracking your goals.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: 'lightblue',
                  fontWeight: 'bold',
                }}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'solid #ccc',
                  boxSizing: 'border-box',
                  marginBottom: '16px',
                  transition: 'border-color 0.3s',
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: 'lightblue',
                  fontWeight: 'bold',
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'solid #ccc',
                  boxSizing: 'border-box',
                  marginBottom: '16px',
                  transition: 'border-color 0.3s',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: 'lightblue',
                  fontWeight: 'bold',
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'solid #ccc',
                  boxSizing: 'border-box',
                  marginBottom: '16px',
                  transition: 'border-color 0.3s',
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75em',
                backgroundColor: '#870379',
                border: 'none',
                color: 'white',
                borderRadius: '0.5em',
                fontSize: '1.125em',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Sign Up
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p>
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'lightblue', textDecoration: 'none' }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;