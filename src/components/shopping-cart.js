import "../styles/shopping-cart.css";

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((element) => {
        console.log(element);
        return (
          <div className="item">
            <img className="cart-img" src={element.shoe} alt={element.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
