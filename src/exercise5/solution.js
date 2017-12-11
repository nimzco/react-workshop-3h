// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";
import products from "./products.json";

class App extends React.Component {
  render() {

    return (
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(<App firstName={true} />, document.getElementById("root"));
