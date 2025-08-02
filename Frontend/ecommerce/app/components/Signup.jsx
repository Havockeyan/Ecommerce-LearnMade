'use client';
import React, { useState } from 'react';

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                setMessage('Signup successful!');
                setForm({ name: '', email: '', password: '' });
            } else {
                setMessage('Signup failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage('');
        setForm({ name: '', email: '', password: '' });
    };

    return (
        <div>
            <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
                {isLogin ? 'Login' : 'Sign Up'}
            </h2>
            {message && <p style={{ textAlign: 'center', color: '#0070f3' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: 'white'
                            }}
                        />
                    </div>
                )}
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px' }}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px' }}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                <button 
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: 'black',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        marginBottom: '1rem'
                        
                    }}
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            
            {/* Toggle Button */}
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={toggleForm}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'black',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: '0.9rem'
                    }}
                >
                    {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default Signup;