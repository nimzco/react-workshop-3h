import React from "react";
import ReactDOM from "react-dom";

function heading({ value }) {
  return <h1>{value}</h1>;
}

const element = (
  <div className="container">
    {heading({ value: "Hello World" })}
    {heading({ value: "How are you" })}
  </div>
);


ReactDOM.render(element, document.getElementById('root'));
