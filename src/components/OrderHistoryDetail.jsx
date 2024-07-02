import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderHistoryDetail = () => {
  const { orderId } = useParams();
  const { orderHistory, dispatch } = useCart();
  const order = orderHistory.find(
    (order) => order.orderId === parseInt(orderId)
  );
  const navigate = useNavigate();

  const reorderItems = () => {
    order.items.forEach((item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    });
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-4">
      {order ? (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">
            Order ID: {order.orderId}
          </h1>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg bg-white flex items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <Link
                    to={`/item/${item.id}`}
                    className="text-xl font-semibold hover:text-blue-700"
                  >
                    {item.name}
                  </Link>
                  <p>Quantity: {item.quantity}</p>
                  <p className="text-lg font-bold">
                    ${(item.price / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right text-2xl font-bold mt-8">
            Total: ${(order.totalValue / 100).toFixed(2)}
          </div>
          <button
            onClick={reorderItems}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300 block text-center mt-8"
          >
            Reorder Items
          </button>
          <Link
            to="/order-history"
            className="block mt-8 text-blue-500 hover:text-blue-700 text-center"
          >
            Back to Order History
          </Link>
        </>
      ) : (
        <p className="text-center">Order not found</p>
      )}
    </div>
  );
};

export default OrderHistoryDetail;
