import React from "react";
export default function Sidebar() {
  return (
    <div className="bg-white w-64 p-4 flex flex-col h-screen">
      <div className="flex">
        <h2 className="text-lg text-gray-600 font-medium font-serif mb-4">
          <a href="/">Home</a>
        </h2>
        <span className="text-lg text-gray-600 font-medium font-mono mb-4 mr-2 ml-1">
          /
        </span>
        <h2 className="text-lg font-medium font-serif mb-4">Settings</h2>
      </div>
      <nav className="mb-8">
        <ul>
          <li>
            <a
              href="/profile/settings/account"
              className="text-gray-600 hover:text-gray-900 font-mono py-2 px-4 block"
            >
              Account Information
            </a>
          </li>
          <li>
            <a
              href="/profile/settings/picture"
              className="text-gray-600 hover:text-gray-900 font-mono py-2 px-4 block"
            >
              Profile picture
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-mono py-2 px-4 block"
            >
              Notifications
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <p className="text-gray-500 text-xs">
          &copy; 2023 BLOGG. All rights reserved.
        </p>
      </div>
    </div>
  );
}
