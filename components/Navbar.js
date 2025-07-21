'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-10xl mx-auto flex justify-between items-center">
        
        
        <div className="text-2xl font-bold">
          Ecommerce
        </div>

        <div className="space-x-6 text-lg">
          <Link href="/" className="text-amber-300 font-stretch-expanded hover:underline">Home</Link>
          <Link href="/about" className="text-amber-300 font-stretch-expanded hover:underline">About</Link>
          <Link href="/contact" className="text-amber-300 font-stretch-expanded hover:underline">Contact</Link>
        </div>

         
        
      </div>
    </nav>
  )
}

export default Navbar
