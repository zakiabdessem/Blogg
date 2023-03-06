import React from "react";
import Login from "./auth/Login";
import Layout from "./partials/Layout";
export default function LoginPage() {
  return (
    <Layout>
      <div
        id="page-container"
        className="flex flex-col mx-auto bg-gray-100"
      >
        <h3 className="flex items-center my-8">
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5"
          ></span>
          <span className="text-lg font-medium m-3">Login</span>
          <span
            aria-hidden="true"
            className="grow bg-gray-500 rounded h-0.5"
          ></span>
        </h3>
        <div className="px-10">
          <Login />
        </div>
 
      </div>
      <div className="flex items-center justify-center m-7">
        <p className="text-sm text-secondary">
          Don't have an account?{" "}
          <a
            className="text-blue-600 underline hover:text-blue-700"
            href="/register"
          >
            Sign Up
          </a>
        </p>
      </div>
    </Layout>
  );
}
