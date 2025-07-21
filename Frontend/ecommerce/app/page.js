import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Navigation */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Home</span>
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-900 hover:text-gray-600 text-sm font-medium">Home</Link>
                <Link href="/collections" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Collections</Link>
                <Link href="/new" className="text-gray-600 hover:text-gray-900 text-sm font-medium">New</Link>
              </nav>
            </div>

            {/* Right side - Icons */}
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white shadow-sm min-h-screen p-8">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Grocery', 'Electronics', 'Toys', 'Cloths', 'Books'].map((category, index) => (
                <li key={index}>
                  <Link href={`/category/${category.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 text-sm">
                    {category}
                  </Link>
          </li>
              ))}
            </ul>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
            </div>
          </div>

          {/* NEW ARRIVAL Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">NEW ARRIVAL</h2>
            <p className="text-lg text-gray-600 mb-6">Summer 2024</p>
            
            {/* Go To Shop Button */}
            <div className="flex items-center space-x-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                <span className="text-sm font-medium">Go To Shop</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-gray-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-gray-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Product Display Area */}
        <div className="flex-1 bg-gray-100 p-8">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Product Image */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg mx-auto mb-4 flex items-end justify-center">
                    <div className="w-20 h-24 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg mb-2"></div>
                  </div>
                  <p className="text-sm text-gray-600">Beige Trousers & Brown Sneakers</p>
                </div>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Black T-shirt with Bird Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
