"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import FeatureCard from "./FeatureCard";

const FeatureSlider = ({ features }) => {
    const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 ">
        <Swiper
            onSwiper={setSwiperRef}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            // slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination,Autoplay, Navigation]}
            breakpoints={{
                320: {
                slidesPerView: 1,
                },
                640: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
            }}
            className="mySwiper"
        >
        {features.map((feature) => (
          <SwiperSlide key={feature._id}>
            <FeatureCard feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;