'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";

const MainPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLoader, setCurrentLoader] = useState("E-commerce Hub...");
  const [loaderColor, setLoaderColor] = useState("#4a90e2"); 

  const ecomSites = [
    { 
      id: 1, 
      name: "The NUTural-Bites", 
      description: "Explore the beautiful and healthy Groundnut", 
      link: "mainpage/natural-bites", 
      loader: " NUTural-Bites...", 
      loaderColor: "#32CD32"  

    },
    { 
      id: 2, 
      name: "ORAJ Edibles", 
      description: "Your trusted brand for quality and hygienic food items.", 
      link: "mainpage/oraj-edibles", 
      loader: "ORAJ Edibles...", 
      loaderColor: "#4a90e2"
    },
    { 
      id: 3, 
      name: "Opeyemi Couture", 
      description: "Get the best style with us in fashion and tailoring material.", 
      link: "mainpage/opeyemi-couture", 
      loader: "Opeyemi Couture...", 
      loaderColor: "#8A2BE2"
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (currentLoader) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [currentLoader]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <div 
          className="loader mb-4" 
          data-loader-text={currentLoader} 
          style={{ color: loaderColor }} 
        ></div>
        {/* <p className="text-gray-700 text-lg font-medium">{currentLoader}</p> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-8 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">E-Commerce Hub</h1>
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link href="/">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">About</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">Contact</div>
              </Link>
            </li>
          </ul>
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
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">About</div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div onClick={toggleMenu} className="text-gray-700 font-semibold hover:text-indigo-600 cursor-pointer text-lg">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Explore Our E-Commerce Sites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {ecomSites.map((site) => (
            <Link href={site.link} key={site.id}>
              <div
                className="bg-white rounded-lg p-8 flex flex-col items-center justify-between shadow-inner hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer h-72"
                onClick={() => {
                  setCurrentLoader(site.loader);
                  setLoaderColor(site.loaderColor); 
                }}
              >
                <h2 className="text-3xl font-bold text-indigo-600 mb-4">{site.name}</h2>
                <p className="text-gray-600 text-center mb-6 text-lg">{site.description}</p>
                <div className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition">Visit {site.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
