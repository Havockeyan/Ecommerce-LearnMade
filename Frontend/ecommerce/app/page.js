import React from 'react';
import { Camera, Heart, ShoppingCart, CircleUserRound } from 'lucide-react';
import products from './components/cardimages';
import ColorOptions from './components/dresscolor';
import ProductReview from './components/ProductReview';
import Prefprods from './components/PreferredProds';

const Page = () => {
    return (
        <>
            <div className='bg-gray-300 min-h-screen min-w-screen'>
                <header className="flex justify-between items-center px-6 py-4 bg-white shadow w-full">
                    <div className="flex gap-6 items-center">
                        <h1 className="font-semibold text-2xl">LM-Stores</h1>
                        <h2 className="font-light mt-1 cursor-pointer hover:underline">Home</h2>
                        <h2 className="font-light mt-1 cursor-pointer hover:underline">Collections</h2>
                        <h2 className="font-light mt-1 cursor-pointer hover:underline">Deals</h2>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500" />
                        <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
                        <CircleUserRound className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
                    </div>
                </header>
                <div className="flex items-center justify-center mt-20 gap-8">
                    {/* Main Image */}
                    <img
                        src="https://m.media-amazon.com/images/I/61egW9gVpgL._SX679_.jpg"
                        className="w-auto h-[500px] border-2 object-cover"
                        alt="Main Product"
                    />

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-2">
                        {products.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-[100px] h-[100px] object-cover hover:ring-2 ring-black border cursor-pointer"
                                alt={`Thumbnail ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Product Info */}
                    <div className="ml-10 border-2 bg-gray-200 max-w-xl p-4 ">
                        <h3 className="font-serif text-2xl ml-3 mt-1">White Shirt</h3>
                        <h4 className='ml-3 font-mono text-sm'> Rating: 4.5⭐(100k)</h4>
                        <p className='mt-3 italic font-semibold'>Price:</p>
                        <p className="font-semibold text-xl mt-1 ml-3 ">$100</p>
                        <p className="line-through text-sm text-gray-500 ml-4">$500</p>
                        <p className='text-gray-400 mb-2 text-xs'> Include all GST and Taxes</p>
                        <p className='font-sans text-base font-semibold ml-1 underline '>Highlight</p>
                        <p className='font-semibold font-sans text-center mt-1 '> A Nice Looking Wonderful Shirt, Which makes you stylish and Handsome</p>


                        {/* color options */}
                        <div className='mt-[10%] text-gray-500 font-semibold ml-2 underline'>Colors
                            <ColorOptions />
                        </div>

                        <div className='ml-2 mt-[5%] text-gray-600 font-semibold underline decoration-black '>Size</div>

                        {/* Dress Size */}
                        <div className='flex font-normal text-sm text-center mt-1.5'>
                            <div className='border-black border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer' >XS</div>
                            <div className='border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer'>S</div>
                            <div className='border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer'>M</div>
                            <div className='border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer'>L</div>
                            <div className='border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer'>XL</div>
                            <div className='border-1 h-7 w-7 ml-1 hover:bg-black hover:text-white cursor-pointer'>XXL</div>
                        </div>
                        <div className='font-light text-sm mt-1'>FIND YOUR SIZE | <a href='https://www.grivetoutdoors.com/pages/clothing-size-chart?srsltid=AfmBOorHfCHx9aRxUXvjeouhznG7mkXOOH9hNPtzdCCMu9QvsA3MhlvQ' target='_blank' alt='guide link' className='hover:underline'>MEASUREMENT GUIDE</a></div>
                        {/* Description */}
                        <div className='mt-5 text-gray-700 font-semibold underline decoration-black '>Description</div>
                        <div className='mt-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </div>
                        {/* Add and Buy Buttons */}
                        <button className='box-border border-1 text-sm font-semibold rounded-xl p-2 px-15 mt-4 bg-gray-200 hover:bg-gray-500 cursor-pointer'>ADD TO CART</button>
                        <button className='box-border border-1 text-sm font-semibold rounded-xl p-2 px-15 mt-4 bg-gray-200 hover:bg-gray-500 cursor-pointer ml-2'>BUY NOW</button>


                    </div>

                    {/* Ratings */}
                </div>
                <h1 className='mt-[10%] ml-[10%] font-sans text-black font-semibold underline'>Customer Ratings(Done By AI)</h1>
                <div className='flex mt-5 ml-[8%] font-sans max-h-screen max-w-screen   '>
                    <div>
                        <ProductReview />

                    </div>
                    {/* Suggested Products   */}
                    <div className="ml-[10%] mr-[10%] mb-[5%] border-2 rounded-xl p-4 flex flex-col gap-4 mx-auto max-w-screen-lg text-center bg-gray-200">
                        <div className="text-xl font-semibold underline">Preferred Products</div>
                        <div className="flex flex-wrap justify-center gap-6 mt-2    ">
                            <Prefprods />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default Page;