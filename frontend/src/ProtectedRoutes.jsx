import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { getFromLs, setToLs } from "./utils/localstorage";
const cookies = new Cookies();

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (cookies.get("jwt") == undefined) {
    return (
      <Navigate
        to="/login"
        state={{ error: "Please login or register to access that page" }}
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

        if (response.status === 200) {
          const { email, name } = response.data;
          setToLs("user_data", { email, name });
          setIsAuthenticated(true);
        }
      } catch (e) {
        return;
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
