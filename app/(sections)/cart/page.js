"use client";

import { DeleteIcon, TickIcon } from "@/components/icons";
import { BigCenter, Center } from "@/components/viewPorts";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";

export default function Page() {
  const [products, setProducts] = useState([]);

  const {
    cartProducts,
    addItemToCart,
    removeItemFromCart,
    removeSingleItemFromCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  const addThisItem = (id) => {
    addItemToCart(id);
  };

  const removeThisItem = (id) => {
    removeSingleItemFromCart(id);
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  //for total product quantity, calculate it with amount when user clicks submut but calculate the total price based on changes to input

  return (
    <div>
      {!cartProducts?.length ? (
        <BigCenter>
          <div className="mt-12 flex flex-col items-center justify-center gap-2 bg-white">
            <h1 className="mb-2 text-3xl font-normal">Your Cart is Empty</h1>
            <p className="text-lg font-semibold text-primary ">
              EARN POINTS. REDEEM REWARDS.
            </p>
            <p className="mb-2 text-sm font-light">
              Sign in & shop to start earning!
            </p>
            <Link href={"/"} className="secondary-btn w-64 py-3 text-center">
              SIGN IN
            </Link>
            <p className="mt-5 text-sm font-light">
              {`Don't have an account yet? `}
              <Link href={"/ip"} className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </BigCenter>
      ) : (
        <Center styles={"bg-neutral-100"}>
          <div className="cart-wrapper">
            <div>
              <div className="my-5 border-t-2 border-t-primary bg-white p-4">
                <h3 className="mb-2 font-bold">
                  Cart&nbsp;
                  <span className="font-normal">
                    ({cartProducts.length}&nbsp;
                    {cartProducts.length > 1 ? "items" : "item"})
                  </span>
                </h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="h-4 w-4" />
                  <label>
                    This order is a gift.&nbsp;
                    <Link href={"/ip"} className="underline">
                      Learn more
                    </Link>
                  </label>
                </div>
              </div>
              {products.map((product) => (
                <div key={product._id} className="mb-4 flex bg-white p-4">
                  <div className="flex h-40 w-40 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="w-80 border-r px-5">
                    <p className="mb-1">{product.name}</p>
                    <p className="mb-4 font-bold">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <div className="relative z-0 flex w-36 items-center justify-between border px-3 py-1 text-center">
                      <p className="absolute -top-3 left-12 z-10 bg-white px-1 text-neutral-400">
                        Qty
                      </p>
                      <button
                        onClick={() => removeThisItem(product._id)}
                        className={
                          "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                        }
                      >
                        -
                      </button>
                      <span className="px-3 text-xl font-semibold">
                        {cartProducts.filter((id) => id === product._id).length}
                      </span>
                      <button
                        onClick={() => addThisItem(product._id)}
                        className={
                          "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-72 pl-8 text-sm">
                    <div className="mb-5 flex items-center">
                      <input
                        type="radio"
                        name={product.name}
                        value="available"
                        checked
                        readOnly
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={product.name}
                        className="ml-1 inline-flex items-center gap-1 font-semibold"
                      >
                        <TickIcon className="inline h-4 w-4" /> Available to
                        Ship
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={product.name}
                        value="unavailable"
                        disabled
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={product.name}
                        disabled
                        className="ml-1 inline-flex items-center gap-1 text-neutral-500"
                      >
                        <FaCircleExclamation className="inline h-[13px] w-[13px] text-red-500" />
                        Not available for Store Pickup
                      </label>
                    </div>
                  </div>
                  <div
                    onClick={() => removeItemFromCart(product._id)}
                    className="ml-20 hover:cursor-pointer"
                  >
                    <DeleteIcon />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="my-5 border-t-4 border-t-primary bg-white p-4 pb-8 text-center">
                <h2 className="pb-4 font-extrabold">MY SCORECARD REWARDS</h2>
                <p className="text-md pb-5 text-neutral-600">
                  Apply rewards & earn points on purchases!
                </p>
                <Link href={"/ip"} className="primary-btn mb-10 px-16 py-2">
                  SIGN IN
                </Link>
              </div>
              <div className="mb-10 bg-white p-4 pb-10">
                <div className="mb-14 flex justify-between border-y p-4 text-lg font-bold">
                  <p>Estimated Order Total</p>
                  <span>
                    {total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
                <Link href={"/checkout"} className="secondary-btn px-48 py-4">
                  CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </Center>
      )}
    </div>
  );
}
