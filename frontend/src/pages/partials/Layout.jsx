import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, hideNavBar, hideFooter }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {!hideNavBar && <Navbar />}
        <div className="container mx-auto">
          <main className="tm-main mt-20">{children}</main>
        </div>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}
