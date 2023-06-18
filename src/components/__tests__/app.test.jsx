import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../app";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("shopping cart displays and undisplays", async () => {
    const user = userEvent.setup();
    render(<App />);
    const headingButton = screen.getByRole("button", { name: /Cart/i });
    await act(() => user.click(headingButton));
    const shoppingCart = screen.getByRole("heading", {
      name: /Shopping Cart/i,
    });
    expect(shoppingCart).toBeInTheDocument();
    await act(() => user.click(headingButton));
    expect(shoppingCart).not.toBeInTheDocument();
  });
});
