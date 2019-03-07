import React, { Component } from "react";
import axios from "axios";

class HeroDetail extends Component {
  state = {
    hero: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:8090/api/heroes/${id}`)
      .then(response => this.setState({ hero: response.data }))
      .catch(error => console.log(error));
  }

  handleChangeOfName = event => {
    const hero = { id: this.state.hero.id, name: event.target.value };
    this.setState({ hero });
  };

  handleSave = event => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:8090/api/heroes/${this.state.hero.id}`,
        this.state.hero
      )
      .then(response => {
        if (response.status === 200) this.props.history.goBack();
      })
      .catch(error => console.log(error));
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { hero } = this.state;
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h2 className="text-center text-success my-3">
              {"name" in hero ? hero.name.toUpperCase() : ""} Details
            </h2>
          </div>
          <div className="col-lg-6 col-sm-6">
            <form onSubmit={this.handleSave}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">ID</label>
                <input
                  className="form-control rounded-0 border border-primary bg-white shadow-none text-primary"
                  value={this.props.match.params.id}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  className="form-control rounded-0 border border-primary bg-white shadow-none text-primary"
                  id="heroName"
                  value={"name" in hero ? hero.name : ""}
                  onChange={this.handleChangeOfName}
                  placeholder="Name"
                />
              </div>
              <button
                onClick={this.handleGoBack}
                className="btn btn-outline-primary mr-2"
              >
                Go Back
              </button>
              <button className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetail;
