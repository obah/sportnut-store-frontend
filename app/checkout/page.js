"use client";

import { CartIcon, TruckIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import sportnut_logo from "@/public/sportnut_logo.svg";
import { FaCheck } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Footer from "@/components/footer";
import { useForm } from "react-hook-form";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Page() {
  const [products, setProducts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const { cartProducts, clearCart } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = (data, e) => console.log("data: ", data, e);
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

  const formInput =
    "peer block w-full appearance-none border bg-transparent p-4 text-sm text-black focus:mb-4 focus:border-black focus:outline-dashed focus:outline-offset-4 focus:outline-primary";

  const formLabel =
    "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-light text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary";

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
    <div className="big-center bg-neutral-200">
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
            <div>
              <div className="mb-5 bg-white p-6">
                <h3 className="mb-6 text-xl font-semibold">
                  1. Your Contact Information
                </h3>
                <form id="contact-info" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative mb-3">
                      <input
                        id="firstName"
                        placeholder=" "
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "Please enter your first name",
                          },
                        })}
                        className={formInput}
                      />
                      {errors.firstName && (
                        <p className="pl-2 text-xs text-secondary">
                          {errors.firstName.message}
                        </p>
                      )}
                      <label htmlFor="firstName" className={formLabel}>
                        First Name
                      </label>
                    </div>
                    <div className="relative mb-3">
                      <input
                        id="lastName"
                        placeholder=" "
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Please enter your last name",
                          },
                        })}
                        className={formInput}
                      />
                      {errors.lastName && (
                        <p className="pl-2 text-xs text-secondary">
                          {errors.lastName.message}
                        </p>
                      )}
                      <label htmlFor="lastName" className={formLabel}>
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter your email",
                        },
                      })}
                      className={formInput}
                    />
                    {errors.email && (
                      <p className="pl-2 text-xs text-secondary">
                        {errors.email.message}
                      </p>
                    )}
                    <label htmlFor="email" className={formLabel}>
                      Email
                    </label>
                  </div>
                  <div className="relative mb-3">
                    <input
                      type="number"
                      id="phone"
                      placeholder=" "
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Please enter your phone number",
                        },
                      })}
                      className={formInput}
                    />
                    {errors.phone && (
                      <p className="pl-2 text-xs text-secondary">
                        {errors.phone.message}
                      </p>
                    )}
                    <label htmlFor="phone" className={formLabel}>
                      Phone (123) 456-789
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="CONTINUE"
                    className={
                      (isDirty ? "secondary-btn" : "disabled-btn") +
                      " w-full py-4"
                    }
                    disabled={!isDirty}
                  />
                </form>
              </div>

              <div className="mb-5 bg-white p-6">
                <h3 className="mb-6 text-xl font-semibold">
                  2. Billing Address
                </h3>
                <form id="address-info" onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative mb-3">
                    <input
                      id="street"
                      placeholder=" "
                      {...register("street", {
                        required: {
                          value: true,
                          message: "Please enter your street address",
                        },
                      })}
                      className={formInput}
                    />
                    {errors.street && (
                      <p className="pl-2 text-xs text-secondary">
                        {errors.street.message}
                      </p>
                    )}
                    <label htmlFor="street" className={formLabel}>
                      Street Address
                    </label>
                  </div>
                  <div className="relative mb-3">
                    <input
                      id="house"
                      placeholder=" "
                      {...register("house")}
                      className={formInput}
                    />
                    <label htmlFor="house" className={formLabel}>
                      Apt, Suite, etc. (optional)
                    </label>
                  </div>
                  <div className="relative mb-3">
                    <input
                      type="number"
                      id="zip"
                      placeholder=" "
                      {...register("zip", {
                        required: {
                          value: true,
                          message: "Please enter your zip code",
                        },
                      })}
                      className={formInput}
                    />
                    {errors.zip && (
                      <p className="pl-2 text-xs text-secondary">
                        {errors.zip.message}
                      </p>
                    )}
                    <label htmlFor="zip" className={formLabel}>
                      ZIP Code Only (EX: 12345)
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="CONTINUE"
                    className={
                      (isDirty ? "secondary-btn" : "disabled-btn") +
                      " w-full py-4"
                    }
                    disabled={!isDirty}
                  />
                </form>
              </div>

              <div className="mb-5 bg-white p-6">
                <h3 className="mb-6 text-xl font-semibold">3. Payment</h3>
                {/* this is based on the info paystack will need not dsg */}
                <form id="payment-info">
                  <div className="relative mb-3">
                    <input id="street" placeholder=" " className={formInput} />
                    <label htmlFor="street" className={formLabel}>
                      Street Address
                    </label>
                  </div>
                  <div className="relative mb-3">
                    <input id="house" placeholder=" " className={formInput} />
                    <label htmlFor="house" className={formLabel}>
                      Apt, Suite, etc. (optional)
                    </label>
                  </div>
                  <div className="relative mb-3">
                    <input id="zip" placeholder=" " className={formInput} />
                    <label htmlFor="zip" className={formLabel}>
                      ZIP Code Only (EX: 12345)
                    </label>
                  </div>
                  <button className="secondary-btn w-full py-4 ">FINISH</button>
                </form>
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
                className="secondary-btn w-full py-4 text-center"
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
