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
import ContactForm from "@/components/form/contactForm";
import BillingForm from "@/components/form/billingForm";
import PaymentForm from "@/components/form/paymentForm";
import { PaystackButton } from "react-paystack";
import { BigCenter, Center } from "@/components/viewPorts";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Page() {
  const [products, setProducts] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [showContactForm, setShowContactForm] = useState(true);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [paymentNotProvided, setPaymentNotProvided] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const { cartProducts, clearCart } = useContext(CartContext);

  /**
   * for this, use DOM to get form by id
   * then in submit function, if id === ???
   * set a state for that form to true or false based on some other ract-hook-form states
   * use the states to determine if button is disabled or button to show
   */

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  const updateForm = (data, formName) => {
    setUserDetails((prev) => ({ ...prev, ...data }));
    setIsFormEdit(false);
    if (formName === "contactForm") {
      setShowContactForm(false);
      setShowBillingForm(true);
    } else if (formName === "billingForm") {
      setShowBillingForm(false);
      setShowPaymentForm(true);
    } else if (formName === "paymentForm") {
      setShowPaymentForm(false);
      setPaymentNotProvided(false);
    }
  };

  const editContactForm = () => {
    setIsFormEdit(true);
    setShowContactForm(true);
  };

  const editBillingForm = () => {
    setIsFormEdit(true);
    setShowBillingForm(true);
  };

  const editPaymentForm = () => {
    setIsFormEdit(true);
    setShowPaymentForm(true);
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  const publicPK = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email: userDetails.email,
    amount: total * 100,
    publicKey: publicPK,
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    goToPayment();
  };

  const handlePaystackCloseAction = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    ...config,
    text: "PLACE ORDER",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onclose: handlePaystackCloseAction,
  };

  const goToPayment = async () => {
    const response = await axios
      .post("/api/checkout", {
        ...userDetails,
        cartProducts,
      })
      .then(clearCart())
      .then(setIsSuccess(true))
      .catch((error) => {
        console.log("Failed because of: " + error);
      });

    // if(response.data.url){
    //   window.location = response.data.url
    // }
    //this bit is to go to payment page

    //also do a function to reset the states after submission
  };

  //this bit is also for a success message after payment is successful
  if (isSuccess) {
    return (
      <>
        <Center
          styles={"flex h-screen items-center justify-center bg-neutral-100"}
        >
          <div className="flex h-1/2 w-1/3 flex-col items-center justify-center gap-5  rounded-sm bg-white p-8 text-center shadow shadow-black">
            <h1 className="text-3xl font-bold">Thanks for your order</h1>
            <p className="text-lg font-semibold">
              Please check your mail for other details concerning your order.
            </p>
            <Link href={"/"} className="primary-btn px-10 py-2">
              Continue Shopping
            </Link>
          </div>
        </Center>
      </>
    );
  }

  return (
    <BigCenter styles={"bg-neutral-100"}>
      <header className="mb-6 flex justify-between bg-primary px-36 py-2">
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <Link href={"/cart"} className="flex items-center justify-center">
          <CartIcon className="h-6 w-6 fill-white text-white" />
        </Link>
      </header>
      <div className="mx-auto w-10/12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
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
            </div>
            <div className="border border-neutral-200">
              <div>
                {showContactForm ? (
                  <div>
                    <ContactForm
                      user={userDetails}
                      updateUser={updateForm}
                      editing={isFormEdit}
                    />
                  </div>
                ) : userDetails.firstName ? (
                  <div className="bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className=" text-xl font-semibold">
                          1. Your Contact Information
                        </h3>
                        <FaCheck className="text-primary " />
                      </div>
                      <button
                        onClick={editContactForm}
                        className="text-sm font-semibold underline"
                      >
                        Change
                      </button>
                    </div>
                    <div className="text-md border-b pb-4">
                      <p className="pb-2 font-semibold">
                        Fullname:{" "}
                        <span className="font-normal">{`${userDetails.firstName} ${userDetails.lastName}`}</span>
                      </p>
                      <p className="pb-2 font-semibold">
                        Email:{" "}
                        <span className="font-normal">{userDetails.email}</span>
                      </p>
                      <p className="pb-2 font-semibold">
                        Phone No.:{" "}
                        <span className="font-normal">{userDetails.phone}</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-b border-b-gray-300 p-3">
                    <h3 className="mb-6 pt-0 text-xl font-semibold">
                      1. Your Contact Information
                    </h3>
                  </div>
                )}
              </div>
              <div>
                {showBillingForm ? (
                  <div>
                    <BillingForm
                      user={userDetails}
                      updateUser={updateForm}
                      editing={isFormEdit}
                    />
                  </div>
                ) : userDetails.street ? (
                  <div className="bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className=" text-xl font-semibold">
                          2. Billing and Shipping Address
                        </h3>
                        <FaCheck className="text-primary " />
                      </div>
                      <button
                        onClick={editBillingForm}
                        className="text-sm font-semibold underline"
                      >
                        Change
                      </button>
                    </div>
                    <div className="text-md border-b pb-2">
                      <p className="pb-2 font-semibold">
                        Street Address:{" "}
                        <span className="font-normal">
                          {userDetails.street}
                        </span>
                      </p>
                      <p className="pb-2 font-semibold">
                        House Number:{" "}
                        <span className="font-normal">
                          {userDetails.house ? userDetails.house : "--"}
                        </span>
                      </p>
                      <p className="pb-2 font-semibold">
                        Zip code:{" "}
                        <span className="font-normal">{userDetails.zip}</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-b border-b-gray-300 p-3 ">
                    <h3 className="mb-6  pt-0 text-xl font-semibold">
                      2. Billing & Shipping Address
                    </h3>
                  </div>
                )}
              </div>
              <div>
                {showPaymentForm ? (
                  <div>
                    <PaymentForm
                      user={userDetails}
                      updateUser={updateForm}
                      editing={isFormEdit}
                    />
                  </div>
                ) : userDetails.paymentOption ? (
                  <div className="bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className=" text-xl font-semibold">3. Payment</h3>
                        <FaCheck className="text-primary " />
                      </div>
                      <button
                        onClick={editPaymentForm}
                        className="text-sm font-semibold underline"
                      >
                        Change
                      </button>
                    </div>
                    <div className="text-md">
                      <p className="pb-2 font-semibold">
                        Preferred Payment Option:{" "}
                        <span className="font-normal">
                          {userDetails.paymentOption}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-b border-b-gray-300 p-3">
                    <h3 className="pt-0 text-xl font-semibold">3. Payment</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-4">
              <div className="mb-5 border-t-4 border-t-primary bg-white p-4 text-center">
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
                {/* <button
                  onClick={goToPayment}
                  disabled={paymentNotProvided}
                  className={
                    (paymentNotProvided ? "disabled-btn" : "secondary-btn") +
                    " w-full py-4 text-center"
                  }
                >
                  PLACE ORDER
                </button> */}
                <button
                  disabled={paymentNotProvided}
                  className={
                    (paymentNotProvided ? "disabled-btn" : "secondary-btn") +
                    " w-full py-4 text-center"
                  }
                >
                  <PaystackButton {...componentProps} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BigCenter>
  );
}
