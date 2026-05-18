'use client'

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import {
  FaPaw,
  FaClipboardCheck,
  FaHeart,
  FaHouse,
} from "react-icons/fa6";

const AdoptionProcess = () => {

  const steps = [
    {
      id: "01",
      icon: <FaPaw />,
      title: "Browse Pets",
      description:
        "Explore adorable pets from different categories and find your perfect companion.",
    },
    {
      id: "02",
      icon: <FaClipboardCheck />,
      title: "Submit Request",
      description:
        "Fill out a simple adoption request form with your pickup date and details.",
    },
    {
      id: "03",
      icon: <FaHeart />,
      title: "Meet Your Pet",
      description:
        "Connect with the pet owner or shelter and meet your future furry friend.",
    },
    {
      id: "04",
      icon: <FaHouse />,
      title: "Take Them Home",
      description:
        "Complete the adoption process and give your new pet a loving forever home.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            <PawPrint/> Adoption Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 leading-tight">
            How
            <span className="text-amber-400"> Pet Adoption </span>
            Works
          </h2>

          <p className="text-slate-600 text-lg mt-6 leading-8">
            Bringing home a loving pet is simple and joyful.
            Follow these easy steps to start your adoption journey.
          </p>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 relative">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group bg-white border border-yellow-100 hover:border-amber-300 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 text-center"
            >

              {/* Step Number */}
              <div className="absolute top-5 right-5 text-5xl font-extrabold text-amber-100 group-hover:text-amber-200 transition-colors duration-300">
                {step.id}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-yellow-300/40 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-7 text-sm">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AdoptionProcess;