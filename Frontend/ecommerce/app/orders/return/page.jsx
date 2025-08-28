'use client';
import React from 'react';
import OrderReturn from '../../components/OrderReturn';

const ReturnPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Request Order Return</h1>
        <OrderReturn />
      </div>
    </div>
  );
};

export default ReturnPage;
