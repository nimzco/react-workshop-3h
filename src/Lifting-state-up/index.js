import React from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";

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
    const {products} = this.state;

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
