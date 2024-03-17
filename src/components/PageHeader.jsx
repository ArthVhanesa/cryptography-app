import React from "react";

function PageHeader(props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default PageHeader;
