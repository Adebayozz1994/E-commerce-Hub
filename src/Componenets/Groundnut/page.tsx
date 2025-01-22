"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Name */}
          <Link href="/" passHref>
            <h1 className="text-2xl sm:text-xl font-bold">Groundnut Store</h1>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-4">
          <Link href="/user/mainpage">
              <span className="text-white hover:underline">E-commerce Home</span>
            </Link>
            <Link href="/user/mainpage/groundnut">
              <span className="text-white hover:underline">Home</span>
            </Link>
            <Link href="/user/mainpage/groundnut/product">
              <span className="text-white hover:underline">Products</span>
            </Link>
            <Link href="/user/mainpage/groundnut/cartpage">
              <span className="text-white hover:underline">Cart</span>
            </Link>
            <Link href="/user/mainpage/groundnut/about">
              <span className="text-white hover:underline">About</span>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
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

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-green-700 text-white flex flex-col items-center space-y-4 py-4">
            <Link href="/user/mainpage/groundnut">
              <span
                className="text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link href="/user/mainpage/groundnut/product">
              <span
                className="text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </span>
            </Link>
            <Link href="/user/mainpage/groundnut/cartpage">
              <span
                className="text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </span>
            </Link>
            <Link href="/user/mainpage/groundnut/about">
              <span
                className="text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About
              </span>
            </Link>
          </nav>
        )}
      </header>

      {/* Bottom Navbar with Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-green-600 text-white shadow-md">
        <div className="flex justify-around py-2">
          <Link href="/user/mainpage/groundnut">
            <span className="text-white flex-1 text-center hover:bg-green-700 py-2">
              <i className="fas fa-home"></i>
              <span className="block text-sm">Home</span>
            </span>
          </Link>
          <Link href="/user/mainpage/groundnut/product">
            <span className="text-white flex-1 text-center hover:bg-green-700 py-2">
              <i className="fas fa-box"></i>
              <span className="block text-sm">Products</span>
            </span>
          </Link>
          <Link href="/user/mainpage/groundnut/cartpage">
            <span className="text-white flex-1 text-center hover:bg-green-700 py-2">
              <i className="fas fa-shopping-cart"></i>
              <span className="block text-sm">Cart</span>
            </span>
          </Link>
          <Link href="/user/mainpage/groundnut/about">
            <span className="text-white flex-1 text-center hover:bg-green-700 py-2">
              <i className="fas fa-info-circle"></i>
              <span className="block text-sm">About</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
