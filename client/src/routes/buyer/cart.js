import React, { useContext } from "react";
import CartContext from "../../CartContext";

function Cart() {
  const { items } = useContext(CartContext);
  console.log(items);
  return <div>Cart</div>;
}

export default Cart;
