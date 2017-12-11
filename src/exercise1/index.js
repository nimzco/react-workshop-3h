import React from "react";

function heading({ value }) {
  return <h1>{value}</h1>;
}

export default (
  <div className="container">
    {heading({ value: "Hello World" })}
    {heading({ value: "How are you" })}
  </div>
);

