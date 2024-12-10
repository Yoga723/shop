import "./globals.css";
import "@/components/localbtn/style.css";
import ProductList from "@/public/data/products";
import Link from "next/link";
// import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";

export default function Home() {
  const products = ProductList;
  // const LocalBtnScript = dynamic(() => import("@/components/localbtn/script"));

  return (
    <main className="main">
      <section className="section w-100 d-flex justify-content-center align-items-center flex-column">
        <h1>About {new Date().toLocaleDateString()}</h1>
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

        <div className="w-50 h-50 mb-4">
          <img src="/assets/img/hero.webp" className="img-fluid" />
        </div>

        <div
          className="container"
          style={{ border: "solid 1px black" }}>
          {products.map((product, index) => (
            <div key={index}>
              <Link href={`/produk/${product.id}`}>
                {" "}
                <h4>{product.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* <LocalBtnScript /> */}
    </main>
  );
}
