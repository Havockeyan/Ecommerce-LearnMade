import React from 'react'
import Shirt from '../assets/shirt.jpg'
import Pant from '../assets/pant.jpg' 
import Headphone from '../assets/dummy2.jpg'
import Phone from '../assets/phone.jpg'

const ProductReccomendation = () => {
  const Fashion = [
    {
      id: 1,
      name: "Shirt",
      price: "500₹",
      image: Shirt,
    },
    {
      id: 2,
      name: "Pant",
      price: "700₹",
      image: Pant,
    },
  ]

  const Electronics = [
    {
      id: 1,
      name: "headphone",
      price: "2500₹",
      image: Headphone,
    },
    {
      id: 2,
      name: "Samsung S24 Pro Max",
      price: "1,29,999₹",
      image: Phone,
    },
  ]

  return (
    <>
     <div className="flex items-center my-6">
  <div className="flex-grow h-px bg-gray-600"></div>
  <h1 className="px-4 text-3xl text-amber-300 font-bold">Fashion</h1>
  <div className="flex-grow h-px bg-gray-600"></div>
</div>

    <main className=" cursor-pointer p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
      {Fashion.map((dress) => (
        <div key={dress.id} className="border rounded-lg shadow p-4 flex flex-col items-center">
          <img src={dress.image.src} alt={dress.name} className="w-32 h-32 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{dress.name}</h2>
          <p className="text-gray-600">{dress.price}</p>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
        </div>
      ))}
    </main>

    <div className="flex items-center my-6">
  <div className="flex-grow h-px bg-gray-600"></div>
  <h1 className="px-4 text-3xl text-amber-300 font-bold">Electronics</h1>
  <div className="flex-grow h-px bg-gray-600"></div>
</div>

    <main className=" cursor-pointer p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
      {Electronics.map((electronics) => (
        <div key={electronics.id} className="border rounded-lg shadow p-4 flex flex-col items-center">
          <img src={electronics.image.src} alt={electronics.name} className="w-32 h-32 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{electronics.name}</h2>
          <p className="text-gray-600">{electronics.price}</p>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
        </div>
      ))}
    </main>
    </>
  )
}
    


export default ProductReccomendation;
