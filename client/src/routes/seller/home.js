import React from "react";
import Sidebar from "../../components/Sidebar";
import { GoPackage } from "react-icons/go";
import { GiShop } from "react-icons/gi";

function Seller() {
  return (
    <div className="flex w-full">
      <Sidebar className="w-5/12" />
      <div className="flex ml-96 mt-48 justify-items-center">
        <div className="flex">
          <div className="mr-6  border-2    border-black pl-7  w-48 h-48 rounded-sm flex flex-column justify-items-center items-center">
            <GiShop className="text-8xl" />
            <p className="font-bold p-6">Products</p>
          </div>
          <div className="  border-2    border-black pl-7  w-48 h-48 rounded-sm flex flex-column justify-items-center items-center">
            <GoPackage className="text-8xl" />
            <p className="font-bold p-6">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller;
