import React, { useEffect } from "react";
import ordersService from "../services/orders";

function DeliveringOrders() {
  const [orders, setOrders] = React.useState([]);
  const sellerID = JSON.parse(localStorage.getItem("user"))._id;

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
            <div>
              <p className="mb-9 font-bold">Delivery Date</p>
              <p>Date</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveringOrders;
