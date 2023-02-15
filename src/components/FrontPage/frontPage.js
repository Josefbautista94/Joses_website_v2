import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";
class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="Main-content">
          <h1> Welcome To My Personal Website </h1>
          <Link to="/Bio">
            <button className="Buttons"> Bio</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default FrontPage;
