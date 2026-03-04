import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSuccess = () => {
  const { clearCart } = useCart();

  const orderId = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center p-10 rounded-2xl border shadow-lg">
        
        <div className="text-green-500 text-5xl mb-6">✔</div>

        <h1 className="text-3xl font-bold mb-4">
          Order Successful!
        </h1>

        <p className="opacity-70 mb-2">
          Thank you for your order.
        </p>

        <p className="font-semibold mb-6">
          Order ID: #{orderId}
        </p>

        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;