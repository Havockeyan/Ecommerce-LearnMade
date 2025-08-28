'use client'
import React, { useState } from 'react'

const OrderReturn = () => {
  const [returnReason, setReturnReason] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle return submission logic here
    console.log('Return submitted:', { returnReason, additionalNotes })
    alert('Return request submitted successfully!')
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Request Order Return
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
            placeholder="Enter your order ID"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Return
          </label>
          <select
            value={returnReason}
            onChange={(e) => setReturnReason(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Select a reason</option>
            <option value="wrong-item">Wrong item received</option>
            <option value="damaged">Item arrived damaged</option>
            <option value="not-as-described">Not as described</option>
            <option value="size-issue">Size doesn't fit</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please provide any additional details about your return..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit Return Request
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold text-gray-700 mb-2">Return Policy</h3>
        <p className="text-sm text-gray-600">
          Returns are accepted within 30 days of purchase. Items must be in original condition with all tags attached. Refunds will be processed within 5-7 business days after we receive the returned items.
        </p>
      </div>
    </div>
  )
}

export default OrderReturn
