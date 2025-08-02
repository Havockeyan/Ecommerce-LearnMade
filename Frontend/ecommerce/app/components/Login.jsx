"use client";
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Dummy sign up logic
      if (user.username && user.password) {
        setMessage(' Signup successful! You can now log in.');
        setIsSignup(false);
        setUser({ username: '', password: '' });
      } else {
        setMessage(' Please fill all fields');
      }
    } else {
      // Dummy login logic
      if (user.username === 'admin' && user.password === '1234') {
        setMessage(' Login successful!');
        document.body.style.background = '#d1ffd6'; 
      } else {
        setMessage(' Invalid credentials');
      }
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setMessage('');
    setUser({ username: '', password: '' });
  };

  return (
    <div>
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
            background: 'black',
            color: '#ffff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      
      {/* Toggle Button */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={toggleForm}
          style={{
            background: 'white',
            border: 'none',
            color: 'black',
            cursor: 'pointer',
            textDecoration: 'underline',
            fontSize: '0.9rem'
          }}
        >
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>

      {message && (
        <p className="message" style={{ marginTop: '1rem', textAlign: 'center' }}>{message}</p>
      )}
    </div>
  );
}


