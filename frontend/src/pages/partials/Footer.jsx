import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300">
      <div className="text-gray-500 mb-2 md:mb-0">
        Design:{" "}
        <a
          rel="nofollow"
          target="_parent"
          href="https://templatemo.com"
          className="underline"
        >
          TemplateMo
        </a>
      </div>
      <div className="text-gray-500">
        Copyright 2020 Xtra Blog Company Co. Ltd.
      </div>
    </footer>
  );
}
