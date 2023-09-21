import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="Main-content">
          <div className= "container">
          <h1 className="frontPageHeader">
            Glad You Could Make It To My Online Home!
          </h1>
          <Link to="/Bio">
            <button className="Buttons">About Me</button>
          </Link>
         </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;