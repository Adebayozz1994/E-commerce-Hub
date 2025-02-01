'use client';
import { useCart } from '@/Components/Groundnut/Cartcontext/page';
// import Navbar from '../page';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter(); 

  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderHeader = "*🛒 Order Summary:* \n";
    const tableHeader = "*Item* | *Qty* | *Unit Price* | *Total* \n";
    const tableDivider = "-------------------------------------\n";

    const orderDetails = cartItems
      .map((item) => {
        return `${item.name} | ${item.quantity} | ₦${item.price} | ₦${item.price * item.quantity}`;
      })
      .join("\n");

    const totalPrice = `\n*Total: ₦${getTotalPrice()}*`;
    const encodedMessage = encodeURIComponent(
      `${orderHeader}${tableHeader}${tableDivider}${orderDetails}${totalPrice}`
    );

    const whatsappNumber = '+2348064514572';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* <Navbar /> */}
      <h1 className="text-3xl font-bold mb-6 text-red-800 mt-11 text-center">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
        {cartItems.length > 0 ? (
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-200 text-left">
                <th className="border border-gray-400 px-4 py-2 text-red-800">Item</th>
                <th className="border border-gray-400 px-4 py-2 text-center text-red-800">Quantity</th>
                <th className="border border-gray-400 px-4 py-2 text-center text-red-800">Unit Price</th>
                <th className="border border-gray-400 px-4 py-2 text-center text-red-800">Total</th>
                <th className="border border-gray-400 px-4 py-2 text-center text-red-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border border-gray-300 bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="w-16 p-1 border rounded text-center bg-white"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">₦{item.price}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">₦{item.price * item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-red-800 text-lg">
              <span>Total:</span>
              <span>₦{getTotalPrice()}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-[#8B4513] text-white py-2 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Place Order on WhatsApp
            </button>
          </>
        )}
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
  );
};

export default CartPage;