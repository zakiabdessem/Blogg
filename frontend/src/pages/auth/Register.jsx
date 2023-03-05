import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // the cookie is Saved Automaticly by using /withCredentials: true/
      const response = await axios.post(
        "http://localhost:3000/auth/sign-up",
        { email, password, name },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) navigate("/");
    } catch (e) {
      if (e.response) setError(e.response.data.error);
      else console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="ml-3">{error}</h3>
        <div className="space-y-1">
          <label htmlFor="Name">Name</label>
          <input
            className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            type="text"
            id="name"
            placeholder="Enter your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
        >
          Register
        </button>
      </form>
    </>
  );
}
