"use client";

import Link from "next/link";
import { CartIcon } from "./icons";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";

export default function ProductBox({ _id, name, price, images }) {
  const btn = " text-lg px-4 py-1";
  const url = "/product/" + _id;

  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(_id);
  };

  return (
    <div>
      {/* eslint-disable-next-line @next/next/link-passhref */}
      <Link
        href={url}
        className="bg-white p-5  h-48 text-center flex justify-center items-center rounded-md"
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images?.[0]} alt="" className="max-w-full max-h-44" />
        </div>
      </Link>
      <div className="mt-1">
        <Link href={url}>{name}</Link>
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold">₦{price}</span>
          <button
            onClick={addThisItemToCart}
            className={"primary-outline-btn" + btn}
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
