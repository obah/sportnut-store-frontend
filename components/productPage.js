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
      icon: <FaTruckArrowRight className="w-5 h-5" />,
      available: true,
    },
    {
      id: 2,
      title: "Free Store Pickup",
      text: "Curbside & In-store",
      icon: <FaStore className="w-5 h-5" />,
      available: true,
    },
    {
      id: 3,
      title: "Same Day Delivery",
      text: "Not available to your location",
      icon: <FaBox className="w-5 h-5" />,
      available: false,
    },
  ];

  const inactiveDelivery =
    "w-56 px-4 py-6 text-left rounded-md  border-2 hover:border-2 hover:border-black hover:cursor-pointer";
  const activeDelivery = inactiveDelivery + " border-black";

  return (
    <>
      <div className="product-wrapper mt-10">
        <div className={box}>
          <ProductImages images={images} />
        </div>
        <div className="">
          <h1 className="font-normal text-lg mb-4">{name}</h1>
          <div className="bg-black py-1 w-28 text-center">
            <p className="text-lg font-extrabold text-white">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <Review />
          <div>
            <p className="text-sm font-bold mb-2">Color:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt=""
              className="w-20 h-20 mb-8 rounded-full border-neutral-300 border-2 hover:cursor-pointer outline-1 outline-dotted outline-offset-2"
            />
          </div>
          <div>
            <p className="text-sm font-bold mb-2">Size:</p>
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
            <div className="flex gap-3 mt-12">
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
                    <div className="text-primary mb-2">{option.icon}</div>
                    <h3 className="text-xl font-bold mb-1">{option.title}</h3>
                    <p className="text-sm">{option.text}</p>
                  </div>
                ) : (
                  <div
                    key={option.id}
                    className="bg-neutral-200 w-56 px-4 py-6 text-left rounded-md"
                  >
                    <div className="text-neutral-500 mb-2">{option.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-600 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{option.text}</p>
                  </div>
                )
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
              className="py-6 px-6 text-center font-bold border border-black focus:outline-2 focus:outline-dotted focus:outline-offset-4 focus:outline-primary"
            />
            <button onClick={addToCart} className="secondary-btn px-44 py-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <pre>{description}</pre>
      </div>
    </>
  );
}
