/* eslint-disable @next/next/no-img-element */
import "@/components/localbtn/style.css";
import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";
import AllProducts from "@/public/data";
import Link from "next/link";

export default function Home() {
  // const products = AllProducts;

  return (
    <>
      <main className="main">
        <section className="section w-100 d-flex justify-content-center align-items-center flex-column">
          {/* <HorizontalSwiper /> */}
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
              src="/shop/assets/img/hero.webp"
            />
          </div>

          <div
            className="container"
            style={{ border: "solid 1px black" }}>
            {AllProducts.map((product, index) => (
              <div key={index}>
                <Link href={`/produk/${product.id}`}>
                  {" "}
                  <h4>{product.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
