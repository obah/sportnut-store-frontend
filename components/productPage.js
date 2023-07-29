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

  const addToCart = () => {
    for (let i = 1; i <= itemCount; i++) {
      addItemToCart(_id);
    }
    setItemCount(1);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const inactiveSize =
    "px-6 md:px-7 py-2 text-center text-sm border hover:cursor-pointer transistion-all duration-300 ease-out";
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
    "w-56 p-2 md:p-3 lg:p-5 flex flex-col justify-center items-start rounded-md  border-2 hover:border-2 hover:border-black hover:cursor-pointer";
  const activeDelivery = inactiveDelivery + " border-black";

  return (
    <div className="px-4 md:px-0">
      <div className="mt-5 grid grid-cols-1 gap-0 md:mt-10 md:grid-cols-2 md:gap-10">
        <div className="block md:hidden">
          <h1 className="mb-1 text-xl font-semibold">{name}</h1>
          <Review />
        </div>
        <div className="rounded-sm bg-white p-2 pt-0 md:p-5 lg:p-8">
          <ProductImages images={images} />
        </div>
        <div>
          <h1 className="mb-4 hidden text-lg font-normal md:block">{name}</h1>
          <div className="w-28 bg-white py-1 text-left md:bg-black md:text-center">
            <p className="text-xl font-extrabold text-black md:text-lg md:text-white">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="hidden md:block">
            <Review />
          </div>
          <div>
            <p className="mb-2 mt-4 text-sm font-bold md:mt-0">Color:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt=""
              className="mb-6 h-16 w-16 rounded-full border-2 border-neutral-300 outline-dotted outline-offset-2 outline-primary hover:cursor-pointer md:mb-8 md:h-20 md:w-20"
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
            <div className="mt-8 flex gap-3 md:mt-12">
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
                    <h3 className="mb-1 text-base font-bold md:text-lg lg:text-xl">
                      {option.title}
                    </h3>
                    <p className="text-sm">{option.text}</p>
                  </div>
                ) : (
                  <div
                    key={option.id}
                    className="flex w-56 flex-col items-start justify-center rounded-md bg-neutral-200 p-2 md:p-3 lg:p-5"
                  >
                    <div className="mb-2 text-neutral-500">{option.icon}</div>
                    <h3 className="mb-1 text-base font-bold text-neutral-600 md:text-lg lg:text-xl">
                      {option.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{option.text}</p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-10 pr-2">
            <input
              type="number"
              value={itemCount}
              onChange={(e) => {
                setItemCount(e.target.value);
              }}
              className="w-1/4 border border-black py-4 text-center font-bold focus:outline-dashed focus:outline-offset-4 focus:outline-primary md:py-6 lg:w-1/3"
            />
            <button
              onClick={addToCart}
              className="secondary-btn w-3/4 py-4 text-center md:py-6 lg:w-2/3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 w-full border px-8 pb-5 md:px-12 md:pb-10 lg:w-3/4 lg:px-16 lg:pb-20">
        <div>
          <h2 className="mb-2 pt-5 text-center text-xl font-bold md:pt-8 lg:pt-12">
            Prouct Information
          </h2>
          <div className="mx-auto mb-4 h-1 w-10 border-b-2 border-b-secondary"></div>
        </div>
        <pre className="whitespace-pre-wrap font-sans">{description}</pre>
      </div>
    </div>
  );
}
