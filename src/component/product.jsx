import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
      { id: 4, name: "Product 4" }
    ]
  };
  render() {
    return (
      <div>
        <h1>Product Page</h1>
        <nav>
          <ul>
            {this.state.products.map(product => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Product;
