import React from "react";
import data from "@/assets/algorithms.json";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <div key={index} className="m-4 border rounded shadow w-60 h-auto">
          <Link to={item.path}>
            <div className="p-4">
              <h2 className="font-bold">{item.name}</h2>
              <p className="line-clamp-2 text-sm">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
