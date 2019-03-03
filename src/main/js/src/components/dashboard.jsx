import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroSearch from "./heroSearch";
import axios from "axios";
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/heroes")
      .then(response => this.setState({ heroes: response.data }))
      .catch(error => console.log(error));
    console.log(this.state.heroes);
  }

  render() {
    console.log(this.state.heroes);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <h3 className="text-success text-center my-3">Top Heroes</h3>
          </div>
          {this.state.heroes.slice(0, 4).map(hero => (
            <div key={hero.id} className="col mb-1 text-center">
              <Link to={"/heroes/" + hero.id}>
                <div className="bg-primary p-4 hero">
                  <h4>{hero.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <HeroSearch />
      </React.Fragment>
    );
  }
}

export default Dashboard;
