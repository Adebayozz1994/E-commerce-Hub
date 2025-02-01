import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";


const ContactPage = () => {
  const router = useRouter(); 
  return (
    <div>
      <div className="min-h-screen bg-yellow-200 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Contact Us</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-800">Phone & WhatsApp</h2>
          <p className="text-red-800">
            📞 <a href="https://wa.me/08064514572" className="underline">08064514572</a>
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-800">Address</h2>
          <p className="text-red-800">🏠 Stadium Area, Behind Stadium Baptist Church, Ogbomosho, Oyo State</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-800">Payment Methods</h2>
          <p className="text-red-800">✔️ We accept bank transfers</p>
          <p className="text-red-800">✔️ Pay on Delivery available</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-11">
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738101052/IMG-20250128-WA0034_xbm0tc.jpg" alt="logo" width={350} height={250} className="rounded-lg shadow-md" unoptimized/>
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738142803/IMG-20250128-WA0017_efjpm3.jpg" alt="groundnut image" width={350} height={250} className="rounded-lg shadow-md" unoptimized/>
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

export default ContactPage;
