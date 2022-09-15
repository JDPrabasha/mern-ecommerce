import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import Navbar from "../../components/Navbar";
import productsService from "../../services/products";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsService.getProducts().then((products) => {
      console.log(products.data);
      setProducts(products.data);
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-20">
        <p className="text-4xl font-bold mt-6">Seek and Ye Shall Find</p>
        <div className=" flex  flex-wrap gap-6  mt-8">
          {products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id}>
              <CartCard key={product._id} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
