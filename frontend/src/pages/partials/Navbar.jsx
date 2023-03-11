import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
import { getFromLs, removeFromLs } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function Login_register() {
  return (
    <div className="flex items-center ml-auto">
      <div className="mr-4 rounded-lg text-black bg-white font-semibold px-3 hover:bg-gray-400">
        <a href="/register">Register</a>
      </div>
      <div className="mr-4 rounded-lg font-medium hover:text-gray-400">
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

function Logout_username() {
  const navigate = useNavigate();
  const userData = getFromLs("user_data");
  const [picture, setPicture] = useState();

  useEffect(() => {
    setPicture(getFromLs("profile_pic"));
  }, []);

  return (
    <div className="flex items-center ml-auto">
      {userData && (
        <div className="w-10 h-10 mr-3">
          <img
            src={picture}
            alt="Profile picture"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      )}
      {userData && (
        <div className="mr-3">
          <a href="/profile/settings">{userData.name}</a>
        </div>
      )}
      <div className="mr-4 rounded-lg text-black bg-white font-semibold px-3 hover:bg-gray-400">
        <button
          onClick={() => {
            try {
              // Remove the jwt cookie
              cookies.remove("jwt");
              //remove user data from local storage
              removeFromLs("user_data");
              removeFromLs("profile_pic");
              // Navigate to the login page
              navigate("/login");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  //check if user logged in or not
  const user = cookies.get("jwt");
  // where to show search and where to not
  const { pathname } = window.location;
  const shouldShowSearch = ![
    "/register",
    "/login",
    "/contact",
    "/about",
  ].includes(pathname);
  //

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between px-4">
          <button
            className="block md:hidden text-white focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-shrink-0">
            <div className="mx-auto">
              <i className="fas fa-times fa-2x"></i>
            </div>
            <h1 className="text-center font-sans hover:text-gray-400">
              <a href="/">Blogg</a>
            </h1>
          </div>
          <nav className="flex">
            <ul className="flex items-center ml-20">
              <li className="mr-6">
                <a
                  href="/"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <i className="fas fa-home"></i>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="/posts"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <i className="fas fa-pen"></i>
                  <span className="ml-2">Single Post</span>
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="/about"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <i className="fas fa-users"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="/contact"
                  className="flex items-center text-white font-bold hover:text-gray-400"
                >
                  <i className="far fa-comments"></i>
                  <span className="ml-2">Contact us</span>
                </a>
              </li>
            </ul>
          </nav>
          {user ? <Logout_username /> : <Login_register />}
        </div>
      </header>
    </>
  );
}
