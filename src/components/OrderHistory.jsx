import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderHistory = () => {
  const { orderHistory } = useCart();

  const calculateTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Order History</h1>
      {orderHistory.length === 0 ? (
        <p className="text-center">No previous orders</p>
      ) : (
        <div className="space-y-4">
          {orderHistory.map((order) => (
            <div
              key={order.orderId}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Order ID: {order.orderId}
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total Items: {calculateTotalItems(order.items)}</p>
                  <p className="text-lg font-bold">
                    Total: ${(order.totalValue / 100).toFixed(2)}
                  </p>
                </div>
                <Link
                  to={`/order-history/${order.orderId}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link
        to="/"
        className="block mt-8 text-blue-500 hover:text-blue-700 text-center"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderHistory;
