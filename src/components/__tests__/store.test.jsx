import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Store from "../store";

describe("Store component", () => {
  it("renders", () => {
    const fakeStore = [
      { shoe: "fake", name: "HOKA Bondi 8", price: "$100", amount: 0 },
      { shoe: "fake", name: "test 8", price: "$100", amount: 0 },
    ];
    render(<Store store={fakeStore} />);
    expect(screen).toMatchSnapshot();
  });

  it("buttons click x times", () => {
    const fakeStore = [
      { shoe: "fake", name: "HOKA Bondi 8", price: "$100", amount: 0 },
    ];
    const onClickAdd = jest.fn();

    render(<Store store={fakeStore} addCartItem={onClickAdd} />);
    const click = screen.getByRole("button");
    fireEvent.click(click);
    fireEvent.click(click);
    expect(onClickAdd).toHaveBeenCalledTimes(2);
  });
});
