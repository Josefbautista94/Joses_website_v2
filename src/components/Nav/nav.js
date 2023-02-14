import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Pdf from "../Other_Items/JoseBautista_Resume.pdf";

class Nav extends Component {
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
            <a href="https://google.com" className="name">
              Jose F. Bautista
            </a>
          </li>
          <li className="codeWars">
            <img
              src="https://www.codewars.com/users/Josefbautista94/badges/large"
              alt="Codewars badge"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
