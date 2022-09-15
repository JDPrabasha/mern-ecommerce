import React from "react";
import Sidebar from "../../components/Sidebar";
import { GoPackage } from "react-icons/go";
import { GiShop } from "react-icons/gi";
import { Link } from "react-router-dom";

function Seller() {
  const sellerId = localStorage.getItem("user")._id;
  console.log();
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex ml-96 mt-48 justify-items-center">
        <div className="flex">
          <Link to={`/seller/${sellerId}/products`}>
            <div className="mr-6  border-2    border-black pl-7  w-48 h-48 rounded-lg flex flex-column justify-items-center items-center hover:bg-black hover:text-white transition ease-in-out hover:scale-105 hover:shadow-lg">
              <GiShop className="text-8xl" />
              <p className="font-bold p-6">Products</p>
            </div>
          </Link>
          <Link to={`/seller/${sellerId}/orders`}>
            <div className="  border-2    border-black pl-7  w-48 h-48 rounded-lg flex flex-column justify-items-center items-center hover:bg-black hover:text-white transition ease-in-out hover:scale-105 hover:shadow-lg">
              <GoPackage className="text-8xl" />
              <p className="font-bold p-6">Orders</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Seller;
