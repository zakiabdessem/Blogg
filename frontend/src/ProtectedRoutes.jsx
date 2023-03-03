import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (cookies.get("jwt") == undefined) {
    return (
      <Navigate
        to="/login"
        state={{ error: "Please login to access that page" }}
      />
    );
  }
  
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify", {
          headers: {
            Authorization: `Bearer ${cookies.get("jwt")}`,
          },
          withCredentials: true,
        });
        console.log("response:", response);

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          console.log("response is not 200:", response);
        }
      } catch (e) {
        console.log("error:", e);
      }
      setIsLoading(false);
    };
    verifyToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
