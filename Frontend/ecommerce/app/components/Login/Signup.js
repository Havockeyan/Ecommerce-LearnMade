import React, { useState } from 'react';

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

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

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <style jsx>{`
                .signup-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #e0e7ff; 
                }
                .signup-box {
                    background: #fff;
                    padding: 32px 24px;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
                    min-width: 320px;
                }
                .signup-box h2 {
                    margin-bottom: 16px;
                    text-align: center;
                }
                .signup-box form > div {
                    margin-bottom: 12px;
                }
                .signup-box label {
                    display: block;
                    margin-bottom: 4px;
                }
                .signup-box input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .signup-box button {
                    width: 100%;
                    padding: 10px;
                    background: #0070f3;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }
                .signup-box button:hover {
                    background: #005bb5;
                }
                .signup-box p {
                    text-align: center;
                    color: #0070f3;
                }
            `}</style>
        </div>
    );
};

export default Signup;
