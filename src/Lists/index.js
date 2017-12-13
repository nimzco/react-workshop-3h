// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount = () => {
    fetch('https://www.kyliecosmetics.com/products.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.products)
        this.setState({
          products: response.products,
        });
      });
  }

  render() {
    return (
      <ul>
        <li>
          List all the products here
        </li>
      </ul>
    );
  }
}

