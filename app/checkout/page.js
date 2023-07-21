"use client";

import { CartIcon, TruckIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import sportnut_logo from "@/public/sportnut_logo.svg";
import { FaCheck } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Footer from "@/components/footer";
import CheckoutForm from "@/components/checkoutForm";

export default function Page() {
  const [products, setProducts] = useState([]);

  const { cartProducts } = useContext(CartContext);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div className="big-center bg-neutral-200">
      <header className="mb-6 flex justify-between bg-primary px-36 py-2">
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <Link href={"/cart"} className="flex items-center justify-center">
          <CartIcon className="h-6 w-6 fill-white text-white" />
        </Link>
      </header>
      <div className="mx-auto w-10/12">
        <div className="checkout-wrapper">
          <div>
            <div className="mb-3 bg-white p-6">
              <div className="mb-2 flex justify-between text-primary">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-6 w-6" />
                  <h1 className="text-xl font-semibold">Shipping</h1>
                  <FaCheck className="" />
                </div>
                <AiOutlineInfoCircle className="h-6 w-6" />
              </div>
              <div>
                {products?.map((product) => (
                  <>
                    <h2 className="mt-8 font-bold text-primary">
                      Store Pickup
                    </h2>
                    <div
                      key={product._id}
                      className="flex items-center gap-2 border-b border-b-black p-10 pt-0 last-of-type:border-b-0"
                    >
                      <div className="flex h-32 w-32 items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.images[0]}
                          alt=""
                          className="h-20 w-20"
                        />
                      </div>
                      <div>
                        <p className="text-md mb-1">{product.name}</p>
                        <p className="text-md mb-1 font-semibold">
                          {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <p className="mb-1 text-sm">
                          Qty:{" "}
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <CheckoutForm />
            </div>
          </div>
          <div>
            <div className="my-5 border-t-4 border-t-primary bg-white p-4 text-center">
              <h2 className="pb-4 font-extrabold">MY SCORECARD REWARDS</h2>
              <p className=" text-md text-neutral-600">
                <span>
                  <Link href={"/ip"} className="font-semibold underline">
                    Sign in
                  </Link>
                </span>{" "}
                to apply rewards & earn points on purchases!
              </p>
            </div>
            <div className="bg-white p-4">
              <div className="flex justify-between border-t p-4 text-lg font-bold">
                <p>Estimated Order Total</p>
                <span>
                  {total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            </div>
            {/* add a check here to see if there form has been filled well then make the button red and clickable otherwise make it grey and unclickable */}
            <div className="mt-4 flex w-full items-center justify-center">
              <Link
                href={"/checkout"}
                className="secondary-btn w-full py-4 text-center"
              >
                PLACE ORDER
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}