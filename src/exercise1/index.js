// -------------------------------------------------------------------------- //
// Ex. 1 Rendering elements using plain JavaScript
// -------------------------------------------------------------------------- //

const rootNode = document.getElementById('root');
const element = document.createElement('div');

element.innerHTML = 'Hello World';
element.className = 'container';

rootNode.appendChild(element);


// -------------------------------------------------------------------------- //
// Ex. 2 Rendering elements using React.createElement(type, props, children)
// -------------------------------------------------------------------------- //

// import React from "react";
// import ReactDOM from "react-dom";

// const element = React.createElement(
//   'div',
//   {className: 'container'},
//   'Hello World',
// );

// ReactDOM.render(element, document.getElementById('root'));


// -------------------------------------------------------------------------- //
// Ex. 3 Rendering elements using JSX
//
// We can verify that the code below is equivalent to the previous exercise by
// checking out the output produced by Babel: https://goo.gl/64yWVP
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div className="container">
    Hello World
  </div>
);

ReactDOM.render(element, document.getElementById('root'));


// -------------------------------------------------------------------------- //
// Ex. 4 Embedding expressions in JSX
// -------------------------------------------------------------------------- //

// import React from "react";
// import ReactDOM from "react-dom";

// function heading({ value }) {
//   return <h1>{value}</h1>;
// }

// const element2 = (
//   <div className="container">
//     {heading({value: 'Hello World'})}
//     {heading({value: 'How are you'})}
//   </div>
// );

// ReactDOM.render(element2, document.getElementById('root'));
