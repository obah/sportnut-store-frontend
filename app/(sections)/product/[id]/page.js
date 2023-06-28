"use client";

import { CartLogo } from "@/components/icons";
import ProductImages from "@/components/productImages";
import { CartContext } from "@/context/cartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";

export default async function Page({ params }) {
  const productId = params.id;
  const productData = await getProduct(productId);
  const product = productData.product;

  const { addItemToCart } = useContext(CartContext);

  //   const addThisItemToCart = () => {
  //     addItemToCart();
  //   };

  const box = "bg-white rounded-sm p-8";

  return (
    <div className="center">
      <div className="product-wrapper mt-10">
        <div className={box}>
          <ProductImages images={product.images} />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl">{product.name}</h1>
          <p>{product.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl">₦{product.price}</span>
            <button
              onClick={() => {
                addItemToCart(product._id);
              }}
              className="primary-btn px-4 py-1 flex items-center gap-2"
            >
              <CartLogo />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getProduct(productId) {
  await mongooseConnect();
  const product = await Product.findById(productId);
  return { product: JSON.parse(JSON.stringify(product)) };
}
