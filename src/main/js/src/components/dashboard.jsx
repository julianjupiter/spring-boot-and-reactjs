import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HeroSearch } from "./HeroSearch";
import "./dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <h3 className="text-success text-center my-3">Top Heroes</h3>
          </div>
          <div className="col mb-1 text-center">
            <Link to="/heroes/:id">
              <div className="bg-primary p-4 hero">
                <h4>hero.name</h4>
              </div>
            </Link>
          </div>
        </div>
        <HeroSearch />
      </React.Fragment>
    );
  }
}

export default Dashboard;
