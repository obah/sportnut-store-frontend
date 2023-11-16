"use client";

import ProductImages from "./productImages";
import { useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";
import Review from "./review";
import ProductSizes from "./productDetails/productSizes";
import DeliveryDetails from "./productDetails/deliveryDetails";
import AddProductToCart from "./productDetails/addProductToCart";

export default function ProductPage({ product }) {
  const [productDetails, setProductDetails] = useState({
    itemCount: 1,
    selectedSize: "",
    delivery: 1,
  });

  const { _id, name, description, price, images } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    for (let i = 1; i <= productDetails.itemCount; i++) {
      addItemToCart(_id);
    }
    setProductDetails({ ...productDetails, itemCount: 1 });
  };

  const handleSizeSelection = (size) =>
    setProductDetails({
      ...productDetails,
      selectedSize: size,
    });

  const handleDeliverySelect = (id) =>
    setProductDetails({
      ...productDetails,
      delivery: id,
    });

  const handleItemCount = (count) => {
    setProductDetails({
      ...productDetails,
      itemCount: count,
    });
  };

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

          <ProductSizes
            handleSizeSelection={handleSizeSelection}
            selectedSize={productDetails.selectedSize}
          />

          <DeliveryDetails
            selectedDelivery={productDetails.delivery}
            handleDeliverySelect={handleDeliverySelect}
          />

          <AddProductToCart
            addToCart={addToCart}
            handleItemCount={handleItemCount}
            currentCount={productDetails.itemCount}
          />
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
