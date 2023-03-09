import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from "universal-cookie";
import axios from "axios";
import { setToLs, getFromLs } from "../../utils/localstorage";

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
/*useEffect(() => {
if(!getFromLs("profile_picture")){
  //TODO: get the image from DB by user id
}

}, []);*/

export default function Profile() {
  const [error, setError] = useState();
  const [renderImage, setRenderImage] = useState();
  const [imageBlob, setImageBlob] = useState();
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file && file.type.substring(0, 5) === "image") {
      const _imageBlob = await resizeFileBlob(file);
      setImageBlob(_imageBlob);
      const reader = new FileReader();
      reader.onload = () => {
        setRenderImage(reader.result);
      };
      reader.readAsDataURL(_imageBlob);
    } else {
      setError("Invalid image type");
    }
  };

  const handleImageSave = async (e) => {
    e.preventDefault();
    // Sending the image Base64 to API
    const data = {
      imageBlob,
    };

    try {
      // Send the image url to your API
      const response = await axios.post(
        "http://localhost:3000/profile/picture/save",
        data,
        {
          headers: {
            Authorization: `Bearer ${cookies.get("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );
      
      if (response.status === 200) console.log("status 200", response);
      // TODO: save base64 to localStorage
      setToLs("profile_picture", renderImage);
    } catch (error) {
      console.log(error);
      // TODO: handle error
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={handleImageSave}>
        <label htmlFor="image">Upload a profile picture</label>
        <input type="file" accept="/image/*" onChange={handleImageUpload} />
        <button type="submit">Save</button>
      </form>
      {renderImage && <img src={renderImage} alt="Profile picture" />}
    </>
  );
}
