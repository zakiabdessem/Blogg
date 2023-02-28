import React, { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/sign-up',
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
          withCredentials: true
        }
      );
    // the cookie is Saved Automaticly by using /withCredentials: true/
      console.log(response.data)
    // redirect to home page


    } catch (e) {
      if (e.response) {
        setError(e.response.data.error);
      } else {
        console.log(e); // send it to admin panel
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{error}</h3>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
