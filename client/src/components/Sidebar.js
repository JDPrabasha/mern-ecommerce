import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const sellerId = localStorage.getItem("user")._id;
  const [products, setProducts] = useState(false);
  const [orders, setOrders] = useState(false);
  return (
    <div>
      <div className="h-screen bg-black p-5 text-white">
        <img src="/logo.png" width={100} alt="" className="mr-auto mb-20" />
        <Link to={`/seller/${sellerId}/products`}>
          <p
            onClick={() => {
              setProducts(true);
              setOrders(false);
            }}
            className={
              products
                ? "transition duration-150 mb-6 font-bold ease-in border-b-4  border-yellow-500 hover:cursor-pointer"
                : "transition duration-150 mb-6 font-bold ease-in border-b-4 border-transparent  hover:border-yellow-500 hover:cursor-pointer"
            }
          >
            PRODUCTS
          </p>
        </Link>
        <Link to={`/seller/${sellerId}/orders`}>
          <p
            onClick={() => {
              setProducts(false);
              setOrders(true);
            }}
            className={
              orders
                ? "transition duration-150 mb-6 font-bold ease-in border-b-4  border-yellow-500 hover:cursor-pointer"
                : "transition duration-150 mb-6 font-bold ease-in border-b-4 border-transparent hover:border-yellow-500 hover:cursor-pointer"
            }
          >
            ORDERS
          </p>
        </Link>
        <Link to={`/login`}>
          <p className="transition text-gray-200 duration-150 mb-6 font-bold ease-in border-b-4 border-transparent hover:border-yellow-500 hover:cursor-pointer">
            LOGOUT
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
