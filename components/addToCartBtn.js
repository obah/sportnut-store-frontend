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

export function AddToCartBtn2({ className }) {
  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(_id);
  };
  return (
    <button
      onClick={addThisItemToCart}
      className={"group/btn relative text-sm " + className}
    >
      <div className="flex items-center justify-center gap-3">
        <CartIconWhite className="fill-secondary text-secondary w-5 h-5" />
        <span>ADD TO CART</span>
      </div>
      <div className="absolute top-3/4 left-1/2 transistion-all ease-in-out duration-500 w-1 opacity-0 h-[2px] bg-secondary group-hover/btn:scale-x-[3000%] group-hover/btn:opacity-100"></div>
    </button>
  );
}
