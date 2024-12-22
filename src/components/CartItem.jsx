import React from "react";
import "../styles/CartItem.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
