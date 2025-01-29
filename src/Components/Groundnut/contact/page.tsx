import React from 'react';
import Image from 'next/image';
import Navbar from '../page';


const ContactPage = () => {
  return (
    <div>
        <Navbar/>
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
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738101052/IMG-20250128-WA0034_xbm0tc.jpg" alt="logo" width={350} height={250} className="rounded-lg shadow-md" />
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738142803/IMG-20250128-WA0017_efjpm3.jpg" alt="groundnut image" width={350} height={250} className="rounded-lg shadow-md" />
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
