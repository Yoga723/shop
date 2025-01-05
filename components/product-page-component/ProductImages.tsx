"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface gambarProps {
  id: number;
  title: string;
  src: string;
}
interface imgArrayProps {
  imgArray: gambarProps[];
}

const ProductImages = ({ imgArray }: imgArrayProps) => {
  console.log("ini adalah imgArray: ", imgArray);
  return (
    <figure className="overflow-hidden product-img position-relative">
      <img
        className="object-fit-contain img-fluid"
        style={{ width: 350, height: 350 }}
        src={`${imgArray[0].src}`}
        alt={`${imgArray[0].title}`}
      />
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper">
        {imgArray.map((item) => (
          <SwiperSlide key={item.id} className="w-25">{item.title}</SwiperSlide>
        ))}
      </Swiper>
    </figure>
  );
};

export default ProductImages;
