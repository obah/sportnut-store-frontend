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

  useEffect(() => {
    if (userDetails.cardNo) {
      setPaymentNotProvided(false);
    }
  }, [userDetails]);

  const updateForm = (data, formName) => {
    setUserDetails((prev) => ({ ...prev, ...data }));
    setIsFormEdit(false);
    if (formName === "contactForm") {
      setShowContactForm(false);
      setShowBillingForm(true);
    } else if (formName === "billingForm") {
      setShowBillingForm(false);
      setShowPaymentForm(true);
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

  const goToPayment = async () => {
    const response = await axios
      .post("/api/checkout", {
        firstname,
        lastname,
        phone,
        email,
        street,
        house,
        zip,
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
        <div className="center">
          <div className="rounded-sm bg-white p-8">
            <h1>Thanks for your order</h1>
            <p>
              Please check your mail for other details concerning your order.
            </p>
          </div>
        </div>
      </>
    );
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div className="big-center bg-neutral-100">
      <header className="mb-6 flex justify-between bg-primary px-36 py-2">
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <Link href={"/cart"} className="flex items-center justify-center">
          <CartIcon className="h-6 w-6 fill-white text-white" />
        </Link>
      </header>
      <div className="mx-auto w-10/12">
        <div className="checkout-wrapper">
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
                    <div className="text-md">
                      <p>{`${userDetails.firstName} ${userDetails.lastName}`}</p>
                      <p>{userDetails.email}</p>
                      <p>{userDetails.phone}</p>
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
                    <div className="text-md">
                      <p>{userDetails.street}</p>
                      <p>{userDetails.house}</p>
                      <p>{userDetails.zip}</p>
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
                ) : userDetails.zip ? (
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
                      <p>{userDetails.street}</p>
                      <p>{userDetails.house}</p>
                      <p>{userDetails.zip}</p>
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
              <button
                onClick={goToPayment}
                disabled={paymentNotProvided}
                className={
                  (paymentNotProvided ? "disabled-btn" : "secondary-btn") +
                  " w-full py-4 text-center"
                }
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
