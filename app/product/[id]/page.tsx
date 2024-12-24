import React from "react";
import AllProducts from "@/public/data/product";
import { isMerchandise, ProductProps } from "@/public/data/product/productProps";
import Image from "next/image";
import "./style.css";
import { generatePaths } from "@/lib/generateStaticPaths";
import { Metadata } from "next";
import CartSidebar from "@/components/Cart";

export const metadata: Metadata = {
  title: "Product Details",
};

export default async function Page({ params }: any) {
  const { id } = await params;
  const product = await AllProducts.find((item: ProductProps) => item.id.toString() === id);
  console.log(AllProducts);

  // Tampilkan ini jika id product tidak ada
  if (!product) {
    return (
      <main className="section min-vh-100 pt-5">
        <h1 className="text-black mt-5">Error: Product Not Found!</h1>
      </main>
    );
  }
  return (
    <>
      <main className="section min-vh-100">
        <section>
          <article className="container">
            {/* Start of Gambar Product */}
            <section className="section col">
              <figure className="overflow-hidden product-img position-relative">
                <Image
                  fill
                  objectFit="contain"
                  src={`${product.gambar[0].src}`}
                  alt={`${product.gambar[0].title}`}
                />
              </figure>
              <h2>{product.title}</h2>
              {isMerchandise(product) && <div>{product.stock}</div>}
              {/* <p>{product.availableFormat?.join(" ")}</p> */}
              <div dangerouslySetInnerHTML={{ __html: product.deskripsi }} />
            </section>
            {/* End of Gambar Product */}
          </article>
          <CartSidebar />
        </section>
      </main>
    </>
  );
}

// Fungsi ini diperlukan untuk setiap dynamic page untuk saat proses build nantinya.
// dynamic page adalah folder yang menggunakan []. Seperti /product/[id]
export async function generateStaticParams() {
  const path = await generatePaths(AllProducts, "id");
  console.log("Ini paths : ", path);
  return generatePaths(AllProducts, "id");
}
