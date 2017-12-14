// ------------------------------------------------------------------- //
//  Rendering lists of data in React
// ------------------------------------------------------------------- //
//  Objectives:
// • Using Array.prototype.map to render lists of data in React
// • Recognize how the `key` prop works and why it is required

import React from "react";

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://velvetmoustache.ca/products.json?limit=10')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response.products,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>List of products</h1>
        <ul className="products">
          <li>
            List all the products here
          </li>
        </ul>
      </div>
    );
  }
}

