import React, { Component } from "react";
import "./message.css";

class Message extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Messages</h2>
          <button className="btn btn-outline-secondary rounded-0 btn-sm text-dark">
            clear
          </button>
          <div>
            <span className="badge badge-primary" />
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
