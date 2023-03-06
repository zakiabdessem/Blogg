import React from "react";
import Login from "./auth/Register";
import Layout from "./partials/Layout";
export default function RegisterPage() {
  return (
    <Layout>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full bg-gray-100"
      >
        <h3 className="flex items-center my-8">
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5 w-80"
          ></span>
          <span className="text-lg font-medium mx-3">Register</span>
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5 w-80"
          ></span>
        </h3>
        <div className="px-10">
        <Login />
        </div>
      </div>
    </Layout>
  );
}
