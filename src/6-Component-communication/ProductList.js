import React from "react";
import PropTypes from "prop-types";

export default class ProductList extends React.Component {
  render() {
    const { products } = this.props;

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
