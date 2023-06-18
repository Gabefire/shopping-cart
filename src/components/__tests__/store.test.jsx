import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Store from "../store";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

const fakeStore = [
  { shoe: "fake", name: "HOKA Clifton 9", price: "$150", amount: 0 },
  {
    shoe: "fake",
    name: "Asics Gel Kayano 29",
    price: "$160",
    amount: 0,
  },
  { shoe: "fake", name: "Nike Pegasus 39", price: "$60", amount: 0 },
];
const onClickAdd = (e) => {
  const index = e.target.id.split("-")[1];
  const shoe = fakeStore[index];
  shoe.amount += 1;
};

describe("Store component", () => {
  it("renders", () => {
    render(<Store store={fakeStore} />);
    expect(screen).toMatchSnapshot();
  });

  it("buttons click x times", () => {
    const onClickAdd = jest.fn();
    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const click = screen.getByRole("button", { name: /add Nike Pegasus 39/i });
    fireEvent.click(click);
    fireEvent.click(click);
    expect(onClickAdd).toHaveBeenCalledTimes(2);
  });

  it("add to cart", () => {
    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const click = screen.getByRole("button", { name: /add Nike Pegasus 39/i });
    fireEvent.click(click);
    fireEvent.click(click);
    expect(fakeStore[2].amount).toBe(2);
  });
});
