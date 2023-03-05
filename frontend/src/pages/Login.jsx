import React from "react";
import Login from "./auth/Login";
import Layout from "./partials/Layout";
export default function LoginPage() {
  return (
    <Layout>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        <h3 className="flex items-center my-8">
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5 w-80"
          ></span>
          <span className="text-lg font-medium mx-3">Login</span>
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5 w-80"
          ></span>
        </h3>
        <Login />
      </div>
    </Layout>
  );
}
