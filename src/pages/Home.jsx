import React from "react";
import data from "@/assets/algorithms.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <Link key={index} to={item.path}>
          <div className="m-4 p-4 border rounded shadow w-60 h-[105px]">
            <h2 className="font-bold">{item.name}</h2>
            <p className="break-normal">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
