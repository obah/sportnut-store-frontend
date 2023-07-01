"use client";

import Link from "next/link";
import { CartIcon } from "./icons";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Featured({ product }) {
  const btn = " text-lg px-4 py-1";

  const { addItemToCart } = useContext(CartContext);
  const addFeaturedItemToCart = () => {
    addItemToCart(product._id);
  };

  return (
    <div className="text-white px-0 py-12">
      <div className="center">
        <div className="grid-view">
          <div className="flex flex-col gap-3 justify-center items-center order-last sm:order-1">
            <h1 className="m-0 text-4xl sm:text-6xl">{product.name}</h1>
            <p className="text-neutral-400 text-sm">{product.description}</p>
            <div className="flex gap-2 mt-2">
              <Link
                href={"/products/" + product._id}
                className={"outline-btn" + btn}
              >
                Read more
              </Link>
              <button
                onClick={addFeaturedItemToCart}
                className={"primary-btn inline-flex gap-1 items-center" + btn}
              >
                <CartIcon />
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://sportnut-dashbord.s3.amazonaws.com/1686667842290.6462.jpg"
              alt="featured product"
              className="max-w-full max-h-[200px] sm:max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
