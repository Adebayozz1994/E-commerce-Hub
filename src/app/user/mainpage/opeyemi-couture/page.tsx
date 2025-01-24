'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/digital-art-style-illustration-fashion-designer_23-2151537701.jpg?semt=ais_hybrid')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Crafting Dreams into Reality</h1>
          <p className="text-lg md:text-2xl">Custom Designs | Premium Fabrics | Timeless Elegance</p>
          <Link href="#portfolio">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Explore Portfolio
            </button>
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center md:text-left md:flex items-center">
          <Image
            src="https://img.freepik.com/free-photo/digital-art-style-illustration-fashion-designer_23-2151537701.jpg?semt=ais_hybrid"
            alt="Designer"
            width={300}
            height={300}
            className="rounded-full mx-auto md:mr-6 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet the Designer</h2>
            <p className="text-lg">
              I’m [Designer Name], a passionate fashion designer specializing in creating bespoke designs that tell a
              story. With a keen eye for detail and a love for elegance, I aim to bring out the best in every piece of
              fabric.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'https://img.freepik.com/premium-photo/woman-working-collage_274689-35709.jpg?semt=ais_hybrid',
              'https://img.freepik.com/free-photo/clothing-workshop-with-material_23-2149007414.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid',
              'https://img.freepik.com/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414738.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid',
              'https://img.freepik.com/premium-photo/elegant-embroidery-fashion-portrait_749638-51057.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid',
              'https://img.freepik.com/premium-photo/woman-sits-table-with-piece-art-it_1285256-2038.jpg?semt=ais_hybrid',
              'https://img.freepik.com/premium-photo/woman-is-working-with-wooden-board-with-man-background_1276913-22765.jpg?semt=ais_hybrid',
              'https://img.freepik.com/free-photo/medium-shot-woman-clothes-shopping_23-2150639876.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid',
              'https://img.freepik.com/premium-photo/woman-working-collage_274689-35709.jpg?semt=ais_hybrid',
              'https://img.freepik.com/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414738.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid',
            ].map((img, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={img}
                    alt={`Portfolio Image ${idx + 1}`}
                    layout="intrinsic"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                  <p className="text-white text-lg font-semibold">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">
            Whether you are looking for custom designs or premium fabrics, I’m here to help. Let’s create something extraordinary together.
          </p>
          
          {/* Contact Me Button */}
          <button
            onClick={toggleModal}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> <a href="https://wa.me/+2348166223968" className="text-blue-600">+2348166223968 (Click to Contact)</a>
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> R08 Katangua Street, Ogbomosho, Nigeria
            </p>
            <button
              onClick={toggleModal}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} [Opeyemi Couture]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
