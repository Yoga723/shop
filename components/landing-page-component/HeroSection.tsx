"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

interface HeroContentProps {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
  features: string[];
}

const HeroSection = () => {
  const HeroContent: HeroContentProps[] = [
    {
      id: 1,
      imgSrc: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
      title: "Judul Buku 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit praesentium ullam.",
      features: ["Mengatasi Grogi", "Lancar Public Speaking", "Menjadi Ganteng"],
    },
    {
      id: 2,
      imgSrc: "https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg",
      title: "Judul Buku 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit praesentium ullam.",
      features: ["Mengatasi Grogi", "Lancar Public Speaking", "Menjadi Ganteng"],
    },
    {
      id: 3,
      imgSrc: "https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg",
      title: "Judul Buku 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit praesentium ullam.",
      features: ["Mengatasi Grogi", "Lancar Public Speaking", "Menjadi Ganteng"],
    },
  ];

  return (
    <section className="hero">
      <div className="container d-xl-flex align-items-start">
        <div className="hero_about col-xl-6">
          <div className="hero_header">
            <h1 className="hero_header-title">Check Our New Books</h1>
            <p className="hero_header-text">
              Temukan buku-buku terbaik untuk mengasah kemampuan public speaking Anda di Dialogika. Kami siap membantu
              Anda menjadi seorang pembicara yang percaya diri, menginspirasi, dan mempengaruhi dunia. Mulailah
              perjalanan Anda sekarang!
            </p>
            <a
              className="hero_header-btn scrollto"
              href="#productAreaTitle">
              Shop Now
            </a>
          </div>
          <div className="hero_contacts">
            <p className="hero_contacts-text">Our support team is available 24/7 to resolve any product issues</p>
            <span className="hero_contacts-data d-flex flex-column flex-sm-row align-items-center">
              <span className="icon d-flex align-items-center justify-content-center">
                <i className="icon-call"></i>
              </span>
              <span className="d-flex flex-column">
                <span>Phone number</span>
                <a
                  className="link"
                  href="tel:+1234567890">
                  +62 851-6299-2597
                </a>
              </span>
            </span>
          </div>
        </div>
        <div
          className="hero_promo col-xl-6"
          id="heroPromo">
          <div className="hero_promo-underlay"></div>
          <div className="hero_promo-underlay--highlight"></div>
          <Swiper
            className="overflow-visible pt-0 mt-5 w-100 h-100 visible position-relative"
            modules={[Pagination, EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              el: ".hero-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`; // Ganti Bullets dengan number
              },
            }}>
            {HeroContent.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center visible">
                  <div className="hero_slider-slide_media">
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="img-fluid"
                    />
                  </div>

                  <div className="hero_slider-slide_main">
                    <h2 className="title text-white">{slide.title}</h2>
                    <p
                      className="text text-white fw-medium"
                      style={{ margin: "15px 0 30px" }}>
                      {slide.text}
                    </p>
                    <ul className="list text-white">
                      {slide.features.map((feature, index) => (
                        <li
                          key={index}
                          className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="btn--underline"
                      href="#">
                      About Product
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="hero-pagination swiper-pagination d-sm-flex flex-column z-2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
