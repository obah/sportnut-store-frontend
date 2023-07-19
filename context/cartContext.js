"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    if (cartProducts?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const addItemToCart = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  const removeSingleItemFromCart = (productId) => {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  };

  const removeItemFromCart = (productId) => {
    setCartProducts((prev) => prev.filter((id) => id !== productId));
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addItemToCart,
        removeSingleItemFromCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
