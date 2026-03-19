import React, { useState } from 'react'
import { useCart } from "../../../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa"
import { flyToCart } from "../../../utils/flyToCart";
import { useNavigate, Link } from "react-router-dom";
import './cart.css'

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    clearCart,
    subtotal,
    deliveryFee,
    totalPrice,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    notes: "",
  });

  const navigate = useNavigate();

  // const message = `
  //   🍔 *QuickBite Order*

  //   🧾 *Items:*
  //   ${Object.values(cartItems)
  //     .map((i) => `• ${i.name} × ${i.qty} = ${(i.price * i.qty).toLocaleString()}`)
  //     .join("\n")}

  //   💰 *Total:* ₦${totalPrice}

  //   💰 *Total:* ₦${totalPrice}

  //   👤 *Name:* ${name}
  //   📍 *Address:* ${address}
  //   📞 *Phone:* ${phone}

  //   📝 *Notes:* ${notes || "None"}

  //   Thank you!
  // `;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose} // ✅ use prop
        className={`cart-overlay bg-black/40 backdrop-blur-sm z-[90]
        transition ${isOpen ? "open" : ""}`}
      />

      {/* Drawer */}
      <div
        className={`cart-drawer bg-white dark:bg-dark
        backdrop-blur-xl border-l border-white/20
        shadow-2xl
        ${isOpen ? "open" : ""}`}
      >
        {/* Header */}
        <div className="p-6 flex justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        <div className="cart-items space-y-4">
          {Object.keys(cartItems).length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-3">
                Your cart is empty
              </h2>
            
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any meals yet.
              </p>
            
              <Link
                to="/meals"
                className="px-6 py-3 bg-primary text-white rounded-xl"
              >
                Browse Meals
              </Link>
            </div>
          )}

          {Object.values(cartItems).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-xl
              bg-white/40 dark:bg-white/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              {/* Middle Section */}
              <div className="flex-1">
                <h4 className="font-semibold text-sm">
                  {item.name}
                </h4>

                <p className="text-sm opacity-60">
                  ₦{item.price.toLocaleString()}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2 bg-gray-100 dark:bg-dark px-2 py-1 rounded-lg w-fit">
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:scale-110 transition"
                  >
                    <FaMinus size={12} />
                  </button>

                  <span className="text-sm font-medium">
                    {item.qty}
                  </span>

                  <button
                    onClick={(e) => {
                      flyToCart?.(e);
                      addToCart(item);
                    }}
                    className="hover:scale-110 transition"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="text-right">
                <p className="font-semibold">
                  ₦{(item.price * item.qty).toLocaleString()}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-6 border-t pt-4 space-y-2 text-sm px-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Bottom Actions */}
        {Object.keys(cartItems).length > 0 && (
          <div className="cart-footer space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
             onClick={() => {
              onClose();
              navigate("/cart");
            }}
              className="w-full bg-gradient-to-r from-primary to-secondary
              text-white py-3 rounded-xl"
            >
              View Cart
            </button>

            <button
              onClick={clearCart}
              className="w-full border py-2 rounded-xl"
            >
              Clear Cart
            </button>

            </div>

        
            <div
              onClick={() => setShowCheckout(true)}
              className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold hover:scale-105 cursor-pointer transition"
            >
              Checkout via WhatsApp
            </div>

          <p className="text-center text-sm text-gray-500 mt-2">
            You’ll confirm your details on WhatsApp before we process your order.
          </p>
          </div>
        )}
      </div>

      {showCheckout && (
  <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={() => setShowCheckout(false)}
    />

    {/* Modal */}
    <div
      className="
        relative w-full sm:max-w-md
        bg-white dark:bg-dark
        rounded-t-3xl sm:rounded-2xl
        p-5 sm:p-6
        shadow-2xl
        animate-slideUp
        max-h-[90vh] overflow-y-auto
      "
    >
      {/* Drag handle (mobile feel) */}
      <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />

      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
        Complete Your Order
      </h2>

      {/* Order summary */}
      <p className="text-sm text-gray-500 mb-4 text-center sm:text-left">
        {Object.values(cartItems).length} items • ₦{totalPrice.toLocaleString()}
      </p>

      {/* Inputs */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Delivery Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full border p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full border p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <p className="text-xs text-gray-500">
          We’ll use your WhatsApp number to contact you about this order.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setShowCheckout(false)}
          className="w-full border py-3 rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!form.name || !form.address) {
              alert("Please fill all required fields");
              return;
            }

            const message = `
🍔 *QuickBite Order*

🧾 *Items:*
${Object.values(cartItems)
  .map((i) => `• ${i.name} × ${i.qty} = ₦${(i.price * i.qty).toLocaleString()}`)
  .join("\n")}

💰 *Total:* ₦${totalPrice}

👤 *Name:* ${form.name}
📍 *Address:* ${form.address}

📝 *Notes:* ${form.notes || "None"}

Thank you!
`;

            const url = `https://wa.me/2347043421913?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");

            setShowCheckout(false);
          }}
          className="w-full bg-green-500 text-white py-3 rounded-xl disabled:opacity-50"
        >
          Continue to WhatsApp
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default CartDrawer;