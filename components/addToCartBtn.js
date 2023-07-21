"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { CartIconWhite } from "./icons";

export default function AddToCartBtn({ className, id }) {
  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(id);
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

export function AddToCartBtn2({ className, id }) {
  const { addItemToCart } = useContext(CartContext);

  const addThisItemToCart = () => {
    addItemToCart(id);
  };
  return (
    <button
      onClick={addThisItemToCart}
      className={"group/btn relative text-sm " + className}
    >
      <div className="flex items-center justify-center gap-3">
        <CartIconWhite className="h-5 w-5 fill-secondary text-secondary" />
        <span>ADD TO CART</span>
      </div>
      <div className="transistion-all absolute left-1/2 top-3/4 h-[2px] w-1 bg-secondary opacity-0 duration-500 ease-in-out group-hover/btn:scale-x-[3000%] group-hover/btn:opacity-100"></div>
    </button>
  );
}
