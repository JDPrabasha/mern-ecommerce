import React from "react";

function Order() {
  return (
    <div>
      <div className="flex gap-6">
        <p>OrderID</p>
        <div className="items">
          <p>Item</p>
          <p>image</p>
          <p>quantity</p>
        </div>
        <p>Total</p>
        <p>Button to conform</p>
      </div>
    </div>
  );
}

export default Order;
