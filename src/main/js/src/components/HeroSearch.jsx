import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./heroSearch.css";

class HeroSearch extends Component {
  state = {
    heroes: []
  };

  handleChangeOfName = event => {
    const name = event.target.value;
    axios
      .get(`http://localhost:8090/api/heroes?name=${name}`)
      .then(response => this.setState({ heroes: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="row">
        <div className="col text-center">
          <h4 className="text-success my-3">Hero Search</h4>
          <input
            id="search-box"
            className="form-control col-lg-6 col-sm-12 mx-auto rounded-0 shadow-none text-primary"
            onChange={this.handleChangeOfName}
            placeholder="Search hero..."
          />
          <ul className="search-result col-lg-6 col-sm-12 mx-auto px-0">
            {this.state.heroes.map(hero => (
              <li key={hero.id} className="text-left p-2 bg-white">
                <Link to={"/heroes/" + hero.id} className="text-primary">
                  {hero.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroSearch;
