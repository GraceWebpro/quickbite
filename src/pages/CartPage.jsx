import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { flyToCart } from "../utils/flyToCart";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    totalPrice,
  } = useCart();

  const items = Object.values(cartItems);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          to="/meals"
          className="bg-primary text-white px-6 py-3 rounded-xl"
        >
          Browse Meals
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16 mt-10">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {Object.values(items).map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 rounded-xl border border-black/10 dark:border-white/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="opacity-60">
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => removeFromCart(item.id)}                    
                    className="px-3 py-1 border border-black/10 dark:border-white/20 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={(e) => {
                        flyToCart?.(e);
                        addToCart(item);
                    }}
                    className="px-3 py-1 border border-black/10 dark:border-white/20 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="p-6 border border-black/10 dark:border-white/20 rounded-xl h-fit">
          <h3 className="font-bold text-xl mb-6">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>

          <Link
            to="/checkout"
            className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;