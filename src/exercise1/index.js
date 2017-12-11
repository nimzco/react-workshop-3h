// -------------------------------------------------------------------------- //
// Ex. 1 Rendering in JSX
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById('root');
const element = document.createElement('div');

element.innerHTML = 'Hello World';
element.className = 'container';

rootNode.appendChild(element);

function heading({ value }) {
  return <h1>{value}</h1>;
}

const element2 = (
  <div className="container">
    {heading({ value: "Hello World" })}
    {heading({ value: "How are you" })}
  </div>
);


ReactDOM.render(element2, document.getElementById('root'));
