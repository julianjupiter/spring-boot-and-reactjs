import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NavLink extends Component {
  render() {
    let isActive = this.props.location.pathname === this.props.to;
    let className = isActive ? "nav-item active" : "nav-item";
    return <li className={className}>{this.props.children}</li>;
  }
}

export default withRouter(NavLink);
