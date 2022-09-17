import React, { useState } from "react";
import axios from "axios";

export function ImageUpload({ addImage, image }) {
  const [postImage, setPostImage] = useState(image);

  const url = "http://localhost:5000/uploads";
  const createImage = (newImage) => axios.post(url, newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
    addImage(base64);
    console.log(postImage);
  };

  return (
    <div>
      <img src={image} width="200" height="200" />

      <input
        type="file"
        label="Image"
        className=""
        accept=".jpeg, .png, .jpg"
        onChange={(e) => handleFileUpload(e)}
      />
    </div>
  );
}
