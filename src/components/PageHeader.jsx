import React from "react";
import Algorithms from "@/assets/algorithms.json";

function PageHeader({ name }) {
  const algorithm = Algorithms.find((item) => item.name === name);

  return (
    <div className="mx-6 sm:m-0">
      {algorithm && (
        <>
          <h1 className="text-2xl font-bold">{algorithm.name}</h1>
          <p className="text-justify">{algorithm.description}</p>
        </>
      )}
    </div>
  );
}

export default PageHeader;
