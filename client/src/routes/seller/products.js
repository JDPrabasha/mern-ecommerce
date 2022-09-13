import React from "react";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";

function SellerProducts() {
  return (
    <div className="w-full flex ">
      <Sidebar />
      <div className="mx-12 mt-12">
        <p className="mb-4 text-4xl font-bold">Your Products</p>
        <ProductCard />
      </div>
    </div>
  );
}

export default SellerProducts;
