import { NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { ImageUpload } from "../../components/ImageUpload";
import Sidebar from "../../components/Sidebar";
import productsService from "../../services/products";

function Add() {
  const [image, setImage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(image);
    console.log(form.values);
    console.log(JSON.parse(localStorage.getItem("user"))._id);
    const payload = {
      ...form.values,
      image,
      sellerID: JSON.parse(localStorage.getItem("user"))._id,
      seller: JSON.parse(localStorage.getItem("user")).name,
    };
    console.log(payload);
    productsService.addProduct(payload);
  };
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
    },
    validate: {},
  });
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex ml-32 mt-32">
        <ImageUpload addImage={setImage} className="ml-6 mt-6" />
        <div className="">
          <label className="mb-2 text-sm font-semibold mt-4">
            Product Name
          </label>
          <TextInput
            {...form.getInputProps("name")}
            className="mb-2"
            placeholder="Enter a name"
          />
          <label className="mb-2 text-sm font-semibold mt-4">Description</label>
          <Textarea
            className="mb-2 "
            placeholder="Enter a description"
            withAsterisk
            minRows={6}
            {...form.getInputProps("description")}
          />
          <label className="mb-2 text-sm font-semibold mt-4">Price</label>
          <NumberInput
            {...form.getInputProps("price")}
            defaultValue={1000}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `Rs. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "Rs. "
            }
          />
          <label className="mb-2 text-sm font-semibold mt-6">Stock</label>
          <NumberInput
            {...form.getInputProps("stock")}
            defaultValue={100}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </div>
        <a
          onClick={handleSubmit}
          className="bg-gray-900 hover:cursor-pointer item self-center ml-12 mb-96 px-6 text-center text-white font-bold mt-8 rounded-lg py-1"
        >
          Add Product
        </a>
      </div>
    </div>
  );
}

export default Add;
