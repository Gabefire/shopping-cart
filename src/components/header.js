import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Heading = ({ displayCart, cartAmount }) => {
  return (
    <div className="heading" key="heading">
      <h1 className="title">Running Shoes</h1>
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <button onClick={displayCart} className="header-button">
              Cart {cartAmount}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
