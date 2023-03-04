import ReactDOM from "react-dom/client";
import { ProtectedRoute, BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Footer from "./pages/partials/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <App />
    <Footer/>
  </CookiesProvider>

 
);
