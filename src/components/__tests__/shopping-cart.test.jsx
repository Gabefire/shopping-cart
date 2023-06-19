import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../shopping-cart";
import "@testing-library/jest-dom";

const fakeCart = [
  { shoe: "fake", name: "HOKA Clifton 9", price: "$150", amount: 2 },
  {
    shoe: "fake",
    name: "Asics Gel Kayano 29",
    price: "$160",
    amount: 1,
  },
  { shoe: "fake", name: "Nike Pegasus 39", price: "$60", amount: 3 },
];

describe("Shopping Cart Component", () => {
  test("Renders correctly", () => {
    render(<ShoppingCart cart={fakeCart} />);
    expect(screen).toMatchSnapshot();
  });
});
