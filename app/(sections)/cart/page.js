"use client";

import { DeleteIcon, TickIcon } from "@/components/icons";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [state, setState] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    cartProducts,
    addItemToCart,
    removeItemFromCart,
    removeSingleItemFromCart,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  const addThisItem = (id) => {
    addItemToCart(id);
  };

  const removeThisItem = (id) => {
    removeSingleItemFromCart(id);
  };

  const goToPayment = async () => {
    const response = await axios
      .post("/api/checkout", {
        name,
        phone,
        email,
        street,
        city,
        postal,
        state,
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

  //for total product quantity, calculate it with amount when user clicks submut but calculate the total price based on changes to input

  return (
    <div>
      {!cartProducts?.length ? (
        <div className="big-center">
          <div className="mt-12 flex flex-col items-center justify-center gap-2 bg-white">
            <h1 className="mb-2 text-3xl font-normal">Your Cart is Empty</h1>
            <p className="text-lg font-semibold text-primary ">
              EARN POINTS. REDEEM REWARDS.
            </p>
            <p className="mb-2 text-sm font-light">
              Sign in & shop to start earning!
            </p>
            <Link href={"/"} className="secondary-btn w-64 py-3 text-center">
              SIGN IN
            </Link>
            <p className="mt-5 text-sm font-light">
              {`Don't have an account yet? `}
              <Link href={"/ip"} className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="center bg-neutral-200">
          <div className="cart-wrapper">
            <div>
              <div className="my-5 border-t-2 border-t-primary bg-white p-4">
                <h3 className="mb-2 font-bold">
                  Cart&nbsp;
                  <span className="font-normal">
                    ({cartProducts.length}&nbsp;
                    {cartProducts.length > 1 ? "items" : "item"})
                  </span>
                </h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="h-4 w-4" />
                  <label>
                    This order is a gift.&nbsp;
                    <Link href={"/ip"} className="underline">
                      Learn more
                    </Link>
                  </label>
                </div>
              </div>
              {products.map((product) => (
                <div key={product._id} className="mb-4 flex bg-white p-4">
                  <div className="flex h-40 w-40 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="w-80 border-r px-5">
                    <p className="mb-1">{product.name}</p>
                    <p className="mb-4 font-bold">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <div className="relative z-0 flex w-36 items-center justify-between border px-3 py-1 text-center">
                      <p className="absolute -top-3 left-12 z-10 bg-white px-1 text-neutral-400">
                        Qty
                      </p>
                      <button
                        onClick={() => removeThisItem(product._id)}
                        className={
                          "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                        }
                      >
                        -
                      </button>
                      <span className="px-3 text-xl font-semibold">
                        {cartProducts.filter((id) => id === product._id).length}
                      </span>
                      <button
                        onClick={() => addThisItem(product._id)}
                        className={
                          "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-72 pl-8 text-sm">
                    <div className="mb-5 flex items-center">
                      <input
                        type="radio"
                        name={product.name}
                        value="available"
                        checked
                        readOnly
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={product.name}
                        className="ml-1 inline-flex items-center gap-1 font-semibold"
                      >
                        <TickIcon className="inline h-4 w-4" /> Available to
                        Ship
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={product.name}
                        value="unavailable"
                        disabled
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={product.name}
                        disabled
                        className="ml-1 inline-flex items-center gap-1 text-neutral-500"
                      >
                        <FaCircleExclamation className="inline h-[13px] w-[13px] text-red-500" />
                        Not available for Store Pickup
                      </label>
                    </div>
                  </div>
                  <div
                    onClick={() => removeItemFromCart(product._id)}
                    className="ml-20 hover:cursor-pointer"
                  >
                    <DeleteIcon />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="my-5 border-t-4 border-t-primary bg-white p-4 pb-8 text-center">
                <h2 className="pb-4 font-extrabold">MY SCORECARD REWARDS</h2>
                <p className="text-md pb-5 text-neutral-600">
                  Apply rewards & earn points on purchases!
                </p>
                <Link href={"/ip"} className="primary-btn mb-10 px-16 py-2">
                  SIGN IN
                </Link>
              </div>
              <div className="bg-white p-4 pb-10">
                <div className="mb-14 flex justify-between border-y p-4 text-lg font-bold">
                  <p>Estimated Order Total</p>
                  <span>
                    {total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
                <Link href={"/checkout"} className="secondary-btn px-48 py-4">
                  CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="center">
  //     <div className="cart-wrapper mt-10">
  //       <div className={box}>
  //         <h2 className="font-bold text-xl mb-2">Cart</h2>
  //         {!cartProducts?.length && (
  //           <p className="font-bold text-lg">Your cart is empty</p>
  //         )}
  //         {products?.length > 0 && (
  //           <table>
  //             <thead>
  //               <tr>
  //                 <th>Product</th>
  //                 <th>Quantity</th>
  //                 <th>Price</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {products.map((product) => (
  //                 <tr key={product._id}>
  //                   <td>
  //                     <div className="h-36 w-36 flex justify-center items-center p-3 rounded-md shadow-md">
  //                       {/*eslint-disable-next-line @next/next/no-img-element*/}
  //                       <img
  //                         src={product.images[0]}
  //                         alt=""
  //                         className="image-box"
  //                       />
  //                     </div>
  //                     {product.name}
  //                   </td>
  //                   <td>
  //                     <button
  //                       onClick={() => removeThisItem(product._id)}
  //                       className={"neutral-btn" + smallBtn}
  //                     >
  //                       -
  //                     </button>
  //                     <span className="px-2">
  //                       {cartProducts.filter((id) => id === product._id).length}
  //                     </span>
  //                     <button
  //                       onClick={() => addThisItem(product._id)}
  //                       className={"neutral-btn" + smallBtn}
  //                     >
  //                       +
  //                     </button>
  //                   </td>
  //                   <td>
  //                     ₦
  //             `        {cartProducts.filter((id) => id === product._id).length *
  //                       product.price}
  //                   </td>
  //                 </tr>
  //               ))}
  //               <tr>
  //                 <td></td>
  //                 <td></td>
  //                 <td>₦{total}</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         )}
  //       </div>
  //       {!!cartProducts?.length && (
  //         <div className={box}>
  //           <h2 className="font-bold text-xl mb-2">Order information</h2>
  //           <div className="flex flex-col">
  //             <div>
  //               <input
  //                 type="text"
  //                 placeholder="name"
  //                 name="name"
  //                 value={name}
  //                 onChange={(e) => setName(e.target.value)}
  //               />
  //               <input
  //                 type="number"
  //                 placeholder="phone number"
  //                 name="phone"
  //                 value={phone}
  //                 onChange={(e) => setPhone(e.target.value)}
  //               />
  //               <input
  //                 type="text"
  //                 placeholder="email"
  //                 name="email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //               />
  //               <input
  //                 type="text"
  //                 placeholder="street address"
  //                 name="street"
  //                 value={street}
  //                 onChange={(e) => setStreet(e.target.value)}
  //               />
  //               <div className="flex gap-1">
  //                 <input
  //                   type="text"
  //                   placeholder="city"
  //                   name="city"
  //                   value={city}
  //                   onChange={(e) => setCity(e.target.value)}
  //                 />
  //                 <input
  //                   type="text"
  //                   placeholder="postal code"
  //                   name="postal"
  //                   value={postal}
  //                   onChange={(e) => setPostal(e.target.value)}
  //                 />
  //               </div>
  //               <input
  //                 type="text"
  //                 placeholder="state"
  //                 name="state"
  //                 value={state}
  //                 onChange={(e) => setState(e.target.value)}
  //               />
  //             </div>
  //             <button
  //               onClick={goToPayment}
  //               className={"black-btn block w-full" + btn}
  //             >
  //               Continue to payment
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
}
