import { Link } from "react-router-dom";
import "../styles/header.css";

const Heading = () => {
  return (
    <div className="heading">
      <h1>Running Shoes</h1>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <button>Cart</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
