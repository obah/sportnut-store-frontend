"use client";

import { CartContext } from "@/context/cartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

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

  const { cartProducts, addItemToCart, removeItemFromCart, clearCart } =
    useContext(CartContext);

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

  const removeThisItem = (id) => {
    removeItemFromCart(id);
  };

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

  return (
    <div className="center">
      <div className="cart-wrapper mt-10">
        <div className={box}>
          <h2 className="font-bold text-xl mb-2">Cart</h2>
          {!cartProducts?.length && (
            <p className="font-bold text-lg">Your cart is empty</p>
          )}
          {products?.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div className="h-36 w-36 flex justify-center items-center p-3 rounded-md shadow-md">
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                          src={product.images[0]}
                          alt=""
                          className="image-box"
                        />
                      </div>
                      {product.name}
                    </td>
                    <td>
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
                    </td>
                    <td>
                      ₦
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>₦{total}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        {!!cartProducts?.length && (
          <div className={box}>
            <h2 className="font-bold text-xl mb-2">Order information</h2>
            <div className="flex flex-col">
              <div>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="phone number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="street address"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <div className="flex gap-1">
                  <input
                    type="text"
                    placeholder="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="postal code"
                    name="postal"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <button
                onClick={goToPayment}
                className={"black-btn block w-full" + btn}
              >
                Continue to payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
