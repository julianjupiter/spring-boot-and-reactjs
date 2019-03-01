import React, { Component } from "react";
import "./heroes.css";

class Heroes extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-12">
          <h2 className="text-success text-center my-3">My Heroes</h2>
        </div>
        <div className="col-md-6 col-sm-12 offset-md-1">
          <div className="form-inline">
            <div className="form-group">
              <label for="heroName" className="col-form-label">
                Hero name:
              </label>
            </div>
            <div className="form-group mx-sm-3">
              <input
                id="heroName"
                className="form-control rounded-0 border-primary text-primary shadow-none"
                placeholder="New hero..."
              />
            </div>
            <button className="btn btn-primary rounded-0">add</button>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <ul className="heroes p-0">
            <li className="position-relative bg-light border border-primary mx-0">
              <a
                href="/detail/{{hero.id}}"
                className="text-secondary position-relative d-block"
              >
                <span className="badge d-inline-block position-relative bg-primary text-white text-right">
                  hero.id
                </span>{" "}
                hero.name
              </a>
              <button
                className="btn btn-danger btn-sm delete float-right position-relative text-white mr-1"
                title="delete hero"
              >
                x
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Heroes;
