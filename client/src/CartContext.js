import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prevState) => [...prevState, item]);
  };

  const removeFromCart = (item) => {
    setItems((prevState) => prevState.filter((i) => i._id !== item._id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const changeQuantity = (item, quantity) => {
    setItems((prevState) =>
      prevState.map((i) => {
        if (i._id === item._id) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, changeQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
