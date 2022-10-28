import { NumberInput, Textarea, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageUpload } from "../../components/ImageUpload";
import Sidebar from "../../components/Sidebar";
import productsService from "../../services/products";
import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

export function SellerProduct() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [product, setProduct] = React.useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    productsService.updateProduct(id, {
      ...product,
      image,
    });
  };
  useEffect(() => {
    productsService.getProduct(id).then((res) => {
      setProduct(res.data[0]);
      setImage(res.data[0].image);
    });
  }, [id]);

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex ml-32 mt-32">
        <ImageUpload
          image={product.image}
          addImage={setImage}
          className="ml-6 mt-6"
        />

        <div className="">
          <label className="mb-2 text-sm font-semibold mt-4">
            Product Name
          </label>
          <TextInput
            className="mb-2"
            placeholder="Enter a name"
            defaultValue={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <label className="mb-2 text-sm font-semibold mt-4">Description</label>
          <Textarea
            className="mb-2 "
            withAsterisk
            minRows={6}
            defaultValue={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          <label className="mb-2 text-sm font-semibold mt-4">Price</label>
          <NumberInput
            value={product.price}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={(value) => setProduct({ ...product, price: value })}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `Rs. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "Rs. "
            }
          />
          <label className="mb-2 text-sm font-semibold mt-6">Stock</label>
          <NumberInput
            value={product.stock}
            parser={(value) => value.replace(/(?!^\d+$)^.+$/g, "")}
            onChange={(value) => setProduct({ ...product, stock: value })}
          />
        </div>
        <a
          onClick={handleSubmit}
          className="bg-gray-900 hover:cursor-pointer mb-96 item self-center ml-12 px-6 text-center text-white font-bold mt-8 rounded-lg py-1"
        >
          Save Changes
        </a>
      </div>
    </div>
  );
}

export default SellerProduct;
