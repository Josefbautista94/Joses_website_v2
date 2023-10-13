import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="Project-content">
          <h1 className="h1L"> My Projects</h1>
          <div className="carousel">
            <div className="carousel-item">
              <div className="container2">
                <a href="https://coolchatapp-7488f.web.app/">
                  <div className="image-label">Messaging App</div>
                  <img
                    className="carousel-image"
                    src={require("../Images/chatapp.png")}
                    alt="Messaging App"
                  />
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container1">
                <a href="https://weather-zeta-two.vercel.app/">
                  <div className="image-label">Weather App</div>
                  <img
                    className="carousel-image"
                    src={require("../Images/weather.png")}
                    alt="Weather App"
                  />
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container1">
                <a href="https://airexp.herokuapp.com/">
                  <div className="image-label">Air Express App</div>
                  <img
                    className="carousel-image"
                    src={require("../Images/Airport.png")}
                    alt="Air Express App"
                  />
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container1">
                <a href="https://airexp.herokuapp.com/">
                  <div className="image-label">
                    2020 NYC Shoooting Statistics{" "}
                  </div>
                  <img
                    className="carousel-image"
                    src={require("../Images/IMG_9483.jpg")}
                    alt="Air Express App"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

