import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../slices/cartSlice";
import productsService from "../../services/products";

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
    <div>
      <p>{product.name}</p>
      <p
        className="bg-blue-100 w-fit px-4 py-1 rounded-lg"
        onClick={() => dispatch(addItem(product))}
      >
        Add to Cart
      </p>
    </div>
  );
}

export default Product;
