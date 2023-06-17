import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import HomePage from "./home-page";
import Store from "./store";
import Heading from "./header";
import "../styles/route-switch.css";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<Store />} />
          </Routes>
          <ShoppingCart />
        </div>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
