import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { totalPrice } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
  
    if (!formData.name.trim())
      newErrors.name = "Name is required";
  
    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";
  
    if (!formData.address.trim())
      newErrors.address = "Address is required";
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    // Fake delay
    setTimeout(() => {
      navigate("/order-success");
    }, 1000);
  };

  return (
    <div className="container py-16 mt-10">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            required
            placeholder="Full Name"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            required
            placeholder="Phone Number"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            required
            placeholder="Delivery Address"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

            <input
            value={formData.name}
            onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
            }
            />

            {errors.name && (
            <p className="text-red-500 text-sm">
                {errors.name}
            </p>
            )}

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3">Payment Method</h3>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Card Payment
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "transfer"}
                  onChange={() => setPaymentMethod("transfer")}
                />
                Bank Transfer
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Pay on Delivery
              </label>
            </div>

            {paymentMethod === "card" && (
                <div className="mt-4 space-y-3">
                    <input
                    type="text"
                    placeholder="Card Number"
                    className="input"
                    />
                    <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        className="input"
                    />
                    </div>
                </div>
            )}

            {paymentMethod === "transfer" && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">Bank Details:</p>
                <p>Bank: Demo Bank</p>
                <p>Account Name: QuickBite Ltd</p>
                <p>Account No: 1234567890</p>
            </div>
            )}

            {paymentMethod === "cod" && (
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                Pay when your order arrives.
            </div>
            )}
            </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl"
          >
            Pay ₦{totalPrice.toLocaleString()}
          </button>
        </form>

        {/* Summary */}
        <div className="p-6 border border-black/10 dark:border-white/20 rounded-xl h-fit">
          <h3 className="font-bold text-xl mb-6">Order Summary</h3>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;