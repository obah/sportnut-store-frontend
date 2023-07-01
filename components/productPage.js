"use client";

import ProductImages from "./productImages";
import { CartIcon } from "./icons";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";

export default function ProductPage({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const box = "bg-white rounded-sm p-8";

  return (
    <div className="product-wrapper mt-10">
      <div className={box}>
        <ProductImages images={product.images} />
      </div>
      <div className="">
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <p>{product.description}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xl">₦{product.price}</span>
          <button
            onClick={() => {
              addItemToCart(product._id);
            }}
            className="primary-btn px-4 py-1 flex items-center gap-2"
          >
            <CartIcon />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
