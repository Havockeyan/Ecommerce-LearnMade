import React from 'react'

const page = () => {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center w-full py-3 px-6 text-white h-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h1 className='text-white text-2xl font-sans font-semibold'>E-commerce <p className='text-xs'>Developed By Deepak</p></h1>
        <div className='flex gap-4 text-1xl font-semibold '>
          <p><span className='hover:bg-black text-white cursor-pointer rounded-2xl py-2 '>Home</span></p>
          <p><span className='hover:bg-black text-white cursor-pointer rounded-2xl py-2 '>About Us</span></p>
          <p><span className='hover:bg-black text-white cursor-pointer rounded-2xl py-2 '>Contact</span></p>
        </div>
      </header>
      {/* Sub Header */}
      <div className='py-10 bg-blue-900 text-white  text-shadow-black text-shadow-2xs'>
        <h1 className='font-serif text-3xl font-semibold text-align-centre text-center mb-4 underline decoration-teal-200'>🛍️ Why Shop With Us?</h1>
        <p className='text-center'>Shop with confidence on our platform where you’ll find top-quality products, unbeatable prices, fast delivery, secure payments, and reliable customer support. Enjoy a seamless shopping experience with easy returns, exclusive deals, and a user-friendly interface. Your satisfaction is our top priority—shop smarter, shop better, only with us!</p>
      </div>

      <h1 className='text-center font-semibold bg-gradient-to-r from-gray-100 to-gray-200 pt-10 font-serif text-3xl underline decoration-black'>Top Products📦</h1>

      {/* Product 1 */}
      <main className='min-h-screen min-w-fit flex flex-row flex-wrap justify-center items-center gap-15 bg-gradient-to-r from-gray-100 to-gray-200 py-12'>
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl py-2 mt-4'><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>


        {/* Product 2 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl py-2 mt-4'><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>


        {/* Product 3 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl  py-2 mt-4 '><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>

        {/* Product 4 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl  py-2 mt-4'><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>
        {/* Product 5 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl  py-2 mt-4 '><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>

        {/* Product 6 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl  py-2 mt-3 '><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>



        {/* Product 7 */}
        <div className='flex justify-center items-baseline-last py-10'>
          <div className="bg-white border border-black p-4 box-border w-[300px] rounded-2xl">
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="max-w-full max-h-full object-contain mb-2"
            />
            <center><p className="inline text-black">
              This is a responsive e-commerce template built using React and Tailwind CSS, designed by Deepak for modern shopping platforms. <br></br>
            </p>
              <button className='bg-black text-white rounded-3xl  py-2 mt-3'><span className='hover:bg-red-500 text-white cursor-pointer rounded-3xl py-2.5'>Buy Now</span></button></center>
          </div>
        </div>
      </main>
      {/* Contact Info */}
      <div className=' flex flex-col bg-gray-900 text-white  '>
        <p className='text-2xl font-semibold text-center underline decoration-white '>Contact</p><br></br>
        <p className='text-center'>Phone Number: +91 XXXXXXXXXX</p> 
        <p className='text-center'>Email: xyz@gmail.com</p><br></br>
       <center> <a href='' className='text-blue-500 hover:underline-offset-0'>Instagram📷 </a>  
        <a href='' className='text-blue-500 hover:underline-offset-0'>Facebook😆 </a>
        <a href='' className='text-blue-500 hover:underline-offset-0'>Twitter🕊️ </a></center><br></br>
        
        
      </div>
      {/* Footer */}
      <hr className='text-gray-500'></hr>
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <p className="text-sm">&copy; 2025 E-commerce. All rights reserved.</p>
      </footer>
    </>
  )
}

export default page
