"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Groundnut from "../Groundnut/Groundnut.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* Custom loader */}
        <div className={Groundnut.loader4}></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#8B4513] text-[#FFD700] py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Name */}
          <Link href="/" passHref>
            <h1 className="text-2xl sm:text-xl font-bold text-yellow-500">NUTural Bites</h1>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/user/mainpage">
              <span className="hover:underline text-yellow-500">E-commerce Home</span>
            </Link>
            <Link href="/user/mainpage/natural-bites">
              <span className="hover:underline text-yellow-500ay-800">Home</span>
            </Link>
            <Link href="/user/mainpage/natural-bites/product">
              <span className="hover:underline text-yellow-500">Products</span>
            </Link>
            <Link href="/user/mainpage/natural-bites/cartpage">
              <span className="hover:underline text-yellow-500">Cart</span>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-[#FFD700]"
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
          <nav className="md:hidden bg-[#5C3A21] text-[#FFD700] flex flex-col items-center space-y-4 py-4">
            <Link href="/user/mainpage/">
              <span
                className="hover:underline text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                E-commerce Home
              </span>
            </Link>
            <Link href="/user/mainpage/natural-bites/product">
              <span
                className="hover:underline text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </span>
            </Link>
            <Link href="/user/mainpage/natural-bites/cartpage">
              <span
                className="hover:underline text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </span>
            </Link>
            <Link href="/user/mainpage/natural-bites/about">
              <span
                className="hover:underline text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </span>
            </Link>
          </nav>
        )}
      </header>

      {/* Bottom Navbar with Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#8B4513] text-[#FFD700] shadow-md z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/user/mainpage">
            <span className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4">
              <i className="fas fa-home text-lg"></i>
              <span className="block text-sm text-yellow-500">E-commerce Home</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/product">
            <span className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4">
              <i className="fas fa-box text-lg"></i>
              <span className="block text-sm text-yellow-500">Products</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/cartpage">
            <span className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="block text-sm text-yellow-500">Cart</span>
            </span>
          </Link>
          <button
            onClick={() => router.back()}
            className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4"
          >
            <i className="fas fa-arrow-left text-lg"></i>
            <span className="block text-sm text-yellow-500">Back</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
