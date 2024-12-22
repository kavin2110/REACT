import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
