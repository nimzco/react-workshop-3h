import React from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import {products} from "./products.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <ProductList products={products} />
      </div>
    );
  }
}


function filterProducts(products, filterString) {
  return products.filter((product) => {
    return product.title.toLowerCase().indexOf(filterString) !== -1;
  });
}
