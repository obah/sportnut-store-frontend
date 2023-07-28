"use client";

import ProductImages from "./productImages";
import { useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";
import Review from "./review";
import { FaBox, FaStore } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";

export default function ProductPage({ product }) {
  const [itemCount, setItemCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [delivery, setDelivery] = useState(1);

  const { _id, name, description, price, images } = product;
  const { addItemToCart } = useContext(CartContext);

  const box = "bg-white rounded-sm p-8 pt-0";

  const addToCart = () => {
    for (let i = 1; i <= itemCount; i++) {
      addItemToCart(_id);
    }
    setItemCount(1);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const inactiveSize =
    "px-7 py-2 text-center text-sm border hover:cursor-pointer transistion-all duration-300 ease-out";
  const activeSize = inactiveSize + " bg-black text-white font-bold";

  const deliveryOptions = [
    {
      id: 1,
      title: "Ship To Me",
      text: "Available",
      icon: <FaTruckArrowRight className="h-5 w-5" />,
      available: true,
    },
    {
      id: 2,
      title: "Free Store Pickup",
      text: "Curbside & In-store",
      icon: <FaStore className="h-5 w-5" />,
      available: true,
    },
    {
      id: 3,
      title: "Same Day Delivery",
      text: "Not available to your location",
      icon: <FaBox className="h-5 w-5" />,
      available: false,
    },
  ];

  const inactiveDelivery =
    "w-56 px-4 py-6 text-left rounded-md  border-2 hover:border-2 hover:border-black hover:cursor-pointer";
  const activeDelivery = inactiveDelivery + " border-black";

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className={box}>
          <ProductImages images={images} />
        </div>
        <div className="">
          <h1 className="mb-4 text-lg font-normal">{name}</h1>
          <div className="w-28 bg-black py-1 text-center">
            <p className="text-lg font-extrabold text-white">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <Review />
          <div>
            <p className="mb-2 text-sm font-bold">Color:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt=""
              className="mb-8 h-20 w-20 rounded-full border-2 border-neutral-300 outline-dashed outline-offset-2 hover:cursor-pointer"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-bold">Size:</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <div key={size}>
                  <p
                    onClick={() => setSelectedSize(size)}
                    className={
                      size === selectedSize ? activeSize : inactiveSize
                    }
                  >
                    {size}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mt-12 flex gap-3">
              {deliveryOptions.map((option) =>
                option.available ? (
                  <div
                    key={option.id}
                    onClick={() => setDelivery(option.id)}
                    className={
                      option.id === delivery
                        ? activeDelivery
                        : inactiveDelivery + " border-neutral-300"
                    }
                  >
                    <div className="mb-2 text-primary">{option.icon}</div>
                    <h3 className="mb-1 text-xl font-bold">{option.title}</h3>
                    <p className="text-sm">{option.text}</p>
                  </div>
                ) : (
                  <div
                    key={option.id}
                    className="w-56 rounded-md bg-neutral-200 px-4 py-6 text-left"
                  >
                    <div className="mb-2 text-neutral-500">{option.icon}</div>
                    <h3 className="mb-1 text-xl font-bold text-neutral-600">
                      {option.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{option.text}</p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-10">
            <input
              type="number"
              value={itemCount}
              onChange={(e) => {
                setItemCount(e.target.value);
              }}
              className="border border-black px-6 py-6 text-center font-bold focus:outline-dashed focus:outline-offset-4 focus:outline-primary"
            />
            <button onClick={addToCart} className="secondary-btn px-44 py-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* lets work here now */}
      <div className="mx-auto mt-20 w-3/4 border px-16 pb-20">
        <div>
          <h2 className="mb-2 pt-12 text-center text-xl font-bold">
            Prouct Information
          </h2>
          <div className="mx-auto mb-4 h-1 w-10 border-b-2 border-b-secondary"></div>
        </div>
        <pre className="whitespace-pre-wrap font-sans">{description}</pre>
      </div>
      <div>
        <h2>YOU MAY ALSO LIKE</h2>
      </div>
    </>
  );
}
