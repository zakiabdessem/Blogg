import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify", {
          withCredentials: true,
        });
        if (response.status === 200) {
          console.log(response);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    verifyToken();
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
