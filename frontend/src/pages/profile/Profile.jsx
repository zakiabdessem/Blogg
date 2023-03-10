import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from "universal-cookie";
import axios from "axios";
import { setToLs, getFromLs } from "../../utils/localstorage";

const resizeFileBlob = async (
  file // resize it just for preview
) =>
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

export default function Profile() {
  const [error, setError] = useState();
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const [imageURL, setImageURL] = useState();

  const handleImageSave = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      e.preventDefault();
      // Sending the image Base64 to API
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "blogg_app_ProfilePics");
      formData.append("cloud_name", "dlua23dqn");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlua23dqn/image/upload",
          formData
        );
        if (response.status === 200) setImageURL(response.data.url);
        // Handle the response from the API
      } catch (err) {
        console.log(err);
        // Handle errors
      }
    } else {
      setError("Invalid image type");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const imageBlob = await resizeFileBlob(file);

      setFiles([imageBlob]);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(imageBlob);
    } else {
      setError("Invalid image type");
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={(e) => handleImageSave(e)}>
        <label htmlFor="image">Upload a profile picture</label>
        <input
          type="file"
          accept="/image/*"
          onChange={(e) => handleImageUpload(e)}
        />
        <button type="submit">Save</button>
        {imagePreview && <img src={imagePreview} alt="Profile picture"></img>}
      </form>
    </>
  );
}
