"use client";

import { useState, useContext } from "react";
import { PaystackButton } from "react-paystack";
import { CartContext } from "@/context/cartContext";
import { UserDetailsContext } from "@/context/userDetailsContext";
import axios from "axios";

function ProcessPayment({ totalPrice, handleSuccess, paymentProvided }) {
  const { userDetails, state } = useContext(UserDetailsContext);
  const { cartProducts, clearCart } = useContext(CartContext);

  const publicPK = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email: userDetails.email,
    amount: totalPrice * 100,
    publicKey: publicPK,
  };

  const handlePaystackSuccessAction = () => {
    goToPayment();
  };

  const handlePaystackCloseAction = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    ...config,
    text: "PLACE ORDER",
    onSuccess: () => handlePaystackSuccessAction(),
    onclose: handlePaystackCloseAction,
  };

  const goToPayment = async () => {
    const response = await axios
      .post("/api/checkout", {
        ...userDetails,
        cartProducts,
      })
      .then(clearCart())
      .then(handleSuccess())
      .catch((error) => {
        console.log("Failed because of: " + error);
      });
  };

  return (
    <>
      <div className="mt-4 flex w-full items-center justify-center px-5 md:px-0">
        <button
          disabled={!paymentProvided}
          className={
            (!paymentProvided ? "disabled-btn" : "secondary-btn") +
            " w-full py-4 text-center"
          }
        >
          <PaystackButton {...componentProps} />
        </button>
      </div>
    </>
  );
}

export default ProcessPayment;
