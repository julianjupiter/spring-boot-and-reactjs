import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLink from "./navLink";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <Link className="navbar-brand text-light" to="/">
          Tour of Heroes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/">
              <Link className="nav-link text-light" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </NavLink>
            <NavLink to="/dashboard">
              <Link className="nav-link text-light" to="/dashboard">
                Dashboard
              </Link>
            </NavLink>
            <NavLink to="/heroes">
              <Link className="nav-link text-light" to="/heroes">
                Heroes
              </Link>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
