// ------------------------------------------------------------------- //
//  Data fetching using lifecycle methods
// ------------------------------------------------------------------- //
//  Objectives:
// • Identify when to fetch data in the lifecycle of a component
//
// Instructions:
// • Use the window.fetch API to fetch the products from a JSON endpoint
// • Display a loading state while fetching for products
// • Pass the fetched data to our component's state to trigger an update

import React from "react";

const PRODUCTS_URL = 'https://velvetmoustache.ca/products.json';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Loading products...
      </div>
    );
  }
}
