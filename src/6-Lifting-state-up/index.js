import React from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";

function Title({children}) {
  return (<h2>{children}</h2>);
}

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://velvetmoustache.ca/products.json?limit=10')
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
        <Title>Shopping Bag</Title>
        <ProductList products={[]} />
        <hr />
        <Title>Products</Title>
        <SearchInput />
        <ProductList products={[]} />
      </div>

    );
  }
}

function filterProducts(products, filterString) {
  return products.filter((product) => {
    return product.title.toLowerCase().indexOf(filterString) !== -1;
  });
}

function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
