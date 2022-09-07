import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../slices/cartSlice";
import productsService from "../../services/products";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { NumberInput } from "@mantine/core";

function Product() {
  const [product, setProduct] = useState({});
  const item = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    console.log(item);
  };
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    productsService.getProduct(id).then((response) => {
      console.log(response);
      setProduct(response.data[0]);
    });
  }, []);

  return (
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
          className="border-2 w-fit px-4 py-1 rounded-lg mt-8 border-gray-900"
          onClick={() => dispatch(addItem(product))}
        >
          Add to Cart
        </p>
      </div>
    </div>
  );
}

export default Product;
