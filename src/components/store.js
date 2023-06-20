import React from "react";
import "../styles/store.css";

const Store = ({ store, addCartItem }) => {
  return (
    <div className="cards">
      {store.map((item, index) => {
        return (
          <div className="card" key={`card-${index}`}>
            <img src={item.shoe} alt={item.name} />
            <div className="item-text">
              <div className="price">{item.price}</div>
              <div className="name">{item.name}</div>
            </div>
            <div className="add-item">
              <button
                className="add-item-button"
                onClick={addCartItem}
                aria-label={`add ${item.name}`}
                id={`card-${index}`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
