"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Link from "next/link";
import PaymentSuccessScreen from "@/components/checkout/paymentSuccessScreen";
import CheckoutHeader from "@/components/checkout/checkoutHeader";
import CheckoutProducts from "@/components/checkout/checkoutProducts";
import CheckoutForm from "@/components/checkout/checkoutForm";
import ProcessPayment from "@/components/checkout/processPayment";
import Footer from "@/components/footer";
import { BigCenter } from "@/components/viewPorts";
import { TruckIcon } from "@/components/icons";
import { FaCheck } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentProvided, setPaymentProvided] = useState(false);

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

  const handleSuccess = () => setIsSuccess(true);
  const handlePaymentProvided = () => setPaymentProvided(true);

  if (isSuccess) {
    return <PaymentSuccessScreen />;
  }

  return (
    <BigCenter styles={"bg-neutral-100"}>
      <CheckoutHeader />

      <div className="mx-auto w-full md:w-3/4 lg:w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <div className="mb-3 bg-white p-6">
              <div className="mb-2 flex justify-between text-primary">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-6 w-6" />
                  <h1 className="text-xl font-semibold">Shipping</h1>
                  <FaCheck />
                </div>
                <AiOutlineInfoCircle className="h-6 w-6" />
              </div>

              <div>
                <CheckoutProducts
                  products={products}
                  cartProducts={cartProducts}
                />
              </div>
            </div>
            <CheckoutForm updatePayment={handlePaymentProvided} />
          </div>

          <div>
            <div className="sticky top-4">
              <div className="mb-5 border-t-4 border-t-primary bg-white p-4 text-center">
                <h2 className="pb-4 font-extrabold">MY SCORECARD REWARDS</h2>
                <p className="  text-neutral-600">
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

              <ProcessPayment
                handleSuccess={handleSuccess}
                totalPrice={total}
                paymentProvided={paymentProvided}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BigCenter>
  );
}
