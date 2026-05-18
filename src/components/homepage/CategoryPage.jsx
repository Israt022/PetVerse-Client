'use client'

import { Cat } from 'lucide-react';
import React from 'react';
import { LiaEarlybirds } from 'react-icons/lia';
import { PiDogFill, PiRabbitDuotone } from 'react-icons/pi';
import { SiPetsathome } from 'react-icons/si';
import { motion } from "framer-motion";

const CategoryPage = () => {
    const category = [
        {
            icon: <Cat />,
            title: "Cat",
            description:
            "Playful and affectionate cats waiting for a warm and loving home.",
        },
        {
            icon: <PiDogFill />,
            title: "Dog",
            description:
            "Loyal and energetic dogs ready to become your best companion.",
        },
        {
            icon: <LiaEarlybirds />,
            title: "Bird",
            description:
            "Colorful and cheerful birds that brighten every moment with joy.",
        },
        {
            icon: <PiRabbitDuotone />,
            title: "Rabbit",
            description:
            "Cute and gentle rabbits perfect for peaceful and caring families.",
        },
    ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                <SiPetsathome />
                Pet Categories
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6">
                Find Your Perfect
                <span className="text-amber-400"> Companion </span>
            </h2>

            <p className="text-slate-600 text-lg mt-6 leading-8">
                Explore adorable pets from different categories and
                discover the perfect friend for your family and lifestyle.
            </p>

        </div>

        {/* Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

          {category.map((cat, index) => (
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
              <div className="border-2 border-yellow-500 w-12 h-12 text-center mx-auto rounded-full flex items-center justify-center text-yellow-500 text-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl text-center text-yellow-500 font-bold text-slate-900 mb-3">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-center  text-sm leading-7">
                {cat.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
};

export default CategoryPage;