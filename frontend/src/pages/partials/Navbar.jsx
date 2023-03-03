import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <button
            className="block md:hidden text-white focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-shrink-0">
            <div className="mb-3 mx-auto">
              <i className="fas fa-times fa-2x"></i>
            </div>
            <h1 className="text-center">Xtra Blog</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center">
              <li className="mr-6">
                <a href="index.html" className="flex items-center text-white">
                  <i className="fas fa-home"></i>
                  <span className="ml-2">Blog Home</span>
                </a>
              </li>
              <li className="mr-6">
                <a href="post.html" className="flex items-center text-white">
                  <i className="fas fa-pen"></i>
                  <span className="ml-2">Single Post</span>
                </a>
              </li>
              <li className="mr-6">
                <a href="about.html" className="flex items-center text-white">
                  <i className="fas fa-users"></i>
                  <span className="ml-2">About Xtra</span>
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="contact.html"
                  className="flex items-center text-white font-bold"
                >
                  <i className="far fa-comments"></i>
                  <span className="ml-2">Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center ml-auto">
            <a href="https://facebook.com" className="tm-social-link mr-2">
              <i className="fab fa-facebook tm-social-icon"></i>
            </a>
            <a href="https://twitter.com" className="tm-social-link mr-2">
              <i className="fab fa-twitter tm-social-icon"></i>
            </a>
            <a href="https://instagram.com" className="tm-social-link mr-2">
              <i className="fab fa-instagram tm-social-icon"></i>
            </a>
            <a href="https://linkedin.com" className="tm-social-link mr-2">
              <i className="fab fa-linkedin tm-social-icon"></i>
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start bg-gray-100 px-4 py-8">
        <form className="flex w-full md:w-auto">
          <input
            className="flex-grow bg-gray-200 border-transparent focus:outline-none focus:bg-white focus:border-gray-300 px-4 py-2 mr-2 mb-2 md:mb-0 rounded-lg text-gray-700"
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
    </>
  );
}
