import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project-page">
      <h1 className="project-title">My Projects</h1>
      <div className="carousel">
        {/* Example Project */}
<div className="carousel-item">
  <a href="https://heroversus.vercel.app/">
    <iframe 
      src="https://heroversus.vercel.app/" 
      title="Hero Versus Project" 
      width="500" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Hero Versus</div>
  </a>
</div>

<div className="carousel-item">
  <a href="https://weather-zeta-two.vercel.app/">
    <iframe 
      src="https://weather-zeta-two.vercel.app/" 
      title="Weather Project" 
      width="500" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Weather</div>
  </a>
</div>
<div className="carousel-item">
  <a href="https://coolchatapp-7488f.web.app/">
    <iframe 
      src="https://coolchatapp-7488f.web.app/" 
      title="Cool Chat App" 
      width="500" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Cool Chat App</div>
  </a>
</div>

<div className="carousel-item">
  <a href="https://airexp.herokuapp.com/">
    <iframe 
      src="https://airexp.herokuapp.com/" 
      title="Air Express Project" 
      width="500" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Air Express</div>
  </a>
</div>
        {/* Add more projects in a similar structure */}
      </div>
    </div>
  );
}

export default Project;