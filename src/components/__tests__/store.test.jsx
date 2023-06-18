import React from "react";
import { render, screen } from "@testing-library/react";
import Store from "../store";
import userEvent from "@testing-library/user-event";

const fakeStore = [
  { shoe: "fake", name: "HOKA Clifton 9", price: "$150" },
  {
    shoe: "fake",
    name: "Asics Gel Kayano 29",
    price: "$160",
  },
  { shoe: "fake", name: "Nike Pegasus 39", price: "$60" },
];
const cart = [];
const onClickAdd = (e) => {
  const index = e.target.id.split("-")[1];
  const tempStore = [...fakeStore];
  const shoe = tempStore[index];
  const results = cart.find((element) => {
    if (element.name === shoe.name) {
      return true;
    }
    return false;
  });
  if (!results) {
    shoe.amount = 1;
    cart.push(shoe);
  } else {
    results.amount++;
  }
};

describe("Store component", () => {
  test("renders", () => {
    render(<Store store={fakeStore} />);
    expect(screen).toMatchSnapshot();
  });

  test("buttons click x times", async () => {
    const onClickAdd = jest.fn();
    const user = userEvent.setup();
    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const buttonNike = screen.getByRole("button", {
      name: /add Nike Pegasus 39/i,
    });
    await user.click(buttonNike);
    await user.click(buttonNike);
    expect(onClickAdd).toHaveBeenCalledTimes(2);
  });

  test("add to cart empty array", async () => {
    const user = userEvent.setup();
    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const buttonNike = screen.getByRole("button", {
      name: /add Nike Pegasus 39/i,
    });
    await user.click(buttonNike);
    await user.click(buttonNike);
    expect(cart[0].amount).toBe(2);
  });

  test("one shoe in cart array", async () => {
    const user = userEvent.setup();
    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const buttonNike = screen.getByRole("button", {
      name: /add Nike Pegasus 39/i,
    });
    await user.click(buttonNike);
    await user.click(buttonNike);
    const buttonAsics = screen.getByRole("button", {
      name: /add Asics Gel Kayano 29/i,
    });
    await user.click(buttonAsics);
    await user.click(buttonAsics);
    expect(cart[1].amount).toBe(2);
    expect(cart.length).toBe(2);
  });
});
