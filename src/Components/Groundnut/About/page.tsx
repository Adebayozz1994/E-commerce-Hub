import React from 'react';
import Image from 'next/image';
import Navbar from '../page';


const About = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-red-800 mb-6">About Us</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Mission</h2>
        <p className="text-red-800 mb-6">
          Our mission is to provide the highest quality groundnuts, sourced responsibly and processed with care,
          ensuring freshness, taste, and nutritional value for our customers.
        </p>
        
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-red-800 mb-6">
          <li>Quality - We never compromise on the freshness and taste of our groundnuts.</li>
          <li>Integrity - We are committed to fair trade and ethical sourcing.</li>
          <li>Customer Satisfaction - Your happiness is our priority.</li>
          <li>Innovation - We continuously improve our processing methods to ensure excellence.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Promise</h2>
        <p className="text-red-800 mb-6">
          We promise to deliver premium groundnuts that are healthy, delicious, and perfect for every occasion.
          Whether you love them roasted, fried, or as peanut butter, we guarantee the best quality in every bite.
        </p>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4 mb-20">
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142803/IMG-20250128-WA0017_efjpm3.jpg" alt="Fresh Groundnuts" width={400} height={250} className="rounded-lg shadow-md" />
        <Image src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738101052/IMG-20250128-WA0034_xbm0tc.jpg" alt="Groundnut Processing" width={400} height={250} className="rounded-lg shadow-md" />
      </div>
    </div>

    </div>
  );
};

export default About;
