import React, { Component } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../CartWidget/CartWidget.css"
import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <NavLink class="navbar-brand" to="/">Ecommerce</NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/categoria/cintas">
                    Cintas
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/categoria/indoor">
                    Indoor
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/categoria/elipticos">
                    Elípticos
                  </NavLink>
                </li>
              </ul>
              
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="CartWidget">
            <i><CartWidget/></i>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
