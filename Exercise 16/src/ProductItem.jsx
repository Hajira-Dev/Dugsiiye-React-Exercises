import { useContext } from "react";
import CartContext from "./CartContext";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ marginBottom: "8px" }}>
      <span>
        {product.name} - ${product.price}{" "}
      </span>
      <button onClick={() => addToCart(product)}>Add</button>
      <span> </span>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default ProductItem;
