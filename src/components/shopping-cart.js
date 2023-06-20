import "../styles/shopping-cart.css";

const ShoppingCart = ({ cart, addQuantity, decreaseQuantity, removeItem }) => {
  const showCart = () => {
    return (
      <form className="shopping-cart" key="shopping-cart">
        <h2>Shopping Cart</h2>
        {cart.map((element, index) => {
          return (
            <fieldset className="item" key={`cart-item-${index}`}>
              <img className="cart-img" src={element.shoe} alt={element.name} />
              <div className="shoe-name-cart">{element.name}</div>
              <div className="shoe-amount">
                {`$${+element.amount * +element.price.slice(1)}`}
              </div>
              <div className="cart-input-container">
                <div className="quantity-container">
                  <button
                    aria-label={`Decrease quantity ${element.name}`}
                    className="decrease quantity-button"
                    id={`decrease-${index}`}
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <div className="amount">{element.amount}</div>
                  <button
                    aria-label={`Increase quantity ${element.name}`}
                    className="increase quantity-button"
                    id={`increase-${index}`}
                    onClick={addQuantity}
                  >
                    +
                  </button>
                </div>
                <button
                  aria-label={`Delete ${element.name}`}
                  className="delete-cart-button"
                  id={`cart-button-${index}`}
                  onClick={removeItem}
                >
                  Delete
                </button>
              </div>
            </fieldset>
          );
        })}
        <div className="footer">
          <div aria-label="total amount" className="total">
            Total:
            {` $${cart.reduce((prev, current) => {
              return prev + Number(current.price.slice(1) * current.amount);
            }, 0)}`}
          </div>
          <input
            type="submit"
            value="Checkout"
            className="checkout-button"
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </form>
    );
  };

  return cart.length !== 0 ? (
    showCart()
  ) : (
    <h2 className="shopping-cart" key="shopping-cart">
      Cart is Empty
    </h2>
  );
};

export default ShoppingCart;
