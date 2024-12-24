/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/components/landing-page-component/HeroSection";
import "@/components/localbtn/style.css";
import ProductCard from "@/components/landing-page-component/ProductCard";
import { basePath } from "@/next.config";
import AllProducts from "@/public/data/product";
import BenefitSection from "@/components/landing-page-component/BenefitSection";
import CartSidebar from "@/components/Cart";

export default function Home() {
  // const products = AllProducts;

  return (
    <>
      <main className="main">
        {/*  Hero section start ( max Featured - 3)*/}
        <HeroSection />
        {/*  Hero section end */}

        {/* Benefit Section */}
        <BenefitSection />
        <CartSidebar />

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
