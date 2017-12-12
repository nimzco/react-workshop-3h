// -------------------------------------------------------------------------- //
// Lifecycle methods
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";

const PRODUCTS_URL = 'https://www.chubbiesshorts.com/products.json';

class App extends React.Component {
  render() {
    return (
      <div>
        Loading products...
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
