import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";
import productsService from "../../services/products";

function SellerProducts() {
  const sellerId = JSON.parse(localStorage.getItem("user"))._id;
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    productsService.getProductsBySeller(sellerId).then((res) => {
      setProducts(res.data);
    });
  }, [sellerId]);
  return (
    <div className="w-full flex ">
      <Sidebar />
      <div className="mx-12 mt-12">
        <div className="flex items-center gap-6">
          <p className="mb-4 text-4xl font-bold">Your Products</p>
          <Link to={`/seller/${sellerId}/products/add`}>
            <p className="border border-purple-500 text-purple-500 hover:cursor-pointer font-bold rounded-full px-4">
              + ADD PRODUCT
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 mt-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;
