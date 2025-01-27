'use client';
import { useCart } from '@/Components/Chrisia/Cartcontext/page';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: 'Organic Groundnuts',
    description: 'Freshly harvested organic groundnuts.',
    price: 1500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979327/IMG-20250127-WA0019_zble46.jpg',
  },
  {
    id: 2,
    name: 'Salted Groundnuts',
    description: 'Deliciously roasted and salted groundnuts.',
    price: 2000,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979328/IMG-20250127-WA0020_nyjfdz.jpg',
  },
  {
    id: 3,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979324/IMG-20250127-WA0017_kcnt6v.jpg',
  },
  {
    id: 4,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0013_dfbsra.jpg',
  },
  {
    id: 5,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0015_fukhg5.jpg',
  },
  {
    id: 6,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0011_x8f9ee.jpg',
  },
  {
    id: 7,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0009_macnq4.jpg',
  },
  {
    id: 8,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0016_vl5dnf.jpg',
  },
  {
    id: 9,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0012_ixsgvy.jpg',
  },
  {
    id: 10,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0005_hmuilr.jpg',
  },
  {
    id: 11,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979322/IMG-20250127-WA0007_huxvyc.jpg',
  },
  {
    id: 12,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979321/IMG-20250127-WA0004_w0pynn.jpg',
  },
  {
    id: 13,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979321/IMG-20250127-WA0008_nrfklk.jpg',
  },
  {
    id: 14,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979321/IMG-20250127-WA0001_uwfkvs.jpg',
  },
  {
    id: 15,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737979321/IMG-20250127-WA0003_jjw9kp.jpg',
  },
];

const Product = () => {
  const router = useRouter(); 
  const { addToCart, cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-[#970942] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Our Products</h1>
          <Link href="/user/mainpage/chrisia-lure-scents/cartpage">
            <button className="bg-white text-[#970942] px-4 py-2 rounded shadow hover:bg-gray-100">
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
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-[#970942] font-bold mb-4">₦{product.price}</p>
                <button
                  onClick={() =>
                    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
                  }
                  className="bg-[#970942] text-white px-4 py-2 rounded shadow hover:bg-[#87083a]"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {/* Bottom Navbar with Icons */}
          <nav className="fixed bottom-0 left-0 w-full bg-[#970942] text-white shadow-md z-50">
            <div className="flex justify-around items-center h-16">
              <Link href="/user/mainpage/chrisia-lure-scents">
                <span className="text-white flex flex-col items-center hover:bg-[#87083a] py-2 px-4">
                  <i className="fas fa-home text-lg"></i>
                  <span className="block text-sm">Home</span>
                </span>
              </Link>
              <Link href="/user/mainpage/chrisia-lure-scents/product">
                <span className="text-white flex flex-col items-center hover:bg-[#87083a] py-2 px-4">
                  <i className="fas fa-box text-lg"></i>
                  <span className="block text-sm">Products</span>
                </span>
              </Link>
              <Link href="/user/mainpage/chrisia-lure-scents/cartpage">
                <span className="text-white flex flex-col items-center hover:bg-[#87083a] py-2 px-4">
                  <i className="fas fa-shopping-cart text-lg"></i>
                  <span className="block text-sm">Cart</span>
                </span>
              </Link>
              <button
                onClick={() => router.back()}
                className="text-white flex flex-col items-center hover:bg-[#87083a] py-2 px-4"
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
