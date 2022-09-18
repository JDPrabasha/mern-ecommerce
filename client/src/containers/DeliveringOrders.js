import React, { useEffect } from "react";
import ordersService from "../services/orders";

function DeliveringOrders() {
  const [orders, setOrders] = React.useState([]);
  const sellerID = JSON.parse(localStorage.getItem("user"))._id;
  const handleSubmit = (order) => {
    console.log("submit");
    console.log(order);
    ordersService.updateOrderStatus(order, { date: new Date() }).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    ordersService.getDeliveringOrdersBySeller(sellerID).then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        {orders.map((order) => (
          <div className="flex gap-6 border border-b-2 border-black">
            <div>
              <p>Order ID</p>
              <p>{order._id}</p>
            </div>
            <p>{order.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveringOrders;
