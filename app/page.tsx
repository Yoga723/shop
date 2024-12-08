import "./globals.css";
import ProductList from "@/public/data/products";
import Link from "next/link";
// import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";

export default async function Home() {
  const products = await ProductList;

  return (
    <main className="main">
      <section className="section w-100 d-flex justify-content-center align-items-center flex-column">
        <button id="testBtn">Test Here</button>

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
    </main>
  );
}
