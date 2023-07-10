import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../shopping-cart";
import "@testing-library/jest-dom";

let fakeCart = [
  { shoe: "fake", name: "HOKA Clifton 9", price: "$150", amount: 6 },
  {
    shoe: "fake",
    name: "Asics Gel Kayano 29",
    price: "$160",
    amount: 1,
  },
  { shoe: "fake", name: "Nike Pegasus 39", price: "$60", amount: 3 },
];

const removeItem = (e) => {
  e.preventDefault();
  const index = e.target.id.split("-")[2];
  fakeCart.splice(index, 1);
};

describe("Shopping Cart Component", () => {
  test("Renders correctly", () => {
    render(<ShoppingCart cart={fakeCart} />);
    expect(screen).toMatchSnapshot();
  });

  test("Displays correct total", () => {
    render(<ShoppingCart cart={fakeCart} />);
    const total = screen.getByText(/Total: \$[0-9]+/);
    expect(total.textContent).toBe("Total: $1240");
  });

  test("Increase quantity", async () => {
    const addQuantity = (e) => {
      e.preventDefault();
      const index = e.target.id.split("-")[1];
      fakeCart[index].amount += 1;
    };
    const user = userEvent.setup();
    render(<ShoppingCart cart={fakeCart} addQuantity={addQuantity} />);
    const increase = screen.getByRole("button", {
      name: "Increase quantity HOKA Clifton 9",
    });
    await user.click(increase);
    expect(fakeCart[0].amount).toBe(7);
  });

  test("Decrease quantity", async () => {
    const decreaseQuantity = (e) => {
      e.preventDefault();
      const index = e.target.id.split("-")[1];
      fakeCart[index].amount -= 1;
    };
    const user = userEvent.setup();
    render(
      <ShoppingCart cart={fakeCart} decreaseQuantity={decreaseQuantity} />
    );
    const decrease = screen.getByRole("button", {
      name: "Decrease quantity HOKA Clifton 9",
    });
    await user.click(decrease);
    await user.click(decrease);
    expect(fakeCart[0].amount).toBe(5);
  });

  test("Decrease quantity to zero", async () => {
    const decreaseQuantity = (e) => {
      e.preventDefault();
      const index = e.target.id.split("-")[1];

      fakeCart[index].amount -= 1;
      if (fakeCart[index].amount === 0) {
        removeItem(e);
      }
    };
    const user = userEvent.setup();
    render(
      <ShoppingCart cart={fakeCart} decreaseQuantity={decreaseQuantity} />
    );
    const decrease = screen.getByRole("button", {
      name: "Decrease quantity HOKA Clifton 9",
    });
    await user.click(decrease);
    await user.click(decrease);
    await user.click(decrease);
    await user.click(decrease);
    await user.click(decrease);
    expect(fakeCart.length).toBe(2);
  });

  test("Delete cart item", async () => {
    const user = userEvent.setup();
    render(<ShoppingCart cart={fakeCart} removeItem={removeItem} />);
    const deleteButton = screen.getByRole("button", {
      name: "Delete Nike Pegasus 39",
    });
    await user.click(deleteButton);

    expect(fakeCart.length).toBe(1);
  });
});
