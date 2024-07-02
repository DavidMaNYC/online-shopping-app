import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (item, index) => index !== action.payload.index
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index === action.payload.index
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index === action.payload.index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "COMPLETE_ORDER":
      const totalValue = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return {
        ...state,
        orderHistory: [
          ...state.orderHistory,
          { orderId: Date.now(), items: state.cart, totalValue },
        ],
        cart: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { cart: [], orderHistory: [] },
    () => {
      const localData = localStorage.getItem("orderHistory");
      return localData ? JSON.parse(localData) : { cart: [], orderHistory: [] };
    }
  );

  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(state));
  }, [state]);

  const totalCost = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        orderHistory: state.orderHistory,
        dispatch,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
