/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/components/landing-page-component/HeroSection";
import ProductCard from "@/components/landing-page-component/ProductCard";
import { basePath } from "@/next.config";
import AllProducts from "@/public/data/product";
import BenefitSection from "@/components/landing-page-component/BenefitSection";
import CartSidebar from "@/components/shared/Cart";

export default function Home() {
  return (
    <>
      <main className="main">
      <CartSidebar />
        {/*  Hero section ( max Featured - 3)*/}
        <HeroSection />

        {/* Benefit Section */}
        <BenefitSection />

        {/*  Start of product card section */}
        <section
          id="shop-product"
          className="section">
          <h2
            className="section-title section-title--center"
            id="productAreaTitle"
            style={{ margin: 0, padding: 0 }}>
            Explore
            <span className="section-title__highlight"> Produk </span>
            Kami
          </h2>
          <div className="underline"></div>

          <div className="container my-5">
            <ProductCard AllProducts={AllProducts} />
          </div>
        </section>


        {/*  End of product card section */}

        {/* REMOVE THIS SECTION LATERRRRRR!!!!! */}
        <section className="section w-100 d-flex justify-content-center align-items-center flex-column">
          <button
            id="testBtn"
            className="btn btn-primary">
            Test Bootstrap is Working
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
