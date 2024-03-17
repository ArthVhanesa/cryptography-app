import React from "react";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 border border-gray-300 shadow px-6 mb-3">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Crypto Generate</h1>
        </div>
        <div className="flex-none">
          <button className="rounded-full">
            <FaGithub size={30} />
          </button>
        </div>
      </div>
    </>
  );
};
