"use client";
import useCart from "@/app/state/cartUtils";
import { ProductProps } from "@/public/data/product/productProps";
import React from "react";

const AddtoCartBtn = (item: ProductProps) => {
  const addToCart = useCart((state) => state.addToCart);
  return (
    <button
      type="button"
      onClick={() => addToCart(item)}
      className="blue-modern-dialogika-btn rounded  py-2 px-5 text-white border-0">
      Add To Cart
    </button>
  );
};

export default AddtoCartBtn;
