import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import itemsData from "../data/items.json";
import { toast } from "react-toastify";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const foundItem = itemsData.find((item) => item.id === id);
    setItem(foundItem);
  }, [id]);

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success(`${item.name} added to cart!`);
  };

  return item ? (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="h-64 w-full object-cover md:h-full"
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {item.name}
            </h1>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              ${(item.price / 100).toFixed(2)}
            </p>
            <button
              onClick={addToCart}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
            <Link
              to="/"
              className="mt-4 block text-blue-500 hover:text-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ItemDetail;
