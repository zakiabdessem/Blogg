import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getFromLs } from "../../utils/localstorage";
export default function Account_Information() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    setName(getFromLs("user_data").name);
    setEmail(getFromLs("user_data").email);
  }, []);

  return (
    <Layout>
      <div className="font-bold font-mono">Account Information</div>
      <div className="bg-white px-4 py-5 sm:px-6 max-w-xl">
        <div className="sm:flex sm:items-start sm:justify-between">
          <h2 className="text-lg leading-6 font-medium text-gray-900 font-mono sm:truncate">
            General Account Settings
          </h2>
        </div>
        <form className="mt-5">
          <hr></hr>
          <div className="flex flex-col">
            <div className="flex flex-col m-5">
              <label
                htmlFor="name"
                className="block font-bold font-mono text-gray-700"
              >
                Name
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-64 p-1 border-gray-300 font-mono text-bold rounded-md hover:bg-slate-300"
                  value={name}
                  disabled
                />
                <button className="ml-5 w-20 font-mono text-white bg-blue-600 rounded-lg hover:bg-slate-500">
                  <a>Edit</a>
                </button>
              </div>
            </div>

            <div className="flex flex-col m-5">
              <label
                htmlFor="email"
                className="block font-bold font-mono text-gray-700"
              >
                Email
              </label>
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-64 p-1 border-gray-300 font-mono text-bold rounded-md hover:bg-slate-300"
                  value={email}
                  disabled
                />
                <button className="ml-5 w-20 font-mono text-white bg-blue-600 rounded-lg hover:bg-slate-500">
                  <a href="/profile/settings/change/email">Edit</a>
                </button>
              </div>
            </div>

            <div className="flex flex-col m-5">
              <label
                htmlFor="password"
                className="block font-bold font-mono text-gray-700"
              >
                Password
              </label>
              <div className="flex">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  className="block w-64 p-1 border-gray-300 font-mono text-bold rounded-md hover:bg-slate-300"
                  value={' *********'}
                  disabled
                />
                <button className="ml-5 w-20 font-mono text-white bg-blue-600 rounded-lg hover:bg-slate-500">
                  <a href="/profile/settings/change/password">Edit</a>
                </button>
              </div>
            </div>
          </div>
        </form>
        <hr></hr>
      </div>
    </Layout>
  );
}
