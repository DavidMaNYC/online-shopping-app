import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const { cart, dispatch } = useCart();

  const completeOrder = () => {
    dispatch({ type: "COMPLETE_ORDER" });
    toast.success("Order completed!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Summary</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg mb-4 shadow-lg bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-32 h-32 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p>{item.description}</p>
              <p className="text-lg font-bold mb-4">
                ${(item.price / 100).toFixed(2)}
              </p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <button
            onClick={completeOrder}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300 block text-center mt-8"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
