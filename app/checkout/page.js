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
      <header className="bg-primary px-36 py-2 mb-6 flex justify-between">
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <Link href={"/cart"} className="flex items-center justify-center">
          <CartIcon className="w-6 h-6 fill-white text-white" />
        </Link>
      </header>
      <div className="w-10/12 mx-auto">
        <div className="checkout-wrapper">
          <div>
            <div className="bg-white p-6 mb-3">
              <div className="flex justify-between mb-2 text-primary">
                <div className="flex items-center gap-2">
                  <TruckIcon className="w-6 h-6" />
                  <h1 className="text-xl font-semibold">Shipping</h1>
                  <FaCheck className="" />
                </div>
                <AiOutlineInfoCircle className="w-6 h-6" />
              </div>
              <div>
                {products?.map((product) => (
                  <>
                    <h2 className="font-bold text-primary mt-8">
                      Store Pickup
                    </h2>
                    <div
                      key={product._id}
                      className="flex items-center gap-2 p-10 pt-0 border-b border-b-black last-of-type:border-b-0"
                    >
                      <div className="w-32 h-32 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-20 h-20"
                        />
                      </div>
                      <div>
                        <p className="text-md mb-1">{product.name}</p>
                        <p className="text-md font-semibold mb-1">
                          {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <p className="text-sm mb-1">
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
            </div>
          </div>
          <div>
            <div className="bg-white my-5 p-4 text-center border-t-4 border-t-primary">
              <h2 className="font-extrabold pb-4">MY SCORECARD REWARDS</h2>
              <p className=" text-neutral-600 text-md">
                <span>
                  <Link href={"/ip"} className="underline font-semibold">
                    Sign in
                  </Link>
                </span>{" "}
                to apply rewards & earn points on purchases!
              </p>
            </div>
            <div className="bg-white p-4">
              <div className="p-4 flex justify-between border-t font-bold text-lg">
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
            <div className="w-full flex justify-center items-center mt-4">
              <Link
                href={"/checkout"}
                className="secondary-btn w-full text-center py-4"
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
