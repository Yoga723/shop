import "./globals.css";
import "@/components/localbtn/style.css";
import ProductList from "@/public/data/products";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
// import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";

export default function Home() {
  const products = ProductList;
  const GlobalMetadata = () => (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Beli E-book, Shop E-book"
      />
      <meta
        name="keywords"
        content="Beli E-book, Shop E-book"
      />

      {/* Open Graph Tags */}
      <meta
        property="og:site_name"
        content="Dialogika | Kelas Public Speaking"
      />
      <meta
        property="og:site"
        content="dialogika.co"
      />
      <meta
        property="og:title"
        content="Shop E-book, Beli E-book"
      />
      <meta
        property="og:description"
        content="Beli E-book, Shop E-book"
      />
      <meta
        property="og:image"
        content="assets/img/hero-bg.webp"
      />
      <meta
        property="og:url"
        content="https://www.dialogika.co/shop/"
      />
      <meta
        property="og:type"
        content="website"
      />
    </>
  );

  const GlobalFonts = () => (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap"
        rel="stylesheet"
      />

      {/* Icons */}
      <Script
        src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
        strategy="lazyOnload"
      />
    </>
  );

  const GlobalScripts = () => (
    <>
      {/* Part JS */}
      <Script
        src="/assets/part/shop/shop.js"
        defer
      />

      {/* Main Custom JS */}
      <Script
        src="/assets/js/script.js"
        defer
      />
      <Script
        src="/assets/js/headerfooter.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/main.js"
        defer
      />
      <Script
        src="/assets/js/index.min.js"
        defer
      />
      <Script
        src="/assets/js/cart.js"
        defer
      />

      {/* Vendor JS */}
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        defer
      />
      <Script
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        defer
      />
      <Script
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        defer
      />

      {/* External Icons */}
      <Script
        src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
        defer
      />
    </>
  );
  <Head>
    <GlobalMetadata />
    <GlobalFonts />
  </Head>;
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
          <img
            src="/shop/assets/img/hero.webp"
            className="img-fluid"
          />
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
