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

  const box = "bg-white rounded-sm p-8";
  const btn = " text-lg px-4 py-1";
  const smallBtn = " px-3 py-1";

  const addThisItem = (id) => {
    addItemToCart(id);
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
          <div className={box}>
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
          <div className="bg-white flex flex-col justify-center items-center gap-2 mt-12">
            <h1 className="text-3xl font-normal mb-2">Your Cart is Empty</h1>
            <p className="text-lg text-primary font-semibold ">
              EARN POINTS. REDEEM REWARDS.
            </p>
            <p className="text-sm font-light mb-2">
              Sign in & shop to start earning!
            </p>
            <Link href={"/"} className="secondary-btn py-3 w-64 text-center">
              SIGN IN
            </Link>
            <p className="text-sm font-light mt-5">
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
              <div className="border-t-2 border-t-primary bg-white my-5 p-4">
                <h3 className="font-bold mb-2">
                  Cart&nbsp;
                  <span className="font-normal">
                    ({cartProducts.length}&nbsp;
                    {cartProducts.length > 1 ? "items" : "item"})
                  </span>
                </h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <label>
                    This order is a gift.&nbsp;
                    <Link href={"/ip"} className="underline">
                      Learn more
                    </Link>
                  </label>
                </div>
              </div>
              {products.map((product) => (
                <div key={product._id} className="bg-white flex p-4 mb-4">
                  <div className="w-40 h-40 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="w-80 px-5 border-r">
                    <p className="mb-1">{product.name}</p>
                    <p className="font-bold mb-4">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <div className="relative w-28 p-2 text-center border z-0">
                      <p className="absolute bg-white px-1 -top-3 left-9 z-10">
                        Qty
                      </p>
                      <button
                        onClick={() => removeThisItem(product._id)}
                        className={"neutral-btn" + smallBtn}
                      >
                        -
                      </button>
                      <span className="px-2">
                        {cartProducts.filter((id) => id === product._id).length}
                      </span>
                      <button
                        onClick={() => addThisItem(product._id)}
                        className={"neutral-btn" + smallBtn}
                      >
                        +
                      </button>
                      {/* <label
                        htmlFor="quantity"
                        className="bg-white px-1 absolute -top-3 left-3 z-10"
                      >
                        Qty
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        onChange={(e) =>
                          adjustQuantity(
                            e.target.value,
                            cartProducts.filter((id) => id === product._id)
                              .length,
                            product._id
                          )
                        }
                        value={itemCount[product._id]}
                        className="border w-14 h-14 z-0 text-center border-black focus:outline-dotted focus:outline-offset-4 focus:outline-primary"
                      /> */}
                    </div>
                  </div>
                  <div className="w-72 pl-8 text-sm">
                    <div className="flex items-center mb-5">
                      <input
                        type="radio"
                        name={product.name}
                        value="available"
                        checked
                        readOnly
                        className="w-5 h-5"
                      />
                      <label
                        htmlFor={product.name}
                        className="inline-flex items-center gap-1 ml-1 font-semibold"
                      >
                        <TickIcon className="inline w-4 h-4" /> Available to
                        Ship
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={product.name}
                        value="unavailable"
                        disabled
                        className="w-5 h-5"
                      />
                      <label
                        htmlFor={product.name}
                        disabled
                        className="inline-flex items-center gap-1 ml-1 text-neutral-500"
                      >
                        <FaCircleExclamation className="inline text-red-500 w-[13px] h-[13px]" />
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
              <div className="border-t-2 border-t-primary bg-white"></div>
              <div className="bg-white"></div>
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
