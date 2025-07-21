'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white px-6 py-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy" className="hover:underline text-amber-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline text-amber-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
