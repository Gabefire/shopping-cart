import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import HomePage from "./home-page";
import Store from "./store";
import Heading from "./header";
import "../styles/app.css";

import hokaBondi from "../assets/hoka-bondi-8.jpg";
import hokaClifton from "../assets/hoka-clifton-9.jpg";
import asicsKayano from "../assets/asics-gel-kayano-29.jpg";
import brooksGhost from "../assets/brooks-ghost-14.jpg";
import brooksLaunch from "../assets/brooks-launch-gts-9.jpg";
import mizunoWave from "../assets/mizuno-wave-rider-26.jpg";
import newBalanceFresh from "../assets/new-balance-fresh-form-12.jpg";
import nikePegasus from "../assets/nike-pegasus-39.jpg";

const App = () => {
  const store = [
    { shoe: hokaClifton, name: "HOKA Clifton 9", price: "$150" },
    {
      shoe: asicsKayano,
      name: "Asics Gel Kayano 29",
      price: "$160",
    },
    { shoe: brooksGhost, name: "Brooks Ghost 14", price: "$140" },
    {
      shoe: brooksLaunch,
      name: "Brooks Launch GTS-9",
      price: "$130",
    },
    {
      shoe: mizunoWave,
      name: "Mizuno Wave Rider 26",
      price: "$90",
    },
    {
      shoe: newBalanceFresh,
      name: "New Balance Fresh Form 12",
      price: "$110",
    },
    { shoe: nikePegasus, name: "Nike Pegasus 39", price: "$60" },
    { shoe: hokaBondi, name: "HOKA Bondi 8", price: "$100" },
  ];

  const [cart, setCart] = useState([]);

  const [displayShoppingCart, setDisplayShoppingCart] = useState(false);

  const addCartItem = (e) => {
    const index = e.target.id.split("-")[1];
    const tempStore = [...store];
    const shoe = tempStore[index];
    const tempCart = [...cart];
    const results = tempCart.find((element) => {
      if (element.name === shoe.name) {
        return true;
      }
      return false;
    });
    if (!results) {
      shoe.amount = 1;
      tempCart.push(shoe);
    } else {
      results.amount += 1;
    }

    setCart(tempCart);
  };

  const showShoppingCart = (e) => {
    e.target.classList.toggle("active");
    setDisplayShoppingCart((prevDisplay) => !prevDisplay);
  };

  const removeItem = (e) => {
    e.preventDefault();
    const index = e.target.id.split("-")[2];
    const tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  const addQuantity = (e) => {
    e.preventDefault();
    const index = e.target.id.split("-")[1];
    const tempCart = [...cart];
    tempCart[index].amount += 1;
    setCart(tempCart);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    const index = e.target.id.split("-")[1];
    const tempCart = [...cart];
    tempCart[index].amount -= 1;
    if (tempCart[index].amount === 0) {
      removeItem(e);
    } else {
      setCart(tempCart);
    }
  };

  return (
    <BrowserRouter>
      <Heading
        displayCart={showShoppingCart}
        cartAmount={cart.reduce((prev, current) => prev + current.amount, 0)}
      />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/store"
            element={<Store store={store} addCartItem={addCartItem} />}
          />
        </Routes>
        {displayShoppingCart ? (
          <ShoppingCart
            cart={cart}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ) : null}
      </div>
    </BrowserRouter>
  );
};

export default App;
