"use client";

import EmptyCartPage from "@/components/cart/emptyCartPage";
import ItemDetails from "@/components/cart/itemDetails";
import { Center } from "@/components/viewPorts";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

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

  return (
    <div>
      {!cartProducts?.length ? (
        <EmptyCartPage />
      ) : (
        <Center styles={"bg-neutral-100"}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
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

              <ItemDetails
                products={products}
                removeIdFromCart={removeItemFromCart}
                addItem={addThisItem}
                removeItem={removeThisItem}
                cartIds={cartProducts}
              />
            </div>
            <div className="mx-auto w-full md:w-3/4 lg:w-full">
              <div className="my-5 border-t-4 border-t-primary bg-white p-4 pb-8 text-center">
                <h2 className="pb-4 font-extrabold">MY SCORECARD REWARDS</h2>
                <p className="pb-5 text-neutral-600">
                  Apply rewards & earn points on purchases!
                </p>
                <Link
                  href={"/ip"}
                  className="primary-btn mx-auto block w-1/3 py-2 text-center"
                >
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
                <Link
                  href={"/checkout"}
                  className="secondary-btn block w-full py-4 text-center"
                >
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
