'use client';
import React, { useState } from "react";
import Link from "next/link";

const MainPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ecomSites = [
    { id: 1, name: "Groundnut Store", description: "Explore the beautifull and healthy.", link: "mainpage/groundnut" },
    { id: 2, name: "Tech Store", description: "Discover cutting-edge gadgets and electronics.", link: "/tech" },
    { id: 3, name: "Grocery Store", description: "Shop for fresh groceries delivered to your door.", link: "/grocery" },
    { id: 4, name: "Home Decor", description: "Find beautiful furniture and decor for your home.", link: "/home-decor" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-8 py-6">
          {/* Brand */}
          <h1 className="text-3xl font-bold text-indigo-600">E-Commerce Hub</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link href="/">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                  Contact
                </div>
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-700"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-100">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/">
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Explore Our E-Commerce Sites
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {ecomSites.map((site) => (
            <Link href={site.link} key={site.id}>
              <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-between shadow-inner hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer h-72">
                <h2 className="text-3xl font-bold text-indigo-600 mb-4">{site.name}</h2>
                <p className="text-gray-600 text-center mb-6 text-lg">{site.description}</p>
                <div className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition">
                  Visit {site.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
  <div className="flex justify-around py-3">
    <Link href="/">
      <div className="text-indigo-600 flex flex-col items-center hover:bg-gray-200 py-2 px-4 rounded-md transition-all duration-300">
        <i className="fas fa-home text-xl mb-1"></i>
        <span className="text-sm">Home</span>
      </div>
    </Link>
    <Link href="/about">
      <div className="text-indigo-600 flex flex-col items-center hover:bg-gray-200 py-2 px-4 rounded-md transition-all duration-300">
        <i className="fas fa-info-circle text-xl mb-1"></i>
        <span className="text-sm">About</span>
      </div>
    </Link>
    <Link href="/contact">
      <div className="text-indigo-600 flex flex-col items-center hover:bg-gray-200 py-2 px-4 rounded-md transition-all duration-300">
        <i className="fas fa-phone text-xl mb-1"></i>
        <span className="text-sm">Contact</span>
      </div>
    </Link>
  </div>
</nav>
    </div>
  );
};

export default MainPage;
