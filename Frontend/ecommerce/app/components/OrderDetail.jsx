'use client'
import React from 'react'

const OrderDetail = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Details</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Order ID:</span>
          <span className="font-semibold">#123456</span>
        </div>
        
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Order Date:</span>
          <span className="font-semibold">January 15, 2024</span>
        </div>
        
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Status:</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Delivered
          </span>
        </div>
        
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-semibold text-lg">$99.99</span>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Items</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Product Name 1</span>
              <span className="font-semibold">$49.99</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Product Name 2</span>
              <span className="font-semibold">$50.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
