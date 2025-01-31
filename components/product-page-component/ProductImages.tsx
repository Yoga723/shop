"use client";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
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

  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = useRef<any>(null);

  
  return (
    <>
      
      <figure className="overflow-hidden position-relative h-auto flex flex-column justify-content-center align-items-center">
        <Swiper 
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          pagination={{clickable: true}}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="productImageSwiper mx-auto"
          style={{ marginBottom: '20px' }}
          >
          {imgArray.map((item) => (
          

              <SwiperSlide key={item.id} >
                <img
                className="object-fit-cover rounded img-fluid mx-auto d-block"
                style={{ width: 350, height: 350 }}
                src={imgArray[activeIndex].src}
                alt={imgArray[activeIndex].title}
                />
              
              </SwiperSlide>
          ))}
        </Swiper>
        {/* Thumbnail */}
        <div className="d-flex justify-content-center gap-3">
          {imgArray.map((item, index) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.title}
              onClick={() =>setActiveIndex(index)}
              style={{
                width: 80,
                height: 80,
                objectFit: 'cover',
                cursor: 'pointer',
                border: index === activeIndex ? '3px solid #114D95' : '2px solid #ddd',
                borderRadius: '5px',
              }}
            />
          ))}
         </div>
      </figure>
    </>
  );
};

export default ProductImages;
