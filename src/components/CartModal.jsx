import React from "react";
import CartItem from "./CartItem";
import "../styles/CartModal.css";

const CartModal = ({ cart, onClose, onRemove }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </ul>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
