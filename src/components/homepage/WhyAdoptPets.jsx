'use client'

import { motion } from "framer-motion";
import { FaHeart, FaHouse, FaShieldDog } from "react-icons/fa6";

const WhyAdoptPets = () => {

  const features = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Save Precious Lives",
      description:
        "Every adoption gives homeless pets a second chance to experience love, safety, and happiness.",
    },
    {
      id: 2,
      icon: <FaHouse />,
      title: "Find Loyal Companionship",
      description:
        "Pets become family members who fill your home with unconditional love and joyful memories.",
    },
    {
      id: 3,
      icon: <FaShieldDog />,
      title: "Encourage Responsible Care",
      description:
        "Adopting supports ethical pet ownership and helps reduce the number of abandoned animals.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-yellow-50 via-white to-amber-50">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Why Choose Adoption?
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 leading-tight">
            Give a Pet the
            <span className="text-amber-400"> Love </span>
            They Truly Deserve
          </h2>

          <p className="text-slate-600 text-lg leading-8 mt-6">
            Adopting a pet changes lives forever. Discover the happiness,
            comfort, and unforgettable bond that comes with welcoming a
            furry friend into your family.
          </p>

        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/90 backdrop-blur-md border border-yellow-100 hover:border-amber-300 rounded-[28px] p-8 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 bg-gradient-to-r from-amber-400 to-yellow-500 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl shadow-md shadow-yellow-200/40 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-600 leading-7">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyAdoptPets;