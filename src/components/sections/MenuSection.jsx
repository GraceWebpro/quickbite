import React, { useState } from "react"
import { FaStar, FaPlus, FaMinus } from "react-icons/fa"
import { useCart } from "../../context/CartContext";
import { flyToCart } from "../../utils/flyToCart";
import { mealsData } from "./../../data/meals";

const MenuSection = () => {
  const [cart, setCart] = useState({})
  const [selectedItem, setSelectedItem] = useState(null)
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  // add to cart
  const updateQty = (id, change) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }))
  }

  const popularMeals = mealsData.filter(meal => meal.isPopular).slice(0, 3);

  return (
    <section className="py-20 bg-light dark:bg-dark text-dark dark:text-light">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Popular Meals 🔥
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Freshly prepared. Delivered fast. Loved by customers.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {popularMeals.map(item => (
            <div
              key={item.id}
              className="menu-card 
                relative rounded-2xl overflow-hidden
                bg-white/70 dark:bg-[#1f1835]/80
                backdrop-blur-xl
                border border-white/20
                shadow-lg hover:shadow-2xl
                transition duration-300
                hover:-translate-y-2
                group
              "
            >

              {/* Bestseller Badge */}
              {item.bestseller && (
                <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full z-10">
                  ⭐ Bestseller
                </div>
              )}

              {/* Image */}
              <div
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Rating */}
                <div className="flex items-center gap-2 text-yellow-500 text-sm">
                  <FaStar />
                  {item.rating}
                  <span className="text-gray-500 dark:text-gray-400">
                    (120)
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold mt-2">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-lg font-bold text-primary">
                    ₦{item.price.toLocaleString()}
                  </span>

                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      ₦{item.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Cart Controls */}
               {/* Cart Controls */}
                <div className="flex items-center justify-between mt-6">

                {/* Quantity Selector */}
                {cartItems[item.id] ? (
                  <div className="flex items-center gap-3 bg-gray-100 dark:bg-dark px-3 py-2 rounded-lg">
                      
                      <button onClick={() => removeFromCart(item.id)}>
                        <FaMinus />
                      </button>

                      <span>{cartItems[item.id].qty}</span>

                      <button onClick={(e) => {
                          flyToCart(e);
                          addToCart(item);
                      }}>
                        <FaPlus />
                      </button>

                  </div>
                ) : (
                <button
                    onClick={(e) => {
                        flyToCart(e);
                        addToCart(item);
                        setAddedId(item.id);
                        setTimeout(() => setAddedId(null), 1000);
                    }}
                    className={`px-4 py-2 rounded-lg transition
                        ${addedId === item.id
                        ? "bg-green-500 text-white scale-110"
                        : "bg-primary text-white hover:scale-105"
                        }`}
                    >
                    {addedId === item.id ? "✓ Added" : "Add to Cart"}
                    </button>
                )}

                {/* WhatsApp Order */}
                <a
                href={`https://wa.me/234XXXXXXXXXX?text=I want ${item.name}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary font-medium hover:underline"
                >
                Order
                </a>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedItem && (
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <div
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-dark rounded-2xl p-8 max-w-md w-full"
            >
              <img
                src={selectedItem.image}
                alt=""
                className="w-full h-60 object-cover rounded-xl"
              />

              <h3 className="text-2xl font-bold mt-4">
                {selectedItem.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Freshly prepared with premium ingredients. Fast delivery guaranteed.
              </p>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 w-full py-3 rounded-lg bg-primary text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default MenuSection