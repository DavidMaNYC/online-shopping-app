import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import itemsData from "../data/items.json";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Items for Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="mb-4">{item.description}</p>
            <p className="text-lg font-bold mb-4">
              ${(item.price / 100).toFixed(2)}
            </p>
            <Link
              to={`/item/${item.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              View Item
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
