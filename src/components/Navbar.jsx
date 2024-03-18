import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 border border-gray-300 shadow px-6 mb-3">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-2xl font-bold">Crypto Generate</h1>
          </Link>
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
