import CartCard from "./components/CartCard";

import React, { useState, useEffect } from "react";
import productsService from "./services/products";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsService.getProducts().then((products) => {
      console.log(products.data);
      setProducts(products.data);
    });
  }, []);

  return (
    <div className="App text-3xl ml-5 mt-5">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <p className="font-bold text-5xl mb-8">Ecommerce App</p>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <CartCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
