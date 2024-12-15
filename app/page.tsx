/* eslint-disable @next/next/no-img-element */
import HorizontalSwiper from "@/components/HorizontalSwiper";
import "@/components/localbtn/style.css";
import ProductCard from "@/components/ProductCard";
import { basePath } from "@/next.config";
// import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";
import AllProducts from "@/public/data";

export default function Home() {
  // const products = AllProducts;

  return (
    <>
      <main className="main">
        {/*  Hero section start ( max Featured - 3)*/}
        <section className="hero">
          <div className="container d-xl-flex align-items-start">
            <div className="hero_about col-xl-6">
              <div className="hero_header">
                <h1 className="hero_header-title">Check Our New Books</h1>
                <p className="hero_header-text">
                  Temukan buku-buku terbaik untuk mengasah kemampuan public speaking Anda di Dialogika. Kami siap
                  membantu Anda menjadi seorang pembicara yang percaya diri, menginspirasi, dan mempengaruhi dunia.
                  Mulailah perjalanan Anda sekarang!
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
              <div className="hero_slider swiper">
                <div className="swiper-wrapper">
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                    <div className="hero_slider-slide_media">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
                          type="image/webp"
                        />
                        <img
                          className="lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                    <div className="hero_slider-slide_main">
                      <h2 className="title">title Buku 1</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit
                        praesentium ullam.
                      </p>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Mengatasi Grogi
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Lancar Public Speaking
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Menjadi Ganteng
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                    <div className="hero_slider-slide_media">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg"
                          type="image/webp"
                        />
                        <img
                          className="lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                    <div className="hero_slider-slide_main">
                      <h2 className="title">title Buku 2</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit
                        praesentium ullam.
                      </p>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Mengatasi Grogi
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Lancar Public Speaking
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Menjadi Ganteng
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                    <div className="hero_slider-slide_media">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
                          type="image/webp"
                        />
                        <img
                          className="lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                    <div className="hero_slider-slide_main">
                      <h2 className="title">title Buku 3</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing illum vero itaque adipisci ipsa sit
                        praesentium ullam.
                      </p>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Mengatasi Grogi
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Lancar Public Speaking
                        </li>
                        <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                          <span className="icon d-flex align-items-center justify-content-center">
                            <i className="icon-check"></i>
                          </span>
                          Menjadi Ganteng
                        </li>
                      </ul>
                      {/*  <a className="btn--underline" href="#">About Product</a> */}
                    </div>
                  </div>
                </div>
                <div className="hero-pagination swiper-pagination d-sm-flex flex-column"></div>
              </div>
            </div>
          </div>
        </section>
        {/*  Hero section end */}

        <section
          className="ltn__feature-area mt-100 mt--65"
          style={{ marginTop: 0, marginBottom: 0, bottom: 100 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6 position-relative">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="assets/img/icons/svg/8-trolley.svg"
                        alt="Trolley"
                      />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Free shipping</h4>
                      <p>Untuk pesanan diatas Rp.300.000</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="assets/img/icons/svg/9-money.svg"
                        alt="Money"
                      />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>15 days returns</h4>
                      <p>Garansi uang kembali</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="assets/img/icons/svg/10-credit-card.svg"
                        alt="Credit Card"
                      />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Secure checkout</h4>
                      <p>Transfer aman melalui Bank</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img
                        src="assets/img/icons/svg/11-gift-card.svg"
                        alt="Gift card"
                      />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Offer & gift here</h4>
                      <p>Untuk semua pesanan buku</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Start of product card section */}
        <section
          id="shop-product"
          className="">
          <h2
            className="section-title section-title--center"
            id="productAreaTitle"
            style={{ margin: 0, padding: 0 }}>
            Katalog
            <span className="section-title__highlight"> Buku</span>
          </h2>
          <div className="underline"></div>

          <div className="container my-5">
            <ProductCard AllProducts={AllProducts} />
          </div>
        </section>
        {/*  End of product card section */}

        <section className="section w-100 d-flex justify-content-center align-items-center flex-column">
          <HorizontalSwiper />
          <button
            id="testBtn"
            className="btn btn-primary">
            Test Bootstrap is Working
          </button>
          <button
            id="testLocal"
            className="local-css">
            Test import local CSS is working
          </button>

          <div className="w-50 h-50 mb-4 object-fit-contain position-relative">
            <img
              alt="hero"
              src={`${basePath}/assets/img/promo.webp`}
            />
          </div>
        </section>
      </main>
    </>
  );
}
