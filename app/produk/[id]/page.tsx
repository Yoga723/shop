"use client";
import React from "react";
import ProductList, { ProductProps } from "@/public/data/products";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import "./style.css";
import { generatePaths } from "@/lib/generateStaticPaths";

const Page = () => {
  const router = useRouter();
  const pageId = useParams().id;
  const [testingBool, setTestingBool] = useState(false);
  const [produkData, setProdukData] = useState<ProductProps | null>(null);

  useEffect(() => {
    const filterData = () => {
      const item = ProductList.find((item: ProductProps) => item.id.toString() === pageId);
      if (item) setProdukData(item);
    };

    filterData();
  }, [pageId, testingBool]);

  return (
    <main className="section min-vh-100">
      <section>
        {produkData ? (
          <article className="container">
            {/* Start of Gambar Produk */}
            <section className="section col">
              <figure className="overflow-hidden product-img position-relative">
                <Image
                  fill
                  objectFit="contain"
                  src={`${produkData.gambar[0].src}`}
                  alt={`${produkData.gambar[0].title}`}
                />
              </figure>
              <h2>{produkData.title}</h2>
              <p>{produkData.availableFormat}</p>
            </section>
            {/* End of Gambar Produk */}

            <button
              className="z-3"
              onClick={() => setTestingBool(!testingBool)}>
              Test button
            </button>
          </article>
        ) : (
          <div>
            <h1>Error, Data not Found !</h1>
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;

// Fungsi ini diperlukan untuk setiap dynamic page untuk saat proses build nantinya.
// dynamic page adalah folder yang menggunakan []. Seperti /produk/[id]
export async function generateStaticParams() {
  return generatePaths(ProductList, "id");
}
