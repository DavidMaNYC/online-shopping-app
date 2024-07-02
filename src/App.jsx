import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import OrderHistory from "./components/OrderHistory";
import OrderHistoryDetail from "./components/OrderHistoryDetail";
import { useCart } from "./context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="p-4 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-5">
          <Link to="/" className="text-xl font-bold hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/order-history"
            className="text-xl font-bold hover:text-gray-300"
          >
            Order History
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/cart" className="text-xl font-bold hover:text-gray-300">
            Cart
          </Link>
          {itemCount > 0 && (
            <span className=" bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route
            path="/order-history/:orderId"
            element={<OrderHistoryDetail />}
          />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
