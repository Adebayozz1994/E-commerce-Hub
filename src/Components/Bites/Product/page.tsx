'use client';
import { useCart } from '@/Components/Bites/Cartcontext/page';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation"; 

const products = [
  {
    id: 1,
    name: 'TAPIOCA',
    description: 'Smart choices, tasty results.',
    price: 1500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738061248/IMG-20250128-WA0007_c31ayw.jpg',
  },
  {
    id: 2,
    name: 'BEAN-FLOUR',
    description: 'Smart choices, tasty results.',
    price: 2000,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738061248/IMG-20250128-WA0005_lj7mkl.jpg',
  },
  {
    id: 3,
    name: 'PUFF-PUFF MIX',
    description: 'Smart choices, tasty results.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738061249/IMG-20250128-WA0003_binf2s.jpg',
  },
  {
    id: 4,
    name: 'kuli-kuli',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738061248/IMG-20250127-WA0023_iqhle2.jpg',
  },
];

const Product = () => {
    const router = useRouter(); 
  const { addToCart, cartItems } = useCart();

  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
   <header className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center px-4">
    <h1 className="text-2xl font-bold">Oraj-Edibles</h1>
    <Link href="/user/mainpage/oraj-edibles/cartpage">
      <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100">
        View Cart {totalItems > 0 && `(${totalItems})`}
      </button>
    </Link>
  </div>
</header>


      <section className="py-16 bg-gray-100 mb-11">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Explore Our Products</h2>
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
                <p className="text-blue-600 font-bold mb-4">₦{product.price}</p>
                <button
                  onClick={() =>
                    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
           {/* Bottom Navbar with Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/user/mainpage/oraj-edibles">
            <span className="text-white flex flex-col items-center hover:bg-blue-700 py-2 px-4">
              <i className="fas fa-home text-lg"></i>
              <span className="block text-sm">Home</span>
            </span>
          </Link>
          <Link href="/user/mainpage/oraj-edibles/products">
            <span className="text-white flex flex-col items-center hover:bg-blue-700 py-2 px-4">
              <i className="fas fa-box text-lg"></i>
              <span className="block text-sm">Products</span>
            </span>
          </Link>
          <Link href="/user/mainpage/oraj-edibles/cartpage">
            <span className="text-white flex flex-col items-center hover:bg-blue-700 py-2 px-4">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="block text-sm">Cart</span>
            </span>
          </Link>
          <button
            className="text-white flex flex-col items-center hover:bg-blue-700 py-2 px-4"
            onClick={() => router.back()}
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
