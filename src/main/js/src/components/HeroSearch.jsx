import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./heroSearch.css";

class HeroSearch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col text-center">
          <h4 className="text-success my-3">Hero Search</h4>
          <input
            id="search-box"
            className="form-control col-lg-6 col-sm-12 mx-auto rounded-0 shadow-none text-primary"
            placeholder="Search hero..."
          />
          <ul className="search-result col-lg-6 col-sm-12 mx-auto px-0">
            <li className="text-left p-2 bg-white">
              <Link to="/detail/:hero.id" className="text-primary">
                {" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroSearch;
