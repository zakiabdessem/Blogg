import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

import "./index.css";
import Footer from "./pages/partials/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
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
    <Footer />
  </CookiesProvider>
);
