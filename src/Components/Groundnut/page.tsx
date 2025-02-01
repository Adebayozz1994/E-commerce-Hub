"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Groundnut from "../Groundnut/Groundnut.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className={Groundnut.loader4}></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <header
        className={`bg-yellow-100 text-yellow-900 py-4 shadow-lg shadow-yellow-900 transition-all duration-[600ms] ease-in-out ${
          isSticky ? "fixed top-0 left-0 w-full z-50" : "relative"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Brand Name */}
          <Link href="/" passHref className="hover:text-yellow-300 transition duration-300">
            <h1 className="ade text-3xl font-extrabold drop-shadow-md font-playfair">
              The NUTural Bites
            </h1>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/user/mainpage" className="hover:text-yellow-300 transition duration-300">
              E-commerce Home
            </Link>
            <Link href="/user/mainpage/natural-bites" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
            <Link href="/user/mainpage/natural-bites/product" className="hover:text-yellow-300 transition duration-300">
              Products
            </Link>
            <Link href="/user/mainpage/natural-bites/about" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
            <Link href="/user/mainpage/natural-bites/cartpage" className="hover:text-yellow-300 transition duration-300">
              Cart
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-[#FFD700] hover:text-yellow-300"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-[#5C3A21] text-[#FFD700] flex flex-col items-center space-y-4 py-4 shadow-md">
            <Link href="/user/mainpage/" className="hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              E-commerce Home
            </Link>
            <Link href="/user/mainpage/natural-bites/product" className="hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link href="/user/mainpage/natural-bites/cartpage" className="hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            <Link href="/user/mainpage/natural-bites/about" className="hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </nav>
        )}
      </header>

      {/* Push Content Down When Navbar is Fixed */}
      <div className={isSticky ? "h-16" : ""}></div>

      {/* Bottom Navbar with Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#8B4513] text-[#FFD700] shadow-xl z-50 py-2">
        <div className="flex justify-around items-center h-11">
          <Link href="/user/mainpage/natural-bites" className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4 rounded-lg">
            <i className="fas fa-home text-lg"></i>
            <span className="block text-sm"> Home</span>
          </Link>
          <Link href="/user/mainpage/natural-bites/product" className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4 rounded-lg">
            <i className="fas fa-box text-lg"></i>
            <span className="block text-sm">Products</span>
          </Link>
          <Link href="/user/mainpage/natural-bites/cartpage" className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4 rounded-lg">
            <i className="fas fa-shopping-cart text-lg"></i>
            <span className="block text-sm">Cart</span>
          </Link>
          <button onClick={() => router.back()} className="flex flex-col items-center hover:bg-[#5C3A21] py-2 px-4 rounded-lg">
            <i className="fas fa-arrow-left text-lg"></i>
            <span className="block text-sm">Back</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
