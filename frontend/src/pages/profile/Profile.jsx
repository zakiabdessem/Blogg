import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from "universal-cookie";
import { Buffer } from 'buffer';
import axios from "axios";

const cookies = new Cookies();
const resizeFileBlob = async (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });
const resizeFileBase64 = async (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

export default function Profile() {
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const [imageBase64, setImageBase64] = useState();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const imageBlob = await resizeFileBlob(file);
      const imageBase = await resizeFileBase64(file);
      setImageBase64(imageBase);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(imageBlob);
    } else {
      setError("Invalid image type");
    }
  };

  const handleImageSave = async (e) => {
    e.preventDefault();
    // Convert the base64-encoded image to a buffer
    const buffer = Buffer.from(imageBase64.split(",")[1], "base64");
    console.log("buffer is : ", buffer);
    try {
      // Send the buffer to your API
      const response = await axios.post(
        "http://localhost:3000/profile/picture/save",
        buffer,
        {
          headers: {
            Authorization: `Bearer ${cookies.get("jwt")}`,
            "Content-Type": "application/octet-stream",
          },
          withCredentials: true,
        }
      );
console.log(response)
      // TODO: handle success
    } catch (error) {
      console.error(error);
      // TODO: handle error
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={handleImageSave}>
        <label htmlFor="image">Upload a profile picture</label>
        <input type="file" accept="/image/*" onChange={handleImageUpload} />
        <button type="submit" >
          Save
        </button>
      </form>
      {image && <img src={image} alt="Profile picture" />}
    </>
  );
}
