import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import HomePage from "./home-page";
import Store from "./store";
import Heading from "./header";
import "../styles/route-switch.css";

import hokaBondi from "../assets/hoka-bondi-8.jpg";
import hokaClifton from "../assets/hoka-clifton-9.jpg";
import asicsKayano from "../assets/asics-gel-kayano-29.jpg";
import brooksGhost from "../assets/brooks-ghost-14.jpg";
import brooksLaunch from "../assets/brooks-launch-gts-9.jpg";
import mizunoWave from "../assets/mizuno-wave-rider-26.jpg";
import newBalanceFresh from "../assets/new-balance-fresh-form-12.jpg";
import nikePegasus from "../assets/nike-pegasus-39.jpg";

const App = () => {
  const [store, setStore] = useState([
    { shoe: hokaClifton, name: "HOKA Clifton 9", price: "$150", amount: 0 },
    {
      shoe: asicsKayano,
      name: "Asics Gel Kayano 29",
      price: "$160",
      amount: 0,
    },
    { shoe: brooksGhost, name: "Brooks Ghost 14", price: "$140", amount: 0 },
    {
      shoe: brooksLaunch,
      name: "Brooks Launch GTS-9",
      price: "$130",
      amount: 0,
    },
    { shoe: mizunoWave, name: "Mizuno Wave Rider 26", price: "$90", amount: 0 },
    {
      shoe: newBalanceFresh,
      name: "New Balance Fresh Form 12",
      price: "$110",
      amount: 0,
    },
    { shoe: nikePegasus, name: "Nike Pegasus 39", price: "$60", amount: 0 },
    { shoe: hokaBondi, name: "HOKA Bondi 8", price: "$100", amount: 0 },
  ]);
  const [cart, setCart] = useState([]);
  const [displayShoppingCart, setDisplayShoppingCart] = useState(false);
  const [amountCart, setAmountCart] = useState(0);

  const addCartItem = () => {
    console.log("item added");
  };

  return (
    <BrowserRouter>
      <Heading />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/store"
            element={
              <Store store={store} cart={cart} addCartItem={addCartItem} />
            }
          />
        </Routes>
        <ShoppingCart />
      </div>
    </BrowserRouter>
  );
};

export default App;
