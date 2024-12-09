import React from "react";
import "swiper/css";
import { Swiper } from "swiper";

const HorizontalSwiper = () => {
  const swiper = new Swiper(".my-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 5000,
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  return (
    <div id="swiper" className="my-swiper overflow-hidden">
      <div className="swiper-wrapper modal-img-swiper">
        <div className="swiper-slide">1</div>
        <div className="swiper-slide">2</div>
        <div className="swiper-slide">3</div>
        <div className="swiper-slide">4</div>
      </div>
    </div>
  );
};

export default HorizontalSwiper;
