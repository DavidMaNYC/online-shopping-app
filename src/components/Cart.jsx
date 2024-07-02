import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, dispatch, totalCost } = useCart();

  const incrementQuantity = (index) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { index } });
    toast.info("Quantity increased!");
  };

  const decrementQuantity = (index) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { index } });
    toast.info("Quantity decreased!");
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: { index } });
    toast.error("Item removed from cart!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center bg-white"
            >
              <div className="mb-4 md:mb-0 w-full md:w-auto">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="text-lg font-bold">
                  ${(item.price / 100).toFixed(2)}
                </p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => incrementQuantity(index)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  +
                </button>
                <button
                  onClick={() => decrementQuantity(index)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  -
                </button>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-2xl font-bold">
            Total: ${(totalCost / 100).toFixed(2)}
          </div>
          <Link
            to="/order-summary"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300 block text-center mt-8"
          >
            Complete Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
