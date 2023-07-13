"use client";

import ProductImages from "./productImages";
import { useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";
import Review from "./review";

export default function ProductPage({ product }) {
  const [itemCount, setItemCount] = useState(1);

  const { _id, name, description, price, images } = product;
  const { addItemToCart } = useContext(CartContext);

  const box = "bg-white rounded-sm p-8 pt-0";

  const addToCart = () => {
    for (let i = 1; i <= itemCount; i++) {
      addItemToCart(_id);
    }
    setItemCount(1);
  };

  return (
    <>
      <div className="product-wrapper mt-10">
        <div className={box}>
          <ProductImages images={images} />
        </div>
        <div className="">
          <h1 className="font-normal text-lg mb-3">{name}</h1>
          <div className="bg-black py-1 w-28 text-center">
            <p className="text-lg font-extrabold text-white">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <Review />
          <div className="mt-10">
            <input
              type="number"
              value={itemCount}
              onChange={(e) => {
                setItemCount(e.target.value);
              }}
              className="py-6 px-7 text-center font-bold border border-black focus:outline-2 focus:outline-dotted focus:outline-offset-4 focus:outline-primary"
            />
            <button onClick={addToCart} className="secondary-btn px-48 py-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <pre>{description}</pre>
      </div>
    </>
  );
}
