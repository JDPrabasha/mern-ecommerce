import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsService from "../../services/products";

function Product() {
  const [product, setProduct] = useState({});
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
    </div>
  );
}

export default Product;
