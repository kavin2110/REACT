import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const { image, title, price } = product;
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
