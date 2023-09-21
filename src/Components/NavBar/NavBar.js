import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";
import Pdf from "../Other_Items/JoseBautista_Resume.pdf";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    showWidget: false,
  };

  toggleWidget = () => {
    this.setState((prevState) => ({
      showWidget: !prevState.showWidget,
    }));
  };

  render() {
    return (
      <div>
        <ul>
          <li className="mainPage">
            <Link to="/Front-Page">Home Page</Link>
          </li>
          <li className="Projects">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="git">
            <a
              href="https://github.com/Josefbautista94"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Out My GitHub!
            </a>
          </li>
          <li className="linkedIn">
            <a
              href="https://www.linkedin.com/in/josefbautista94/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Out My LinkedIn!
            </a>
          </li>
          <li className="contact">
            <Link to="/Contact">My Contact Info</Link>
          </li>
          <li className="resume">
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=KWotO76SuXE"
              className="name"
            >
              Jose F. Bautista
            </a>
          </li>
          <Clock className="clock" />
          <li className="codeWars">
            <img
              src="https://www.codewars.com/users/Josefbautista94/badges/large"
              alt="Codewars badge"
            />
          </li>
          {/* <li className="widget-toggle">
            <button className="Navbar-link" onClick={this.toggleWidget}>
              {this.state.showWidget ? "Hide Widget" : "Show Widget"}
            </button>
          </li> */}
        </ul>
        {this.state.showWidget && (
          <div className="twit">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Jose_FrancisB",
              }}
              options={{
                height: "500",
                width: "400",
                theme: "dark",
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return <li className="clock">{this.state.time}</li>;
  }
}

export default NavBar;
