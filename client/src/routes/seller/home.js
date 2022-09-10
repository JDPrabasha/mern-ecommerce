import React from "react";
import Sidebar from "../../components/Sidebar";

function Seller() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex gap-6">
        <div className="w-12 h-12  border-1 border-red-400">Products</div>
        <div>Orders</div>
      </div>
    </div>
  );
}

export default Seller;
