import React from 'react';
import Image from 'next/image';
import Navbar from '../page';

const About = () => {
  return (
    <div>
        <Navbar />
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
               alt="Fresh Groundnuts" width={400} height={250} className="rounded-lg shadow-md" />
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738101052/IMG-20250128-WA0034_xbm0tc.jpg" 
               alt="Groundnut Processing" width={400} height={250} className="rounded-lg shadow-md" />
      </div>
    </div>

    </div>
  );
};

export default About;
