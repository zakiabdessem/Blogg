import React, { useState } from "react";
import axios from "axios";


export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/sign-up',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
           // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
        }
      );
      console.log(response.data)
     /* const cookies = response.headers['set-cookie'];
      const jwtCookie = cookies.find(cookie => cookie.startsWith('jwt='));
      const jwtToken = jwtCookie.split(';')[0].split('=')[1];
      console.log(jwtToken);*/
    } catch (e) {
      if (e.response) {
        setError(e.response.data.error);
      } else {
        console.log(e); // send it to admin panel
      }
    }
  };
  /*
  git rm --cached frontend

git add frontend

git commit -m "making frontend available"

git push

  */
  
  

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
