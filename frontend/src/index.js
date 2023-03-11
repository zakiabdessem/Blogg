import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Posts from "./pages/Posts";

import Account_Information from "./pages/Settings/Account_Information";
import ProfilePicChange from "./pages/Settings/ProfilePicChange";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile/settings" element={<Account_Information />} />
          <Route path="/profile/settings">
            <Route path="account" element={<Account_Information />} />
            <Route path="picture" element={<ProfilePicChange />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
