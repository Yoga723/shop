"use client";

// import useCart from "@/app/state/cartUtils";
import { ProductProps } from "@/public/data/product/productProps";
import Link from "next/link";
import React from "react";
import AddtoCartBtn from "../shared/AddtoCartBtn";
interface ProductCardProps {
  AllProducts: ProductProps[];
}

const ProductCard = ({ AllProducts }: ProductCardProps) => {
  // const addToCart = useCart((state) => state.addToCart);
  // const cartData = useCart((state) => state.cartData);

  return (
    <div
      className="row justify-content-center gap-md-3"
      id="productArea">
      {/* Buat product card sesuai dengan isi AllProducts */}
      {AllProducts.map((item, index) => {
        return (
          // Start of Cards
          <div
            key={index}
            className="col-lg-2 col-md-3 col-5 m-1 card d-flex flex-column p-0 overflow-hidden justify-content-between"
            id={item.id}
            style={{ minHeight: 450 }}>
            <Link
              href={`product/${item.id}`}
              className="w-100">
              <img
                src={`${item.gambar[0].src}`} // ambil gambar pertama didalam array gambar
                alt={`${item.gambar[0].title}`}
                className="object-fit-cover w-100"
                style={{ minHeight: 250, maxHeight: 250 }}
              />
              {/* Start of Card Details */}
              <div className={`card-body d-flex flex-column align-items-start text-start flex-grow-1 `}>
                <h5
                  className="mt-1 overflow-y-hidden d-inline-block text-black fw-normal lh-base fs-6"
                  style={{ cursor: "pointer", maxHeight: 50 }}>
                  {item.title}
                </h5>

                {/* Start of Category & Icon Section */}
                <h6 className="text-secondary text-center justify-content-center align-items-center d-flex gap-1">
                  {item.category.toLowerCase() === "e-book" ? (
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/50/228BE6/external-E-book-literature-smashingstocks-glyph-smashing-stocks.png"
                      alt="icon"
                    />
                  ) : item.category.toLowerCase() === "merchandise" ? (
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/ios-filled/50/228BE6/handle-with-care.png"
                      alt="icon"
                    />
                  ) : item.category.toLowerCase() === "video" ? (
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/ios-filled/50/228be6/circled-play.png"
                      alt="icon"
                    />
                  ) : (
                    ""
                  )}
                  {item.category}
                </h6>
                {/* End of Category & Icon Section */}

                {/* Price Section */}
                <div className="mt-1 d-flex flex-row gap-2 justify-content-center align-items-center">
                  <p className="text-black fs-6 fw-bold mb-0 w-auto">Rp.{item.price.toLocaleString()}</p>
                  {/* Tampilkan harga sebelum diskon bila ada */}
                  {item.discountValue && item.discountValue > 1 && (
                    <p
                      className="text-secondary fw-bold mb-0 w-auto"
                      style={{ fontSize: "0.7rem" }}>
                      <del>Rp. {(item.price + item.discountValue).toLocaleString()}</del>
                      <span className="text-danger mx-1 fw-bold">{item.discountPercentage?.toLocaleString()}%</span>
                    </p>
                  )}
                </div>
                {/* End of Price Section */}
              </div>
              {/* End of Card Details */}
            </Link>
            <AddtoCartBtn {...item} />
          </div>
          // End of Cards)
        );
      })}
    </div>
  );
};

export default ProductCard;
