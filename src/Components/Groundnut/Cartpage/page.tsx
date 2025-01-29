'use client';
import { useCart } from '@/Components/Groundnut/Cartcontext/page';
import Navbar from '../page';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  // Generate WhatsApp order message in a readable format
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderHeader = "*🛒 Order Summary:   ";
    const tableHeader = `*Item*| *Qty* | *Unit Price* | *Total*%0A`;
    const tableDivider = `-------------------------------------   `;

    const orderDetails = cartItems
      .map((item) => {
        const itemName = item.name.padEnd(10, ' ');
        const quantity = item.quantity.toString().padEnd(3, ' ');
        const unitPrice = ` ₦${item.price}`.padEnd(10, ' ');
        const total = ` ₦${item.price * item.quantity}`;

        return `${itemName} | ${quantity} | ${unitPrice} | ${total}`;
      })
      .join("  ");

    const totalPrice = `  Total: ₦${getTotalPrice()}*`;
    const encodedMessage = encodeURIComponent(
      `${orderHeader}${tableHeader}${tableDivider}${orderDetails}${totalPrice}`
    );

    const whatsappNumber = '+2348064514572';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-red-800 mt-11">Your Cart</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-yellow-200 text-left">
                <th className="border border-gray-300 px-4 py-2 text-red-800">Item</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-red-800">Quantity</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-red-800">Unit Price</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-red-800">Total</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-red-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="w-16 p-1 border rounded text-center"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">₦{item.price}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">₦{item.price * item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
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
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-red-800">
              <span>Total:</span>
              <span>₦{getTotalPrice()}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-[#8B4513] text-white py-2 rounded shadow hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Place Order on WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
