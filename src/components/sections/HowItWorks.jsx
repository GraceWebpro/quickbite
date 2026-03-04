import { motion } from "framer-motion";
import { FaUtensils, FaShoppingCart, FaMotorcycle } from "react-icons/fa";

const steps = [
  {
    icon: <FaUtensils />,
    title: "Choose Your Meal",
    desc: "Browse our delicious menu and select your favorite meals in seconds.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Place Your Order",
    desc: "Add items to cart and checkout securely via WhatsApp or online.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Fast Delivery",
    desc: "Your food is prepared fresh and delivered to your doorstep quickly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark transition duration-300">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-dark dark:text-light">
            Order in 3 Simple Steps
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Getting your favorite meals has never been easier. Quick, simple,
            and reliable ordering experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[3px] bg-gradient-to-r from-primary/80 via-primary to-primary/80"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl
              bg-white/30 dark:bg-white/5
              backdrop-blur-xl border border-black/10 dark:border-white/20
              shadow-xl hover:shadow-2xl
              transition duration-300"
            >

              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2
              w-10 h-10 rounded-full
              bg-gradient-to-r from-primary to-secondary
              text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center
              rounded-2xl bg-primary/10 text-primary text-2xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-dark dark:text-light mb-3 text-center">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-center">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;