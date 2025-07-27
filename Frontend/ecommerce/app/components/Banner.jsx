'use client'
import { useState, useEffect } from 'react'
import dummy1 from '../assets/dummy1.jpg'
import dummy2 from '../assets/dummy2.jpg'
import dummy3 from '../assets/dummy3.jpg'

const Banner = () => {
  const banners = [
    {
      text: "🎉 Upcoming Event – Sale this weekend!",
      image: dummy1,
    },
    {
      text: "🚀 New Launch – Explore our latest collection!",
      image: dummy2,
    },
    {
      text: "🌞 Seasonal Offers – Up to 60% off!",
      image: dummy3,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
   
    <img
      src={banners[index].image.src} 
      alt="Banner"
      className="w-full h-80 object-cover"
    />

    
    <div className="bg-[#f5f5dc] text-center py-3">
      <h2 className="text-xl font-semibold text-gray-800">
        {banners[index].text}
      </h2>
    </div>
  </div>
  )
}

export default Banner