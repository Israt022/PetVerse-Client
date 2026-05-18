"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-amber-50 overflow-hidden">
      <Swiper 
        pagination={true} 
        // navigation={true} 
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination,Autoplay]} 
        className="mySwiper">
        {/* Slider 1 */}
        <SwiperSlide>
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                
                {/* Left Content */}
                <div>
                    <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Find Your Perfect Companion 🐾
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
                    Give Pets a
                    <span className="text-amber-400"> Loving </span>
                    Home
                    </h1>

                    <p className="text-slate-600 text-lg mt-6 leading-8 max-w-xl">
                    Find loyal companions and help adorable pets discover their forever families.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                    
                    <Link href="/pets">
                        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-300/40 hover:scale-105 transition-all duration-300">
                        Adopt Now
                        </button>
                    </Link>

                    <Link href="/pets">
                        <button className="border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                        Explore Pets
                        </button>
                    </Link>

                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-12">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">500+</h2>
                        <p className="text-slate-500">Pets Adopted</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">200+</h2>
                        <p className="text-slate-500">Happy Families</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">50+</h2>
                        <p className="text-slate-500">Pet Shelters</p>
                    </div>

                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center overflow-hidden rounded-2xl"
                        >
        
                        <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-amber-200 rounded-full blur-3xl opacity-40"></div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                            src="/assets/slider-1.jpg"
                            alt="Pet Banner"
                            width={500}
                            height={800}
                            className="relative z-10 rounded-2xl"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                
                {/* Left Content */}
                <div>
                    <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Find Your Perfect Companion 🐾
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
                    Adopt a  
                    <span className="text-amber-400"> Cute </span>
                    Feline Friend
                    </h1>

                    <p className="text-slate-600 text-lg mt-6 leading-8 max-w-xl">
                    Playful, calm, and loving cats are waiting to become part of your family.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                    
                        <Link href="/pets">
                            <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-300/40 hover:scale-105 transition-all duration-300">
                            Adopt Now
                            </button>
                        </Link>

                        <Link href="/pets">
                            <button className="border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                            Explore Pets
                            </button>
                        </Link>

                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-12">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">500+</h2>
                        <p className="text-slate-500">Pets Adopted</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">200+</h2>
                        <p className="text-slate-500">Happy Families</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">50+</h2>
                        <p className="text-slate-500">Pet Shelters</p>
                    </div>

                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center overflow-hidden rounded-2xl"
                        >
        
                        <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-amber-200 rounded-full blur-3xl opacity-40"></div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                            src="/assets/slide-2.jpg"
                            alt="Pet Banner"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-2xl"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
        {/* Slider 3 */}
        <SwiperSlide>
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                
                {/* Left Content */}
                <div>
                    <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Find Your Perfect Companion 🐾
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
                    Meet Your New  
                    <span className="text-amber-400"> Best </span>
                    Friend
                    </h1>

                    <p className="text-slate-600 text-lg mt-6 leading-8 max-w-xl">
                    Energetic and loyal dogs ready to fill your home with joy and protection.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                    
                    <Link href="/pets">
                        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-300/40 hover:scale-105 transition-all duration-300">
                        Adopt Now
                        </button>
                    </Link>

                    <Link href="/pets">
                        <button className="border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                        Explore Pets
                        </button>
                    </Link>

                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-12">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">500+</h2>
                        <p className="text-slate-500">Pets Adopted</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">200+</h2>
                        <p className="text-slate-500">Happy Families</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">50+</h2>
                        <p className="text-slate-500">Pet Shelters</p>
                    </div>

                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center overflow-hidden rounded-2xl"
                        >
        
                        <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-amber-200 rounded-full blur-3xl opacity-40"></div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                            src="/assets/slider-3.jpg"
                            alt="Pet Banner"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-2xl"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
        {/* Slider 4 */}
        <SwiperSlide>
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                
                {/* Left Content */}
                <div>
                    <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Find Your Perfect Companion 🐾
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
                    Rescue,  
                    <span className="text-amber-400"> Love </span>
                    & Care
                    </h1>

                    <p className="text-slate-600 text-lg mt-6 leading-8 max-w-xl">
                    Every adoption saves a life. Start your journey of compassion with PetVerse.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                    
                    <Link href="/pets">
                        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-300/40 hover:scale-105 transition-all duration-300">
                        Adopt Now
                        </button>
                    </Link>

                    <Link href="/pets">
                        <button className="border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                        Explore Pets
                        </button>
                    </Link>

                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-12">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">500+</h2>
                        <p className="text-slate-500">Pets Adopted</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">200+</h2>
                        <p className="text-slate-500">Happy Families</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">50+</h2>
                        <p className="text-slate-500">Pet Shelters</p>
                    </div>

                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center overflow-hidden rounded-2xl"
                        >
        
                        <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-amber-200 rounded-full blur-3xl opacity-40"></div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                            src="/assets/slide-4.jpg"
                            alt="Pet Banner"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-2xl"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;