'use client';
import React from 'react';
import OrderTracking from '../components/OrderTracking';
import OrderReturn from '../components/OrderReturn';

const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>
        <OrderTracking />
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-12">Request Order Return</h1>
        <OrderReturn /> */}
      </div>
    </div>
  );
};

export default OrdersPage;
