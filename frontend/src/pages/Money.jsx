import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Money = () => {
  const navigate = useNavigate();
  const [transferAmount, setTransferAmount] = useState('');

  const handleTransfer = () => {
    // Here you would typically integrate with a payment gateway or API
    // to process the actual account transfer.
    // For this example, we'll just simulate the transfer.

    // Simulate storing the transfer amount (replace with actual logic)
    localStorage.setItem('transferAmount', transferAmount);

    navigate('/commitarea');
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
        width: '189vh',
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
            width: '34rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: '#eeeeee', fontSize: '2em', fontWeight: 'bold', marginBottom: '1.5em' }}>
            Transfer Money
          </h1>
          <p style={{ color: '#c9b9f0', marginBottom: '2rem' }}>
            To continue, please transfer the desired amount to your account on the site.
          </p>
          <div>
            <input
              type="number"
              placeholder="Enter amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'solid #ccc',
                boxSizing: 'border-box',
                marginBottom: '16px',
              }}
            />
            <button
              onClick={handleTransfer}
              style={{
                width: '100%',
                padding: '0.75em',
                backgroundColor: '#870379',
                border: 'none',
                color: 'white',
                borderRadius: '0.5em',
                fontSize: '1.125em',
                cursor: 'pointer',
              }}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;