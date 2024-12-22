import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import { fetchProducts } from "./utils/api";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <ProductList products={products} onAddToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
