import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./heroes.css";

class Heroes extends Component {
  state = {
    hero: {},
    heroes: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/heroes")
      .then(response => this.setState({ heroes: response.data }))
      .catch(error => console.log(error));
  }

  handleChangeOfName = event => {
    const hero = { name: event.target.value };
    this.setState({ hero });
  };

  handleSave = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8090/api/heroes", this.state.hero)
      .then(response => {
        if (response.status === 201 && response.data != null) {
          let { heroes } = this.state;
          heroes.push(response.data);
          this.setState({ heroes });
        }
      })
      .catch(error => console.log(error));
  };

  handleDelete = heroId => {
    console.log("delete");
    axios
      .delete(`http://localhost:8090/api/heroes/${heroId}`)
      .then(response => {
        if (response.status === 204) {
          const heroes = this.state.heroes.filter(hero => hero.id !== heroId);
          this.setState({ heroes });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-12">
          <h2 className="text-success text-center my-3">My Heroes</h2>
        </div>
        <div className="col-md-6 col-sm-12 offset-md-1">
          <form onSubmit={this.handleSave}>
            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="heroName" className="col-form-label">
                  Hero name:
                </label>
              </div>
              <div className="form-group mx-sm-3">
                <input
                  id="heroName"
                  className="form-control rounded-0 border-primary text-primary shadow-none"
                  onChange={this.handleChangeOfName}
                  placeholder="New hero..."
                />
              </div>
              <button className="btn btn-primary rounded-0">add</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-sm-12">
          <ul className="heroes p-0">
            {this.state.heroes.map(hero => (
              <li
                key={hero.id}
                className="position-relative bg-light border border-primary mx-0"
              >
                <Link
                  to={"/heroes/" + hero.id}
                  className="text-secondary position-relative d-block"
                >
                  <span className="badge d-inline-block position-relative bg-primary text-white text-right">
                    {hero.id}
                  </span>{" "}
                  {hero.name}
                </Link>
                <button
                  className="btn btn-danger btn-sm delete float-right position-relative text-white mr-1"
                  title="delete hero"
                  onClick={() => this.handleDelete(hero.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Heroes;
