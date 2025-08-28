'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const OrderTracking = () => {
  const router = useRouter();

  const handleRequestReturn = () => {
    router.push('/orders/return'); // Navigate to the OrderReturn component
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Tracking</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Order ID:</span>
          <span className="font-semibold">#123456</span>
        </div>
        
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Status:</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Delivered
          </span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Dispatch Date:</span>
          <span className="font-semibold">January 10, 2024</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Delivery Date:</span>
          <span className="font-semibold">January 15, 2024</span>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Return Options</h3>
          <button
            onClick={handleRequestReturn}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Request Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
