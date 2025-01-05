import React from "react";
import AllProducts from "@/public/data/product";
import { isMerchandise, ProductProps } from "@/public/data/product/productProps";
import "./style.css";
import { generatePaths } from "@/lib/generateStaticPaths";
import { Metadata } from "next";
import CartSidebar from "@/components/shared/Cart";
import AddtoCartBtn from "@/components/shared/AddtoCartBtn";
import ProductImages from "@/components/product-page-component/ProductImages";

export const metadata: Metadata = {
  title: "Product Details",
};

export default async function Page({ params }: any) {
  const { id } = await params;
  // Find the product based on the ID from params
  const product = AllProducts.find((item: ProductProps) => item.id.toString() === id);

  // Show an error page if the product is not found
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
        <section
          className="section"
          style={{ marginTop: 150 }}>
          <article className="container">
            {/* Start of Gambar Product */}

            <ProductImages imgArray={product.gambar} />

            {/* Product Description */}
            <div>
              <h1>{product.title}</h1>
              {isMerchandise(product) && <div>{product.stock}</div>}
              <div dangerouslySetInnerHTML={{ __html: product.deskripsi }} />
              <AddtoCartBtn {...product} />
            </div>
            {/* End of Gambar Product */}
          </article>
          <CartSidebar />
        </section>
      </main>
    </>
  );
}

// Dynamic page generation during build
export async function generateStaticParams() {
  const paths = generatePaths(AllProducts, "id");
  console.log("Generated paths: ", paths);
  return paths;
}
