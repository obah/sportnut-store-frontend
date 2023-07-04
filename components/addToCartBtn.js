"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";

export default function AddToCartBtn({ className }) {
  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(_id);
  };
  return (
    <button onClick={addThisItemToCart} className={className}>
      ADD TO CART
    </button>
  );
}
