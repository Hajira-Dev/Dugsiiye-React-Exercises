import { useContext } from "react";
import CartContext from "./CartContext";

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  const totalCount = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart Summary</h2>
      <p>Items: {totalCount}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;
