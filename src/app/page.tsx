'use client';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: "easeInOut" }} // Slower background animation
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Slower and smoother
      >
        Welcome to E-Commerce Hub
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-white text-center max-w-2xl mb-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }} // Starts after heading
      >
        Explore our diverse range of products across multiple e-commerce platforms. Click below to start your journey!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }} // Starts after paragraph
      >
        <Link
          href="user/mainpage"
          className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition"
        >
          Enter the Marketplace
        </Link>
      </motion.div>
    </motion.div>
  );
}
