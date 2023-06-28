"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Header() {
  const navlink = "text-neutral-400";
  const { cartProducts } = useContext(CartContext);

  return (
    <header className="bg-neutral-800">
      <div className="center">
        <div className="flex justify-between px-0 py-5">
          <Link href={"/"} className="text-white">
            Sportnut store
          </Link>
          <nav className="flex gap-4">
            <Link href={"/"} className={navlink}>
              Home
            </Link>
            <Link href={"/products"} className={navlink}>
              All products
            </Link>
            <Link href={"/categories"} className={navlink}>
              Categories
            </Link>
            <Link href={"/account"} className={navlink}>
              Account
            </Link>
            <Link href={"/cart"} className={navlink}>
              Cart ({cartProducts.length})
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
