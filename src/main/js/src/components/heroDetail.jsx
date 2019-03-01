import React, { Component } from "react";

class HeroDetail extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h2 className="text-center text-success my-3"> Details</h2>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <label for="exampleInputEmail1">ID</label>
              <input
                className="form-control rounded-0 border border-primary bg-white shadow-none text-primary"
                value="{{ hero.id }}"
                disabled
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                className="form-control rounded-0 border border-primary bg-white shadow-none text-primary"
                id="heroName"
                placeholder="Name"
              />
            </div>
            <button className="btn btn-outline-primary mr-2 rounded-0">
              go back
            </button>
            <button className="btn btn-primary rounded-0">save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetail;
