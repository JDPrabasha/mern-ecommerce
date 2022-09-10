import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import productsService from "../../services/products";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import CartContext from "../../CartContext";
import Navbar from "../../components/Navbar";

function Product() {
  let navigate = useNavigate();
  const handleSubmit = (product) => {
    addToCart(product);
    navigate(`/cart`);
  };

  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  const { items } = useContext(CartContext);
  console.log(items);

  const id = useParams().id;

  useEffect(() => {
    productsService.getProduct(id).then((response) => {
      console.log(response);
      setProduct(response.data[0]);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center mx-20">
        <div className="w-1/2">
          <Image src={product.image} />
        </div>
        <div className="w-1/2">
          <p className="text-3xl font-bold mb-4">{product.name}</p>
          <p className="mb-4">{product.description}</p>
          <NumberInput
            defaultValue={18}
            min={1}
            max={100}
            placeholder="Enter quantity"
            label="Quantity"
            withAsterisk
          />
          <p
            className="border-2 w-fit px-4 py-1 rounded-lg mt-8 border-gray-900 hover:bg-black hover:text-white hover:cursor-pointer hover:scale-105 focus:scale-75 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
            onClick={() => handleSubmit(product)}
          >
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
