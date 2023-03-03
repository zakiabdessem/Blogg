import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto">
        <main className="tm-main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
