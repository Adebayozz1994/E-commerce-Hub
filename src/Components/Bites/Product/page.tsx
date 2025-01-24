'use client';
import { useCart } from '@/Components/Groundnut/Cartcontext/page';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Import useRouter

const products = [
  {
    id: 1,
    name: 'Organic Groundnuts',
    description: 'Freshly harvested organic groundnuts.',
    price: 1500,
    image: 'https://img.freepik.com/free-photo/peanuts-shells-wood_1150-18413.jpg',
  },
  {
    id: 2,
    name: 'Salted Groundnuts',
    description: 'Deliciously roasted and salted groundnuts.',
    price: 2000,
    image: 'https://img.freepik.com/free-photo/groundnuts-heart-shape-plate-put-sack-groundnuts_1150-34403.jpg',
  },
  {
    id: 3,
    name: 'Honey Coated Groundnuts',
    description: 'Sweet and crunchy honey-coated groundnuts.',
    price: 2500,
    image: 'https://img.freepik.com/free-photo/peanuts_1308-39977.jpg',
  },
];

const Product = () => {
    const router = useRouter(); // Initialize useRouter
  const { addToCart, cartItems } = useCart();

  // Calculate total quantity of items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md">
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
            onClick={() => router.back()} // Go back to the previous page
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
