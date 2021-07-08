import React from 'react';
import { Link } from 'react-router-dom';

export default class Products extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product One</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/product/0">View Product</Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Two</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/product/1">View Product</Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Three</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/product/2">View Product</Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Four</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/product/3">View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
