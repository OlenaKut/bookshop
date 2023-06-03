import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext({
  state: {
    cart: [
      {
        id: "default id",
        image: "default image",
        pris: null,
      },
    ],
  },
  addToCart: (book) => {},
  removeFromCart: (id) => {},
  increase: (id) => {},
  decrease: (id) => {},
});

export const BookContextProvider = ({ children }) => {
  const [state, setState] = useState({
    cart: [],
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <BookContext.Provider
      value={{ state, setState, addToCart, increase, decrease, removeFromCart }}
    >
      {children}
    </BookContext.Provider>
  );
};