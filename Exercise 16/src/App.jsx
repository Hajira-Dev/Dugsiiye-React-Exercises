import { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Headphones", price: 80 },
  { id: 3, name: "Keyboard", price: 45 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);
      if (index === -1) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <div style={{ textAlign: "center", color: "#1075d4" }}>
        <h1>Feel Free To Shop:</h1>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        <CartSummary />
      </div>
    </CartContext.Provider>
  );
};

export default App;
