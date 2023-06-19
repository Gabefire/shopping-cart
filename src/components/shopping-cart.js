import "../styles/shopping-cart.css";

const ShoppingCart = ({ cart }) => {
  return (
    <form className="shopping-cart" key="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((element, index) => {
        console.log(element);
        return (
          <section className="item" key={`cart-item-${index}`}>
            <img className="cart-img" src={element.shoe} alt={element.name} />
            <div className="cart-input-container">
              <div className="quantity-container">
                <div className="decrease" id={`decrease-${index}`}>
                  -
                </div>
                <div className="amount">{element.amount}</div>
                <div className="increase" id={`increase-${index}`}>
                  +
                </div>
              </div>
              <input
                type="button"
                className="cart-button"
                id={`cart-button-${index}`}
                value={"Delete"}
              />
              <div className="shoe-amount">
                {`$${+element.amount * +element.price.slice(1)}`}
              </div>
            </div>
          </section>
        );
      })}
      <div className="total">
        Total:
        {` $${cart.reduce((prev, current) => {
          return prev + Number(current.price.slice(1) * current.amount);
        }, 0)}`}
      </div>
      <input type="submit" value="Checkout" className="checkout-button" />
    </form>
  );
};

export default ShoppingCart;
