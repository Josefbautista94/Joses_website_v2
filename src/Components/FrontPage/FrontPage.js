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
            <button className="Buttons"> About Me</button>
          </Link>
        </header>

        <div>
          <a
            class="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/Hoesaymyname94?ref_src=twsrc%5Etfw"
          >
            Tweets by Hoesaymyname94
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    );
  }
}

export default FrontPage;
