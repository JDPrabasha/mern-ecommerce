import React, { useEffect, useState } from "react";

export function ImageUpload({ addImage, image }) {
  const [postImage, setPostImage] = useState("");
  useEffect(() => {
    setPostImage(image);
  }, [image]);

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
  };

  return (
    <div>
      <img src={postImage} width="200" height="200" />

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
