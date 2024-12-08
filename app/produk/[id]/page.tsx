import React from "react";
import ProductList, { ProductProps } from "@/public/data/products";
// import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import "./style.css";
import { generatePaths } from "@/lib/generateStaticPaths";

const Page = async ({ params }: { params: { id: string } }) => {
  const product = await ProductList.find((item: ProductProps) => item.id.toString() === params.id);

  console.log("this is params: ", params.id);
  console.log("this is product: ", product);
  if (!product) {
    return (
      <main className="section min-vh-100 pt-5">
        <h1 className="text-black mt-5">Error: Product Not Found!</h1>
      </main>
    );
  }
  return (
    <main className="section min-vh-100">
      <section>
        <article className="container">
          {/* Start of Gambar Produk */}
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
            <p>{product.availableFormat}</p>
          </section>
          {/* End of Gambar Produk */}
        </article>
      </section>
    </main>
  );
};

export default Page;

// Fungsi ini diperlukan untuk setiap dynamic page untuk saat proses build nantinya.
// dynamic page adalah folder yang menggunakan []. Seperti /produk/[id]
export async function generateStaticParams() {
  const path = generatePaths(ProductList, "id");
  console.log("Ini paths : ", path);
  return generatePaths(ProductList, "id");
}
