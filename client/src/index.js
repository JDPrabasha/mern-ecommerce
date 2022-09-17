import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";

import Login from "./routes/login";

import Product from "./routes/buyer/product";

import { CartProvider } from "./CartContext";
import Cart from "./routes/buyer/cart";
import Products from "./routes/buyer/home";
import Seller from "./routes/seller/home";
import SellerProducts from "./routes/seller/products";
import SellerOrders from "./routes/seller/orders";
import Add from "./routes/seller/add";
import { SellerProduct } from "./routes/seller/product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller/:name" element={<Seller />} />
        <Route path="/seller/:name/products" element={<SellerProducts />} />
        <Route path="/seller/:name/products/add" element={<Add />} />
        <Route path="/seller/:name/orders" element={<SellerOrders />} />
        <Route
          path="/seller/:name/products/:id/edit"
          element={<SellerProduct />}
        />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
