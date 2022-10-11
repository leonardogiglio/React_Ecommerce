import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../CartWidget/CartWidget.css";
import "./NavBar.css";


const NavBar = () => {

  const [search, setSearch] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              FitPoint
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/categoria/cintas">
                    Cintas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/categoria/indoor">
                    Indoor
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/categoria/elipticos">
                    Elípticos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="CartWidget">
            <i>
              <NavLink className="nav-link" to="/cart">
                <CartWidget />
              </NavLink>
            </i>
          </div>
        </nav>
      </React.Fragment>
    );
  }

export default NavBar;
