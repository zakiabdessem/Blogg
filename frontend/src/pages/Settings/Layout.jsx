import React from "react";
import Sidebar from "./Sidebar";
import "../../index.css"; // import index.css

export default function Settings({ children }) {
  return (
    <div className="border border-gray-200 rounded-md flex">
      <Sidebar />
      <main className="mt-10">{children}</main>
    </div>
  );
}
