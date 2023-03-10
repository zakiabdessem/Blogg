import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from "universal-cookie";
import axios from "axios";
import { setToLs, getFromLs } from "../../utils/localstorage";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

const cookies = new Cookies();

export default function Profile() {
  const [error, setError] = useState();
  const [files, setFiles] = useState([]);

  const handleImageSave = async (e) => {
    e.preventDefault();
    // Sending the image Base64 to API
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "blogg_app");
    formData.append("cloud_name","dlua23dqn")

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlua23dqn/image/upload",
        formData
      );
      console.log(response)
      // Handle the response from the API
    } catch (error) {
      console.log(error);
      // Handle errors
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={handleImageSave}>
        <label htmlFor="image">Upload a profile picture</label>
        <input
          type="file"
          accept="/image/*"
          onChange={(e) => setFiles(e.target.files)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

