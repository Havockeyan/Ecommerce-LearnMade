'use client';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import SearchBar from './SearchBar';

const AuthForms = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    return (
        <>
            <SearchBar 
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
            />

            {/* Login Form Overlay */}
            {showLogin && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        maxWidth: '400px',
                        width: '90%',
                        position: 'relative'
                    }}>
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            ×
                        </button>
                        <Login />
                    </div>
                </div>
            )}

            {/* Signup Form Overlay */}
            {showSignup && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        maxWidth: '400px',
                        width: '90%',
                        position: 'relative'
                    }}>
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            ×
                        </button>
                        <Signup />
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthForms; 