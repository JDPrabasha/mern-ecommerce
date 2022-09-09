import React, { useContext } from "react";
import CartContext from "../../CartContext";

function Cart() {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <div className="h-screen flex">
      <div className="w-3/5">
        <h1 className="text-4xl font-bold">Cart</h1>
        {items.map(function (item, i) {
          return (
            <div className="flex items-center" key={i}>
              <img
                src={item.image}
                className="w-32 h-32 object-cover p-5"
                alt=""
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="w-2/5 bg-gray-700">
        <p>Checkout</p>
      </div>
    </div>
  );
}

export default Cart;
