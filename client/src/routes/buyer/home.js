import React from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import Navbar from "../../components/Navbar";

const data = [
  {
    id: 1,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/150",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic incidunt rerum vero debitis aperiam atque, ad neque saepe eius nobis consequuntur fuga ratione praesentium quis quibusdam vel optio nam.",
    image: "https://via.placeholder.com/100",
    price: "100",
    quantity: "10",
    seller: "Seller 1",
  },
];

function Products() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-20">
        <p className="text-4xl font-bold mt-6">Seek and Ye Shall Find</p>
        <div className=" flex  flex-wrap gap-6  mt-8">
          {data.map((product) => {
            return (
              <Link to={`/products/${product._id}`} key={product._id}>
                <CartCard key={product._id} product={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
