"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { CartIconWhite } from "./icons";

export default function AddToCartBtn({ className }) {
  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(_id);
  };
  return (
    <button
      onClick={addThisItemToCart}
      className={"flex items-center justify-center gap-3 " + className}
    >
      <CartIconWhite />
      ADD TO CART
    </button>
  );
}
