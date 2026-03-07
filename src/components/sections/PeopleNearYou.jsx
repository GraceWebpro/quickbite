import { motion } from "framer-motion"

const trendingMeals = [
  { id: 1, name: "Jollof Rice", orders: 24 },
  { id: 2, name: "Pizza", orders: 18 },
  { id: 3, name: "Chicken Burger", orders: 31 },
  { id: 4, name: "Fried Rice", orders: 15 }
]

const PeopleNearYou = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-10">
          🔥 People Near You Ordered
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {trendingMeals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[250px] border border-black/10 dark:border-white/20 bg-white/30 dark:bg-white/5 shadow-lg rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg">
                {meal.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {meal.orders} orders today
              </p>

              <div className="mt-4 text-green-500 font-semibold">
                Trending now
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeopleNearYou