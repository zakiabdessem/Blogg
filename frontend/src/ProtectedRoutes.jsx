import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify", {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }else{
          console.log("responed is: ",response)

        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    verifyToken();
    console.log("is Auth: ", isAuthenticated);
    console.log("is Loading: ", isLoading);
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoutes;
