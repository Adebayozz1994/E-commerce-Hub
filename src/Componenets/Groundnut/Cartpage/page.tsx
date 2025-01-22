'use client';
import { useCart } from '@/Componenets/Groundnut/Cartcontext/page';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  // Generate WhatsApp order message
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderDetails = cartItems
      .map((item) => `*${item.name}* (₦${item.price} x ${item.quantity}) = ₦${item.price * item.quantity}`)
      .join('%0A');

    const totalPrice = `*Total: ₦${getTotalPrice()}*`;
    const encodedMessage = encodeURIComponent(
      `Hello, I would like to place an order:%0A%0A${orderDetails}%0A%0A${totalPrice}`
    );

    const whatsappNumber = '2348166223968'; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded p-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                className="w-16 p-1 border rounded"
              />
              <span>₦{item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="border-t mt-4 pt-2 flex justify-between font-bold">
          <span>Total:</span>
          <span>₦{getTotalPrice()}</span>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded shadow hover:bg-green-700"
        >
          Place Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CartPage;
