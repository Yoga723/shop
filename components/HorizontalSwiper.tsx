"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";

const HorizontalSwiper = () => {
  return (
    <div className="swiper mb-5 flex flex-col">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ border: "solid 1px black" }}
        className="w-50 overflow-hidden p-2"
        loop={true}
        modules={[Pagination, Navigation]}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HorizontalSwiper;
