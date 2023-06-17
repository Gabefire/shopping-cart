import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import HomePage from "./home-page";
import Store from "./store";
import "../styles/route-switch.css";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <div className="heading">
          <h1>Running Shoes</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <button>Cart</button>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
      <ShoppingCart />
    </>
  );
};

export default RouteSwitch;
