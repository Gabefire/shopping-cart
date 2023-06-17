import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import HomePage from "./home-page";
import Store from "./store";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
