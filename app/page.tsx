"use client";
import "./globals.css";
import { ProductProps } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import HorizontalSwiper from "@/components/Swiper/HorizontalSwiper";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

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
