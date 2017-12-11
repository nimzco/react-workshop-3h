import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import products from "./products.json";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <ProductList products={products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

function filterProducts(products, filterString) {
  return products.filter((product) => {
    return product.title.toLowerCase().indexOf(filterString) !== -1;
  });
}
