import React from 'react';
import { Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Product from './Product';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Our Site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" activeClassName="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeClassName="active" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" activeClassName="active" className="nav-link">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/product/:id" component={Product} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
