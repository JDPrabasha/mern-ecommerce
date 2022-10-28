import React, { useEffect } from "react";
import deliveryService from "../services/delivery";
import ordersService from "../services/orders";

function PendingOrders() {
  const [orders, setOrders] = React.useState([]);
  const sellerID = JSON.parse(localStorage.getItem("user"))._id;
  const handleSubmit = (order) => {
    deliveryService.postDelivery(order._id).then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
        ordersService.updateOrderStatus(order, { date: res.data.date });
      }
    });
  };
  useEffect(() => {
    ordersService.getPendingOrdersBySeller(sellerID).then((res) => {
      setOrders(() => res.data);
    });
  }, []);

  return (
    <div>
      <div>
        {orders.map((order) => (
          <div className="flex gap-6 py-3 border-b border-black">
            <div className="align-center">
              <p className="mb-9 font-bold">Order Timestamp</p>
              <p>{new Date(order.createdAt).toLocaleString("en-US")}</p>
            </div>
            <div>
              <p className=" font-bold">Items</p>
              {order.products.map((product) => (
                <div className="flex gap-6 items-center">
                  <p>{product.name}</p>
                  <img src={product.image} className="w-24" alt="" />
                  <p>x{product.quantity}</p>
                  <p className="text-green-500">
                    Rs. {product.quantity * product.price}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-9 font-bold">Total</p>
              <p>
                Rs.{" "}
                {order.products.reduce(
                  (acc, product) => acc + product.quantity * product.price,
                  0
                )}
              </p>
            </div>
            <p
              onClick={() => handleSubmit(order._id)}
              className="border self-center border-black p-1 rounded-full text-sm px-2 hover:bg-blue-500 hover:text-white transition ease-in-out hover:cursor-pointer"
            >
              Send to Delivery
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingOrders;
