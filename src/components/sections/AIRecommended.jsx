import { motion } from "framer-motion"
import { recommendedMeals } from "../utils/constants"


const AIRecommended = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-3xl">🤖</span>
          <h2 className="text-3xl font-bold">
            Recommended For You
          </h2>
        </div>

        {/* Meals */}
        <div className="grid md:grid-cols-3 gap-8">
          {recommendedMeals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={meal.img}
                alt={meal.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {meal.name}
                </h3>

                <p className="text-primary font-bold mt-2">
                  ₦{meal.price.toLocaleString()}
                </p>

                <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIRecommended