'use client'

import { motion } from "framer-motion";
import {
  FaBowlFood,
  FaShieldDog,
  FaHeartPulse,
} from "react-icons/fa6";
import { IoPawOutline } from "react-icons/io5";

const PetCareTips = () => {

  const tips = [
    {
      icon: <FaBowlFood />,
      title: "Healthy Food",
      description: "Provide nutritious food and fresh water daily.",
    },
    {
      icon: <FaHeartPulse />,
      title: "Vet Checkups",
      description: "Take pets for regular veterinary checkups.",
    },
    {
      icon: <FaShieldDog />,
      title: "Daily Exercise",
      description: "Ensure proper exercise and playtime for pets.",
    },
    {
      icon: <FaShieldDog />,
      title: "Vaccination",
      description: "Keep vaccinations updated for better safety.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            <IoPawOutline /> Pet Care Tips
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6">
            Keep Your Pets
            <span className="text-amber-400"> Healthy </span>
            & Happy
          </h2>

          <p className="text-slate-600 text-lg mt-6 leading-8">
            Simple daily habits can make your pets healthier,
            happier, and full of energy.
          </p>

        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-yellow-100 hover:border-amber-300 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-7">
                {tip.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PetCareTips;