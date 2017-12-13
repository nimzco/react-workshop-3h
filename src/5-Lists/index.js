// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";

function Title({children}) {
  return (<h1>{children}</h1>);
}

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
        <Title>List of products</Title>
        <ul className="products">
          <li>
            List all the products here
          </li>
        </ul>
      </div>
    );
  }
}

