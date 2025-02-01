import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter(); 
  return (
    <div>
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-red-800 mb-6">About The NUTural Bites</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Story</h2>
        <p className="text-red-800 mb-6">
          Here at The NUTural Bites , we believe in the purity of our product. No additives or preservatives – 
          just pure, natural groundnuts which are roasted to perfection, delivering unbeatable flavor in every bite.
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Roasting Process</h2>
        <p className="text-red-800 mb-6">
          Our roasting process ensures that every nut is treated with care, resulting in a snack that s not only 
          delicious but also crunchy, fresh, and full of nutrients. 
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Commitment</h2>
        <p className="text-red-800 mb-6">
          At The NUTural Bites, we re dedicated to creating a healthier, more sustainable snacking experience 
          that s perfect for anyone looking for a natural, wholesome treat.
        </p>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4 mb-20">
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142803/IMG-20250128-WA0017_efjpm3.jpg" 
               alt="Fresh Groundnuts" width={400} height={250} className="rounded-lg shadow-md"  unoptimized/>
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738101052/IMG-20250128-WA0034_xbm0tc.jpg" 
               alt="Groundnut Processing" width={400} height={250} className="rounded-lg shadow-md"  unoptimized/>
      </div>
    </div>
              {/* Bottom Navbar with Icons */}
              <nav className="fixed bottom-0 left-0 w-full bg-[#8B4513] text-yellow-500 shadow-md z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/user/mainpage/natural-bites">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-home text-lg"></i>
              <span className="block text-sm">Home</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/product">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-box text-lg"></i>
              <span className="block text-sm">Products</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/cartpage">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="block text-sm">Cart</span>
            </span>
          </Link>
          <button
            onClick={() => router.back()}
            className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4"
          >
            <i className="fas fa-arrow-left text-lg"></i>
            <span className="block text-sm">Back</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default About;
