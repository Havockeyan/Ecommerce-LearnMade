'use client';
import { useState } from 'react';

export default function LoginForm() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Dummy sign up logic
      if (user.username && user.password) {
        setMessage('✅ Signup successful! You can now log in.');
        setIsSignup(false);
        setUser({ username: '', password: '' });
      } else {
        setMessage('❌ Please fill all fields');
      }
    } else {
      // Dummy login logic
      if (user.username === 'admin' && user.password === '1234') {
        setMessage('✅ Login successful!');
        document.body.style.background = '#d1ffd6'; 
      } else {
        setMessage('❌ Invalid credentials');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: message === '✅ Login successful!' ? '#d1ffd6' : '#f5f5f5'
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem 2.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        minWidth: '320px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: 'none',
              background: '#0070f3',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
        {message && (
          <p className="message" style={{ marginTop: '1rem', textAlign: 'center' }}>{message}</p>
        )}
      </div>
    </div>
  );

}

