import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <header className="Main-content">
          <h1 className="frontPageHeader">Glad you could make it to my online home!
</h1>
          <Link className  to="/Bio">
            <button className="Buttons">About Me</button>
          </Link>
          <div className="twit">
            {" "}
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Jose_FrancisB",
              }}
              options={{
                height: "500",
                width: "400", // set width to 600px
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
