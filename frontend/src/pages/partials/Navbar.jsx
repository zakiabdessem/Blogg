import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
     <div className="fixed top-0 right-0 w-full md:w-auto md:mt-0 m-2">
        <form className="flex items-center mt-16">
          <input
            className="flex-grow bg-gray-200 border-transparent focus:outline-none focus:bg-white focus:border-gray-300 px-4 mr-2 mb-2 md:mb-0 rounded-lg text-gray-700"
            type="text"
            name="query"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-white"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>

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
                <a href="index.html" className="flex items-center text-white hover:text-gray-400">
                  <i className="fas fa-home"></i>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="mr-6">
                <a href="post.html" className="flex items-center text-white hover:text-gray-400">
                  <i className="fas fa-pen"></i>
                  <span className="ml-2">Single Post</span>
                </a>
              </li>
              <li className="mr-6">
                <a href="about.html" className="flex items-center text-white hover:text-gray-400">
                  <i className="fas fa-users"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="contact.html"
                  className="flex items-center text-white font-bold hover:text-gray-400"
                >
                  <i className="far fa-comments"></i>
                  <span className="ml-2">Contact us</span>
                </a>
              </li>
            </ul>
          </nav>
          <div></div>
          <div className="flex items-center ml-auto">
            <div className="mr-4 rounded-lg text-black bg-white font-semibold px-3 hover:bg-gray-400">
              <a href="/register">Register</a>
            </div>
            <div className="mr-4 rounded-lg font-medium hover:text-gray-400">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}
