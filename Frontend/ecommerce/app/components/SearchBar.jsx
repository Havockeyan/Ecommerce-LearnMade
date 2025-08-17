"use client";
import { useState, useRef } from "react";

export default function SearchBar({ onLoginClick, onSignupClick }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center py-4 sm:py-6 bg-neutral-100 font-junge">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        
        {/* Search Form */}
        <form
          className="relative flex w-full bg-white rounded-full shadow-md overflow-hidden border border-neutral-200"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Show dropdown always on medium screens and above */}
          <select
            className="hidden sm:block px-3 sm:px-4 py-2 bg-neutral-100 text-neutral-700 font-junge outline-none border-r border-neutral-200 text-sm sm:text-base"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <input
            ref={inputRef}
            type="text"
            className="flex-1 px-3 sm:px-4 py-2 text-neutral-800 bg-transparent outline-none text-sm sm:text-base"
            placeholder="Search for products, brands and more..."
            value={search}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="px-4 sm:px-5 py-2 bg-neutral-800 text-white hover:bg-neutral-900 transition-colors"
          >
            <svg
              width="18"
              height="18"
              className="sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="9" r="7" />
              <line x1="16" y1="16" x2="13.5" y2="13.5" />
            </svg>
          </button>
        </form>

        {/* Auth Buttons */}
        <div className="flex w-full sm:w-auto justify-center sm:justify-end gap-2">
          <button
            onClick={onLoginClick}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
          >
            Login
          </button>
          <button
            onClick={onSignupClick}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className="w-full max-w-2xl mt-3 sm:mt-4">
          <div className="bg-white rounded-xl shadow p-3 sm:p-4 border border-neutral-200">
            <div className="text-xs sm:text-sm text-neutral-500 mb-2">
              Recommended for you
            </div>
            <ul className="space-y-1 text-sm sm:text-base">
              <li className="text-neutral-800">NVIDIA RTX 5090</li>
              <li className="text-neutral-800">Apple MacBook Air M2</li>
              <li className="text-neutral-800">Sony WH-1000XM5</li>
              <li className="text-neutral-800">Adidas Running Shoes</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
