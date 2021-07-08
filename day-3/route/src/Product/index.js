import React from 'react';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const products = ['Product One', 'Product Two', 'Product Three', 'Product Four'];
    const {
      match: { params },
    } = this.props;
    return <h1>Product details of {products[parseInt(params.id, 10)]}</h1>;
  }
}

export default withRouter(Product);
