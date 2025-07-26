"use client";
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

const Page = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <button
          onClick={() => setShowSignup(false)}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            background: !showSignup ? '#0070f3' : '#e0e0e0',
            color: !showSignup ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
        <button
          onClick={() => setShowSignup(true)}
          style={{
            padding: '0.5rem 1rem',
            background: showSignup ? '#0070f3' : '#e0e0e0',
            color: showSignup ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Signup
        </button>
        
      </div>
      {showSignup ? <Signup /> : <Login />}
    </div>
  );
};

export default Page;