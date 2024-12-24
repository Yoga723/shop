"use client";

import { addProductToCart } from "@/public/data/cartUtils";
import { ProductProps } from "@/public/data/product/productProps";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  AllProducts: ProductProps[];
}

const ProductCard = ({ AllProducts }: ProductCardProps) => {
  return (
    <div
      className="row justify-content-center gap-md-4"
      id="productArea">
      {/* Buat product card sesuai dengan isi AllProducts */}
      {AllProducts.map((item, index) => (
        // Start of Cards
        <div
          key={index}
          className="col-lg-2 col-md-3 col-sm-6 col-6 card d-flex flex-column p-0 overflow-hidden justify-content-between"
          id={item.id}
          style={{ minHeight: 450 }}>
          <Link
            href={`product/${item.id}`}
            className="w-100">
            <img
              src={`${item.gambar[0].src}`} // ambil gambar pertama didalam array gambar
              alt={`${item.gambar[0].title}`}
              className="object-fit-cover w-100"
              style={{ minHeight: 260, maxHeight: 260 }}
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
              <div className="mt-1 d-flex flex-column flex-xl-col">
                <p className="text-black fs-6 fw-bold order-1 mb-0">Rp.{item.price.toLocaleString()}</p>
                {item.discountValue && item.discountValue > 1 && (
                  <p
                    className="text-secondary fw-light fa-md-xs order-2"
                    style={{ fontSize: "0.7rem" }}>
                    <del>Rp. {(item.price + item.discountValue).toLocaleString()}</del>
                    <span className="text-danger mx-1 fw-bold">{item.discountPercentage?.toLocaleString()}%</span>
                  </p>
                )}
              </div>
            </div>
            {/* End of Card Details */}
          </Link>
          <button
            type="button"
            onClick={() => addProductToCart(item)}
            className="blue-modern-dialogika-btn rounded py-2 px-3 px-xl-4 m-2  text-white border-0">
            Add To Cart
          </button>
        </div>
        // End of Cards
      ))}
    </div>
  );
};

export default ProductCard;
