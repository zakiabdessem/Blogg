import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from "universal-cookie";
import axios from "axios";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { setToLs } from "../../utils/localstorage";
const cookies = new Cookies();

export default function ProfilePicChange() {
  const navigate = useNavigate();

  const [error, setError] = useState();
  const [errorUpload, setErrorUpload] = useState();
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const [imageURL, setImageURL] = useState();
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (shouldFetch) {
      async function fetchData() {
        try {
          const data = {
            imageURL,
          };

          const reponse = await axios.post(
            "http://localhost:3000/profile/picture/save",
            data,
            {
              headers: {
                Authorization: `Bearer ${cookies.get("jwt")}`,
              },
              withCredentials: true,
            }
          );
          setToLs("profile_pic", imageURL);
          navigate("/");
        } catch (err) {
          setError("Failed to change profile picture, please try again later");
          console.log(err);
        }
      }
      fetchData();
    }
  }, [imageURL]);

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

  const handleImageSave = async (e) => {
    e.preventDefault();
    if (!errorUpload) {
      // Sending the image Base64 to API
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "blogg_app_ProfilePics");
      formData.append("cloud_name", "dlua23dqn");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlua23dqn/image/upload",
          formData,
          { withCredentials: false }
        );
        if (response.status === 200) {
          setImageURL(response.data.url);
          setShouldFetch(true);
        }
        // Handle the response from the API
      } catch (err) {
        setError("Failed to change profile picture, please try again later");
        console.log(err);
        // Handle errors
      }
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setErrorUpload(false);
      const imageBlob = await resizeFileBlob(file);

      if (imageBlob) {
        // add check to ensure imageBlob is defined
        setFiles([imageBlob]);

        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(imageBlob);
      }
    } else {
      setErrorUpload(true);
      setError("Invalid image type");
    }
  };

  return (
    <Layout>
      <div className="text-black font-bold font-mono">
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={(e) => handleImageSave(e)}>
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Upload a profile picture
          </label>
          <input
            type="file"
            accept="/image/*"
            onChange={(e) => handleImageUpload(e)}
            className="border rounded py-2 px-3 mb-4"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile picture"
              className="mt-4 w-32"
            />
          )}
        </form>
      </div>
    </Layout>
  );
}
