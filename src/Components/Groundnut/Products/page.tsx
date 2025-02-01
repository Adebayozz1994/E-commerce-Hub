'use client';
import { useCart } from '@/Components/Groundnut/Cartcontext/page';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Jar of Groundnuts',
    description: 'Expertly roasted groundnuts perfect for parties, gatherings, or as a special treat for those who demand the best',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142798/IMG-20250128-WA0023_cadmk7.jpg',
  },
  {
    id: 2,
    name: '35cl bottle of roasted Groundnuts',
    description: 'Our expertly roasted groundnuts in a 35cl bottle, perfect for on-the-go snacking or sharing with friends and family',
    price: 1500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142798/IMG-20250128-WA0027_dx0hsl.jpg',
  },
  {
    id: 3,
    name: '50cl bottle of roasted Groundnuts',
    description: 'Indulge in more of our delicious roasted groundnuts with our 50cl bottle, perfect for parties, gatherings, or as a special treat for those who demand the best',
    price: 2000,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142799/IMG-20250128-WA0025_xvgnsy.jpg',
  },
];

const Product = () => {
   const router = useRouter(); 
  const { addToCart, cartItems } = useCart();
   const [isSticky, setIsSticky] = useState<boolean>(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
  return (
    <>
      <header  className={`bg-yellow-100 text-yellow-900 py-4 shadow-lg shadow-yellow-900 transition-all duration-[600ms] ease-in-out ${
          isSticky ? "fixed top-0 left-0 w-full z-50" : "relative"
        }`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Our Products</h1>
          <Link href="/user/mainpage/natural-bites/cartpage">
            <button className="bg-yellow-500 text-[#8B4513] px-4 py-2 rounded shadow hover:bg-yellow-400">
              View Cart {totalItems > 0 && `(${totalItems})`}
            </button>
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gray-100 mb-11">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 w-full h-[200px] object-cover"
                  unoptimized
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-[#8B4513] font-bold mb-4">₦{product.price}</p>
                <button
                  onClick={() =>
                    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
                  }
                  className="bg-[#8B4513] text-yellow-500 px-4 py-2 rounded shadow hover:bg-[#8B4513]/80"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
           {/* Bottom Navbar with Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#8B4513] text-yellow-500 shadow-md z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/user/mainpage/natural-bites">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-home text-lg"></i>
              <span className="block text-sm">Home</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/product">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-box text-lg"></i>
              <span className="block text-sm">Products</span>
            </span>
          </Link>
          <Link href="/user/mainpage/natural-bites/cartpage">
            <span className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="block text-sm">Cart</span>
            </span>
          </Link>
          <button
            onClick={() => router.back()}
            className="text-yellow-500 flex flex-col items-center hover:bg-[#8B4513]/80 py-2 px-4"
          >
            <i className="fas fa-arrow-left text-lg"></i>
            <span className="block text-sm">Back</span>
          </button>
        </div>
      </nav>
        </div>
      </section>
    </>
  );
};

export default Product;
