import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <header className="Main-content">
          <h1>Welcome To My Personal Website</h1>
          <Link to="/Bio">
            <button className="Buttons">About Me</button>
          </Link>
          <div className="twit">
            {" "}
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Hoesaymyname94",
              }}
              options={{
                height: "700",
                width: "800", // set width to 600px
                theme: "dark", // set theme to "dark"
              }}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default FrontPage;
