import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const handleButtonClick = () => {
        window.location.href = './signup'; 
      };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundImage: "url('background.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'189vh',
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
            Login
          </h1>
          <p
            style={{
              color: '#c9b9f0',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Login to track your progress
          </p>

          <form>
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
              }}>
              <Link to="/invite" className="text-white hover:underline">Login
                    </Link>

            </button>
            
          </form>

          <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;