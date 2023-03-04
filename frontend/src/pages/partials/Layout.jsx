import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Navbar />
        <div className="container mx-auto">
          <main className="tm-main mt-10">{children}</main>
        </div>
      </div>
    </>
  );
}
