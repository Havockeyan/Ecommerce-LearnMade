'use client';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import SearchBar from './SearchBar';
import OrderReturn from './OrderReturn';
import OrderDetail from './OrderDetail';

const AuthForms = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showOrderReturn, setShowOrderReturn] = useState(false);
    const [showOrderDetail, setShowOrderDetail] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
        setShowOrderReturn(false);
        setShowOrderDetail(false);
    };

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
        setShowOrderReturn(false);
        setShowOrderDetail(false);
    };

    const handleOrderClick = () => {
        if (showOrderReturn) {
            setShowOrderReturn(false);
            setShowOrderDetail(true); // Show Order Detail if Return is already shown
        } else {
            setShowOrderReturn(true); // Show Return option by default
            setShowOrderDetail(false);
        }
        setShowLogin(false);
        setShowSignup(false);
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowSignup(false);
        setShowOrderReturn(false);
        setShowOrderDetail(false);
    };

    return (
        <>
            <SearchBar 
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onOrderClick={handleOrderClick}
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
                          
                        </button>
                        <Signup />
                    </div>
                </div>
            )}

            {/* Order Return Form Overlay */}
            {showOrderReturn && (
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
                        maxWidth: '500px',
                        width: '90%',
                        position: 'relative'
                    }}>
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'balck',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            ×
                        </button>
                        <OrderReturn />
                    </div>
                </div>
            )}

            {/* Order Detail Overlay */}
            {showOrderDetail && (
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
                        maxWidth: '600px',
                        width: '90%',
                        position: 'relative'
                    }}>
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'Black',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            
                        </button>
                        <OrderDetail />
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthForms;
