import React, { Component } from "react";
class ProductDetails extends Component {
  handleSave = () => {
    //this.props.history.push("/product");
    this.props.history.replace("/product");
  };
  render() {
    return (
      <div>
        <h1>Product Details:{this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>save</button>
      </div>
    );
  }
}

export default ProductDetails;
